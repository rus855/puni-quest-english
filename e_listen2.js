// ===== リスニングの国：追加の 問題（前の 問題の 番号と 音声ファイルは かえない） =====
(function () {
  const L = (t, say, q, a, ng, ex) => ({ t, say, q, a, ng, ex, ox: false });
  const LW = (w, a, ng) => L(w, [["F", w]], "聞こえた 英単語の 意味は？", a, ng);
  const R = "いちばん 合う 答えは？";
  // 章に 足す。音声ファイル名は あとに 続く 番号（audio/<章>-<番号>-<せりふ>.mp3）
  const add = (id, g, list) => {
    const off = Object.keys(BANK).filter((k) => k.startsWith(`q:${id}-`)).length;
    list.forEach((it, i) => Object.assign(it, { au: it.say.map((_, k) => `${id}-${off + i + 1}-${k + 1}`), rate: LISTEN_RATE[g] }));
    addQs("sci", id, list);
  };

  // ---------------- 中1 ----------------
  add("lA1", 1, [
    LW("teacher", "先生", ["生徒", "天気", "劇場"]),
    LW("morning", "朝", ["夕方", "お金", "月"]),
    LW("brother", "兄弟", ["姉妹", "パン", "橋"]),
    LW("Saturday", "土曜日", ["日曜日", "火曜日", "木曜日"]),
    LW("dinner", "夕食", ["昼食", "朝食", "冬"]),
    LW("station", "駅", ["店", "季節", "庭"]),
    LW("happy", "幸せな", ["忙しい", "悲しい", "重い"]),
    LW("summer", "夏", ["冬", "春", "日曜日"]),
    LW("window", "窓", ["冬", "風", "鳥"]),
    LW("fifteen", "15", ["50", "5", "55"]),
    LW("sixty", "60", ["16", "6", "66"]),
    LW("animal", "動物", ["鳥", "植物", "人"]),
    LW("yellow", "黄色", ["青", "白", "昨日"]),
    LW("hungry", "空腹の", ["怒った", "疲れた", "幸せな"]),
    LW("listen", "聞く", ["読む", "書く", "話す"]),
    LW("tomorrow", "明日", ["昨日", "今日", "明後日"]),
    LW("doctor", "医者", ["看護師", "ドア", "先生"]),
    LW("cloudy", "くもりの", ["晴れの", "雨の", "寒い"]),
  ]);
  add("lA2", 1, [
    L("時刻 6:50", [["F", "I usually get up at six fifty."]], "ふだん 起きる 時刻は？", "6時50分", ["6時15分", "5時50分", "7時50分"]),
    L("時刻 4:15", [["M", "The movie starts at four fifteen."]], "映画が 始まる 時刻は？", "4時15分", ["4時50分", "5時15分", "4時5分"]),
    L("曜日 Tuesday", [["F", "I have piano lessons on Tuesday."]], "ピアノの レッスンは 何曜日？", "火曜日", ["木曜日", "土曜日", "日曜日"]),
    L("値段 80 yen", [["M", "This pen is eighty yen."]], "ペンの 値段は？", "80円", ["18円", "800円", "8円"]),
    L("日付 June 13", [["F", "The sports day is on June thirteenth."]], "運動会は いつ？", "6月13日", ["6月30日", "7月13日", "6月3日"]),
    L("人数 seven", [["M", "There are seven people in my family."]], "家族は 何人？", "7人", ["11人", "17人", "6人"]),
    L("年れい fourteen", [["F", "My brother is fourteen years old."]], "兄（弟）は 何さい？", "14さい", ["40さい", "4さい", "13さい"]),
    L("月 October", [["M", "My birthday is in October."]], "誕生日は 何月？", "10月", ["8月", "11月", "12月"]),
    L("時刻 9:30", [["F", "The store opens at nine thirty."]], "店が 開く 時刻は？", "9時30分", ["9時13分", "5時30分", "9時3分"]),
    L("値段 2,500 yen", [["M", "The ticket is two thousand five hundred yen."]], "チケットの 値段は？", "2,500円", ["2,050円", "250円", "25,000円"]),
    L("回数 twice", [["F", "I go to the gym twice a week."]], "ジムに 行くのは 週に 何回？", "2回", ["1回", "3回", "毎日"]),
    L("距離 3 km", [["M", "The park is about three kilometers from here."]], "公園までの 距離は？", "約3キロ", ["約30キロ", "約13キロ", "約300メートル"]),
    L("時刻 noon", [["F", "Let's have lunch at noon."]], "昼食の 時刻は？", "正午（12時）", ["真夜中（0時）", "午後1時", "午前11時"]),
    L("日付 the 1st", [["M", "School starts on April first."]], "学校が 始まるのは？", "4月1日", ["4月3日", "8月1日", "4月10日"]),
    L("数 nineteen", [["F", "There are nineteen students in my class."]], "クラスの 生徒数は？", "19人", ["90人", "9人", "29人"]),
    L("時刻 quarter to", [["M", "It's a quarter to eight."]], "今 何時？", "7時45分", ["8時15分", "8時45分", "7時15分"]),
  ]);

  // ---------------- 中2 ----------------
  add("lA3", 2, [
    L("bike to school", [["F", "I used to walk to school, but now I ride my bike."]], "今は どうやって 学校へ 行く？", "自転車", ["歩いて", "バス", "電車"]),
    L("lunch box", [["M", "I forgot my lunch box, so I bought some bread at the store."]], "男性が 店で 買ったのは？", "パン", ["弁当", "牛乳", "おにぎり"]),
    L("rain tomorrow", [["F", "It will rain tomorrow, so the soccer game will be next Sunday."]], "サッカーの 試合は いつ？", "次の日曜日", ["明日", "今日", "次の土曜日"]),
    L("dog's name", [["M", "We have a dog named Kuro. He is black and very friendly."]], "クロは どんな 犬？", "黒くて人なつっこい", ["白くておとなしい", "黒くてこわい", "小さくて元気がない"]),
    L("library card", [["F", "You need a library card to borrow books. You can make one at the front desk."]], "本を 借りるのに 必要なのは？", "図書館カード", ["お金", "学生証", "予約"]),
    L("taller than", [["M", "Mika is taller than Yui, but shorter than Aya."]], "いちばん 背が 高いのは？", "アヤ", ["ミカ", "ユイ", "全員同じ"]),
    L("study plan", [["F", "I'm going to study math first, and then I'll read a book."]], "最初に すること は？", "数学の勉強", ["読書", "英語の勉強", "テレビを見る"]),
    L("lost cat", [["M", "My cat was lost for two days, but she came home this morning."]], "ネコは いつ 帰ってきた？", "今朝", ["昨日", "2日前", "昨夜"]),
    L("favorite subject", [["F", "My favorite subject is science because I like doing experiments."]], "理科が 好きな 理由は？", "実験が好きだから", ["先生がやさしいから", "簡単だから", "宿題がないから"]),
    L("busy weekend", [["M", "On Saturday I have club practice, and on Sunday I'll visit my grandparents."]], "日曜日に すること は？", "祖父母を訪ねる", ["部活の練習", "買い物", "家で休む"]),
    L("present for mom", [["F", "I bought flowers for my mother because tomorrow is her birthday."]], "花を 買った 理由は？", "明日が母の誕生日だから", ["母の日だから", "母が入院しているから", "花が安かったから"]),
    L("broken phone", [["M", "My phone is broken, so please send me an email instead."]], "男性の お願いは？", "メールを送ってほしい", ["電話をかけてほしい", "電話を直してほしい", "手紙を書いてほしい"]),
    L("early bus", [["F", "The first bus leaves at six, so I have to get up at five."]], "何時に 起きなければ ならない？", "5時", ["6時", "4時", "7時"]),
    L("not hungry", [["M", "I'm not hungry now because I ate a big lunch."]], "おなかが すいていない 理由は？", "昼食をたくさん食べたから", ["朝食を食べすぎたから", "具合が悪いから", "おやつを食べたから"]),
    L("pool closed", [["F", "The pool is closed today, so let's go to the park instead."]], "かわりに どこへ 行く？", "公園", ["プール", "図書館", "海"]),
    L("new student", [["M", "We have a new student from Australia. Her name is Lucy."]], "新しい 生徒は どこの 出身？", "オーストラリア", ["オーストリア", "カナダ", "アメリカ"]),
  ]);
  add("lA4", 2, [
    L("What's your favorite", [["F", "What's your favorite food?"]], R, "I love curry and rice.", ["Yes, I like it.", "I'm hungry now.", "At six thirty."]),
    L("Can I use", [["M", "Can I use your dictionary?"]], R, "Of course. Here you are.", ["Yes, I can use.", "It's a big dictionary.", "No, I don't."]),
    L("How was the test", [["F", "How was the math test?"]], R, "It was easier than I thought.", ["It's on Friday.", "I study math.", "For an hour."]),
    L("Who is that", [["M", "Who is that man by the door?"]], R, "He's our new science teacher.", ["It's by the door.", "Yes, he is.", "He's tall."]),
    L("When did you", [["F", "When did you come back from Hawaii?"]], R, "Last Sunday.", ["Next Sunday.", "By plane.", "For a week."]),
    L("Shall we", [["M", "Shall we take a break?"]], R, "Good idea. I'm tired.", ["Yes, I shall.", "It's broken.", "No, I didn't."]),
    L("How much", [["F", "How much is this T-shirt?"]], R, "It's 1,200 yen.", ["It's medium.", "It's very cute.", "I have two."]),
    L("Where did you buy", [["M", "Where did you buy that cap?"]], R, "At the shop near the station.", ["Last week.", "It was cheap.", "My brother."]),
    L("Do you mind if", [["F", "Do you mind if I open the window?"]], R, "Not at all. Go ahead.", ["Yes, please open it.", "No, I mind it.", "The window is open."]),
    L("Have you ever", [["M", "Have you ever been to Okinawa?"]], R, "Yes, I went there last summer.", ["No, I'm going there yesterday.", "Yes, I have a trip.", "It's far."]),
    L("Why are you", [["F", "Why are you running?"]], R, "Because I'm late for school.", ["Yes, I'm running.", "In the park.", "Every morning, I run."]),
    L("Could you help", [["M", "Could you help me with this box?"]], R, "Sure. Where should I put it?", ["Yes, I could.", "It's a big box.", "No, you couldn't."]),
    L("What happened", [["F", "What happened to your arm?"]], R, "I fell off my bike.", ["It's my arm.", "It happens.", "Yes, I did."]),
    L("Would you like", [["M", "Would you like something to drink?"]], R, "Some water, please.", ["Yes, I would like.", "I'm drinking.", "It's delicious."]),
    L("How long does it take", [["F", "How long does it take to get to the airport?"]], R, "About an hour by train.", ["It's a long airport.", "At ten.", "It took yesterday."]),
    L("What do you want to be", [["M", "What do you want to be in the future?"]], R, "I want to be a vet.", ["I want a future.", "In ten years.", "Yes, I do."]),
  ]);

  // ---------------- 中3 ----------------
  add("lA5", 3, [
    L("集合場所", [["M", "Let's meet in front of the library."], ["F", "The library is closed today. How about the park entrance?"], ["M", "OK, see you there."]], "2人は どこで 会う？", "公園の入口", ["図書館の前", "駅の前", "学校の門"]),
    L("飲み物", [["F", "Would you like coffee or tea?"], ["M", "I don't drink coffee. Tea, please."]], "男性が 飲むのは？", "紅茶", ["コーヒー", "水", "ジュース"]),
    L("宿題の範囲", [["M", "Is the homework page 20 or page 22?"], ["F", "Page 22. Page 20 is for next week."]], "今週の 宿題は？", "22ページ", ["20ページ", "21ページ", "両方"]),
    L("天気", [["F", "Will it rain this afternoon?"], ["M", "The weather report says it'll be cloudy, but no rain."]], "午後の 天気は？", "くもり（雨なし）", ["雨", "晴れ", "雪"]),
    L("買い物", [["M", "I need a new notebook."], ["F", "I have an extra one. You can have it."], ["M", "Really? Thanks!"]], "男性は ノートを どうする？", "女性からもらう", ["店で買う", "借りて返す", "あきらめる"]),
    L("遅刻", [["F", "Why were you late?"], ["M", "The train stopped for twenty minutes because of an accident."]], "遅れた 理由は？", "事故で電車が止まったから", ["寝坊したから", "道に迷ったから", "雨が降ったから"]),
    L("映画の時間", [["M", "Shall we see the 6:30 movie?"], ["F", "That's too late for me. Is there an earlier one?"], ["M", "There's one at 4:00."], ["F", "Great, let's see that."]], "2人が 見る 映画は 何時？", "4時", ["6時30分", "4時30分", "6時"]),
    L("部活", [["F", "Do you still play basketball?"], ["M", "No, I quit last year. Now I'm in the photography club."]], "男性は 今 何部？", "写真部", ["バスケットボール部", "美術部", "どこにも入っていない"]),
    L("予定の変更", [["M", "Can we meet on Friday instead of Thursday?"], ["F", "Sure. Friday is fine."]], "2人は いつ 会う？", "金曜日", ["木曜日", "土曜日", "まだ決まっていない"]),
    L("道案内", [["F", "Excuse me, where's the post office?"], ["M", "Go down this street and turn left at the bank. It's across from the park."]], "郵便局は どこ？", "銀行で左に曲がった公園の向かい", ["銀行で右に曲がった公園の横", "この通りのつきあたり", "銀行のとなり"]),
    L("体調", [["M", "You look tired."], ["F", "I stayed up late to finish my report."]], "女性が 疲れている 理由は？", "レポートのために夜更かししたから", ["部活の練習が長かったから", "かぜをひいたから", "早起きしたから"]),
    L("忘れ物", [["F", "Oh no, I left my umbrella on the train."], ["M", "Call the station. They might have it."]], "男性の 助言は？", "駅に電話する", ["新しい傘を買う", "電車を追いかける", "あきらめる"]),
    L("誕生日", [["M", "When is your sister's birthday?"], ["F", "It's next Monday. I'm going to make a cake for her."]], "女性が すること は？", "妹（姉）にケーキを作る", ["ケーキを買う", "パーティーに招く", "プレゼントを送る"]),
    L("旅行", [["F", "How was your trip to Hokkaido?"], ["M", "It was cold, but the food was great."]], "男性の 感想は？", "寒かったが食べ物がよかった", ["暖かくて楽しかった", "食べ物がまずかった", "雨ばかりだった"]),
    L("手伝い", [["M", "Can you help me move this desk?"], ["F", "Sure, but give me five minutes. I'm on the phone."]], "女性は いつ 手伝う？", "5分後", ["今すぐ", "電話の前", "明日"]),
    L("本の感想", [["F", "Have you read this book?"], ["M", "Yes. The beginning was slow, but the ending was exciting."]], "男性の 感想は？", "結末がおもしろかった", ["最初がおもしろかった", "全部つまらなかった", "まだ読んでいない"]),
  ]);

  // ---------------- 高1 ----------------
  add("lB1", 4, [
    L("Where's the meeting", [["H", "Where's the meeting being held?"]], R, "In Room 302.", ["At three o'clock.", "About the budget.", "Mr. Lee is."]),
    L("Why was the flight", [["F", "Why was the flight delayed?"]], R, "Because of the bad weather.", ["At gate 5.", "It's a long flight.", "Yes, it was."]),
    L("How about", [["M", "How about having lunch outside today?"]], R, "Sounds great. It's a nice day.", ["I had lunch.", "Outside is cold.", "About noon."]),
    L("Would you like me to", [["G", "Would you like me to drive you home?"]], R, "That would be very kind of you.", ["Yes, I'd like you.", "I drove home.", "My home is big."]),
    L("Didn't you", [["H", "Didn't you lock the door?"]], R, "Oh no, I forgot.", ["Yes, I didn't.", "The door is big.", "I'll lock you."]),
    L("Which do you prefer", [["F", "Which do you prefer, the window seat or the aisle seat?"]], R, "The window seat, please.", ["Yes, I prefer.", "The plane is full.", "Both are seats."]),
    L("When will", [["M", "When will the package arrive?"]], R, "It should be here by Friday.", ["It's a big package.", "From Tokyo.", "Yes, it will."]),
    L("Who's going to", [["G", "Who's going to give the presentation?"]], R, "I think Sarah is.", ["It's about sales.", "Tomorrow at ten.", "In the main hall."]),
    L("Can I leave", [["H", "Can I leave a message for Mr. Kim?"]], R, "Of course. Let me get a pen.", ["Mr. Kim left.", "Yes, you can leave now.", "It's a long message."]),
    L("Should I bring", [["F", "Should I bring anything to the party?"]], R, "Just bring yourself.", ["The party was fun.", "Yes, you should party.", "I brought it."]),
    L("How often", [["M", "How often does the bus come?"]], R, "Every fifteen minutes.", ["For fifteen minutes.", "At the bus stop.", "It's a big bus."]),
    L("Isn't this", [["G", "Isn't this your jacket?"]], R, "Yes, thanks. I was looking for it.", ["No, it isn't mine jacket.", "It's a nice jacket.", "I bought it yesterday, no."]),
    L("What time does", [["H", "What time does the museum close?"]], R, "At five on weekdays.", ["It's closed.", "Near the park.", "Since 1990."]),
    L("Would you mind waiting", [["F", "Would you mind waiting a few minutes?"]], R, "No problem. I'm not in a hurry.", ["Yes, I'll wait you.", "I mind a lot of minutes.", "A few minutes ago."]),
    L("Do you know where", [["M", "Do you know where I can buy stamps?"]], R, "There's a post office around the corner.", ["Yes, I know stamps.", "They're cheap.", "I bought some."]),
    L("Let's", [["G", "Let's finish this tomorrow."]], R, "Fine with me. I'm exhausted.", ["Tomorrow is Friday.", "I finished yesterday.", "Let's yesterday."]),
  ]);

  // ---------------- 高2 ----------------
  add("lB2", 5, [
    L("ホテル", [["M", "I'd like to check in. I have a reservation under Tanaka."], ["F", "Yes, Mr. Tanaka. A single room for two nights?"], ["M", "Actually, I'd like to stay three nights if possible."], ["F", "Let me check... yes, that's fine."]], "男性の 宿泊は 何泊に なった？", "3泊", ["2泊", "1泊", "4泊"]),
    L("レストラン", [["F", "Are you ready to order?"], ["M", "I'll have the chicken. And could I get a salad instead of fries?"], ["F", "Certainly."]], "男性が 頼んだ ものは？", "チキンとサラダ", ["チキンとポテト", "サラダとポテト", "ステーキとサラダ"]),
    L("会議の時間", [["G", "The meeting was supposed to start at two, right?"], ["H", "It's been moved to three thirty because the manager's flight is late."]], "会議は 何時に 始まる？", "3時30分", ["2時", "2時30分", "3時"]),
    L("電車の乗りかえ", [["M", "How do I get to the stadium?"], ["F", "Take the Green Line and change to the Blue Line at Central Station."]], "どこで 乗りかえる？", "セントラル駅", ["スタジアム駅", "グリーン線の終点", "乗りかえはない"]),
    L("アルバイトの面接", [["F", "Can you work on weekends?"], ["M", "Saturdays are fine, but I have classes on Sunday mornings."], ["F", "Then Sunday afternoons?"], ["M", "Yes, that works."]], "男性が 働けないのは？", "日曜日の午前", ["土曜日", "日曜日の午後", "平日"]),
    L("修理", [["H", "My laptop won't turn on."], ["G", "Have you tried charging it?"], ["H", "Yes, but nothing happens."], ["G", "Then you'd better take it to a repair shop."]], "女性の 助言は？", "修理店に持っていく", ["充電する", "新しいのを買う", "電源ボタンを長押しする"]),
    L("映画の選択", [["F", "Do you want to see the action movie or the comedy?"], ["M", "I've already seen the action one. Let's see the comedy."]], "2人は 何を 見る？", "コメディー", ["アクション映画", "ホラー映画", "何も見ない"]),
    L("忘れ物の問い合わせ", [["M", "I think I left my phone here yesterday."], ["F", "What color is it?"], ["M", "It's silver with a blue case."]], "男性の 電話は？", "銀色で青いケース", ["青色で銀のケース", "黒色", "白色で赤いケース"]),
    L("旅行の計画", [["G", "Shall we fly to Fukuoka or take the bullet train?"], ["H", "Flying is faster, but the train is easier because the station is downtown."], ["G", "Then let's take the train."]], "2人が 選んだ 交通手段は？", "新幹線", ["飛行機", "バス", "車"]),
    L("体育館の利用", [["F", "Can we use the gym after school today?"], ["M", "Sorry, the basketball team is using it until six. You can use it after that."]], "体育館が 使えるのは？", "6時以降", ["放課後すぐ", "6時まで", "今日は使えない"]),
    L("プレゼント選び", [["M", "What should we get Mom for Mother's Day?"], ["F", "She said she wants a new scarf."], ["M", "OK, let's look for one this weekend."]], "母への プレゼントは？", "スカーフ", ["花", "手袋", "かばん"]),
    L("試験勉強", [["G", "Are you studying for the history test?"], ["H", "Not yet. I'm finishing my English essay first."]], "男性が 今 していることは？", "英語の作文を仕上げている", ["歴史の勉強", "数学の勉強", "休憩"]),
    L("天気と計画", [["F", "It's going to snow tomorrow."], ["M", "Then we should cancel the hiking trip."], ["F", "Let's go to the indoor pool instead."]], "2人は 明日 何を する？", "屋内プールに行く", ["ハイキング", "雪遊び", "家にいる"]),
    L("図書館の延長", [["M", "Can I keep this book for another week?"], ["F", "Sure, but someone else has reserved it, so you can only keep it three more days."]], "本を 返す 期限は？", "あと3日", ["あと1週間", "今日", "あと2週間"]),
    L("料理", [["G", "This soup is delicious. What's in it?"], ["H", "Tomatoes, onions, and a little ginger."]], "スープに 入っていないのは？", "にんじん", ["トマト", "たまねぎ", "しょうが"]),
    L("バスの遅れ", [["F", "The bus is late again."], ["M", "Let's take a taxi. We can't miss the beginning of the concert."]], "2人が タクシーに 乗る 理由は？", "コンサートの始まりに間に合うため", ["バスが運休したから", "雨が降っているから", "タクシーのほうが安いから"]),
  ]);
  add("lB3", 5, [
    L("空港のアナウンス", [["G", "Flight 207 to Sydney is now boarding at gate 12. Passengers in rows 30 to 45, please board now."]], "今 搭乗できるのは？", "30〜45列の乗客", ["12列の乗客", "全員", "207番の座席の人"]),
    L("デパート", [["H", "Today only, all shoes on the third floor are 40% off."]], "セールは 何が 何%引き？", "3階の靴が40%引き", ["4階の靴が30%引き", "全商品が40%引き", "3階の服が14%引き"]),
    L("学校放送", [["F", "Students who want to join the English speech contest must sign up by Wednesday."]], "申しこみの 締め切りは？", "水曜日", ["火曜日", "木曜日", "金曜日"]),
    L("電車の遅延", [["M", "Due to heavy snow, all trains on the Kita Line are running about 30 minutes late."]], "電車の 状況は？", "約30分遅れている", ["運休している", "約13分遅れている", "通常どおり"]),
    L("ツアーガイド", [["G", "We'll stop here for lunch. Please be back on the bus in 45 minutes."]], "バスに もどる までの 時間は？", "45分", ["15分", "40分", "1時間"]),
    L("天気予報②", [["H", "It will be sunny in the morning, but clouds will move in by evening. There's a 60% chance of rain at night."]], "夜の 雨の 確率は？", "60%", ["16%", "6%", "40%"]),
    L("美術館", [["F", "The museum café is closed today for repairs. Snacks are available at the shop on the first floor."]], "軽食が 買える 場所は？", "1階の売店", ["美術館のカフェ", "2階のレストラン", "どこにもない"]),
    L("駐車場", [["M", "Visitors, please note that the parking lot will close at 10 p.m. Cars left after that will be locked in until morning."]], "駐車場が 閉まる 時刻は？", "午後10時", ["午後12時", "午前10時", "午後8時"]),
    L("運動会", [["G", "Because of the hot weather, the relay race has been moved to the morning."]], "リレーが 変更された 理由は？", "暑さのため", ["雨のため", "時間が足りないため", "選手が少ないため"]),
    L("図書館の案内", [["H", "The library will be closed for inventory from March 1 to March 5. Books due during this period may be returned on March 6."]], "休館期間に 返す はずの 本は？", "3月6日に返せばよい", ["3月1日までに返す", "返却ポストに入れる", "延滞料がかかる"]),
    L("機内アナウンス②", [["F", "We are now passing through some turbulence. Please return to your seats and fasten your seat belts."]], "アナウンスの 理由は？", "機体がゆれるため", ["着陸するため", "食事の時間のため", "離陸するため"]),
    L("店のアナウンス", [["M", "Attention shoppers. A child's red backpack has been found near the entrance. Please come to the service counter."]], "落とし物は？", "子どもの赤いリュック", ["大人の黒いかばん", "子どもの赤い帽子", "財布"]),
  ]);

  // ---------------- 高3 ----------------
  add("lC1", 6, [
    L("講義：多言語", [["G", "More than half of the world's population speaks at least two languages. Being bilingual is therefore not unusual, but rather the norm in many parts of the world."]], "話の 要点は？", "二言語以上を話すことは世界では普通だ", ["二言語を話す人は珍しい", "一つの言語だけを話すべきだ", "言語は一つに統一される"]),
    L("講義：海の温暖化", [["H", "As ocean temperatures rise, coral reefs lose the colorful algae that live inside them. This process, called bleaching, can kill the coral if it continues for too long."]], "サンゴが 白くなる 原因は？", "海水温の上昇", ["海水の減少", "魚の増加", "海の酸素の増加"]),
    L("議論：宿題", [["F", "I think homework should be banned. Students need time to rest."], ["M", "But homework helps students review what they learned."], ["F", "Maybe a small amount is OK."]], "女性の 最終的な 考えは？", "少しの宿題ならよい", ["宿題はすべて禁止すべき", "宿題は多いほどよい", "休みは不要だ"]),
    L("相談：部活と勉強", [["M", "I can't decide whether to quit the soccer club to focus on studying."], ["G", "Why not talk to your coach? Maybe you can practice fewer days a week."]], "女性の 助言は？", "コーチに相談して練習日を減らす", ["すぐに部活をやめる", "勉強をやめる", "別の部に入る"]),
    L("講義：スマートフォン", [["F", "A recent study found that simply having a smartphone on the desk, even when it is turned off, can reduce a student's ability to concentrate."]], "研究で わかったことは？", "電源が切れていても机にあると集中力が下がる", ["電源を切れば影響はない", "スマホは集中力を高める", "スマホを使うと成績が上がる"]),
    L("会話：引っ越し", [["H", "Are you really moving to Osaka?"], ["G", "Yes, my father got a new job there. We're leaving next month."], ["H", "I'll miss you. Let's keep in touch."]], "女性が 引っ越す 理由は？", "父親の新しい仕事のため", ["大学に入るため", "祖父母と住むため", "家が古くなったため"]),
    L("講義：食料問題", [["M", "Insects may become an important source of food in the future. They are rich in protein, and raising them requires much less land and water than raising cattle."]], "昆虫が 食料として 注目される 理由として 述べられているのは？", "たんぱく質が豊富で少ない土地と水で育てられる", ["味がとてもよい", "牛より大きく育つ", "どこでも自然にとれる"]),
    L("会話：オンライン学習", [["G", "I've started learning Spanish with an app."], ["H", "Is it effective?"], ["G", "It's good for vocabulary, but I still need someone to practice speaking with."]], "女性が アプリについて 感じている 不足は？", "話す練習の相手がいないこと", ["語彙が学べないこと", "料金が高いこと", "文法が難しいこと"]),
    L("講義：歩くこと", [["F", "Walking just 30 minutes a day can lower the risk of heart disease. You don't need to run or go to a gym to stay healthy."]], "話の 要点は？", "1日30分歩くだけでも健康によい", ["健康にはジム通いが必要だ", "走らないと健康になれない", "歩くことは心臓に悪い"]),
    L("会話：ボランティア②", [["M", "I volunteered at the animal shelter last weekend."], ["F", "What did you do there?"], ["M", "I walked dogs and cleaned the cages. It was hard work, but fun."]], "男性が しなかったことは？", "動物に薬をあげた", ["犬の散歩", "おりのそうじ", "保護施設での活動"]),
    L("講義：記憶術", [["H", "One effective way to remember information is to teach it to someone else. Explaining an idea forces you to organize your thoughts."]], "教えることが 記憶に よい 理由は？", "説明すると考えが整理されるから", ["相手に覚えてもらえるから", "時間がかかるから", "書く量が増えるから"]),
    L("議論：制服②", [["G", "Our school is thinking about allowing students to choose between skirts and pants."], ["H", "I think that's a great idea. Everyone should feel comfortable."]], "男性の 意見は？", "選べるようにするのに賛成", ["今の制服のままがよい", "制服をなくすべき", "スカートだけにすべき"]),
  ]);
  add("lC2", 6, [
    L("I was wondering", [["F", "I was wondering if you could help me with my essay."]], R, "Sure. When do you need it by?", ["I wonder, too.", "Your essay is wonderful.", "Yes, you could."]),
    L("Haven't we met", [["H", "Haven't we met somewhere before?"]], R, "I don't think so. I'm new here.", ["Yes, we haven't.", "We meet at five.", "Somewhere is nice."]),
    L("You don't mind, do you", [["G", "You don't mind if I bring a friend, do you?"]], R, "Not at all. The more, the merrier.", ["Yes, I don't mind.", "My friend is here.", "I brought one."]),
    L("Why don't you", [["M", "Why don't you take tomorrow off? You look exhausted."]], R, "Maybe I will. Thanks.", ["Because I'm exhausted.", "I took it off.", "Tomorrow is Monday."]),
    L("Any idea", [["F", "Any idea why the meeting was canceled?"]], R, "I heard the manager is sick.", ["Yes, I have ideas.", "It was a good meeting.", "Next Tuesday."]),
    L("I'd appreciate", [["H", "I'd appreciate it if you could reply by Friday."]], R, "I'll get back to you by then.", ["I appreciate Friday.", "You're welcome on Friday.", "I replied yesterday."]),
    L("Do you happen to have", [["G", "Do you happen to have a charger I could borrow?"]], R, "Sorry, mine's at home.", ["It happened yesterday.", "Yes, I charge.", "It's a good charger."]),
    L("Couldn't you", [["M", "Couldn't you finish it a little earlier?"]], R, "I'll do my best, but I can't promise.", ["Yes, I couldn't.", "It's a little early.", "I finished early yesterday, no."]),
    L("How come", [["F", "How come you didn't call me back?"]], R, "Sorry, my phone died.", ["I came by bus.", "I'll come back.", "Because you called."]),
    L("Is it all right", [["H", "Is it all right if I leave a little early today?"]], R, "Sure, as long as your work is done.", ["It's all right here.", "You left early.", "Yes, it's right."]),
    L("What's the matter", [["G", "You seem quiet today. What's the matter?"]], R, "I'm just a little tired.", ["It's a matter.", "Nothing is quiet.", "I'm loud today."]),
    L("Would you rather", [["M", "Would you rather eat out or cook at home tonight?"]], R, "Let's eat out. I'm too tired to cook.", ["I'd rather you.", "I cooked out.", "Tonight is fine to rather."]),
  ]);
})();
