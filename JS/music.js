const musicTitle = document.querySelector("#music-title span");
const prevButton = document.querySelector("#prev-button");
const playPauseButton = document.querySelector("#play-pause-button");
const nextButton = document.querySelector("#next-button");
const volumeSlider = document.querySelector("#volume-slider");

// 음악 파일 및 제목 정보
const playlist = [
  { title: "wave to earth - bonfire", file: "wave to earth - bonfire.mp4" },
  {
    title: "wave to earth - ocean floor",
    file: "wave to earth - ocean floor.mp4",
  },
  { title: "wave to earth - light", file: "wave to earth - light.mp4" },
  // 더 많은 음악 추가
];

let currentSongIndex = 0;
let isPlaying = false;

// Audio 요소 생성
const audio = new Audio(playlist[currentSongIndex].file);

// 음악 재생/일시정지 함수
function togglePlayPause() {
  if (isPlaying) {
    audio.pause();
    playPauseButton.innerHTML = '<i class="fa-solid fa-play"></i>';
  } else {
    audio.play();
    playPauseButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
  }
  isPlaying = !isPlaying;
}

// 다음 곡 재생 함수
function playNextSong() {
  currentSongIndex = (currentSongIndex + 1) % playlist.length;
  playSong(currentSongIndex);
}

// 이전 곡 재생 함수
function playPreviousSong() {
  currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
  playSong(currentSongIndex);
}

// 특정 곡 재생 함수
function playSong(index) {
  audio.src = playlist[index].file;
  musicTitle.innerText = playlist[index].title;
  audio.play();
  isPlaying = true;
  playPauseButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
}

// 초기 곡 재생
playSong(currentSongIndex);

// Event Listeners
playPauseButton.addEventListener("click", togglePlayPause);
nextButton.addEventListener("click", playNextSong);
prevButton.addEventListener("click", playPreviousSong);
volumeSlider.addEventListener("input", () => {
  audio.volume = volumeSlider.value / 100;
});
