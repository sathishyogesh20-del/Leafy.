// Leafy Service Worker — v7 Multilingual & Auth Edition
const CACHE = 'leafy-v7';
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
  // Ignore external API, Firebase, and Groq endpoints from cache
  const url = e.request.url;
  if (
    url.includes('api.groq.com') ||
    url.includes('api.openai.com') ||
    url.includes('identitytoolkit.googleapis.com') ||
    url.includes('firebaseio.com') ||
    url.includes('gstatic.com/firebasejs')
  ) {
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
