// ===== 単語の国：例文（中学）。「単語|英文（＿が 空らん）|和訳」。英文の ＿ には 見出し語の 形が そのまま 入る =====
const VSENT_SRC = [];
VSENT_SRC.push(`
school|I go to ＿ by bus.|わたしはバスで学校に通っている。
student|She is a ＿ at this school.|彼女はこの学校の生徒だ。
teacher|Mr. Ito is our math ＿.|伊藤先生はわたしたちの数学の先生だ。
class|We have an English ＿ today.|今日は英語の授業がある。
friend|Ken is my best ＿.|ケンはわたしの親友だ。
book|I read a ＿ every night.|わたしは毎晩本を読む。
desk|Put your bag on the ＿.|かばんを机の上に置きなさい。
notebook|Write your name in your ＿.|ノートに名前を書きなさい。
bag|My ＿ is very heavy today.|今日はかばんがとても重い。
study|I ＿ English every day.|わたしは毎日英語を勉強する。
read|Can you ＿ this word?|この単語を読めますか。
write|Please ＿ your answer here.|ここに答えを書いてください。
speak|Do you ＿ Japanese?|あなたは日本語を話しますか。
listen|＿ to me carefully.|わたしの言うことをよく聞きなさい。
open|Please ＿ the window.|窓を開けてください。
close|Please ＿ the door.|ドアを閉めてください。
homework|I finished my ＿ before dinner.|夕食前に宿題を終えた。
library|I borrowed this book from the ＿.|この本は図書館で借りた。
question|May I ask a ＿?|質問してもいいですか。
answer|I don't know the ＿.|答えがわからない。
family|There are five people in my ＿.|わたしの家族は5人だ。
father|My ＿ works at a bank.|父は銀行で働いている。
mother|My ＿ is a good cook.|母は料理が上手だ。
brother|My ＿ is two years older than me.|兄はわたしより2歳年上だ。
sister|My little ＿ likes cats.|妹はネコが好きだ。
grandfather|My ＿ lives in the country.|祖父はいなかに住んでいる。
grandmother|My ＿ makes delicious cookies.|祖母はおいしいクッキーを作る。
parent|Each ＿ came to the school event.|それぞれの親が学校行事に来た。
child|The ＿ is playing in the park.|その子どもは公園で遊んでいる。
baby|The ＿ is sleeping now.|赤ちゃんは今眠っている。
boy|That ＿ is my cousin.|あの男の子はわたしのいとこだ。
girl|The ＿ with long hair is Mai.|髪の長い女の子がマイだ。
man|A ＿ was standing at the gate.|男性が門のところに立っていた。
woman|The ＿ in the red dress is a singer.|赤いドレスの女性は歌手だ。
people|Many ＿ visit Kyoto every year.|毎年多くの人々が京都を訪れる。
name|What is your ＿?|あなたの名前は何ですか。
home|I stayed at ＿ yesterday.|昨日は家にいた。
house|They live in a big ＿.|彼らは大きな家に住んでいる。
room|My ＿ is on the second floor.|わたしの部屋は2階にある。
kitchen|My mother is cooking in the ＿.|母は台所で料理をしている。
food|Japanese ＿ is popular around the world.|日本の食べ物は世界中で人気がある。
breakfast|I eat ＿ at seven.|わたしは7時に朝食を食べる。
lunch|Let's have ＿ together.|いっしょに昼食を食べよう。
dinner|What's for ＿ tonight?|今夜の夕食は何？
bread|I had ＿ and milk this morning.|今朝はパンと牛乳を食べた。
rice|We eat ＿ almost every day.|わたしたちはほぼ毎日ご飯を食べる。
egg|I had a boiled ＿ for breakfast.|朝食にゆで卵を食べた。
milk|Would you like some ＿?|牛乳はいかがですか。
water|Can I have a glass of ＿?|水を1杯もらえますか。
juice|I like orange ＿.|わたしはオレンジジュースが好きだ。
apple|An ＿ a day keeps the doctor away.|1日1個のりんごで医者いらず。
fish|My cat loves ＿.|わたしのネコは魚が大好きだ。
meat|I don't eat much ＿.|わたしは肉をあまり食べない。
vegetable|A carrot is a ＿.|にんじんは野菜だ。
cake|Let's make a birthday ＿.|誕生日ケーキを作ろう。
cook|My father likes to ＿ on Sundays.|父は日曜日に料理するのが好きだ。
eat|What do you want to ＿?|何を食べたいですか。
drink|Don't ＿ too much soda.|炭酸飲料を飲みすぎないで。
hungry|I'm ＿. Let's eat something.|おなかがすいた。何か食べよう。
delicious|This curry is ＿!|このカレーはとてもおいしい！
day|It was a hot ＿.|暑い1日だった。
week|I play tennis twice a ＿.|わたしは週に2回テニスをする。
month|My birthday is next ＿.|わたしの誕生日は来月だ。
year|We moved here last ＿.|わたしたちは昨年ここに引っ越した。
today|It's very cold ＿.|今日はとても寒い。
tomorrow|See you ＿.|また明日。
yesterday|I saw him ＿.|昨日彼に会った。
hour|The movie is two ＿s long.|映画は2時間ある。
minute|Wait a ＿, please.|少し待ってください。
Sunday|We go to church on ＿.|わたしたちは日曜日に教会へ行く。
Monday|School starts on ＿.|学校は月曜日に始まる。
Wednesday|I have a test on ＿.|水曜日にテストがある。
Saturday|Let's go shopping on ＿.|土曜日に買い物に行こう。
January|The new year begins in ＿.|新年は1月に始まる。
February|＿ is the shortest month.|2月はいちばん短い月だ。
August|Summer vacation is in ＿.|夏休みは8月にある。
December|Christmas is in ＿.|クリスマスは12月にある。
spring|Cherry blossoms bloom in ＿.|春に桜が咲く。
summer|We swim in the sea in ＿.|夏には海で泳ぐ。
winter|It often snows in ＿.|冬にはよく雪が降る。
go|Let's ＿ to the park.|公園に行こう。
come|Please ＿ to my house.|わたしの家に来てください。
run|I ＿ in the park every morning.|わたしは毎朝公園を走る。
walk|I ＿ to school.|わたしは歩いて学校へ行く。
swim|Can you ＿ fast?|あなたは速く泳げますか。
play|Let's ＿ soccer after school.|放課後サッカーをしよう。
sing|She likes to ＿ songs.|彼女は歌を歌うのが好きだ。
dance|They ＿ at the festival.|彼らはお祭りで踊る。
sleep|I usually ＿ for eight hours.|わたしはふだん8時間眠る。
make|Let's ＿ a cake.|ケーキを作ろう。
take|＿ an umbrella with you.|傘を持っていきなさい。
give|Please ＿ me some water.|水をください。
help|Can you ＿ me?|手伝ってくれる？
like|I ＿ music very much.|わたしは音楽が大好きだ。
want|I ＿ a new bike.|新しい自転車がほしい。
know|Do you ＿ his name?|彼の名前を知っていますか。
see|I can ＿ Mt. Fuji from here.|ここから富士山が見える。
watch|I ＿ TV after dinner.|夕食後にテレビを見る。
use|Can I ＿ your pen?|ペンを使ってもいい？
live|I ＿ in Nagoya.|わたしは名古屋に住んでいる。
big|That is a ＿ dog.|あれは大きな犬だ。
small|This shirt is too ＿ for me.|このシャツはわたしには小さすぎる。
long|She has ＿ hair.|彼女は長い髪をしている。
short|The meeting was very ＿.|会議はとても短かった。
new|I bought a ＿ phone.|新しい電話を買った。
old|This is an ＿ temple.|これは古い寺だ。
good|That's a ＿ idea.|それはよい考えだ。
bad|I have ＿ news.|悪い知らせがある。
happy|I'm ＿ to see you.|あなたに会えてうれしい。
sad|The movie was very ＿.|その映画はとても悲しかった。
hot|It's ＿ today.|今日は暑い。
cold|The water is ＿.|水が冷たい。
beautiful|What a ＿ flower!|なんて美しい花でしょう！
cute|Your puppy is so ＿.|あなたの子犬はとてもかわいい。
easy|This question is ＿.|この問題は簡単だ。
difficult|Math is ＿ for me.|数学はわたしには難しい。
busy|I'm ＿ this week.|今週は忙しい。
tired|I'm ＿ after the long walk.|長く歩いて疲れた。
kind|She is ＿ to everyone.|彼女はみんなに親切だ。
young|My aunt is still ＿.|おばはまだ若い。
city|Tokyo is a big ＿.|東京は大都市だ。
town|I live in a small ＿.|わたしは小さな町に住んでいる。
park|Let's play in the ＿.|公園で遊ぼう。
station|Where is the ＿?|駅はどこですか。
store|This ＿ sells shoes.|この店は靴を売っている。
hospital|My grandfather is in the ＿.|祖父は入院している。
street|Be careful when you cross the ＿.|通りを渡るときは気をつけて。
river|We fished in the ＿.|わたしたちは川で釣りをした。
mountain|Mt. Fuji is the highest ＿ in Japan.|富士山は日本でいちばん高い山だ。
sea|I like swimming in the ＿.|わたしは海で泳ぐのが好きだ。
tree|There is a big ＿ in the garden.|庭に大きな木がある。
flower|She gave me a ＿.|彼女はわたしに花をくれた。
sky|The ＿ is blue today.|今日は空が青い。
sun|The ＿ rises in the east.|太陽は東からのぼる。
rain|We had a lot of ＿ last night.|昨夜はたくさん雨が降った。
snow|The mountain is covered with ＿.|山は雪でおおわれている。
animal|The panda is my favorite ＿.|パンダはわたしのいちばん好きな動物だ。
bird|A ＿ is singing in the tree.|鳥が木の上で鳴いている。
bridge|We walked across the ＿.|わたしたちは橋を歩いて渡った。
picture|She painted a ＿ of the sea.|彼女は海の絵をかいた。
always|He is ＿ kind to me.|彼はいつもわたしに親切だ。
usually|I ＿ get up at six.|わたしはふつう6時に起きる。
often|We ＿ go to the beach in summer.|夏にはよく海へ行く。
sometimes|I ＿ cook dinner.|わたしはときどき夕食を作る。
very|It's ＿ hot today.|今日はとても暑い。
here|Come ＿, please.|ここに来てください。
there|I went ＿ last year.|昨年そこへ行った。
now|I'm busy ＿.|今は忙しい。
again|Please say that ＿.|もう一度言ってください。
together|Let's study ＿.|いっしょに勉強しよう。
every|I study ＿ day.|わたしは毎日勉強する。
many|He has ＿ friends.|彼にはたくさんの友だちがいる。
favorite|What is your ＿ color?|いちばん好きな色は何ですか。
interesting|This book is very ＿.|この本はとてもおもしろい。
popular|This song is ＿ among young people.|この歌は若者に人気がある。
color|What ＿ is your bag?|あなたのかばんは何色ですか。
music|I listen to ＿ every day.|わたしは毎日音楽を聞く。
sport|Soccer is a popular ＿.|サッカーは人気のあるスポーツだ。
museum|We visited an art ＿.|わたしたちは美術館を訪れた。
country|Japan is a beautiful ＿.|日本は美しい国だ。
`);
VSENT_SRC.push(`
feel|I ＿ happy today.|今日は幸せな気分だ。
think|I ＿ you are right.|あなたは正しいと思う。
hope|I ＿ you will get well soon.|すぐによくなることを願っている。
believe|I ＿ that he is honest.|彼は正直だと信じている。
worry|Don't ＿ about me.|わたしのことは心配しないで。
surprised|I was ＿ at the news.|その知らせに驚いた。
excited|The children were ＿ about the trip.|子どもたちは旅行にわくわくしていた。
glad|I'm ＿ you came.|来てくれてうれしい。
afraid|She is ＿ of dogs.|彼女は犬をこわがっている。
angry|Why are you ＿?|なぜ怒っているの？
sorry|I'm ＿ I'm late.|遅れてごめんなさい。
idea|I have a good ＿.|いい考えがある。
dream|My ＿ is to be a pilot.|わたしの夢はパイロットになることだ。
wish|I ＿ you a happy birthday.|誕生日おめでとう（幸せな誕生日を願っています）。
remember|Do you ＿ my name?|わたしの名前を覚えていますか。
forget|Don't ＿ your homework.|宿題を忘れないで。
understand|I can't ＿ this sentence.|この文が理解できない。
decide|I can't ＿ what to eat.|何を食べるか決められない。
important|Sleep is ＿ for your health.|睡眠は健康にとって重要だ。
sure|Are you ＿?|確かなの？
travel|I want to ＿ around the world.|世界中を旅行したい。
trip|We went on a school ＿ to Nara.|修学旅行で奈良へ行った。
visit|I'll ＿ my grandmother this weekend.|今週末に祖母を訪ねる。
airport|We arrived at the ＿ early.|わたしたちは早めに空港に着いた。
ticket|I bought a ＿ for the concert.|コンサートのチケットを買った。
map|Let's look at the ＿.|地図を見よう。
foreign|I want to learn a ＿ language.|外国語を学びたい。
abroad|She wants to study ＿.|彼女は留学したがっている。
leave|What time do you ＿ home?|何時に家を出ますか。
arrive|The train will ＿ at ten.|電車は10時に到着する。
stay|We will ＿ at a hotel.|わたしたちはホテルに泊まる。
hotel|This ＿ has a pool.|このホテルにはプールがある。
culture|I'm interested in Japanese ＿.|日本文化に興味がある。
language|English is an international ＿.|英語は国際的な言語だ。
famous|Kyoto is ＿ for its old temples.|京都は古い寺で有名だ。
world|He wants to travel around the ＿.|彼は世界中を旅したい。
way|Could you tell me the ＿ to the station?|駅への道を教えてもらえますか。
plane|We went to Okinawa by ＿.|わたしたちは飛行機で沖縄へ行った。
train|The ＿ was crowded.|電車は混んでいた。
guide|Our ＿ showed us around the city.|ガイドが町を案内してくれた。
body|Exercise is good for your ＿.|運動は体によい。
head|I hit my ＿ on the door.|ドアに頭をぶつけた。
face|Wash your ＿.|顔を洗いなさい。
hand|Raise your ＿ if you know the answer.|答えがわかったら手を挙げなさい。
leg|I broke my ＿ while skiing.|スキー中に脚を折った。
heart|The ＿ pumps blood.|心臓は血液を送り出す。
health|Smoking is bad for your ＿.|喫煙は健康に悪い。
sick|He was ＿ in bed yesterday.|彼は昨日病気で寝ていた。
hurt|My back ＿s.|背中が痛い。
fever|I have a ＿ today.|今日は熱がある。
medicine|Take this ＿ after meals.|食後にこの薬を飲みなさい。
doctor|You should see a ＿.|医者にみてもらったほうがいい。
nurse|The ＿ was very kind to me.|看護師はとても親切だった。
rest|You need some ＿.|あなたには休息が必要だ。
exercise|I get some ＿ every day.|わたしは毎日運動をする。
strong|He is very ＿.|彼はとても力が強い。
weak|I felt ＿ after the long illness.|長い病気の後、体が弱っていた。
tooth|I have a bad ＿.|虫歯がある。
headache|I have a terrible ＿.|ひどい頭痛がする。
sleepy|I'm ＿ because I went to bed late.|遅く寝たので眠い。
job|My father has a new ＿.|父は新しい仕事に就いた。
work|My mother ＿s at a hospital.|母は病院で働いている。
company|He works for a car ＿.|彼は自動車会社で働いている。
office|My father's ＿ is in Tokyo.|父の事務所は東京にある。
money|I don't have enough ＿.|十分なお金がない。
buy|I want to ＿ a new bag.|新しいかばんを買いたい。
sell|They ＿ fresh fish at that shop.|あの店では新鮮な魚を売っている。
pay|Can I ＿ by card?|カードで支払えますか。
price|The ＿ of this bag is 3,000 yen.|このかばんの値段は3,000円だ。
cheap|This shirt was very ＿.|このシャツはとても安かった。
expensive|That watch is too ＿.|あの時計は高すぎる。
plan|What's your ＿ for the summer?|夏の計画は何ですか。
meeting|We have a ＿ at three.|3時に会議がある。
volunteer|She works as a ＿ at the hospital.|彼女は病院でボランティアをしている。
police|Call the ＿!|警察を呼んで！
event|The school festival is a big ＿.|文化祭は大きな行事だ。
problem|We have a big ＿.|大きな問題がある。
future|What do you want to be in the ＿?|将来何になりたいですか。
uniform|We wear a ＿ at school.|学校では制服を着る。
customer|The shop has many ＿s.|その店には客が多い。
environment|We must protect the ＿.|わたしたちは環境を守らなければならない。
earth|The ＿ goes around the sun.|地球は太陽のまわりを回る。
nature|I love being in ＿.|自然の中にいるのが大好きだ。
forest|Many animals live in the ＿.|森には多くの動物が住んでいる。
ocean|The Pacific ＿ is very large.|太平洋はとても大きい。
island|Japan is made up of many ＿s.|日本は多くの島からなる。
air|The ＿ here is clean.|ここの空気はきれいだ。
energy|We should save ＿.|エネルギーを節約すべきだ。
plant|I water the ＿s every morning.|毎朝植物に水をやる。
grow|Rice ＿s well here.|ここでは米がよく育つ。
protect|We should ＿ wild animals.|野生動物を保護すべきだ。
save|We can ＿ water by taking shorter showers.|短くシャワーを浴びれば水を節約できる。
clean|Keep your room ＿.|部屋をきれいにしておきなさい。
dirty|Your shoes are ＿.|靴が汚れている。
garbage|Take out the ＿, please.|ごみを出してください。
recycle|We ＿ paper and bottles.|わたしたちは紙とびんをリサイクルする。
weather|How is the ＿ today?|今日の天気はどうですか。
season|Which ＿ do you like best?|どの季節がいちばん好き？
temperature|The ＿ dropped below zero.|気温が0度以下に下がった。
wind|The ＿ is strong today.|今日は風が強い。
bring|Please ＿ your lunch tomorrow.|明日は弁当を持ってきてください。
carry|Can you ＿ this box?|この箱を運べますか。
catch|Let's ＿ some fish.|魚を捕まえよう。
change|I want to ＿ my hairstyle.|髪型を変えたい。
choose|＿ one of these cards.|このカードの中から1枚選んで。
collect|My hobby is to ＿ stamps.|わたしの趣味は切手を集めることだ。
cut|Please ＿ the cake into eight pieces.|ケーキを8つに切ってください。
drop|Don't ＿ the glass.|コップを落とさないで。
enjoy|Did you ＿ the party?|パーティーは楽しかった？
explain|Can you ＿ this rule?|この規則を説明してくれる？
fall|Be careful not to ＿.|転ばないように気をつけて。
finish|I'll ＿ my homework soon.|すぐに宿題を終えます。
follow|Please ＿ me.|わたしについてきてください。
hold|Can you ＿ my bag for a minute?|少しかばんを持っていてくれる？
invite|I'll ＿ my friends to the party.|友だちをパーティーに招待する。
join|Do you want to ＿ our club?|わたしたちの部に入りたい？
lose|Don't ＿ your key.|かぎをなくさないで。
move|We will ＿ to Osaka next month.|来月大阪に引っ越す。
practice|We ＿ soccer every day.|わたしたちは毎日サッカーを練習する。
wait|Please ＿ here.|ここで待っていてください。
different|We have ＿ opinions.|わたしたちは違う意見を持っている。
same|We are in the ＿ class.|わたしたちは同じクラスだ。
special|Today is a ＿ day.|今日は特別な日だ。
useful|This dictionary is very ＿.|この辞書はとても役に立つ。
careful|Be ＿ when you drive.|運転するときは注意しなさい。
dangerous|It's ＿ to swim here.|ここで泳ぐのは危険だ。
safe|This area is ＿ at night.|この地域は夜も安全だ。
quiet|Please be ＿ in the library.|図書館では静かにしてください。
bright|The room is ＿ and warm.|その部屋は明るくて暖かい。
dark|It gets ＿ early in winter.|冬は早く暗くなる。
heavy|This box is too ＿.|この箱は重すぎる。
wonderful|We had a ＿ time.|すばらしい時間を過ごした。
terrible|The traffic was ＿.|交通渋滞がひどかった。
strange|I heard a ＿ sound.|奇妙な音が聞こえた。
poor|The family was very ＿.|その家族はとても貧しかった。
rich|He became ＿ by selling his books.|彼は本を売って金持ちになった。
free|The concert is ＿.|そのコンサートは無料だ。
large|We need a ＿ room for the party.|パーティーには広い部屋が必要だ。
fast|He is a ＿ runner.|彼は足が速い（速い走者だ）。
early|I get up ＿ in the morning.|わたしは朝早く起きる。
before|Wash your hands ＿ dinner.|夕食の前に手を洗いなさい。
after|Let's play soccer ＿ school.|放課後サッカーをしよう。
during|I slept ＿ the movie.|映画の間に眠ってしまった。
until|Let's wait ＿ five.|5時まで待とう。
while|I fell asleep ＿ I was reading.|読書をしている間に眠ってしまった。
because|I stayed home ＿ it was raining.|雨が降っていたので家にいた。
if|＿ it rains, we will stay home.|もし雨が降ったら家にいる。
already|I have ＿ eaten lunch.|すでに昼食を食べた。
yet|I haven't finished my homework ＿.|まだ宿題が終わっていない。
just|I have ＿ arrived.|ちょうど着いたところだ。
still|It's ＿ raining.|まだ雨が降っている。
soon|The bus will come ＿.|バスはまもなく来る。
later|I'll call you ＿.|後で電話するね。
ever|Have you ＿ been to Hokkaido?|今までに北海道に行ったことがある？
never|I have ＿ seen a ghost.|わたしは一度も幽霊を見たことがない。
once|I have been to London ＿.|ロンドンに一度行ったことがある。
someday|I want to visit Paris ＿.|いつかパリを訪れたい。
almost|It's ＿ nine o'clock.|もうすぐ9時だ。
maybe|＿ he is right.|たぶん彼が正しいのだろう。
without|I can't live ＿ music.|音楽なしでは生きられない。
`);
VSENT_SRC.push(`
society|We live in a modern ＿.|わたしたちは現代社会に生きている。
peace|We hope for world ＿.|わたしたちは世界平和を願っている。
war|Many people died in the ＿.|その戦争で多くの人が亡くなった。
government|The ＿ made a new law.|政府は新しい法律を作った。
history|I like Japanese ＿.|わたしは日本史が好きだ。
tradition|Making mochi is a New Year ＿.|もちを作るのは正月の伝統だ。
population|The ＿ of this city is growing.|この市の人口は増えている。
respect|We should ＿ our elders.|年上の人を尊敬すべきだ。
support|My parents always ＿ me.|両親はいつもわたしを支えてくれる。
develop|The country wants to ＿ its economy.|その国は経済を発展させたいと考えている。
technology|＿ has changed our lives.|科学技術はわたしたちの生活を変えた。
science|I'm interested in ＿.|わたしは科学に興味がある。
information|You can get ＿ on the internet.|インターネットで情報が得られる。
communication|Smartphones make ＿ easy.|スマートフォンで意思の伝達が簡単になる。
international|English is used for ＿ business.|英語は国際的なビジネスで使われる。
global|＿ warming is a serious problem.|地球温暖化は深刻な問題だ。
local|We buy vegetables from ＿ farmers.|わたしたちは地元の農家から野菜を買う。
citizen|Every ＿ has the right to vote.|すべての市民に投票権がある。
law|We must follow the ＿.|法律に従わなければならない。
member|I'm a ＿ of the tennis club.|わたしはテニス部の一員だ。
experience|It was a great ＿.|すばらしい経験だった。
knowledge|Reading gives us ＿.|読書は知識を与えてくれる。
opinion|What is your ＿?|あなたの意見は何ですか。
reason|Tell me the ＿.|理由を教えて。
example|Can you give me an ＿?|例をあげてくれる？
fact|It is a ＿ that the earth is round.|地球が丸いのは事実だ。
result|I was happy with the test ＿.|テストの結果に満足した。
purpose|What is the ＿ of your visit?|訪問の目的は何ですか。
research|She does ＿ on the brain.|彼女は脳の研究をしている。
discover|Scientists ＿ new things every day.|科学者は毎日新しいことを発見する。
invent|Who ＿ed the telephone?|電話を発明したのはだれ？
create|Artists ＿ beautiful works.|芸術家は美しい作品を生み出す。
imagine|＿ a world without war.|戦争のない世界を想像してごらん。
compare|Let's ＿ these two pictures.|この2枚の絵を比べよう。
agree|I ＿ with you.|あなたに賛成です。
discuss|We will ＿ the problem tomorrow.|明日その問題について話し合う。
express|It's hard to ＿ my feelings in English.|英語で気持ちを表現するのは難しい。
solve|Can you ＿ this puzzle?|このパズルを解けますか。
report|I wrote a ＿ about my trip.|旅行についてのレポートを書いた。
subject|My favorite ＿ is music.|好きな教科は音楽だ。
honest|He is an ＿ boy.|彼は正直な少年だ。
polite|She is always ＿ to others.|彼女はいつも他人に礼儀正しい。
brave|The ＿ firefighter saved the child.|勇敢な消防士がその子を救った。
shy|He is too ＿ to speak in public.|彼は内気で人前で話せない。
smart|She is a ＿ student.|彼女は頭のよい生徒だ。
friendly|The people here are very ＿.|ここの人々はとても友好的だ。
serious|This is a ＿ problem.|これは深刻な問題だ。
patient|Be ＿. It takes time.|がまん強くね。時間がかかるよ。
gentle|My grandmother has a ＿ voice.|祖母は穏やかな声をしている。
proud|I'm ＿ of my team.|わたしはチームを誇りに思う。
lonely|I felt ＿ after my friend moved away.|友だちが引っ越してさびしかった。
nervous|I was ＿ before the speech.|スピーチの前は緊張した。
confident|She is ＿ about the exam.|彼女は試験に自信がある。
curious|Children are ＿ about everything.|子どもは何にでも好奇心をもつ。
lazy|Don't be ＿. Do your homework.|なまけないで。宿題をしなさい。
calm|Stay ＿ in an emergency.|緊急時には落ち着いていなさい。
cheerful|She is always ＿ and smiling.|彼女はいつも陽気で笑顔だ。
clever|The ＿ dog opened the door.|その利口な犬はドアを開けた。
selfish|Don't be so ＿.|そんなに自分勝手にならないで。
active|My grandfather is still very ＿.|祖父は今でもとても活動的だ。
accept|I ＿ your apology.|あなたの謝罪を受け入れます。
achieve|You can ＿ your goal.|あなたは目標を達成できる。
allow|My parents don't ＿ me to stay out late.|両親は夜遅くまで外出することを許さない。
avoid|＿ eating too much sugar.|砂糖のとりすぎを避けなさい。
borrow|Can I ＿ your umbrella?|傘を借りてもいい？
lend|Can you ＿ me your pen?|ペンを貸してくれる？
continue|Let's ＿ the meeting after lunch.|昼食後に会議を続けよう。
describe|Can you ＿ the man you saw?|見た男性について説明できますか。
destroy|The fire ＿ed the old house.|火事が古い家を破壊した。
disappear|The sun ＿ed behind the clouds.|太陽が雲の後ろに消えた。
encourage|My teacher ＿d me to try again.|先生はもう一度やってみるよう励ましてくれた。
happen|What ＿ed?|何が起こったの？
improve|I want to ＿ my English.|英語を上達させたい。
increase|The number of tourists will ＿.|観光客の数は増えるだろう。
introduce|Let me ＿ myself.|自己紹介させてください。
produce|This factory ＿s cars.|この工場は車を生産している。
reduce|We should ＿ waste.|ごみを減らすべきだ。
realize|I didn't ＿ my mistake.|自分の間違いに気づかなかった。
receive|I ＿d a letter from her.|彼女から手紙を受け取った。
spend|I ＿ a lot of time reading.|わたしは多くの時間を読書に使う。
tool|A hammer is a useful ＿.|かなづちは便利な道具だ。
machine|This ＿ makes coffee.|この機械はコーヒーを作る。
material|Wood is a natural ＿.|木は自然の素材だ。
product|This ＿ is made in Japan.|この製品は日本製だ。
plastic|This bottle is made of ＿.|このびんはプラスチックでできている。
electricity|We use ＿ every day.|わたしたちは毎日電気を使う。
advice|Thank you for your ＿.|助言をありがとう。
chance|This is a good ＿ to learn.|これは学ぶよい機会だ。
choice|You made the right ＿.|あなたは正しい選択をした。
effort|She made a great ＿.|彼女は大変な努力をした。
goal|My ＿ is to win the contest.|わたしの目標はコンテストで優勝することだ。
habit|Reading is a good ＿.|読書はよい習慣だ。
rule|Follow the ＿s of the game.|ゲームのルールに従いなさい。
skill|Cooking is a useful ＿.|料理は役に立つ技能だ。
message|Can I leave a ＿?|伝言を残してもいいですか。
mistake|Everyone makes ＿s.|だれでも間違いをする。
condition|The car is in good ＿.|その車は状態がよい。
trouble|I had ＿ finding the house.|その家を見つけるのに苦労した。
memory|I have a good ＿ of that trip.|その旅行にはよい思い出がある。
secret|Can you keep a ＿?|秘密を守れる？
life|Water is necessary for ＿.|水は生命にとって必要だ。
die|Plants ＿ without water.|植物は水がないと死ぬ。
survive|Only a few people ＿d the accident.|その事故で生き残ったのは数人だけだった。
human|＿ beings need sleep.|人間には睡眠が必要だ。
insect|An ant is an ＿.|アリは昆虫だ。
disaster|The flood was a terrible ＿.|その洪水はひどい災害だった。
earthquake|Japan has many ＿s.|日本は地震が多い。
typhoon|A big ＿ is coming.|大きな台風が近づいている。
flood|The heavy rain caused a ＿.|大雨で洪水が起きた。
damage|The storm caused great ＿.|嵐は大きな被害をもたらした。
resource|Oil is an important natural ＿.|石油は重要な天然資源だ。
pollution|Air ＿ is a big problem in some cities.|一部の都市では大気汚染が大問題だ。
desert|It rarely rains in the ＿.|砂漠ではめったに雨が降らない。
land|The ＿ here is good for farming.|ここの土地は農業に向いている。
field|Cows are eating grass in the ＿.|牛が野原で草を食べている。
universe|The ＿ is very large.|宇宙はとても広い。
planet|Mars is a red ＿.|火星は赤い惑星だ。
climate|Japan has a mild ＿.|日本は温暖な気候だ。
destruction|The ＿ of forests is a serious problem.|森林の破壊は深刻な問題だ。
shortage|There is a water ＿ this summer.|この夏は水不足だ。
possible|Is it ＿ to finish it today?|今日中に終えることは可能ですか。
impossible|It's ＿ to see stars today.|今日は星を見るのは不可能だ。
necessary|Is it ＿ to bring lunch?|昼食を持ってくる必要はありますか。
common|Tanaka is a ＿ name in Japan.|田中は日本でよくある名前だ。
natural|It's ＿ to feel nervous.|緊張するのは当然だ。
simple|The rules are ＿.|ルールは単純だ。
similar|Your bag is ＿ to mine.|あなたのかばんはわたしのに似ている。
various|There are ＿ kinds of flowers here.|ここにはさまざまな種類の花がある。
whole|I ate the ＿ cake.|わたしはケーキを丸ごと食べた。
enough|We have ＿ time.|時間は十分ある。
main|What is the ＿ point?|主な論点は何ですか。
modern|This is a ＿ building.|これは近代的な建物だ。
ancient|We studied ＿ Egypt.|わたしたちは古代エジプトを学んだ。
traditional|Kimono is ＿ Japanese clothing.|着物は伝統的な日本の衣服だ。
clear|The sky is ＿ today.|今日は空が晴れている。
perfect|Your answer is ＿.|あなたの答えは完璧だ。
real|Is this a ＿ diamond?|これは本物のダイヤモンドですか。
huge|There is a ＿ tree in the park.|公園に巨大な木がある。
own|I want my ＿ room.|自分自身の部屋がほしい。
foolish|It was ＿ of me to believe him.|彼を信じたのは愚かだった。
however|It was raining. ＿, we went out.|雨が降っていた。しかし、わたしたちは出かけた。
although|＿ he was tired, he kept working.|彼は疲れていたけれど、働き続けた。
unless|You won't pass ＿ you study.|勉強しない限り合格しないよ。
instead|I didn't go out. I stayed home ＿.|出かけなかった。その代わりに家にいた。
actually|＿, I don't like coffee.|実は、わたしはコーヒーが好きではない。
probably|It will ＿ rain tomorrow.|明日はたぶん雨が降るだろう。
especially|I like fruit, ＿ apples.|わたしは果物、特にりんごが好きだ。
finally|We ＿ reached the top.|ついに頂上に着いた。
suddenly|＿, it began to rain.|突然雨が降り出した。
quickly|He ＿ finished his lunch.|彼はすばやく昼食を食べ終えた。
slowly|Please speak more ＿.|もっとゆっくり話してください。
recently|I have been busy ＿.|最近忙しい。
easily|She ＿ solved the problem.|彼女は簡単にその問題を解いた。
carefully|Listen ＿.|注意深く聞きなさい。
anyway|＿, let's start.|とにかく始めよう。
beyond|The village is ＿ the mountain.|その村は山の向こうにある。
forward|He took a step ＿.|彼は一歩前へ進んだ。
nearly|It's ＿ midnight.|もうすぐ真夜中だ。
through|The train went ＿ the tunnel.|電車はトンネルを通り抜けた。
against|Are you for or ＿ the plan?|その計画に賛成ですか、反対ですか。
`);
