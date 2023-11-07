const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintingGreetings(username);
}

function paintingGreetings(username) {
  const Hour = new Date().getHours();
  let greetingMessage = "";

  if (Hour >= 22 || Hour < 6) {
    greetingMessage = "Good night";
  } else if (Hour >= 6 && Hour < 12) {
    greetingMessage = "Good morning";
  } else if (Hour >= 12 && Hour < 18) {
    greetingMessage = "Good afternoon";
  } else {
    greetingMessage = "Good evening";
  }

  greeting.innerText = `${greetingMessage} ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
  hideGreeting();
} else {
  paintingGreetings(savedUsername);
}

setInterval(function () {
  const savedUsername = localStorage.getItem(USERNAME_KEY);
  if (savedUsername) {
    paintingGreetings(savedUsername);
  } else {
    hideGreeting();
  }
}, 1000);
