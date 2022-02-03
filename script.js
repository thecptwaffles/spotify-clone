const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.getElementById('audio');
const progress = document.querySelector('#progress');
const progressContainer = document.querySelector('.progress-container');

const title = document.getElementById('title');


// Song titles
const songs = ['Case', 'go', 'space'];

// Keep track of song
let songIndex = 0;

// Initially load song details into DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
}

function playSong () {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play()
}

function pauseSong () {

    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause()
}

function prevSong() {
    songIndex--

    if(songIndex < 0) {
        songIndex = songs.length - 1
    }

    loadSong(songs[songIndex])

    playSong()
}

function nextSong() {
    songIndex++

    if(songIndex > songs.length -1) {
        songIndex = 0
    }

    loadSong(songs[songIndex])

    playSong()
}

function updateProgress(e) {
  console.log(e.srcElement.currentTime)
}
//event listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');

    if(isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})

//change song event listeners
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

audio.addEventListener('timeUpdate', updateProgress)


