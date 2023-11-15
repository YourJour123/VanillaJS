const buttonPause = document.getElementById("button-pause");
const buttonPlay = document.getElementById("button-play");

function toggleButtons() {
  buttonPause.classList.toggle("hidden");
  buttonPlay.classList.toggle("hidden");
}

buttonPause.classList.add("hidden");

buttonPlay.addEventListener("click", toggleButtons);
buttonPause.addEventListener("click", toggleButtons);
