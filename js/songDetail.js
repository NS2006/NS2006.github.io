const lyricBtn = document.getElementById("lyricBtn");
const lyricAnimation = document.querySelector(".container-song .right .lyric");

const playBtn = document.getElementById("playBtn");
const music = document.getElementById("music");

lyricBtn.onclick = function(){
    console.log("Lyric Btn get click")
    if(lyricAnimation.style.maxWidth === "100%"){
        lyricAnimation.style.maxWidth = "0%";
        setTimeout(() => {
            lyricAnimation.style.display = "none";
            lyricBtn.textContent = ">>";
        }, 2000);
    } else{
        lyricAnimation.style.display = "grid";
        setTimeout(() => {
            lyricAnimation.style.maxWidth = "100%";
        }, 100);

        setTimeout(()=>{
            lyricBtn.textContent = "<<";
        }, 1900);
    }
};

var isPlay = false;
playBtn.onclick = function(){
    if(isPlay == false){
        playBtn.innerHTML = `
        <img src="../assets/img/Icon Pause.png" alt="Icon Pause">
        <h3>Pause</h3>
        `;
        music.play();
        isPlay = true;
    } else{
        playBtn.innerHTML = `
        <img src="../assets/img/Icon Play.png" alt="Icon Play">
        <h3>Play</h3>
        `;
        music.pause();
        isPlay = false;
    }
};

//Get Data
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const releaseYear = document.getElementById("release-year");
const genre = document.getElementById("genre"); 
const themes = document.getElementById("themes");
const lyric = document.getElementById("lyric");
const image = document.getElementById("image");

title.textContent = currTitle;
artist.textContent = currArtist;
releaseYear.textContent = "Release Year: " + currReleaseYear;
genre.textContent = "Genre: " + currGenre;
themes.textContent = "Themes:" + currThemes;
lyric.innerHTML = currLyric;
image.src = currImage;
music.src = currMusic;