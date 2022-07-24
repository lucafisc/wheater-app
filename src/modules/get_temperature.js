import { pubsub } from "./pubsub.js";

export const getTemperature = () => {
  pubsub.subscribe("new-city", (city) => {
    getCurrent(city);
  });
};

const apikey = "9486ff66fc7c11980fc9ee8c66c285ca";

async function getCurrent(city) {
  const currentURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apikey}`;

  try {
    let response = await fetch(currentURL, { mode: "cors" });
    let json = await response.json();
    pubsub.publish("new-temperature", json);
  } catch (error) {
    console.log(error);
  }
}
