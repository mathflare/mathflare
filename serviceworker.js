const cache_name = "mathflare-offline";
const urlsToCache = ['public/offline.html'];
const self = this;
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cache_name)
            .then((cache) => {
                console.log('initialized cache');
                return cache.addAll(urlsToCache);
            })
    )
});
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(() => {
                return fetch(event.request)
                    .catch(() => caches.match('public/offline.html'))
            })
    )
});
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [];
    cacheWhitelist.push(cache_name);
    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if (!cacheWhitelist.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            })
        ))

    )
});