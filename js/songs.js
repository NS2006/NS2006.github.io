const playBtn = document.getElementById("play");
const backwardBtn = document.getElementById("backward");
const forwardBtn = document.getElementById("forward");

const title = document.getElementById("title");
const artist = document.getElementById("artist");

const a = document.getElementById("popular-href");
const img = document.getElementById("popular-img");
const music = document.getElementById("music");

class Song{
    constructor(title, artist){
        this.title = title;
        this.artist = artist;
        this.img = "../assets/img/Song-" + title + ".jpg";
        this.music = "../assets/audio/Song " + title + ".mp3";
    }
}

function setSong(song, mark){
    isPlay = false;
    music.pause();
    playBtn.innerHTML = `<img src="../assets/img/Icon Play.png" alt="Icon Play">`;
    if(title.classList.contains("moveInfinite")){
        title.classList.remove("moveInfinite");
    }


    title.textContent = song.title;
    artist.textContent = song.artist;
    img.src = song.img;
    music.src = song.music;

    if(mark === -1){
        img.classList.add("moveRight");
        setTimeout(()=>{
            img.classList.remove("moveRight");
        }, 1000)
    } else{
        img.classList.add("moveLeft");
        setTimeout(()=>{
            img.classList.remove("moveLeft");
        }, 1000)
    }
}

var array = [new Song("Hall Of Fame", "The Script ft.Will.I.Am"), new Song("7 Years", "Lukas Graham"), new Song("Faded", "Alan Walker"), new Song("Waiting For Love", "Avicii"), new Song("The Nights", "Avicii"), new Song("Fairy Tale", "Michael Wong"), new Song("Betelgeuse", "Yuuri"), new Song("Laskar Pelangi", "Nidji")];
var count = 0;
var length = array.length;
var isPlay = false;

backwardBtn.onclick = () => {
    count = count === 0 ? length - 1 : count-1;
    setSong(array[count], -1);
};

forwardBtn.onclick = () => {
    count = count === length-1 ? 0 : count+1;
    setSong(array[count], 1);
};

playBtn.onclick = () => {
    if(isPlay === false){
        playBtn.innerHTML = `<img src="../assets/img/Icon Pause.png" alt="Icon Pause">`;
        music.play();
    } else{
        playBtn.innerHTML = `<img src="../assets/img/Icon Play.png" alt="Icon Play">`;
        music.pause();
    }
    
    title.classList.toggle("moveInfinite");
    isPlay = isPlay === false ? true : false;
}
