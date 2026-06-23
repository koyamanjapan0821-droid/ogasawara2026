const CACHE_NAME = 'ogasawara2026-v5-1-rare-kohtaro';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './README.md',
  './assets/icon.svg',
  './assets/characters/couple_ship.png',
  './assets/characters/pon_ship.png',
  './assets/characters/pon_snorkel.png',
  './assets/characters/pon_yashi.png',
  './assets/characters/wai_birdwatch01.png',
  './assets/characters/wai_birdwatch02.png',
  './assets/characters/wai_pants.png',
  './assets/characters/rare_kohtaro.png',
  './assets/birds/akagashirakarasubato01.jpg',
  './assets/birds/akagashirakarasubato02.jpg',
  './assets/birds/akagashirakarasubato03.jpg',
  './assets/birds/anadori01.jpg',
  './assets/birds/anadori02.jpg',
  './assets/birds/anadori03.jpg',
  './assets/birds/hahajimameguro01.jpg',
  './assets/birds/hahajimameguro02.jpg',
  './assets/birds/hahajimameguro03.jpg',
  './assets/birds/isohiyodori01.jpg',
  './assets/birds/isohiyodori02.jpg',
  './assets/birds/isohiyodori03.jpg',
  './assets/birds/katsuodori01.jpg',
  './assets/birds/katsuodori02.jpg',
  './assets/birds/katsuodori03.jpg',
  './assets/birds/kuroajisashi01.jpg',
  './assets/birds/kuroajisashi02.jpg',
  './assets/birds/kuroajisashi03.jpg',
  './assets/birds/kyoujoshigi01.jpg',
  './assets/birds/kyoujoshigi02.jpg',
  './assets/birds/kyoujoshigi03.jpg',
  './assets/birds/mejiro01.jpg',
  './assets/birds/mejiro02.jpg',
  './assets/birds/mejiro03.jpg',
  './assets/birds/munaguro01.jpg',
  './assets/birds/munaguro02.jpg',
  './assets/birds/munaguro03.jpg',
  './assets/birds/ogasawaranosuri01.jpg',
  './assets/birds/ogasawaranosuri02.jpg',
  './assets/birds/ogasawaranosuri03.jpg',
  './assets/birds/onagamizunagidori01.jpg',
  './assets/birds/onagamizunagidori02.jpg',
  './assets/birds/onagamizunagidori03.jpg',
  './assets/birds/seguroajisashi01.jpg',
  './assets/birds/seguroajisashi02.jpg',
  './assets/birds/seguroajisashi03.jpg'
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
