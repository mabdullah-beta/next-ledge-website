# Version crawler avec Best First Crawling Strategy en 1er + Filtrage avancé des URLs à tester

from crawl4ai import AsyncWebCrawler, CrawlerMonitor, DisplayMode
from crawl4ai.async_configs import BrowserConfig, CrawlerRunConfig
from crawl4ai.content_filter_strategy import PruningContentFilter
from crawl4ai.markdown_generation_strategy import DefaultMarkdownGenerator
from crawl4ai.deep_crawling import BestFirstCrawlingStrategy
from crawl4ai.deep_crawling.scorers import KeywordRelevanceScorer
from crawl4ai.deep_crawling import FilterChain, DomainFilter
from crawl4ai import CacheMode
from bs4 import BeautifulSoup
import requests
from typing import Optional
import re
import os
import json
import asyncio
import time
import asyncpg
import traceback
from urllib.parse import urljoin
from pymongo import MongoClient
from datetime import datetime, timezone
from bson import ObjectId
from dotenv import load_dotenv
from openai import AsyncOpenAI

# Chargement des variables d'environnement
load_dotenv()

# Récupération des variables d'environnement MongoDB
MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017/")
MONGO_DB_NAME = os.getenv("MONGO_DB_NAME", "admin")

# Récupération des variables d'environnement MongoDB
DATABASE_URL=os.getenv("DATABASE_URL_UNPOOLED")

async def get_pg_pool():
    if not hasattr(get_pg_pool, "pool"):
        get_pg_pool.pool = await asyncpg.create_pool(
            dsn=DATABASE_URL,
            max_size=10
        )
    return get_pg_pool.pool

async def generate_embedding(text: str):
    client = AsyncOpenAI(api_key=os.getenv("OPENAI_API_KEY"))
    response = await client.embeddings.create(
        model="text-embedding-3-small",
        input=text
    )
    return response.data[0].embedding


# -----------------------------------------------------------------------
# 1. Fonction parse_sitemap : récupère et parse un sitemap XML
# -----------------------------------------------------------------------
def parse_sitemap(sitemap_url: str) -> list[str]:
    """
    Récupère le contenu d'un sitemap XML et renvoie une liste d'URLs découvertes,
    en excluant :
    - les fichiers médias (.jpeg, .png, .xml, etc.)
    - les pages légales et conditions
    """
    url_list = []
    excluded_patterns = [
        "mentions-legales",
        "politique-de-cookies",
        "conditions-generales-de-vente",
        "cgv",
        "politique-de-confidentialite",
        "mentions-legales",
        "privacy-policy",
        "legal-notice",
        "terms-of-service",
        "terms-and-conditions",
        "Confidentialité"
    ]
    
    try:
        # Ajout d'un User-Agent pour éviter les erreurs 403
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        resp = requests.get(sitemap_url, headers=headers, timeout=10)
        if resp.status_code == 200 and resp.content:
            # Vérifier si le contenu est au format XML ou HTML
            content_type = resp.headers.get('Content-Type', '').lower()
            if 'xml' in content_type:
                # Traitement XML standard
                soup = BeautifulSoup(resp.content, "xml")
                loc_tags = soup.find_all("loc")
                
                # Vérifier si le sitemap contient des références à d'autres sitemaps
                sitemap_refs = soup.find_all("sitemap")
                if sitemap_refs:
                    for sitemap_ref in sitemap_refs:
                        sitemap_loc = sitemap_ref.find("loc")
                        if sitemap_loc and sitemap_loc.text:
                            # Récupérer le contenu du sous-sitemap
                            sub_sitemap_url = sitemap_loc.text.strip()
                            sub_resp = requests.get(sub_sitemap_url, headers=headers, timeout=10)
                            if sub_resp.status_code == 200:
                                sub_soup = BeautifulSoup(sub_resp.content, "xml")
                                sub_loc_tags = sub_soup.find_all("loc")
                                for loc in sub_loc_tags:
                                    if not loc.text:
                                        continue
                                    candidate_url = loc.text.strip().lower()
                                    
                                    # Vérification des extensions à exclure
                                    if candidate_url.endswith((".jpeg", ".png", ".xml", ".webp", ".jpg", ".svg", ".api", ".asp", ".gif", ".pdf", ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx", ".zip", ".rar", ".7z", ".tar", ".gz", ".bz2", ".iso", ".dmg", ".exe", ".dll", ".so", ".lib", ".a", ".dylib", ".rpm", ".deb", ".apk", ".ipa", ".app", ".jar", ".war", ".ear", ".whl", ".egg", ".pyc", ".pyo", ".pyd", ".py", ".pyw", ".pyz", ".pyt", ".pyi", ".pyx")):
                                        continue
                                        
                                    # Vérification des patterns à exclure
                                    if any(pattern in candidate_url for pattern in excluded_patterns):
                                        continue

                                    # Convertir les URLs relatives en URLs absolues
                                    url_to_add = loc.text.strip()
                                    if not url_to_add.startswith(('http://', 'https://')):
                                        url_to_add = urljoin(sub_sitemap_url, url_to_add)
                                    url_list.append(url_to_add)
            else:
                # Essayer de parser comme HTML si ce n'est pas du XML
                soup = BeautifulSoup(resp.content, "html.parser")
                loc_tags = soup.find_all("a", href=True)
                
                # Si c'est du HTML, extraire les URLs des balises <a>
                if loc_tags:
                    for loc in loc_tags:
                        href = loc['href'].strip()
                        if href and not any(pattern in href.lower() for pattern in excluded_patterns):
                            if not href.endswith((".jpeg", ".png", ".xml", ".webp", ".jpg", ".svg", ".api", ".asp", ".gif", ".pdf", ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx", ".zip", ".rar", ".7z", ".tar", ".gz", ".bz2", ".iso", ".dmg", ".exe", ".dll", ".so", ".lib", ".a", ".dylib", ".rpm", ".deb", ".apk", ".ipa", ".app", ".jar", ".war", ".ear", ".whl", ".egg", ".pyc", ".pyo", ".pyd", ".py", ".pyw", ".pyz", ".pyt", ".pyi", ".pyx")):
                                url_list.append(href)
                    return url_list
            
            # Vérifier si des balises <loc> ont été trouvées
            if loc_tags:
                for loc in loc_tags:
                    if not loc.text:
                        continue
                    candidate_url = loc.text.strip().lower()

                    # Vérification des extensions à exclure
                    if candidate_url.endswith((".jpeg", ".png", ".xml", ".webp", ".jpg", ".svg", ".api", ".asp", ".gif", ".pdf", ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx", ".zip", ".rar", ".7z", ".tar", ".gz", ".bz2", ".iso", ".dmg", ".exe", ".dll", ".so", ".lib", ".a", ".dylib", ".rpm", ".deb", ".apk", ".ipa", ".app", ".jar", ".war", ".ear", ".whl", ".egg", ".pyc", ".pyo", ".pyd", ".py", ".pyw", ".pyz", ".pyt", ".pyi", ".pyx")):
                        continue
                        
                    # Vérification des patterns à exclure
                    if any(pattern in candidate_url for pattern in excluded_patterns):
                        continue

                    # Convertir les URLs relatives en URLs absolues
                    url_to_add = loc.text.strip()
                    if not url_to_add.startswith(('http://', 'https://')):
                        # Si c'est une URL relative, la convertir en absolue
                        url_to_add = urljoin(sitemap_url, url_to_add)
                    url_list.append(url_to_add)
            else:
                # Si aucune balise <loc> n'est trouvée, utiliser une méthode alternative
                # Extraire les URLs directement du texte
                urls = re.findall(r'https?://[^\s]+', resp.text)
                for candidate_url in urls:
                    candidate_url = candidate_url.strip().lower()
                    # Vérification des extensions à exclure
                    if candidate_url.endswith((".jpeg", ".png", ".xml", ".webp", ".jpg", ".svg", ".api", ".asp", ".gif", ".pdf", ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx", ".zip", ".rar", ".7z", ".tar", ".gz", ".bz2", ".iso", ".dmg", ".exe", ".dll", ".so", ".lib", ".a", ".dylib", ".rpm", ".deb", ".apk", ".ipa", ".app", ".jar", ".war", ".ear", ".whl", ".egg", ".pyc", ".pyo", ".pyd", ".py", ".pyw", ".pyz", ".pyt", ".pyi", ".pyx")):
                        continue
                        
                    # Vérification des patterns à exclure
                    if any(pattern in candidate_url for pattern in excluded_patterns):
                        continue

                    url_list.append(candidate_url)
        else:
            print(f"[-] Impossible de récupérer {sitemap_url} (status={resp.status_code})")
    except Exception as e:
        print(f"[-] Erreur lors de la récupération du sitemap {sitemap_url} : {e}")
    return url_list

# -----------------------------------------------------------------------
# Fonction extract_base_url : extrait l'URL de base d'une URL complète
# -----------------------------------------------------------------------
def extract_base_url(url: str) -> str:
    """
    Extrait l'URL de base en supprimant tout ce qui suit le premier / après le domaine
    principal (en excluant le protocole https://).
    
    Args:
        url: L'URL complète
        
    Returns:
        L'URL de base (avec le protocole)
    """
    # Vérifier si l'URL est valide
    if not url.startswith(('http://', 'https://')):
        url = 'https://' + url
    
    # Extraire le domaine
    match = re.match(r'(https?://[^/]+)', url)
    if match:
        return match.group(1)
    return url

# -----------------------------------------------------------------------
# Fonction check_robots_txt : vérifie le robots.txt pour trouver le sitemap
# -----------------------------------------------------------------------
def check_robots_txt(base_url: str) -> Optional[str]:
    """
    Analyse le fichier robots.txt pour trouver l'URL du sitemap.
    
    Args:
        base_url: L'URL de base du site
        
    Returns:
        L'URL du sitemap si elle est trouvée, None sinon
    """
    robots_url = f"{base_url}/robots.txt"
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        resp = requests.get(robots_url, headers=headers, timeout=10)
        if resp.status_code == 200:
            # Chercher une ligne Sitemap: dans le robots.txt
            for line in resp.text.splitlines():
                if line.lower().startswith('sitemap:'):
                    sitemap_url = line.split(':', 1)[1].strip()
                    print(f"[+] Sitemap trouvé dans robots.txt: {sitemap_url}")
                    return sitemap_url
            print(f"[-] Aucun sitemap trouvé dans robots.txt: {robots_url}")
        else:
            print(f"[-] Impossible d'accéder au fichier robots.txt: {robots_url} (status={resp.status_code})")
    except Exception as e:
        print(f"[-] Erreur lors de l'accès au fichier robots.txt: {e}")
    return None

def filter_urls_by_language(urls: list[str]) -> list[str]:
    """
    Filtre les URLs pour ne conserver que celles en français ou sans indicatif de langue :
    - Les URLs avec le préfixe /en/ sont toujours exclues
    - Si des URLs en français (/fr/) existent, les conserver prioritairement
    - Les URLs sans indicatif de langue sont toujours conservées
    
    Args:
        urls: Liste d'URLs à filtrer
        
    Returns:
        Liste d'URLs filtrées selon les règles de langue
    """
    if not urls:
        return []
        
    # Séparer les URLs par type : français, sans langue, autres langues
    urls_fr = [url for url in urls if '/fr/' in url]
    urls_without_lang = [url for url in urls if not any(f'/{lang}/' in url for lang in ['fr', 'en', 'it', 'de', 'es', 'pt', 'nl'])]
    
    # Créer la liste finale d'URLs
    filtered_urls = []
    
    # Ajouter les URLs en français si elles existent
    filtered_urls.extend(urls_fr)
    
    # Ajouter les URLs sans indicatif de langue
    filtered_urls.extend(urls_without_lang)
    
    # Si aucune URL française ou sans langue n'est trouvée, utiliser les URLs d'origine 
    # mais exclure toujours les URLs en anglais
    if not filtered_urls:
        filtered_urls = [url for url in urls if '/en/' not in url]
    else:
        # S'assurer que toutes les URLs avec '/en/' sont bien exclues
        filtered_urls = [url for url in filtered_urls if '/en/' not in url]
    
    print(f"[+] Filtrage par langue: {len(urls)} URLs -> {len(filtered_urls)} URLs (conservées: FR + sans langue)")
    return filtered_urls

def get_sitemap_urls(url: str) -> list[str]:
    """
    Tente de récupérer les URLs depuis différents formats de sitemap possibles
    et retourne jusqu'à 100 URLs valides dans l'ordre où elles apparaissent.
    Si le site contient plus de 80 URLs, exclut les URLs contenant /blog/ et les codes de langue (/fr/, /de/, /es/, etc.)
    
    Stratégie de recherche du sitemap:
    1. Extraire l'URL de base
    2. Tester {base_url}/sitemap.xml
    3. Tester {base_url}/page-sitemap.xml
    4. Si pas trouvé, vérifier robots.txt pour trouver l'URL du sitemap
    """
    all_urls = []  # Changed from set() to list() to preserve order
    
    # 1. Extraire l'URL de base
    base_url = extract_base_url(url)
    print(f"[+] URL de base extraite: {base_url}")
    
    # 2. Tester les formats standard de sitemap
    sitemap_patterns = [
        f"{base_url}/sitemap.xml",
        f"{base_url}/page-sitemap.xml",
    ]
    
    for sitemap_url in sitemap_patterns:
        print(f"[+] Test du sitemap: {sitemap_url}")
        urls = parse_sitemap(sitemap_url)
        if urls:
            print(f"[+] {len(urls)} URLs trouvées dans {sitemap_url}")
            all_urls.extend(urls)
            break  # On arrête si on a trouvé des URLs
    
    # 3. Si aucune URL trouvée, vérifier robots.txt
    if not all_urls:
        print(f"[-] Aucune URL trouvée dans les sitemaps standards. Vérification du robots.txt...")
        sitemap_url = check_robots_txt(base_url)
        if sitemap_url:
            urls = parse_sitemap(sitemap_url)
            if urls:
                print(f"[+] {len(urls)} URLs trouvées dans le sitemap du robots.txt")
                all_urls.extend(urls)

    # 4. Filtrer les URLs par langue
    print("[+] Filtrage des URLs par langue")
    all_urls = filter_urls_by_language(all_urls)
    print(f"[+] {len(all_urls)} URLs restantes après filtrage par langue")

    # 5. Si plus de 80 URLs, filtrer les URLs contenant /blog/
    if len(all_urls) > 80:
        filtered_urls = []
        for url in all_urls:
            url_lower = url.lower()
            if '/blog/' not in url_lower:
                filtered_urls.append(url)
        all_urls = filtered_urls

    # 6. S'assurer que toutes les URLs sont absolues avant de les retourner
    final_urls = []
    for url in all_urls[:100]:  # Changé de 40 à 100 URLs
        if not url.startswith(('http://', 'https://')):
            # Si c'est une URL relative, la convertir en absolue
            url = urljoin(base_url + '/', url)
        final_urls.append(url)

    return final_urls

def clean_markdown_content(content: str, verbose: bool = False) -> str:
    """
    Nettoie le contenu Markdown en supprimant les liens et en conservant uniquement le texte pertinent.

    Args:
        content: Le contenu Markdown à nettoyer
        verbose: Si True, affiche les logs de debug (default: False)

    Returns:
        Le contenu nettoyé
    """
    if verbose:
        print(f"[DEBUG] Début du nettoyage du contenu Markdown")
        print(f"[DEBUG] Taille du contenu avant nettoyage: {len(content)} caractères")

    # Conserve le texte des ancres en supprimant les URLs
    content = re.sub(r'\[(.*?)\]\(.*?\)', r'\1', content)

    # Supprime les liens directs et les remplace par des espaces
    content = re.sub(r'<https?://[^>]+>', ' ', content)

    # Supprime les balises d'images Markdown et les remplace par des espaces
    # Amélioration pour gérer les caractères spéciaux ou échappés
    content = re.sub(r'!\[.*?\]\(.*?\)', ' ', content)

    # Réduit les sauts de ligne multiples (3 ou plus) à seulement deux
    content = re.sub(r'\n{3,}', '\n\n', content)

    # Traite ligne par ligne pour préserver celles commençant par '## Page'
    cleaned_lines = []
    for line in content.splitlines():
        if line.startswith('## Page'):
            cleaned_lines.append(line)
        else:
            cleaned_lines.append(line)

    # Prépare le contenu nettoyé
    cleaned_content = '\n'.join(cleaned_lines)

    if verbose:
        print(f"[DEBUG] Taille du contenu après nettoyage: {len(cleaned_content)} caractères")
        print("[DEBUG] Nettoyage terminé")

    return cleaned_content


def chunk_text_markdown(text: str, max_tokens: int = 500):
    chunks = []
    words = text.split()
    current = []

    for word in words:
        current.append(word)
        if len(current) >= max_tokens:
            chunks.append(" ".join(current))
            current = []

    if current:
        chunks.append(" ".join(current))

    return chunks



async def save_chunks_to_postgres(url: str, content: str, assistant_id: int, status: str = "success"):
    """
    Splits extracted content into chunks, embeds them, and saves
    into the documentchunks table in Neon.
    """
    try:
        pool = await get_pg_pool()
        print("[DEBUG] START SAVING CHUNKS *********** ")
        
        if status == "success":
            cleaned_content = clean_markdown_content(content)
        else:
            cleaned_content = content
        
        # Split into chunks
        chunks = chunk_text_markdown(cleaned_content, max_tokens=350)
        async with pool.acquire() as conn:
            async with conn.transaction():
                for i, chunk in enumerate(chunks):
                    emb = await generate_embedding(chunk)

                    # Convert to JSON strings for postgres JSONB
                    json_emb = json.dumps(emb)
                    json_metadata = json.dumps({"source_url": url})


                    await conn.execute("""
                        INSERT INTO documentchunks 
                            (agent_id, document_name, chunk_text, chunk_number, embeddings, metadata, created_at)
                        VALUES ($1, $2, $3, $4, $5, $6, NOW())
                    """, 
                    assistant_id,
                    url,            # document_name
                    chunk,          # chunk_text
                    i,              # chunk number
                    json_emb,       # JSONB embedding
                    json_metadata  # metadata JSONB
                    )

        print(f"[+] Saved {len(chunks)} chunks for {url}")
        return len(chunks)
    except Exception as e:
        print("[ERROR] SAVING CHUNKS *********** ", e)
        return

def save_to_mongodb(url: str, content: str, assistant_id: int, status: str = "success"):
    """
    Sauvegarde les résultats du scraping dans MongoDB.

    Args:
        url: L'URL scrappée
        content: Le contenu extrait
        assistant_id: L'ID de l'assistant associé
        status: L'état du traitement (par défaut: "success")

    Returns:
        L'ID du document créé ou None en cas d'erreur
    """
    try:
        # Nettoyer le contenu avant la sauvegarde (seulement si succès)
        if status == "success":
            cleaned_content = clean_markdown_content(content)
        else:
            cleaned_content = content

        # Connexion à MongoDB en utilisant les variables d'environnement
        client = MongoClient(MONGO_URI, maxPoolSize=50, minPoolSize=10)  # Pool de connexions optimisé
        db = client[MONGO_DB_NAME]  # Utilisation de la notation indexée pour accéder à la base de données
        collection = db.scrappedurls  # Nom de collection en minuscules pour correspondre au schéma Mongoose
        
        # Création d'un nouvel ObjectId pour assistant_id s'il est fourni sous forme de chaîne
        assistant_id_obj = None
        if assistant_id:
            try:
                assistant_id_obj = ObjectId(assistant_id)
                print(f"[DEBUG] ID d'assistant converti en ObjectId: {assistant_id_obj}")
            except Exception as e:
                print(f"[ERROR] Impossible de convertir assistant_id '{assistant_id}' en ObjectId: {e}")
                # Si l'ID n'est pas valide, on continue sans assistant_id
        
        # Génération des dates
        current_time = datetime.now(timezone.utc)
        
        # Vérification de contenu non None
        if cleaned_content is None:
            cleaned_content = f"[Contenu vide pour {url}]"
        
        # Création du document
        document = {
            "url": url,
            "assistant_id": assistant_id_obj,
            "content": cleaned_content,
            "status": status,
            "createdAt": current_time,
            "updatedAt": current_time
        }
        
        # Insertion dans la collection
        result = collection.insert_one(document)
        
        print(f"[+] Document sauvegardé dans MongoDB avec ID: {result.inserted_id}")
        return result.inserted_id
        
    except Exception as e:
        print(f"[-] Erreur lors de la sauvegarde dans MongoDB: {e}")
        # Afficher plus de détails sur l'erreur
        traceback.print_exc()
        return None


async def save_chunks_batch_to_postgres(items: list[tuple], assistant_id: int):
    """
    items = [ (url, cleaned_content, status) ]
    """
    total_chunks = 0
    for url, content, status in items:
        if status != "success":
            continue
        chunks_saved = await save_chunks_to_postgres(url, content, assistant_id, status)
        total_chunks += chunks_saved

    print(f"[+] Total chunks saved to Postgres: {total_chunks}")
    return total_chunks


async def save_to_mongodb_batch(items: list[tuple], assistant_id: int):
    """
    Sauvegarde un lot de résultats dans MongoDB de manière optimisée.

    Args:
        items: Liste de tuples (url, content, status)
        assistant_id: L'ID de l'assistant

    Returns:
        Nombre de documents sauvegardés avec succès
    """
    if not items:
        return 0

    saved_count = 0
    try:
        start_time = time.time()

        # Fonction pour nettoyer le contenu de manière asynchrone
        async def clean_content_async(item):
            url, content, status = item
            if status == "success" and content:
                # Exécuter le nettoyage dans un thread pour ne pas bloquer
                loop = asyncio.get_event_loop()
                cleaned_content = await loop.run_in_executor(
                    None,
                    clean_markdown_content,
                    content,
                    False  # verbose=False pour éviter les logs excessifs
                )
                return (url, cleaned_content, status)
            else:
                return (url, content, status)

        # Nettoyer tous les contenus en parallèle
        print(f"[+] Nettoyage de {len(items)} contenus en parallèle...")
        cleaning_tasks = [clean_content_async(item) for item in items]
        cleaned_items = await asyncio.gather(*cleaning_tasks)

        cleaning_time = time.time() - start_time
        print(f"[+] Nettoyage terminé en {cleaning_time:.2f} secondes")

        # Connexion unique à MongoDB pour le lot
        client = MongoClient(MONGO_URI, maxPoolSize=50, minPoolSize=10)
        db = client[MONGO_DB_NAME]
        collection = db.scrappedurls

        # Préparer tous les documents
        documents = []
        current_time = datetime.now(timezone.utc)
        assistant_id_obj = ObjectId(assistant_id) if assistant_id else None

        for url, cleaned_content, status in cleaned_items:
            if cleaned_content is None:
                cleaned_content = f"[Contenu vide pour {url}]"

            documents.append({
                "url": url,
                "assistant_id": assistant_id_obj,
                "content": cleaned_content,
                "status": status,
                "createdAt": current_time,
                "updatedAt": current_time
            })

        # Insertion en lot
        if documents:
            result = collection.insert_many(documents)
            saved_count = len(result.inserted_ids)
            print(f"[+] {saved_count} documents sauvegardés en lot dans MongoDB")

        client.close()

    except Exception as e:
        print(f"[-] Erreur lors de la sauvegarde en lot dans MongoDB: {e}")

    return saved_count

async def crawl_urls(urls: list[str], assistant_id: int = None, existing_results: list = None, job_id: str = None) -> list:
    """
    Crawle une liste d'URLs avec traitement parallèle optimisé

    Args:
        urls: Liste des URLs à crawler
        assistant_id: ID de l'assistant associé (optionnel)
        existing_results: Résultats déjà crawlés à réutiliser (évite le double crawling)
        job_id: ID du job de scraping pour les mises à jour de statut (optionnel)

    Returns:
        Liste des résultats du crawl
    """

    # IMPORTANT: Si on a déjà des résultats, les retourner directement (évite double crawling)
    if existing_results:
        print(f"[DEBUG] Réutilisation de {len(existing_results)} résultats existants - PAS de double crawling")
        return existing_results

    print(f"[DEBUG] Démarrage du crawl parallèle pour {len(urls)} URLs")

    browser_config = BrowserConfig(
        verbose=True,
        text_mode=True,
        light_mode=True
    )
    print("[DEBUG] Browser config initialisée")

    run_config = CrawlerRunConfig(
        exclude_external_links=True,
        excluded_tags=['form', 'nav', 'sidebar', 'menu', 'ads', 'footer', 'cookiebanner', 'cmplz-cookiebanner',
                      'comment', 'share', 'related', 'recommended', 'popular', 'trending', 'cookie', 'cookie-policy'],
        markdown_generator=DefaultMarkdownGenerator(
            content_filter=PruningContentFilter(threshold=0.48, threshold_type="fixed", min_word_threshold=0)
        ),
        process_iframes=False,
        remove_forms=True,
        only_text=True,
        exclude_external_images=True,
        exclude_social_media_links=True,
        cache_mode=CacheMode.BYPASS
    )

    monitor = CrawlerMonitor(
        max_visible_rows=10,
        display_mode=DisplayMode.DETAILED
    )

    results = []
    saved_urls_count = 0
    print("[DEBUG] Démarrage du crawl avec AsyncWebCrawler")

    # Fonction pour crawler une URL individuelle avec semaphore
    async def crawl_single_url(crawler, url, index, semaphore):
        async with semaphore:  # Limite la concurrence
            print(f"[DEBUG] Crawling URL {index}/{len(urls)}: {url}")
            try:
                result = await crawler.arun(url=url, config=run_config, browser_config=browser_config)

                # Extraction du contenu pour MongoDB
                content = None
                status = "failed"

                if result.success:
                    status = "success"
                    if hasattr(result, 'extracted_content') and result.extracted_content is not None:
                        content = result.extracted_content
                    elif hasattr(result, 'markdown_v2') and result.markdown_v2 and hasattr(result.markdown_v2, 'raw_markdown'):
                        content = result.markdown_v2.raw_markdown
                    elif hasattr(result, 'markdown') and result.markdown:
                        content = result.markdown
                    else:
                        content = f"[Contenu non disponible pour {url}]"
                        status = "partial"
                else:
                    content = f"[Échec du crawling pour {url}]"

                print(f"[DEBUG] URL {index} terminée")
                # Retourner les données pour sauvegarde en lot
                return result, (url, content, status)
            except Exception as e:
                print(f"[ERROR] Exception crawling URL {index}: {str(e)}")
                return None, None

    # Traitement parallèle avec semaphore pour limiter la concurrence
    BATCH_SIZE = 15  # Traiter 15 URLs à la fois
    MAX_CONCURRENT = 10  # Mais seulement 20 s'exécutent simultanément

    async with AsyncWebCrawler(config=browser_config, monitor=monitor, run_config=run_config) as crawler:
        # Traiter les URLs par lots
        for batch_start in range(0, len(urls), BATCH_SIZE):
            batch_end = min(batch_start + BATCH_SIZE, len(urls))
            batch_urls = urls[batch_start:batch_end]

            print(f"[DEBUG] Traitement du lot {batch_start+1}-{batch_end} sur {len(urls)} URLs")
            print(f"[DEBUG] Max concurrent dans ce lot: {MAX_CONCURRENT}")

            # Créer un semaphore pour limiter la concurrence
            semaphore = asyncio.Semaphore(MAX_CONCURRENT)

            # Créer les tâches pour ce lot
            tasks = []
            for i, url in enumerate(batch_urls, batch_start):
                task = asyncio.create_task(crawl_single_url(crawler, url, i+1, semaphore))
                tasks.append(task)

            # Attendre que ce lot se termine
            batch_results = await asyncio.gather(*tasks, return_exceptions=True)

            # Collecter les données pour sauvegarde en lot
            batch_to_save = []
            for result_tuple in batch_results:
                if isinstance(result_tuple, Exception):
                    print(f"[ERROR] Exception in processing: {str(result_tuple)}")
                    results.append(None)
                elif result_tuple is None or result_tuple[0] is None:
                    results.append(None)
                else:
                    result, data = result_tuple
                    results.append(result)
                    if data and assistant_id:
                        batch_to_save.append(data)

            # Sauvegarder le lot en une seule fois
            if batch_to_save and assistant_id:
                saved_count = await save_chunks_batch_to_postgres(batch_to_save, assistant_id)
                saved_urls_count += saved_count
                print(f"[DEBUG] {saved_count} URLs sauvegardées en lot dans MongoDB")

            # Update job status if job_id is provided
            if job_id:
                try:
                    # Direct MongoDB update to avoid circular import
                    client = MongoClient(MONGO_URI)
                    db = client[MONGO_DB_NAME]
                    db["scraping_jobs"].update_one(
                        {"_id": ObjectId(job_id)},
                        {"$set": {
                            "processing_step": 3,
                            "step_message": f"Extraction en cours: {len(results)}/{len(urls)} pages...",
                            "urls_crawled": len(results),
                            "urls_saved": saved_urls_count,
                            "updatedAt": datetime.now(timezone.utc)
                        }}
                    )
                    client.close()
                    print(f"[JOB UPDATE] Step 3: {len(results)}/{len(urls)} pages crawled")
                except Exception as e:
                    print(f"[WARNING] Could not update job status: {str(e)}")

            print(f"[DEBUG] Lot {batch_start+1}-{batch_end} terminé, {len(results)} URLs traitées au total")

    print(f"[DEBUG] Crawl parallèle terminé avec {len(results)} résultats")
    print(f"[DEBUG] {saved_urls_count}/{len(urls)} URLs sauvegardées dans MongoDB")
    return results

def save_to_markdown(results: list, output_file: str):
    print(f"[DEBUG] Sauvegarde de {len(results)} résultats dans {output_file}")
    successful_results = sum(1 for r in results if r.success)
    print(f"[DEBUG] Nombre de résultats réussis: {successful_results}")
    
    # Vérifier s'il y a des résultats réussis
    if successful_results == 0:
        print("[WARNING] Aucun résultat réussi à sauvegarder")
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write("# Résultats du crawling\n\nAucun contenu n'a pu être extrait correctement des URLs crawlées.\n")
        return
    
    with open(output_file, 'w', encoding='utf-8') as f:
        for i, result in enumerate(results, 1):
            if result.success:
                print(f"[DEBUG] Traitement du résultat {i}")
                f.write(f"# {result.url}\n\n")
                
                # Vérifier si extracted_content existe et n'est pas None
                content = None
                if hasattr(result, 'extracted_content') and result.extracted_content is not None:
                    content = result.extracted_content
                    print(f"[DEBUG] Utilisation de extracted_content ({len(content)} caractères)")
                # Sinon, essayer d'utiliser markdown ou fit_markdown
                elif hasattr(result, 'markdown_v2') and result.markdown_v2 and hasattr(result.markdown_v2, 'raw_markdown'):
                    content = result.markdown_v2.raw_markdown
                    print(f"[DEBUG] Utilisation de markdown_v2.raw_markdown ({len(content)} caractères)")
                elif hasattr(result, 'markdown') and result.markdown:
                    content = result.markdown
                    print(f"[DEBUG] Utilisation de markdown ({len(content)} caractères)")
                # En dernier recours, utiliser le HTML
                elif hasattr(result, 'html') and result.html:
                    content = f"```html\n{result.html[:1000]}...\n```\n\n[Contenu HTML trop long pour être affiché entièrement]"
                    print(f"[DEBUG] Utilisation de html (tronqué)")
                else:
                    content = "[Aucun contenu disponible pour cette URL]"
                    print(f"[DEBUG] Aucun contenu disponible pour cette URL")
                
                # Vérifier si le contenu est vide ou trop court
                if not content or len(content.strip()) < 50:
                    content = f"[Contenu trop court ou vide pour l'URL: {result.url}]"
                
                f.write(f"{content}\n\n")
                f.write("---\n\n")
            else:
                print(f"[DEBUG] Résultat {i} ignoré (échec)")
                # Optionnel: on peut aussi enregistrer les échecs pour information
                # f.write(f"# {result.url} (échec)\n\n")
                # f.write(f"Erreur: {result.error_message if hasattr(result, 'error_message') else 'Raison inconnue'}\n\n")
                # f.write("---\n\n")
                pass
        
        # Si le fichier est vide ou presque vide, ajouter un message par défaut
        f.seek(0, os.SEEK_END)
        if f.tell() < 100:  # Si le fichier fait moins de 100 octets
            f.seek(0)
            f.write("# Résultats du crawling\n\nLe contenu extrait des URLs est insuffisant ou inexistant.\n")

def debug_result(result):
    """
    Affiche des informations de débogage sur le résultat du crawl
    """
    if result.success:
        print(f"\n[DEBUG] URL: {result.url}")
        print("[DEBUG] Contenu extrait:")
        print("-" * 50)
        # Vérifier si extracted_content existe et n'est pas None
        if hasattr(result, 'extracted_content') and result.extracted_content is not None:
            # Commenté: affichage du contenu extrait
            print(result.extracted_content[:500] + "..." if len(result.extracted_content) > 500 else result.extracted_content)
            pass
        else:
            print("[DEBUG] Aucun contenu extrait (extracted_content est None)")
            # Vérifier si d'autres attributs sont disponibles
            if hasattr(result, 'markdown') and result.markdown:
                print("[DEBUG] Contenu markdown disponible")
                pass
            elif hasattr(result, 'html') and result.html:
                print("[DEBUG] Contenu HTML disponible")
                pass
            else:
                print("[DEBUG] Aucun contenu alternatif disponible")
                pass
    else:
        print(f"\n[DEBUG] Échec pour {result.url}: {result.error_message}")
        pass


async def crawl_without_sitemap(base_url: str, job_id: str = None) -> tuple[list[str], list]:
    """
    Découvre les URLs d'un site sans sitemap.
    NOUVELLE APPROCHE: Découverte rapide des URLs sans crawling complet.

    Args:
        base_url: L'URL de base du site
        job_id: ID du job pour les mises à jour de statut (optionnel)

    Returns:
        tuple: (list[str] of URLs, list of crawled results if available)
    """
    print(f"[+] Aucun sitemap trouvé. Découverte rapide des URLs depuis {base_url}")

    # Liste étendue de patterns à exclure (pages juridiques et autres pages non pertinentes)
    excluded_patterns = [
        "mentions-legales", "politique-de-cookies", "conditions-generales-de-vente",
        "cgv", "politique-de-confidentialite", "privacy-policy", "legal-notice",
        "terms-of-service", "terms-and-conditions", "confidentialite",
        "cookies", "cgu", "gdpr", "rgpd", "legal", "terms-of-use", "terms-of-sale",
        "notice-legale", "mentions-obligatoires", "datenschutz", "impressum",
        "terms-of-services.html", "privacy-policy.html", "cookie-policy", "cookie-notice"
    ]

    
    try:
        # Création d'un scorer plus complet avec des mots-clés prioritaires
        scorer = KeywordRelevanceScorer(
            keywords=[
                # Mots-clés importants à pondération élevée (page d'accueil, produits, services)
                "accueil", "home", "produits", "products", "services", "solutions", 
                "offres", "offers", "fonctionnalités", "features",
                # Pages d'information sur l'entreprise à pondération élevée
                "a-propos", "about", "about-us", "notre-entreprise", "our-company", 
                "qui-sommes-nous", "who-we-are", "presentation", "histoire", "history",
                # Pages de contact à pondération moyenne
                "contact", "nous-contacter", "contactez-nous", "contact-us",
                # Pages d'équipe et clients à pondération moyenne
                "equipe", "team", "clients", "customers", "testimonials", "temoignages",
                # Pages de ressources à pondération moyenne
                "ressources", "resources", "documentation", "guides", "support"
            ],
            weight=0.8  # Augmentation du poids pour favoriser les pages importantes
        )
        
        try:

            # Créer une chaîne de filtres plus simple (sans URLPatternFilter qui cause des erreurs)
            filter_chain = FilterChain([
                # Garder seulement le domaine principal
                DomainFilter(allowed_domains=[extract_base_url(base_url).replace("https://", "").replace("http://", "")])
            ])
        except ImportError as e:
            print(f"[WARNING] Could not import deep_crawling filters: {e}")
            filter_chain = None
        
        # Configuration d'une stratégie BestFirstCrawling avec une profondeur plus grande
        # pour assurer une meilleure couverture du site
        strategy_params = {
            "max_depth": 2,  # 2 niveaux pour meilleure couverture du site (IMPORTANT)
            "include_external": False,
            "url_scorer": scorer,  # Utilisation active du scorer
            "max_pages": 100,  # Jusqu'à 100 URLs pour scrape_site
            # BestFirstCrawlingStrategy va découvrir les URLs
        }

        # Ajouter filter_chain seulement s'il existe
        if filter_chain is not None:
            strategy_params["filter_chain"] = filter_chain

        # Keep max_pages at 100 for full discovery
        strategy_params["max_pages"] = 100  # Max 100 pages
        strategy = BestFirstCrawlingStrategy(**strategy_params)

        # Configuration du crawler pour DÉCOUVERTE SEULEMENT (pas de crawling complet)
        # IMPORTANT: On configure pour extraire les liens rapidement sans traitement lourd
        run_config = CrawlerRunConfig(
            deep_crawl_strategy=strategy,
            exclude_external_links=True,
            excluded_tags=['form', 'nav', 'sidebar', 'menu', 'ads', 'footer', 'cookiebanner', 'cmplz-cookiebanner',
                          'comment', 'share', 'related', 'recommended', 'popular', 'trending', 'cookie', 'cookie-policy'],
            # IMPORTANT: Need markdown_generator for deep_crawl_strategy to work properly
            markdown_generator=DefaultMarkdownGenerator(
                content_filter=PruningContentFilter(threshold=0.48, threshold_type="fixed", min_word_threshold=0)
            ),
            process_iframes=False,
            remove_forms=True,
            only_text=True,  # Changed to True like in working crawler.py
            exclude_external_images=True,
            exclude_social_media_links=True,
            cache_mode=CacheMode.BYPASS,
            # IMPORTANT: Limiter le traitement pour accélérer la découverte
            wait_for_images=False,
            screenshot=False,
            pdf=False,
            remove_overlay_elements=False
        )
        
        browser_config = BrowserConfig(
            verbose=True,  # Changed to True to see what's happening
            text_mode=True,  # Changed to True like in working crawler.py
            light_mode=True,
            headless=True  # Mode headless pour la vitesse
            # Removed page_timeout as it's not a valid parameter for BrowserConfig
        )
        
        monitor = CrawlerMonitor(
            max_visible_rows=10,
            display_mode=DisplayMode.DETAILED
        )
        
        discovered_urls = []

        # Use BestFirstCrawlingStrategy to discover AND crawl URLs
        crawled_count = 0
        discovered_set = set()  # Track discovered URLs
        crawled_urls_realtime = []  # Track URLs as they're crawled

        # Create a shared variable to track crawling progress
        crawl_progress = {"urls_found": 0, "urls_crawled": 0}

        try:
            async with AsyncWebCrawler(config=browser_config, monitor=monitor, run_config=run_config) as crawler:
                print("[+] Discovering and crawling URLs with BestFirstCrawlingStrategy")

                # Show meaningful progress messages during discovery
                # Keep at Step 2 for URL discovery phase
                async def show_discovery_progress():
                    """Show discovery progress with rotating messages at Step 2"""
                    messages = [
                        "Analyse de la page d'accueil...",
                        "Découverte de la structure du site...",
                        "Exploration des pages principales...",
                        "Analyse des sections du site...",
                        "Recherche de contenu pertinent...",
                        "Identification des URLs importantes...",
                        "Collecte des pages à crawler...",
                        "Finalisation de la découverte..."
                    ]

                    message_index = 0
                    urls_found_estimate = 0

                    while True:
                        await asyncio.sleep(8)  # Change message every 8 seconds
                        if job_id:
                            current_message = messages[message_index % len(messages)]
                            # Estimate URLs being discovered (rough estimate based on time)
                            urls_found_estimate = min(urls_found_estimate + 2, 100)

                            try:
                                client = MongoClient(MONGO_URI)
                                db = client[MONGO_DB_NAME]
                                db["scraping_jobs"].update_one(
                                    {"_id": ObjectId(job_id)},
                                    {"$set": {
                                        "processing_step": 2,  # Keep at Step 2
                                        "step_message": f"Collection des liens internes - {current_message}",
                                        "urls_found": urls_found_estimate,
                                        "updatedAt": datetime.now(timezone.utc)
                                    }}
                                )
                                client.close()
                                print(f"[STATUS] Step 2: {current_message}")
                            except Exception as e:
                                print(f"[WARNING] Could not update progress: {str(e)}")
                            message_index += 1

                # Start progress messages
                progress_task = None
                if job_id:
                    progress_task = asyncio.create_task(show_discovery_progress())

                # Run the crawler with BestFirstCrawlingStrategy
                try:
                    # Track crawled URLs by monitoring console output
                    import sys
                    import io

                    # Run the crawler
                    results = await crawler.arun(url=base_url, config=run_config, browser_config=browser_config)

                    # After crawling, count how many URLs were actually processed
                    # This is a fallback since BestFirstCrawlingStrategy doesn't return proper results
                    print("[DEBUG] Crawling completed, analyzing results...")

                finally:
                    # Cancel progress task
                    if progress_task:
                        progress_task.cancel()
                        try:
                            await progress_task
                        except asyncio.CancelledError:
                            pass

                # Debug: Log what type of results we got
                print(f"[DEBUG] Type of results: {type(results)}")
                if hasattr(results, '__dict__'):
                    attrs = list(vars(results).keys())
                    print(f"[DEBUG] Results attributes: {attrs[:20]}")

                    # Print values of key attributes for debugging
                    for attr in attrs[:10]:
                        value = getattr(results, attr, None)
                        if value is not None:
                            value_type = type(value).__name__
                            value_len = len(value) if hasattr(value, '__len__') else 'N/A'
                            print(f"[DEBUG]   - {attr}: type={value_type}, len={value_len}")

                    # Check for crawled_results attribute (from BestFirstStrategy)
                    if hasattr(results, 'crawled_results') and results.crawled_results:
                        print(f"[DEBUG] Found crawled_results attribute with {len(results.crawled_results)} items")
                        discovered_urls = []
                        for url, result in results.crawled_results.items():
                            discovered_urls.append(url)

                        print(f"[+] {len(discovered_urls)} URLs discovered and crawled by BestFirstStrategy")

                        # Don't update here - let main flow handle the final status

                        # Convert crawled_results dict to list format
                        results_list = list(results.crawled_results.values())
                        return discovered_urls[:100], results_list[:100]

                    # Check for visited_urls attribute as another possibility
                    if hasattr(results, 'visited_urls') and results.visited_urls:
                        print(f"[DEBUG] Found visited_urls attribute with {len(results.visited_urls)} URLs")
                        discovered_urls = list(results.visited_urls)[:100]

                        # No status update - let main flow handle it
                        if False:  # Disabled
                            try:
                                client = MongoClient(MONGO_URI)
                                db = client[MONGO_DB_NAME]
                                db["scraping_jobs"].update_one(
                                    {"_id": ObjectId(job_id)},
                                    {"$set": {
                                        "processing_step": 2,
                                        "step_message": f"{len(discovered_urls)} URLs découvertes et crawlées",
                                        "urls_found": len(discovered_urls),
                                        "urls_crawled": len(discovered_urls),
                                        "updatedAt": datetime.now(timezone.utc)
                                    }}
                                )
                                client.close()
                                print(f"[JOB UPDATE] Updated: {len(discovered_urls)} URLs found via visited_urls")
                            except Exception as e:
                                print(f"[WARNING] Could not update job status: {str(e)}")

                        # If we have results as a single object with markdown content, create a list
                        if hasattr(results, 'url') and hasattr(results, 'success'):
                            return discovered_urls, [results]  # Return single result as list
                        else:
                            return discovered_urls, []  # URLs only, need to crawl them

                    # Check if it's a single result with deep crawl info
                    if hasattr(results, 'crawled_urls'):
                        crawled_urls = results.crawled_urls if isinstance(results.crawled_urls, list) else list(results.crawled_urls)
                        print(f"[DEBUG] Found crawled_urls: {len(crawled_urls)} URLs")

                        # No status update - let main flow handle it
                        if False:  # Disabled
                            try:
                                client = MongoClient(MONGO_URI)
                                db = client[MONGO_DB_NAME]
                                db["scraping_jobs"].update_one(
                                    {"_id": ObjectId(job_id)},
                                    {"$set": {
                                        "processing_step": 2,
                                        "step_message": f"{len(crawled_urls)} URLs découvertes et crawlées",
                                        "urls_found": len(crawled_urls),
                                        "urls_crawled": len(crawled_urls),
                                        "updatedAt": datetime.now(timezone.utc)
                                    }}
                                )
                                client.close()
                                print(f"[JOB UPDATE] Updated: {len(crawled_urls)} URLs via crawled_urls")
                            except Exception as e:
                                print(f"[WARNING] Could not update job status: {str(e)}")

                        return crawled_urls[:100], [results] if hasattr(results, 'success') else []

                # Check if results is a list of crawled results
                if isinstance(results, list) and results:
                    # We received crawled results directly
                    discovered_urls = [r.url for r in results if hasattr(r, 'url')][:100]
                    print(f"[+] {len(discovered_urls)} URLs extracted from crawled results")
                    print(f"[✓] Crawled results will be REUSED - no double crawling!")

                    # Update job status with ACTUAL discovered and crawled URLs count
                    if job_id and discovered_urls:
                        try:
                            client = MongoClient(MONGO_URI)
                            db = client[MONGO_DB_NAME]
                            # Since we already have the crawled results, update both found AND crawled counts
                            db["scraping_jobs"].update_one(
                                {"_id": ObjectId(job_id)},
                                {"$set": {
                                    "processing_step": 2,  # Move to step 2 since discovery and crawling are done
                                    "step_message": f"{len(discovered_urls)} URLs découvertes et crawlées",
                                    "urls_found": len(discovered_urls),
                                    "urls_crawled": len(discovered_urls),  # Already crawled by BestFirstStrategy
                                    "updatedAt": datetime.now(timezone.utc)
                                }}
                            )
                            client.close()
                            print(f"[JOB UPDATE] Status updated: {len(discovered_urls)} URLs discovered and crawled")
                        except Exception as e:
                            print(f"[WARNING] Could not update job status: {str(e)}")

                    return discovered_urls[:100], results[:100]

                # Check if results has a list of results inside
                if hasattr(results, 'results') and isinstance(results.results, list):
                    crawled_results = results.results
                    discovered_urls = [r.url for r in crawled_results if hasattr(r, 'url')][:100]
                    print(f"[+] {len(discovered_urls)} URLs extracted from results.results")
                    print(f"[✓] Crawled results will be REUSED - no double crawling!")

                    # Update job status with ACTUAL discovered and crawled URLs count
                    if job_id and discovered_urls:
                        try:
                            client = MongoClient(MONGO_URI)
                            db = client[MONGO_DB_NAME]
                            # Since we already have the crawled results, update both found AND crawled counts
                            db["scraping_jobs"].update_one(
                                {"_id": ObjectId(job_id)},
                                {"$set": {
                                    "processing_step": 2,  # Move to step 2 since discovery and crawling are done
                                    "step_message": f"{len(discovered_urls)} URLs découvertes et crawlées",
                                    "urls_found": len(discovered_urls),
                                    "urls_crawled": len(discovered_urls),  # Already crawled by BestFirstStrategy
                                    "updatedAt": datetime.now(timezone.utc)
                                }}
                            )
                            client.close()
                            print(f"[JOB UPDATE] Status updated: {len(discovered_urls)} URLs discovered and crawled")
                        except Exception as e:
                            print(f"[WARNING] Could not update job status: {str(e)}")

                    return discovered_urls[:100], crawled_results[:100]

                # Try other attributes - check links attribute which is most common
                if hasattr(results, 'links') and results.links:
                    # Links could be internal, external, or both
                    all_links = []
                    if hasattr(results.links, 'internal'):
                        all_links.extend(results.links.internal)
                    elif isinstance(results.links, (list, set)):
                        all_links = list(results.links)
                    elif isinstance(results.links, dict):
                        # Could be {'internal': [...], 'external': [...]}
                        for key, value in results.links.items():
                            if isinstance(value, (list, set)):
                                all_links.extend(value)

                    discovered_urls = all_links[:100]
                    print(f"[+] {len(discovered_urls)} URLs découvertes via links attribute")
                elif hasattr(results, 'discovered_links'):
                    discovered_urls = list(results.discovered_links)[:100]
                    print(f"[+] {len(discovered_urls)} URLs découvertes via discovered_links")
                elif hasattr(results, 'urls'):
                    discovered_urls = results.urls[:100]
                    print(f"[+] {len(discovered_urls)} URLs découvertes via urls")
                else:
                    # Last resort - if it's a single crawl result, at least return that URL
                    if hasattr(results, 'url'):
                        discovered_urls = [results.url]
                        print(f"[+] Single URL from result: {results.url}")
                    else:
                        print("[-] Aucune URL découverte avec BestFirstCrawlingStrategy")

                # IMPORTANT: If BestFirstCrawlingStrategy ran but we couldn't get results,
                # we know it DID crawl pages (we saw the FETCH/SCRAPE messages)
                # So let's at least report that crawling happened
                if not discovered_urls and hasattr(results, 'url'):
                    # Single result from BestFirstCrawlingStrategy
                    print("[!] BestFirstCrawlingStrategy completed but results not captured properly")
                    print("[!] The strategy DID crawl pages (visible in console) but can't extract them")

                    # Try to extract URLs from markdown if available
                    if hasattr(results, 'markdown'):
                        print("[+] Attempting to extract URLs from markdown content")
                        import re
                        # Extract URLs from markdown links [text](url)
                        markdown_links = re.findall(r'\[([^\]]+)\]\(([^)]+)\)', str(results.markdown))
                        # Also extract plain URLs
                        plain_urls = re.findall(r'https?://[^\s<>"{}|\\^`\[\]]+', str(results.markdown))

                        all_extracted = set()
                        for _, url in markdown_links:
                            all_extracted.add(url)
                        all_extracted.update(plain_urls)

                        # Filter to keep only URLs from same domain
                        base_domain = extract_base_url(base_url)
                        discovered_urls = [url for url in all_extracted if base_domain in url][:100]

                        if discovered_urls:
                            print(f"[+] Extracted {len(discovered_urls)} URLs from markdown content")

                    # If still no URLs, but we know crawling happened, estimate based on console output
                    if not discovered_urls:
                        # BestFirstCrawlingStrategy typically crawls up to max_pages (100 in our case)
                        # But we can't get the actual URLs, so we'll need to re-crawl
                        print("[!] Unable to extract crawled URLs from BestFirstCrawlingStrategy")
                        print("[!] Will use fallback discovery method")
                        discovered_urls = []  # Force fallback method

                # No status update - let main flow handle it

        except Exception as e:
            print(f"[-] Erreur lors de la découverte avec BestFirstCrawlingStrategy: {e}")
        
        # Si aucune URL n'a été trouvée, essayer une méthode de secours
        if not discovered_urls:
            print("[+] Tentative de récupération des URLs via une requête HTTP simple")

            # No status update - let main flow handle it
            try:
                # Faire une requête simple à la page d'accueil avec un User-Agent
                headers = {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
                }
                response = requests.get(base_url, headers=headers, timeout=10)
                if response.status_code == 200:
                    # Parser le HTML pour extraire les liens
                    soup = BeautifulSoup(response.text, 'html.parser')
                    
                    # Amélioration: Cibler spécifiquement le menu principal et la navigation
                    menu_links = []
                    
                    # 1. Chercher d'abord dans les éléments de navigation et menus principaux 
                    nav_elements = soup.find_all(['nav', 'header'], 
                                               class_=lambda c: c and any(term in str(c).lower() 
                                                                        for term in ['nav', 'menu', 'header', 'main', 'primary']))
                    
                    # 2. Chercher des div avec des classes de menu
                    if not nav_elements:
                        nav_elements = soup.find_all('div', 
                                               class_=lambda c: c and any(term in str(c).lower() 
                                                                        for term in ['navbar', 'menu', 'navigation', 'nav-container']))
                    
                    # 3. Extraire les liens des éléments trouvés
                    if nav_elements:
                        for nav in nav_elements:
                            # Chercher les éléments <li> ou <a> directement dans la navigation
                            menu_items = nav.find_all(['li', 'a'])
                            for item in menu_items:
                                # Si c'est un <li>, chercher les liens à l'intérieur
                                if item.name == 'li':
                                    links = item.find_all('a', href=True)
                                    menu_links.extend(links)
                                # Si c'est un <a> avec href, l'ajouter directement
                                elif item.name == 'a' and item.get('href'):
                                    menu_links.append(item)
                    
                    # Si aucun lien n'a été trouvé dans les menus, essayer d'autres sélecteurs
                    if not menu_links:
                        # Chercher les liens qui sont probablement dans un menu en se basant sur leur position
                        header_section = soup.find(['header', 'div'], class_=lambda c: c and 'header' in str(c).lower())
                        if header_section:
                            menu_links = header_section.find_all('a', href=True)
                    
                    # En dernier recours, prendre tous les liens
                    links = menu_links if menu_links else soup.find_all('a', href=True)

                    # Filtrer et normaliser les URLs
                    for link in links:
                        href = link['href']
                        # Ignorer les liens vides, les ancres et les liens externes
                        if not href or href.startswith('#') or href.startswith('javascript:'):
                            continue
                        
                        # Exclure les pages juridiques
                        if any(pattern in href.lower() for pattern in excluded_patterns):
                            continue
                        
                        # Normaliser les URLs relatives
                        if not href.startswith('http'):
                            if href.startswith('/'):
                                full_url = f"{base_url}{href}"
                            else:
                                full_url = f"{base_url}/{href}"
                        else:
                            # Vérifier si l'URL est du même domaine
                            base_domain = extract_base_url(base_url).replace("https://", "").replace("http://", "")
                            if base_domain in href:
                                full_url = href
                            else:
                                continue
                        
                        # Nettoyer les paramètres UTM et autres paramètres superflus
                        if '?' in full_url:
                            base_part = full_url.split('?')[0]
                            # Vérifier si une version sans paramètres existe déjà
                            if any(url == base_part or url.startswith(base_part + '?') for url in discovered_urls):
                                continue
                            # Conserver l'URL sans paramètres superflus
                            full_url = base_part
                        
                        # Ajouter l'URL à la liste si elle n'y est pas déjà
                        if full_url not in discovered_urls:
                            discovered_urls.append(full_url)

                    print(f"[+] {len(discovered_urls)} URLs découvertes via requête HTTP simple")

                    # No status update - let main flow handle it
            except Exception as e:
                print(f"[-] Erreur lors de la récupération des URLs via requête HTTP: {e}")
        
        # Filtrage des URLs par langue en utilisant la fonction existante
        # Supprimer les variations de langue en gardant les versions françaises ou sans indicatif
        if discovered_urls:
            print("[+] Filtrage des URLs par langue")
            discovered_urls = filter_urls_by_language(discovered_urls)
            print(f"[+] {len(discovered_urls)} URLs restantes après filtrage par langue")
        
        # Filtrer à nouveau pour exclure les pages juridiques et autres non pertinentes
        filtered_urls = []
        for url in discovered_urls:
            url_lower = url.lower()
            # Exclure les patterns non désirés
            if not any(pattern in url_lower for pattern in excluded_patterns):
                filtered_urls.append(url)
        
        # Éliminer les doublons exacts et les variantes proches
        final_urls = []
        for url in filtered_urls:
            # Normaliser l'URL pour comparaison (supprimer les / finaux et forcer en minuscules)
            normalized_url = url.rstrip('/').lower()
            # Rechercher des duplicatas
            if not any(u.rstrip('/').lower() == normalized_url for u in final_urls):
                final_urls.append(url)
        
        # Si toujours aucune URL, ajouter au moins l'URL de base
        if not final_urls:
            print("[+] Aucune URL découverte après filtrage, utilisation de l'URL de base uniquement")
            final_urls = [base_url]
        
        # S'assurer que l'URL de base est toujours incluse
        if base_url not in final_urls and base_url.rstrip('/') not in final_urls and base_url+'/' not in final_urls:
            final_urls.insert(0, base_url)
        
        # No final status update - let main flow handle it
        print(f"[DEBUG] Returning {len(final_urls[:100])} URLs to main flow")

        # Retourner les URLs sans résultats (ils seront crawlés en parallèle)
        return final_urls[:100], []  # Retourne tuple (URLs, liste vide pour forcer le crawling parallèle)

    except Exception as e:
        print(f"[-] Erreur globale dans crawl_without_sitemap: {e}")
        # En cas d'erreur, retourner au moins l'URL de base
        return [base_url], []  # Retourne tuple vide pour les résultats

async def crawling(url: str, assistant_id: int = None):
    """
    Crawle un site web et retourne le chemin du fichier markdown généré.
    Intègre les améliorations suivantes:
    - Filtrage par langue (français prioritaire)
    - Exclusion des pages juridiques
    - Suppression des doublons
    - Amélioration de la couverture des pages principales
    
    Args:
        url: L'URL du site à crawler
        assistant_id: L'ID de l'assistant associé au crawling (optionnel)
        
    Returns:
        Le chemin absolu vers le fichier markdown généré
    """
    # Définir le nom du fichier de sortie avec un chemin absolu
    current_dir = os.path.dirname(os.path.abspath(__file__))
    output_file = os.path.join(current_dir, 'output.md')
    
    print(f"[+] Démarrage du crawling pour {url} avec assistant_id: {assistant_id}")
    
    # Vérifier l'ID de l'assistant
    if assistant_id:
        print(f"[DEBUG] Assistant ID reçu: {assistant_id}")
        try:
            ObjectId(assistant_id)  # Validation que l'ID est un ObjectId valide
            print(f"[DEBUG] Assistant ID valide")
        except Exception as e:
            print(f"[WARNING] Assistant ID invalide: {e}")
    else:
        print("[WARNING] Aucun assistant_id fourni pour le crawling")
    
    # 1. Normaliser l'URL d'entrée
    # Supprimer les éventuels caractères de fin et paramètres superflus
    if '?' in url:
        url = url.split('?')[0]
    url = url.rstrip('/')
    
    # 2. Récupération des URLs avec la stratégie BestFirstCrawlingStrategy améliorée
    print(f"[+] Récupération des URLs depuis {url} avec BestFirstCrawlingStrategy")
    urls = await crawl_without_sitemap(url)
    
    # 3. Si aucune URL n'est trouvée, tenter la récupération via sitemap/robots.txt
    if not urls or (len(urls) == 1 and urls[0] == url):
        print("[+] Tentative alternative via sitemap ou robots.txt...")
        sitemap_urls = get_sitemap_urls(url)
        
        # Si des URLs sont trouvées via sitemap, les utiliser
        if sitemap_urls:
            print(f"[+] {len(sitemap_urls)} URLs trouvées via sitemap/robots.txt")
            # Fusionner les deux ensembles d'URLs (avec suppression des doublons)
            all_urls = urls.copy()  # Commencer avec les URLs de BestFirstCrawling
            for sitemap_url in sitemap_urls:
                # Normaliser pour la comparaison
                normalized_url = sitemap_url.rstrip('/').lower()
                # Ajouter si pas de doublon
                if not any(u.rstrip('/').lower() == normalized_url for u in all_urls):
                    all_urls.append(sitemap_url)
            
            urls = all_urls
            print(f"[+] {len(urls)} URLs totales après fusion")
        else:
            print("[-] Aucune URL trouvée via sitemap/robots.txt")
    
    # 4. Si toujours aucune URL, créer un fichier vide et quitter
    if not urls:
        print("[-] Aucune URL n'a pu être trouvée. Création d'un fichier vide.")
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(f"# Crawling de {url}\n\nAucune URL n'a pu être trouvée sur ce site. Veuillez vérifier l'URL ou essayer un crawling manuel.")
        # Sauvegarde de l'échec dans MongoDB
        if assistant_id:
            save_chunks_to_postgres(url, f"# Crawling de {url}\n\nAucune URL n'a pu être trouvée sur ce site.", assistant_id, "failed")
        return output_file
    
    # 5. Appliquer un filtrage final pour s'assurer de la qualité des URLs
    urls = filter_urls_by_language(urls)  # Filtrer par langue (fr ou sans indicatif)
    
    # Filtrer les pages juridiques
    excluded_patterns = [
        "mentions-legales", "politique-de-cookies", "conditions-generales-de-vente",
        "cgv", "politique-de-confidentialite", "privacy-policy", "legal-notice",
        "terms-of-service", "terms-and-conditions", "confidentialite", 
        "cookies", "cgu", "gdpr", "rgpd", "legal", "terms-of-use", "terms-of-sale",
        "notice-legale", "mentions-obligatoires", "datenschutz", "impressum",
        "terms-of-services.html", "privacy-policy.html", "cookie-policy", "cookie-notice"
    ]
    urls = [url for url in urls if not any(pattern in url for pattern in excluded_patterns)]
    
    # S'assurer que l'URL de base est toujours incluse en première position
    base_url = url
    if base_url not in urls and base_url.rstrip('/') not in urls and base_url+'/' not in urls:
        urls.insert(0, base_url)
    
    # Limiter aux 50 premières URLs
    urls = urls[:50]
    
    print(f"[+] {len(urls)} URLs finales à crawler")
    
    # 6. Crawl des URLs
    print("[+] Démarrage du crawl")
    results = await crawl_urls(urls, assistant_id)
    
    # 7. Vérifier si des résultats ont été obtenus
    if not results:
        print("[-] Aucun résultat obtenu du crawl. Création d'un fichier vide.")
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(f"# Crawling de {url}\n\nLe crawl n'a pas pu générer de résultats exploitables. Veuillez vérifier l'URL ou essayer un crawling manuel.")
        # Sauvegarde de l'échec dans MongoDB
        if assistant_id:
            save_chunks_to_postgres(url, f"# Crawling de {url}\n\nLe crawl n'a pas pu générer de résultats exploitables.", assistant_id, "failed")
        return output_file
    
    # 8. Sauvegarde des résultats
    # print(f"[+] Sauvegarde des résultats dans {output_file}")
    # save_to_markdown(results, output_file)

    # 9. Nettoyage du contenu
    print("[+] Nettoyage du contenu")
    # with open(output_file, 'r', encoding='utf-8') as f:
    #     content = f.read()
    # cleaned_content = clean_markdown_content(content)
    
    # 10. Sauvegarde du contenu nettoyé dans le fichier
    print("[+] Sauvegarde du contenu nettoyé")
    # with open(output_file, 'w', encoding='utf-8') as f:
        # f.write(cleaned_content)

    print(f"[+] Crawling terminé, fichier disponible à {output_file}")
    # Retourner le chemin absolu du fichier
    return output_file