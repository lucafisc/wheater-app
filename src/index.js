import "./styles/main.css";
import "./styles/current-temp.css";
import "./styles/info.css";
import "./styles/input.css";
import "./styles/gradients.css";
import { userInput } from "./modules/user_input";
import { getTemperature } from "./modules/get_temperature";
import { checkData } from "./modules/data";
import { DOMRender } from "./modules/dom";

function init() {
  userInput();
  getTemperature();
  checkData();
  DOMRender();
}

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("--vh", `${vh}px`);

init();
