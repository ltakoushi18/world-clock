function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");
  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");

  let jakartaElement = document.querySelector("#jakarta");
  let jakartaDateElement = jakartaElement.querySelector(".date");
  let jakartaTimeElement = jakartaElement.querySelector(".time");
  let jakartaTime = moment().tz("Europe/jakarta");
  jakartaDateElement.innerHTML = jakartaTime.format("MMMM Do YYYY");
  jakartaTimeElement.innerHTML = jakartaTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
function updateCity(event) {
  let selectedCityTimeZone = event.target.value;
  if (selectedCityTimeZone === "current") {
    selectedCityTimeZone = moment.tz.guess();
  }
  let cityName = selectedCityTimeZone.replace("_", " ").split("/")[1];
  let selectedCityTime = moment().tz(selectedCityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
        <div>
        <h2>${cityName}</h2>
      <div class="date">${selectedCityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">${selectedCityTime.format(
        "h:mm:ss"
      )}<small>${selectedCityTime.format(" A")}</small></div>
      </div>
        `;
}
updateTime();
setInterval(updateTime, 1000);

let selectedCity = document.querySelector("#selected-city");
selectedCity.addEventListener("change", updateCity);
