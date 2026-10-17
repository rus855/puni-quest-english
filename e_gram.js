// ===== 文法の国：中1〜高3の 文法（空らんに 入る 語句を 4択で えらぶ） =====
// G(カード名, 英文（空らんは ＿）, 正解, まちがい3つ, 解説, 和訳)
(function () {
  const ch = (id, g, name, icon, list, desc) => CHAPTERS.push({ id, w: "kotoba", g, sec: "a" + g, name, icon, desc, items: bank("kotoba", id, list) });
  const B = '<span class="eblank">（　　）</span>';
  const G = (t, en, a, ng, ex, ja) => ({ t, label: "（　）に 入るのは？", q: `<span class="en">${en.replace("＿", B)}</span>${ja ? `<br><small class="ja">${ja}</small>` : ""}`, a, ng, ex, ox: false });
  // 動詞の 変化を キーボードで 入力する 問題
  const SP = (t, q, a, ex, alt) => ({ t, q, spell: a, alt: alt || [], ex });

  // ---------------- 中1 ----------------
  ch("gA1", 1, "be動詞と 一般動詞", "🔤", [
    G("I am", "I ＿ a junior high school student.", "am", ["is", "are", "be"], "主語が I のとき be動詞は am", "わたしは中学生です。"),
    G("You are", "You ＿ my best friend.", "are", ["am", "is", "be"], "主語が you のとき be動詞は are"),
    G("He is", "He ＿ from Canada.", "is", ["am", "are", "be"], "主語が he / she / it のとき be動詞は is", "彼はカナダ出身です。"),
    G("We are", "We ＿ in the same class.", "are", ["am", "is", "be"], "複数の主語には are"),
    G("This is", "＿ is my bike.", "This", ["These", "Those", "They"], "1つの物をさす「これは」は this（後ろが is）", "これはわたしの自転車です。"),
    G("Are you～?", "＿ you hungry? ― Yes, I am.", "Are", ["Do", "Is", "Am"], "be動詞の疑問文は be動詞を前に出す"),
    G("Do you～?", "＿ you play tennis? ― Yes, I do.", "Do", ["Are", "Is", "Does"], "一般動詞（play）の疑問文は Do を使う"),
    G("I don't", "I ＿ like coffee.", "don't", ["am not", "isn't", "not"], "一般動詞の否定文は don't＋動詞の原形", "わたしはコーヒーが好きではありません。"),
    G("is not", "It ＿ cold today.", "isn't", ["don't", "doesn't", "aren't"], "cold は形容詞なので be動詞の否定文", "今日は寒くありません。"),
    G("They are", "Ken and Mai ＿ good friends.", "are", ["is", "am", "be"], "Ken and Mai は2人＝複数なので are"),
    G("Is this～?", "＿ this your umbrella? ― No, it isn't.", "Is", ["Are", "Does", "Do"], "this が主語の be動詞の疑問文"),
    G("a / an", "I have ＿ apple.", "an", ["a", "the", "some"], "母音（ア・イ・ウ・エ・オの音）で始まる語の前は an"),
  ], "I am ／ You are ／ Do you 〜? の きほん");

  ch("gA2", 1, "三単現の s", "🐝", [
    G("plays", "My brother ＿ soccer every day.", "plays", ["play", "playing", "to play"], "主語が3人称単数・現在の文では動詞に s をつける", "兄は毎日サッカーをします。"),
    G("has", "She ＿ two cats.", "has", ["have", "haves", "having"], "have の3単現は has"),
    G("goes", "Tom ＿ to school by bus.", "goes", ["go", "gos", "going"], "go の3単現は goes（o で終わる語は es）"),
    G("studies", "Mika ＿ English after dinner.", "studies", ["studys", "study", "studing"], "子音＋y で終わる語は y を i にかえて es"),
    G("watches", "My father ＿ TV in the evening.", "watches", ["watchs", "watch", "watching"], "ch・sh・s・x で終わる語は es"),
    G("Does he～?", "＿ he like music? ― Yes, he does.", "Does", ["Do", "Is", "Are"], "3人称単数の疑問文は Does＋主語＋動詞の原形"),
    G("doesn't", "My sister ＿ eat breakfast.", "doesn't", ["don't", "isn't", "not"], "3人称単数の否定文は doesn't＋動詞の原形"),
    G("原形 after does", "Does your mother ＿ a car?", "drive", ["drives", "driving", "drove"], "Does の後ろの動詞は原形"),
    G("they play", "They ＿ basketball after school.", "play", ["plays", "playing", "is play"], "they は3人称複数なので s はつけない"),
    G("lives", "Our teacher ＿ near the station.", "lives", ["live", "living", "to live"], "our teacher は3人称単数"),
    G("tries", "He always ＿ his best.", "tries", ["trys", "try", "trying"], "try → tries"),
    G("does", "What ＿ she do on Sundays?", "does", ["do", "is", "are"], "疑問詞＋does＋主語＋動詞の原形"),
  ], "he / she / it の 文の 動詞");

  ch("gA3", 1, "代名詞の かたち", "👤", [
    G("my", "This is ＿ notebook.", "my", ["I", "me", "mine"], "「わたしの〜」は my", "これはわたしのノートです。"),
    G("me", "Please help ＿.", "me", ["I", "my", "mine"], "動詞の後ろ（目的語）は me"),
    G("his", "Is this bag ＿? ― Yes, it's his.", "his", ["he", "him", "he's"], "「彼のもの」は his（his は「彼の」「彼のもの」の両方）"),
    G("her", "I know ＿ very well.", "her", ["she", "hers", "she's"], "目的語の「彼女を」は her"),
    G("them", "I like these songs. I listen to ＿ every day.", "them", ["they", "their", "theirs"], "前置詞の後ろは目的格 them"),
    G("our", "＿ school is on the hill.", "Our", ["We", "Us", "Ours"], "「わたしたちの」は our"),
    G("mine", "That pen is not yours. It's ＿.", "mine", ["my", "me", "I"], "「わたしのもの」は mine"),
    G("its", "The dog is wagging ＿ tail.", "its", ["it's", "it", "itself"], "「それの」は its（it's は it is）"),
    G("their", "The students opened ＿ textbooks.", "their", ["they", "them", "theirs"], "「彼らの」は their"),
    G("Whose", "＿ bike is this? ― It's Ken's.", "Whose", ["Who", "Which", "What"], "「だれの」は whose"),
    G("yours", "Is this umbrella ＿? ― Yes, it's mine.", "yours", ["your", "you", "you're"], "「あなたのもの」は yours"),
    G("him", "Do you know that boy? ― Yes, I play tennis with ＿.", "him", ["he", "his", "he's"], "with の後ろは目的格"),
  ], "I・my・me・mine の つかいわけ");

  ch("gA4", 1, "疑問詞", "❓", [
    G("What", "＿ do you have in your hand? ― I have a coin.", "What", ["Who", "Where", "When"], "「何」は what"),
    G("Where", "＿ do you live? ― I live in Nagoya.", "Where", ["When", "What", "How"], "「どこ」は where"),
    G("When", "＿ is your birthday? ― It's May 5.", "When", ["Where", "Who", "Which"], "「いつ」は when"),
    G("Who", "＿ is that woman? ― She is our new teacher.", "Who", ["What", "Whose", "Where"], "「だれ」は who"),
    G("How", "＿ do you go to school? ― By train.", "How", ["What", "Why", "Which"], "手段「どうやって」は how"),
    G("How many", "How ＿ brothers do you have? ― I have two.", "many", ["much", "old", "long"], "数をたずねるのは How many＋複数名詞"),
    G("How much", "How ＿ is this shirt? ― It's 2,000 yen.", "much", ["many", "long", "old"], "値段は How much"),
    G("How old", "How ＿ is your sister? ― She is ten.", "old", ["many", "much", "tall"], "年れいは How old"),
    G("Which", "＿ do you like better, tea or coffee?", "Which", ["What", "Who", "How"], "2つのうち「どちら」は which"),
    G("What time", "What ＿ do you get up? ― At six.", "time", ["hour", "day", "clock"], "時刻は What time"),
    G("Why", "＿ do you like summer? ― Because I can swim in the sea.", "Why", ["How", "When", "What"], "理由「なぜ」は why（答えは Because 〜）"),
    G("How long", "How ＿ is the bridge? ― It's about 300 meters long.", "long", ["many", "much", "far"], "長さは How long"),
  ], "what・who・where・when・how");

  ch("gA5", 1, "現在進行形", "🎬", [
    G("am ～ing", "I ＿ reading a book now.", "am", ["do", "is", "have"], "進行形は be動詞＋〜ing"),
    G("is running", "Look! The dog ＿ in the park.", "is running", ["runs", "is runing", "running"], "run → running（n を重ねる）"),
    G("are swimming", "They ＿ in the river now.", "are swimming", ["swim", "are swiming", "is swimming"], "swim → swimming"),
    G("making", "My mother is ＿ dinner.", "making", ["makeing", "make", "makes"], "e で終わる語は e をとって ing"),
    G("Are you ～ing?", "＿ you watching TV? ― No, I'm not.", "Are", ["Do", "Is", "Does"], "進行形の疑問文は be動詞を前に"),
    G("isn't ～ing", "He ＿ sleeping. He's studying.", "isn't", ["doesn't", "don't", "not"], "進行形の否定文は be動詞＋not＋〜ing"),
    G("What are you doing", "What are you ＿? ― I'm writing a letter.", "doing", ["do", "does", "did"], "「何をしているの？」は What are you doing?"),
    G("sitting", "The cat is ＿ on the chair.", "sitting", ["siting", "sit", "sits"], "sit → sitting"),
    G("know（進行形にしない）", "I ＿ his name.", "know", ["am knowing", "knowing", "knows"], "know・like など状態を表す動詞はふつう進行形にしない"),
    G("now", "She is playing the piano ＿.", "now", ["yesterday", "every day", "last week"], "進行形は now などといっしょに使う"),
    G("having", "We are ＿ lunch in the classroom.", "having", ["haveing", "have", "has"], "「食べている」の意味の have は進行形にできる"),
    G("lying", "The boy is ＿ on the grass.", "lying", ["lieing", "lies", "lain"], "lie → lying（ie を y にかえる）"),
  ], "〜しているところ");

  ch("gA6", 1, "過去形", "⏪", [
    G("played", "I ＿ tennis yesterday.", "played", ["play", "plays", "playing"], "過去のことは過去形（規則動詞は ed）"),
    G("went", "We ＿ to Kyoto last year.", "went", ["goed", "go", "gone"], "go の過去形は went（不規則動詞）"),
    G("Did you ～?", "＿ you see the movie? ― Yes, I did.", "Did", ["Do", "Were", "Are"], "一般動詞の過去の疑問文は Did＋主語＋原形"),
    G("didn't", "He ＿ come to school yesterday.", "didn't", ["doesn't", "wasn't", "don't"], "過去の否定は didn't＋原形"),
    G("was", "I ＿ very busy last night.", "was", ["were", "am", "did"], "I の be動詞の過去形は was"),
    G("were", "They ＿ in the gym an hour ago.", "were", ["was", "are", "did"], "複数の be動詞の過去形は were"),
    G("studied", "She ＿ math for two hours.", "studied", ["studyed", "studys", "study"], "study → studied"),
    G("stopped", "The bus ＿ in front of the school.", "stopped", ["stoped", "stops", "stop"], "stop → stopped（p を重ねる）"),
    G("ate", "I ＿ curry for lunch.", "ate", ["eated", "eat", "eaten"], "eat の過去形は ate"),
    G("was ～ing", "I ＿ taking a bath when he called me.", "was", ["am", "did", "were"], "過去進行形は was / were＋〜ing"),
    G("原形 after did", "Did she ＿ the letter?", "write", ["wrote", "writes", "written"], "Did の後ろは原形"),
    G("ago", "My grandfather visited us three days ＿.", "ago", ["before", "last", "since"], "「〜前に」は 〜 ago"),
  ], "〜した（規則動詞と 不規則動詞）");

  ch("gA7", 1, "can と 命令文", "🦸", [
    G("can swim", "My brother can ＿ very fast.", "swim", ["swims", "swimming", "swam"], "can の後ろは動詞の原形"),
    G("Can you ～?", "＿ you play the guitar? ― Yes, I can.", "Can", ["Do", "Are", "Does"], "Can＋主語＋原形 〜? で「〜できますか」"),
    G("can't", "I ＿ speak Chinese.", "can't", ["don't can", "not can", "am not"], "「できない」は can't（cannot）"),
    G("Can I ～?", "＿ I use your pen? ― Sure.", "Can", ["Do", "Am", "Will"], "Can I 〜? は「〜してもいいですか」"),
    G("命令文", "＿ quiet in the library.", "Be", ["Are", "Is", "Do"], "形容詞の命令文は Be で始める"),
    G("Don't", "＿ run in the hallway.", "Don't", ["Not", "No", "Aren't"], "「〜するな」は Don't＋原形"),
    G("Let's", "＿ go to the park. ― Yes, let's.", "Let's", ["Shall", "Let", "We"], "「〜しよう」は Let's＋原形"),
    G("Please", "＿ open the window.", "Please", ["Can", "Let's", "Do"], "please で始めるとていねいな命令文"),
    G("Can you（依頼）", "＿ you help me with my homework? ― OK.", "Can", ["Do", "Shall", "Must"], "Can you 〜? は「〜してくれますか」"),
    G("could（過去）", "I ＿ ride a bike when I was five.", "could", ["can", "can't", "will"], "can の過去形は could"),
    G("Don't be", "Don't ＿ afraid.", "be", ["are", "is", "being"], "be動詞の否定の命令文は Don't be 〜"),
    G("Look", "＿ at this picture.", "Look", ["See", "Watch", "Looks"], "「〜を見なさい」は Look at 〜"),
  ], "できる・〜しなさい・〜しよう");

  ch("gA8", 1, "前置詞（時と 場所）", "📍", [
    G("in（月）", "My birthday is ＿ July.", "in", ["on", "at", "by"], "月・年・季節は in"),
    G("on（日付・曜日）", "We have no school ＿ Sunday.", "on", ["in", "at", "for"], "曜日・日付は on"),
    G("at（時刻）", "The class starts ＿ 8:30.", "at", ["in", "on", "for"], "時刻は at"),
    G("in（場所の中）", "There is a cat ＿ the box.", "in", ["on", "at", "to"], "「〜の中に」は in"),
    G("on（接して）", "Your book is ＿ the desk.", "on", ["in", "at", "under"], "「〜の上に（接して）」は on"),
    G("under", "The ball is ＿ the table.", "under", ["over", "on", "between"], "「〜の下に」は under"),
    G("between", "The bank is ＿ the post office and the hospital.", "between", ["among", "near", "by"], "2つの間は between A and B"),
    G("in the morning", "I usually study ＿ the morning.", "in", ["on", "at", "for"], "in the morning（午前中に）"),
    G("on 特定の日の朝", "He left ＿ the morning of May 3.", "on", ["in", "at", "for"], "特定の日の朝は on"),
    G("near", "I live ＿ the station. It's a two-minute walk.", "near", ["far", "between", "under"], "「〜の近くに」は near"),
    G("for（期間）", "I stayed in London ＿ two weeks.", "for", ["during", "in", "since"], "「〜の間」（数字の期間）は for"),
    G("at night", "Owls hunt ＿ night.", "at", ["in", "on", "by"], "at night（夜に）"),
  ], "in・on・at の つかいわけ");

  // ---------------- 中2 ----------------
  ch("gB1", 2, "未来の 言い方", "🔮", [
    G("will", "It ＿ be sunny tomorrow.", "will", ["is", "was", "does"], "未来のことは will＋原形"),
    G("be going to", "I am going ＿ visit my uncle next week.", "to", ["for", "will", "at"], "be going to＋原形「〜するつもり」"),
    G("Will you ～?", "＿ you be free tomorrow? ― Yes, I will.", "Will", ["Do", "Are", "Did"], "Will＋主語＋原形 〜?"),
    G("won't", "I ＿ forget your kindness.", "won't", ["don't will", "willn't", "am not"], "will not の短縮形は won't"),
    G("Are you going to ～?", "＿ you going to play soccer this weekend?", "Are", ["Do", "Will", "Is"], "be going to の疑問文は be動詞を前に"),
    G("will＋原形", "He will ＿ fourteen next month.", "be", ["is", "being", "was"], "will の後ろは原形（be動詞は be）"),
    G("時制の選択（未来）", "We ＿ a party next Saturday.", "will have", ["had", "have had", "were having"], "next Saturday（次の土曜日）は未来"),
    G("時制の選択（過去）", "We ＿ a party last Saturday.", "had", ["will have", "have", "are going to have"], "last Saturday は過去"),
    G("Shall I ～?", "＿ I open the door for you? ― Yes, please.", "Shall", ["Will", "Do", "Am"], "Shall I 〜?「（わたしが）〜しましょうか」"),
    G("Shall we ～?", "＿ we go shopping? ― Yes, let's.", "Shall", ["Will", "Do", "Are"], "Shall we 〜?「いっしょに〜しませんか」"),
    G("Will you（依頼）", "＿ you pass me the salt? ― Sure.", "Will", ["Shall", "Do", "Are"], "Will you 〜? は「〜してくれませんか」"),
    G("tomorrow", "My father will come back ＿.", "tomorrow", ["yesterday", "last night", "two days ago"], "will は未来を表す語といっしょに"),
  ], "will と be going to");

  ch("gB2", 2, "助動詞", "🛡️", [
    G("must", "You ＿ wear a helmet when you ride a bike.", "must", ["may", "can", "will"], "must「〜しなければならない」"),
    G("must not", "You ＿ swim here. It's dangerous.", "must not", ["don't have to", "must", "need"], "must not「〜してはいけない」（禁止）"),
    G("don't have to", "It's Sunday. You ＿ get up early.", "don't have to", ["must not", "have to", "mustn't"], "don't have to「〜する必要はない」"),
    G("has to", "She ＿ finish her homework today.", "has to", ["have to", "must to", "has"], "主語が3人称単数なら has to"),
    G("had to", "I ＿ wait for an hour yesterday.", "had to", ["must", "have to", "has to"], "must の過去の意味は had to"),
    G("may（許可）", "＿ I come in? ― Yes, please.", "May", ["Must", "Shall", "Will"], "May I 〜?「〜してもよろしいですか」"),
    G("may（推量）", "He ＿ be at home now, but I'm not sure.", "may", ["must", "should", "has to"], "may「〜かもしれない」"),
    G("should", "You look tired. You ＿ go to bed early.", "should", ["must not", "may not", "don't have to"], "should「〜したほうがよい」"),
    G("must（推量）", "She has been running for an hour. She ＿ be tired.", "must", ["can't", "may not", "shouldn't"], "must「〜にちがいない」"),
    G("Do I have to ～?", "＿ I have to clean the room now? ― No, you don't have to.", "Do", ["Must", "Am", "Have"], "have to の疑問文は Do＋主語＋have to"),
    G("will have to", "You will ＿ to study harder.", "have", ["must", "has", "had"], "will の後ろは原形なので will have to"),
    G("Would you like ～?", "Would you ＿ some tea? ― Yes, please.", "like", ["want to", "liking", "likes"], "Would you like 〜?「〜はいかがですか」"),
  ], "must・have to・may・should");

  ch("gB3", 2, "不定詞", "➡️", [
    G("want to", "I want ＿ a doctor in the future.", "to be", ["be", "being", "to being"], "want to＋原形「〜したい」"),
    G("名詞的用法", "My dream is ＿ around the world.", "to travel", ["travel", "traveled", "travels"], "to＋原形「〜すること」"),
    G("副詞的用法（目的）", "He went to the library ＿ some books.", "to borrow", ["borrowing", "borrowed", "for borrow"], "「〜するために」は to＋原形"),
    G("副詞的用法（感情の原因）", "I'm glad ＿ you again.", "to see", ["seeing", "see", "saw"], "感情＋to＋原形「〜して…」"),
    G("形容詞的用法", "I have a lot of homework ＿ today.", "to do", ["doing", "do", "done"], "名詞＋to＋原形「〜するべき…」"),
    G("something to drink", "Can I have something ＿?", "to drink", ["drink", "drinking", "drank"], "something to 〜「何か〜するもの」"),
    G("It is ～ to …", "It is important ＿ breakfast every day.", "to eat", ["eat", "eating", "eats"], "It is 〜 to＋原形「…することは〜だ」"),
    G("It is ～ for 人 to …", "It is difficult ＿ me to answer this question.", "for", ["of", "to", "with"], "to の意味上の主語は for＋人"),
    G("how to", "Do you know how ＿ this machine?", "to use", ["use", "using", "used"], "how to＋原形「〜のしかた」"),
    G("what to", "I don't know what ＿ for her birthday.", "to buy", ["buy", "buying", "bought"], "what to＋原形「何を〜すればよいか」"),
    G("decide to", "She decided ＿ the tennis club.", "to join", ["joining", "join", "joined"], "decide to＋原形「〜することに決める」"),
    G("too ～ to …", "This box is too heavy ＿ me to carry.", "for", ["of", "with", "by"], "too 〜 for 人 to …「人が…するには〜すぎる」"),
  ], "to＋動詞の原形");

  ch("gB4", 2, "動名詞", "🏊", [
    G("enjoy ～ing", "We enjoyed ＿ in the sea.", "swimming", ["to swim", "swim", "swam"], "enjoy の後ろは動名詞（〜ing）"),
    G("finish ～ing", "Have you finished ＿ the book?", "reading", ["to read", "read", "reads"], "finish の後ろは動名詞"),
    G("主語の動名詞", "＿ English is fun.", "Learning", ["Learn", "Learned", "Learns"], "動名詞「〜すること」は主語になる"),
    G("前置詞＋動名詞", "Thank you for ＿ me.", "helping", ["help", "to help", "helped"], "前置詞の後ろは動名詞"),
    G("be good at ～ing", "She is good at ＿ pictures.", "drawing", ["draw", "to draw", "drew"], "at（前置詞）の後ろは動名詞"),
    G("stop ～ing", "Please stop ＿. The baby is sleeping.", "talking", ["to talk", "talk", "talked"], "stop ～ing「〜するのをやめる」"),
    G("like ～ing / to", "I like ＿ to music.", "listening", ["listen", "listened", "listens"], "like は動名詞・不定詞の両方をとれる"),
    G("How about ～ing?", "How about ＿ to the zoo?", "going", ["go", "to go", "went"], "How about ～ing?「〜するのはどうですか」"),
    G("without ～ing", "He left the room without ＿ anything.", "saying", ["say", "to say", "said"], "without ～ing「〜しないで」"),
    G("look forward to ～ing", "I'm looking forward to ＿ you.", "seeing", ["see", "saw", "be seen"], "look forward to の to は前置詞なので後ろは〜ing"),
    G("mind ～ing", "Would you mind ＿ the window?", "opening", ["to open", "open", "opened"], "mind の後ろは動名詞"),
    G("hope to（不定詞のみ）", "I hope ＿ you soon.", "to see", ["seeing", "see", "saw"], "hope の後ろは不定詞（hope ～ing は不可）"),
  ], "〜すること（〜ing）");

  ch("gB5", 2, "接続詞", "🔗", [
    G("when", "＿ I came home, my sister was cooking.", "When", ["If", "Because", "But"], "when「〜するとき」"),
    G("if", "＿ it rains tomorrow, we will stay home.", "If", ["When", "Because", "That"], "if「もし〜なら」"),
    G("条件の if の中は現在形", "If it ＿ fine tomorrow, let's go hiking.", "is", ["will be", "was", "be"], "時・条件を表す if 節の中は未来のことでも現在形"),
    G("because", "I stayed home ＿ I had a cold.", "because", ["if", "so", "but"], "because「〜なので」（理由）"),
    G("so", "I had a cold, ＿ I stayed home.", "so", ["because", "if", "when"], "so「だから」（結果）"),
    G("that", "I think ＿ he is right.", "that", ["what", "if", "when"], "think that 〜「〜だと思う」"),
    G("but", "I like dogs, ＿ my sister likes cats.", "but", ["so", "because", "or"], "but「しかし」"),
    G("or", "Which do you want, tea ＿ coffee?", "or", ["and", "but", "so"], "A or B「AかB」"),
    G("命令文, and", "Hurry up, ＿ you'll catch the bus.", "and", ["or", "but", "so"], "命令文, and 〜「…しなさい、そうすれば〜」"),
    G("命令文, or", "Hurry up, ＿ you'll miss the bus.", "or", ["and", "but", "so"], "命令文, or 〜「…しなさい、さもないと〜」"),
    G("before", "Wash your hands ＿ you eat.", "before", ["after", "until", "because"], "before「〜する前に」"),
    G("until", "Let's wait here ＿ the rain stops.", "until", ["since", "if", "though"], "until「〜するまで（ずっと）」"),
  ], "when・if・because・that");

  ch("gB6", 2, "比較", "📊", [
    G("比較級", "Tom is ＿ than Ken.", "taller", ["tall", "tallest", "more tall"], "「〜より…」は比較級＋than"),
    G("最上級", "This is the ＿ mountain in Japan.", "highest", ["higher", "high", "most high"], "the＋最上級「いちばん〜」"),
    G("more", "This book is ＿ interesting than that one.", "more", ["most", "very", "much more than"], "長い語は more＋原級"),
    G("most", "She is the ＿ popular singer in Japan.", "most", ["more", "much", "very"], "長い語の最上級は most＋原級"),
    G("as ～ as", "My bag is as ＿ as yours.", "big", ["bigger", "biggest", "more big"], "as＋原級＋as「…と同じくらい〜」"),
    G("better", "I like summer ＿ than winter.", "better", ["more", "well", "best"], "like A better than B「BよりAが好き」"),
    G("best", "I like spring the ＿ of all the seasons.", "best", ["better", "most", "good"], "like 〜 the best「〜がいちばん好き」"),
    G("of / in", "He is the fastest runner ＿ our class.", "in", ["of", "than", "at"], "範囲・場所は in、複数の仲間は of"),
    G("of all", "This is the most difficult ＿ all the questions.", "of", ["in", "than", "among them"], "of all 〜「すべての〜の中で」"),
    G("not as ～ as", "This test was not as ＿ as the last one.", "easy", ["easier", "easiest", "more easy"], "not as 〜 as …「…ほど〜ではない」"),
    G("much＋比較級", "This car is ＿ faster than mine.", "much", ["very", "more", "most"], "比較級を強めるのは much（very は不可）"),
    G("worse", "My cold is ＿ today than yesterday.", "worse", ["badder", "worst", "more bad"], "bad - worse - worst"),
  ], "比較級・最上級・as 〜 as");

  ch("gB7", 2, "受け身", "🎁", [
    G("is spoken", "English ＿ in many countries.", "is spoken", ["speaks", "is speaking", "spoke"], "受け身は be動詞＋過去分詞「〜される」"),
    G("was built", "This temple ＿ 500 years ago.", "was built", ["built", "is built", "was building"], "過去の受け身は was / were＋過去分詞"),
    G("by", "This picture was painted ＿ my grandfather.", "by", ["with", "from", "of"], "「〜によって」は by"),
    G("are loved", "These songs ＿ by young people.", "are loved", ["love", "is loved", "are loving"], "主語が複数なので are"),
    G("written", "The letter was ＿ in English.", "written", ["wrote", "writing", "write"], "write の過去分詞は written"),
    G("Is ～ used?", "＿ this room used on Sundays?", "Is", ["Does", "Do", "Has"], "受け身の疑問文は be動詞を前に"),
    G("was not", "The window ＿ broken by Ken. It was broken by Tom.", "was not", ["did not", "has not", "were not"], "受け身の否定文は be動詞＋not"),
    G("be known to", "His name is known ＿ everyone in the town.", "to", ["by", "for", "as"], "be known to 〜「〜に知られている」"),
    G("be made of", "This desk is made ＿ wood.", "of", ["from", "by", "in"], "見て材料がわかるときは be made of"),
    G("be made from", "Cheese is made ＿ milk.", "from", ["of", "by", "into"], "原料が変化するときは be made from"),
    G("will be＋過去分詞", "The new station will ＿ next year.", "be opened", ["open", "opened", "be opening"], "未来の受け身は will be＋過去分詞"),
    G("be covered with", "The mountain is covered ＿ snow.", "with", ["by", "of", "at"], "be covered with 〜「〜でおおわれている」"),
  ], "〜される・〜された");

  ch("gB8", 2, "いろいろな 文型", "🧱", [
    G("There is", "There ＿ a big tree in the garden.", "is", ["are", "has", "have"], "There is＋単数「〜がある」"),
    G("There are", "There ＿ many students in the gym.", "are", ["is", "has", "be"], "There are＋複数"),
    G("look＋形容詞", "You look ＿ today.", "happy", ["happily", "happiness", "to happy"], "look＋形容詞「〜に見える」"),
    G("become", "He became a famous ＿.", "singer", ["sing", "sang", "singing"], "become＋名詞「〜になる」"),
    G("give 人 物", "My father gave ＿ a new watch.", "me", ["I", "my", "mine"], "give＋人＋物（人は目的格）"),
    G("give 物 to 人", "She showed her pictures ＿ us.", "to", ["for", "at", "with"], "show 物 to 人"),
    G("buy 物 for 人", "My aunt bought a bag ＿ me.", "for", ["to", "of", "with"], "buy・make は for 人"),
    G("call A B", "We call this dog ＿.", "Pochi", ["to Pochi", "for Pochi", "Pochi's"], "call A B「AをBと呼ぶ」"),
    G("make A B", "The news made her ＿.", "sad", ["sadly", "sadness", "to sad"], "make A＋形容詞「Aを〜にする」"),
    G("sound＋形容詞", "That sounds ＿.", "great", ["greatly", "to great", "greatness"], "sound＋形容詞「〜に聞こえる・思える」"),
    G("Is there ～?", "＿ there a convenience store near here?", "Is", ["Are", "Does", "Do"], "There is の疑問文"),
    G("tell 人 物", "Please tell ＿ the way to the station.", "me", ["to me", "for me", "my"], "tell＋人＋物"),
  ], "There is・SVC・SVOO・SVOC");

  ch("gB9", 2, "不規則動詞の 変化", "⌨️", [
    SP("go の過去形", "<b>go</b>（行く）の 過去形を 入力しよう", "went", "go - went - gone"),
    SP("see の過去形", "<b>see</b>（見る）の 過去形を 入力しよう", "saw", "see - saw - seen"),
    SP("take の過去形", "<b>take</b>（取る）の 過去形を 入力しよう", "took", "take - took - taken"),
    SP("write の過去分詞", "<b>write</b>（書く）の 過去分詞を 入力しよう", "written", "write - wrote - written"),
    SP("speak の過去分詞", "<b>speak</b>（話す）の 過去分詞を 入力しよう", "spoken", "speak - spoke - spoken"),
    SP("buy の過去形", "<b>buy</b>（買う）の 過去形を 入力しよう", "bought", "buy - bought - bought"),
    SP("teach の過去形", "<b>teach</b>（教える）の 過去形を 入力しよう", "taught", "teach - taught - taught"),
    SP("eat の過去分詞", "<b>eat</b>（食べる）の 過去分詞を 入力しよう", "eaten", "eat - ate - eaten"),
    SP("give の過去分詞", "<b>give</b>（与える）の 過去分詞を 入力しよう", "given", "give - gave - given"),
    SP("know の過去分詞", "<b>know</b>（知っている）の 過去分詞を 入力しよう", "known", "know - knew - known"),
    SP("think の過去形", "<b>think</b>（思う）の 過去形を 入力しよう", "thought", "think - thought - thought"),
    SP("begin の過去形", "<b>begin</b>（始める）の 過去形を 入力しよう", "began", "begin - began - begun"),
    SP("catch の過去形", "<b>catch</b>（捕まえる）の 過去形を 入力しよう", "caught", "catch - caught - caught"),
    SP("break の過去分詞", "<b>break</b>（こわす）の 過去分詞を 入力しよう", "broken", "break - broke - broken"),
    SP("fly の過去分詞", "<b>fly</b>（飛ぶ）の 過去分詞を 入力しよう", "flown", "fly - flew - flown"),
  ], "キーボードで 過去形・過去分詞を 入力");

  // ---------------- 中3 ----------------
  ch("gC1", 3, "現在完了", "⏳", [
    G("have lived（継続）", "I ＿ in Nagoya for ten years.", "have lived", ["live", "lived", "am living"], "過去から今まで続くことは have＋過去分詞（継続）"),
    G("since", "She has been sick ＿ last Monday.", "since", ["for", "from", "ago"], "since＋起点「〜以来」"),
    G("for", "We have known each other ＿ five years.", "for", ["since", "during", "ago"], "for＋期間「〜の間」"),
    G("have been to（経験）", "I have ＿ to Hawaii twice.", "been", ["gone", "went", "go"], "have been to 〜「〜に行ったことがある」"),
    G("have gone to", "He has ＿ to Tokyo. He isn't here now.", "gone", ["been", "went", "go"], "have gone to 〜「〜に行ってしまった（今はいない）」"),
    G("ever", "Have you ＿ seen a panda?", "ever", ["yet", "already", "since"], "経験の疑問文は ever「今までに」"),
    G("never", "I have ＿ eaten natto.", "never", ["ever", "yet", "ago"], "never「一度も〜ない」"),
    G("already（完了）", "I have ＿ finished my homework.", "already", ["yet", "ever", "ago"], "肯定文の「もう」は already"),
    G("yet（否定）", "The train hasn't arrived ＿.", "yet", ["already", "ever", "still"], "否定文の「まだ」は yet"),
    G("How long", "＿ long have you studied English? ― For three years.", "How", ["What", "When", "Since"], "継続の期間は How long 〜?"),
    G("過去形 と 現在完了", "I ＿ my wallet yesterday.", "lost", ["have lost", "have been losing", "lose"], "yesterday など過去の時点を表す語は現在完了と使えない"),
    G("How many times", "How many ＿ have you visited Kyoto?", "times", ["time", "years", "often"], "経験の回数は How many times 〜?"),
  ], "継続・経験・完了");

  ch("gC2", 3, "現在完了進行形", "🔄", [
    G("have been ～ing", "It has ＿ raining since this morning.", "been", ["be", "being", "was"], "have been＋〜ing「ずっと〜し続けている」"),
    G("been waiting", "I have been ＿ for you for an hour.", "waiting", ["waited", "wait", "to wait"], "動作が今まで続いていることを表す"),
    G("How long have you been", "How long have you been ＿ the piano?", "playing", ["played", "play", "plays"], "How long have you been 〜ing?"),
    G("has been", "My brother ＿ been studying since 7 p.m.", "has", ["have", "is", "was"], "3人称単数は has"),
    G("状態は現在完了", "I have ＿ him since I was a child.", "known", ["been knowing", "knew", "know"], "know は状態動詞なので完了進行形にしない"),
    G("時制の選択（進行形）", "Look! It ＿ now.", "is snowing", ["has snowed", "snowed", "snows"], "今まさに起きていることは現在進行形"),
    G("時制の選択（完了進行形）", "It ＿ for three hours.", "has been snowing", ["is snowing", "snows", "snowing"], "for three hours（3時間ずっと）は完了進行形"),
    G("for ～ hours", "They have been talking ＿ two hours.", "for", ["since", "during", "from"], "期間は for"),
    G("since ～", "She has been working here ＿ 2020.", "since", ["for", "in", "from"], "起点は since"),
    G("過去・現在完了・未来の選択", "I ＿ this book three times so far.", "have read", ["read now", "will read", "am reading"], "so far（これまでに）は現在完了"),
    G("未来形の選択", "I ＿ you at the station tomorrow.", "will meet", ["have met", "have been meeting", "met"], "tomorrow は未来"),
    G("過去形の選択", "I ＿ you at the station two days ago.", "met", ["have met", "will meet", "meet"], "two days ago は過去"),
  ], "ずっと 〜し続けている");

  ch("gC3", 3, "分詞（〜している・〜された）", "🏷️", [
    G("現在分詞", "Look at the girl ＿ under the tree.", "sitting", ["sat", "sits", "to sit"], "名詞＋〜ing「〜している…」"),
    G("過去分詞", "This is a car ＿ in Germany.", "made", ["making", "makes", "to make"], "名詞＋過去分詞「〜された…」"),
    G("running dog", "The ＿ dog is mine.", "running", ["run", "ran", "runs"], "1語の分詞は名詞の前に置く"),
    G("broken", "Don't touch the ＿ glass.", "broken", ["breaking", "broke", "break"], "「割れた」は過去分詞 broken"),
    G("spoken", "English is a language ＿ all over the world.", "spoken", ["speaking", "speaks", "spoke"], "「話される言語」なので過去分詞"),
    G("playing", "The boy ＿ soccer over there is my brother.", "playing", ["played", "plays", "to playing"], "「〜している少年」なので現在分詞"),
    G("written", "I read a letter ＿ by a famous writer.", "written", ["writing", "wrote", "writes"], "「書かれた手紙」"),
    G("exciting / excited", "The game was very ＿.", "exciting", ["excited", "excite", "excitement"], "物事が「わくわくさせる」は exciting"),
    G("excited", "I was very ＿ about the game.", "excited", ["exciting", "excite", "excitedly"], "人が「わくわくした」は excited"),
    G("interesting", "This is an ＿ story.", "interesting", ["interested", "interest", "interests"], "物事が「興味深い」は interesting"),
    G("surprised", "We were ＿ at the news.", "surprised", ["surprising", "surprise", "surprises"], "人が「驚いた」は surprised"),
    G("called", "I have a dog ＿ Momo.", "called", ["calling", "calls", "to call"], "「モモと呼ばれる犬」"),
  ], "名詞を くわしくする 〜ing と 過去分詞");

  ch("gC4", 3, "関係代名詞", "🪢", [
    G("who", "I have a friend ＿ lives in Canada.", "who", ["which", "whose", "what"], "先行詞が人で主格は who（that も可）"),
    G("which", "This is the bus ＿ goes to the airport.", "which", ["who", "whose", "where"], "先行詞が物で主格は which（that も可）"),
    G("目的格の省略", "The cake ＿ made was delicious.", "she", ["who", "her", "whose"], "目的格の関係代名詞は省略できる（the cake (that) she made）"),
    G("that（目的格）", "This is the book ＿ I bought yesterday.", "that", ["who", "whose", "what"], "物の目的格は that / which"),
    G("whose", "I know a girl ＿ father is a pilot.", "whose", ["who", "which", "that"], "所有格は whose「その〜が」"),
    G("動詞の一致", "The boys who ＿ playing soccer are my classmates.", "are", ["is", "was", "be"], "先行詞 the boys に合わせる"),
    G("動詞の一致２", "A girl who ＿ in my town won the contest.", "lives", ["live", "living", "to live"], "先行詞 a girl は3人称単数"),
    G("the first ～ that", "He was the first person ＿ came to the party.", "that", ["what", "whose", "where"], "the first などがつく先行詞は that が好まれる"),
    G("everything that", "Tell me everything ＿ you know.", "that", ["what", "who", "whose"], "everything の後は that"),
    G("people who", "People ＿ live in this city are kind.", "who", ["which", "whose", "where"], "先行詞が人"),
    G("動物＋which", "I have a cat ＿ has blue eyes.", "which", ["who", "whose", "where"], "動物は物と同じく which / that"),
    G("that（人＋物）", "Look at the boy and his dog ＿ are running.", "that", ["who", "which", "whose"], "先行詞が人＋動物のときは that"),
  ], "who・which・that・whose");

  ch("gC5", 3, "間接疑問と いろいろな 文", "🗣️", [
    G("間接疑問の語順", "Do you know where ＿?", "he lives", ["does he live", "lives he", "he does live"], "疑問詞の後は主語＋動詞の語順"),
    G("間接疑問（be動詞）", "I don't know who ＿.", "that man is", ["is that man", "does that man", "that man does"], "who＋主語＋動詞"),
    G("間接疑問（過去）", "Tell me what ＿ yesterday.", "you did", ["did you", "you do", "do you"], "what＋主語＋動詞（過去形）"),
    G("tell 人 that", "My mother told me ＿ she was busy.", "that", ["what", "if", "how"], "tell＋人＋that 〜「人に〜と言う」"),
    G("ask 人 to", "I asked him ＿ the window.", "to close", ["close", "closing", "closed"], "ask＋人＋to＋原形「人に〜するよう頼む」"),
    G("want 人 to", "I want you ＿ my party.", "to come to", ["come", "coming", "came"], "want＋人＋to＋原形「人に〜してほしい」"),
    G("tell 人 to", "The teacher told us ＿ quiet.", "to be", ["be", "being", "were"], "tell＋人＋to＋原形「人に〜するよう言う」"),
    G("help 人 原形", "Can you help me ＿ this box?", "carry", ["carried", "carrying", "carries"], "help＋人＋原形（to もつけられる）"),
    G("let 人 原形", "Please let me ＿ your new phone.", "see", ["to see", "seeing", "saw"], "let＋人＋原形「人に〜させる（許可）」"),
    G("make 人 原形", "My father made me ＿ my room.", "clean", ["to clean", "cleaning", "cleaned"], "make＋人＋原形「人に〜させる（強制）」"),
    G("if（〜かどうか）", "I wonder ＿ he will come.", "if", ["that", "what", "who"], "if「〜かどうか」"),
    G("how many の間接疑問", "Do you know how many people ＿ in this town?", "live", ["do live", "does live", "lives they"], "how many people が主語なのでそのまま動詞"),
  ], "Do you know where 〜? など");

  ch("gC6", 3, "仮定法の きほん", "🌙", [
    G("I wish ＋過去形", "I wish I ＿ a bird.", "were", ["am", "will be", "be"], "I wish＋過去形「〜ならいいのに」（be動詞はふつう were）"),
    G("If I were", "If I ＿ you, I would accept the offer.", "were", ["am", "will be", "had been"], "If＋主語＋過去形, 主語＋would＋原形"),
    G("would", "If I had a car, I ＿ drive to the beach.", "would", ["will", "can", "am"], "仮定法過去の主節は would / could＋原形"),
    G("could", "I wish I ＿ speak French.", "could", ["can", "will", "may"], "「話せたらいいのに」は I wish I could 〜"),
    G("had（仮定法）", "If I ＿ more time, I would read more books.", "had", ["have", "will have", "having"], "現在の事実と反対の仮定は過去形"),
    G("直説法との違い", "If it ＿ tomorrow, I will stay home.", "rains", ["rained", "would rain", "had rained"], "実際に起こりうる条件は直説法（現在形）"),
    G("knew", "If I ＿ his phone number, I could call him.", "knew", ["know", "had known it", "will know"], "仮定法過去"),
    G("lived", "I wish I ＿ near the sea.", "lived", ["live", "will live", "living"], "I wish＋過去形"),
    G("were not", "If it ＿ not raining, we could play outside.", "were", ["is", "will be", "has"], "仮定法の be動詞は were"),
    G("would you", "What ＿ you do if you won the lottery?", "would", ["will", "do", "did"], "仮定法の疑問文"),
    G("had a sister", "I wish I ＿ a sister.", "had", ["have", "has", "will have"], "I wish＋過去形"),
    G("could fly", "If I were a bird, I ＿ fly to you.", "could", ["can", "will", "have"], "「飛んでいけるのに」"),
  ], "I wish 〜 ／ If I were 〜");

  // ---------------- 高1 ----------------
  ch("gD1", 4, "時制の 発展", "🕰️", [
    G("過去完了", "When I got to the station, the train ＿ already left.", "had", ["has", "have", "was"], "過去のある時点より前のことは had＋過去分詞"),
    G("過去完了（継続）", "She ＿ in Paris for five years before she moved to Tokyo.", "had lived", ["has lived", "lives", "will have lived"], "過去の時点までの継続は過去完了"),
    G("未来完了", "By next April, I ＿ English for six years.", "will have studied", ["have studied", "had studied", "study"], "未来のある時点までの継続・完了は will have＋過去分詞"),
    G("時・条件の副詞節", "I'll call you when I ＿ at the hotel.", "arrive", ["will arrive", "arrived", "will have arrived"], "時の副詞節の中は未来でも現在形"),
    G("名詞節の when", "I don't know when he ＿.", "will come back", ["come back", "coming back", "to come back"], "「いつ〜か」（名詞節）は未来なら will を使う"),
    G("過去進行形", "I ＿ a bath when the phone rang.", "was taking", ["took", "have taken", "had been taken"], "電話が鳴ったとき入浴中だった"),
    G("過去完了進行形", "He ＿ for two hours when I arrived.", "had been waiting", ["has been waiting", "was waited", "waits"], "過去の時点まで続いていた動作"),
    G("by the time", "By the time you come back, I ＿ my homework.", "will have finished", ["finish", "had finished", "finished"], "by the time＋現在形、主節は未来完了"),
    G("since＋過去形", "It is ten years since my grandfather ＿.", "died", ["has died", "has been dead", "dies"], "It is 〜 since＋過去形「…してから〜になる」"),
    G("近い未来の進行形", "We ＿ for London tomorrow morning. Everything is ready.", "are leaving", ["have left", "left", "had left"], "確定した近い予定は進行形でも表せる"),
    G("hardly ～ when", "I had hardly gone out ＿ it began to rain.", "when", ["than", "that", "then"], "hardly 〜 when …「〜するとすぐに…」"),
    G("no sooner ～ than", "No sooner had he sat down ＿ the phone rang.", "than", ["when", "that", "as"], "No sooner 〜 than …「〜するとすぐに…」"),
  ], "過去完了・未来完了・時の副詞節");

  ch("gD2", 4, "助動詞の 発展", "🎩", [
    G("must have＋p.p.", "The ground is wet. It ＿ rained last night.", "must have", ["should have", "can't have", "need have"], "must have＋過去分詞「〜したにちがいない」"),
    G("can't have＋p.p.", "He ＿ said such a thing. He is very kind.", "can't have", ["must have", "should have", "would have"], "can't have＋過去分詞「〜したはずがない」"),
    G("should have＋p.p.", "You ＿ come earlier. The concert has already started.", "should have", ["must have", "can't have", "may have"], "should have＋過去分詞「〜すべきだったのに」"),
    G("may have＋p.p.", "She ＿ missed the bus. That's why she's late.", "may have", ["can't have", "should have", "need not have"], "may have＋過去分詞「〜したかもしれない」"),
    G("need not have＋p.p.", "You ＿ brought an umbrella. It didn't rain.", "need not have", ["must have", "can't have", "ought to"], "need not have＋過去分詞「〜する必要はなかったのに」"),
    G("had better", "You ＿ see a doctor.", "had better", ["would rather", "used to", "ought"], "had better＋原形「〜したほうがよい」"),
    G("had better not", "You had better ＿ go out tonight.", "not", ["not to", "don't", "no"], "had better の否定は had better not＋原形"),
    G("used to", "There ＿ be a tall tree here.", "used to", ["is used to", "would", "had better"], "used to＋原形「以前は〜だった」"),
    G("be used to ～ing", "I'm used to ＿ up early.", "getting", ["get", "got", "be got"], "be used to ～ing「〜に慣れている」"),
    G("would rather", "I would rather ＿ at home.", "stay", ["to stay", "staying", "stayed"], "would rather＋原形「むしろ〜したい」"),
    G("may well", "You may ＿ be surprised.", "well", ["good", "as", "better"], "may well＋原形「〜するのももっともだ」"),
    G("cannot ～ too", "You cannot be ＿ careful when you drive.", "too", ["very", "so", "enough"], "cannot 〜 too …「いくら〜してもしすぎることはない」"),
  ], "must have 〜・should have 〜");

  ch("gD3", 4, "不定詞の 発展", "🚀", [
    G("seem to have＋p.p.", "He seems ＿ ill last week.", "to have been", ["to be", "being", "that he was"], "完了不定詞は述語動詞より前のことを表す"),
    G("too ～ to", "The question was too difficult for me ＿.", "to answer", ["to answer it", "answering", "that I answer"], "too 〜 to …「…するには〜すぎる」（主語と目的語が同じなので it は不要）"),
    G("enough to", "She was kind ＿ to help me.", "enough", ["so", "too", "very"], "形容詞＋enough to 〜「〜するほど…」"),
    G("in order to", "He got up early in order ＿ catch the first train.", "to", ["that", "for", "so"], "in order to 〜「〜するために」"),
    G("so as not to", "Speak quietly so as ＿ wake the baby.", "not to", ["to not", "not", "no to"], "so as not to 〜「〜しないように」"),
    G("It is kind of 人 to", "It is very kind ＿ you to help me.", "of", ["for", "to", "with"], "人の性質を表す形容詞は of＋人"),
    G("be to 不定詞", "The meeting is ＿ be held tomorrow.", "to", ["going", "will", "for"], "be to 不定詞「〜する予定だ」"),
    G("独立不定詞", "＿ tell the truth, I don't like him.", "To", ["For", "In", "By"], "To tell the truth「実を言うと」"),
    G("原形不定詞（知覚動詞）", "I saw him ＿ the room.", "enter", ["to enter", "entered", "enters"], "see＋人＋原形「人が〜するのを見る」"),
    G("受け身では to", "He was seen ＿ the room.", "to enter", ["enter", "entered", "enters"], "知覚動詞の受け身では to 不定詞になる"),
    G("疑問詞＋to", "I can't decide which ＿.", "to choose", ["choose", "choosing", "chose"], "which to 〜「どちらを〜すべきか」"),
    G("only to", "He hurried to the station, ＿ to find the train had left.", "only", ["so", "but", "just as"], "〜, only to …「〜したが、結局…しただけだった」"),
  ], "完了不定詞・too 〜 to・enough to");

  ch("gD4", 4, "動名詞と 不定詞の つかいわけ", "⚖️", [
    G("remember ～ing", "I remember ＿ him at the party last year.", "meeting", ["to meet", "meet", "met to"], "remember ～ing「（過去に）〜したことを覚えている」"),
    G("remember to", "Remember ＿ this letter on your way.", "to mail", ["mailing", "mail", "mailed"], "remember to 〜「（これから）忘れずに〜する」"),
    G("forget ～ing", "I'll never forget ＿ Mt. Fuji for the first time.", "seeing", ["to see", "see", "seen"], "forget ～ing「〜したことを忘れる」"),
    G("stop to", "He stopped ＿ a rest.", "to take", ["taking", "take", "taken"], "stop to 〜「〜するために立ち止まる」"),
    G("try ～ing", "I tried ＿ the box, but it was empty.", "opening", ["opened", "open", "to opening"], "try ～ing「試しに〜してみる」"),
    G("avoid ～ing", "You should avoid ＿ too much sugar.", "eating", ["to eat", "eat", "eaten"], "avoid の後ろは動名詞"),
    G("give up ～ing", "My father gave up ＿.", "smoking", ["to smoke", "smoke", "smoked"], "give up ～ing「〜するのをやめる」"),
    G("expect to", "I expect ＿ the exam.", "to pass", ["passing", "pass", "passed"], "expect の後ろは不定詞"),
    G("refuse to", "He refused ＿ my offer.", "to accept", ["accepting", "accept", "accepted"], "refuse の後ろは不定詞"),
    G("deny ～ing", "She denied ＿ the money.", "stealing", ["to steal", "steal", "stolen"], "deny の後ろは動名詞"),
    G("動名詞の意味上の主語", "Do you mind ＿ opening the window?", "my", ["I", "me to", "mine"], "動名詞の意味上の主語は所有格（目的格も可）"),
    G("It is no use ～ing", "It is no use ＿ over spilt milk.", "crying", ["to crying", "cry", "cried"], "It is no use ～ing「〜してもむだだ」"),
  ], "remember・forget・stop・try");

  ch("gD5", 4, "分詞構文", "🌉", [
    G("分詞構文（時）", "＿ along the street, I met an old friend.", "Walking", ["Walked", "To walk", "Walk"], "〜ing で始めて「〜していたとき」"),
    G("分詞構文（理由）", "＿ tired, I went to bed early.", "Being", ["Been", "To be", "Be"], "Being 〜「〜なので」"),
    G("過去分詞の分詞構文", "＿ from the hill, the town looks beautiful.", "Seen", ["Seeing", "To see", "Saw"], "町が「見られる」ので過去分詞"),
    G("完了分詞構文", "＿ finished my homework, I went out.", "Having", ["Being", "Had", "Have"], "Having＋過去分詞は主節より前のこと"),
    G("否定の分詞構文", "＿ what to do, I asked my teacher.", "Not knowing", ["Knowing not", "Don't knowing", "Not known"], "否定は not を分詞の前に置く"),
    G("付帯状況 with", "He was sitting with his eyes ＿.", "closed", ["closing", "close", "to close"], "with＋名詞＋過去分詞「目が閉じられた状態で」"),
    G("with＋〜ing", "She stood there with her hair ＿ in the wind.", "blowing", ["blown", "blow", "to blow"], "髪が「なびいている」ので現在分詞"),
    G("独立分詞構文", "The weather ＿ fine, we went on a picnic.", "being", ["was", "is", "been"], "主語が異なるときは分詞の前に主語を置く"),
    G("慣用的な分詞構文", "＿ speaking, Japanese people are polite.", "Generally", ["General", "Generalize", "Generalized"], "Generally speaking「一般的に言えば」"),
    G("Judging from", "＿ from his accent, he is from Osaka.", "Judging", ["Judged", "To judge it", "Judge"], "Judging from 〜「〜から判断すると」"),
    G("付帯状況（〜しながら）", "He came into the room, ＿ a song.", "singing", ["sung", "sang", "to sing"], "〜ing「〜しながら」"),
    G("Written", "＿ in easy English, this book is good for beginners.", "Written", ["Writing", "Wrote", "To write"], "本は「書かれている」ので過去分詞"),
  ], "〜ing で 文を つなぐ");

  ch("gD6", 4, "関係詞の 発展", "🕸️", [
    G("what", "＿ he said was true.", "What", ["That", "Which", "Who"], "what「〜すること・もの」（先行詞を含む）"),
    G("where", "This is the house ＿ I was born.", "where", ["which", "what", "when"], "場所の関係副詞 where"),
    G("when", "I remember the day ＿ we first met.", "when", ["where", "which", "what"], "時の関係副詞 when"),
    G("why", "That is the reason ＿ he was late.", "why", ["where", "what", "which"], "the reason why 〜"),
    G("how", "This is ＿ I solved the problem.", "how", ["the way how", "what way", "which"], "the way how とは言わない（how か the way のどちらか）"),
    G("非制限用法 which", "He said he was ill, ＿ was a lie.", "which", ["that", "what", "it"], "前の文の内容を受ける , which"),
    G("前置詞＋which", "This is the house in ＿ he lives.", "which", ["that", "where", "what"], "前置詞の後ろに that は置けない"),
    G("which（目的格）と where", "This is the town ＿ I visited last year.", "which", ["where", "when", "what"], "visit は他動詞なので目的格 which（where は不可）"),
    G("whoever", "＿ comes first will get a prize.", "Whoever", ["Whatever", "Whichever", "Who"], "whoever「〜する人はだれでも」"),
    G("whatever", "You can eat ＿ you like.", "whatever", ["whoever", "however", "wherever"], "whatever「〜するものは何でも」"),
    G("however", "＿ hard you try, you can't finish it in a day.", "However", ["Whatever", "Whenever", "Although"], "however＋形容詞・副詞「どんなに〜しても」"),
    G("what I am", "I owe ＿ I am today to my parents.", "what", ["that", "which", "who"], "what I am「今のわたし」"),
  ], "what・関係副詞・複合関係詞");

  ch("gD7", 4, "前置詞の 発展", "🧲", [
    G("by（期限）", "Please finish the report ＿ Friday.", "by", ["until", "for", "since"], "by「〜までに（期限）」、until「〜までずっと」"),
    G("until（継続）", "I'll wait here ＿ five o'clock.", "until", ["by", "since", "in"], "until「〜までずっと」"),
    G("in（経過）", "The bus will come ＿ ten minutes.", "in", ["after", "within of", "for"], "in＋時間「〜後に（今から）」"),
    G("during", "I fell asleep ＿ the movie.", "during", ["while", "for", "between"], "during＋名詞（while は接続詞）"),
    G("among", "The singer is popular ＿ young people.", "among", ["between", "within", "along"], "3つ以上の間は among"),
    G("by（手段）", "Can I pay ＿ credit card?", "by", ["with", "on", "in"], "by credit card「クレジットカードで」"),
    G("in（言語）", "Please write your name ＿ English.", "in", ["by", "with", "on"], "in English「英語で」"),
    G("with（道具）", "Cut the paper ＿ scissors.", "with", ["by", "in", "on"], "道具は with"),
    G("for（賛成）", "Are you ＿ or against the plan?", "for", ["to", "with", "on"], "for「〜に賛成して」、against「反対して」"),
    G("across", "We swam ＿ the river.", "across", ["through", "along", "over at"], "across「〜を横切って」"),
    G("through", "The train went ＿ a long tunnel.", "through", ["across", "along", "into of"], "through「〜を通り抜けて」"),
    G("beyond", "The beauty of the sunset was ＿ description.", "beyond", ["over", "above all", "without"], "beyond description「言葉では表せない」"),
  ], "by と until など");

  // ---------------- 高2 ----------------
  ch("gE1", 5, "仮定法の 発展", "🌌", [
    G("仮定法過去完了", "If I had known the truth, I ＿ told you.", "would have", ["would", "will have", "had"], "過去の事実と反対：If＋had＋p.p., would have＋p.p."),
    G("If ＋had＋p.p.", "If he ＿ harder, he would have passed the exam.", "had studied", ["studied", "has studied", "would study"], "仮定法過去完了の if 節"),
    G("混合仮定法", "If I had taken the medicine, I ＿ better now.", "would feel", ["would have felt", "will feel", "felt"], "if 節は過去、主節は現在（now）"),
    G("I wish＋過去完了", "I wish I ＿ harder when I was young.", "had studied", ["studied", "have studied", "would study"], "過去の事実への後悔は I wish＋had＋p.p."),
    G("as if", "He talks as if he ＿ everything.", "knew", ["knows", "had been known", "will know"], "as if＋過去形「まるで〜であるかのように」"),
    G("Without", "＿ your help, I would have failed.", "Without", ["Unless", "If", "Except"], "Without 〜「〜がなければ（なかったら）」"),
    G("But for", "＿ for the rain, we could have enjoyed the game.", "But", ["Without", "Except", "If"], "But for 〜「〜がなかったら」"),
    G("It's time", "It's time you ＿ to bed.", "went", ["go", "will go", "have gone"], "It's time＋過去形「もう〜してもよいころだ」"),
    G("倒置（if の省略）", "＿ I known her address, I would have written to her.", "Had", ["If", "Have", "Should"], "If I had known → Had I known"),
    G("Were it not for", "＿ it not for water, nothing could live.", "Were", ["Was", "If", "Had"], "Were it not for 〜「〜がなければ」"),
    G("If 主語 should", "If you ＿ see him, please give him this.", "should", ["would", "had", "will"], "If 〜 should「万一〜なら」"),
    G("suggest that 原形", "He suggested that she ＿ a doctor.", "see", ["sees", "saw", "will see"], "提案・要求の that 節は（should）＋原形"),
  ], "仮定法過去完了・as if・without");

  ch("gE2", 5, "比較の 発展", "📈", [
    G("the 比較級, the 比較級", "The more you practice, the ＿ you will become.", "better", ["best", "good", "well"], "the＋比較級 〜, the＋比較級 …「〜すればするほど…」"),
    G("比較級 and 比較級", "It is getting ＿.", "warmer and warmer", ["warm and warm", "warmest", "more warm and warm"], "比較級 and 比較級「ますます〜」"),
    G("倍数表現", "This room is three times as large ＿ that one.", "as", ["than", "so", "of"], "〜 times as … as「〜倍…」"),
    G("no more than", "I have no more ＿ 500 yen.", "than", ["as", "but", "to"], "no more than「〜しか（たった）」＝only"),
    G("no less than", "He paid ＿ 10,000 yen. It was a lot of money.", "no less than", ["no more than", "not more than", "at most"], "no less than「〜も（多い）」"),
    G("superior to", "This model is superior ＿ that one.", "to", ["than", "for", "from"], "superior to 〜「〜より優れている」（than は使わない）"),
    G("prefer A to B", "I prefer tea ＿ coffee.", "to", ["than", "for", "from"], "prefer A to B「BよりAを好む」"),
    G("否定＋比較級＝最上級", "Nothing is ＿ than health.", "more important", ["most important", "as important", "important"], "Nothing is 比較級 than 〜「〜ほど…なものはない」"),
    G("比較級＋than any other", "Mt. Fuji is higher than any other ＿ in Japan.", "mountain", ["mountains", "the mountain", "mountain's"], "any other＋単数名詞"),
    G("as ～ as possible", "Please come as soon as ＿.", "possible", ["possibly", "you possible", "able"], "as 〜 as possible「できるだけ〜」"),
    G("the last ～", "He is the last person ＿ tell a lie.", "to", ["that", "for", "who"], "the last 〜 to …「最も…しそうにない〜」"),
    G("all the 比較級", "I like him all the ＿ for his faults.", "better", ["best", "more good", "well"], "all the 比較級 for 〜「〜なのでいっそう…」"),
  ], "the 比較級・倍数・no more than");

  ch("gE3", 5, "否定・倒置・強調", "🔁", [
    G("部分否定", "＿ all students like math.", "Not", ["No", "None", "Never"], "not all 〜「すべてが〜とは限らない」"),
    G("not always", "The rich are not ＿ happy.", "always", ["ever", "never", "hardly"], "not always「必ずしも〜ではない」"),
    G("Never have I", "Never ＿ seen such a beautiful sunset.", "have I", ["I have", "I had", "did I have"], "否定語が文頭にくると疑問文の語順（倒置）"),
    G("Little did he", "Little ＿ he know what would happen.", "did", ["does", "has", "was"], "Little did he know 〜「〜とは思いもしなかった」"),
    G("Not until", "Not until I got home ＿ I lost my key.", "did I notice", ["I noticed", "noticed I", "I did notice"], "Not until 〜 倒置「〜して初めて…」"),
    G("強調構文", "It was Ken ＿ broke the window.", "that", ["what", "which", "where"], "It is 〜 that …「…したのは〜だ」"),
    G("強調の do", "I ＿ want to see you.", "do", ["am", "very", "much"], "動詞の前の do は強調「本当に」"),
    G("So do I", "I like cats. ― So ＿ I.", "do", ["am", "like", "have"], "So＋助動詞＋主語「〜もそうだ」"),
    G("Neither do I", "I don't like snakes. ― Neither ＿ I.", "do", ["don't", "am", "like"], "否定への同意は Neither＋助動詞＋主語"),
    G("far from", "His answer was far ＿ perfect.", "from", ["of", "to", "with"], "far from 〜「決して〜ではない」"),
    G("anything but", "He is anything ＿ a gentleman.", "but", ["for", "except to", "of"], "anything but 〜「決して〜ではない」"),
    G("cannot help ～ing", "I couldn't help ＿ when I heard the story.", "laughing", ["laugh", "to laugh", "laughed"], "cannot help ～ing「〜せずにはいられない」"),
  ], "部分否定・倒置・強調構文");

  ch("gE4", 5, "名詞・冠詞・代名詞", "📦", [
    G("不可算名詞", "Can you give me some ＿?", "advice", ["advices", "an advice", "a advice"], "advice は数えられない名詞"),
    G("a piece of", "She gave me a piece of ＿.", "information", ["informations", "an information", "information's"], "information も数えられない"),
    G("furniture", "There isn't much ＿ in this room.", "furniture", ["furnitures", "a furniture", "furniture's"], "furniture は不可算名詞（much で受ける）"),
    G("one / it", "I lost my umbrella. I have to buy a new ＿.", "one", ["it", "this", "that"], "同じ種類の別の物は one"),
    G("it（同一物）", "I lost my umbrella, but I found ＿ later.", "it", ["one", "them", "that one"], "なくした「その傘」は it"),
    G("the other", "I have two sisters. One is a nurse, and ＿ is a teacher.", "the other", ["another", "other", "the others"], "2つのうちの残り1つは the other"),
    G("another", "This cake is delicious. May I have ＿ piece?", "another", ["other", "the other", "others"], "「もう1つ（別の）」は another"),
    G("the others", "Some students came by bus, and ＿ came by bike.", "the others", ["another", "the other one", "other"], "残りの全員は the others"),
    G("each", "＿ of the students has a tablet.", "Each", ["All", "Every", "Both"], "each of 〜 は単数扱い（every は of をとらない）"),
    G("that of", "The climate of Nagoya is milder than ＿ of Sapporo.", "that", ["those", "it", "one"], "the climate のくり返しは that"),
    G("people（集合名詞）", "Many people ＿ waiting for the bus.", "were", ["was", "is", "has"], "people は複数扱い"),
    G("by the 単位", "Eggs are sold by the ＿.", "dozen", ["dozens", "a dozen", "dozen's"], "by the＋単位「〜単位で」"),
  ], "数えられない名詞・one と it・another");

  ch("gE5", 5, "時制の一致と 話法", "🗨️", [
    G("時制の一致", "He said that he ＿ tired.", "was", ["is", "be", "will be"], "主節が過去なら従属節も過去に"),
    G("時制の一致（未来）", "She told me that she ＿ come the next day.", "would", ["will", "shall", "can be"], "will → would"),
    G("時制の一致（過去完了）", "I thought that he ＿ already left.", "had", ["has", "have", "was"], "主節より前のことは過去完了"),
    G("一致の例外（不変の真理）", "Our teacher said that the earth ＿ around the sun.", "goes", ["went", "had gone", "would go"], "不変の真理は現在形のまま"),
    G("一致の例外（歴史上の事実）", "We learned that World War II ＿ in 1945.", "ended", ["had ended", "has ended", "ends"], "歴史上の事実は過去形のまま"),
    G("間接話法（命令）", "He told me ＿ the door.", "to shut", ["shut", "shutting", "that shut"], "命令文の間接話法は tell＋人＋to 不定詞"),
    G("間接話法（疑問）", "She asked me where ＿.", "I lived", ["did I live", "do I live", "I live in"], "間接疑問は主語＋動詞の語順"),
    G("ask if", "He asked me ＿ I liked sushi.", "if", ["that", "what", "which"], "Yes / No 疑問文は if（whether）"),
    G("the day before", "She said she had met him ＿.", "the day before", ["yesterday", "tomorrow", "ago"], "間接話法では yesterday → the day before"),
    G("there", "He said he would stay ＿ for a week.", "there", ["here", "this", "now"], "here → there"),
    G("that day", "She said, \"I'm busy today.\" → She said she was busy ＿.", "that day", ["today", "this day", "yesterday"], "today → that day"),
    G("suggested", "He ＿ that we take a break.", "suggested", ["told", "said us", "asked us"], "suggest that 〜「〜しようと提案した」"),
  ], "時制の一致・直接話法と 間接話法");

  ch("gE6", 5, "接続詞の 発展", "🧵", [
    G("as soon as", "As soon as he ＿ home, he started to cook.", "got", ["gets", "will get", "had been getting"], "as soon as「〜するとすぐに」"),
    G("unless", "You will fail ＿ you study harder.", "unless", ["if", "because", "though"], "unless「〜しない限り」"),
    G("even if", "＿ if it rains, the game will be held.", "Even", ["As", "Only", "So"], "even if「たとえ〜でも」"),
    G("whether", "＿ you like it or not, you must do it.", "Whether", ["If", "Unless", "That"], "whether A or not「Aであろうとなかろうと」"),
    G("in case", "Take an umbrella in case it ＿.", "rains", ["will rain", "rained", "would rain"], "in case「〜するといけないから」"),
    G("now that", "＿ that you are a high school student, you should be more responsible.", "Now", ["So", "As", "Since"], "now that「今や〜なので」"),
    G("so ～ that", "He was so tired ＿ he fell asleep at once.", "that", ["as", "what", "and"], "so 〜 that …「とても〜なので…」"),
    G("such ～ that", "It was ＿ a hot day that we went swimming.", "such", ["so", "very", "too"], "such＋a＋形容詞＋名詞＋that"),
    G("so that 〜 can", "Speak louder so that everyone ＿ hear you.", "can", ["is", "has", "be"], "so that S can 〜「Sが〜できるように」"),
    G("while（対比）", "＿ some people like summer, others prefer winter.", "While", ["Because", "Since", "Unless"], "while「〜する一方で」"),
    G("once", "＿ you start, you can't stop.", "Once", ["Until", "Unless", "Though"], "once「いったん〜すると」"),
    G("as long as", "You can stay here as ＿ as you keep quiet.", "long", ["far", "well", "soon"], "as long as「〜する限り（条件）」"),
  ], "unless・in case・so 〜 that");

  // ---------------- 高3 ----------------
  ch("gF1", 6, "動詞の 語法", "🛠️", [
    G("rob A of B", "A man robbed her ＿ her bag.", "of", ["from", "with", "off"], "rob A of B「AからBを奪う」"),
    G("steal", "Someone ＿ my wallet.", "stole", ["robbed", "deprived", "took me"], "steal は「物」を目的語にとる"),
    G("remind A of B", "This song reminds me ＿ my school days.", "of", ["to", "with", "for"], "remind A of B「AにBを思い出させる」"),
    G("prevent A from ～ing", "The heavy snow prevented us ＿ going out.", "from", ["to", "of", "against"], "prevent A from ～ing「Aが〜するのを妨げる」"),
    G("lie（横たわる）", "He ＿ on the sofa and fell asleep.", "lay", ["laid", "lied", "lain"], "lie（横たわる）- lay - lain"),
    G("lay（置く）", "She ＿ the baby on the bed.", "laid", ["lay", "lied", "lain"], "lay（置く）- laid - laid"),
    G("raise / rise", "The sun ＿ in the east.", "rises", ["raises", "arises it", "raise"], "rise（自動詞・上がる）、raise（他動詞・上げる）"),
    G("discuss（他動詞）", "We discussed ＿ for hours.", "the problem", ["about the problem", "on the problem", "with the problem"], "discuss は他動詞（about は不要）"),
    G("marry（他動詞）", "She married ＿ last year.", "a doctor", ["with a doctor", "to a doctor", "for a doctor"], "marry＋人「〜と結婚する」"),
    G("suit / fit", "That red dress really ＿ you.", "suits", ["matches with", "fits to", "agrees"], "suit「（色・服が）人に似合う」"),
    G("cost", "The repair ＿ me 10,000 yen.", "cost", ["took", "spent", "paid"], "cost＋人＋金額「人に〜（金額）がかかる」"),
    G("take（時間）", "It ＿ me two hours to finish the work.", "took", ["cost", "spent", "needed to"], "It takes＋人＋時間＋to 〜"),
  ], "rob A of B・lie と lay");

  ch("gF2", 6, "まぎらわしい 語法", "🌀", [
    G("borrow / lend", "Could you ＿ me your dictionary?", "lend", ["borrow", "rent", "let"], "lend＋人＋物「人に物を貸す」"),
    G("say / tell", "Please ＿ me the truth.", "tell", ["say", "speak", "talk"], "tell＋人＋物（say は人を直接目的語にとらない）"),
    G("most / almost", "＿ all the students passed the exam.", "Almost", ["Most", "Mostly", "The most"], "almost all 〜（almost は副詞）"),
    G("most of", "＿ of the students passed the exam.", "Most", ["Almost", "Mostly", "Much"], "most of the＋名詞"),
    G("few / little", "There is ＿ water left in the bottle.", "little", ["few", "a few", "many"], "数えられない名詞には little"),
    G("a few", "I have ＿ friends in Osaka, so I visit them often.", "a few", ["a little", "little", "much"], "a few＋可算名詞「少しはある」"),
    G("hard / hardly", "He studied ＿ for the exam.", "hard", ["hardly", "harder of", "hardness"], "hard「熱心に」、hardly「ほとんど〜ない」"),
    G("late / lately", "Have you seen him ＿?", "lately", ["late", "later on", "latest"], "lately「最近」"),
    G("expensive / high", "The price of this bag is too ＿.", "high", ["expensive", "dear to", "costly much"], "price は high / low で表す"),
    G("customer", "There were a lot of ＿ in the store.", "customers", ["spectators", "audiences", "passengers"], "店の客は customer"),
    G("audience", "There was a large ＿ at the concert.", "audience", ["customer", "client", "passenger"], "聴衆は audience（large / small で表す）"),
    G("convenient", "Please come whenever it is ＿ for you.", "convenient", ["comfortable", "possible to you", "useful"], "convenient for 人「人にとって都合がよい」（人を主語にしない）"),
  ], "lend と borrow・few と little");

  ch("gF3", 6, "入試の 文法 総合①", "🏯", [
    G("It is not until", "It was not until he lost his health ＿ he realized its value.", "that", ["when", "before", "what"], "It is not until A that B「Aして初めてBする」"),
    G("What ～ like", "＿ is the weather like in Kyoto?", "What", ["How", "Which", "Who"], "What is 〜 like?「〜はどのようなものか」"),
    G("know better than", "You should know better than ＿ such a thing.", "to do", ["doing", "do", "done"], "know better than to 〜「〜するほどばかではない」"),
    G("no matter what", "No matter ＿ happens, I'll be on your side.", "what", ["how", "which way", "that"], "no matter what 〜「何が〜しても」"),
    G("be worth ～ing", "This book is worth ＿.", "reading", ["to read", "read", "being read it"], "be worth ～ing「〜する価値がある」"),
    G("There is no ～ing", "There is no ＿ what will happen.", "telling", ["tell", "to tell", "told"], "There is no ～ing「〜することはできない」"),
    G("feel like ～ing", "I don't feel like ＿ out tonight.", "going", ["to go", "go", "gone"], "feel like ～ing「〜したい気がする」"),
    G("object to ～ing", "He objected to ＿ like a child.", "being treated", ["be treated", "treat", "treating him"], "object to ～ing（to は前置詞）"),
    G("needs ～ing", "This car needs ＿.", "repairing", ["to repair", "repair", "repaired"], "need ～ing「〜される必要がある」"),
    G("have 物 p.p.", "I had my hair ＿ yesterday.", "cut", ["cutting", "to cut", "cuts"], "have＋物＋過去分詞「物を〜してもらう」"),
    G("get 人 to", "I got my brother ＿ me with my homework.", "to help", ["help", "helping", "helped"], "get＋人＋to 不定詞「人に〜してもらう」"),
    G("as it were", "He is, ＿ it were, a walking dictionary.", "as", ["so", "if", "like"], "as it were「いわば」"),
  ], "大学入試で ねらわれる 文法");

  ch("gF4", 6, "入試の 文法 総合②", "🗻", [
    G("leave nothing to be desired", "His performance left nothing to be ＿.", "desired", ["desiring", "desire", "desirable"], "leave nothing to be desired「申し分ない」"),
    G("never fail to", "He never ＿ to call me on my birthday.", "fails", ["misses", "avoids", "stops calling"], "never fail to 〜「必ず〜する」"),
    G("the moment", "＿ moment she saw me, she ran away.", "The", ["A", "At", "In"], "the moment 〜「〜するとすぐに」"),
    G("A is to B what C is to D", "Reading is to the mind ＿ exercise is to the body.", "what", ["that", "which", "as"], "A is to B what C is to D「AとBの関係はCとDの関係と同じ」"),
    G("not so much A as B", "He is not so much a scholar ＿ a writer.", "as", ["than", "but", "that"], "not so much A as B「AというよりむしろB」"),
    G("so to speak", "He is, so to ＿, a bookworm.", "speak", ["say", "tell", "talk about"], "so to speak「いわば」"),
    G("all but", "The work is all ＿ finished.", "but", ["for", "of", "too"], "all but「ほとんど」"),
    G("be about to", "The train is ＿ to leave.", "about", ["going", "near", "ready to"], "be about to 〜「まさに〜しようとしている」"),
    G("would often", "When I was young, I ＿ often go fishing with my father.", "would", ["used", "should", "might"], "would often「よく〜したものだ」"),
    G("lest", "He worked hard lest he ＿ fail.", "should", ["would not", "will", "had"], "lest 〜 (should)「〜しないように」"),
    G("never ～ without …ing", "They never meet ＿ quarreling.", "without", ["but", "unless", "instead of"], "never A without B「AすればかならずBする」"),
    G("it goes without saying", "It goes without ＿ that health is important.", "saying", ["to say", "said", "say"], "It goes without saying that 〜「〜は言うまでもない」"),
  ], "難関大の 文法・語法");
})();
