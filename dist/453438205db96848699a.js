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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/fonts/fonts.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/fonts/fonts.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./Roboto-Regular.ttf */ \"./src/fonts/Roboto-Regular.ttf\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\n// Module\nexports.push([module.i, \"@font-face{\\r\\n    font-family: 'Roboto';\\r\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format('truetype');\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/fonts/fonts.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./fonts/fonts.css */ \"./node_modules/css-loader/dist/cjs.js!./src/fonts/fonts.css\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);\n// Module\nexports.push([module.i, \"*{\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    font-family: 'Roboto';\\r\\n}\\r\\n\\r\\n/* LEFT HEADER */\\r\\n.left-side-block{\\r\\n    position: fixed;\\r\\n    width: 250px;\\r\\n    height: 100%;\\r\\n    left: -250px;\\r\\n    background-color: #eeeeee;\\r\\n}\\r\\n.left-side-block-header-title{\\r\\n    color: #212121;\\r\\n    font-family: 'Roboto', sans-serif;\\r\\n    font-size: 1.5em;\\r\\n}\\r\\n.left-header-title{\\r\\n    padding: 1rem 0 0.8rem 2rem;\\r\\n}\\r\\n#left-arrow-img{\\r\\n    cursor: pointer;\\r\\n    transition: 0.8s ease all;\\r\\n}\\r\\n.slide-img-after-click{\\r\\n    transform: rotateY(180deg);\\r\\n    transition: 0.8s ease all;\\r\\n}\\r\\n\\r\\n/*  LEFT MENU */\\r\\n.left-menu-item{\\r\\n    padding: 1rem 1rem 1rem 2rem;\\r\\n    line-height: 30px;\\r\\n    font-family: 'Roboto', sans-serif;\\r\\n    cursor: pointer;\\r\\n}\\r\\n.left-menu-item:hover{\\r\\n    background-color: #E0E0E0;\\r\\n}\\r\\n.left-menu-item:active{\\r\\n    background-color: #c7c7c7;\\r\\n}\\r\\n\\r\\n\\r\\n/*  MAIN BLOCK    */\\r\\n.main-block-header{\\r\\n    padding: 1rem;\\r\\n    font-size: 20px;\\r\\n    color: whitesmoke;\\r\\n    background-color: #2196F3;\\r\\n}\\r\\n.side-drawer{\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.main-block-content{\\r\\n    padding: 1rem;\\r\\n}\\r\\n\\r\\n.leftBar-after-click{\\r\\n    transform: translateX(250px);\\r\\n    transition: 0.2s ease all;\\r\\n}\\r\\n.main-after-click{\\r\\n    transform: translateX(250px);\\r\\n    width: calc(100% - 250px);\\r\\n    transition: 0.2s ease all;\\r\\n}\\r\\n.main-block, .left-side-block{\\r\\n    transition: 0.2s ease all;\\r\\n}\\r\\n\\r\\n.choose-cathegory{\\r\\n    text-align: center;\\r\\n}\\r\\n.current{\\r\\n    background-color: #c7c7c7;\\r\\n}\\r\\n\\r\\n/*    Weather     */\\r\\n:root {\\r\\n    --color__accent: #2196F3;\\r\\n  \\r\\n    --field__background: #f5f5f5;\\r\\n    --field__background--hover: #e9e9e9;\\r\\n    --input__border: rgba(0, 0, 0, 0.42);\\r\\n    --input__border--hover: rgba(0, 0, 0, 0.62);\\r\\n    --label__color: #222;\\r\\n  \\r\\n    --font__size: 16px;\\r\\n    --font__family: Roboto, Arial, sans-serif;\\r\\n  }\\r\\n  \\r\\n  .floating {\\r\\n    margin-top: 2rem;\\r\\n    margin-bottom: 2rem;\\r\\n    background-color: var(--field__background);\\r\\n    transition: background-color 0.2s ease;\\r\\n    border-top-left-radius: 4px;\\r\\n    border-top-right-radius: 4px;\\r\\n    width: 300px;\\r\\n  }\\r\\n  \\r\\n  .floating:hover,\\r\\n  .floating:focus-within {\\r\\n    background-color: var(--field__background--hover);\\r\\n  }\\r\\n  \\r\\n  .floating__input {\\r\\n    padding: 1.8rem 1rem 0.6rem;\\r\\n    font-size: 1rem;\\r\\n    border-bottom: 0.1rem solid var(--input__border);\\r\\n    transition: border-color 0.2s ease;\\r\\n    caret-color: var(--color__accent);\\r\\n    width: 300px;\\r\\n  }\\r\\n  \\r\\n  .floating:hover .floating__input {\\r\\n    border-color: var(--input__border--hover);\\r\\n  }\\r\\n  \\r\\n  .floating__input::placeholder {\\r\\n    color: rgba(0, 0, 0, 0);\\r\\n  }\\r\\n  \\r\\n  .floating__label {\\r\\n    display: block;\\r\\n    position: relative;\\r\\n    max-height: 0;\\r\\n    font-weight: 500;\\r\\n    pointer-events: none;\\r\\n  }\\r\\n  \\r\\n  .floating__label::before {\\r\\n    color: var(--label__color);\\r\\n    content: attr(data-content);\\r\\n    display: inline-block;\\r\\n    filter: blur(0);\\r\\n    backface-visibility: hidden;\\r\\n    transform-origin: left top;\\r\\n    transition: transform 0.2s ease;\\r\\n    left: 1rem;\\r\\n    position: relative;\\r\\n  }\\r\\n    \\r\\n  .floating__input:focus + .floating__label::after {\\r\\n    transform: scale3d(1, 1, 1);\\r\\n    opacity: 1;\\r\\n  }\\r\\n  \\r\\n  .floating__input:placeholder-shown + .floating__label::before {\\r\\n    transform: translate3d(0, -2.2rem, 0) scale3d(1, 1, 1);\\r\\n  }\\r\\n  \\r\\n  .floating__label::before,\\r\\n  .floating__input:focus + .floating__label::before {\\r\\n    transform: translate3d(0, -3.12rem, 0) scale3d(0.82, 0.82, 1);\\r\\n  }\\r\\n  \\r\\n  .floating__input:focus + .floating__label::before {\\r\\n    color: var(--color__accent);\\r\\n  }\\r\\n\\r\\n  input {\\r\\n    box-sizing: border-box;\\r\\n    background: none;\\r\\n    border-width: 0;\\r\\n    display: block;\\r\\n  }\\r\\n\\r\\n#get-weather-btn{\\r\\n    box-sizing: border-box;\\r\\n    margin-left: 0.5rem;\\r\\n    padding-left: 2rem;\\r\\n    padding-right: 2rem;\\r\\n    background-color: #2196F3;\\r\\n    font-size: 15px;\\r\\n    color: rgb(255, 255, 255);\\r\\n    cursor: pointer;\\r\\n    border: 0;\\r\\n    height: 60px;\\r\\n    transition: 0.2s ease all;\\r\\n\\r\\n}\\r\\n#get-weather-btn:active {\\r\\n    background-color: #6278d8;\\r\\n    transition: 0.2s ease all;\\r\\n}\\r\\n#get-weather-btn:disabled{\\r\\n  background-color: rgb(127, 193, 247);\\r\\n}\\r\\n\\r\\n/*  Weather Content after request */\\r\\n.location-name{\\r\\n  margin: 1rem 0 1rem 0;\\r\\n  font-size: 2em;\\r\\n  font-family: 'Roboto';\\r\\n  text-align: center;\\r\\n}\\r\\n.weather-on-hours{\\r\\n    float: left;\\r\\n    margin: 0.5rem;\\r\\n    padding: 0.5rem;\\r\\n    border: 1px solid grey;\\r\\n    box-sizing: border-box;\\r\\n}\\r\\n\\r\\n.new-line{\\r\\n    box-sizing: border-box;\\r\\n    clear: both;\\r\\n    margin: 1rem 0 0 1rem;\\r\\n    font-size: 2em;\\r\\n}\\r\\n.error-city{\\r\\n  margin-left: 1rem;\\r\\n  margin-top: 1rem;\\r\\n  font-family: 'Roboto';\\r\\n  font-size: 20px;\\r\\n  color: darkred;\\r\\n}\\r\\n\\r\\n/*   Exchange Page   */\\r\\n.exchange-header{\\r\\n  padding: 1rem;\\r\\n}\\r\\n\\r\\n.exchange-text-wrapper{\\r\\n  font-family: 'Roboto', sans-serif;\\r\\n  box-sizing: border-box;\\r\\n  padding: 1rem;\\r\\n  font-size: 18px;\\r\\n}\\r\\n\\r\\n.exchange-form{\\r\\n  padding: 1rem;\\r\\n  margin-top: -30px;\\r\\n}\\r\\n.floating-money{\\r\\n  float: left;\\r\\n  width: 150px;\\r\\n  margin-right: 1rem;\\r\\n}\\r\\n.floating__input_money{\\r\\n  width: 150px;\\r\\n}\\r\\n.right-arrow{\\r\\n  width: 50px;\\r\\n  text-align: center;\\r\\n  line-height: 120px;\\r\\n  font-size: 35px;\\r\\n}\\r\\n\\r\\n#get-exchange-btn{\\r\\n  clear: both;\\r\\n  line-height: 30px;\\r\\n  border: none;\\r\\n  background-color: #2196F3;\\r\\n  color: #fff;\\r\\n  cursor: pointer;\\r\\n}\\r\\n#get-exchange-btn:disabled {\\r\\n  background-color: rgb(127, 193, 247);\\r\\n}\\r\\n#get-exchange-btn-text {\\r\\n  font-family: 'Roboto', sans-serif;\\r\\n  font-size: 14px;\\r\\n}\\r\\n\\r\\n#currency-list{\\r\\n  clear: both;\\r\\n  font-family: 'Roboto', sans-serif;\\r\\n  font-size: 20px;\\r\\n  margin-left: 1rem;\\r\\n  transform: translateY(1rem);\\r\\n}\\r\\n.rest-currencies {\\r\\n  padding-bottom: 10px\\r\\n}\\r\\n.error{\\r\\n  color: darkred;\\r\\n}\\r\\n\\r\\n/*   Contact page     */\\r\\n.contact-block-wrapper{\\r\\n  transform: translateX(40%);\\r\\n}\\r\\n.contact-wrapper{\\r\\n  float: left;\\r\\n  text-align: center;\\r\\n  transform: translateY(50%);\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n.contact{\\r\\n  float: left;\\r\\n  text-align: center;\\r\\n  text-decoration-style: none;\\r\\n  margin-right: 1rem;\\r\\n  transform: translateX(2rem);\\r\\n\\r\\n}\\r\\n.contact-image{\\r\\n  width: 40px;\\r\\n  height: auto;\\r\\n  transition: 0.2s ease all;\\r\\n}\\r\\n.contact-image:hover {\\r\\n  width: 60px;\\r\\n  height: auto;\\r\\n  transition: 0.2s ease all;\\r\\n}\\r\\n.contact-link{\\r\\n  text-decoration: none;\\r\\n}\\r\\n.contact-text{\\r\\n  font-size: 16px;\\r\\n  margin-bottom: 2rem;\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar */ \"./src/sidebar.js\");\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weather */ \"./src/weather.js\");\n/* harmony import */ var _exchange__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exchange */ \"./src/exchange.js\");\n/* harmony import */ var _contacts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contacts */ \"./src/contacts.js\");\n/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./info */ \"./src/info.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst slideButton = document.getElementById('slide-btn');\r\nconst slideImg = document.getElementById('left-arrow-img');\r\nslideButton.addEventListener('click', _sidebar__WEBPACK_IMPORTED_MODULE_1__[\"showAndHideLeftBar\"]);\r\nslideImg.addEventListener('click', _sidebar__WEBPACK_IMPORTED_MODULE_1__[\"showAndHideLeftBar\"]);\r\n\r\n\r\nconst weatherBtn = document.getElementById('weather-btn');\r\nconst exchangeBtn = document.getElementById('exchange-btn');\r\nconst infoBtn = document.getElementById('info-btn');\r\nconst contactBtn = document.getElementById('contact-btn');\r\nconst mainContentBlock = document.getElementById('main-content-block');\r\n\r\nweatherBtn.addEventListener('click', weather);\r\nexchangeBtn.addEventListener('click', exchange);\r\ninfoBtn.addEventListener('click', info)\r\ncontactBtn.addEventListener('click', constacts)\r\n\r\nfunction weather(){\r\n\r\n    weatherBtn.classList.add('current');\r\n    exchangeBtn.classList.remove('current');\r\n    infoBtn.classList.remove('current');\r\n    contactBtn.classList.remove('current');\r\n\r\n    const weatherHTML = _weather__WEBPACK_IMPORTED_MODULE_2__[\"Weather\"].dispalyHTMLForm();\r\n    mainContentBlock.innerHTML = weatherHTML;\r\n\r\n    _weather__WEBPACK_IMPORTED_MODULE_2__[\"Weather\"].setCityValueIfPosible();\r\n    const getWeatherBtn = document.getElementById('get-weather-btn');\r\n    getWeatherBtn.addEventListener('click', getCurrentWeather);\r\n\r\n    function getCurrentWeather(event){\r\n        event.preventDefault();\r\n        getWeatherBtn.disabled = true;\r\n        const cityName = document.getElementById('city-name').value;\r\n        \r\n        _weather__WEBPACK_IMPORTED_MODULE_2__[\"Weather\"].forecast(cityName)\r\n            .then(response => {\r\n                getWeatherBtn.disabled = false;\r\n                _weather__WEBPACK_IMPORTED_MODULE_2__[\"Weather\"].renderList(response);\r\n            })\r\n\r\n    }   \r\n\r\n}\r\nfunction exchange(){\r\n\r\n    weatherBtn.classList.remove('current');\r\n    exchangeBtn.classList.add('current');\r\n    infoBtn.classList.remove('current');\r\n    contactBtn.classList.remove('current');\r\n\r\n    const exchangeHTML = Object(_exchange__WEBPACK_IMPORTED_MODULE_3__[\"dispalyExchangePage\"])();\r\n    mainContentBlock.innerHTML = exchangeHTML;\r\n\r\n    const convertCurrencyBtn = document.getElementById('get-exchange-btn');\r\n\r\n    convertCurrencyBtn.addEventListener('click', convertMoney);\r\n\r\n    function convertMoney(event){\r\n        event.preventDefault();\r\n        convertCurrencyBtn.disabled = true;\r\n\r\n        Object(_exchange__WEBPACK_IMPORTED_MODULE_3__[\"getCurrencyRate\"])()\r\n            .then(list => {\r\n                convertCurrencyBtn.disabled = false;\r\n                Object(_exchange__WEBPACK_IMPORTED_MODULE_3__[\"showAllCurrencies\"])(list)\r\n            })\r\n    }\r\n\r\n}\r\nfunction info(){\r\n    weatherBtn.classList.remove('current');\r\n    exchangeBtn.classList.remove('current');\r\n    infoBtn.classList.add('current');\r\n    contactBtn.classList.remove('current');\r\n\r\n    mainContentBlock.innerHTML = Object(_info__WEBPACK_IMPORTED_MODULE_5__[\"showInfo\"])();\r\n}\r\nfunction constacts(){\r\n    weatherBtn.classList.remove('current');\r\n    exchangeBtn.classList.remove('current');\r\n    infoBtn.classList.remove('current');\r\n    contactBtn.classList.add('current');\r\n\r\n    mainContentBlock.innerHTML = Object(_contacts__WEBPACK_IMPORTED_MODULE_4__[\"showContacts\"])();\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/contacts.js":
/*!*************************!*\
  !*** ./src/contacts.js ***!
  \*************************/
/*! exports provided: showContacts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showContacts\", function() { return showContacts; });\nfunction showContacts(){\r\n        return `\r\n        <div class=\"contact-block-wrapper\">\r\n            <div class=\"contact-wrapper\">\r\n                <p class=\"contact-text\">Author contacts:</p>\r\n                <br>\r\n                <p class=\"contact-text\">G-mail: <a href=\"https://mail.google.com/mail/u/0/#inbox?compose=new\" target=\"_blank\">stepanovvaska2431@gmail.com</a></p>\r\n                <div class=\"contact\">\r\n                    <a class=\"contact-link\" href=\"https://www.instagram.com/stepanov.vasya/?hl=uk\" target=\"_blank\">\r\n                        <img class=\"contact-image\" src=\"./images/instagram.png\">\r\n                    </a>\r\n                </div>            \r\n                <div class=\"contact\">\r\n                    <a class=\"contact-link\" href=\"https://t.me/VasiaStepanov\" target=\"_blank\">\r\n                        <img class=\"contact-image\" src=\"./images/telegram.png\">\r\n                    </a>\r\n                </div>\r\n                <div class=\"contact\">\r\n                    <a class=\"contact-link\" href=\"https://www.facebook.com/vasya.stepanov.56\" target=\"_blank\">\r\n                        <img class=\"contact-image\" src=\"./images/facebook.png\">\r\n                    </a>\r\n                </div>\r\n                <div class=\"contact\">\r\n                    <a class=\"contact-link\" href=\"https://github.com/vasiastep\" target=\"_blank\">\r\n                        <img class=\"contact-image\" src=\"./images/github.png\">\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    `\r\n    };\n\n//# sourceURL=webpack:///./src/contacts.js?");

/***/ }),

/***/ "./src/exchange.js":
/*!*************************!*\
  !*** ./src/exchange.js ***!
  \*************************/
/*! exports provided: dispalyExchangePage, getCurrencyRate, showAllCurrencies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dispalyExchangePage\", function() { return dispalyExchangePage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCurrencyRate\", function() { return getCurrencyRate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showAllCurrencies\", function() { return showAllCurrencies; });\nfunction dispalyExchangePage(){\r\n    return `\r\n        <h1 class=\"exchange-header\">Currency converter</h1>\r\n\r\n        <div class=\"exchange-text-wrapper\">\r\n            <p class=\"exchange-text\">Enter the amount of currency(not required) you would like to convert. In \"From\" and \"To\" enter the currency in format \"USD\"</p>\r\n        </div>\r\n\r\n        <form class=\"exchange-form\">\r\n            <div class=\"floating floating-money\">\r\n                <input id=\"amount\" class=\"floating__input floating__input_money\" placeholder=\"Amount\"/>\r\n                <label for=\"city-name\" class=\"floating__label\" data-content=\"Amount\">\r\n            </div>\r\n            <div class=\"floating floating-money\">\r\n                <input id=\"from_currency\" class=\"floating__input floating__input_money\" placeholder=\"From\" required/>\r\n                <label for=\"from_currency\" class=\"floating__label\" data-content=\"From\">\r\n            </div>\r\n            <div class=\"right-arrow floating-money\"> > </div>\r\n            <div class=\"floating floating-money\">\r\n                <input id=\"to_currency\" class=\"floating__input floating__input_money\" placeholder=\"To\" required/>\r\n                <label for=\"to_currency\" class=\"floating__label\" data-content=\"To\">\r\n            </div>\r\n            <button class=\"floating-money\" id=\"get-exchange-btn\"><span id=\"get-exchange-btn-text\">Convert</span></button>\r\n        </form>\r\n        <div id=\"currency-list\"></div>\r\n\r\n    `\r\n}\r\n\r\nfunction getCurrencyRate(){\r\n    const appId = '226f49dd5818459c800920519749e2c4';\r\n\r\n    return fetch(`https://openexchangerates.org/api/latest.json?app_id=${appId}&base=USD&prettyprint=false`)  \r\n        .then(response => response.json())\r\n        .then(data => {\r\n            console.log(data);\r\n            return data;\r\n        })\r\n}\r\n\r\nfunction showAllCurrencies(list){\r\n    const currencyList = document.getElementById('currency-list');\r\n\r\n    const convertedCurrency = document.getElementById('to_currency').value;\r\n    const numberValueOfBaseCurrency = +document.getElementById('amount').value;\r\n    const fromCurrency = document.getElementById('from_currency').value;\r\n\r\n\r\n    if( (list.rates[`${convertedCurrency}`] && list.rates[`${fromCurrency}`]) != undefined){\r\n        if(numberValueOfBaseCurrency) {\r\n            currencyList.innerHTML = `\r\n                <div>\r\n                    ${numberValueOfBaseCurrency} ${fromCurrency} = \r\n                    ${(numberValueOfBaseCurrency * \r\n                        list.rates[`${convertedCurrency}`]/\r\n                        list.rates[`${fromCurrency}`]).toFixed(2)} \r\n                        ${convertedCurrency}\r\n                </div>`;\r\n        } else {\r\n            currencyList.innerHTML = `\r\n                <p >\r\n                    1 ${fromCurrency} = ${(list.rates[`${convertedCurrency}`]/\r\n                        list.rates[`${fromCurrency}`]).toFixed(2)} \r\n                        ${convertedCurrency}\r\n                </p><br>`;\r\n            for (let elem in list.rates){\r\n                currencyList.innerHTML += `\r\n                    <p class=\"rest-currencies\">\r\n                        1 ${fromCurrency} =  ${(list.rates[`${elem}`] / \r\n                        list.rates[`${fromCurrency}`]).toFixed(2)} ${elem}\r\n                    </p>`;\r\n            }\r\n        }\r\n    } else {\r\n        currencyList.innerHTML = '<p class=\"error\">Can not find such currencies</p>';\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/exchange.js?");

/***/ }),

/***/ "./src/fonts/Roboto-Regular.ttf":
/*!**************************************!*\
  !*** ./src/fonts/Roboto-Regular.ttf ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"11eabca2251325cfc5589c9c6fb57b46.ttf\");\n\n//# sourceURL=webpack:///./src/fonts/Roboto-Regular.ttf?");

/***/ }),

/***/ "./src/info.js":
/*!*********************!*\
  !*** ./src/info.js ***!
  \*********************/
/*! exports provided: showInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showInfo\", function() { return showInfo; });\nfunction showInfo(){\r\n    return `<div class=\"\">\r\n        It is a web-application that will help you to get up-to-date information about the currency and the latest\r\n        information about the weather. If you want to thank the author or offer a job follow links in the tab \"Contacts\".\r\n    </div>`;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/info.js?");

/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/*! exports provided: showAndHideLeftBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showAndHideLeftBar\", function() { return showAndHideLeftBar; });\nconst mainblock = document.getElementById('main-block-id');\r\nconst leftBlock = document.getElementById('left-side-block-id');\r\nconst slideImg = document.getElementById('left-arrow-img');\r\n\r\nfunction showAndHideLeftBar() {\r\n    mainblock.classList.toggle('main-after-click');\r\n    leftBlock.classList.toggle('leftBar-after-click');\r\n    slideImg.classList.toggle('slide-img-after-click');\r\n}\r\n\n\n//# sourceURL=webpack:///./src/sidebar.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/*! exports provided: Weather */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Weather\", function() { return Weather; });\nclass Weather {\r\n    static dispalyHTMLForm(){\r\n        \r\n        return `\r\n            <h1 class=\"weather-header\">Weather forecast</h1>\r\n            <form>\r\n                <div class=\"floating\">\r\n                    <input id=\"city-name\" class=\"floating__input\" placeholder=\"City\" />\r\n                    <label for=\"city-name\" class=\"floating__label\" data-content=\"City\">\r\n                </div>\r\n                <button id=\"get-weather-btn\"><span id=\"get-weather-btn-text\">GET WEATHER</span></button>\r\n            </form>\r\n            <div id=\"weather-list\"></div>\r\n            `\r\n    }\r\n\r\n    static setCityValueIfPosible(){\r\n        document.getElementById('city-name').value = JSON.parse(localStorage.getItem('city'));\r\n    }\r\n    \r\n    static forecast(cityName){\r\n        localStorage.setItem('city', JSON.stringify(cityName));\r\n\r\n        const apiKey = '249d0f9002c1194bbde52c002bcaf14d';\r\n    \r\n        return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&APPID=${apiKey}`)\r\n            .then(response => response.json())\r\n            .then(data => {\r\n                return data;\r\n            })\r\n    }\r\n\r\n    static renderList(response){\r\n        const weatherList = document.getElementById('weather-list');\r\n        \r\n        if(response.cod >= 300){\r\n            weatherList.innerHTML = '<p class=\"error-city\">Wrong city or town. Try again.</p>';\r\n        } else{\r\n            \r\n            \r\n            const html = `\r\n                <div class=\"location-name\">${response.city.name}, ${response.city.country}</div>\r\n            ` + response.list.map(toList).join('');\r\n            weatherList.innerHTML = html;\r\n    \r\n            for(let i=0; i < response.list.length; i++){\r\n    \r\n                if( new Date(response.list[i].dt_txt).toLocaleDateString() !=\r\n                    new Date(response.list[i+1].dt_txt).toLocaleDateString()){\r\n                        const breakLine = document.createElement('div');\r\n                        breakLine.classList.add('new-line');\r\n                        breakLine.innerHTML = new Date(response.list[i+1].dt_txt).toLocaleDateString();\r\n                        document.getElementById(response.list[i].dt).after(breakLine);\r\n                } else continue;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n\r\nfunction toList(weatherElement){\r\n\r\n    let rain;\r\n    if(weatherElement.hasOwnProperty('rain')){\r\n        rain = weatherElement.rain['3h'] + ' mm';\r\n    } else {\r\n        rain = '-'\r\n    }\r\n\r\n\r\n    const weatherBlockHTML = `\r\n    <div class=\"weather-on-hours\" id=\"${weatherElement.dt}\">\r\n        <p style=\"text-align:center\">${new Date(weatherElement.dt_txt).toLocaleTimeString()}</p>\r\n        <p style=\"text-align:center\"><img src=\"https://openweathermap.org/img/wn/${weatherElement.weather[0]['icon']}.png\"></p>\r\n        <p>Temperature: ${(weatherElement.main.temp - 273).toFixed(1)} &degC</p>\r\n        <p>Wind: ${weatherElement.wind.speed} km/h</p>\r\n        <p>Humidity: ${weatherElement.main.humidity} %</p>\r\n        <p>Rain: ${rain}</p>\r\n        <p>Pressure: ${(weatherElement.main.pressure * 0.75).toFixed(1)} mm</p>\r\n    </div>\r\n`\r\n    return weatherBlockHTML;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/weather.js?");

/***/ })

/******/ });