// データの 読みこみと 整合性チェック（ブラウザなしで）
const fs = require("fs"), path = require("path"), vm = require("vm");
const dir = process.argv[2];
const ctx = { console, window: {}, document: { addEventListener() {} }, navigator: {}, setTimeout, Math, JSON, Object, Array, String, Number, Set, Promise };
vm.createContext(ctx);
const files = ["data.js", "world.js", "e_vocab1.js", "e_vocab2.js", "e_vsent1.js", "e_vsent2.js", "eigo.js", "e_gram.js", "e_gram2.js", "e_idiom.js", "e_idiom2.js", "e_listen.js", "e_listen2.js", "e_talk.js", "e_talk2.js"];
for (const f of files) vm.runInContext(fs.readFileSync(path.join(dir, f), "utf8") + `\n;globalThis.__ok=1;`, ctx, { filename: f });
vm.runInContext(`
var out = [];
var shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
globalThis.shuffle = shuffle;
const byW = {};
CHAPTERS.forEach((c) => { (byW[c.w] = byW[c.w] || []).push(c); });
for (const w in byW) out.push(w + ": " + byW[w].length + "章 " + byW[w].reduce((a, c) => a + c.items.length, 0) + "問  学年別 " + [1,2,3,4,5,6].map(g => byW[w].filter(c => c.g === g).length).join("/"));
out.push("単語 " + Object.keys(VOCAB).length);
// 章ごとの 問題数
CHAPTERS.forEach((c) => { if (c.items.length < 8) out.push("問題が少ない章 " + c.id + " " + c.items.length); if (!c.g || !c.sec) out.push("学年なし " + c.id); });
// 章id の 重複
const ids = CHAPTERS.map((c) => c.id); ids.forEach((x, i) => { if (ids.indexOf(x) !== i) out.push("章id重複 " + x); });
// 選択肢の 重複・正解の まちがいへの 混入
for (const k in BANK) { const b = BANK[k]; if (b.type === "choice") { const all = [b.a, ...b.ng]; if (new Set(all).size !== all.length || b.ng.length < 3) out.push("選択肢 " + k + " " + b.t); } }
// 単語の 意味の かさなり（同じ 章の 中で）
CHAPTERS.filter((c) => c.w === "kanji").forEach((c) => { const vs = c.items.map((id) => VOCAB[id]); vs.forEach((a, i) => vs.forEach((b, j) => { if (i < j && meanOverlap(a.m, b.m)) out.push("意味かさなり(同章) " + a.w + "=" + b.w + " " + a.m + " / " + b.m); })); });
// まちがいの 選択肢が つくれるか
let bad = 0;
Object.values(VOCAB).forEach((V) => { const d1 = vocabDistractors(V, 3, false), d2 = vocabDistractors(V, 3, true); if (d1.length < 3 || d2.length < 3) { bad++; out.push("選択肢不足 " + V.w); } });
out.push("選択肢不足 " + bad);
// 音声ファイルの 一覧
const au = [];
for (const k in BANK) { const b = BANK[k]; if (b.au) b.say.forEach(([v, s], i) => au.push({ f: b.au[i], v, s, r: b.rate })); }
const ws = {}; Object.values(VOCAB).forEach((V) => { ws["w/" + V.w.toLowerCase().replace(/[^a-z0-9]+/g, "_")] = V.w; });
for (const f in ws) au.push({ f, v: "F", s: ws[f], r: "-10%" });
globalThis.__au = au;
out.push("音声 " + au.length + "（単語 " + Object.keys(ws).length + "）");
globalThis.__out = out;
`, ctx);
console.log(ctx.__out.join("\n"));
if (process.argv[3]) fs.writeFileSync(process.argv[3], JSON.stringify(ctx.__au));
