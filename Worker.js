---
layout: compress
---
const static2HAAS = '2HAAS-cache-v1';
const assets = [
  '/assets/img/off.jpg',
  '/assets/img/404.gif',
  '/assets/img/loading.gif',
  '/assets/img/contact.jpg',
  '/assets/img/blog-image.png',
  '/assets/img/message.gif'
];
self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(static2HAAS).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});
// activate event
self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== staticCacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});
// fetch event
self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
});
