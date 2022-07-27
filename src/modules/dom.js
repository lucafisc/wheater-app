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
    let color = newColor(tempList.current);
    const root = document.documentElement;
    root.style.setProperty("--main-color", color);

    showGradient();
    updateDOM(tempList);
  });
};

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

  let hourTemps = infoContainer.querySelectorAll(".card-temp-hourly");
  for (let i = 0; i < hourTemps.length; i++) {
    let color = newColor(props.hourly[i]);
    hourTemps[i].textContent = props.hourly[i];
    hourTemps[i].style.color = color;
  }

  let dayTemps = infoContainer.querySelectorAll(".card-temp-daily");
  for (let i = 0; i < dayTemps.length; i++) {
    let color = newColor(props.daily[i]);
    dayTemps[i].textContent = props.daily[i];
    dayTemps[i].style.color = color;
  }
}
