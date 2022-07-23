import { pubsub } from "./pubsub.js";

export const getTemperature = () => {
  pubsub.subscribe("new-city", (city) => {
    getJson(city);
  });
};

async function getJson(city) {
  try {
    let response = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&APPID=9486ff66fc7c11980fc9ee8c66c285ca"
    );
    let json = await response.json();
    pubsub.publish("new-temperature", json);
  } catch (error) {
    console.log(error);
  }
}
