import { pubsub } from "./pubsub.js";

export const userInput = () => {
  const inputField = document.getElementById("city-input");
  inputField.addEventListener("change", () => {
    let city = inputField.value;
    pubsub.publish("new-city", city);
  });
};
