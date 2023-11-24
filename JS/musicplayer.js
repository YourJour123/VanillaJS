const playlist = [
  {
    album: "MUSIC/Big Naughty - Vancouver.jpg",
    artist: "Big Naughty",
    song: "Vancouver",
    songfile: "MUSIC/Big Naughty - Vancouver.mp3",
  },
  {
    album: "MUSIC/Giriboy - Skit.jpg",
    artist: "Giriboy",
    song: "Skit",
    songfile: "MUSIC/Giriboy - Skit.mp3",
  },
  {
    album: "MUSIC/Silica Gel - T + Tik Tak Tok.jpg",
    artist: "Silica Gel",
    title: "T + Tik Tak Tok",
    songfile: "MUSIC/Silica Gel - T + Tik Tak Tok.mp3",
  },
  {
    album: "MUSIC/The Volunteers - MaterialGirl.jpg",
    artist: "The Volunteers",
    title: "MaterialGirl",
    songfile: "MUSIC/The Volunteers - MaterialGirl.mp3",
  },
  {
    album: "MUSIC/The Volunteers - Summer.jpg",
    artist: "The Volunteers",
    title: "Summer",
    songfile: "MUSIC/The Volunteers - Summer.mp3",
  },
  {
    album: "MUSIC/Wave to earth - bonfire.jpg",
    artist: "Wave to earth",
    title: "bonfire",
    songfile: "MUSIC/Wave to earth - bonfire.mp3",
  },
  {
    album: "MUSIC/Wave to earth - calla.jpg",
    artist: "Wave to earth",
    title: "calla",
    songfile: "MUSIC/Wave to earth - calla.mp3",
  },
  {
    album: "MUSIC/Wave to earth - Light.jpg",
    artist: "Wave to earth",
    title: "Light",
    songfile: "MUSIC/Wave to earth - Light.mp3",
  },
  {
    album: "MUSIC/Wave to earth - ocean floor.jpg",
    artist: "Wave to earth",
    title: "ocean floor",
    songfile: "MUSIC/Wave to earth - ocean floor.mp3",
  },
];

const buttonPause = document.getElementById("button-pause");
const buttonPlay = document.getElementById("button-play");

const musicCover = document.getElementById("music-cover");
const artistSpan = document.getElementById("artist");
const titleSpan = document.getElementById("song");

function buttonHandler() {
  buttonPause.classList.toggle("hidden");
  buttonPlay.classList.toggle("hidden");
}

buttonPause.classList.add("hidden");

const audio = document.querySelector("#music-player audio");
audio.volume = 0.1;
