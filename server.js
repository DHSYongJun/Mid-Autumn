var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

app.listen(3000, function () {
	  console.log('App listening on port 3000!');
});

app.listen(process.env.PORT || 8888);

app.use(express.static("public"));

var jokes=[{setup:"“月亮代表我的心” 这首歌是谁的作曲?",punchline:"翁清渓"},{setup:"能说会道",punchline:"团"},{setup:"皮也轻轻，骨也轻轻，心头轻轻，全身通明。（猜一物品）",punchline:"灯笼"},{setup:"艳阳西下，皓月东挂。（猜一字）",punchline:"明"},{setup:"“但愿人长久，千里共婵娟”出自哪位词人之手？ ",punchline:"苏轼 "},{setup:"中秋节除了吃月饼，还会有什么食物？",punchline:"柚子"},{setup:"一面镜子亮晶晶，走遍天下照古今。",punchline:"月亮"},{setup:"月亮的一另半（猜一字）",punchline:"胖"},{setup:"十五的月亮（猜成语）",punchline:"正大光明"},{setup:"嫦娥一号是中国的首颗绕月人造卫星。",punchline:"对"},{setup:"在哪个朝代中秋节才开始成为固定的节日?",punchline:"唐"},{setup:"后羿是从谁得到仙丹的?",punchline:"西王母"},{setup:"中秋节又称为?",punchline:"月夕"},{setup:"百年前的月亮（猜一个字）",punchline:"胡"},{setup:"按照传统，中秋节起源于？",punchline:"汉朝"},{setup:"传说中，在广寒宫中陪伴嫦娥的动物是？",punchline:"月亮"},{setup:"一面镜子亮晶晶，走遍天下照古今。",punchline:"月亮"}];

app.route("/jokes").get(function(req,res,next){
	randomJokeIndex = Math.floor(Math.random()*jokes.length);

	jokes[randomJokeIndex].id = randomJokeIndex;

	res.send(jokes[randomJokeIndex]);
});

app.post('/upvote', function(req, res) {
    var jokeIndex = req.body.id;
    if (typeof jokes[jokeIndex].votes === 'undefined') {
        console.log("Upvoting");
        jokes[jokeIndex].votes = 0;
    }

    jokes[jokeIndex].votes++;

    res.send(jokes[jokeIndex]);
});

app.post('/downvote', function(req, res) {
    var jokeIndex = req.body.id;
    if (typeof jokes[jokeIndex].votes === 'undefined') {
        console.log("Downvoting");
        jokes[jokeIndex].votes = 0;
    }

    jokes[jokeIndex].votes--;

    res.send(jokes[jokeIndex]);
});
