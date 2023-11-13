const musicPlay = document.querySelector(".fa-solid fa-play");
const musicPause = document.querySelector(".fa-solid fa-pause");

const HIDDEN_CLASSNAME = "hidden";

function changeIcons(event) {
  event.preventDefault();
  musicPlay.classList.add(HIDDEN_CLASSNAME);
  musicPause.classList.remove(HIDDEN_CLASSNAME);
}
