/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes/car.js":
/*!****************************!*\
  !*** ./src/classes/car.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Car                                           //create a class called car\r\n{\r\n    constructor(id, make, model, year)              //constructor taking in make, model, year\r\n    { \r\n        this.id = id;                         \r\n        this.make = make;                            //assign value as properites with same name:\r\n        this.model = model;\r\n        this.year = year;\r\n    }\r\n    \r\n    info () \r\n    {\r\n        document.getElementById(\"car-make\").textContent = this.make;            //these are the ids from index html lines 52, 53, 54\r\n        document.querySelector(\"#car-model\").textContent = this.model;          //this.make model is from above\r\n        document.querySelector(\"#car-year\").textContent = this.year;            //display the cars make model and year\r\n        document.querySelector(\"#car-card\").setAttribute(\"data-carId\", this.id);\r\n    }\r\n}\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Car);\n\n//# sourceURL=webpack://es6_modules/./src/classes/car.js?");

/***/ }),

/***/ "./src/classes/wishlist.js":
/*!*********************************!*\
  !*** ./src/classes/wishlist.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car */ \"./src/classes/car.js\");\n\r\n\r\nclass WishList {                                                    //create class WishList\r\n    constructor()\r\n    {\r\n       this.list = [];\r\n       this.nextId = 0;                                             //when add a car it will be given an id so if want to delete one you can \r\n    }\r\n    \r\n    add (make, model, year)\r\n    {\r\n        let car = new _car__WEBPACK_IMPORTED_MODULE_0__.default (this.nextId++, make, model, year);       //this give the car an id when add it to the wish list same as this.nextID++; this.list.push(car);\r\n        this.list.push(car);                                        //adds an id property to each car that is added to the list push will allow to push it to the car\r\n        this.updateDOMWishList();                                   //update the DOM every time a car is added to the wishlist \r\n    }\r\n\r\n    remove (carId)                                                  //how to remove a car. need to differentiate between cars added to list\r\n    {    \r\n        this.list = this.list.filter((car) => car.id != carId);     //but this will filter the car ID to remove it  using delete this.list[carId];  will remove the car from the array if already have it\r\n        this.updateDOMWishList();                                  //update the DOM every time a car is removed from the wishlist\r\n        document.getElementById(\"car-make\").textContent = \"\";       //once remove car also remvoe from the vehicle list\r\n        document.querySelector(\"#car-model\").textContent = \"\"; \r\n        document.querySelector(\"#car-year\").textContent = \"\";            \r\n        document.querySelector(\"#car-card\").setAttribute(\"data-carId\", \"\");\r\n\r\n        if (this.list.length == 0)\r\n        {\r\n            document.querySelector(\".removeBtn\").disabled = true;      //if no vehicle in the wish list dont' allow the button to be pushed\r\n        }\r\n    }\r\n\r\n    updateDOMWishList()\r\n    {                                                                 //users able to view the cars in the WishList from the document, account for this functionality of displaying and updating the DOM\r\n        let container = document.querySelector(\"#wishListContainer\"); //where wishListContainer is an id and to call it you will need the # infront when in JS\r\n        let ul = document.querySelector(\"ul\");\r\n        ul.innerHTML = \"\";\r\n        this.list.forEach((car) =>                                     //loop through cars and append to the list group\r\n        {   \r\n            let li = document.createElement(\"li\");\r\n            li.id = car.id;\r\n            li.textContent = car.model;\r\n            li.addEventListener(\"click\", () => \r\n            {        \r\n                document.querySelector(\".removeBtn\").disabled = false;   \r\n                car.info();\r\n            });\r\n            ul.appendChild(li);\r\n        }); \r\n        container.appendChild(ul);\r\n    }   \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WishList);\n\n//# sourceURL=webpack://es6_modules/./src/classes/wishlist.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_wishlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/wishlist */ \"./src/classes/wishlist.js\");\n                      //need to add classes because it's in a folder one set past the index.js\r\n\r\nlet form = document.querySelector(\"#submitForm\");\r\n\r\nlet wishlist = new _classes_wishlist__WEBPACK_IMPORTED_MODULE_0__.default();                                 //initialze the wishlist\r\n\r\nform.addEventListener(\"submit\", (event) =>                      //submit event in form when fill it out to the wish list\r\n{\r\n    event.preventDefault();\r\n\r\n    let make = event.target[0];\r\n    let model = event.target[1];\r\n    let year = event.target[2];\r\n\r\n    wishlist.add(make.value, model.value, year.value);                            //subist form call wishlist.add that is set up to take thw make model and year\r\n   make.value = \"\";\r\n   model.value = \"\";\r\n   year.value = \"\";\r\n//remove from the input info section put .value in the wishlist.add again\r\n\r\n});\r\n\r\ndocument.querySelector(\".removeBtn\").addEventListener(\"click\", (event) =>\r\n{\r\n    let carId = event.target.parentElement.getAttribute(\"data-carId\");\r\n    wishlist.remove(carId);                                      //call wishlist.remove\r\n});\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://es6_modules/./src/index.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;