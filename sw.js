// Service worker minimo, richiesto da Chrome/Android per considerare il sito "installabile".
// Non serve fare vera cache offline (l'app vive dentro un iframe di Apps Script, che
// richiede comunque connessione): questo si limita a rispondere alle richieste,
// requisito tecnico per l'installabilità.
self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request));
});
