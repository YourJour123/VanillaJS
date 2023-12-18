const currentClock = document.getElementById("time");

const vancouver = new Audio("MUSIC/Big Naughty - Vancouver.mp3");
const skit = new Audio("MUSIC/Giriboy - Skit.mp3");
const tikTakTok = new Audio("MUSIC/Silica Gel - T + Tik Tak Tok.mp3");
const materialGirl = new Audio("MUSIC/The Volunteers - MaterialGirl.mp3");
const summer = new Audio("MUSIC/The Volunteers - Summer.mp3");
const bonfire = new Audio("MUSIC/Wave to earth - bonfire.mp3");
const calla = new Audio("MUSIC/Wave to earth - calla.mp3");
const light = new Audio("MUSIC/Wave to earth - Light.mp3");
const oceanFloor = new Audio("MUSIC/Wave to earth - ocean floor.mp3");

const prevBtn = document.getElementById("previous-music-button");
const playBtn = document.getElementById("music-play-button");
const nextBtn = document.getElementById("next-music-button");
const playPauseIcon = document.getElementById("music-play-icon");
const volUpBtn = document.getElementById("volume-up-button");
const volDownBtn = document.getElementById("volume-down-button");

const songName = document.getElementById("music-name-title");
const songArtist = document.getElementById("music-artist-name");

const songCurrentTime = document.getElementById("current-time");
const songTotalDuration = document.getElementById("total-duration");
const listbar = document.getElementById("time-bar-inside");

const songs = [
  { ele: vancouver, audioName: "Vancouver", artistName: "Big Naughty" },
  { ele: skit, audioName: "Skit", artistName: "Giriboy" },
  { ele: tikTakTok, audioName: "T + Tik Tak Tok", artistName: "Silica Gel" },
  {
    ele: materialGirl,
    audioName: "MaterialGirl",
    artistName: "The Volunteers",
  },
  { ele: summer, audioName: "Summer", artistName: "The Volunteers" },
  { ele: bonfire, audioName: "bonfire", artistName: "Wave to earth" },
  { ele: calla, audioName: "calla", artistName: "Wave to earth" },
  { ele: light, audioName: "Light", artistName: "Wave to earth" },
  { ele: oceanFloor, audioName: "ocean floor", artistName: "Wave to earth" },
];

for (const song of songs) {
  song.ele.addEventListener("ended", () => {
    updateSong("next");
    playPausesong();
  });
}

let current = 0;
let currentSong = songs[current].ele;
songName.innerText = songs[current].audioName;
songArtist.innerText = songs[current].artistName;
currentSong.volume = 0.1;

playBtn.addEventListener("click", () => {
  playPausesong();
});

nextBtn.addEventListener("click", () => {
  updateSong("next");
  playPausesong();
});

prevBtn.addEventListener("click", () => {
  updateSong("prev");
  playPausesong();
});

const updateSong = (action) => {
  savedVolume = currentSong.volume;
  currentSong.pause();
  currentSong.currentTime = 0;

  if (action === "next") {
    current++;
    if (current > songs.length - 1) current = 0;
  }
  if (action === "prev") {
    current--;
    if (current < 0) current = songs.length - 1;
  }
  currentSong = songs[current].ele;
  songName.innerText = songs[current].audioName;
  songArtist.innerText = songs[current].artistName;
  currentSong.volume = savedVolume;
  updateTotalDuration();
};

const playPausesong = () => {
  if (currentSong.paused) {
    currentSong.play();
    playPauseIcon.className = "fa-solid fa-pause";
  } else {
    currentSong.pause();
    playPauseIcon.className = "fa-solid fa-play";
  }
};

volUpBtn.addEventListener("click", () => {
  if (currentSong.volume < 1.0) {
    currentSong.volume = parseFloat((currentSong.volume + 0.1).toFixed(1));
  }
});

volDownBtn.addEventListener("click", () => {
  if (currentSong.volume > 0) {
    currentSong.volume = parseFloat((currentSong.volume - 0.1).toFixed(1));
  }
});

function setTimeFormat(time) {
  const number = parseInt(time);
  const minutes = String(Math.floor(number / 60)).padStart(2, "0");
  const seconds = String(Math.floor(number - minutes * 60)).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function currentTime() {
  const musictime = Math.floor(currentSong.currentTime);
  songCurrentTime.innerHTML = setTimeFormat(musictime);
}

function playlistBar(e) {
  const timeduration = currentSong.duration;
  const timecurrenttime = currentSong.currentTime;
  const timeset = (timecurrenttime / timeduration) * 100;
  listbar.style.width = `${timeset}%`;
}

const updateTotalDuration = () => {
  const totalDuration = currentSong.duration;
  songTotalDuration.innerText = setTimeFormat(totalDuration);
};

const initAudio = () => {
  currentSong.addEventListener("loadeddata", () => {
    updateTotalDuration();
  });
};

initAudio();
currentTime();

currentSong.addEventListener("timeupdate", playlistBar);

setInterval(() => {
  currentTime();
  playlistBar();
}, 1000);

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  currentClock.innerText = `${hours}:${minutes}`;
}

getClock();
setInterval(getClock, 1000);
