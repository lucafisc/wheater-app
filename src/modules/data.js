import { pubsub } from "./pubsub.js";

export const checkData = () => {
  pubsub.subscribe("new-temperature", (data) => {
    extractData(data);
  });
};

function extractData(data) {
  console.log(data);
  let current = convert(data.main.temp);
  let location = data.name.toLowerCase();
  const tempList = tempFactory({
    current: current,
    location: location,
  });
  console.log("fired data");

  pubsub.publish("render", tempList);
}

function convert(tempInK) {
  const kelvins = 273.15;
  const tempUnits = "celcius";
  if (tempUnits === "celcius") {
    let tempInC = tempInK - kelvins;
    return Math.round(tempInC);
  }
}

const tempFactory = ({ current = "", location = "", tags = [""] }) => ({
  current,
  location,
  tags,
});
