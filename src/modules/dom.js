import { pubsub } from "./pubsub.js";
const currentTitle = document.getElementById("current-temperature");

export const DOMRender = () => {
  pubsub.subscribe("render", (tempList) => {
    updateDOM(tempList);
  });
};

function updateDOM(props) {
  currentTitle.textContent = props.current;
}
