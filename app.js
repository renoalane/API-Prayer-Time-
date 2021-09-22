function succes(position) {
  console.log(position);
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
