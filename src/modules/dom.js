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
    newColor(tempList);
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

function newColor(props) {
  const root = document.documentElement;

  let mainColor;
  if (props.current > 40) {
    mainColor = "hsl(12deg 96% 47%)";
  } else if (props.current <= 40 && props.current > 35) {
    mainColor = "hsl(27deg 96% 47%)";
  } else if (props.current <= 35 && props.current > 30) {
    mainColor = "hsl(42deg 96% 47%)";
  } else if (props.current <= 30 && props.current > 25) {
    mainColor = "hsl(56deg 96% 47%)";
  } else if (props.current <= 25 && props.current > 20) {
    mainColor = "hsl(84deg 96% 47%)";
  } else if (props.current <= 20 && props.current > 15) {
    mainColor = "hsl(155deg 96% 47%)";
  } else if (props.current <= 15 && props.current > 10) {
    mainColor = "hsl(188deg 96% 47%)";
  } else if (props.current <= 10 && props.current > 5) {
    mainColor = "hsl(199deg 96% 47%)";
  } else if (props.current <= 5 && props.current > 0) {
    mainColor = "hsl(212deg 96% 47%)";
  } else if (props.current <= 0 && props.current > -5) {
    mainColor = "hsl(220deg 96% 47%)";
  } else if (props.current <= -5 && props.current > -10) {
    mainColor = "hsl(232deg 96% 47%)";
  } else if (props.current <= -10 && props.current > -20) {
    mainColor = "hsl(242deg 96% 47%)";
  } else if (props.current <= -20) {
    mainColor = "hsl(254deg 96% 47%)";
  }
  root.style.setProperty("--main-color", mainColor);
}

function showGradient() {
  const gradientContainer = document.getElementById("gradient-container");
  gradientContainer.classList.remove("hidden");
}

function updateInfo(props) {
  const infoContainer = document.getElementById("info-container");
  infoContainer.classList.remove("hidden");
}
