const images = ["IMG1.jpg", "IMG2.jpg", "IMG3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `IMG/${chosenImage}`;

document.body.appendChild(bgImage);
