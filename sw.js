// オフラインでも遊べるように、アプリのファイルを保存しておく
// ※アプリを更新したら VERSION の数字を上げる
// ぷにまるクエスト（同じ サイト）の 保存とは 名前を わけている
const PREFIX = "eigo-";
const VERSION = PREFIX + "v8";
const FILES = ["./", "index.html", "style.css", "data.js", "world.js", "e_vocab1.js", "e_vocab2.js", "e_vsent1.js", "e_vsent2.js", "eigo.js", "e_gram.js", "e_gram2.js", "e_idiom.js", "e_idiom2.js", "e_listen.js", "e_listen2.js", "e_talk.js", "e_talk2.js", "cloud.js", "pets.js", "music.js", "gear.js", "extra.js", "treasure.js", "hiken.js", "app.js", "manifest.webmanifest", "icons/icon-192.png", "icons/apple-touch-icon.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k.startsWith(PREFIX) && k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
// ネットにつながるときは最新を取得し、つながらないときは保存したものを使う
self.addEventListener("fetch", (e) => {
  // クラウドセーブなど、ほかのサイトへの通信は保存しない
  const u = new URL(e.request.url);
  if (e.request.method !== "GET" || u.origin !== location.origin) return;
  // 版の 確認は いつも ネットから（保存しない）
  if (u.pathname.endsWith("version.json")) return;
  e.respondWith(
    fetch(e.request).then((res) => {
      const copy = res.clone();
      caches.open(VERSION).then((c) => c.put(e.request, copy));
      return res;
    }).catch(() => caches.match(e.request, { ignoreSearch: true }))
  );
});
