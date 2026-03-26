"""
Run this script once to download all images locally from the a2zee.uk CDN.
After running, the site will work fully offline.

Usage:  python3 download-images.py
"""

import urllib.request, os, time, re, glob

CDN = "https://a2zee.uk/_astro/"
IMG_DIR = os.path.join(os.path.dirname(__file__), "assets", "images")
os.makedirs(IMG_DIR, exist_ok=True)

HEADERS = {"User-Agent": "Mozilla/5.0"}

# Collect every unique CDN URL referenced across all HTML files
html_files = glob.glob(os.path.join(os.path.dirname(__file__), "**/*.html"), recursive=True)
urls = set()
for f in html_files:
    with open(f) as fh:
        for m in re.findall(r'https://a2zee\.uk/_astro/[^"\'> ]+', fh.read()):
            urls.add(m)

print(f"Found {len(urls)} unique image URLs across {len(html_files)} HTML files.\n")

ok, fail = [], []
for url in sorted(urls):
    filename = url.split("/")[-1].replace("%20", " ")
    dest = os.path.join(IMG_DIR, filename)
    if os.path.exists(dest):
        print(f"  SKIP (exists)  {filename}")
        ok.append(filename)
        continue
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=20) as r:
            data = r.read()
        with open(dest, "wb") as fh:
            fh.write(data)
        kb = len(data) // 1024
        print(f"  OK   {filename:<60} {kb:>4} KB")
        ok.append(filename)
        time.sleep(0.1)
    except Exception as e:
        print(f"  FAIL {filename}: {e}")
        fail.append(filename)

print(f"\n{'='*60}")
print(f"Downloaded: {len(ok)}   Failed: {len(fail)}")
if fail:
    print("Failed files:", fail)
else:
    print("All images downloaded successfully!")
    print(f"\nImages saved to: {IMG_DIR}")
    print("\nTo use local images instead of CDN, run:")
    print("  python3 localise-images.py")
