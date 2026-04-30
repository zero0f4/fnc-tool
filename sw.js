const CACHE_NAME = 'fnc-tool-v10';
const ASSETS = [
  'home.html',
  'index.html',
  'jscu.html',
  'tbb.html',
  'abdo.html',
  'diamond.html',
  'bronnen.html',
  'handleiding.html',
  'werkblad.html',
  'changelog.html',
  'styles.css',
  'app.js',
  'abro-data.js',
  'jscu-events.js',
  'frameworks-ref.js',
  'menu.js',
  'icons.js',
  'theme.js',
  'globalsearch.js',
  'easter.js',
  'xlsx.mini.min.js',
  'manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  const isHtml = event.request.mode === 'navigate' ||
                 url.pathname.endsWith('.html') ||
                 url.pathname === '/';
  const isData = url.pathname.endsWith('.js') || url.pathname.endsWith('.css');

  if (isHtml || isData) {
    // Network-first: altijd verse HTML/JS/CSS, val terug op cache bij offline
    event.respondWith(
      fetch(event.request)
        .then(resp => {
          const copy = resp.clone();
          caches.open(CACHE_NAME).then(c => c.put(event.request, copy)).catch(() => {});
          return resp;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Cache-first voor overige assets (icons, fonts, manifest, etc.)
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
