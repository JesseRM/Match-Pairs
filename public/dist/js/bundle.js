/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/src/js/matchpairs.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/src/js/canvas.js":
/*!*********************************!*\
  !*** ./public/src/js/canvas.js ***!
  \*********************************/
/*! exports provided: Canvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Canvas\", function() { return Canvas; });\nclass Canvas {\r\n    constructor(width, height, backgroundColor, element) {\r\n        this.width = width;\r\n        this.height = height;\r\n        this.element = element;\r\n        this.backgroundColor = backgroundColor;\r\n        this.ctx = this.element.getContext('2d');\r\n    }\r\n\r\n    draw() {\r\n        this.element.width = this.width;\r\n        this.element.height = this.height;\r\n        this.ctx.fillStyle = this.backgroundColor;\r\n        this.ctx.fillRect(0, 0, this.width, this.height);\r\n    }\r\n\r\n    drawCards(cards) {\r\n        cards.forEach(card => {\r\n            this.ctx.fillStyle = '#5C8495';\r\n            this.ctx.fillRect(card.x, card.y, card.width, card.height);\r\n            this.ctx.lineWidth = 5;\r\n            this.ctx.strokeStyle = '#001017';\r\n            this.ctx.strokeRect(card.x, card.y, card.width, card.height);\r\n        });\r\n    }\r\n\r\n    getClickedCoordinates(event) {\r\n        let rect = this.element.getBoundingClientRect();\r\n        let coor = {};\r\n\r\n        coor.x = event.clientX - rect.left;\r\n        coor.y = event.clientY - rect.top;\r\n\r\n        return coor;\r\n    }\r\n\r\n    drawValue(card) {\r\n        if (card.type === 'picture') {\r\n            this.ctx.drawImage(card.value, card.x, card.y);\r\n        } else {   \r\n            this.ctx.font = '20px Roboto';\r\n            this.ctx.fillStyle = '#100f0f';\r\n            this.ctx.textAlign = 'center';\r\n            this.ctx.fillText(card.value, card.x + (card.width / 2), card.y + (card.height / 2));\r\n        }\r\n    \r\n    }\r\n\r\n    drawSelectedCard(card) {\r\n        this.ctx.fillStyle = '#dad5d5';\r\n        this.ctx.fillRect(card.x, card.y, card.width, card.height);\r\n        this.ctx.lineWidth = 5;\r\n        this.ctx.strokeStyle = '#b5361b';\r\n        this.ctx.strokeRect(card.x, card.y, card.width, card.height);\r\n        this.drawValue(card);\r\n    }\r\n\r\n    drawMatchedCards(cards) {\r\n        cards.forEach((card) => {\r\n            this.ctx.lineWidth = 5;\r\n            this.ctx.strokeStyle = '#001017';\r\n            this.ctx.strokeRect(card.x, card.y, card.width, card.height);\r\n        });\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./public/src/js/canvas.js?");

/***/ }),

/***/ "./public/src/js/deck.js":
/*!*******************************!*\
  !*** ./public/src/js/deck.js ***!
  \*******************************/
/*! exports provided: Deck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Deck\", function() { return Deck; });\n/* harmony import */ var _words__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./words */ \"./public/src/js/words.js\");\n/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images */ \"./public/src/js/images.js\");\n\r\n\r\n\r\nclass Deck {\r\n    constructor(type, grid, canvas) {\r\n        this.type = type;\r\n        this.size = grid[0] * grid[1];\r\n        this.cards = [];\r\n        this.matched = 0;\r\n        this.cardWidth = canvas.width / grid[0];\r\n        this.cardHeight = canvas.height / grid[1]; \r\n    }\r\n\r\n    setCards(values, canvas) {\r\n        let vals = this.randomizeVals([...values]);\r\n        let x = 0, y = 0;\r\n        \r\n        for (let i = 0; i < vals.length; i++) {\r\n            this.cards.push({\r\n                cardNum: i,\r\n                type: this.type,\r\n                value: vals[i],\r\n                width: this.cardWidth,\r\n                height: this.cardHeight,\r\n                matched: false,\r\n                x: x,\r\n                y: y\r\n            });\r\n\r\n            x = x + this.cardWidth;\r\n\r\n            if (x >= canvas.width) {\r\n                x = 0;\r\n                y = y + this.cardHeight;\r\n            }\r\n        }\r\n\r\n    }\r\n\r\n    getValues() {\r\n        return new Promise((resolve) => {\r\n            if (this.type === 'word') resolve(this.getWords(_words__WEBPACK_IMPORTED_MODULE_0__[\"words\"]));\r\n            if (this.type === 'number') resolve(this.getNumbers());\r\n            if (this.type === 'picture') {\r\n                this.getImages().then((images) => {\r\n                    console.log(images);\r\n                    resolve(images);\r\n                });\r\n            }\r\n        });   \r\n    }\r\n\r\n    getNumbers() {\r\n        let nums = [];\r\n\r\n        while (nums.length < this.size) {\r\n            let rand = String(Math.floor(Math.random() * (100 - 1) + 1));\r\n            \r\n            if (nums.includes(rand)) continue;\r\n\r\n            nums.push(rand, rand);\r\n        }\r\n\r\n        return nums;\r\n    }\r\n\r\n    getWords(wordArr) {\r\n        let words = [];\r\n        \r\n        while (words.length < this.size) {\r\n            let rand = Math.floor(Math.random() * (wordArr.length));\r\n\r\n            if (words.includes(wordArr[rand])) continue;\r\n\r\n            words.push(wordArr[rand], wordArr[rand]);\r\n        }\r\n\r\n        return words;\r\n    }\r\n\r\n    async getImages() {\r\n        console.log('getimages ran');\r\n        let imgNames = this.getImageNames(_images__WEBPACK_IMPORTED_MODULE_1__[\"images\"]);\r\n        let imgs = [];\r\n\r\n        for (let i = 0; i < imgNames.length; i++) {\r\n            let img = await this.loadImage(imgNames[i]);\r\n        \r\n            imgs.push(img, img);\r\n        }\r\n\r\n        return imgs;\r\n    }\r\n\r\n    getImageNames(imageNames) {\r\n        let names = [];\r\n\r\n        while (names.length < this.size / 2) {\r\n            let rand = Math.floor(Math.random() * (imageNames.length));\r\n\r\n            if (names.includes(imageNames[rand])) continue;\r\n\r\n            names.push(imageNames[rand]);\r\n        }\r\n\r\n        return names;\r\n    }\r\n\r\n    loadImage(path) {\r\n        return new Promise((resolve, reject) => {\r\n            let img = new Image();\r\n            img.src = `./images/${path}.png`;\r\n            \r\n            img.onload = () => {\r\n                console.log('loaded');\r\n                resolve(img);\r\n            }\r\n\r\n            img.onerror = () => {\r\n                console.log('Error');\r\n            }\r\n        });\r\n    }\r\n\r\n    getClickedCard(coor) {\r\n        for (let i = 0; i < this.cards.length; i++) {\r\n            if (coor.x >= this.cards[i].x && coor.x <= (this.cards[i].x + this.cardWidth)\r\n                && coor.y >= this.cards[i].y && coor.y <= (this.cards[i].y + this.cardHeight)) {\r\n                    return this.cards[i];\r\n                }\r\n        }\r\n    }\r\n\r\n    randomizeVals(values) {\r\n        let vals = [...values];\r\n        \r\n        for (let i = vals.length - 1; i > 0; i--) {\r\n            let j = Math.floor(Math.random() * (i + 1));\r\n\r\n            [vals[i], vals[j]] = [vals[j], vals[i]];\r\n        }\r\n\r\n        return vals;\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./public/src/js/deck.js?");

/***/ }),

/***/ "./public/src/js/game.js":
/*!*******************************!*\
  !*** ./public/src/js/game.js ***!
  \*******************************/
/*! exports provided: endGame, getMenuVals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"endGame\", function() { return endGame; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMenuVals\", function() { return getMenuVals; });\nfunction endGame(type, canvas) {\r\n    if (type === 'win') {\r\n        canvas.ctx.fillStyle = 'rgba(230, 235, 244, 0.6)';\r\n        canvas.ctx.fillRect(0, 0, canvas.width, canvas.height);\r\n        canvas.ctx.font = '80px Roboto';\r\n        canvas.ctx.fillStyle = '#148207';\r\n        canvas.ctx.textAlign = 'center';\r\n        canvas.ctx.fillText('You win!', canvas.width / 2, canvas.height / 2);\r\n    }\r\n}\r\n\r\nfunction getMenuVals(menu) {\r\n    const vals = {};\r\n    let min = null;\r\n\r\n    if (menu.gridSize.value === '4 x 4') vals.grid = [4, 4];\r\n    else if (menu.gridSize.value === '4 x 5') vals.grid = [4, 5];\r\n    else if (menu.gridSize.value === '5 x 6') vals.grid = [5, 6];\r\n    else vals.grid = [4, 4];\r\n\r\n    vals.type = menu.type.value.toLowerCase();\r\n    min = parseInt(menu.time.value[0], 10);\r\n\r\n    if (min && min > 0 && min <= 5) {\r\n        vals.time = min;\r\n    } else {\r\n        vals.time = 0;\r\n    }\r\n\r\n    return vals;\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./public/src/js/game.js?");

/***/ }),

/***/ "./public/src/js/images.js":
/*!*********************************!*\
  !*** ./public/src/js/images.js ***!
  \*********************************/
/*! exports provided: images */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"images\", function() { return images; });\nconst images = [\r\n    'alligator',\r\n    'basketball',\r\n    'batman',\r\n    'beach-ball',\r\n    'butterfly',\r\n    'c-3po',\r\n    'cherry',\r\n    'chewbacca',\r\n    'cookie-monster',\r\n    'corgi',\r\n    'cute-hamster',\r\n    'cyborg',\r\n    'diamond',\r\n    'dinosaur',\r\n    'doughnut',\r\n    'f1-car',\r\n    'fenix',\r\n    'flip-flops',\r\n    'fox',\r\n    'french-fries',\r\n    'genie',\r\n    'grey',\r\n    'guitar',\r\n    'hamburger',\r\n    'happy-mac',\r\n    'helicopter',\r\n    'motorbike-helmet',\r\n    'mummy',\r\n    'ninja-turtle',\r\n    'octopus',\r\n    'owl',\r\n    'planet',\r\n    'prawn',\r\n    'pretzel',\r\n    'pug',\r\n    'pumpkin',\r\n    'r2-d2',\r\n    'rocket',\r\n    'soccer-ball',\r\n    'sport',\r\n    'strawberry',\r\n    'superman-dc',\r\n    'tennis-ball',\r\n    'tesla-model-x',\r\n    'turtle',\r\n    'umbrella',\r\n    'unicorn',\r\n    'watermelon',\r\n    'wizard',\r\n    'wonder-woman'\r\n]\r\n\r\n\n\n//# sourceURL=webpack:///./public/src/js/images.js?");

/***/ }),

/***/ "./public/src/js/matchpairs.js":
/*!*************************************!*\
  !*** ./public/src/js/matchpairs.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ \"./public/src/js/canvas.js\");\n/* harmony import */ var _deck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deck */ \"./public/src/js/deck.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ \"./public/src/js/game.js\");\n\r\n\r\n\r\n\r\nconst playBtn = document.querySelector('#play-btn');\r\nconst menuElements = {\r\n    gridSize: document.querySelector('#grid-select'),\r\n    type: document.querySelector('#type-select'),\r\n    time: document.querySelector('#time-select')\r\n}\r\nconst canvas = new _canvas__WEBPACK_IMPORTED_MODULE_0__[\"Canvas\"](500, 300, '#27566B', document.querySelector('#canvas'));\r\nlet deck = null;\r\nconst game = {\r\n    options: null,\r\n    cardsDisplayed: 0,\r\n    cardsClicked: [],\r\n    userInput: true\r\n}\r\n\r\nplayBtn.addEventListener('click', () => {\r\n    game.options = Object(_game__WEBPACK_IMPORTED_MODULE_2__[\"getMenuVals\"])(menuElements);\r\n    deck = new _deck__WEBPACK_IMPORTED_MODULE_1__[\"Deck\"](game.options.type, game.options.grid, canvas);\r\n    \r\n    deck.getValues().then((values) => {\r\n        deck.setCards(values, canvas);\r\n        canvas.draw();\r\n        canvas.drawCards(deck.cards);\r\n    });\r\n});\r\n\r\ncanvas.element.addEventListener('click', (event) => {\r\n    let clickedCard = deck.getClickedCard(canvas.getClickedCoordinates(event));\r\n    \r\n    if (clickedCard.matched !== true && !game.cardsClicked.includes(clickedCard) && game.userInput) {\r\n        game.cardsDisplayed++;\r\n        \r\n        if (game.cardsDisplayed <= 2) {\r\n            canvas.drawSelectedCard(clickedCard);\r\n            game.cardsClicked.push(clickedCard);\r\n        }\r\n\r\n        if (game.cardsDisplayed === 2) {\r\n            game.userInput = false;\r\n            \r\n            if (game.cardsClicked[0]['value'] !== game.cardsClicked[1]['value']) {\r\n                setTimeout(() => {\r\n                    canvas.drawCards(game.cardsClicked);\r\n                    game.cardsClicked = [];\r\n                    game.userInput = true;\r\n                }, 1000);\r\n            } else {\r\n                canvas.drawMatchedCards(game.cardsClicked);\r\n                game.cardsClicked[0]['matched'] = true;\r\n                game.cardsClicked[1]['matched'] = true;\r\n                game.cardsClicked = [];\r\n                game.userInput = true;\r\n                deck.matched += 2;\r\n            }\r\n\r\n            game.cardsDisplayed = 0;\r\n\r\n            if (deck.matched === deck.size) {\r\n                Object(_game__WEBPACK_IMPORTED_MODULE_2__[\"endGame\"])('win', canvas);\r\n            }\r\n        }\r\n    }\r\n}); \r\n\r\n\n\n//# sourceURL=webpack:///./public/src/js/matchpairs.js?");

/***/ }),

/***/ "./public/src/js/words.js":
/*!********************************!*\
  !*** ./public/src/js/words.js ***!
  \********************************/
/*! exports provided: words */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"words\", function() { return words; });\nconst words = [\r\n    'cat',\r\n    'dog',\r\n    'pizza',\r\n    'office',\r\n    'games',\r\n    'throne',\r\n    'zebra',\r\n    'watermelon',\r\n    'peach',\r\n    'clothes',\r\n    'purse',\r\n    'stairs',\r\n    'pool',\r\n    'wood',\r\n    'house',\r\n    'apartment',\r\n    'bathroom',\r\n    'light',\r\n    'frame',\r\n    'beautiful',\r\n    'forest',\r\n    'woods',\r\n    'axe',\r\n    'curtain',\r\n    'computer',\r\n    'language',\r\n    'wheel',\r\n    'television',\r\n    'glasses',\r\n    'concrete',\r\n    'hospital',\r\n    'surprise',\r\n    'couch',\r\n    'rocket',\r\n    'clouds',\r\n    'library',\r\n    'lake',\r\n    'garage',\r\n    'painting'\r\n];\r\n\r\n\n\n//# sourceURL=webpack:///./public/src/js/words.js?");

/***/ })

/******/ });