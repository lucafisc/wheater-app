import { pubsub } from "./pubsub.js";

import { format, parseISO, formatISO } from "date-fns";

export const checkData = () => {
  pubsub.subscribe("new-data", (data) => {
    extractData(data);
  });
};

function extractData(data) {
  console.log(data);

  let localTime = new Date().toLocaleString("de-DE", {
    timeZone: data.timezone,
    timeStyle: "short",
  });
  localTime = parseInt(localTime.slice(0, 2));

  let localDay = new Date().toLocaleString("en-US", {
    timeZone: data.timezone,
    dateStyle: "full",
  });
  localDay = localDay.slice(0, 3);
  console.log(localDay);
  console.log(localTime);

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
    time: localTime,
    day: localDay,
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

const tempFactory = ({
  current = "",
  daily = "",
  hourly = "",
  time = "",
  day = "",
}) => ({
  current,
  daily,
  hourly,
  time,
  day,
});
