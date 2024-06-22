const greetingText = document.getElementById("greeting-text");
const timeText = document.getElementById("time");

const descriptionWillify = document.getElementById("description-willify");

const playlistContent = document.querySelector(".playlist .content");
let playlists = document.querySelectorAll(".playlist .card");

const favorites = document.querySelectorAll(".favorite .card button");
const recents = document.querySelectorAll(".recent .card button");

function setGreetingText(){
    const date = new Date();
    let hour = date.getHours();

    if(hour >= 0 && hour < 11){
        greetingText.textContent = "Good Morning";
    } else if(hour >= 11 && hour < 18){
        greetingText.textContent = "Good Afternoon";
    } else {
        greetingText.textContent = "Good Evening";
    }

    greetingText.textContent += ", Guest";
};
setGreetingText();


function setTime(){
    const date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    h = h.toString().padStart(2,0);
    m = m.toString().padStart(2,0);
    s = s.toString().padStart(2,0);

    timeText.textContent = `${h} : ${m} : ${s}`;
};
setInterval(setTime, 1000);


function setDescriptionWillify(){
    let desc = [
        "Did you know? Willify, founded by Niko Sutiono in 2006, revolutionized the music streaming industry with its user-friendly interface and extensive music library, quickly becoming a leader in the field.", 
        "Willify's advanced algorithms provide highly personalized music recommendations, ensuring that users discover new music that perfectly matches their tastes.", 
        "Since its launch, Willify has maintained its position as one of the best music streaming apps globally, continually enhancing user engagement and music discovery experiences.", 
        "Willify's diverse music library not only includes millions of songs across various genres but also a vast collection of podcasts, making it a comprehensive platform for all audio entertainment needs.", 
        "Willify's commitment to high-quality audio ensures that users enjoy an exceptional listening experience, whether they're streaming their favorite tracks or exploring new artists and genres."
    ]

    let random = Math.floor(Math.random() * desc.length);

    descriptionWillify.textContent = desc[random];
};
setDescriptionWillify();

function addNewPlaylist(){
    let title = window.prompt("Please input new playlist's title");

    let len = playlists.length;

    playlistContent.innerHTML = "";
    for(let i = 0; i < len-1; i++){
        playlistContent.innerHTML += `
        <div class="card">
            <button type="button">
                ${playlists[i].textContent}
            </button>
        </div>
        `;
    }

    playlistContent.innerHTML += `
    <div class="card">
        <button type="button">
            ${title}
        </button>
    </div>
    
    <div class="card">
        <button type="button" onclick="addNewPlaylist()">
            + Create New
        </button>
    </div>
    `;

    playlists = document.querySelectorAll(".playlist .card");
};

favorites.forEach((favorite) => {
    const imgWrapper = favorite.querySelector(".img-wrapper");

    favorite.addEventListener("mouseenter", ()=>{
        imgWrapper.classList.add("rotate");
    });

    favorite.addEventListener("mouseleave", ()=>{
        imgWrapper.classList.remove("rotate");
    });
});

recents.forEach((recent) => {
    const imgWrapper = recent.querySelector(".img-wrapper");

    recent.addEventListener("mouseenter", ()=>{
        imgWrapper.classList.add("rotate");
    });

    recent.addEventListener("mouseleave", ()=>{
        imgWrapper.classList.remove("rotate");
    });
});