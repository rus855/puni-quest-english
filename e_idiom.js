// ===== 熟語・構文の国：熟語の 空らん・熟語の 意味・ならべかえ =====
(function () {
  const ch = (id, g, name, icon, list, desc) => CHAPTERS.push({ id, w: "math", g, sec: "a" + g, name, icon, desc, items: bank("math", id, list) });
  const B = '<span class="eblank">（　　）</span>';
  // 空らん：I(カード名, 英文, 正解, まちがい, 和訳, 解説)
  const I = (t, en, a, ng, ja, ex) => ({ t, label: "（　）に 入るのは？", q: `<span class="en">${en.replace("＿", B)}</span>${ja ? `<br><small class="ja">${ja}</small>` : ""}`, a, ng, ex, ox: false });
  // 意味：M(熟語, 意味, まちがいの 意味) … ぎゃくに「意味 → 熟語」も 出る（rq）
  const M = (en, ja, ng) => ({ t: en, label: "意味は？", q: `<span class="en big2">${en}</span>`, a: ja, ng, rq: `「${ja}」を 英語で 言うと？`, ra: en });
  // ならべかえ：O(カード名, 和文, ならび（正しい じゅん）)
  const O = (t, ja, order, ex) => ({ t, label: "ならべかえよう", q: `${ja}`, order, ex, en: 1 });

  // ---------------- 中1 ----------------
  ch("iA1", 1, "中1の 熟語", "🌱", [
    I("get up", "I ＿ up at six every morning.", "get", ["go", "take", "look"], "わたしは毎朝6時に起きます。"),
    I("go to bed", "I usually go to ＿ at ten.", "bed", ["the bed", "a bed", "home to"], "わたしはふつう10時に寝ます。", "go to bed「寝る」（the はつけない）"),
    I("look at", "Look ＿ that bird!", "at", ["for", "to", "on"], "あの鳥を見て！"),
    I("listen to", "I like to listen ＿ music.", "to", ["at", "for", "in"], "わたしは音楽を聞くのが好きです。"),
    I("a lot of", "There are a ＿ of books in the library.", "lot", ["many", "much", "few of"], "図書館にはたくさんの本があります。"),
    I("wait for", "Please wait ＿ me here.", "for", ["to", "at", "on"], "ここでわたしを待っていてください。"),
    I("be good at", "Ken is good ＿ playing the guitar.", "at", ["in", "for", "on"], "ケンはギターをひくのが上手です。"),
    I("at home", "My mother is ＿ home now.", "at", ["in", "on", "to"], "母は今、家にいます。"),
    I("every day", "I practice the piano ＿ day.", "every", ["a", "each of", "many"], "わたしは毎日ピアノを練習します。"),
    I("go shopping", "Let's go ＿ this afternoon.", "shopping", ["to shopping", "shop", "to shop at"], "今日の午後、買い物に行こう。"),
    I("come from", "Where do you ＿ from? ― I'm from Australia.", "come", ["go", "live", "get"], "どちらのご出身ですか。"),
    I("a cup of", "Would you like a ＿ of tea?", "cup", ["slice", "piece", "sheet"], "紅茶を1杯いかがですか。"),
    M("get up", "起きる", ["寝る", "座る", "到着する"]),
    M("look at", "〜を見る", ["〜を探す", "〜の世話をする", "〜を聞く"]),
  ], "get up・look at・listen to");

  // ---------------- 中2 ----------------
  ch("iA2", 2, "中2の 熟語", "🌷", [
    I("look for", "I'm looking ＿ my key.", "for", ["at", "after", "to"], "わたしは鍵を探しています。"),
    I("take care of", "Please take ＿ of my dog while I'm away.", "care", ["look", "hold", "keep"], "留守の間、犬の世話をしてください。"),
    I("be interested in", "I'm interested ＿ Japanese history.", "in", ["at", "on", "with"], "わたしは日本の歴史に興味があります。"),
    I("be able to", "She will be ＿ to swim soon.", "able", ["can", "possible", "good"], "彼女はもうすぐ泳げるようになるでしょう。"),
    I("each other", "They helped each ＿.", "other", ["another", "others", "one"], "彼らはお互いに助け合いました。"),
    I("for example", "I like fruits, for ＿, apples and grapes.", "example", ["instance of", "sample", "case"], "わたしは果物、たとえばりんごやぶどうが好きです。"),
    I("in front of", "Let's meet in ＿ of the station.", "front", ["back", "near", "side"], "駅の前で会いましょう。"),
    I("at first", "At ＿, I couldn't understand him.", "first", ["start", "last of", "begin"], "最初は、彼の言うことが理解できませんでした。"),
    I("be afraid of", "My sister is afraid ＿ dogs.", "of", ["at", "with", "for"], "妹は犬をこわがります。"),
    I("be famous for", "Kyoto is famous ＿ its old temples.", "for", ["as", "to", "at"], "京都は古い寺で有名です。"),
    I("get to", "How can I get ＿ the museum?", "to", ["at", "in", "for"], "博物館へはどうやって行けますか。"),
    I("a few", "I have a ＿ friends in Canada.", "few", ["little", "lot", "many"], "わたしはカナダに数人の友だちがいます。"),
    M("take care of", "〜の世話をする", ["〜を探す", "〜に興味がある", "〜を待つ"]),
    M("each other", "お互い", ["もう一度", "そのとき", "最初は"]),
    M("look forward to", "〜を楽しみに待つ", ["〜を見下ろす", "〜を探す", "〜を調べる"]),
  ], "look for・take care of など");

  ch("iA4", 2, "ならべかえ（中2）", "🧩", [
    O("want to be", "わたしは 先生に なりたいです。", ["I", "want", "to", "be", "a teacher"]),
    O("It is fun to", "英語を 勉強するのは 楽しいです。", ["It", "is", "fun", "to study", "English"]),
    O("taller than", "トムは ケンより 背が 高いです。", ["Tom", "is", "taller", "than", "Ken"]),
    O("was built", "この寺は 600年前に 建てられました。", ["This temple", "was", "built", "600 years", "ago"]),
    O("There are", "公園には たくさんの 子どもが います。", ["There", "are", "many children", "in the park"]),
    O("gave me", "父は わたしに 時計を くれました。", ["My father", "gave", "me", "a watch"]),
    O("how to", "わたしは このカメラの 使い方を 知りません。", ["I", "don't know", "how", "to use", "this camera"]),
    O("call him", "わたしたちは 彼を ジョンと 呼びます。", ["We", "call", "him", "John"]),
    O("must not", "ここで 写真を とっては いけません。", ["You", "must not", "take", "pictures", "here"]),
    O("If it rains", "もし 雨が ふったら、家に います。", ["If", "it rains,", "I", "will stay", "home"]),
  ], "タップで 英文を ならべかえ");

  // ---------------- 中3 ----------------
  ch("iA3", 3, "中3の 熟語と 構文", "🌊", [
    I("too ～ to", "I was ＿ tired to walk.", "too", ["so", "very", "enough"], "わたしは疲れすぎて歩けませんでした。"),
    I("so ～ that", "The box was ＿ heavy that I couldn't carry it.", "so", ["too", "such", "very"], "その箱はとても重かったので運べませんでした。"),
    I("not only A but also B", "She can speak not only English ＿ also French.", "but", ["and", "or", "so"], "彼女は英語だけでなくフランス語も話せます。"),
    I("both A and B", "Both Ken ＿ Mai are on the team.", "and", ["or", "but", "nor"], "ケンもマイもチームの一員です。"),
    I("either A or B", "You can choose either tea ＿ coffee.", "or", ["and", "nor", "but"], "紅茶かコーヒーのどちらかを選べます。"),
    I("as soon as", "Call me as ＿ as you get home.", "soon", ["much", "early", "well"], "家に着いたらすぐに電話して。"),
    I("be proud of", "I'm proud ＿ my brother.", "of", ["at", "for", "with"], "わたしは兄を誇りに思います。"),
    I("be full of", "The bottle is full ＿ water.", "of", ["with", "in", "by"], "そのびんは水でいっぱいです。"),
    I("thanks to", "Thanks ＿ your help, I finished the work.", "to", ["for", "of", "with"], "あなたの助けのおかげで仕事を終えられました。"),
    I("not ～ at all", "I don't know him ＿ all.", "at", ["in", "for", "of"], "わたしは彼をまったく知りません。"),
    I("one of the 最上級", "He is one of the ＿ players in Japan.", "best", ["better", "good", "well"], "彼は日本で最も優れた選手のひとりです。", "one of the＋最上級＋複数名詞"),
    I("by the way", "By the ＿, have you finished the report?", "way", ["time", "end", "chance"], "ところで、レポートは終わった？"),
    M("as soon as", "〜するとすぐに", ["〜するまでずっと", "〜する前に", "〜しない限り"]),
    M("thanks to", "〜のおかげで", ["〜にもかかわらず", "〜の代わりに", "〜によると"]),
    M("not only A but also B", "AだけでなくBも", ["AかBのどちらか", "AもBも〜ない", "AよりむしろB"]),
  ], "too 〜 to・so 〜 that・not only");

  ch("iA5", 3, "ならべかえ（中3）", "🧠", [
    O("have lived", "わたしは 10年間 名古屋に 住んでいます。", ["I", "have", "lived", "in Nagoya for ten years"]),
    O("who lives", "わたしには ロンドンに 住んでいる おじが います。", ["I", "have an uncle", "who", "lives", "in London"]),
    O("made by", "これは 母が 作った ケーキです。", ["This is", "the cake", "my mother", "made"]),
    O("where he lives", "あなたは 彼が どこに 住んでいるか 知っていますか。", ["Do you know", "where", "he", "lives?"]),
    O("I wish", "わたしが 鳥だったら いいのに。", ["I", "wish", "I", "were", "a bird"]),
    O("too ～ to", "このお茶は 熱すぎて 飲めません。", ["This tea", "is", "too", "hot", "to drink"]),
    O("asked me to", "母は わたしに 窓を 開けるよう 頼みました。", ["My mother", "asked", "me", "to open", "the window"]),
    O("the boy playing", "ギターを ひいている 少年は ケンです。", ["The boy", "playing", "the guitar", "is", "Ken"]),
    O("have never", "わたしは 一度も 沖縄に 行ったことが ありません。", ["I", "have", "never", "been", "to Okinawa"]),
    O("so ～ that", "とても 寒かったので、わたしたちは 家に いました。", ["It was", "so cold", "that", "we stayed", "home"]),
  ], "関係代名詞・現在完了の 英文を つくる");

  // ---------------- 高1 ----------------
  ch("iB1", 4, "高1の 熟語", "🔑", [
    I("take part in", "Many students took part ＿ the event.", "in", ["on", "at", "with"], "多くの生徒がその行事に参加しました。"),
    I("make use of", "You should make good ＿ of your time.", "use", ["way", "effort", "sense"], "時間をうまく活用すべきだ。"),
    I("give up", "Don't give ＿ your dream.", "up", ["in on", "off", "out of"], "夢をあきらめるな。"),
    I("put off", "We had to put ＿ the meeting until next week.", "off", ["on", "up", "out"], "会議を来週まで延期しなければならなかった。"),
    I("carry out", "They carried ＿ the plan successfully.", "out", ["in", "up", "away"], "彼らはその計画をうまく実行した。"),
    I("depend on", "Our trip depends ＿ the weather.", "on", ["in", "to", "for"], "旅行は天気次第だ。"),
    I("deal with", "How should we deal ＿ this problem?", "with", ["for", "at", "in"], "この問題にどう対処すべきか。"),
    I("come up with", "She came up ＿ a good idea.", "with", ["to", "for", "on"], "彼女はよい考えを思いついた。"),
    I("look up to", "Everyone looks ＿ to him.", "up", ["down", "for", "after"], "みんな彼を尊敬している。"),
    I("run out of", "We have run ＿ of milk.", "out", ["away", "over", "off"], "牛乳を切らしてしまった。"),
    I("get along with", "I get along well ＿ my classmates.", "with", ["to", "for", "by"], "わたしはクラスメートと仲がよい。"),
    I("be likely to", "It is likely ＿ rain this afternoon.", "to", ["for", "that", "of"], "今日の午後は雨が降りそうだ。"),
    M("put off", "延期する", ["取り消す", "着る", "我慢する"]),
    M("carry out", "実行する", ["運び出す", "取り除く", "あきらめる"]),
    M("look up to", "尊敬する", ["軽蔑する", "調べる", "見下ろす"]),
    M("come up with", "思いつく", ["追いつく", "我慢する", "出くわす"]),
  ], "take part in・put off・carry out");

  ch("iB2", 4, "高1の 構文", "🏗️", [
    I("It is said that", "It is ＿ that he is the richest man in the town.", "said", ["saying", "says", "told"], "彼は町一番の金持ちだと言われている。"),
    I("what is called", "He is what is ＿ a self-made man.", "called", ["calling", "said to", "known"], "彼はいわゆる「たたき上げの人」だ。"),
    I("so that", "I got up early so ＿ I could catch the first train.", "that", ["as", "to", "for"], "始発に乗れるように早起きした。"),
    I("as well as", "He speaks Chinese as ＿ as English.", "well", ["good", "many", "long"], "彼は英語だけでなく中国語も話す。"),
    I("It takes 人 時間 to", "It ＿ me an hour to get to school.", "takes", ["costs", "spends", "needs"], "学校に行くのに1時間かかる。"),
    I("make it a rule to", "I make it a ＿ to walk every morning.", "rule", ["law", "manner", "custom of"], "毎朝歩くことにしている。"),
    I("find it 形容詞 to", "I found ＿ difficult to solve the problem.", "it", ["that", "this", "what"], "その問題を解くのは難しいとわかった。", "形式目的語の it"),
    I("not A but B", "It is not the price ＿ the quality that matters.", "but", ["and", "or", "nor"], "大切なのは値段ではなく品質だ。"),
    I("neither A nor B", "Neither he ＿ I was at home.", "nor", ["or", "and", "but"], "彼もわたしも家にいなかった。"),
    I("no longer", "He is no ＿ a child.", "longer", ["more than", "long", "later"], "彼はもはや子どもではない。"),
    I("used to", "I ＿ to live in Osaka.", "used", ["use", "am used", "was used"], "以前は大阪に住んでいた。"),
    I("It is ～ that（強調）", "It was in this room ＿ the meeting was held.", "that", ["which", "when", "what"], "会議が開かれたのはこの部屋だった。", "強調構文 It is 〜 that"),
  ], "形式主語・形式目的語・強調構文");

  ch("iB5", 4, "ならべかえ（高1）", "🧱", [
    O("had already left", "わたしが 駅に 着いた ときには、電車は すでに 出ていた。", ["When I got to the station,", "the train", "had", "already", "left"]),
    O("what he said", "彼の 言ったことは 本当だった。", ["What", "he said", "was", "true"]),
    O("the reason why", "それが 彼の 遅れた 理由です。", ["That is", "the reason", "why", "he was", "late"]),
    O("must have", "彼は 道に 迷ったに ちがいない。", ["He", "must", "have", "lost", "his way"]),
    O("enough to", "彼は 親切にも わたしを 手伝って くれた。", ["He", "was", "kind", "enough", "to help me"]),
    O("Having finished", "宿題を 終えて、わたしは 外出した。", ["Having", "finished", "my homework,", "I", "went out"]),
    O("It is said", "その城は 400年前に 建てられたと 言われている。", ["It", "is said", "that", "the castle", "was built 400 years ago"]),
    O("seems to have", "彼は 若いころ 有名だったようだ。", ["He", "seems", "to have been", "famous", "when he was young"]),
  ], "高1の 文法で 英文を つくる");

  // ---------------- 高2 ----------------
  ch("iB3", 5, "句動詞", "🧲", [
    I("bring up", "She was brought ＿ by her grandparents.", "up", ["out", "down", "over"], "彼女は祖父母に育てられた。"),
    I("break down", "My car broke ＿ on the way.", "down", ["out", "up", "off"], "途中で車が故障した。"),
    I("call off", "The game was called ＿ because of the rain.", "off", ["on", "out", "for"], "試合は雨で中止になった。"),
    I("figure out", "I can't figure ＿ how to use this app.", "out", ["up", "on", "off"], "このアプリの使い方がわからない。"),
    I("get over", "It took her a long time to get ＿ the shock.", "over", ["off", "up", "through with"], "彼女がショックから立ち直るのに長い時間がかかった。"),
    I("hand in", "Please hand ＿ your report by Friday.", "in", ["out", "over to", "up"], "金曜までにレポートを提出してください。"),
    I("put up with", "I can't put up ＿ this noise any longer.", "with", ["to", "for", "on"], "この騒音にはもう我慢できない。"),
    I("turn down", "He turned ＿ the job offer.", "down", ["up", "off", "over"], "彼はその仕事の申し出を断った。"),
    I("make out", "I couldn't make ＿ what he was saying.", "out", ["up", "off", "for"], "彼が何を言っているのか理解できなかった。"),
    I("look into", "The police are looking ＿ the case.", "into", ["out", "up to", "over to"], "警察はその事件を調べている。"),
    I("set up", "They set ＿ a new company last year.", "up", ["off", "out to", "down"], "彼らは昨年新しい会社を設立した。"),
    I("catch up with", "Go ahead. I'll catch up ＿ you later.", "with", ["at", "for", "on"], "先に行って。後で追いつくから。"),
    M("call off", "中止する", ["電話をかけ直す", "呼び出す", "延期する"]),
    M("turn down", "断る", ["引き受ける", "現れる", "ひっくり返す"]),
    M("get over", "回復する、乗り越える", ["乗り込む", "終える", "通り過ぎる"]),
    M("put up with", "我慢する", ["泊める", "提出する", "追いつく"]),
  ], "動詞＋up・off・out など");

  ch("iB4", 5, "前置詞を ふくむ 熟語", "🧷", [
    I("in spite of", "In ＿ of the rain, they went out.", "spite", ["case", "place", "front"], "雨にもかかわらず、彼らは出かけた。"),
    I("instead of", "I'll go there instead ＿ you.", "of", ["for", "to", "on"], "あなたの代わりにわたしがそこに行きます。"),
    I("according to", "According ＿ the news, there was a big earthquake.", "to", ["for", "of", "with"], "ニュースによると、大きな地震があった。"),
    I("due to", "The flight was delayed ＿ to the storm.", "due", ["because", "owing for", "thanks"], "飛行機は嵐のために遅れた。"),
    I("by means of", "We express our thoughts by ＿ of words.", "means", ["way", "use", "help"], "わたしたちは言葉によって考えを表す。"),
    I("on behalf of", "I'd like to thank you on ＿ of all the members.", "behalf", ["place", "side", "part to"], "全会員を代表してお礼を申し上げます。"),
    I("in terms of", "In ＿ of cost, this plan is better.", "terms", ["term", "case", "spite"], "費用の点では、この計画のほうがよい。"),
    I("regardless of", "Anyone can join regardless ＿ age.", "of", ["to", "for", "with"], "年齢に関係なく、だれでも参加できる。"),
    I("in addition to", "In addition ＿ English, he speaks Spanish.", "to", ["of", "for", "with"], "英語に加えて、彼はスペイン語も話す。"),
    I("for the sake of", "He moved to the country for the ＿ of his health.", "sake", ["cause of", "reason", "purpose to"], "彼は健康のためにいなかに引っ越した。"),
    I("at the cost of", "He saved the child at the ＿ of his own life.", "cost", ["price of", "value", "rate"], "彼は自分の命を犠牲にしてその子を救った。"),
    I("in charge of", "Who is in ＿ of this project?", "charge", ["change", "chance", "control by"], "このプロジェクトの担当はだれですか。"),
    M("in spite of", "〜にもかかわらず", ["〜のおかげで", "〜の代わりに", "〜に加えて"]),
    M("instead of", "〜の代わりに", ["〜にもかかわらず", "〜によると", "〜のために"]),
    M("regardless of", "〜に関係なく", ["〜を考慮して", "〜に関して", "〜のせいで"]),
  ], "in spite of・according to など");

  // ---------------- 高3 ----------------
  ch("iC1", 6, "入試の 熟語", "🏔️", [
    I("account for", "How do you account ＿ this mistake?", "for", ["to", "of", "on"], "この誤りをどう説明しますか。"),
    I("take ～ for granted", "We tend to take clean water for ＿.", "granted", ["grant", "granting", "given"], "わたしたちはきれいな水を当たり前と思いがちだ。"),
    I("make sense", "His explanation doesn't make ＿.", "sense", ["meaning", "reason", "idea"], "彼の説明は意味をなさない。"),
    I("be bound to", "He is bound ＿ succeed.", "to", ["for", "with", "of"], "彼はきっと成功する。"),
    I("come to terms with", "She finally came to ＿ with her father's death.", "terms", ["term", "end", "grips at"], "彼女はついに父の死を受け入れた。"),
    I("make up for", "I'll work harder to make up ＿ lost time.", "for", ["with", "to", "of"], "失った時間の埋め合わせをするためにもっと努力します。"),
    I("live up to", "The movie didn't live up ＿ my expectations.", "to", ["with", "for", "on"], "その映画は期待にそわなかった。"),
    I("stand for", "What does \"UN\" stand ＿?", "for", ["by", "to", "with"], "UNは何を表していますか。"),
    I("be on the verge of", "The species is on the ＿ of extinction.", "verge", ["edge to", "point", "way of"], "その種は絶滅寸前だ。"),
    I("lose sight of", "We should not lose ＿ of our goal.", "sight", ["view", "look", "eye"], "目標を見失ってはならない。"),
    I("by no means", "His answer is by no ＿ perfect.", "means", ["way", "time", "chance"], "彼の答えは決して完璧ではない。"),
    I("be indifferent to", "He is indifferent ＿ politics.", "to", ["of", "with", "for"], "彼は政治に無関心だ。"),
    M("account for", "説明する、（割合を）占める", ["責任を問う", "計算する", "口座を開く"]),
    M("take ～ for granted", "〜を当然のことと思う", ["〜を許可する", "〜に感謝する", "〜を与える"]),
    M("make up for", "埋め合わせる", ["仲直りする", "化粧をする", "でっち上げる"]),
    M("by no means", "決して〜ない", ["何としても", "すぐに", "いずれにせよ"]),
  ], "account for・take 〜 for granted");

  ch("iC2", 6, "ならべかえ（入試）", "🗻", [
    O("Not until", "家に 帰って 初めて、かぎを なくしたことに 気づいた。", ["Not until", "I got home", "did I", "notice", "I had lost my key"]),
    O("had it not been for", "あなたの 助けが なかったら、失敗していただろう。", ["Had it not been", "for your help,", "I", "would have", "failed"]),
    O("The more", "練習すれば するほど、上手に なる。", ["The more", "you practice,", "the better", "you", "become"]),
    O("It was not until", "そのときに なって 初めて、彼は 真実を 知った。", ["It was not until", "then", "that", "he", "knew the truth"]),
    O("no matter how", "どんなに 疲れていても、彼は 毎日 走る。", ["No matter", "how tired", "he is,", "he", "runs every day"]),
    O("what it was", "その町は 10年前の ようすとは まったく ちがう。", ["The town", "is", "quite different", "from", "what it was ten years ago"]),
    O("cannot be too", "運転するときは いくら 注意しても しすぎることは ない。", ["You", "cannot be", "too", "careful", "when you drive"]),
    O("as if", "彼は まるで すべてを 知っているかのように 話す。", ["He", "talks", "as if", "he knew", "everything"]),
  ], "難関大の 構文で 英文を つくる");
})();
