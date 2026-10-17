// ===== 会話・読解の国：会話の 受けこたえ・発音・アクセント・語形変化・読解 =====
(function () {
  const ch = (id, g, name, icon, list, desc) => CHAPTERS.push({ id, w: "soc", g, sec: "a" + g, name, icon, desc, items: bank("soc", id, list) });
  // 会話：C(カード名, A の ことば（B の ところが 空らん）, 正解, まちがい)
  const C = (t, lines, a, ng, ex) => ({ t, label: "会話を 完成させよう", q: `<div class="dlg">${lines.map(([who, s]) => `<div><b>${who}:</b> <span class="en">${s === "?" ? '<span class="eblank">（　　）</span>' : s}</span></div>`).join("")}</div>`, a, ng, ex, ox: false });
  // 発音：P(カード名, 4つの 語（下線は [ ] で かこむ）, ほかと ちがう 語の 番号, 解説)
  const u = (w) => w.replace(/\[(.+?)\]/, "<u>$1</u>");
  const P = (t, ws, odd, ex) => ({ t, label: "下線部の 発音が ほかと ちがうのは？", q: "", a: `<span class="en">${u(ws[odd])}</span>`, ng: ws.filter((_, i) => i !== odd).map((w) => `<span class="en">${u(w)}</span>`), ex, ox: false });
  // アクセント：A(カード名, 4つの 語, ほかと ちがう 語の 番号, 解説)
  const A = (t, ws, odd, ex) => ({ t, label: "いちばん 強く 読む 位置が ほかと ちがうのは？", q: "", a: `<span class="en">${ws[odd]}</span>`, ng: ws.filter((_, i) => i !== odd).map((w) => `<span class="en">${w}</span>`), ex, ox: false });
  // 語の 問題：W(カード名, 問題文, 正解, まちがい, 解説)
  const W = (t, q, a, ng, ex) => ({ t, q, a, ng, ex, ox: false, ena: 1 });
  // 読解：R(カード名, 英文, 質問, 正解, まちがい, 解説)
  const R = (t, text, qq, a, ng, ex) => ({ t, label: "英文を 読んで 答えよう", q: `<div class="passage en">${text}</div><div class="rq">${qq}</div>`, a, ng, ex, ox: false });

  // ---------------- 中1 ----------------
  ch("tA1", 1, "会話の きほん", "👋", [
    C("Nice to meet you", [["A", "Nice to meet you."], ["B", "?"]], "Nice to meet you, too.", ["Yes, I do.", "You're welcome.", "See you."]),
    C("Thank you", [["A", "Thank you for your help."], ["B", "?"]], "You're welcome.", ["Nice to meet you.", "Me, too.", "No, thank you."]),
    C("How are you?", [["A", "How are you?"], ["B", "?"]], "I'm fine, thank you.", ["I'm thirteen.", "I'm from Japan.", "It's sunny."]),
    C("I'm sorry", [["A", "I'm sorry I'm late."], ["B", "?"]], "That's OK.", ["You're welcome.", "Yes, please.", "Here you are."]),
    C("Here you are", [["A", "Can I have some water?"], ["B", "?"]], "Sure. Here you are.", ["No, I'm not.", "I'm fine.", "Nice to meet you."]),
    C("What's this?", [["A", "What's this?"], ["B", "?"]], "It's a tablet.", ["Yes, it is.", "I'm a student.", "He's Ken."]),
    C("Who is he?", [["A", "Who is that boy?"], ["B", "?"]], "He's my brother.", ["It's my bag.", "Yes, he is.", "At school."]),
    C("Where is ～?", [["A", "Where is my pen?"], ["B", "?"]], "It's on the desk.", ["It's blue.", "Yes, it is.", "At six."]),
    C("What time is it?", [["A", "What time is it?"], ["B", "?"]], "It's ten thirty.", ["It's Monday.", "It's June 5.", "It's cloudy."]),
    C("What day is it?", [["A", "What day is it today?"], ["B", "?"]], "It's Friday.", ["It's ten.", "It's rainy.", "It's July."]),
    C("How's the weather?", [["A", "How's the weather today?"], ["B", "?"]], "It's sunny.", ["It's Sunday.", "I'm fine.", "It's three o'clock."]),
    C("See you", [["A", "Goodbye, Mai."], ["B", "?"]], "See you tomorrow.", ["Nice to meet you.", "Thank you.", "Here you are."]),
  ], "あいさつと かんたんな 受けこたえ");

  // ---------------- 中2 ----------------
  ch("tA2", 2, "買い物と 道案内", "🛍️", [
    C("May I help you?", [["A", "May I help you?"], ["B", "?"]], "Yes, I'm looking for a T-shirt.", ["Yes, you may.", "No, I'm not.", "You're welcome."]),
    C("How about this one?", [["A", "How about this one?"], ["B", "?"]], "It looks nice. I'll take it.", ["It's ten o'clock.", "Yes, I am.", "I'm sorry to hear that."]),
    C("Can I try it on?", [["A", "Can I try it on?"], ["B", "?"]], "Sure. The fitting room is over there.", ["No, it isn't.", "It's 3,000 yen.", "You're welcome."]),
    C("How much?", [["A", "How much is this cap?"], ["B", "?"]], "It's 1,500 yen.", ["It's red.", "I have two.", "It's mine."]),
    C("道をたずねる", [["A", "Excuse me. How can I get to the library?"], ["B", "?"]], "Go straight and turn left at the corner.", ["It opens at nine.", "Yes, I can.", "It has many books."]),
    C("Where is the station?", [["A", "Where is the station?"], ["B", "?"]], "It's next to the hospital.", ["It's at six.", "I'm a stranger.", "By bus."]),
    C("How long does it take?", [["A", "How long does it take to get there?"], ["B", "?"]], "About ten minutes on foot.", ["It's 200 meters long.", "Twice a week.", "By train, I think so."]),
    C("I'm a stranger here", [["A", "Is there a post office near here?"], ["B", "?"]], "Sorry, I'm a stranger here.", ["Yes, I do.", "No, thank you.", "You're welcome."]),
    C("Shall I ～?", [["A", "Shall I carry your bag?"], ["B", "?"]], "Yes, please. Thank you.", ["Yes, let's.", "No, I'm not.", "Yes, I shall."]),
    C("Shall we ～?", [["A", "Shall we go to the movies?"], ["B", "?"]], "Yes, let's.", ["Yes, please.", "No, I'm not.", "Yes, you shall."]),
    C("Would you like ～?", [["A", "Would you like something to drink?"], ["B", "?"]], "Orange juice, please.", ["Yes, I would like.", "I'm hungry, too.", "That's too bad."]),
    C("That's too bad", [["A", "I have a headache."], ["B", "?"]], "That's too bad. You should go home.", ["That's a good idea.", "You're welcome.", "Me, too. Let's play."]),
  ], "お店・道あんない・さそう");

  // ---------------- 中3 ----------------
  ch("tA3", 3, "電話・お願い・意見", "📞", [
    C("電話：May I speak to ～?", [["A", "Hello. May I speak to Ken, please?"], ["B", "?"]], "Sorry, he's out now.", ["Speaking to you.", "Yes, you may speak.", "I'm Ken's phone."]),
    C("電話：Speaking", [["A", "Hello. Is this Mr. Brown?"], ["B", "?"]], "Yes, speaking.", ["Yes, he is.", "No, I'm not Brown's.", "Hold on, it's me."]),
    C("Hold on", [["A", "Can I talk to Mai?"], ["B", "?"]], "Sure. Hold on, please.", ["You're welcome.", "Here you are.", "I'm afraid so."]),
    C("Can I leave a message?", [["A", "He isn't here now."], ["B", "?"]], "Can I leave a message?", ["Can I speak to him now?", "Are you Ken?", "Hold on, please."]),
    C("Could you ～?", [["A", "Could you open the window?"], ["B", "?"]], "Sure. No problem.", ["Yes, I could.", "No, you couldn't.", "I'm glad to hear that."]),
    C("Do you mind ～?", [["A", "Do you mind if I sit here?"], ["B", "?"]], "No, not at all.", ["Yes, of course. Please.", "Yes, I mind sitting.", "No, I'm afraid so."], "Do you mind 〜?「〜したら気にしますか」への許可は No, not at all."),
    C("I think so, too", [["A", "I think English is important."], ["B", "?"]], "I think so, too.", ["I don't think so, too.", "So do you.", "Neither do I."]),
    C("Why don't you ～?", [["A", "I'm bored."], ["B", "?"]], "Why don't you read this book?", ["Why are you bored?", "Because I'm bored.", "Me neither."]),
    C("Congratulations", [["A", "I passed the exam!"], ["B", "?"]], "Congratulations!", ["That's too bad.", "Never mind.", "I'm sorry to hear that."]),
    C("I'm sorry to hear that", [["A", "My grandmother is in the hospital."], ["B", "?"]], "I'm sorry to hear that.", ["Congratulations!", "That sounds fun.", "Good for you."]),
    C("Me neither", [["A", "I don't like rainy days."], ["B", "?"]], "Me neither.", ["Me, too, yes.", "So do I.", "I do, too."]),
    C("Here's your change", [["A", "That's 800 yen."], ["B", "Here's 1,000 yen."], ["A", "?"]], "Here's your change, 200 yen.", ["That's too bad.", "You can't pay.", "It's 1,800 yen."]),
  ], "電話・たのむ・意見を 言う");

  ch("tB1", 3, "発音（下線部）", "👄", [
    P("ch の発音", ["[ch]air", "[ch]ild", "[ch]eese", "s[ch]ool"], 3, "school の ch は /k/"),
    P("ea の発音①", ["h[ea]d", "br[ea]d", "r[ea]dy", "m[ea]t"], 3, "meat は /iː/、ほかは /e/"),
    P("oo の発音", ["b[oo]k", "l[oo]k", "g[oo]d", "f[oo]d"], 3, "food は /uː/、ほかは /ʊ/"),
    P("-ed の発音①", ["play[ed]", "open[ed]", "clean[ed]", "want[ed]"], 3, "wanted は /ɪd/、ほかは /d/"),
    P("-ed の発音②", ["help[ed]", "watch[ed]", "wash[ed]", "need[ed]"], 3, "needed は /ɪd/、ほかは /t/"),
    P("-s の発音", ["book[s]", "cup[s]", "cat[s]", "dog[s]"], 3, "dogs は /z/、ほかは /s/"),
    P("th の発音①", ["[th]ink", "[th]ree", "[th]ank", "[th]is"], 3, "this は /ð/（にごる）、ほかは /θ/"),
    P("ou の発音①", ["h[ou]se", "m[ou]th", "s[ou]th", "c[ou]ntry"], 3, "country は /ʌ/、ほかは /aʊ/"),
    P("a の発音", ["n[a]me", "t[a]ke", "m[a]ke", "f[a]ther"], 3, "father は /ɑː/、ほかは /eɪ/"),
    P("i の発音", ["t[i]me", "l[i]ke", "n[i]ce", "g[i]ve"], 3, "give は /ɪ/、ほかは /aɪ/"),
    P("ow の発音①", ["kn[ow]", "sh[ow]", "sn[ow]", "h[ow]"], 3, "how は /aʊ/、ほかは /oʊ/"),
    P("o の発音", ["l[o]ve", "c[o]me", "s[o]n", "h[o]me"], 3, "home は /oʊ/、ほかは /ʌ/"),
    P("ear の発音", ["h[ear]", "n[ear]", "d[ear]", "l[ear]n"], 3, "learn は /ɜːr/、ほかは /ɪər/"),
    P("or の発音", ["w[or]k", "w[or]d", "w[or]ld", "sp[or]t"], 3, "sport は /ɔːr/、ほかは /ɜːr/"),
    P("u の発音", ["c[u]t", "s[u]n", "b[u]s", "p[u]t"], 3, "put は /ʊ/、ほかは /ʌ/"),
  ], "下線部の 音の ちがいを 見分ける");

  ch("tB3", 3, "反対の 意味・同じ 意味", "🔄", [
    W("cheap ↔", "<span class=\"en big2\">cheap</span> と 反対の 意味の 語は？", "expensive", ["easy", "heavy", "early"]),
    W("begin ↔", "<span class=\"en big2\">begin</span> と 反対の 意味の 語は？", "finish", ["start", "open", "continue"]),
    W("remember ↔", "<span class=\"en big2\">remember</span> と 反対の 意味の 語は？", "forget", ["understand", "believe", "receive"]),
    W("borrow ↔", "<span class=\"en big2\">borrow</span> と 反対の 意味の 語は？", "lend", ["buy", "keep", "steal"]),
    W("arrive ↔", "<span class=\"en big2\">arrive</span> と 反対の 意味の 語は？", "leave", ["reach", "visit", "return"]),
    W("dangerous ↔", "<span class=\"en big2\">dangerous</span> と 反対の 意味の 語は？", "safe", ["strong", "careful", "quiet"]),
    W("increase ↔", "<span class=\"en big2\">increase</span> と 反対の 意味の 語は？", "decrease", ["improve", "produce", "include"]),
    W("possible ↔", "<span class=\"en big2\">possible</span> と 反対の 意味の 語は？", "impossible", ["unpossible", "dispossible", "nonpossible"]),
    W("polite ↔", "<span class=\"en big2\">polite</span> と 反対の 意味の 語は？", "impolite", ["unpolite", "dispolite", "inpolite"]),
    W("happy ↔", "<span class=\"en big2\">happy</span> と 反対の 意味の 語は？", "unhappy", ["inhappy", "dishappy", "imhappy"]),
    W("big ＝", "<span class=\"en big2\">big</span> と ほぼ 同じ 意味の 語は？", "large", ["little", "long", "tall"]),
    W("begin ＝", "<span class=\"en big2\">begin</span> と ほぼ 同じ 意味の 語は？", "start", ["stop", "end", "stay"]),
    W("glad ＝", "<span class=\"en big2\">glad</span> と ほぼ 同じ 意味の 語は？", "happy", ["sad", "angry", "busy"]),
    W("quickly ＝", "<span class=\"en big2\">quickly</span> と ほぼ 同じ 意味の 語は？", "fast", ["slowly", "early", "soon after"]),
  ], "反意語と 同意語");

  // ---------------- 高1 ----------------
  ch("tB2", 4, "アクセント", "🎵", [
    A("picture", ["ho-tel", "gui-tar", "Ja-pan", "pic-ture"], 3, "picture は第1音節、ほかは第2音節"),
    A("vegetable", ["ba-na-na", "po-ta-to", "to-ma-to", "veg-e-ta-ble"], 3, "vegetable は第1音節、ほかは第2音節"),
    A("important", ["in-ter-est", "dif-fi-cult", "beau-ti-ful", "im-por-tant"], 3, "important は第2音節、ほかは第1音節"),
    A("problem", ["e-vent", "be-gin", "a-gree", "prob-lem"], 3, "problem は第1音節、ほかは第2音節"),
    A("average", ["tech-nique", "ca-reer", "ma-chine", "av-er-age"], 3, "average は第1音節、ほかは第2音節"),
    A("photographer", ["cal-en-dar", "pho-to-graph", "choc-o-late", "pho-tog-ra-pher"], 3, "photographer は第2音節、ほかは第1音節"),
    A("economic", ["e-con-o-my", "de-moc-ra-cy", "pho-tog-ra-phy", "ec-o-nom-ic"], 3, "economic は第3音節、ほかは第2音節"),
    A("museum", ["vol-un-teer", "Jap-a-nese", "en-gi-neer", "mu-se-um"], 3, "museum は第2音節、ほかは第3音節"),
    A("desert", ["per-cent", "des-sert", "ad-vice", "des-ert"], 3, "desert（砂漠）は第1音節、dessert（デザート）は第2音節"),
    A("horizon", ["en-er-gy", "al-ler-gy", "cal-o-rie", "ho-ri-zon"], 3, "horizon は第2音節、ほかは第1音節（日本語読みとちがうので注意）"),
    A("politician", ["mu-si-cian", "li-brar-i-an", "co-me-di-an", "pol-i-ti-cian"], 3, "politician は第3音節、ほかは第2音節"),
    A("access", ["suc-cess", "re-sult", "ef-fect", "ac-cess"], 3, "access は第1音節、ほかは第2音節"),
  ], "いちばん 強く 読む ところ");

  ch("tB4", 4, "語形変化（派生語）", "🧬", [
    W("succeed→名詞", "<span class=\"en big2\">succeed</span>（成功する）の 名詞形は？", "success", ["successful", "successive", "successly"]),
    W("decide→名詞", "<span class=\"en big2\">decide</span>（決める）の 名詞形は？", "decision", ["decisive", "decidement", "decided"]),
    W("able→名詞", "<span class=\"en big2\">able</span>（できる）の 名詞形は？", "ability", ["ableness", "enable", "abled"]),
    W("deep→名詞", "<span class=\"en big2\">deep</span>（深い）の 名詞形は？", "depth", ["deepness of", "deeply", "deepen"]),
    W("wide→動詞", "<span class=\"en big2\">wide</span>（広い）の 動詞形は？", "widen", ["width", "widely", "widify"]),
    W("strong→名詞", "<span class=\"en big2\">strong</span>（強い）の 名詞形は？", "strength", ["strongness", "strongly", "strengthen"]),
    W("danger→形容詞", "<span class=\"en big2\">danger</span>（危険）の 形容詞形は？", "dangerous", ["endanger", "dangerly", "dangerful"]),
    W("explain→名詞", "<span class=\"en big2\">explain</span>（説明する）の 名詞形は？", "explanation", ["explainment", "explaination", "explanatory"]),
    W("true→名詞", "<span class=\"en big2\">true</span>（本当の）の 名詞形は？", "truth", ["truly", "trueness of", "trust"]),
    W("child→形容詞（子どもっぽい）", "「子どもっぽい」（悪い意味）の 英語は？", "childish", ["childlike", "childly", "childhood"], "childlike は「子どもらしい、無邪気な」（よい意味）"),
    W("economy→形容詞（経済の）", "「経済の」を 表す 英語は？", "economic", ["economical", "economize", "economist"], "economical は「節約になる、経済的な」"),
    W("imagine→形容詞（想像力に富む）", "「想像力に富む」を 表す 英語は？", "imaginative", ["imaginary", "imaginable", "imagination"], "imaginary「想像上の」、imaginable「想像できる」"),
    W("respect→形容詞（それぞれの）", "「それぞれの」を 表す 英語は？", "respective", ["respectful", "respectable", "respecting"], "respectful「礼儀正しい」、respectable「立派な」"),
    W("sense→形容詞（敏感な）", "「敏感な、傷つきやすい」を 表す 英語は？", "sensitive", ["sensible", "sensual", "sensory"], "sensible は「分別のある」"),
  ], "名詞形・形容詞形・まぎらわしい 派生語");

  ch("tC1", 4, "高校の 会話表現", "💬", [
    C("I'd love to", [["A", "Would you like to come to my party?"], ["B", "?"]], "I'd love to.", ["I'd love it to.", "Yes, I'd like.", "No, I wouldn't love."]),
    C("Go ahead", [["A", "May I use your phone?"], ["B", "?"]], "Go ahead.", ["Take care.", "You're welcome.", "After you, please."]),
    C("Help yourself", [["A", "These cookies look delicious."], ["B", "?"]], "Help yourself.", ["Go ahead to eat.", "Take care.", "Same to you."]),
    C("Same to you", [["A", "Have a nice weekend!"], ["B", "?"]], "Thanks. Same to you.", ["No, I don't.", "Of course not.", "I hope not."]),
    C("Take your time", [["A", "Sorry, I need a few more minutes."], ["B", "?"]], "No problem. Take your time.", ["Time is money.", "Hurry up, please, take time.", "What time is it?"]),
    C("It depends", [["A", "Are you going to the beach tomorrow?"], ["B", "?"]], "It depends on the weather.", ["It depends of the weather.", "Yes, it's depending.", "The beach is depend."]),
    C("I'm afraid not", [["A", "Will he come on time?"], ["B", "?"]], "I'm afraid not. He's always late.", ["I'm afraid so. He's never late.", "Yes, I'm afraid.", "I'm not afraid of him."]),
    C("Why not?", [["A", "Let's have lunch together."], ["B", "?"]], "Why not?", ["Why do you?", "Because I'm not.", "Not at all, thanks."]),
    C("That's a good point", [["A", "We should save energy to protect the environment."], ["B", "?"]], "That's a good point.", ["That's a good energy.", "You're welcome.", "It's on the point."]),
    C("Could you say that again?", [["A", "The meeting room is on the fifth floor, next to the elevator."], ["B", "?"]], "Sorry, could you say that again?", ["Sorry, you could say.", "Again, please say me.", "I can't hear well, can I?"]),
    C("What do you mean?", [["A", "That movie was a bit too much for me."], ["B", "?"]], "What do you mean by that?", ["What do you say with that?", "How do you mean it?", "What does it mean you?"]),
    C("Not at all", [["A", "Thank you so much for your help."], ["B", "?"]], "Not at all.", ["Not at first.", "Not yet.", "No more."]),
  ], "I'd love to・Go ahead・It depends");

  // ---------------- 高2 ----------------
  ch("tC2", 5, "短い 英文の 読解", "📖", [
    R("お知らせ", "The school library will be closed next Monday for cleaning. Students who want to borrow books should come on Friday.", "図書館が 月曜日に 閉まる 理由は？", "そうじのため", ["本が少ないため", "祝日のため", "工事のため"]),
    R("メール", "Hi Emma, thank you for inviting me to your birthday party. I'm sorry, but I can't come because I have to visit my grandmother in the hospital. Have a great time! ― Yuki", "ユキが パーティーに 行けない 理由は？", "祖母を見舞いに行くから", ["自分が入院しているから", "誕生日が同じ日だから", "招待されていないから"]),
    R("説明文：睡眠", "Many teenagers do not get enough sleep. Scientists say that young people need about nine hours of sleep a night. Without enough sleep, it is hard to concentrate in class.", "この文の 内容と 合うものは？", "睡眠が足りないと授業に集中しにくい", ["10代は6時間眠れば十分だ", "科学者は昼寝を勧めている", "睡眠は勉強に関係がない"]),
    R("広告", "Summer Sale! All T-shirts are 30% off this weekend only. If you buy two, you can get a free cap.", "Tシャツを 2まい 買うと どうなる？", "ぼうしが無料でもらえる", ["3まい目が無料になる", "30%引きが50%引きになる", "来週も割引になる"]),
    R("説明文：ハチ", "Bees are very important for farmers. When bees move from flower to flower, they carry pollen. This helps plants produce fruits and seeds. However, the number of bees is decreasing.", "ハチが 農家に とって 大切な 理由は？", "植物が実や種をつくるのを助けるから", ["はちみつが高く売れるから", "害虫を食べるから", "花の色を変えるから"]),
    R("物語", "Tom wanted to buy a new bike, so he saved money for a year. When he finally had enough money, he saw that his little sister needed a new desk. He bought the desk for her instead.", "トムが 最後に したことは？", "妹のために机を買った", ["新しい自転車を買った", "お金を1年間ためはじめた", "妹にお金をあげた"]),
    R("説明文：言語", "There are about 7,000 languages in the world. However, scientists think that about half of them may disappear by the end of this century, because fewer young people speak them.", "言語が 消えてしまう 理由は？", "話す若者が少なくなっているから", ["新しい言語が生まれるから", "科学者が研究しないから", "文字がないから"]),
    R("掲示", "Visitors are not allowed to take photos inside the museum. Please leave large bags at the front desk. The café on the second floor is open until 5 p.m.", "美術館で してはいけない ことは？", "館内で写真をとること", ["カフェを利用すること", "受付に荷物を預けること", "2階へ行くこと"]),
    R("説明文：プラスチック", "Plastic bags are cheap and useful, but they take hundreds of years to break down. Some countries have banned them, and many shops now ask customers to bring their own bags.", "多くの 店が 客に 求めている ことは？", "自分の袋を持ってくること", ["ビニール袋を買うこと", "袋を返すこと", "プラスチックを集めること"]),
    R("日記", "Today I tried to cook curry for my family for the first time. It was a little too spicy, but everyone ate it all and said it was delicious. I want to cook again next week.", "家族の 反応は？", "全部食べておいしいと言った", ["からすぎて残した", "自分で作り直した", "来週作ってほしいと言った"]),
  ], "お知らせ・メール・説明文");

  ch("tC3", 5, "正しい 英文を えらぶ", "✅", [
    W("彼は3年間ここに住んでいる", "「彼は3年間ここに住んでいる。」を 正しく 表す 英文は？", "He has lived here for three years.", ["He lives here since three years.", "He is living here for three years ago.", "He has lived here since three years."]),
    W("もし時間があれば", "「もし時間があれば、手伝うのに。」", "If I had time, I would help you.", ["If I have time, I would help you.", "If I had time, I will help you.", "If I would have time, I helped you."]),
    W("その知らせに驚いた", "「わたしはその知らせに驚いた。」", "I was surprised at the news.", ["I was surprising at the news.", "I surprised at the news.", "The news was surprised me."]),
    W("窓を開けたままにする", "「窓を開けたままにしておいてはいけない。」", "You must not leave the window open.", ["You must not leave the window opening.", "You don't have to leave open the window to.", "You must not leave open window."]),
    W("待たせてごめん", "「お待たせしてすみません。」", "I'm sorry to have kept you waiting.", ["I'm sorry to keep you wait.", "I'm sorry for making you wait to me.", "I'm sorry to have kept you waited."]),
    W("言うまでもなく", "「健康が大切なのは言うまでもない。」", "It goes without saying that health is important.", ["It goes without to say that health is important.", "It is without saying health is important.", "It says without going that health is important."]),
    W("だれが来ても", "「だれが来ても、ドアを開けてはいけない。」", "Whoever comes, don't open the door.", ["Whatever comes, don't open the door.", "Who comes, don't open the door.", "However comes, don't open the door."]),
    W("その本を読む価値", "「その本は読む価値がある。」", "The book is worth reading.", ["The book is worth to read.", "The book is worthy reading.", "The book is worth being read it."]),
    W("できるだけ早く", "「できるだけ早く返事をください。」", "Please reply as soon as possible.", ["Please reply as soon as possibly.", "Please reply soon as possible as.", "Please reply as soonest as possible."]),
    W("英語で何と言う", "「これは英語で何と言いますか。」", "What do you call this in English?", ["How do you call this in English?", "What do you say this by English?", "How is this said English?"]),
  ], "和文を 正しく 英語に した ものは？");

  // ---------------- 高3 ----------------
  ch("tC4", 6, "入試の 読解", "🏯", [
    R("要旨：失敗", "Many people are afraid of making mistakes. However, mistakes are a natural part of learning. When we make a mistake, we find out what does not work, and this brings us closer to what does. In fact, many great inventions were born from failures.", "筆者の 主張に 最も 近いものは？", "失敗は学びの過程の自然な一部である", ["失敗はできるだけ避けるべきである", "発明は偶然からしか生まれない", "間違いを恐れるのは当然で直せない"]),
    R("要旨：SNS", "Social media allows us to stay connected with friends around the world. At the same time, some studies suggest that spending too much time on it can make people feel lonely, as they compare their lives with the seemingly perfect lives of others.", "SNSの 使いすぎが 孤独感を 生む 理由として 述べられているのは？", "他人の一見完璧な生活と自分を比べるから", ["友だちと連絡が取れなくなるから", "世界中の人とつながりすぎるから", "研究で禁止されているから"]),
    R("推論：都市化", "In 1950, about 30 percent of the world's population lived in cities. Today, the figure is more than 55 percent, and it is expected to reach nearly 70 percent by 2050.", "この文から 言えることは？", "都市に住む人の割合は増え続けると予想されている", ["都市の人口は1950年に最大だった", "2050年には都市人口が減る", "現在の都市人口は30%である"]),
    R("語の意味：dramatically", "The price of solar panels has fallen <u>dramatically</u> over the past decade. As a result, solar power is now one of the cheapest ways to produce electricity in many countries.", "下線部 dramatically に 最も 近い 意味は？", "大幅に", ["わずかに", "ゆっくりと", "芝居のように静かに"]),
    R("内容一致：睡眠と記憶", "Researchers have found that sleep plays a key role in memory. During deep sleep, the brain replays what we learned during the day and stores it as long-term memory. Staying up all night before an exam may therefore do more harm than good.", "本文の 内容と 一致するものは？", "試験前の徹夜は逆効果になりうる", ["深い眠りの間、脳は何もしていない", "記憶は起きている間にだけ作られる", "徹夜は長期記憶を強くする"]),
    R("理由：言語の消滅", "When a language dies, we lose more than words. Each language carries a unique way of seeing the world, including knowledge about local plants, animals, and traditions that may not exist anywhere else.", "言語が 消えると 何が 失われると 述べているか。", "その言語に独自の世界の見方や知識", ["世界共通の文法規則", "その国の経済力", "新しい言語を学ぶ機会"]),
    R("要旨：AI", "Artificial intelligence can now write essays, create pictures, and even compose music. Some people fear that AI will replace human creativity. Others argue that AI is simply a new tool, much like the camera was, and that humans will find new ways to be creative with it.", "後半で 紹介されている 意見は？", "AIはカメラのような新しい道具にすぎない", ["AIは人間の創造性を完全に奪う", "AIは音楽を作ることができない", "カメラはAIより危険である"]),
    R("内容一致：食品ロス", "Roughly one-third of all food produced in the world is wasted. This happens at every stage, from farms and factories to shops and homes. Reducing food waste would not only save money but also cut greenhouse gas emissions.", "本文の 内容と 一致するものは？", "食品ロスを減らすと温室効果ガスも減る", ["食品ロスは家庭でだけ起きている", "世界の食料の半分が捨てられている", "食品ロスは環境と関係がない"]),
  ], "要旨・内容一致・推論");

  ch("tC5", 6, "難関大の 会話", "🗻", [
    C("I couldn't agree more", [["A", "I think we should start the project as soon as possible."], ["B", "?"]], "I couldn't agree more.", ["I couldn't agree with less.", "I could agree no more than you.", "I can't agree any less."], "I couldn't agree more「大賛成だ」"),
    C("Suit yourself", [["A", "I'm not going to the party tonight."], ["B", "?"]], "Suit yourself.", ["Suit you well.", "Fit yourself.", "Help yourself to the party."], "Suit yourself「好きにしなさい」"),
    C("It's on me", [["A", "Let's split the bill."], ["B", "?"]], "No, it's on me today.", ["No, it's under me today.", "Yes, it's on the bill.", "No, let's split on me."], "It's on me「わたしのおごりだ」"),
    C("I'll take a rain check", [["A", "How about going to the movies tonight?"], ["B", "?"]], "I'll take a rain check. I have a lot of homework.", ["I'll check the rain. It's sunny.", "I'll take a rain coat to the movies.", "Rain check is my homework."], "take a rain check「またの機会にする」"),
    C("Don't mention it", [["A", "Thanks for the ride."], ["B", "?"]], "Don't mention it.", ["Don't say about it.", "Don't tell it.", "No mention."]),
    C("You can say that again", [["A", "This summer is so hot."], ["B", "?"]], "You can say that again.", ["You can't say it again.", "Say it again, please, I can't.", "You said again."], "You can say that again「まったくその通り」"),
    C("I'm all ears", [["A", "I have something important to tell you."], ["B", "?"]], "OK, I'm all ears.", ["OK, I'm all eyes on.", "OK, my ears are all.", "OK, I'm earful."], "I'm all ears「しっかり聞いているよ」"),
    C("It's up to you", [["A", "Which restaurant should we go to?"], ["B", "?"]], "It's up to you.", ["It's up for you.", "It's on to you.", "It's you up."], "It's up to you「あなた次第だ」"),
    C("Keep me posted", [["A", "I'll let you know when I hear from him."], ["B", "?"]], "Thanks. Keep me posted.", ["Thanks. Post me kept.", "Thanks. Keep posting to me it.", "Thanks. Mail me kept."], "Keep me posted「随時知らせて」"),
    C("Speak of the devil", [["A", "I wonder where Mike is."], ["B", "?"]], "Speak of the devil! Here he comes.", ["Speak to the devil! He goes.", "Talk the devil! Here comes he.", "Devil speaks! He comes here."], "Speak of the devil「うわさをすれば影」"),
  ], "会話の 決まり文句（難関大）");
})();
