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
from datetime import datetime, timezone
from dotenv import load_dotenv
from openai import AsyncOpenAI

# Chargement des variables d'environnement
load_dotenv()

# Récupération des variables d'environnement PostgreSQL
DATABASE_URL = os.getenv("DATABASE_URL_UNPOOLED")
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

async def get_pg_pool():
    """Get or create PostgreSQL connection pool"""
    if not hasattr(get_pg_pool, "pool") or get_pg_pool.pool is None:
        print("[DEBUG] Creating new PostgreSQL connection pool...")
        try:
            get_pg_pool.pool = await asyncpg.create_pool(
                dsn=DATABASE_URL,
                min_size=1,
                max_size=5,
                timeout=30,
                command_timeout=60
            )
            print("[DEBUG] ✅ Connection pool created successfully")
        except Exception as e:
            print(f"[ERROR] Failed to create connection pool: {e}")
            raise
    return get_pg_pool.pool

async def generate_embedding(text: str):
    """Generate embedding for text using OpenAI"""
    client = AsyncOpenAI(api_key=OPENAI_API_KEY)
    response = await client.embeddings.create(
        model="text-embedding-3-small",
        input=text
    )
    return response.data[0].embedding

async def translate_to_english(text: str, max_retries: int = 3) -> str:
    """
    Translate any text to English using OpenAI API.
    Handles large content by splitting into chunks if needed.

    Args:
        text: Text to translate (can be in any language)
        max_retries: Maximum number of retry attempts

    Returns:
        Translated English text
    """
    if not text or len(text.strip()) < 10:
        return text

    try:
        client = AsyncOpenAI(api_key=OPENAI_API_KEY)

        print(f"[TRANSLATION] Processing {len(text)} characters with LLM (auto-detect language)...")

        # For very long content, split into chunks
        max_chunk_length = 8000  # Safe limit for GPT-3.5
        if len(text) > max_chunk_length:
            print(f"[TRANSLATION] Content too long, splitting into chunks...")
            chunks = []
            words = text.split()
            current_chunk = []
            current_length = 0

            for word in words:
                word_length = len(word) + 1
                if current_length + word_length > max_chunk_length:
                    chunks.append(' '.join(current_chunk))
                    current_chunk = [word]
                    current_length = word_length
                else:
                    current_chunk.append(word)
                    current_length += word_length

            if current_chunk:
                chunks.append(' '.join(current_chunk))

            print(f"[TRANSLATION] Split into {len(chunks)} chunks")

            # Translate each chunk
            translated_chunks = []
            for i, chunk in enumerate(chunks, 1):
                print(f"[TRANSLATION] Translating chunk {i}/{len(chunks)}...")

                for attempt in range(max_retries):
                    try:
                        response = await client.chat.completions.create(
                            model="gpt-3.5-turbo",
                            messages=[
                                {
                                    "role": "system",
                                    "content": """You are a professional translator. Your task:

1. If the text is already in English: Return it EXACTLY as-is, no changes.
2. If the text is in another language: Translate it to clean, natural English.

IMPORTANT RULES:
- Do NOT add any extra content, explanations, or notes
- Do NOT add phrases like "Here is the translation:" or "Translation:"
- Keep the same structure and paragraphs
- Clean up excessive whitespace and formatting
- Preserve the original meaning exactly
- Output ONLY the translated/cleaned text, nothing else"""
                                },
                                {
                                    "role": "user",
                                    "content": chunk
                                }
                            ],
                            temperature=0.3,
                            max_tokens=4000
                        )
                        translated_chunk = response.choices[0].message.content.strip()
                        translated_chunks.append(translated_chunk)
                        break
                    except Exception as e:
                        if attempt < max_retries - 1:
                            print(f"[WARNING] Translation attempt {attempt + 1} failed: {e}, retrying...")
                            await asyncio.sleep(2)
                        else:
                            print(f"[ERROR] Translation failed after {max_retries} attempts: {e}")
                            translated_chunks.append(chunk)  # Use original if translation fails

            translated_text = '\n\n'.join(translated_chunks)
            print(f"[TRANSLATION] ✓ Successfully translated all chunks")
            return translated_text

        else:
            # Single translation for shorter content
            for attempt in range(max_retries):
                try:
                    response = await client.chat.completions.create(
                        model="gpt-3.5-turbo",
                        messages=[
                            {
                                "role": "system",
                                "content": """You are a professional translator. Your task:

1. If the text is already in English: Return it EXACTLY as-is, no changes.
2. If the text is in another language: Translate it to clean, natural English.

IMPORTANT RULES:
- Do NOT add any extra content, explanations, or notes
- Do NOT add phrases like "Here is the translation:" or "Translation:"
- Keep the same structure and paragraphs
- Clean up excessive whitespace and formatting
- Preserve the original meaning exactly
- Output ONLY the translated/cleaned text, nothing else"""
                            },
                            {
                                "role": "user",
                                "content": text
                            }
                        ],
                        temperature=0.3,
                        max_tokens=4000
                    )
                    translated_text = response.choices[0].message.content.strip()
                    print(f"[TRANSLATION] ✓ Successfully processed with LLM")
                    return translated_text
                except Exception as e:
                    if attempt < max_retries - 1:
                        print(f"[WARNING] Translation attempt {attempt + 1} failed: {e}, retrying...")
                        await asyncio.sleep(2)
                    else:
                        print(f"[ERROR] Translation failed after {max_retries} attempts: {e}")
                        return text  # Return original if all retries fail

    except Exception as e:
        print(f"[ERROR] Translation error: {e}")
        traceback.print_exc()
        return text  # Return original text if translation fails


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
    
    print(f"[+] Language filtering: {len(urls)} URLs -> {len(filtered_urls)} URLs (kept: FR + no language code)")
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
    for url in all_urls[:70]:  # Limited to 70 URLs for optimal processing
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

    # Remove cookie consent blocks (common patterns)
    cookie_patterns = [
        r'(?i)consent.*?details.*?about.*?cookies.*?(?:show details|details)',
        r'(?i)necessary\s+\d+\s+necessary cookies.*?(?:type:|maximum storage)',
        r'(?i)maximum storage duration.*?type:.*?cookie',
        r'(?i)cookies to personalise content.*?analytics partners',
        r'(?i)\[#IABV2SETTINGS#\]',
        r'(?i)this website uses cookies.*?(?:show details|accept|reject)',
        r'(?i)cookie.*?preference.*?statistic.*?marketing',
    ]

    for pattern in cookie_patterns:
        content = re.sub(pattern, '', content, flags=re.DOTALL)

    # Conserve le texte des ancres en supprimant les URLs
    content = re.sub(r'\[(.*?)\]\(.*?\)', r'\1', content)

    # Supprime les liens directs et les remplace par des espaces
    content = re.sub(r'<https?://[^>]+>', ' ', content)

    # Supprime les balises d'images Markdown et les remplace par des espaces
    content = re.sub(r'!\[.*?\]\(.*?\)', ' ', content)

    # Réduit les sauts de ligne multiples (3 ou plus) à seulement deux
    content = re.sub(r'\n{3,}', '\n\n', content)

    # Traite ligne par ligne pour filtrer les lignes répétitives et cookie-related
    cleaned_lines = []
    prev_line = ""
    cookie_keywords = ['cookie', 'consent', 'maximum storage duration', 'pixel tracker',
                      'http cookie', 'html local storage', 'necessary cookies',
                      'preference cookies', 'statistic cookies', 'marketing cookies']

    for line in content.splitlines():
        line_stripped = line.strip()
        line_lower = line_stripped.lower()

        # Skip cookie-related lines
        if any(keyword in line_lower for keyword in cookie_keywords):
            continue

        # Skip duplicate consecutive lines
        if line_lower == prev_line.lower():
            continue

        # Skip very short lines (likely noise)
        if len(line_stripped) > 0 and len(line_stripped) < 3:
            continue

        cleaned_lines.append(line)
        prev_line = line_stripped

    # Prépare le contenu nettoyé
    cleaned_content = '\n'.join(cleaned_lines)

    if verbose:
        print(f"[DEBUG] Taille du contenu après nettoyage: {len(cleaned_content)} caractères")
        print("[DEBUG] Nettoyage terminé")

    return cleaned_content


def chunk_text_markdown(text: str, max_tokens: int = 500):
    """
    Enhanced chunking with deduplication and cookie content filtering
    """
    chunks = []
    words = text.split()
    current = []
    seen_chunks = set()  # Track unique chunks by hash
    cookie_keywords = ['cookie', 'consent', 'privacy policy', 'gdpr', 'advertising',
                      'personalization', 'maximum storage', 'pixel tracker']

    for word in words:
        current.append(word)
        if len(current) >= max_tokens:
            chunk_text = " ".join(current)

            # Deduplicate: Skip if chunk is too similar to existing ones
            chunk_hash = hash(chunk_text[:200])  # Hash first 200 chars for comparison
            if chunk_hash not in seen_chunks:
                # Filter out chunks that are mostly cookie/consent text
                chunk_lower = chunk_text.lower()
                cookie_count = sum(1 for keyword in cookie_keywords if keyword in chunk_lower)
                word_count = len(chunk_text.split())

                # Skip if >30% of keywords are cookie-related AND chunk is short
                if not (cookie_count > 0 and (cookie_count / max(word_count, 1)) > 0.3 and word_count < 100):
                    chunks.append(chunk_text)
                    seen_chunks.add(chunk_hash)

            current = []

    if current:
        chunk_text = " ".join(current)
        chunk_hash = hash(chunk_text[:200])

        if chunk_hash not in seen_chunks:
            chunk_lower = chunk_text.lower()
            cookie_count = sum(1 for keyword in cookie_keywords if keyword in chunk_lower)
            word_count = len(chunk_text.split())

            if not (cookie_count > 0 and (cookie_count / max(word_count, 1)) > 0.3 and word_count < 100):
                chunks.append(chunk_text)

    return chunks



async def save_chunks_to_postgres(url: str, content: str, assistant_id: int, status: str = "success", language: str = "unknown"):
    """
    Cleans, translates to English, splits into chunks, embeds, and saves to PostgreSQL.

    Workflow:
    1. Clean markdown content
    2. Translate to English (if not already)
    3. Split into chunks
    4. Generate embeddings for English chunks
    5. Store in documentchunks table

    Args:
        url: Source URL
        content: Raw scraped content
        assistant_id: Agent/Assistant ID
        status: Processing status
        language: Detected language of content

    Returns:
        Number of chunks saved
    """
    try:
        print(f"[DEBUG] Getting database connection pool...")
        pool = await get_pg_pool()
        print(f"[DEBUG] Processing content for {url[:50]}...")

        if status == "success":
            # Step 1: Clean the content
            print(f"[STEP 1/4] Cleaning markdown content...")
            cleaned_content = clean_markdown_content(content)

            # Step 2: Translate to English
            print(f"[STEP 2/4] Translating to English...")
            english_content = await translate_to_english(cleaned_content)

            # Step 3: Split into chunks
            print(f"[STEP 3/4] Splitting into chunks...")
            chunks = chunk_text_markdown(english_content, max_tokens=350)
            print(f"[DEBUG] Created {len(chunks)} chunks")
        else:
            cleaned_content = content
            chunks = chunk_text_markdown(cleaned_content, max_tokens=350)

        # Step 4: Generate embeddings and save
        print(f"[STEP 4/4] Generating embeddings and saving to PostgreSQL...")
        async with pool.acquire() as conn:
            async with conn.transaction():
                for i, chunk in enumerate(chunks):
                    # Generate embedding for English chunk
                    emb = await generate_embedding(chunk)

                    # Convert to JSON strings for postgres JSONB
                    json_emb = json.dumps(emb)
                    json_metadata = json.dumps({
                        "source_url": url,
                        "language": "en",  # Always English after translation
                        "original_language": language,
                        "chunk_index": i,
                        "total_chunks": len(chunks)
                    })

                    await conn.execute("""
                        INSERT INTO documentchunks
                            (agent_id, document_name, chunk_text, chunk_number, embeddings, metadata, created_at)
                        VALUES ($1, $2, $3, $4, $5, $6, NOW())
                    """,
                    assistant_id,
                    url,            # document_name
                    chunk,          # chunk_text (English)
                    i,              # chunk number
                    json_emb,       # JSONB embedding
                    json_metadata   # metadata JSONB
                    )

        print(f"[+] ✓ Saved {len(chunks)} English chunks for {url}")
        return len(chunks)
    except Exception as e:
        print(f"[ERROR] SAVING CHUNKS for {url}: {e}")
        traceback.print_exc()
        return 0

# MongoDB functions removed - using only PostgreSQL


async def save_chunks_batch_to_postgres(items: list[tuple], assistant_id: int):
    """
    Process and save multiple URLs to PostgreSQL in batch.
    Each item is cleaned, translated to English, chunked, embedded, and stored.

    Args:
        items: List of tuples (url, content, status)
        assistant_id: Agent/Assistant ID

    Returns:
        Total number of chunks saved
    """
    total_chunks = 0
    for url, content, status in items:
        if status != "success":
            continue
        chunks_saved = await save_chunks_to_postgres(url, content, assistant_id, status)
        if chunks_saved:  # Safety check
            total_chunks += chunks_saved

    print(f"[+] ✓ Total English chunks saved to PostgreSQL: {total_chunks}")
    return total_chunks

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

    # Filter out file URLs (PDF, Office docs, images, etc.) before crawling
    excluded_extensions = (
        ".pdf", ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx",
        ".zip", ".rar", ".7z", ".tar", ".gz", ".bz2",
        ".jpeg", ".jpg", ".png", ".gif", ".webp", ".svg", ".ico",
        ".mp4", ".avi", ".mov", ".wmv", ".flv", ".mp3", ".wav",
        ".xml", ".json", ".csv", ".txt"
    )

    filtered_urls = []
    skipped_count = 0
    for url in urls:
        url_lower = url.lower()
        if any(url_lower.endswith(ext) for ext in excluded_extensions):
            skipped_count += 1
            print(f"[SKIP] Skipping file URL: {url}")
            continue
        filtered_urls.append(url)

    if skipped_count > 0:
        print(f"[INFO] Filtered out {skipped_count} file URLs, {len(filtered_urls)} URLs remaining to crawl")

    urls = filtered_urls

    # IMPORTANT: If we have existing SUCCESSFUL results, save them and return
    # If results are failed, ignore them and proceed with crawling
    if existing_results:
        print(f"[DEBUG] Processing {len(existing_results)} existing crawled results")

        # Extract and save the results to database
        batch_to_save = []
        successful_count = 0
        for result in existing_results:
            if hasattr(result, 'success') and result.success:
                successful_count += 1
                # Extract content
                content = None
                if hasattr(result, 'extracted_content') and result.extracted_content:
                    content = result.extracted_content
                elif hasattr(result, 'markdown_v2') and result.markdown_v2 and hasattr(result.markdown_v2, 'raw_markdown'):
                    content = result.markdown_v2.raw_markdown
                elif hasattr(result, 'markdown') and result.markdown:
                    content = result.markdown

                if content:
                    url = result.url if hasattr(result, 'url') else 'unknown'
                    batch_to_save.append((url, content, "success"))

        # Only return early if we have SUCCESSFUL results
        if successful_count > 0:
            # Save to database
            if batch_to_save and assistant_id:
                print(f"[+] Saving {len(batch_to_save)} successful results to database...")
                saved_count = await save_chunks_batch_to_postgres(batch_to_save, assistant_id)
                print(f"[+] Saved {saved_count} chunks to PostgreSQL")

            print(f"[+] Using {successful_count} existing successful results, skipping re-crawl")
            return existing_results
        else:
            print(f"[!] All {len(existing_results)} existing results failed, will crawl URLs normally")
            # Continue to normal crawling below

    print(f"[DEBUG] Starting parallel crawl for {len(urls)} URLs")

    browser_config = BrowserConfig(
        verbose=True,
        text_mode=True,
        light_mode=True
    )
    print("[DEBUG] Browser config initialisée")

    run_config = CrawlerRunConfig(
        exclude_external_links=True,
        excluded_tags=['form', 'nav', 'sidebar', 'menu', 'ads', 'footer',
                      'cookiebanner', 'cmplz-cookiebanner', 'cookie-banner', 'cookie-consent',
                      'cookie-notice', 'gdpr-banner', 'consent-banner', 'cookie-policy-banner',
                      'comment', 'share', 'related', 'recommended', 'popular', 'trending',
                      'advertisement', 'social-share', 'newsletter'],
        markdown_generator=DefaultMarkdownGenerator(
            content_filter=PruningContentFilter(threshold=0.55, threshold_type="fixed", min_word_threshold=20)
        ),
        process_iframes=False,
        remove_forms=True,
        only_text=True,
        exclude_external_images=True,
        exclude_social_media_links=True,
        cache_mode=CacheMode.BYPASS,
        page_timeout=120000,  # 2 minutes for slow/dynamic sites
        wait_until="networkidle",  # Wait until network is idle (no more requests)
        delay_before_return_html=5.0,  # Wait 5 seconds for JavaScript to fully render
        js_code=[
            """
            (function() {
                // Dismiss Cookiebot
                const acceptBtn = document.querySelector('[id*="Accept"], [class*="accept"], button[id*="cookie"]');
                if (acceptBtn) acceptBtn.click();

                // Hide cookie overlays
                const overlays = document.querySelectorAll('[id*="cookie"], [class*="cookie"], [id*="consent"], [class*="consent"], [id*="Cookiebot"], [class*="onetrust"]');
                overlays.forEach(el => el.style.display = 'none');
            })();
            """
        ]
    )

    monitor = CrawlerMonitor(
        max_visible_rows=10,
        display_mode=DisplayMode.DETAILED
    )

    results = []
    saved_urls_count = 0
    print("[DEBUG] Démarrage du crawl avec AsyncWebCrawler")

    # Fonction pour crawler une URL individuelle avec retry logic
    async def crawl_single_url(crawler, url, index, semaphore, max_retries=2):
        async with semaphore:  # Limite la concurrence
            print(f"[DEBUG] Crawling URL {index}/{len(urls)}: {url}")

            last_error = None
            for attempt in range(max_retries + 1):
                try:
                    if attempt > 0:
                        print(f"[RETRY] Attempt {attempt + 1}/{max_retries + 1} for URL {index}")
                        await asyncio.sleep(3 * attempt)  # Increasing delay between retries

                    result = await crawler.arun(url=url, config=run_config, browser_config=browser_config)

                    # Extraction du contenu
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

                        if status == "success" and content and len(content.strip()) > 100:
                            print(f"[SUCCESS] URL {index} completed ({len(content)} chars)")
                            return result, (url, content, status)
                        else:
                            # Content too short, treat as failure and retry
                            print(f"[WARNING] URL {index} content too short ({len(content) if content else 0} chars), retrying...")
                            last_error = "Content too short"
                            continue
                    else:
                        error_msg = result.error_message if hasattr(result, 'error_message') else 'Unknown error'
                        print(f"[FAIL] URL {index} failed: {error_msg}")
                        last_error = error_msg
                        if attempt < max_retries:
                            continue  # Retry
                        else:
                            content = f"[Échec du crawling pour {url}]: {error_msg}"
                            return result, (url, content, "failed")

                except Exception as e:
                    last_error = str(e)
                    print(f"[ERROR] Exception crawling URL {index} (attempt {attempt + 1}): {last_error}")
                    if attempt < max_retries:
                        continue  # Retry

            # All retries exhausted
            print(f"[FAILED] URL {index} failed after {max_retries + 1} attempts: {last_error}")
            return None, None

    # Traitement parallèle avec semaphore pour limiter la concurrence
    BATCH_SIZE = 10  # Smaller batches for better reliability
    MAX_CONCURRENT = 4  # Lower concurrency to avoid rate limiting (was 8)

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

            # Add longer delay between batches to avoid rate limiting
            await asyncio.sleep(5)  # 5 second delay between batches (was 2)

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
                print(f"[DEBUG] {saved_count} chunks saved to PostgreSQL")

            # Progress logging
            if job_id:
                print(f"[PROGRESS] {len(results)}/{len(urls)} pages crawled, {saved_urls_count} chunks saved")

            print(f"[DEBUG] Lot {batch_start+1}-{batch_end} terminé, {len(results)} URLs traitées au total")

    print(f"[DEBUG] Crawl parallèle terminé avec {len(results)} résultats")
    print(f"[DEBUG] {saved_urls_count} chunks saved to PostgreSQL")
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
            "max_depth": 3,  # 3 niveaux pour meilleure couverture du site (INCREASED from 2)
            "include_external": False,
            "url_scorer": scorer,  # Utilisation active du scorer
            "max_pages": 70,  # Limited to 70 URLs for optimal processing
            # BestFirstCrawlingStrategy va découvrir les URLs
        }

        # Ajouter filter_chain seulement s'il existe
        if filter_chain is not None:
            strategy_params["filter_chain"] = filter_chain

        # Keep max_pages at 70 for optimal discovery
        strategy_params["max_pages"] = 70  # Max 70 pages
        strategy = BestFirstCrawlingStrategy(**strategy_params)

        # Configuration du crawler pour découverte et extraction complète
        run_config = CrawlerRunConfig(
            deep_crawl_strategy=strategy,
            exclude_external_links=True,
            excluded_tags=['form', 'nav', 'sidebar', 'menu', 'ads', 'footer',
                          'cookiebanner', 'cmplz-cookiebanner', 'cookie-banner', 'cookie-consent',
                          'cookie-notice', 'gdpr-banner', 'consent-banner', 'cookie-policy-banner',
                          'comment', 'share', 'related', 'recommended', 'popular', 'trending',
                          'advertisement', 'social-share', 'newsletter'],
            # IMPORTANT: Need markdown_generator for deep_crawl_strategy to work properly
            markdown_generator=DefaultMarkdownGenerator(
                content_filter=PruningContentFilter(threshold=0.55, threshold_type="fixed", min_word_threshold=20)
            ),
            process_iframes=False,
            remove_forms=True,
            only_text=True,
            exclude_external_images=True,
            exclude_social_media_links=True,
            cache_mode=CacheMode.BYPASS,
            page_timeout=120000,  # 2 minutes for slow/dynamic sites
            wait_until="networkidle",  # Wait until network is idle
            delay_before_return_html=5.0,  # Wait 5 seconds for JavaScript to render
            wait_for_images=False,
            screenshot=False,
            pdf=False,
            remove_overlay_elements=False,
            js_code=[
                """
                (function() {
                    // Dismiss Cookiebot
                    const acceptBtn = document.querySelector('[id*="Accept"], [class*="accept"], button[id*="cookie"]');
                    if (acceptBtn) acceptBtn.click();

                    // Hide cookie overlays
                    const overlays = document.querySelectorAll('[id*="cookie"], [class*="cookie"], [id*="consent"], [class*="consent"], [id*="Cookiebot"], [class*="onetrust"]');
                    overlays.forEach(el => el.style.display = 'none');
                })();
                """
            ]
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

                            # Progress logging
                            print(f"[STATUS] Step 2: {current_message} (~{urls_found_estimate} URLs estimated)")
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
                        return discovered_urls[:70], results_list[:70]

                    # Check for visited_urls attribute as another possibility
                    if hasattr(results, 'visited_urls') and results.visited_urls:
                        print(f"[DEBUG] Found visited_urls attribute with {len(results.visited_urls)} URLs")
                        discovered_urls = list(results.visited_urls)[:70]

                        # No status update - let main flow handle it
                        # Job status logging (PostgreSQL tracking can be added here if needed)
                        if job_id:
                            print(f"[PROGRESS] {len(discovered_urls)} URLs discovered")

                        # If we have results as a single object with markdown content, create a list
                        if hasattr(results, 'url') and hasattr(results, 'success'):
                            return discovered_urls, [results]  # Return single result as list
                        else:
                            return discovered_urls, []  # URLs only, need to crawl them

                    # Check if it's a single result with deep crawl info
                    if hasattr(results, 'crawled_urls'):
                        crawled_urls = results.crawled_urls if isinstance(results.crawled_urls, list) else list(results.crawled_urls)
                        print(f"[DEBUG] Found crawled_urls: {len(crawled_urls)} URLs")
                        crawled_urls = crawled_urls[:70]  # Limit to 70 URLs

                        # Job status logging
                        if job_id:
                            print(f"[PROGRESS] {len(crawled_urls)} URLs crawled")

                        return crawled_urls[:70], [results] if hasattr(results, 'success') else []

                # Check if results is a list of crawled results
                if isinstance(results, list) and results:
                    # We received crawled results directly
                    discovered_urls = [r.url for r in results if hasattr(r, 'url')][:70]
                    print(f"[+] {len(discovered_urls)} URLs extracted from crawled results")
                    print(f"[✓] Crawled results will be REUSED - no double crawling!")

                    # Progress logging
                    if job_id and discovered_urls:
                        print(f"[PROGRESS] {len(discovered_urls)} URLs discovered and crawled")

                    return discovered_urls[:70], results[:70]

                # Check if results has a list of results inside
                if hasattr(results, 'results') and isinstance(results.results, list):
                    crawled_results = results.results
                    discovered_urls = [r.url for r in crawled_results if hasattr(r, 'url')][:70]
                    print(f"[+] {len(discovered_urls)} URLs extracted from results.results")
                    print(f"[✓] Crawled results will be REUSED - no double crawling!")

                    # Progress logging
                    if job_id and discovered_urls:
                        print(f"[PROGRESS] {len(discovered_urls)} URLs discovered and crawled")

                    return discovered_urls[:70], crawled_results[:70]

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

                    discovered_urls = all_links[:70]
                    print(f"[+] {len(discovered_urls)} URLs découvertes via links attribute")
                elif hasattr(results, 'discovered_links'):
                    discovered_urls = list(results.discovered_links)[:70]
                    print(f"[+] {len(discovered_urls)} URLs découvertes via discovered_links")
                elif hasattr(results, 'urls'):
                    discovered_urls = results.urls[:70]
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
                        discovered_urls = [url for url in all_extracted if base_domain in url][:70]

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
        # ET exclure les fichiers (PDF, Office docs, etc.)
        excluded_file_extensions = (
            ".pdf", ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx",
            ".zip", ".rar", ".7z", ".tar", ".gz", ".bz2",
            ".jpeg", ".jpg", ".png", ".gif", ".webp", ".svg", ".ico",
            ".mp4", ".avi", ".mov", ".wmv", ".flv", ".mp3", ".wav"
        )

        filtered_urls = []
        for url in discovered_urls:
            url_lower = url.lower()
            # Exclure les patterns non désirés
            if any(pattern in url_lower for pattern in excluded_patterns):
                continue
            # Exclure les fichiers
            if any(url_lower.endswith(ext) for ext in excluded_file_extensions):
                continue
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
        print(f"[DEBUG] Returning {len(final_urls[:70])} URLs to main flow")

        # Retourner les URLs sans résultats (ils seront crawlés en parallèle)
        return final_urls[:70], []  # Retourne tuple (URLs, liste vide pour forcer le crawling parallèle)

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
    
    print(f"[+] Starting crawling for {url} with assistant_id: {assistant_id}")
    
    # Vérifier l'ID de l'assistant
    if assistant_id:
        print(f"[DEBUG] Assistant ID reçu: {assistant_id}")
    else:
        print("[WARNING] Aucun assistant_id fourni pour le crawling")
    
    # 1. Normaliser l'URL d'entrée
    # Supprimer les éventuels caractères de fin et paramètres superflus
    if '?' in url:
        url = url.split('?')[0]
    url = url.rstrip('/')
    
    # 2. Récupération des URLs avec la stratégie BestFirstCrawlingStrategy améliorée
    print(f"[+] Retrieving URLs from {url} with BestFirstCrawlingStrategy")
    urls, existing_results = await crawl_without_sitemap(url)

    # 3. If no URLs found, try via sitemap/robots.txt
    if not urls or (len(urls) == 1 and urls[0] == url):
        print("[+] Tentative alternative via sitemap ou robots.txt...")
        sitemap_urls = get_sitemap_urls(url)

        # Si des URLs sont trouvées via sitemap, les utiliser
        if sitemap_urls:
            print(f"[+] {len(sitemap_urls)} URLs trouvées via sitemap/robots.txt")
            # Fusionner les deux ensembles d'URLs (avec suppression des doublons)
            all_urls = urls.copy() if urls else []  # Commencer avec les URLs de BestFirstCrawling
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
        # Sauvegarde de l'échec dans PostgreSQL
        if assistant_id:
            await save_chunks_to_postgres(url, f"# Crawling de {url}\n\nAucune URL n'a pu être trouvée sur ce site.", assistant_id, "failed")
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

    # Filtrer les fichiers (PDF, Office, etc.)
    excluded_file_extensions = (
        ".pdf", ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx",
        ".zip", ".rar", ".7z", ".tar", ".gz", ".bz2",
        ".jpeg", ".jpg", ".png", ".gif", ".webp", ".svg", ".ico"
    )

    # Appliquer les filtres
    filtered_urls = []
    for url in urls:
        url_lower = url.lower()
        # Exclure patterns juridiques
        if any(pattern in url_lower for pattern in excluded_patterns):
            continue
        # Exclure fichiers
        if any(url_lower.endswith(ext) for ext in excluded_file_extensions):
            continue
        filtered_urls.append(url)

    urls = filtered_urls
    
    # S'assurer que l'URL de base est toujours incluse en première position
    base_url = url
    if base_url not in urls and base_url.rstrip('/') not in urls and base_url+'/' not in urls:
        urls.insert(0, base_url)
    
    # Limiter aux 70 premières URLs
    urls = urls[:70]
    
    print(f"[+] {len(urls)} URLs finales à crawler")
    
    # 6. Crawl the URLs
    print("[+] Starting crawl")
    results = await crawl_urls(urls, assistant_id, existing_results=existing_results)

    # 7. Check if results were obtained
    if not results:
        print("[-] Aucun résultat obtenu du crawl. Création d'un fichier vide.")
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(f"# Crawling de {url}\n\nLe crawl n'a pas pu générer de résultats exploitables. Veuillez vérifier l'URL ou essayer un crawling manuel.")
        # Sauvegarde de l'échec dans PostgreSQL
        if assistant_id:
            await save_chunks_to_postgres(url, f"# Crawling de {url}\n\nLe crawl n'a pas pu générer de résultats exploitables.", assistant_id, "failed")
        return output_file
    
    # 8. Save results to markdown file for preview
    print(f"[+] Saving results to markdown file: {output_file}")
    save_to_markdown(results, output_file)

    # 9. Content cleaning
    print("[+] Cleaning markdown content")
    with open(output_file, 'r', encoding='utf-8') as f:
        content = f.read()
    cleaned_content = clean_markdown_content(content)

    # 10. Save cleaned content to file
    print("[+] Saving cleaned content to file")
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(cleaned_content)

    print(f"[+] Crawling completed, file available at {output_file}")
    print(f"[+] Data saved to PostgreSQL database (documentchunks table) for agent_id: {assistant_id}")
    # Retourner le chemin absolu du fichier
    return output_file