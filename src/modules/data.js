import { pubsub } from "./pubsub.js";

export const checkData = () => {
  pubsub.subscribe("new-data", (data) => {
    extractData(data);
  });
};

function extractData(data) {
  console.log(data);
  let currentTemp = Math.round(data.current.temp);

  let dailyForecast = [];
  for (let i = 0; i < 6; i++) {
    let temp = Math.round(data.daily[i].temp.day);
    dailyForecast.push(temp);
  }

  let hourlyForecast = [];
  for (let i = 0; i < 23; i++) {
    let temp = Math.round(data.hourly[i].temp);
    hourlyForecast.push(temp);
  }

  const tempList = tempFactory({
    current: currentTemp,
    daily: dailyForecast,
    hourly: hourlyForecast,
  });

  pubsub.publish("render", tempList);
}

function convert(tempInK) {
  const kelvins = 273.15;
  const tempUnits = "celcius";
  if (tempUnits === "celcius") {
    let tempInC = tempInK - kelvins;
    return Math.round(tempInC);
  }
}

const tempFactory = ({ current = "", daily = "", hourly = "" }) => ({
  current,
  daily,
  hourly,
});
