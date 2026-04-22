# FNC Tool — deploy-ready

Static PWA voor ABRO 2026 eisencheck, framework-mappings en Rijksoverheid-normen.

## Deploy

### Cloudflare Pages (aanbevolen)

**Eenmalig:**
1. Domein registreren of GitHub Pages gebruiken
2. DNS naar Cloudflare delegeren (NS-records van CF instellen bij registrar)
3. Op dash.cloudflare.com → **Pages** → Create project → Direct Upload of Git
4. Upload deze folder
5. Custom domain koppelen
6. **Zero Trust → Access → Applications**: e-mail whitelist aanzetten

**Deploy via Wrangler CLI (voor updates):**
```bash
npx wrangler pages deploy . --project-name fnc-tool
```

### Lokaal testen voor deploy
```bash
python3 -m http.server 8080
open http://localhost:8080/
```

## Security headers
Zit in `_headers` — Cloudflare Pages neemt automatisch over:
- CSP (geen externe scripts)
- HSTS
- X-Frame-Options SAMEORIGIN
- X-Content-Type-Options nosniff
- Permissions-Policy (geen camera/mic/geo)
- X-Robots-Tag noindex

## Auth
Niet ingebouwd in de code — regel via **Cloudflare Access** (geen anonieme toegang).
Zet `robots.txt` Disallow: / zodat zoekmachines niks indexeren.

## Inhoud vrijgegeven voor publicatie
- ABRO 2026 (Staatscourant, openbaar)
- ABDO 2019 (publiek)
- TBB Stelsel (publiek)
- BIO 2.0, NIST CSF 2.0, ISO 27001/27002, CSA CCM, ISO 45001
- JSCU Logging Essentials
