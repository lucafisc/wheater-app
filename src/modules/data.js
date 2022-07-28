import { pubsub } from "./pubsub.js";

import { format, parseISO, formatISO } from "date-fns";

const daysOfWeek = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

export const checkData = () => {
  pubsub.subscribe("new-data", (data) => {
    extractData(data);
  });
};

function extractData(data) {
  let localTime = new Date().toLocaleString("de-DE", {
    timeZone: data.timezone,
    timeStyle: "short",
  });
  localTime = parseInt(localTime.slice(0, 2));

  let localDay = new Date().toLocaleString("en-US", {
    timeZone: data.timezone,
    dateStyle: "full",
  });
  localDay = localDay.slice(0, 3).toLowerCase();
  const index = daysOfWeek.findIndex((i) => i === localDay) + 1;
  let currentWeek = daysOfWeek.slice(index);
  let remainingDays = daysOfWeek.slice(0, index);
  remainingDays.forEach((day) => currentWeek.push(day));

  let currentTemp = Math.round(data.current.temp);
  let iconCode = data.current.weather[0].icon;

  let dailyMax = [];
  let dailyMin = [];
  let dailyIcons = [];
  for (let i = 0; i < 7; i++) {
    let min = Math.round(data.daily[i].temp.min);
    let max = Math.round(data.daily[i].temp.max);
    dailyMax.push(max);
    dailyMin.push(min);
    dailyIcons.push(data.daily[i].weather[0].icon);
  }

  let hourlyForecast = [];
  let hourlyIcons = [];
  for (let i = 0; i < 23; i++) {
    let temp = Math.round(data.hourly[i].temp);
    hourlyForecast.push(temp);
    hourlyIcons.push(data.hourly[i].weather[0].icon);
  }

  const tempList = tempFactory({
    current: currentTemp,
    iconCode: iconCode,
    dailyMax: dailyMax,
    dailyMin: dailyMin,
    dailyIcons: dailyIcons,
    hourly: hourlyForecast,
    hourlyIcons: hourlyIcons,
    time: localTime,
    week: currentWeek,
  });
  pubsub.publish("render", tempList);
}

const tempFactory = ({
  current = "",
  iconCode = "",
  dailyMax = "",
  dailyMin = "",
  dailyIcons = "",
  hourly = "",
  hourlyIcons = "",
  time = "",
  week = "",
}) => ({
  current,
  iconCode,
  dailyMax,
  dailyMin,
  dailyIcons,
  hourly,
  hourlyIcons,
  time,
  week,
});
