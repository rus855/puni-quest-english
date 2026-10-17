// ===== 英語の しくみ：単語の 章・単語の 問題・スペル入力・音声・トドメの スペル =====
"use strict";

// ---------- 単語の データ ----------
// VOCAB["v:word"] = { id, w: 表示する つづり, p: 品詞, m: 意味, g: 学年, alt: べつの つづり }
const VOCAB = {};
const POS_NAME = { 名: "名詞", 動: "動詞", 形: "形容詞", 副: "副詞", 前: "前置詞", 接: "接続詞", 代: "代名詞", 助: "助動詞", 間: "間投詞" };
// 学年の 表示（保護者の 画面だけで 使う）
const G_LABEL = { 1: "中1", 2: "中2", 3: "中3", 4: "高1", 5: "高2", 6: "高3" };
(function () {
  VOCAB_SRC.forEach(([g, id, name, icon, d]) => {
    const items = d.trim().split("\n").map((line) => {
      const [key, p, m, alt] = line.trim().split("|");
      const vid = "v:" + key;
      if (VOCAB[vid]) console.warn("単語の 重複", key);
      VOCAB[vid] = { id: vid, w: key.replace(/#\d+$/, ""), p, m, g, alt: alt ? alt.split(",") : [] };
      return vid;
    });
    CHAPTERS.push({ id, w: "kanji", g, sec: "a" + g, name, icon, items, boss: name.replace(/\s+/g, "") });
  });
})();
// 学年ごとの エリア名（子どもの 画面では 学年ではなく エリアの 名前で 見せる）
const SEC_LABEL = {
  a1: { icon: "🌱", name: "わかばの森" }, a2: { icon: "🌷", name: "はなの丘" }, a3: { icon: "🌊", name: "なみの海辺" },
  a4: { icon: "⛰️", name: "こだまの山" }, a5: { icon: "🏯", name: "むかしの町" }, a6: { icon: "🌌", name: "ほしの塔" },
};
const vocabOf = (id) => VOCAB[id];

// 意味が かさなっているか（同じ 意味の 単語を まちがいの 選択肢に しない）
// 意味を「、」で 区切り、（ ）の 補足と 終わりの「する」を とって くらべる
const meanParts = (m) => m.replace(/（[^）]*）/g, "").split(/[、・]/).map((x) => x.trim().replace(/する$/, "")).filter(Boolean);
const stem = (s) => s.replace(/[ぁ-ん]+$/, "");
// 漢字・カタカナを ふくむ 2文字の つながり（「調査」「予約」など）
const bigrams = (s) => { const out = []; for (let i = 0; i < s.length - 1; i++) { const g = s.slice(i, i + 2); if (/[一-龯ァ-ヶ]/.test(g) && !/[〜（）]/.test(g)) out.push(g); } return out; };
// ひらがなが 多くて 見分けにくい 同じ 意味の 語（どちらも 正解に 見えるので いっしょに 出さない）
const SYN = [["glad", "happy"], ["big", "large"], ["begin", "start"], ["finish", "end"], ["almost", "nearly"], ["maybe", "probably", "perhaps"], ["smart", "clever"], ["often", "frequently"], ["store", "shop"], ["difficult", "hard"], ["gentle", "kind"], ["quickly", "fast"], ["sorrow", "grief"], ["moreover", "besides"]];
const synOf = (w) => SYN.find((g) => g.includes(w.toLowerCase()));
function meanOverlap(a, b, wa, wb) {
  if (wa && wb) { const s = synOf(wa); if (s && s.includes(wb.toLowerCase())) return true; }
  const A = meanParts(a), Bp = meanParts(b);
  if (A.some((x) => Bp.some((y) => x === y || (Math.min(x.length, y.length) >= 2 && (x.includes(y) || y.includes(x))) || (stem(x).length >= 1 && stem(x) === stem(y))))) return true;
  const ga = new Set(bigrams(a.replace(/（[^）]*）/g, "")));
  return bigrams(b.replace(/（[^）]*）/g, "")).some((g) => ga.has(g));
}
// つづりの にている度（レーベンシュタイン距離）
function editDist(a, b) {
  const m = a.length, n = b.length, d = Array.from({ length: m + 1 }, (_, i) => [i]);
  for (let j = 1; j <= n; j++) d[0][j] = j;
  for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++) d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return d[m][n];
}
// まちがいの 選択肢：同じ 品詞・近い 学年から、意味の かさならない ものを えらぶ
const DCACHE = {}, SCACHE = {};
function vocabDistractors(V, n, byWord) {
  // 意味の かさならない 単語の 一覧は 1回 計算したら おぼえておく（スマホでも 速く）
  const all = DCACHE[V.id] || (DCACHE[V.id] = Object.values(VOCAB).filter((x) => x.id !== V.id && x.w.toLowerCase() !== V.w.toLowerCase() && !meanOverlap(x.m, V.m, x.w, V.w)));
  const out = [];
  const add = (list) => { for (const x of shuffle(list)) { if (out.length >= n) return; if (!out.some((o) => o.w === x.w || meanOverlap(o.m, x.m, o.w, x.w))) out.push(x); } };
  if (byWord) {
    // つづりの にた 単語（affect と effect など）を 1つ まぜる
    const sim = SCACHE[V.id] || (SCACHE[V.id] = all.filter((x) => Math.abs(x.g - V.g) <= 2 && editDist(x.w.toLowerCase(), V.w.toLowerCase()) <= Math.max(2, Math.floor(V.w.length / 3))));
    add(shuffle(sim).slice(0, 1));
  }
  add(all.filter((x) => x.p === V.p && x.g === V.g));
  add(all.filter((x) => x.p === V.p && Math.abs(x.g - V.g) <= 1));
  add(all.filter((x) => x.p === V.p));
  add(all);
  return out.slice(0, n);
}

// ---------- 音声（BGMと 同じ しくみで 鳴らす ＝ マナーモードでは 鳴らない） ----------
// 音声を 使えるのは BGMが オンの ときだけ
const audioOK = () => !!(typeof S !== "undefined" && S && S.bgm);
const isListenId = (id) => !!(typeof BANK !== "undefined" && BANK[id] && BANK[id].au);
const AUD = (() => {
  const cache = {};
  let token = 0, srcs = [];
  const url = (f) => `${window.PQ_BASE || ""}audio/${f}.mp3`;
  function load(f) {
    if (!cache[f]) {
      const ac = BGM.ctx();
      cache[f] = fetch(url(f)).then((r) => { if (!r.ok) throw new Error(r.status); return r.arrayBuffer(); })
        .then((b) => new Promise((ok, ng) => ac.decodeAudioData(b, ok, ng)))
        .catch((e) => { delete cache[f]; throw e; });
    }
    return cache[f];
  }
  function stop() { token++; srcs.forEach((s) => { try { s.stop(); } catch (e) { /* 無視 */ } }); srcs = []; BGM.duck(false); }
  // files を じゅんばんに 鳴らす（せりふの 間は すこし あける）
  async function play(files, onEnd) {
    stop();
    const my = ++token, ac = BGM.ctx();
    try {
      if (ac.state === "suspended") await ac.resume();
      const bufs = await Promise.all(files.map(load));
      if (my !== token) return;
      BGM.duck(true);
      let t = ac.currentTime + 0.15;
      bufs.forEach((b) => {
        const s = ac.createBufferSource(); s.buffer = b;
        const g = ac.createGain(); g.gain.value = 1;
        s.connect(g).connect(ac.destination); s.start(t); srcs.push(s);
        t += b.duration + 0.55;
      });
      setTimeout(() => { if (my === token) { BGM.duck(false); srcs = []; if (onEnd) onEnd(); } }, (t - ac.currentTime) * 1000);
    } catch (e) { if (my === token) { BGM.duck(false); toast("音声を 読みこめなかったよ（ネットに つながっているか たしかめてね）"); } }
  }
  return { play, stop, preload: (files) => files.forEach((f) => load(f).catch(() => {})) };
})();
// 単語の 音声ファイル名（記号は _ に する）
const wordAudio = (V) => "w/" + V.w.toLowerCase().replace(/[^a-z0-9]+/g, "_");
// 問題の 🔊 ボタン
function playQ() {
  if (!B || !B.q || !B.q.au) return;
  if (!audioOK()) { toast("🎵 BGMを オンに すると 聞けるよ"); return; }
  const b = $("aubtn"); if (b) b.classList.add("playing");
  AUD.play(B.q.au, () => { const x = $("aubtn"); if (x) x.classList.remove("playing"); });
}
// ずかんなどで 単語を 聞く
function sayWord(id) {
  const V = vocabOf(id);
  if (!V) return;
  if (!audioOK()) { toast("🎵 BGMを オンに すると 聞けるよ"); return; }
  AUD.play([wordAudio(V)]);
}
// ずかんで リスニングの 音声を 聞く
function playCard(id) { if (!audioOK()) { toast("🎵 BGMを オンに すると 聞けるよ"); return; } AUD.play(BANK[id].au); }
const auButton = () => `<button class="aubtn" id="aubtn" onclick="playQ()">🔊 もう一度 聞く</button>`;
const mannerNote = () => `<small class="aunote">📳 マナーモードの ときは 音が 聞こえないよ</small>`;

// ---------- 単語の 問題 ----------
// kind：vmean 英→意味、vword 意味→英、vspell つづりを 入力、vlisten 聞いて 意味、vdojo スペル道場（ヒントなし）
function makeVocabQ(id, kind) {
  const V = vocabOf(id);
  const pos = POS_NAME[V.p] || V.p;
  if (!kind) {
    const r = Math.random(), sp = V.w.length <= 12 && !/[^A-Za-z]/.test(V.w) ? 0.2 : 0;
    const li = audioOK() ? 0.12 : 0;
    kind = r < li ? "vlisten" : r < li + sp ? "vspell" : r < li + sp + 0.36 ? "vword" : "vmean";
  }
  const explain = `<span class="en big2">${esc(V.w)}</span>［${pos}］${esc(V.m)}`;
  if (kind === "vspell" || kind === "vdojo") {
    const n = V.w.length, dojo = kind === "vdojo";
    // 文字数の ます（ふつうは 1文字目だけ 見せる。道場は ヒントなし）
    const hint = `<span class="lslots">${V.w.split("").map((c, i) => `<i>${!dojo && i === 0 ? esc(c) : ""}</i>`).join("")}</span>`;
    return { id, kind: "spell", ans: [V.w, ...V.alt], explain, au: audioOK() && !dojo ? [wordAudio(V)] : null,
      head: `<div class="qlabel">${dojo ? "⌨️ スペル道場：英単語を 入力しよう" : "⌨️ 英単語を 入力しよう"}</div><div class="qword fsm">${esc(V.m)}<small class="pos">［${pos}］</small></div><div class="qhint">${hint}<small>（${n}文字）</small></div>` };
  }
  if (kind === "vword") {
    const ds = vocabDistractors(V, 3, true).map((x) => `<span class="en">${esc(x.w)}</span>`);
    const q = { id, kind: "choice", explain, head: `<div class="qlabel">英語で 言うと？</div><div class="qword fsm">${esc(V.m)}<small class="pos">［${pos}］</small></div>` };
    mkOpts(q, `<span class="en">${esc(V.w)}</span>`, ds);
    q.cls = optCls(q.opts);
    return q;
  }
  const ds = vocabDistractors(V, 3, false).map((x) => esc(x.m));
  if (kind === "vlisten") {
    const q = { id, kind: "choice", explain, au: [wordAudio(V)], head: `<div class="qlabel">🎧 聞こえた 英単語の 意味は？</div>${auButton()}${mannerNote()}` };
    mkOpts(q, esc(V.m), ds); q.cls = "fch";
    return q;
  }
  const q = { id, kind: "choice", explain, au: null, head: `<div class="qlabel">意味は？</div><div class="qword en">${esc(V.w)}</div><small class="pos">［${pos}］</small>` };
  mkOpts(q, esc(V.m), ds);
  q.cls = "fch";
  return q;
}

// ---------- 入力の 判定 ----------
const normAns = (s) => String(s).trim().toLowerCase().replace(/[’‘`]/g, "'").replace(/\s+/g, " ").replace(/[.!?]$/, "");
function spellKey(e) { if (e.key === "Enter") { e.preventDefault(); submitSpell(); } }
function submitSpell() {
  if (!B || B.busy || !B.q || B.q.kind !== "spell") return;
  const el = $("spin"), v = el ? el.value : "";
  if (!v.trim()) { toast("英語を 入力してね"); return; }
  const ok = B.q.ans.some((a) => normAns(a) === normAns(v));
  el.blur(); el.readOnly = true;
  $("spbox").classList.add(ok ? "right" : "wrong");
  if (ok) showMaru($("spbox"));
  judge(ok);
}
function spellGiveUp() {
  if (!B || B.busy || !B.q || B.q.kind !== "spell") return;
  const el = $("spin"); if (el) { el.blur(); el.readOnly = true; }
  judge(false);
}
// 入力する とき、キーボードに かくれないように 入力らんを 見える 位置へ
function spellFocus() { setTimeout(() => { const b = $("spbox"); if (b) b.scrollIntoView({ block: "center", behavior: "smooth" }); }, 350); }

// ---------- トドメの スペル（単語の国の ボス） ----------
// 出会った 単語の 文字を ならべて ボスに トドメを さす（3回 まちがえても たおせる）
let TS = null;
function startSpellFinish() {
  B.busy = true;
  const vp = B.pool.filter((x) => x.startsWith("v:") && /^[A-Za-z]{3,10}$/.test(vocabOf(x).w));
  const seen = vp.filter((id) => S.cards[id] && S.cards[id].s > 0);
  const id = pick(seen.length ? seen : vp);
  const V = vocabOf(id), letters = V.w.toLowerCase().split("");
  let order = shuffle(letters.map((_, i) => i));
  // 正しい じゅんばんの ままに ならないように
  for (let k = 0; k < 5 && order.every((x, i) => x === i); k++) order = shuffle(order);
  TS = { id, w: V.w.toLowerCase(), letters, order, got: [], fails: 0 };
  snd("special");
  modal(`<div class="mtitle">⚡ トドメの スペル！</div>
    <p class="small">「<b>${esc(V.m)}</b>」を あらわす 英単語を、文字を じゅんばんに タップして つくろう！</p>
    <div class="tsword" id="tsword">${letters.map(() => "<i>＿</i>").join("")}</div>
    <div class="tstiles">${order.map((i) => `<button class="tstile" id="ts${i}" onclick="tsTap(${i})">${letters[i]}</button>`).join("")}</div>
    <p class="small" id="tsmsg">&nbsp;</p>`, "trace");
}
function tsTap(i) {
  if (!TS) return;
  const need = TS.w[TS.got.length], b = $("ts" + i);
  if (!b || b.disabled) return;
  if (TS.letters[i] === need) {
    snd("tap"); b.disabled = true; b.classList.add("used");
    TS.got.push(i);
    $("tsword").children[TS.got.length - 1].textContent = need;
    if (TS.got.length === TS.w.length) tsDone(TS.fails === 0);
    return;
  }
  TS.fails++; snd("ng"); anim(b, "shake");
  $("tsmsg").textContent = `おしい！ ちがう 文字だよ（あと ${Math.max(0, 3 - TS.fails)}回）`;
  if (TS.fails >= 3) {
    // 3回 まちがえたら 答えを 見せて たおす
    $("tsword").innerHTML = TS.w.split("").map((c) => `<i>${c}</i>`).join("");
    setTimeout(() => { closeModal(); TS = null; toast("なんとか たおした！"); setTimeout(() => enemyDown(), 300); }, 1100);
  }
}
function tsDone(perfect) {
  const id = TS.id; TS = null;
  setTimeout(() => {
    closeModal();
    const ev = onCorrect(id);
    if (ev === "new") B.news.push(id);
    if (ev === "up") B.ups.push(id);
    const bonus = perfect ? 25 : 10;
    S.coins += bonus; B.coins += bonus; save();
    snd("special");
    fxText(perfect ? "パーフェクト！" : "トドメ！", "skill");
    setTimeout(() => enemyDown(), 500);
  }, 450);
}

// ---------- ステージの 名前（章の 中身の 英語から つける） ----------
// 例：「School の 小道」「Library の 広場」…（ステージ1〜3は その範囲で 出る ことばから）
const EN_PLACES = {
  kanji: [["小道", "広場", "森"], ["辞書の間", "単語の書庫", "ことばの大樹", "スペルの神殿", "語彙の宮殿", "アルファベット城"]],
  kotoba: [["門", "坂道", "迷路"], ["文法塔", "ルールの城", "時計じかけの間", "グラマー神殿", "ことわりの砦", "テンスの塔"]],
  math: [["広場", "回廊", "塔"], ["組み立て工房", "パズルの城", "つなぎの神殿", "構文の砦", "フレーズの宮殿", "からくり屋敷"]],
  sci: [["小道", "谷", "塔"], ["放送室", "こだまの洞くつ", "ラジオの塔", "ひびきの神殿", "音楽堂", "電波の城"]],
  soc: [["門", "広場", "図書館"], ["大ホール", "おしゃべり城", "ものがたりの塔", "会話の宮殿", "読書の神殿", "劇場"]],
};
function makeStageNames() {
  const enOf = (s) => { const m = String(s).replace(/<[^>]+>/g, "").match(/[A-Za-z][A-Za-z '’.,!?~-]*/); return m ? m[0].trim().replace(/[ ,.!?-]+$/, "") : ""; };
  CHAPTERS.forEach((ch, idx) => {
    if (CH_STAGE_NAMES[ch.id]) return;
    const P = EN_PLACES[ch.w]; if (!P) return;
    const its = ch.items, k = Math.ceil(its.length / 3);
    const key = (i) => {
      const id = its[Math.min(its.length - 1, i)];
      if (id.startsWith("v:")) {
        // 単語の 章は その範囲の 名詞を えらぶ
        const range = its.slice(i, i + k).map(vocabOf).filter((v) => v.p === "名" && /^[A-Za-z]+$/.test(v.w));
        const v = range[0] || vocabOf(id);
        return v.w.charAt(0).toUpperCase() + v.w.slice(1);
      }
      const b = BANK[id] || {};
      return enOf(b.t) || String(b.t || ch.name).replace(/^.*：/, "");
    };
    // リスニング・会話の 章は 答えが わからないように、ことばを 使わない 名前に する
    const GEN = ["イヤホン", "マイク", "スピーカー", "レコード", "ラジオ", "オルゴール", "ベル", "ささやき", "ハーモニー", "メロディー", "おしゃべり", "あいさつ", "手紙", "絵本", "しおり", "ポスター"];
    if (ch.w === "sci" || ch.w === "soc") {
      const g = (n) => GEN[(idx * 3 + n) % GEN.length];
      CH_STAGE_NAMES[ch.id] = [`${g(0)}の ${P[0][0]}`, `${g(1)}の ${P[0][1]}`, `${g(2)}の ${P[0][2]}`, `ヌシの ${P[1][idx % P[1].length]}`];
      return;
    }
    const short = (s) => (s.length > 16 ? s.slice(0, 15) + "…" : s);
    CH_STAGE_NAMES[ch.id] = [`${short(key(0))}の ${P[0][0]}`, `${short(key(k))}の ${P[0][1]}`, `${short(key(2 * k))}の ${P[0][2]}`, `ヌシの ${P[1][idx % P[1].length]}`];
  });
}
