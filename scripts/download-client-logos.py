"""Download client logos from official sources into public/clients/."""
import re
import urllib.request
from pathlib import Path

OUT = Path(__file__).resolve().parents[1] / "public" / "clients"

LOGOS = {
    "tamanna-aviation.png": "https://tamannaaviation.com/img/remove.png",
    "a-biz-chancellor.png": "https://abizchancellor.com/wp-content/uploads/2025/09/A-BIZ-LOGO-1-e1757938635786.png",
    "eift.png": "https://eift.co.in/assets/images/logo/logo.png",
    "dilli-darbar.png": "https://dillidarbar.co.in/Images/LogoNew.png",
    "miraki-glaze.png": "https://mirakiglaze.com/wp-content/uploads/2023/12/20230604_143548_0000__1_-removebg-preview-1.png",
    "sheaf.png": "https://sheaf.co.in/favicon.png",
}


def download(name: str, url: str) -> None:
    dest = OUT / name
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=30) as resp:
        data = resp.read()
    dest.write_bytes(data)
    print(f"OK {name} ({len(data)} bytes) <- {url}")


def find_ipc_logo() -> str | None:
    html_path = OUT / "_html" / "indian-pest-control.html"
    if not html_path.exists():
        return None
    html = html_path.read_text(encoding="utf-8", errors="ignore")
    for m in re.findall(
        r"https?://ipcpestcontrol\.com/wp-content/uploads/[^\"'\s>]+\.(?:png|jpg|webp)",
        html,
        flags=re.I,
    ):
        low = m.lower()
        if any(k in low for k in ("logo", "ipc", "icon", "brand", "site")):
            return m
    return None


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    for name, url in LOGOS.items():
        try:
            download(name, url)
        except Exception as e:
            print(f"FAIL {name}: {e}")

    ipc = find_ipc_logo()
    if ipc:
        try:
            download("indian-pest-control.png", ipc)
        except Exception as e:
            print(f"FAIL indian-pest-control.png: {e}")
    else:
        print("SKIP indian-pest-control.png: no logo URL in HTML")


if __name__ == "__main__":
    main()
