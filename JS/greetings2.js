const clock = document.querySelector("h2#clock");
const greeting = document.querySelector("#greeting");

function getClock() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clock.innerText = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  updateGreetings(hours);
}

function updateGreetings(hours) {
  let greetings = "";

  if (hours >= 22 && hours < 6) {
    greetings = "Good night";
  } else if (hours >= 6 && hours < 12) {
    greetings = "Good morning";
  } else if (hours >= 12 && hours < 18) {
    greetings = "Good afternoon";
  } else {
    greetings = "Good evening";
  }

  greeting.innerText = `${greetings}, ${username}`;
}

getClock();
setInterval(getClock, 1000);
