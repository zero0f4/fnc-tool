# FNC Tool

Static PWA voor ABRO 2026 eisencheck, framework-mappings en Rijksoverheid-normen.

**Live:** <https://zero0f4.github.io/fnc-tool/>

## Inhoud vrijgegeven voor publicatie

Alle bronnen in deze tool zijn **openbaar publiceerbaar**:

- ABRO 2026 (Staatscourant)
- ABDO 2019
- TBB Stelsel
- BIO 2.0
- NIST CSF 2.0
- ISO 27001 / 27002
- CSA CCM
- ISO 45001
- JSCU Logging Essentials

Geen klantgegevens, geen tokens, geen gevoelige data — de tool is volledig statisch en publiek toegankelijk.

## Deploy

### GitHub Pages (huidig)

De tool draait via GitHub Pages op <https://zero0f4.github.io/fnc-tool/>. Pushen naar `main` deployt automatisch — geen extra stappen.

### Lokaal testen

```bash
python3 -m http.server 8080
open http://localhost:8080/
```

### Alternatief: Cloudflare Pages

Als je de tool achter authenticatie wilt zetten (bv. interne distributie), verhuis van GitHub Pages naar Cloudflare Pages:

```bash
npx wrangler pages deploy . --project-name fnc-tool
```

Configureer dan **Zero Trust → Access → Applications** met e-mail-whitelist. (Niet de huidige opzet — momenteel publiek.)

## Security headers

Zit in `_headers` — wordt door Cloudflare Pages automatisch overgenomen. GitHub Pages negeert dit bestand. Headers:

- Content-Security-Policy (geen externe scripts)
- Strict-Transport-Security
- X-Frame-Options SAMEORIGIN
- X-Content-Type-Options nosniff
- Permissions-Policy (geen camera/mic/geolocation)

## Privacy

- Volledig client-side — geen server, geen API
- Geen analytics, geen trackers, geen externe scripts
- Service Worker cached lokaal voor offline gebruik
- Geen cookies; alleen localStorage voor user-prefs (taal, thema)

## Licentie

MIT.

---

Built with [Claude Code](https://claude.com/claude-code) by [zero0f4](https://github.com/zero0f4).
