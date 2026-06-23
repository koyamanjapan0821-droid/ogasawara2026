const CACHE_NAME = 'ogasawara2026-v4-drag41';
const ASSETS = [
  './','./index.html','./style.css','./app.js','./manifest.json','./README.md','./assets/icon.svg',
  './assets/characters/couple_ship.png',
  './assets/characters/pon_ship.png',
  './assets/characters/pon_snorkel.png',
  './assets/characters/pon_yashi.png',
  './assets/characters/wai_birdwatch01.png',
  './assets/characters/wai_birdwatch02.png',
  './assets/characters/wai_pants.png'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(async cache => {
    for (const asset of ASSETS) {
      try { await cache.add(asset); } catch(e) {}
    }
  }).then(()=>self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(fetch(event.request).then(response => {
    const copy = response.clone();
    caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy)).catch(()=>{});
    return response;
  }).catch(() => caches.match(event.request).then(cached => cached || caches.match('./index.html'))));
});
