import asyncio
from crawler import crawling
from const import FINANCE_LINKS

async def main():
    assistant_id = 8

    for url in FINANCE_LINKS:
        try:
            print(f"🔍 Crawling: {url}")
            result = await crawling(url, assistant_id)
            print(f"✔ DONE → Saved to: {result}\n")
        except Exception as e:
            print(f"❌ ERROR while crawling {url}: {e}")
            continue
        finally:
            print("🎉 All links crawled successfully!")

if __name__ == "__main__":
    asyncio.run(main())
