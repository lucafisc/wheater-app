import { pubsub } from "./pubsub.js";

export const checkData = () => {
  pubsub.subscribe("new-temperature", (data) => {
    extractData(data);
  });
};
function extractData(data) {
  const kelvins = 273.15;
  console.log(data);

  let;
}
