self.addEventListener("install", (e) => {
  e.waitUntil(caches.open("rmp-studio-v1").then((c) => c.addAll(["./", "./index.html", "./vault.html", "./icon.svg", "./manifest.json"])));
});
self.addEventListener("fetch", (e) => {
  e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request)));
});
