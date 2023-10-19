const API_KEY = "309df4c7b7c9ef43d25ecb8d9da562dd";

function onGeo(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log(`현재 위치: 위도 ${lat}, 경도 ${lon}`);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-Child");
      const city = document.querySelector("#weather span:last-Child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main}`;
    });
}

function onGeoError() {
  alert("error");
}

navigator.geolocation.getCurrentPosition(onGeo, onGeoError);
