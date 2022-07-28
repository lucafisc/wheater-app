import { pubsub } from "./pubsub.js";
import CssFilterConverter from "css-filter-converter";
import i01d from "../imgs/01d.svg";
import i01n from "../imgs/01n.svg";
import i02d from "../imgs/02d.svg";
import i02n from "../imgs/02n.svg";
import i03d from "../imgs/03d.svg";
import i03n from "../imgs/03n.svg";
import i04d from "../imgs/04d.svg";
import i04n from "../imgs/04n.svg";
import i09d from "../imgs/09d.svg";
import i09n from "../imgs/09n.svg";
import i10d from "../imgs/10d.svg";
import i10n from "../imgs/10n.svg";
import i11d from "../imgs/11d.svg";
import i11n from "../imgs/11n.svg";
import i13d from "../imgs/13d.svg";
import i13n from "../imgs/13n.svg";
import i50d from "../imgs/50d.svg";
import i50n from "../imgs/50n.svg";
var hsl = require("hsl-to-hex");
var pipetteur = require("pipetteur");

const currentTitle = document.getElementById("current-temperature");
const currentMinus = document.getElementById("current-minus");
const currentSymbol = document.getElementById("current-symbol");

export const DOMRender = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  window.addEventListener("resize", () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });

  pubsub.subscribe("render", (tempList) => {
    newMainColor(tempList);
    showGradient();
    updateDOM(tempList);
  });
};

function newMainColor(tempList) {
  let color = newColor(tempList.current);
  const root = document.documentElement;
  root.style.setProperty("--main-color", color);
}

function updateDOM(props) {
  updateCurrent(props);
  updateHourly(props);
  updateDaily(props);
}

function updateCurrent(props) {
  currentTitle.textContent = props.current;
  currentTitle.classList.remove("hidden");
  currentSymbol.classList.remove("hidden");
  if (props.current >= 0) {
    currentMinus.classList.add("hidden");
  } else {
    currentMinus.classList.remove("hidden");
  }

  const iconContainer = document.querySelector(".icon-container");
  removeAllChildren(iconContainer);
  let icon = document.createElement("img");
  icon.classList.add("main-icon");
  icon.src = getIconSrc(props.iconCode);
  iconContainer.prepend(icon);
}

function getIconSrc(code) {
  switch (code) {
    case "01d":
      return i01d;
    case "01n":
      return i01n;
    case "02d":
      return i02d;
    case "02n":
      return i02n;
    case "03d":
      return i03d;
    case "03n":
      return i03n;
    case "04d":
      return i04d;
    case "04n":
      return i04n;
    case "09d":
      return i09d;
    case "09n":
      return i09n;
    case "10d":
      return i10d;
    case "10n":
      return i10n;
    case "11d":
      return i11d;
    case "11n":
      return i11n;
    case "13d":
      return i13d;
    case "13n":
      return i13n;
    case "50d":
      return i50d;
    case "50n":
      return i50n;
  }
}

function newColor(temp) {
  let hue = 220 - temp * 6;
  let mainColor = `hsl(${hue}deg 96% 47%)`;
  return mainColor;
}

function showGradient() {
  const gradientContainer = document.getElementById("gradient-container");
  gradientContainer.classList.remove("hidden");
}

function updateHourly(props) {
  const hourForecast = document.querySelector(".hour-forecast");
  removeAllChildren(hourForecast);
  for (let i = 0; i < props.hourly.length; i++) {
    let temp = props.hourly[i];
    let time = props.time + i + 1;
    let icon = props.hourlyIcons[i];

    if (time >= 24) {
      time = time - 24;
    }
    time = time + ":00";

    let colorCurrent = newColor(temp);
    let colorNext = newColor(props.hourly[i + 1]);
    if (!props.hourly[i + 1]) {
      colorNext = colorCurrent;
    }

    let infoCard = createHourForecast(
      temp,
      time,
      icon,
      colorCurrent,
      colorNext
    );
    hourForecast.append(infoCard);
  }
}

function updateDaily(props) {
  const weekForecast = document.querySelector(".week-forecast");
  weekForecast.classList.remove("no-display");
  removeAllChildren(weekForecast);
  for (let i = 0; i < props.dailyMax.length; i++) {
    let max = props.dailyMax[i];
    let min = props.dailyMin[i];
    let day = props.week[i];
    let colorMin = newColor(min);
    let colorMax = newColor(max);
    let icon = props.dailyIcons[i];

    let infoCard = createDailyForecast(max, min, day, colorMin, colorMax, icon);
    weekForecast.append(infoCard);
  }
}

function removeAllChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function createHourForecast(temp, time, icon, color1, color2) {
  const infoCard = document.createElement("div");
  const cardIcon = document.createElement("img");
  const cardTemp = document.createElement("p");
  const cardText = document.createElement("p");

  infoCard.classList.add("info-card");
  cardIcon.classList.add("card-icon");
  cardTemp.classList.add("card-temp");
  cardText.classList.add("card-text");

  cardIcon.src = getIconSrc(icon);
  cardTemp.textContent = temp;
  cardText.textContent = time;

  if (color1 !== color2) {
    infoCard.style.background = `linear-gradient(0.25turn,${color1}, ${color2})`;
  } else {
    infoCard.style.background = color1;
  }

  infoCard.append(cardIcon, cardTemp, cardText);
  return infoCard;
}

function createDailyForecast(max, min, day, colorMin, colorMax, icon) {
  const infoCard = document.createElement("div");
  const cardIcon = document.createElement("img");
  const tempContainer = document.createElement("div");
  const cardMin = document.createElement("p");
  const cardMax = document.createElement("p");
  const cardText = document.createElement("p");

  infoCard.classList.add("daily-card");
  cardIcon.classList.add("daily-icon");
  tempContainer.classList.add("temp-container");
  cardMin.classList.add("card-temp", "temp-min");
  cardMax.classList.add("card-temp");
  cardText.classList.add("daily-text");

  cardIcon.src = getIconSrc(icon);
  cardMin.textContent = "/" + min;
  cardMax.textContent = max;
  cardText.textContent = day;

  tempContainer.append(cardMax, cardMin);
  infoCard.append(cardIcon, cardText, tempContainer);
  return infoCard;
}
