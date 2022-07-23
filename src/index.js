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

init();
