self.addEventListener("install",  event => {
  event.waitUntil(precache());
})

self.addEventListener('fetch', event => {
    const request =  event.request;
    // Get
    if (request.method != 'GET') {
        return;
    }
    // Buscar cache
    event.respondWith(cachedResponse(request));
    // Actualizar el cahe
    event.waitUntil(updateCache(request));
})

async function precache() {
  const cache = await caches.open("v1");
  return cache.addAll([
    "/",
    "/index.html",
    "/assets/index.js",
    "/assets/MediaPlayer.js",
    "/assets/plugins/AutoPlay.js",
    "/assets/plugins/AutoPause.js",
    "/assets/index.css",
    "/assets/MONEDA-JAPONESA.mp4",
  ]);
}

async function cachedResponse(request) {
    const cache = await caches.open("v1");
    const response = await cache.match(request);
    return response || fetch(request);
}

async function updateCache(request) {
    const cache = await caches.open("v1");
    const response = await fetch(request);
    return cache.put(request, response);
}