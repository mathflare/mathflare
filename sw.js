self.addEventListener('install', async event => {
    console.log('install event')
  });
  
  self.addEventListener('fetch', async event => {
    console.log('fetch event')
  });
  const cacheName = 'pwa-conf-v1';
const staticAssets = [
  './',
  './index.html',
  './app.js',
  './Styles/Site.css',
  './Styles/Site.css',
  './Content/bootstrap.css',
  './Scripts/bootstrap.js',
  './Scripts/jquery-3.0.0.js'
];
self.addEventListener('install', async event => {
    const cache = await caches.open(cacheName); 
    await cache.addAll(staticAssets); 
  });
  self.addEventListener('fetch', event => {
    const req = event.request;
    event.respondWith(cacheFirst(req));
  });
  async function cacheFirst(req) {
    const cache = await caches.open(cacheName); 
    const cachedResponse = await cache.match(req); 
    return cachedResponse || fetch(req); 
  }