/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_get_temperature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/get_temperature */ \"./src/modules/get_temperature.js\");\n\n\nfunction init() {\n  (0,_modules_get_temperature__WEBPACK_IMPORTED_MODULE_0__.getTemperature)();\n}\n\ninit();\n\n// http://api.openweathermap.org/data/2.5/weather?q=London&APPID=9486ff66fc7c11980fc9ee8c66c285ca\n\n//     const img = document.querySelector('img');\n//     const inputField = document.querySelector('#input-field');\n\n//     inputField.oninput = function () {\n//         let userInput = inputField.value;\n\n//         fetch('https://api.giphy.com/v1/gifs/translate?api_key=0GHTVBz7ByMnrE2yBWTGSa3gKZ81LKn0&s=' + userInput, { mode: 'cors' })\n//             .then(function (response) {\n//                 return response.json();\n//             })\n//             .then(function (response) {\n//                 img.src = response.data.images.original.url;\n//             })\n//             .catch(() => {\n//                 console.log(\"who let \");\n//             })\n//     }\n\n//    async function loadJson(url) {\n//     let response = await fetch(url);\n\n//                     if (response.status == 200) {\n//                         let json = await response.json();\n//                         return json;\n//                     }\n//                         throw new Error(response.status);\n\n//                 };\n\n//         loadJson('https://javascript.info/no-such-user.json')\n//             .catch(alert); // Error: 404\n\n// const img = document.querySelector('img');\n//     const inputField = document.querySelector('#input-field');\n\n//     inputField.oninput = function () {\n//         getGIF(inputField.value)\n\n//     }\n\n//     async function getGIF(input) {\n//         const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=0GHTVBz7ByMnrE2yBWTGSa3gKZ81LKn0&s=' + input, { mode: 'cors' });\n//         const catdata = await response.json();\n//         img.src = catdata.data.images.original.url;\n\n//     }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBMkQ7O0FBRTNEO0FBQ0EsRUFBRSx3RUFBYztBQUNoQjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsc0hBQXNILGNBQWM7QUFDcEk7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsOEJBQThCOztBQUU5QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx5SUFBeUksY0FBYztBQUN2SjtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2hlYXRlci1hcHAvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRUZW1wZXJhdHVyZSB9IGZyb20gXCIuL21vZHVsZXMvZ2V0X3RlbXBlcmF0dXJlXCI7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGdldFRlbXBlcmF0dXJlKCk7XG59XG5cbmluaXQoKTtcblxuLy8gaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPUxvbmRvbiZBUFBJRD05NDg2ZmY2NmZjN2MxMTk4MGZjOWVlOGM2NmMyODVjYVxuXG4vLyAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW1nJyk7XG4vLyAgICAgY29uc3QgaW5wdXRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dC1maWVsZCcpO1xuXG4vLyAgICAgaW5wdXRGaWVsZC5vbmlucHV0ID0gZnVuY3Rpb24gKCkge1xuLy8gICAgICAgICBsZXQgdXNlcklucHV0ID0gaW5wdXRGaWVsZC52YWx1ZTtcblxuLy8gICAgICAgICBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2lwaHkuY29tL3YxL2dpZnMvdHJhbnNsYXRlP2FwaV9rZXk9MEdIVFZCejdCeU1uckUyeUJXVEdTYTNnS1o4MUxLbjAmcz0nICsgdXNlcklucHV0LCB7IG1vZGU6ICdjb3JzJyB9KVxuLy8gICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbi8vICAgICAgICAgICAgIH0pXG4vLyAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbi8vICAgICAgICAgICAgICAgICBpbWcuc3JjID0gcmVzcG9uc2UuZGF0YS5pbWFnZXMub3JpZ2luYWwudXJsO1xuLy8gICAgICAgICAgICAgfSlcbi8vICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ3aG8gbGV0IFwiKTtcbi8vICAgICAgICAgICAgIH0pXG4vLyAgICAgfVxuXG4vLyAgICBhc3luYyBmdW5jdGlvbiBsb2FkSnNvbih1cmwpIHtcbi8vICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuXG4vLyAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBsZXQganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBqc29uO1xuLy8gICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcblxuLy8gICAgICAgICAgICAgICAgIH07XG5cbi8vICAgICAgICAgbG9hZEpzb24oJ2h0dHBzOi8vamF2YXNjcmlwdC5pbmZvL25vLXN1Y2gtdXNlci5qc29uJylcbi8vICAgICAgICAgICAgIC5jYXRjaChhbGVydCk7IC8vIEVycm9yOiA0MDRcblxuLy8gY29uc3QgaW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW1nJyk7XG4vLyAgICAgY29uc3QgaW5wdXRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dC1maWVsZCcpO1xuXG4vLyAgICAgaW5wdXRGaWVsZC5vbmlucHV0ID0gZnVuY3Rpb24gKCkge1xuLy8gICAgICAgICBnZXRHSUYoaW5wdXRGaWVsZC52YWx1ZSlcblxuLy8gICAgIH1cblxuLy8gICAgIGFzeW5jIGZ1bmN0aW9uIGdldEdJRihpbnB1dCkge1xuLy8gICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5naXBoeS5jb20vdjEvZ2lmcy90cmFuc2xhdGU/YXBpX2tleT0wR0hUVkJ6N0J5TW5yRTJ5QldUR1NhM2dLWjgxTEtuMCZzPScgKyBpbnB1dCwgeyBtb2RlOiAnY29ycycgfSk7XG4vLyAgICAgICAgIGNvbnN0IGNhdGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4vLyAgICAgICAgIGltZy5zcmMgPSBjYXRkYXRhLmRhdGEuaW1hZ2VzLm9yaWdpbmFsLnVybDtcblxuLy8gICAgIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/modules/get_temperature.js":
/*!****************************************!*\
  !*** ./src/modules/get_temperature.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTemperature\": () => (/* binding */ getTemperature)\n/* harmony export */ });\nconst getTemperature = () => {\n  console.log(\"hii\");\n  fetch(\n    \"http://api.openweathermap.org/data/2.5/weather?q=Berlin&APPID=9486ff66fc7c11980fc9ee8c66c285ca\"\n  )\n    .then((response) => response.json())\n    .then((data) => console.log(data.main.temp));\n  // .catch((err) => console.log(err));\n};\n\n// inputField.oninput = function () {\n//   let userInput = inputField.value;\n\n//   fetch(\n//     \"https://api.giphy.com/v1/gifs/translate?api_key=0GHTVBz7ByMnrE2yBWTGSa3gKZ81LKn0&s=\" +\n//       userInput,\n//     { mode: \"cors\" }\n//   )\n//     .then(function (response) {\n//       return response.json();\n//     })\n//     .then(function (response) {\n//       img.src = response.data.images.original.url;\n//     })\n//     .catch(() => {\n//       console.log(\"who let \");\n//     });\n// };\n\n// async function loadJson(url) {\n//   let response = await fetch(url);\n\n//   if (response.status == 200) {\n//     let json = await response.json();\n//     return json;\n//   }\n//   throw new Error(response.status);\n// }\n\n// loadJson(\"https://javascript.info/no-such-user.json\").catch(alert); // Error: 404\n\n// const img = document.querySelector(\"img\");\n// const inputField = document.querySelector(\"#input-field\");\n\n// inputField.oninput = function () {\n//   getGIF(inputField.value);\n// };\n\n// async function getGIF(input) {\n//   const response = await fetch(\n//     \"https://api.giphy.com/v1/gifs/translate?api_key=0GHTVBz7ByMnrE2yBWTGSa3gKZ81LKn0&s=\" +\n//       input,\n//     { mode: \"cors\" }\n//   );\n//   const catdata = await response.json();\n//   img.src = catdata.data.images.original.url;\n// }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9nZXRfdGVtcGVyYXR1cmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVFQUF1RTs7QUFFdkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aGVhdGVyLWFwcC8uL3NyYy9tb2R1bGVzL2dldF90ZW1wZXJhdHVyZS5qcz82ODVmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBnZXRUZW1wZXJhdHVyZSA9ICgpID0+IHtcbiAgY29uc29sZS5sb2coXCJoaWlcIik7XG4gIGZldGNoKFxuICAgIFwiaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPUJlcmxpbiZBUFBJRD05NDg2ZmY2NmZjN2MxMTk4MGZjOWVlOGM2NmMyODVjYVwiXG4gIClcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT4gY29uc29sZS5sb2coZGF0YS5tYWluLnRlbXApKTtcbiAgLy8gLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xufTtcblxuLy8gaW5wdXRGaWVsZC5vbmlucHV0ID0gZnVuY3Rpb24gKCkge1xuLy8gICBsZXQgdXNlcklucHV0ID0gaW5wdXRGaWVsZC52YWx1ZTtcblxuLy8gICBmZXRjaChcbi8vICAgICBcImh0dHBzOi8vYXBpLmdpcGh5LmNvbS92MS9naWZzL3RyYW5zbGF0ZT9hcGlfa2V5PTBHSFRWQno3QnlNbnJFMnlCV1RHU2EzZ0taODFMS24wJnM9XCIgK1xuLy8gICAgICAgdXNlcklucHV0LFxuLy8gICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuLy8gICApXG4vLyAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4vLyAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuLy8gICAgIH0pXG4vLyAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4vLyAgICAgICBpbWcuc3JjID0gcmVzcG9uc2UuZGF0YS5pbWFnZXMub3JpZ2luYWwudXJsO1xuLy8gICAgIH0pXG4vLyAgICAgLmNhdGNoKCgpID0+IHtcbi8vICAgICAgIGNvbnNvbGUubG9nKFwid2hvIGxldCBcIik7XG4vLyAgICAgfSk7XG4vLyB9O1xuXG4vLyBhc3luYyBmdW5jdGlvbiBsb2FkSnNvbih1cmwpIHtcbi8vICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcblxuLy8gICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkge1xuLy8gICAgIGxldCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuLy8gICAgIHJldHVybiBqc29uO1xuLy8gICB9XG4vLyAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xuLy8gfVxuXG4vLyBsb2FkSnNvbihcImh0dHBzOi8vamF2YXNjcmlwdC5pbmZvL25vLXN1Y2gtdXNlci5qc29uXCIpLmNhdGNoKGFsZXJ0KTsgLy8gRXJyb3I6IDQwNFxuXG4vLyBjb25zdCBpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpO1xuLy8gY29uc3QgaW5wdXRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXQtZmllbGRcIik7XG5cbi8vIGlucHV0RmllbGQub25pbnB1dCA9IGZ1bmN0aW9uICgpIHtcbi8vICAgZ2V0R0lGKGlucHV0RmllbGQudmFsdWUpO1xuLy8gfTtcblxuLy8gYXN5bmMgZnVuY3Rpb24gZ2V0R0lGKGlucHV0KSB7XG4vLyAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4vLyAgICAgXCJodHRwczovL2FwaS5naXBoeS5jb20vdjEvZ2lmcy90cmFuc2xhdGU/YXBpX2tleT0wR0hUVkJ6N0J5TW5yRTJ5QldUR1NhM2dLWjgxTEtuMCZzPVwiICtcbi8vICAgICAgIGlucHV0LFxuLy8gICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuLy8gICApO1xuLy8gICBjb25zdCBjYXRkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuLy8gICBpbWcuc3JjID0gY2F0ZGF0YS5kYXRhLmltYWdlcy5vcmlnaW5hbC51cmw7XG4vLyB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/get_temperature.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;