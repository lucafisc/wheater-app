import { pubsub } from "./pubsub.js";

export const getTemperature = () => {
  pubsub.subscribe("new-city", (city) => {
    getForecast(city);
  });
};

const apikey = "9486ff66fc7c11980fc9ee8c66c285ca";

async function getForecast(city) {
  // const currentURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apikey}`;

  const latlonURL = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apikey}`;
  try {
    let responseGeo = await fetch(latlonURL, { mode: "cors" });
    let geo = await responseGeo.json();
    let lat = geo[0].lat;
    let lon = geo[0].lon;
    let forecastURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts,minutely&units=metric&appid=${apikey}`;
    let responseWeather = await fetch(forecastURL, { mode: "cors" });
    let data = await responseWeather.json();
    pubsub.publish("new-data", data);
  } catch (error) {
    console.log(error);
  }
}

// async function getForecast(currentData) {

//   try {
//     let response = await fetch(forecastURL, { mode: "cors" });
//     let json = await response.json();
//     console.log(json);
//   } catch (error) {
//     console.log(error);
//   }
// }
