// Leafy Service Worker — v6 Apple Edition
const CACHE = 'leafy-apple-v6';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './plants-data.js',
  './icon-192.svg',
  './icon-512.svg'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  // Ignore OpenAI / xAI external API calls in cache
  if (e.request.url.includes('api.x.ai') || e.request.url.includes('api.openai.com')) {
    return;
  }
  e.respondWith(
    caches.match(e.request).then(cached => {
      const live = fetch(e.request).then(res => {
        if (res?.status === 200) {
          caches.open(CACHE).then(c => c.put(e.request, res.clone()));
        }
        return res;
      }).catch(() => cached);
      return cached || live;
    })
  );
});
