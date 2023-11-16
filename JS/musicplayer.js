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
const titleSpan = document.getElementById("song"); // 변경된 부분

function buttonHandler() {
  buttonPause.classList.toggle("hidden");
  buttonPlay.classList.toggle("hidden");
}

buttonPause.classList.add("hidden");

const audio = document.querySelector("#music-player audio");
audio.volume = 0.1;

function playMusic(index) {
  audio.src = playlist[index].songfile; // 선택한 노래로 변경
  audio.play();
  buttonHandler();

  // 앨범 이미지, 아티스트, 노래 제목 설정
  musicCover.innerHTML = `<img src="${playlist[index].album}" />`;
  artistSpan.textContent = playlist[index].artist;
  titleSpan.textContent = playlist[index].title;
}

buttonPlay.addEventListener("click", function () {
  playMusic(0); // 처음 곡으로 재생
});

buttonPause.addEventListener("click", function () {
  audio.pause();
  buttonHandler();
});

// 음악이 재생 중일 때 버튼을 설정
audio.addEventListener("play", function () {
  buttonPause.classList.remove("hidden");
  buttonPlay.classList.add("hidden");
});

// 음악이 일시 중지되었을 때 버튼을 설정
function handlePause() {
  buttonPause.classList.add("hidden");
  buttonPlay.classList.remove("hidden");
}

audio.addEventListener("pause", handlePause);

// 플레이 리스트의 각 항목에 대해 이벤트 리스너 등록
playlist.forEach((song, index) => {
  const playButton = document.createElement("button");
  playButton.innerText = `Play ${song.title}`;
  playButton.addEventListener("click", function () {
    playMusic(index);
  });
  document.body.appendChild(playButton);
});
