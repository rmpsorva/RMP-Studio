self.addEventListener("install", (e) => {
  e.waitUntil(caches.open("aurion-v2").then((c) => c.addAll(["./", "./index.html", "./vault.html", "./app.js", "./hero.js", "./icon.svg", "./manifest.json"])));
  self.skipWaiting();
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== "aurion-v2").map((k) => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener("fetch", (e) => {
  e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request)));
});
