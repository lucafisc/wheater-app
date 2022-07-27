import { pubsub } from "./pubsub.js";
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
  updateInfo(props);
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

function updateInfo(props) {
  const infoContainer = document.getElementById("info-container");
  infoContainer.classList.remove("hidden");

  const hourForecast = document.querySelector(".hour-forecast");
  removeAllChildren(hourForecast);
  for (let i = 0; i < props.hourly.length; i++) {
    let temp = props.hourly[i];
    let time = props.time + i + 1;
    if (time >= 24) {
      time = time - 24;
    }
    time = time + ":00";

    let colorCurrent = newColor(temp);
    let colorNext = newColor(props.hourly[i + 1]);
    if (!props.hourly[i + 1]) {
      colorNext = colorCurrent;
    }
    let colorText = "white";

    let infoCard = createHourForecast(
      temp,
      time,
      colorCurrent,
      colorNext,
      colorText
    );
    hourForecast.append(infoCard);
  }

  const weekForecast = document.querySelector(".week-forecast");
  removeAllChildren(weekForecast);
  for (let i = 0; i < props.daily.length; i++) {
    let temp = props.daily[i];
    let day = props.week[i];
    let colorText = newColor(temp);
    let color1 = "white";
    let color2 = "white";

    let infoCard = createHourForecast(temp, day, color1, color2, colorText);
    weekForecast.append(infoCard);
  }
}

function removeAllChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function createHourForecast(temp, time, color1, color2, textColor) {
  const infoCard = document.createElement("div");
  const cardTemp = document.createElement("p");
  const cardText = document.createElement("p");

  infoCard.classList.add("info-card");
  cardTemp.classList.add("card-temp");
  cardText.classList.add("card-text");

  cardTemp.textContent = temp;
  cardText.textContent = time;
  cardTemp.style.color = textColor;
  cardText.style.color = textColor;

  console.log(color1);
  console.log(color2);

  if (color1 !== color2) {
    infoCard.style.background = `linear-gradient(0.25turn,${color1}, ${color2})`;
  } else {
    infoCard.style.background = color1;
  }

  infoCard.append(cardTemp, cardText);
  return infoCard;
}
