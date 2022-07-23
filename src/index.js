import { userInput } from "./modules/user_input";
import { getTemperature } from "./modules/get_temperature";
import { checkData } from "./modules/data";
function init() {
  userInput();
  getTemperature();
  checkData();
}

init();
