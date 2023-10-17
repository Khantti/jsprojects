const userLocation = document.querySelector(".location");
const btn = document.querySelector(".btn");


btn.addEventListener("click", () => {
  // console.log(navigator.geolocation.getCurrentPosition());
  navigator.geolocation.getCurrentPosition(showPosition);
});

function showPosition(position) {
  userLocation.innerHTML = `
        Latitude: ${position.coords.latitude} <br>
        Longitude: ${position.coords.longitude}
    `;
  // console.log(position.coords);

}