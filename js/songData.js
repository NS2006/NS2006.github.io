var song1 = document.querySelectorAll(".song1");
var song2 = document.querySelectorAll(".song2");
var song3 = document.querySelectorAll(".song3");
var song4 = document.querySelectorAll(".song4");
var song5 = document.querySelectorAll(".song5");
var song6 = document.querySelectorAll(".song6");
var song7 = document.querySelectorAll(".song7");
var song8 = document.querySelectorAll(".song8");
var song9 = document.querySelectorAll(".song9");
var song10 = document.querySelectorAll(".song10");

song1.forEach((song1)=>{
    if(song1){
        song1.onclick = () => {
            localStorage.setItem("songItem", "0");
        }
    }
});

song2.forEach((song2) => {
    if(song2){
        song2.onclick = () => {
            localStorage.setItem("songItem", "1");
        }
    }
})

song3.forEach((song3) => {
    if(song3){
        song3.onclick = () => {
            localStorage.setItem("songItem", "2");
        }
    }
})

song4.forEach((song4) => {
    if(song4){
        song4.onclick = () => {
            localStorage.setItem("songItem", "3");
        }
    }
})

song5.forEach((song5) => {
    if(song5){
        song5.onclick = () => {
            localStorage.setItem("songItem", "4");
        }
    }
})

song6.forEach((song6) => {
    if(song6){
        song6.onclick = () => {
            localStorage.setItem("songItem", "5");
        }
    }
})

song7.forEach((song7) => {
    if(song7){
        song7.onclick = () => {
            localStorage.setItem("songItem", "6");
        }
    }
})

song8.forEach((song8) => {
    if(song8){
        song8.onclick = () => {
            localStorage.setItem("songItem", "7");
        }
    }
})

song9.forEach((song9) => {
    if(song9){
        song9.onclick = () => {
            localStorage.setItem("songItem", "8");
        }
    }
})

song10.forEach((song10) => {
    if(song10){
        song10.onclick = () => {
            localStorage.setItem("songItem", "9");
        }
    }
})

class SongData{
    constructor(title, artist, releaseYear, genre, themes, lyric){
        this.title = title;
        this.artist = artist;
        this.releaseYear = releaseYear;
        this.genre = genre;
        this.themes = themes;
        this.lyric = lyric;
    }
};

var songData1 = new SongData(
    "Hall Of Fame",
    "The Script ft. Will.I.Am",
    "August 17, 2012.",
    "Pop, Rock, and Hip Hop.",
    "The song's lyrics convey a motivational message, encouraging listeners to strive for greatness and achieve their dreams, emphasizing persistence and self-belief.",
    `Yeah, you can be the greatest, you can be the best<br>
    You can be the King Kong bangin' on your chest<br>
    You can beat the world, you can win the war<br>
    You can talk to God, go bangin' on his door<br>
    You can throw your hands up, you can beat the clock<br>
    You can move a mountain, you can break rocks<br>
    Some will call that practice, some will call that luck<br>
    But either way your going to the history books<br>
    <br>
    Standing in the Hall of Fame<br>
    And the world's gonna know your name<br>
    'Cause you burn with the brightest flame<br>
    And the world's gonna know your name<br>
    And you'll be on the walls of the Hall of Fame<br>
    <br>
    You can go the distance, you can run a mile<br>
    You can walk straight through hell with a smile<br>
    You can be a hero, you can get the gold<br>
    Breaking all the records they thought would never be broke<br>
    Yeah, do it for your people, do it for your pride<br>
    How are you ever gonna know if you never even try?<br>
    Do it for your country, do it for your name<br>
    'Cause there's gonna be a day, when you're<br>
    <br>
    Standing in the Hall of Fame<br>
    And the world's gonna know your name<br>
    'Cause you burn with the brightest flame<br>
    And the world's gonna know your name<br>
    And you'll be on the walls of the Hall of Fame<br>
    On the walls of the Hall of Fame<br>
    <br>
    Be students, be teachers<br>
    Be politicians, be preachers<br>
    Be believers, be leaders<br>
    Be astronauts, be champions<br>
    Be truth seekers<br>
    Be students, be teachers<br>
    Be politicians, be preachers<br>
    Be believers, be leaders<br>
    Be astronauts, be champions<br>
    <br>
    Standing in the Hall of Fame<br>
    And the world's gonna know your name<br>
    'Cause you burn with the brightest flame<br>
    And the world's gonna know your name<br>
    And you'll be on the walls of the Hall of Fame<br>
    <br>
    Yeah, you can be the greatest, you can be the best<br>
    You can be the King Kong bangin' on your chest<br>
    You can beat the world, you can win the war<br>
    You can talk to God, go bangin' on his door<br>
    You can throw your hands up, you can beat the clock<br>
    You can move a mountain, you can break rocks<br>
    Some will call that practice, some will call that luck<br>
    But either way your going to the history books<br>
    Standing in the Hall of Fame<br>`
);

var songData2 = new SongData(
    "The Nights",
    "Avicii",
    "December 1, 2014.",
    "Progressive House and Folktronica.",
    `The lyrics of "The Nights" reflect on living life to the fullest and creating memorable experiences. It is a tribute to seizing the moment and making the most out of life, inspired by advice given by Avicii's father.`,
    `Once upon a younger year<br>
    When all our shadows disappeared<br>
    The animals inside came out to play<br>
    Went face to face with all our fears<br>
    Learned our lessons through the tears<br>
    Made memories we knew would never fade<br>
    <br>
    One day my father—he told me<br>
    "Son, don't let it slip away"<br>
    He took me in his arms, I heard him say<br>
    <br>
    "When you get older<br>
    Your wild heart will live for younger days<br>
    Think of me if ever you're afraid"<br>
    <br>
    He said, "One day you'll leave this world behind<br>
    So, live a life you will remember"<br>
    My father told me when I was just a child<br>
    "These are the nights that never die"<br>
    My father told me<br>
    <br>
    "When thunder clouds start pouring down<br>
    Light a fire they can't put out<br>
    Carve your name into those shining stars"<br>
    He said, "Go venture far beyond the shores<br>
    Don't forsake this life of yours<br>
    I'll guide you home no matter where you are"<br>
    <br>
    One day my father—he told me<br>
    "Son, don't let it slip away"<br>
    When I was just a kid I heard him say<br>
    <br>
    "When you get older<br>
    Your wild heart will live for younger days<br>
    Think of me if ever you're afraid"<br>
    <br>
    He said, "One day you'll leave this world behind<br>
    So, live a life you will remember"<br>
    My father told me when I was just a child<br>
    "These are the nights that never die"<br>
    My father told me<br>
    <br>
    "These are the nights that never die"<br>
    My father told me<br>
    My father told me<br>`
);

var songData3 = new SongData(
    "7 Years",
    "Lukas Graham",
    "September 18, 2015.",
    "Pop and Soul.",
    `The lyrics of "7 Years" arerecounting various stages of Forchhammer's life and his hopes for the future. It explores personal growth, and the passage of time, emphasizing the importance of family, friends, and dreams.`,
    `Once, I was seven years old, my mama told me<br>
    "Go make yourself some friends, or you'll be lonely"<br>
    Once, I was seven years old<br>
    <br>
    It was a big, big world, but we thought we were bigger<br>
    Pushing each other to the limits, we were learning quicker<br>
    By eleven, smoking herb and drinking burning liquor<br>
    Never rich, so we were out to make that steady figure<br>
    <br>
    Once, I was eleven years old, my daddy told me<br>
    "Go get yourself a wife, or you'll be lonely"<br>
    Once, I was eleven years old<br>
    <br>
    I always had that dream like my daddy before me<br>
    So I started writing songs, I started writing stories<br>
    Something about that glory just always seemed to bore me<br>
    'Cause only those I really love will ever really know me<br>
    <br>
    Once, I was twenty years old, my story got told<br>
    Before the morning sun, when life was lonely<br>
    Once, I was twenty years old (Lukas Graham!)<br>
    <br>
    I only see my goals, I don't believe in failure<br>
    'Cause I know the smallest voices, they can make it major<br>
    I got my boys with me, at least those in favor<br>
    And if we don't meet before I leave, I hope I'll see you later<br>
    <br>
    Once, I was twenty years old, my story got told<br>
    I was writing 'bout everything I saw before me<br>
    Once, I was twenty years old<br>
    <br>
    Soon, we'll be thirty years old, our songs have been sold<br>
    We've traveled around the world and we're still roaming<br>
    Soon, we'll be thirty years old<br>
    <br>
    I'm still learning about life, my woman brought children for me<br>
    So I can sing them all my songs, and I can tell them stories<br>
    Most of my boys are with me, some are still out seeking glory<br>
    And some I had to leave behind, my brother, I'm still sorry<br>
    <br>
    Soon, I'll be sixty years old, my daddy got sixty-one<br>
    Remember life and then your life becomes a better one<br>
    I made a man so happy when I wrote a letter once<br>
    I hope my children come and visit once or twice a month<br>
    <br>
    Soon, I'll be sixty years old, will I think the world is cold?<br>
    Or will I have a lot of children who can warm me?<br>
    Soon, I'll be sixty years old<br>
    Soon, I'll be sixty years old, will I think the world is cold?<br>
    Or will I have a lot of children who can hold me?<br>
    Soon, I'll be sixty years old<br>
    <br>
    Once, I was seven years old, my mama told me<br>
    "Go make yourself some friends, or you'll be lonely"<br>
    Once I was seven years old<br>
    Once I was seven years old<br>`
);

var songData4 = new SongData(
    "Faded",
    "Alan Walker",
    "December 3, 2015.",
    "Electronic Dance Music (EDM)",
    `The song's lyrics explore feelings of loss, searching, and longing. The music video, visually complements these themes by depicting a lone traveler in a desolate and abandoned landscape, seeking a place he once called home.`,
    `You were the shadow to my light<br>
    Did you feel us<br>
    Another start<br>
    You fade away<br>
    Afraid our aim is out of sight<br>
    Wanna see us<br>
    Alive<br>
    <br>
    Where are you now<br>
    Where are you now<br>
    Where are you now<br>
    Was it all in my fantasy<br>
    Where are you now<br>
    Were you only imaginary<br>
    Where are you now<br>
    <br>
    Atlantis<br>
    Under the sea<br>
    Under the sea<br>
    Where are you now<br>
    Another dream<br>
    The monsters running wild inside of me<br>
    <br>
    I'm faded<br>
    I'm faded<br>
    So lost<br>
    I'm faded<br>
    I'm faded<br>
    So lost<br>
    I'm faded<br>
    <br>
    These shallow waters, never met<br>
    What I needed<br>
    I'm letting go<br>
    A deeper dive<br>
    Eternal silence of the sea<br>
    I'm breathing<br>
    Alive<br>
    <br>
    Where are you now<br>
    Where are you now<br>
    <br>
    Under the bright<br>
    But faded lights<br>
    You set my heart on fire<br>
    Where are you now<br>
    Where are you now<br>
    <br>
    Where are you now<br>
    Atlantis<br>
    Under the sea<br>
    Under the sea<br>
    Where are you now<br>
    Another dream<br>
    The monsters running wild inside of me<br>
    I'm faded<br>
    I'm faded<br>
    So lost<br>
    I'm faded<br>
    I'm faded<br>
    So lost<br>
    I'm faded<br>`
);

var songData5 = new SongData(
    "Waiting For Love",
    "Avicii",
    "May 22, 2015.",
    "Progressive House and Dance-Pop.",
    `The lyrics of "Waiting for Love" convey themes of hope, resilience, and the enduring power of love. It speaks to the idea of remaining hopeful and patient in the face of challenges, with the belief that love will ultimately prevail.`,
    `Where there's a will, there's a way, kind of beautiful<br>
    And every night has its day, so magical<br>
    And if there's love in this life, there's no obstacle<br>
    That can't be defeated<br>
    <br>
    For every tyrant a tear for the vulnerable<br>
    In every lost soul the bones of a miracle<br>
    For every dreamer a dream we're unstoppable<br>
    With something to believe in<br>
    <br>
    Monday left me broken<br>
    Tuesday I was through with hoping<br>
    Wednesday my empty arms were open<br>
    Thursday waiting for love, waiting for love<br>
    Thank the stars it's Friday<br>
    I'm burning like a fire gone wild on Saturday<br>
    Guess I won't be coming to church on Sunday<br>
    I'll be waiting for love, waiting for love<br>
    To come around<br>
    <br>
    We are one of a kind irreplaceable<br>
    How did I get so blind and so cynical<br>
    If there's love in this life we're unstoppable<br>
    No, we can't be defeated<br>
    <br>
    Monday left me broken<br>
    Tuesday I was through with hoping<br>
    Wednesday my empty arms were open<br>
    Thursday waiting for love, waiting for love<br>
    Thank the stars it's Friday<br>
    I'm burning like a fire gone wild on Saturday<br>
    Guess I won't be coming to church on Sunday<br>
    I'll be waiting for love, waiting for love<br>
    To come around<br>`
);

var songData6 = new SongData(
    "Fairy Tale",
    "Michael Wong",
    "January 21, 2005.",
    "Heartfelt and Melodic Style.",
    `The lyrics of "Tong Hua" tell a poignant love story, often compared to a fairy tale. The song's narrative revolves around the themes of enduring love, heartbreak, and the idealization of a perfect romance.`,
    `wang le you duo jiu zai mei ting dao ni <br>
    忘   了 有  多  久  再  没  听   到  你 <br>
    Forget how long did not hear you<br><br>
    dui wo shuo ni zui ai de gu shi <br>
    对  我 说   你 最  爱 的 故 事  <br>
    Tell me your favorite story<br><br>
    wo xiang le hen jiu wo kai shi huang le <br>
    我 想    了 很  久  我 开  始  慌    了 <br>
    I've been thinking about it for a long time and I'm beginning to panic<br><br>
    shi bu shi wo you zuo cuo le shen me <br>
    是  不 是  我 又  做  错  了 什   么 <br>
    Did I do something wrong again<br><br>
    ni ku zhe dui wo shuo <br>
    你 哭 着  对  我 说   <br>
    You cried to me<br><br>
    tong hua li dou shi pian ren de <br>
    童   话  里 都  是  骗   人  的 <br>
    Children are lying in the words<br><br>
    wo bu ke neng shi ni de wang zi <br>
    我 不 可 能   是  你 的 王   子 <br>
    I can't be your king<br><br>
    ye xu ni bu hui dong <br>
    也 许 你 不 会  懂   <br>
    Maybe you won't understand<br><br>
    cong ni shuo ai wo yi hou <br>
    从   你 说   爱 我 以 后<br>
    Ever since you said you loved me<br><br>
    wo de tian kong xing xing dou liang le <br>
    我 的 天   空   星   星   都  亮    了 <br>
    My sky, my stars, my stars are shining<br><br>
    wo yuan bian cheng tong hua li <br>
    我 愿   变   成    童   话  里 <br>
    I would like to become a child<br><br>
    ni ai de na ge tian shi <br>
    你 爱 的 那 个 天   使  <br>
    The angel you love<br><br>
    zhang kai shuang shou <br>
    张    开  双     手   <br>
    A double hand<br><br>
    bian cheng chi bang shou hu ni <br>
    变   成    翅  膀   守   护 你 <br>
    Become wings to protect you<br><br>
    ni yao xiang xin <br>
    你 要  相    信  <br>
    Do you want to believe<br><br>
    xiang xin wo men hui xiang tong hua gu shi li <br>
    相    信  我 们  会  像    童   话  故 事  里 <br>
    I believe we will talk like a child in the story<br><br>
    xing fu he kuai le shi jie ju <br>
    幸   福 和 快   乐 是  结  局<br>
    Happiness and cheerfulness are the last words<br><br>
    ni ku zhe dui wo shuo <br>
    你 哭 着  对  我 说   <br>
    You cried to me<br>
    tong hua li dou shi pian ren de <br><br>
    童   话  里 都  是  骗   人  的 <br>
    Children are lying in the words<br>
    wo bu ke neng shi ni de wang zi <br>
    我 不 可 能   是  你 的 王   子 <br>
    I can't be your king<br><br>
    ye xu ni bu hui dong <br>
    也 许 你 不 会  懂   <br>
    Maybe you won't understand<br><br>
    cong ni shuo ai wo yi hou <br>
    从   你 说   爱 我 以 后<br>
    Ever since you said you loved me<br><br>
    wo de tian kong xing xing dou liang le <br>
    我 的 天   空   星   星   都  亮    了 <br>
    My sky, my stars, my stars are shining<br><br>
    wo yuan bian cheng tong hua li <br>
    我 愿   变   成    童   话  里 <br>
    I would like to become a child<br><br>
    ni ai de na ge tian shi <br>
    你 爱 的 那 个 天   使  <br>
    The angel you love<br><br>
    zhang kai shuang shou <br>
    张    开  双     手   <br>
    A double hand<br><br>
    bian cheng chi bang shou hu ni <br>
    变   成    翅  膀   守   护 你 <br>
    Become wings to protect you<br><br>
    ni yao xiang xin <br>
    你 要  相    信  <br>
    Do you want to believe<br><br>
    xiang xin wo men hui xiang tong hua gu shi li <br>
    相    信  我 们  会  像    童   话  故 事  里 <br>
    I believe we will talk like a child in the story<br><br>
    xing fu he kuai le shi jie ju <br>
    幸   福 和 快   乐 是  结  局<br>
    Happiness and cheerfulness are the last words<br><br>
    wo yao bian cheng tong hua li <br>
    我 要  变   成    童   话  里 <br>
    I would like to become a child<br><br>
    ni ai de na ge tian shi <br><br>
    你 爱 的 那 个 天   使  
    The angel you love<br><br>
    zhang kai shuang shou <br>
    张    开  双     手   <br>
    A double hand<br><br>
    bian cheng chi bang shou hu ni <br>
    变   成    翅  膀   守   护 你 <br>
    Become wings to protect you<br><br>
    ni yao xiang xin <br>
    你 要  相    信  <br>
    Do you want to believe<br><br>
    xiang xin wo men hui xiang tong hua gu shi li <br>
    相    信  我 们  会  像    童   话  故 事  里 <br>
    I believe we will talk like a child in the story<br><br>
    xing fu he kuai le shi jie ju <br>
    幸   福 和 快   乐 是  结  局<br>
    Happiness and cheerfulness are the last words<br><br>
    wo hui bian cheng tong hua li <br>
    我 会  变   成    童   话  里 <br>
    I would like to become a child<br><br>
    ni ai de na ge tian shi <br>
    你 爱 的 那 个 天   使  <br>
    The angel you love<br><br>
    zhang kai shuang shou <br>
    张    开  双     手   <br>
    A double hand<br><br>
    bian cheng chi bang shou hu ni <br>
    变   成    翅  膀   守   护 你 <br>
    Become wings to protect you<br><br>
    ni yao xiang xin <br>
    你 要  相    信  <br>
    Do you want to believe<br><br>
    xiang xin wo men hui xiang tong hua gu shi li <br>
    相    信  我 们  会  像    童   话  故 事  里 <br>
    I believe we will talk like a child in the story<br><br>
    xing fu he kuai le shi jie ju <br>
    幸   福 和 快   乐 是  结  局<br>
    Happiness and cheerfulness are the last words<br><br>
    yi qi xie wo men de jie ju <br>
    一 起 写  我 们  的 结  局 <br>
    Write our ending together.<br><br>`
);

var songData7 = new SongData(
    "Laskar Pelangi",
    "Nidji",
    "September 26, 2008.",
    "Pop and Rock",
    `"Laskar Pelangi" carries themes of hope, perseverance, and the pursuit of dreams. The lyrics encourage listeners to overcome obstacles and keep striving for their goals. He uplifting message of the song has made it an anthem of motivation and inspiration in Indonesia.`,
    `Mimpi adalah kunci<br>
    Untuk kita menaklukkan dunia<br>
    Berlarilah tanpa lelah<br>
    Sampai engkau meraihnya<br>
    <br>
    Laskar pelangi<br>
    Takkan terikat waktu<br>
    Bebaskan mimpimu di angkasa<br>
    Warnai bintang di jiwa<br>
    <br>
    Menarilah dan terus tertawa<br>
    Walau dunia tak seindah surga<br>
    Bersyukurlah pada yang kuasa<br>
    Cinta kita di dunia<br>
    Selamanya<br>
    <br>
    Cinta kepada hidup<br>
    Memberikan senyuman abadi<br>
    Walau hidup kadang tak adil<br>
    Tapi cinta lengkapi kita<br>
    Oh-oh<br>
    <br>
    Laskar pelangi<br>
    Takkan terikat waktu<br>
    Jangan berhenti mewarnai<br>
    Jutaan mimpi di bumi<br>
    Oh<br>
    <br>
    Menarilah dan terus tertawa<br>
    Walau dunia tak seindah surga<br>
    Bersyukurlah pada yang kuasa<br>
    Cinta kita di dunia<br>
    Oh-oh<br>
    <br>
    Menarilah dan terus tertawa<br>
    Walau dunia tak seindah surga<br>
    Bersyukurlah pada yang kuasa<br>
    Cinta kita di dunia<br>
    Selamanya<br>
    Selamanya<br>
    <br>
    Laskar pelangi<br>
    Takkan terikat waktu<br>`
);

var songData8 = new SongData(
    "Betelgeuse",
    "Yuuri",
    "October 20, 2021.",
    "J-Pop",
    `"Betelgeuse" explores themes of love, longing, and the passage of time, using the metaphor of the star Betelgeuse to signify brightness and distance. The song's lyrics reflect on the transient nature of relationships and the enduring memories that remain.`,
    `Sora ni aru nanika wo mitsumetetara<br>
    Sore wa hoshi datte kimi ga oshiete kureta<br>
    Maru de sore wa bokura mitai ni yori sotteru<br>
    Sore wo naitari warattari tsunaide yuku<br>
    <br>
    Nan juukai nan byakkai butsukari atte<br>
    Nan juunen nan byakunen mukashi no hikari ga<br>
    Hoshi jishin mo wasureta koro ni<br>
    Bokura ni todoiteru<br>
    <br>
    Bokura mitsuke atte taguri atte onaji sora<br>
    Kagayaku no datte futari datte yakusoku shita<br>
    Haruka tooku owaranai beterugiusu<br>
    Dareka ni tsunagu mahou<br>
    Bokura kata narabete toriatte susundeku<br>
    Tsurai toki datte nakanai tte chikatta darou<br>
    Haruka tooku owaranai beterugiusu<br>
    Kimi ni mo mieru darou inori ga<br>
    <br>
    Kioku wo tadoru tabi yomigaeru yo<br>
    Kimi ga itsu datte soko ni ite kureru koto<br>
    Maru de sore wa hoshi no hikari to onaji you ni<br>
    Kyou ni naitari warattari tsunaide yuku<br>
    <br>
    Nan juukai nan byakkai butsukari atte<br>
    Nan juunen nan byakunen mukashi no hikari ga<br>
    Boku jishin mo wasureta koro ni<br>
    Bokura wo terashiteru<br>
    <br>
    Bokura mitsuke atte taguri atte onaji sora<br>
    Kagayaku no datte futari datte yakusoku shita<br>
    Haruka tooku owaranai beterugiusu<br>
    Dareka ni tsunagu mahou<br>
    <br>
    Doko made itsu made iki rareru ka<br>
    Kimi ga fuan ni naru tabi ni tsuyogarunda<br>
    Daijoubu boku ga yoko ni iru yo<br>
    Mienai sen wo tsunagou<br>
    <br>
    Bokura mitsuke atte taguri atte onaji sora<br>
    Kagayaku no datte futari datte yakusoku shita<br>
    Haruka tooku owaranai beterugiusu<br>
    Dareka ni tsunagu mahou<br>
    Bokura kata narabete toriatte susundeku<br>
    Tsurai toki datte futari datte chikatta darou<br>
    Haruka tooku owaranai beterugiusu<br>
    Kimi ni mo mieru darou inori ga<br>
    <br>
    Sora ni aru nanika wo mitsumetetara<br>
    Sore wa hoshi datte kimi ga oshiete kureta<br>
    `
);

var array = [
    songData1, 
    songData2, 
    songData3,
    songData4,
    songData5,
    songData6,
    songData7,
    songData8
];

var mark = Number(localStorage.getItem("songItem"));

console.log(mark);

var currMusic = "../assets/audio/Song " + array[mark].title + ".mp3";
var currImage = "../assets/img/Song-" + array[mark].title + ".jpg";
var currTitle = array[mark].title;
var currArtist = array[mark].artist;
var currReleaseYear = array[mark].releaseYear;
var currGenre = array[mark].genre;
var currThemes = array[mark].themes;
var currLyric = array[mark].lyric;