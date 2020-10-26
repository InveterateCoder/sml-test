/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./server/controllers/getStudentsController.ts":
/*!*****************************************************!*\
  !*** ./server/controllers/getStudentsController.ts ***!
  \*****************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _models_StudentModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/StudentModel */ "./server/models/StudentModel.ts");


async function getStudentsController(req, res) {
  try {
    const students = (await _models_StudentModel__WEBPACK_IMPORTED_MODULE_0__.default.find({}).exec()).map(doc => {
      const obj = doc.toObject();
      return {
        id: obj._id,
        ...obj,
        _id: undefined,
        __v: undefined
      };
    });
    res.json(students);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getStudentsController);

/***/ }),

/***/ "./server/controllers/renderController.ts":
/*!************************************************!*\
  !*** ./server/controllers/renderController.ts ***!
  \************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
async function renderController(req, res) {
  try {
    res.render('index');
  } catch (err) {
    res.status(500).send(err.message);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderController);

/***/ }),

/***/ "./server/infrastructure/apiRoutes.ts":
/*!********************************************!*\
  !*** ./server/infrastructure/apiRoutes.ts ***!
  \********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controllers_getStudentsController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/getStudentsController */ "./server/controllers/getStudentsController.ts");


const api = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();
api.get('/students', _controllers_getStudentsController__WEBPACK_IMPORTED_MODULE_1__.default);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);

/***/ }),

/***/ "./server/models/StudentModel.ts":
/*!***************************************!*\
  !*** ./server/models/StudentModel.ts ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const StudentSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
  avatar: String,
  firstName: {
    type: String,
    minlength: [2, "Minimum first name's length is 2"],
    maxlength: [26, "Maximum first name's length is 26"],
    required: [true, "Must provide the student's first name"],
    index: true
  },
  lastName: {
    type: String,
    minlength: [2, "Minimum last name's length is 2"],
    maxlength: [26, "Maximum last name's length is 26"],
    required: [true, "Must provide the student's last name"],
    index: true
  },
  middleName: {
    type: String,
    minlength: [2, "Minimum middle name's length is 2"],
    maxlength: [26, "Maximum middle name's length is 26"],
    required: [true, "Must provide the student's middle name"],
    index: true
  },
  dob: {
    type: Date,
    required: [true, "Must provide the student's date of birth"]
  },
  grade: {
    type: Number,
    min: [1, "Wrong grade number"],
    max: [5, "Wrong grade number"],
    required: [true, "Must provide the student's class"]
  },
  performance: {
    type: Number,
    min: [2, "Wrong performance mark"],
    max: [5, "Wrong performance mark"],
    required: [true, "Must provide the student's performance"]
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)('Student', StudentSchema));

/***/ }),

/***/ "./server/server.ts":
/*!**************************!*\
  !*** ./server/server.ts ***!
  \**************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dotenv_expand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dotenv-expand */ "dotenv-expand");
/* harmony import */ var dotenv_expand__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dotenv_expand__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swagger_ui_express__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swagger-ui-express */ "swagger-ui-express");
/* harmony import */ var swagger_ui_express__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swagger_ui_express__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _swagger_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./swagger.json */ "./server/swagger.json");
/* harmony import */ var _infrastructure_apiRoutes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./infrastructure/apiRoutes */ "./server/infrastructure/apiRoutes.ts");
/* harmony import */ var _controllers_renderController__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controllers/renderController */ "./server/controllers/renderController.ts");









dotenv_expand__WEBPACK_IMPORTED_MODULE_2___default()(dotenv__WEBPACK_IMPORTED_MODULE_1___default().config());
const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/fake_school';
const port = process.env.PORT || 8000;

async function startServer() {
  const app = express__WEBPACK_IMPORTED_MODULE_3___default()();
  app.set('view engine', 'ejs');
  let server = null;

  try {
    app.use(express__WEBPACK_IMPORTED_MODULE_3___default().static(path__WEBPACK_IMPORTED_MODULE_0___default().resolve(__dirname, 'public'))).use(express__WEBPACK_IMPORTED_MODULE_3___default().json()).use(express__WEBPACK_IMPORTED_MODULE_3___default().urlencoded({
      extended: true
    })).use('/api-docs', (swagger_ui_express__WEBPACK_IMPORTED_MODULE_5___default().serve), swagger_ui_express__WEBPACK_IMPORTED_MODULE_5___default().setup(_swagger_json__WEBPACK_IMPORTED_MODULE_6__)).use('/api', _infrastructure_apiRoutes__WEBPACK_IMPORTED_MODULE_7__.default);
    app.get('*', _controllers_renderController__WEBPACK_IMPORTED_MODULE_8__.default);
    await (0,mongoose__WEBPACK_IMPORTED_MODULE_4__.connect)(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    server = app.listen(port, () => console.log(`server started on port ${port}`));
  } catch (err) {
    var _server;

    (_server = server) === null || _server === void 0 ? void 0 : _server.close();
    console.error(err);
  }
}

startServer();

/***/ }),

/***/ "./server/swagger.json":
/*!*****************************!*\
  !*** ./server/swagger.json ***!
  \*****************************/
/*! default exports */
/*! export info [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export contact [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export email [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export url [provided] [no usage info] [missing usage info prevents renaming] */
/*!     other exports [not provided] [no usage info] */
/*!   export description [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export title [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export version [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export openapi [provided] [no usage info] [missing usage info prevents renaming] */
/*! export paths [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export /students [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export get [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export description [provided] [no usage info] [missing usage info prevents renaming] */
/*!       export responses [provided] [no usage info] [missing usage info prevents renaming] */
/*!         export 200 [provided] [no usage info] [missing usage info prevents renaming] */
/*!           export content [provided] [no usage info] [missing usage info prevents renaming] */
/*!             export application/json [provided] [no usage info] [missing usage info prevents renaming] */
/*!               export schema [provided] [no usage info] [missing usage info prevents renaming] */
/*!                 export items [provided] [no usage info] [missing usage info prevents renaming] */
/*!                   export properties [provided] [no usage info] [missing usage info prevents renaming] */
/*!                     export avatar [provided] [no usage info] [missing usage info prevents renaming] */
/*!                       export type [provided] [no usage info] [missing usage info prevents renaming] */
/*!                       other exports [not provided] [no usage info] */
/*!                     export dob [provided] [no usage info] [missing usage info prevents renaming] */
/*!                       export type [provided] [no usage info] [missing usage info prevents renaming] */
/*!                       other exports [not provided] [no usage info] */
/*!                     export firstName [provided] [no usage info] [missing usage info prevents renaming] */
/*!                       export type [provided] [no usage info] [missing usage info prevents renaming] */
/*!                       other exports [not provided] [no usage info] */
/*!                     export grade [provided] [no usage info] [missing usage info prevents renaming] */
/*!                       export type [provided] [no usage info] [missing usage info prevents renaming] */
/*!                       other exports [not provided] [no usage info] */
/*!                     export id [provided] [no usage info] [missing usage info prevents renaming] */
/*!                       export type [provided] [no usage info] [missing usage info prevents renaming] */
/*!                       other exports [not provided] [no usage info] */
/*!                     export lastName [provided] [no usage info] [missing usage info prevents renaming] */
/*!                       export type [provided] [no usage info] [missing usage info prevents renaming] */
/*!                       other exports [not provided] [no usage info] */
/*!                     export middleName [provided] [no usage info] [missing usage info prevents renaming] */
/*!                       export type [provided] [no usage info] [missing usage info prevents renaming] */
/*!                       other exports [not provided] [no usage info] */
/*!                     export performance [provided] [no usage info] [missing usage info prevents renaming] */
/*!                       export type [provided] [no usage info] [missing usage info prevents renaming] */
/*!                       other exports [not provided] [no usage info] */
/*!                     other exports [not provided] [no usage info] */
/*!                   export type [provided] [no usage info] [missing usage info prevents renaming] */
/*!                   other exports [not provided] [no usage info] */
/*!                 export type [provided] [no usage info] [missing usage info prevents renaming] */
/*!                 other exports [not provided] [no usage info] */
/*!               other exports [not provided] [no usage info] */
/*!             other exports [not provided] [no usage info] */
/*!           export description [provided] [no usage info] [missing usage info prevents renaming] */
/*!           other exports [not provided] [no usage info] */
/*!         other exports [not provided] [no usage info] */
/*!       export summary [provided] [no usage info] [missing usage info prevents renaming] */
/*!       other exports [not provided] [no usage info] */
/*!     other exports [not provided] [no usage info] */
/*!   other exports [not provided] [no usage info] */
/*! export servers [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export description [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export url [provided] [no usage info] [missing usage info prevents renaming] */
/*!     other exports [not provided] [no usage info] */
/*!   other exports [not provided] [no usage info] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = JSON.parse("{\"openapi\":\"3.0.0\",\"info\":{\"title\":\"Test App\",\"description\":\"Test app for Soft Media Lab.\",\"version\":\"1.0.0\",\"contact\":{\"name\":\"Arthur Grigoryan\",\"url\":\"https://inveteratecoder.github.io/\",\"email\":\"inveterate.coder@gmail.com\"}},\"servers\":[{\"url\":\"/api\",\"description\":\"api gateway\"}],\"paths\":{\"/students\":{\"get\":{\"summary\":\"Returns students.\",\"description\":\"Returns a list of all students in the db.\",\"responses\":{\"200\":{\"description\":\"A JSON array of student objects\",\"content\":{\"application/json\":{\"schema\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"id\":{\"type\":\"string\"},\"firstName\":{\"type\":\"string\"},\"lastName\":{\"type\":\"string\"},\"middleName\":{\"type\":\"string\"},\"avatar\":{\"type\":\"string\"},\"dob\":{\"type\":\"string\"},\"grade\":{\"type\":\"integer\"},\"performance\":{\"type\":\"integer\"}}}}}}}}}}}}");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("dotenv");;

/***/ }),

/***/ "dotenv-expand":
/*!********************************!*\
  !*** external "dotenv-expand" ***!
  \********************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("dotenv-expand");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("mongoose");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("path");;

/***/ }),

/***/ "swagger-ui-express":
/*!*************************************!*\
  !*** external "swagger-ui-express" ***!
  \*************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("swagger-ui-express");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./server/server.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=server.js.map