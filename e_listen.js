// ===== リスニングの国：英語を 聞いて 答える（BGMが オンの ときだけ 遊べる） =====
// L(カード名, せりふ [[声, 英文], ...], 質問, 正解, まちがい, 解説)
// 声：F＝女性（アメリカ）、M＝男性（アメリカ）、G＝女性（イギリス）、H＝男性（イギリス）
// 音声ファイルは audio/<章>-<番号>-<せりふの番号>.mp3（tools/make_audio.py で 作る）
const LISTEN_RATE = { 1: "-15%", 2: "-12%", 3: "-8%", 4: "-5%", 5: "+0%", 6: "+0%" };
(function () {
  const ch = (id, g, name, icon, list, desc) => {
    const items = list.map((it, i) => Object.assign(it, { au: it.say.map((_, k) => `${id}-${i + 1}-${k + 1}`), rate: LISTEN_RATE[g] }));
    CHAPTERS.push({ id, w: "sci", g, sec: "a" + g, name, icon, desc, items: bank("sci", id, items), listen: true });
  };
  const L = (t, say, q, a, ng, ex) => ({ t, say, q, a, ng, ex, ox: false });
  // 単語を 聞いて 意味を えらぶ
  const LW = (w, a, ng) => L(w, [["F", w]], "聞こえた 英単語の 意味は？", a, ng);

  // ---------------- 中1 ----------------
  ch("lA1", 1, "単語の 聞きとり", "👂", [
    LW("kitchen", "台所", ["鶏肉", "子ども", "切符"]),
    LW("library", "図書館", ["自由", "手紙", "ラジオ"]),
    LW("Wednesday", "水曜日", ["結婚式", "週末", "天気"]),
    LW("hospital", "病院", ["ホテル", "休日", "歴史"]),
    LW("breakfast", "朝食", ["ブレスレット", "息", "朝"]),
    LW("vegetable", "野菜", ["植物", "冷蔵庫", "テーブル"]),
    LW("mountain", "山", ["お金", "噴水", "月"]),
    LW("beautiful", "美しい", ["忙しい", "大きい", "便利な"]),
    LW("umbrella", "かさ", ["制服", "おじ", "封筒"]),
    LW("thirteen", "13", ["30", "3", "33"]),
    LW("forty", "40", ["14", "4", "44"]),
    LW("question", "質問", ["駅", "女王", "静かな"]),
  ], "1語を 聞いて 意味を えらぶ");

  ch("lA2", 1, "数字・時刻・曜日", "🕐", [
    L("時刻 7:15", [["M", "It's seven fifteen now."]], "今 何時？", "7時15分", ["7時50分", "7時5分", "11時15分"]),
    L("時刻 8:30", [["F", "The class starts at eight thirty."]], "授業が 始まる 時刻は？", "8時30分", ["8時13分", "8時3分", "6時30分"]),
    L("曜日 Thursday", [["M", "We have a test on Thursday."]], "テストは 何曜日？", "木曜日", ["火曜日", "土曜日", "日曜日"]),
    L("値段 15 dollars", [["F", "This bag is fifteen dollars."]], "かばんの 値段は？", "15ドル", ["50ドル", "5ドル", "51ドル"]),
    L("誕生日 March 3", [["M", "My birthday is March third."]], "誕生日は？", "3月3日", ["5月3日", "3月13日", "3月30日"]),
    L("人数 three brothers", [["F", "I have three brothers and one sister."]], "兄弟（男）は 何人？", "3人", ["1人", "4人", "2人"]),
    L("年れい twelve", [["M", "My sister is twelve years old."]], "妹は 何さい？", "12さい", ["20さい", "2さい", "11さい"]),
    L("電話番号", [["F", "My phone number is 080, 2345, 6789."]], "電話番号は？", "080-2345-6789", ["080-2354-6789", "080-2345-6798", "090-2345-6789"]),
    L("月 August", [["M", "We are going to Hokkaido in August."]], "北海道へ 行くのは 何月？", "8月", ["10月", "4月", "6月"]),
    L("時刻 10:45", [["F", "The train leaves at ten forty-five."]], "電車が 出る 時刻は？", "10時45分", ["10時15分", "11時45分", "10時4分"]),
    L("値段 120 yen", [["M", "One apple is one hundred and twenty yen."]], "りんご 1個の 値段は？", "120円", ["112円", "220円", "100円"]),
    L("日付 the 21st", [["F", "The festival is on July twenty-first."]], "お祭りは いつ？", "7月21日", ["7月20日", "6月21日", "7月12日"]),
  ], "数字や 時刻を 聞きとる");

  // ---------------- 中2 ----------------
  ch("lA3", 2, "短い 文の 聞きとり", "🗨️", [
    L("I usually walk", [["F", "I usually walk to school, but today I took the bus because it was raining."]], "今日は どうやって 学校へ 行った？", "バス", ["歩いて", "自転車", "電車"]),
    L("cat under the table", [["M", "My cat is sleeping under the table."]], "ネコは どこに いる？", "テーブルの下", ["テーブルの上", "いすの上", "ベッドの下"]),
    L("go swimming", [["F", "If it's sunny tomorrow, I'm going to go swimming with my friends."]], "晴れたら 明日 何を する？", "泳ぎに行く", ["買い物に行く", "家で勉強する", "テニスをする"]),
    L("lost my key", [["M", "I can't find my key. I think I left it in the classroom."]], "かぎは どこに あると 思っている？", "教室", ["家", "かばんの中", "図書館"]),
    L("favorite season", [["F", "I like autumn the best because the leaves are beautiful."]], "秋が 好きな 理由は？", "葉がきれいだから", ["涼しいから", "食べ物がおいしいから", "誕生日があるから"]),
    L("help my mother", [["M", "I couldn't watch the game last night because I had to help my mother."]], "昨夜 試合を 見なかった 理由は？", "母の手伝いをしたから", ["宿題があったから", "寝てしまったから", "テレビがこわれたから"]),
    L("busy on Saturday", [["F", "I'm busy on Saturday, but I'm free on Sunday afternoon."]], "ひまなのは いつ？", "日曜日の午後", ["土曜日の午後", "日曜日の午前", "土曜日の午前"]),
    L("taller than", [["M", "Ken is taller than Tom, but Tom is taller than Yuta."]], "いちばん 背が 高いのは？", "ケン", ["トム", "ユウタ", "全員同じ"]),
    L("piano for five years", [["F", "My sister started playing the piano when she was five. Now she is ten."]], "姉（妹）は 何年間 ピアノを ひいている？", "5年間", ["10年間", "15年間", "2年間"]),
    L("bring an umbrella", [["M", "It's cloudy now, and it will rain in the afternoon. Don't forget your umbrella."]], "話し手が 言いたいことは？", "かさを忘れないで", ["午後は晴れる", "今、雨が降っている", "外に出てはいけない"]),
  ], "1〜2文を 聞いて 答える");

  ch("lA4", 2, "受けこたえ（中学）", "🔁", [
    L("Where do you live?", [["F", "Where do you live?"]], "いちばん 合う 答えは？", "In Nagoya.", ["Yes, I do.", "At seven.", "With my bike."]),
    L("How do you come?", [["M", "How do you come to school?"]], "いちばん 合う 答えは？", "By bike.", ["At eight.", "Every day.", "Yes, I come."]),
    L("Whose bag?", [["F", "Whose bag is this?"]], "いちばん 合う 答えは？", "It's Mai's.", ["It's blue.", "It's on the desk.", "It's 2,000 yen."]),
    L("What are you doing?", [["M", "What are you doing now?"]], "いちばん 合う 答えは？", "I'm making a cake.", ["I made a cake.", "Yes, I am.", "I like cakes."]),
    L("Have you finished?", [["F", "Have you finished your homework?"]], "いちばん 合う 答えは？", "Not yet.", ["Yes, I do.", "I'm doing fine.", "For two hours."]),
    L("How long have you", [["M", "How long have you lived here?"]], "いちばん 合う 答えは？", "For five years.", ["Five years ago.", "Since five years.", "In five years."]),
    L("Why were you late?", [["F", "Why were you late this morning?"]], "いちばん 合う 答えは？", "Because I missed the bus.", ["At nine o'clock.", "Yes, I was.", "By bus."]),
    L("Can I borrow", [["M", "Can I borrow your eraser?"]], "いちばん 合う 答えは？", "Sure, here you are.", ["Yes, you borrow.", "No, I can't.", "It's an eraser."]),
    L("Would you like", [["F", "Would you like some more cake?"]], "いちばん 合う 答えは？", "No, thank you. I'm full.", ["Yes, I like cake.", "I'd like to more.", "It's delicious, isn't it?"]),
    L("Which do you like", [["M", "Which do you like better, summer or winter?"]], "いちばん 合う 答えは？", "I like summer better.", ["Yes, I like both.", "I like it very much.", "It's summer now."]),
    L("What's wrong?", [["F", "You look pale. What's wrong?"]], "いちばん 合う 答えは？", "I have a stomachache.", ["I'm fine, thank you.", "Nothing is right.", "It's wrong."]),
    L("How was your trip?", [["M", "How was your trip to Okinawa?"]], "いちばん 合う 答えは？", "It was great. The sea was beautiful.", ["I went there by plane.", "For three days.", "I'm going next week."]),
  ], "聞こえた 質問に 合う 答え");

  // ---------------- 中3 ----------------
  ch("lA5", 3, "会話の 聞きとり（中学）", "👫", [
    L("待ち合わせ", [["M", "Shall we meet at the station at ten?"], ["F", "Ten is a little early for me. How about eleven?"], ["M", "OK. See you then."]], "2人は 何時に 会う？", "11時", ["10時", "10時半", "12時"]),
    L("買う物", [["F", "Let's make sandwiches. Do we have bread?"], ["M", "Yes, but we don't have any eggs."], ["F", "OK, I'll go and buy some."]], "女性が 買いに 行く ものは？", "卵", ["パン", "ハム", "牛乳"]),
    L("忘れ物", [["M", "Did you bring your textbook?"], ["F", "Oh no, I left it at home. Can I share yours?"], ["M", "Sure."]], "女性は 何を 忘れた？", "教科書", ["弁当", "筆箱", "体操着"]),
    L("天気と予定", [["F", "It's raining. Are we still going to play tennis?"], ["M", "No. Let's watch a movie at my house instead."]], "2人は 何を する？", "家で映画を見る", ["テニスをする", "買い物に行く", "雨の中を散歩する"]),
    L("道案内", [["M", "Excuse me. Where is the city museum?"], ["F", "Go straight and turn right at the second corner. It's next to the bank."]], "博物館は どこ？", "2つ目の角を右に曲がった銀行のとなり", ["1つ目の角を右に曲がった銀行の前", "2つ目の角を左に曲がった病院のとなり", "まっすぐ行った駅の前"]),
    L("誕生日プレゼント", [["F", "What should we buy for Dad's birthday?"], ["M", "He said his tie is old. How about a new one?"], ["F", "Good idea."]], "父への プレゼントは？", "ネクタイ", ["時計", "かばん", "ケーキ"]),
    L("部活", [["M", "Are you in the music club?"], ["F", "I was, but I joined the art club this year."]], "女性が 今 入っている クラブは？", "美術部", ["音楽部", "テニス部", "どこにも入っていない"]),
    L("体調", [["F", "You don't look well. Are you OK?"], ["M", "I have a cold. I'm going to see a doctor after school."]], "男性は 放課後 何を する？", "医者に行く", ["部活に行く", "家で寝る", "薬を買う"]),
    L("宿題", [["M", "How many pages do we have to read for homework?"], ["F", "Twenty pages, from page 30 to page 50."]], "宿題で 読むのは 何ページ？", "20ページ", ["30ページ", "50ページ", "80ページ"]),
    L("電話", [["F", "Hello, this is Emma. May I speak to Kenta?"], ["M", "Sorry, he's out. Shall I tell him to call you back?"], ["F", "Yes, please."]], "男性は 何を すると 言った？", "ケンタに電話をかけ直すよう伝える", ["エマに伝言を残す", "ケンタを呼びに行く", "あとでエマを訪ねる"]),
  ], "2人の 会話を 聞いて 答える");

  // ---------------- 高1 ----------------
  ch("lB1", 4, "受けこたえ（高校）", "🎙️", [
    L("When is the meeting?", [["H", "When does the meeting start?"]], "いちばん 合う 答えは？", "At two this afternoon.", ["In the conference room.", "Yes, it does.", "Mr. Smith will lead it."]),
    L("Who's in charge?", [["F", "Who's in charge of the new project?"]], "いちばん 合う 答えは？", "Ms. Tanaka is.", ["It's about marketing.", "Next month.", "In charge of it."]),
    L("Why don't we", [["M", "Why don't we take a short break?"]], "いちばん 合う 答えは？", "That's a good idea.", ["Because we're tired.", "It broke yesterday.", "It's not short."]),
    L("Do you mind", [["G", "Do you mind if I open the window?"]], "いちばん 合う 答えは？", "Not at all. Go ahead.", ["Yes, I'll open it.", "No, it's closed.", "I don't have a mind."]),
    L("Haven't you", [["H", "Haven't you finished the report yet?"]], "いちばん 合う 答えは？", "I'm almost done.", ["Yes, I haven't.", "I reported it to you.", "Not since yesterday morning."]),
    L("How often", [["F", "How often do you go to the gym?"]], "いちばん 合う 答えは？", "About twice a week.", ["For two hours.", "It's near the station.", "Since last year."]),
    L("Where can I", [["M", "Where can I buy a ticket?"]], "いちばん 合う 答えは？", "At the machine over there.", ["It's ten dollars.", "At nine o'clock.", "A one-way ticket."]),
    L("Would you rather", [["G", "Would you rather eat in or take it out?"]], "いちばん 合う 答えは？", "I'll take it out, please.", ["I'd rather not eat.", "It's in the bag.", "Yes, I would."]),
    L("Shouldn't we", [["H", "Shouldn't we leave now? The train leaves in ten minutes."]], "いちばん 合う 答えは？", "You're right. Let's go.", ["No, we shouldn't train.", "It left ten minutes ago.", "I'll leave it here."]),
    L("Could you help", [["F", "Could you help me carry these boxes?"]], "いちばん 合う 答えは？", "Sure. Where should I put them?", ["Yes, I could carry.", "They are heavy boxes.", "No, I couldn't help it."]),
    L("Is it OK", [["M", "Is it OK to park here?"]], "いちばん 合う 答えは？", "I'm afraid it's not allowed.", ["Yes, it's a park.", "I parked yesterday.", "It's OK, thank you."]),
    L("What do you think of", [["G", "What do you think of the new teacher?"]], "いちばん 合う 答えは？", "She seems very friendly.", ["I think so, too.", "She teaches math.", "Yes, I think."]),
  ], "質問・依頼・提案に 合う 答え");

  // ---------------- 高2 ----------------
  ch("lB2", 5, "会話の 内容（高校）", "🎧", [
    L("予約の変更", [["F", "Hello, I have a reservation for Friday at seven, but I'd like to change it to Saturday."], ["M", "Saturday at seven is full, but we have a table at eight."], ["F", "Eight is fine."]], "女性の 新しい 予約は？", "土曜日の8時", ["土曜日の7時", "金曜日の8時", "金曜日の7時"]),
    L("駅までの行き方", [["M", "Should we take a taxi to the station?"], ["F", "The roads are crowded at this hour. The subway would be faster."], ["M", "OK, let's do that."]], "2人は どうやって 駅へ 行く？", "地下鉄で", ["タクシーで", "バスで", "歩いて"]),
    L("レポートの締め切り", [["G", "When is the history report due?"], ["H", "It was due on Monday, but the teacher gave us one more week."]], "レポートの 締め切りは？", "1週間延びた", ["月曜日のまま", "明日に早まった", "なくなった"]),
    L("アルバイト", [["M", "How's your new part-time job at the bookstore?"], ["F", "I like it, but I have to work on weekends, so I can't see my friends much."]], "女性の 不満は？", "週末に友人と会えないこと", ["仕事がつまらないこと", "給料が安いこと", "本が好きではないこと"]),
    L("忘れた傘", [["F", "Excuse me, I think I left my umbrella on the bus this morning."], ["M", "What does it look like?"], ["F", "It's dark blue with white dots."]], "女性の 傘は？", "白い水玉の紺色", ["紺色の水玉の白", "無地の紺色", "白と青のしま"]),
    L("試験勉強", [["H", "Are you ready for the exam?"], ["G", "Not really. I understand the grammar, but I need to learn more vocabulary."]], "女性が 足りないと 感じている ものは？", "語彙", ["文法", "リスニング", "時間"]),
    L("旅行の計画", [["M", "Let's go to Kyoto in November to see the autumn leaves."], ["F", "Good idea, but hotels will be expensive then. Why don't we go in early December?"], ["M", "Sounds good."]], "2人は いつ 京都へ 行く？", "12月の初め", ["11月", "12月の終わり", "10月"]),
    L("映画の感想", [["F", "How was the movie?"], ["M", "The story was a bit boring, but the music was amazing."]], "男性の 感想は？", "話は退屈だったが音楽はすばらしかった", ["話も音楽もすばらしかった", "音楽が退屈だった", "話がすばらしかった"]),
    L("部屋のエアコン", [["G", "It's so hot in here. Can you turn on the air conditioner?"], ["H", "It's broken. Someone will come to fix it tomorrow. Let's open the windows for now."]], "2人は 今 何を する？", "窓を開ける", ["エアコンをつける", "修理を呼ぶ", "部屋を出る"]),
    L("図書館の本", [["M", "Can I borrow this book for two weeks?"], ["F", "New books can only be borrowed for one week. You can renew it once, though."]], "新しい 本を 借りられる 期間は？", "1週間（1回延長できる）", ["2週間", "1週間（延長できない）", "3日間"]),
  ], "やや 長い 会話を 聞いて 答える");

  ch("lB3", 5, "アナウンス・説明", "📢", [
    L("駅のアナウンス", [["G", "Attention, please. The 3:15 train to Osaka will leave from platform 5 instead of platform 2."]], "大阪行きの 電車は 何番線から 出る？", "5番線", ["2番線", "3番線", "15番線"]),
    L("店内放送", [["M", "Thank you for shopping with us. Our store will close in fifteen minutes. Please bring your items to the register."]], "店は いつ 閉まる？", "15分後", ["50分後", "5分後", "1時間後"]),
    L("天気予報", [["F", "Tomorrow will be sunny in the morning, but heavy rain is expected in the evening. Strong winds will continue until Thursday."]], "明日の 夕方の 天気は？", "激しい雨", ["晴れ", "くもり", "雪"]),
    L("機内放送", [["H", "Ladies and gentlemen, we will be landing in about twenty minutes. Please return to your seats and fasten your seat belts."]], "乗客が 求められている ことは？", "席にもどりシートベルトを締める", ["荷物をおろす", "飲み物を注文する", "電子機器の電源を入れる"]),
    L("博物館の案内", [["F", "Welcome to the city museum. Photos are allowed in the main hall, but not in the special exhibition on the second floor."]], "写真を とっては いけない 場所は？", "2階の特別展示", ["メインホール", "1階の受付", "どこでもとってよい"]),
    L("授業の連絡", [["M", "Class, tomorrow's lesson will be in the computer room, not in our usual classroom. Please bring your notebooks."]], "明日の 授業の 場所は？", "コンピューター室", ["いつもの教室", "図書室", "体育館"]),
    L("イベントの中止", [["G", "Because of the typhoon, this Saturday's sports festival has been postponed until next Sunday."]], "運動会は どうなった？", "次の日曜日に延期された", ["中止された", "今週の日曜日になった", "予定どおり行われる"]),
    L("ツアーの集合", [["H", "Our bus will leave at 1:30 sharp. Please be back here by 1:20."]], "何時までに もどる 必要が ある？", "1時20分", ["1時30分", "1時", "2時20分"]),
  ], "駅・店・天気予報の 放送");

  // ---------------- 高3 ----------------
  ch("lC1", 6, "講義・長めの 会話", "🎓", [
    L("講義：睡眠", [["H", "Many students believe that staying up late to study is effective. However, research shows that sleep helps the brain organize new information. Students who sleep well after studying actually remember more the next day."]], "話の 要点は？", "勉強の後によく眠ると記憶に残りやすい", ["夜遅くまで勉強するのが効果的だ", "睡眠は脳に関係がない", "朝に勉強するべきだ"]),
    L("講義：ミツバチ", [["F", "About one third of the food we eat depends on pollination by insects such as bees. In recent years, bee populations have declined due to pesticides and habitat loss, which could threaten our food supply."]], "ミツバチ減少の 原因として 挙げられたのは？", "農薬と生息地の減少", ["寒さと病気", "食料不足", "天敵の増加"]),
    L("議論：制服", [["M", "I think school uniforms are a good idea. They save time in the morning."], ["G", "Maybe, but they're expensive, and students can't express their personality."], ["M", "That's true, but I still think the advantages are greater."]], "女性の 意見は？", "制服は高く個性を表現できない", ["制服は朝の時間を節約できる", "制服の利点の方が大きい", "制服は安くて便利だ"]),
    L("相談：進路", [["F", "I can't decide whether to study abroad or go to a university in Japan."], ["H", "Why don't you talk to students who have studied abroad? Their experiences might help you decide."]], "男性の 助言は？", "留学経験者と話すこと", ["日本の大学に行くこと", "すぐに留学を決めること", "親に決めてもらうこと"]),
    L("講義：言語", [["G", "Children who grow up speaking two languages often show better attention control. Switching between languages seems to train the brain to focus on what is important and ignore distractions."]], "二言語を 話す 子どもについて 述べられていることは？", "注意をコントロールする力が高い傾向がある", ["言葉を覚えるのが遅い", "集中するのが苦手だ", "二つの言語を混同しやすい"]),
    L("会話：ボランティア", [["M", "Are you joining the beach clean-up this weekend?"], ["F", "I'd like to, but I have a part-time job on Saturday. Is there one on Sunday?"], ["M", "Yes, there's another group on Sunday morning."], ["F", "Great. I'll join that one."]], "女性は いつ 参加する？", "日曜日の朝", ["土曜日の朝", "土曜日の午後", "参加しない"]),
    L("講義：都市の木", [["H", "Trees in cities do more than make streets look nice. They provide shade, reduce temperatures in summer, and absorb some air pollution. Some cities are now planting thousands of trees for these reasons."]], "都市の 木の 効果として 述べられていないのは？", "騒音を完全になくす", ["夏の気温を下げる", "日かげをつくる", "大気汚染物質を吸収する"]),
    L("会話：オンライン授業", [["G", "Do you prefer online classes or classes in person?"], ["H", "Online classes are convenient because I don't have to commute. But I find it harder to concentrate at home."]], "男性が オンライン授業の 欠点として 挙げたのは？", "家では集中しにくい", ["通学に時間がかかる", "先生と話せない", "インターネットが遅い"]),
  ], "講義や 意見の 聞きとり（共通テスト・難関大）");

  ch("lC2", 6, "受けこたえ（難関）", "🏆", [
    L("I'm afraid", [["F", "I'm afraid I can't make it to the meeting tomorrow."]], "いちばん 合う 答えは？", "No problem. I'll send you the notes.", ["I'm afraid of it, too.", "Make it tomorrow, then.", "The meeting room is made."]),
    L("Do you happen to", [["H", "Do you happen to know where the post office is?"]], "いちばん 合う 答えは？", "Sorry, I'm new here myself.", ["It happened yesterday.", "Yes, I happen.", "I know the post office worker."]),
    L("Wasn't it", [["G", "Wasn't the lecture fascinating?"]], "いちばん 合う 答えは？", "Actually, I found it a little boring.", ["No, it was fascinating.", "Yes, it wasn't.", "The lecture is at three."]),
    L("Would you mind", [["M", "Would you mind taking a picture of us?"]], "いちばん 合う 答えは？", "Not at all. Say cheese!", ["Yes, I'd mind it.", "I don't have a picture.", "It's a nice picture of you."]),
    L("How come", [["F", "How come you're still here? I thought you'd left."]], "いちばん 合う 答えは？", "My flight was canceled.", ["I came by train.", "I'm leaving here.", "Because I'll come."]),
    L("I've been meaning to", [["H", "I've been meaning to ask you about the trip."]], "いちばん 合う 答えは？", "Sure. What would you like to know?", ["I don't mean it.", "The trip means a lot.", "You've been there."]),
    L("Would it be possible", [["G", "Would it be possible to change my seat to an aisle seat?"]], "いちばん 合う 答えは？", "Let me check if one is available.", ["It's possible to be.", "The aisle is crowded.", "Yes, you would."]),
    L("What if", [["M", "What if it rains on the day of the picnic?"]], "いちばん 合う 答えは？", "Then we'll have it in the gym.", ["It rained a lot.", "What is the picnic?", "If it is, I'm happy."]),
    L("Don't you think", [["F", "Don't you think we should tell the teacher?"]], "いちばん 合う 答えは？", "You're right. Let's go now.", ["Yes, I don't think.", "The teacher told us.", "I can't think of you."]),
    L("Couldn't be better", [["H", "How's your new job going?"]], "いちばん 合う 答えは？", "Couldn't be better.", ["It's going to the office.", "I couldn't be job.", "By train every day."]),
  ], "遠回しな 言い方・決まり文句");
})();
