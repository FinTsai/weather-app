/*
  WEATHER APP:

  1. Log out the current temperature for Sydney's latitude and longitude
    (hint: complete the getWeather function, returning a promise with the result from the API call, use that promise to then log the result)
  2. Convert the temperature from kelvin to degrees celsius
  3. Add a form on index.html that allows a user to search for any city's weather and logs out the result.
    (hint: google maps api from previous example)
  4. Display the result of the users search on the DOM.
  5. Display the type of weather too (cloudy, sunny, etc -- check the response)

  --BONUS ROUND--
  6. Add a loading indicator until you're ready to display the information for the city.
  7. Make it pretty, ideas:
    * Change the background of the page to reflect the temperature
    * Add pictures to represent the type of weather -- clouds, the sun, etc.
    * Request a new temperature every few minutes (hint: setInterval)
    * Animate when the weather changes.
    *


*/

let weatherUrl = "http://api.openweathermap.org/data/2.5/weather";
let apiKey = "72af66db614bf9fd03583352142dd7a7";


function getWeather(cityName) {
  let url = `${weatherUrl}?q=${cityName}&APPID=${apiKey}`
  fetch(url)
    .then((res) => res.json())
    .then((dataResJson) => {
      let currentKelvinTemp = dataResJson.main.temp
      let celsiusTemp = convertKelvinToCelsius(currentKelvinTemp)
      console.log(`The current temperature is ${celsiusTemp}°C`)
    })
}

getWeather('sydney')

function convertKelvinToCelsius(kelvinTemp) {
  return kelvinTemp - 273.15
}
