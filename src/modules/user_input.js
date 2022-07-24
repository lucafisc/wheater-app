import { pubsub } from "./pubsub.js";

export const userInput = () => {
  const inputField = document.getElementById("city-input");
  inputField.addEventListener("change", () => {
    let city = inputField.value;
    pubsub.publish("new-city", city);
  });

  inputField.onfocus = (clicked) => {
    inputField.placeholder = "";
    inputField.value = "";
  };

  // inputField.onfocusout = (clicked) => {
  //         let city = inputField.value;

  //   if (city === "") {
  //     if () {

  //     }
  //     else {
  //       inputField.placeholder = "enter a location";
  //     }
  //   }

  //   else {
  //     pubsub.publish("newcity", city)
  //   }
  //     inputField.placeholder = "";
  //   inputField.value = "";
  // };

  pubsub.subscribe("render", (tempList) => {
    inputField.style.border = "var(--border)";
    inputField.style.color = "var(--main-color)";
  });
};
