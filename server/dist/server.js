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

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\nconst fs_1 = __importDefault(__webpack_require__(/*! fs */ \"fs\"));\nconst crypto_1 = __importDefault(__webpack_require__(/*! crypto */ \"crypto\"));\nconst app = (0, express_1.default)();\napp.use(express_1.default.json());\napp.use((0, cors_1.default)());\nlet limit = 10;\napp.get(\"/news\", (req, res) => __awaiter(void 0, void 0, void 0, function* () {\n    var _a, _b, _c;\n    const messages = JSON.parse(yield readFile(\"./data/messages.json\"));\n    if (Number(req.query.limit) !== limit) {\n        limit = Number(req.query.limit);\n    }\n    if (!((_a = req.query) === null || _a === void 0 ? void 0 : _a.after) || ((_b = req.query) === null || _b === void 0 ? void 0 : _b.after) === \"null\") {\n        res.send(JSON.stringify({\n            total: messages.length,\n            messages: messages.slice(0, limit),\n        }));\n        return;\n    }\n    if ((_c = req.query) === null || _c === void 0 ? void 0 : _c.after) {\n        const indexAfter = messages.findIndex(({ id }) => id === req.query.after) + 1;\n        res.send(JSON.stringify({\n            total: messages.length,\n            messages: messages.slice(indexAfter, indexAfter + limit),\n        }));\n    }\n}));\napp.post(\"/message\", (req, res) => __awaiter(void 0, void 0, void 0, function* () {\n    const messages = JSON.parse(yield readFile(\"./data/messages.json\"));\n    const newMessage = {\n        id: crypto_1.default.randomBytes(12).toString(\"hex\"),\n        author: req.body.author,\n        date: req.body.timestamp,\n        text: req.body.text,\n        author_id: \"01\",\n    };\n    messages.unshift(newMessage);\n    yield writeFile(\"./data/messages.json\", messages);\n    res.send(JSON.stringify({ total: messages.length, message: newMessage }));\n}));\napp.get(\"/author/:id\", (req, res) => __awaiter(void 0, void 0, void 0, function* () {\n    const authors = JSON.parse(yield readFile(\"./data/authors.json\"));\n    const authorId = req.params.id;\n    if (authors[authorId]) {\n        const messages = JSON.parse(yield readFile(\"./data/messages.json\"));\n        const author = authors[authorId];\n        const authorResponse = Object.assign(Object.assign({}, author), { messages: messages.filter((message) => message.author_id === authorId) });\n        res.send(JSON.stringify(authorResponse));\n    }\n    else {\n        res.sendStatus(404);\n    }\n}));\napp.listen(8080, () => console.info(\"api listening at http://localhost:8080\"));\nconst readFile = (path) => __awaiter(void 0, void 0, void 0, function* () {\n    return yield fs_1.default.promises.readFile(path, \"utf-8\");\n});\nconst writeFile = (path, data) => __awaiter(void 0, void 0, void 0, function* () {\n    yield fs_1.default.promises.writeFile(path, JSON.stringify(data));\n});\n\n\n//# sourceURL=webpack://mocks/./index.ts?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ })()
;