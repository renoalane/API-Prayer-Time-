function prayerTime(latitude, longitude) {
  fetch("http://api.aladhan.com/v1/calendar?latitude=" + latitude + "&longitude=" + longitude + "&method=2")
    .then((response) => response.json())
    .then(function (response) {
      let date = new Date();
      let today = date.getDate() - 1;
      let data = response.data[today].timings;

      let app = document.querySelector("#app");
      let table = document.createElement("table");
      let tableTbody = document.createElement("tbody");

      for (i in data) {
        let row = tableTbody.insertRow();
        let name = row.insertCell(0);
        let time = row.insertCell(1);
        name.innerHTML = i;
        time.innerHTML = data[i];

        tableTbody.appendChild(row);
      }
      table.appendChild(tableTbody);
      app.appendChild(table);
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
