const images = [
  "background1.gif",
  "background2.gif",
  "background3.gif",
  "background4.gif",
  "background5.gif",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `IMG/${chosenImage}`;
bgImage.id = "background-image";

document.body.appendChild(bgImage);
