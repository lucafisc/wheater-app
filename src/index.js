import { getTemperature } from "./modules/get_temperature";

function init() {
  getTemperature();
}

init();

// http://api.openweathermap.org/data/2.5/weather?q=London&APPID=9486ff66fc7c11980fc9ee8c66c285ca

//     const img = document.querySelector('img');
//     const inputField = document.querySelector('#input-field');

//     inputField.oninput = function () {
//         let userInput = inputField.value;

//         fetch('https://api.giphy.com/v1/gifs/translate?api_key=0GHTVBz7ByMnrE2yBWTGSa3gKZ81LKn0&s=' + userInput, { mode: 'cors' })
//             .then(function (response) {
//                 return response.json();
//             })
//             .then(function (response) {
//                 img.src = response.data.images.original.url;
//             })
//             .catch(() => {
//                 console.log("who let ");
//             })
//     }

//    async function loadJson(url) {
//     let response = await fetch(url);

//                     if (response.status == 200) {
//                         let json = await response.json();
//                         return json;
//                     }
//                         throw new Error(response.status);

//                 };

//         loadJson('https://javascript.info/no-such-user.json')
//             .catch(alert); // Error: 404

// const img = document.querySelector('img');
//     const inputField = document.querySelector('#input-field');

//     inputField.oninput = function () {
//         getGIF(inputField.value)

//     }

//     async function getGIF(input) {
//         const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=0GHTVBz7ByMnrE2yBWTGSa3gKZ81LKn0&s=' + input, { mode: 'cors' });
//         const catdata = await response.json();
//         img.src = catdata.data.images.original.url;

//     }
