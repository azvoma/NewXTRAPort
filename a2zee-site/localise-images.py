"""
After running download-images.py, run this to rewrite all <img src="https://a2zee.uk/...">
to local paths like "assets/images/filename.png".

This makes the site work completely offline.

Usage:  python3 localise-images.py
"""

import re, glob, os

SRC_ROOT = os.path.dirname(__file__)
html_files = glob.glob(os.path.join(SRC_ROOT, "**/*.html"), recursive=True)

for path in html_files:
    with open(path) as f:
        content = f.read()

    def replace_url(m):
        url = m.group(0)
        filename = url.split("/")[-1]
        # Work out relative depth
        rel = os.path.relpath(path, SRC_ROOT)
        depth = rel.count(os.sep)
        prefix = "../" * depth
        return f"{prefix}assets/images/{filename}"

    new_content = re.sub(r'https://a2zee\.uk/_astro/[^"\'> ]+', replace_url, content)

    if new_content != content:
        with open(path, "w") as f:
            f.write(new_content)
        print(f"  Updated: {os.path.relpath(path, SRC_ROOT)}")

print("\nDone — all image src attributes now point to local files.")
