const CACHE_NAME = 'pwa-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/images/icon.png'
];

// Instala el Service Worker y almacena los archivos en caché
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Archivos almacenados en caché');
                return cache.addAll(urlsToCache);
            })
    );
});

// Intercepta las solicitudes de red para servir desde la caché si es posible
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) {
                    return response; // Devuelve el archivo de la caché
                }
                return fetch(event.request); // Si no está en caché, lo busca en la red
            })
    );
});

// Elimina la caché vieja cuando se actualiza el Service Worker
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
