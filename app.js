function prayerTime(latitude, longitude) {
  fetch("http://api.aladhan.com/v1/calendar?latitude=" + latitude + "&longitude=" + longitude + "&method=2")
    .then((response) => response.json())
    .then(function (response) {
      console.log(response.data[0].timings);
    });
}

function succes(position) {
  prayerTime(position.coords.latitude, position.coords.longitude);
}

function error() {
  alert("Posisi tidak dapat diakses");
}

function userLocation() {
  if (!navigator.geolocation) {
    alert("Geo Location Tidak didukung didalam Browser Anda, Silahkan gunakan browser lain");
  } else {
    navigator.geolocation.getCurrentPosition(succes, error);
  }
}

function index() {
  let app = document.querySelector("#app");
  let h3 = document.createElement("h3");
  h3.innerHTML = "Prayer Times";

  app.appendChild(h3);
  userLocation();
}

index();
