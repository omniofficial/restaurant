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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/candycornbackground.png */ \"./src/images/candycornbackground.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;700&family=Chewy&family=Fredoka+One&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n    background-size: cover; /* makes image cover entire viewport */\n    background-position: center; /* center the image */\n    background-repeat: no-repeat;\n    height: 100vh;\n    font-family: \"Baloo 2\", sans-serif;\n    font-size: 20px;\n}\n\nnav {\n    display: flex;\n    gap: 14px;\n    align-items: center;\n    justify-content: center;\n    background-color: #ffcd55;\n    padding: 20px;\n}\n\nbutton {\n    border: 2px solid white;\n    padding: 0.75rem 1.5rem; /* bigger buttons */\n    font-size: 1.1rem; /* slightly larger text */\n    border-radius: 8px; /* rounded corners */\n    cursor: pointer;\n    font-family: \"Fredoka One\", sans-serif;\n}\n\n/* Active tab/button */\nbutton.active {\n    background-color: #ff9933; /* highlighted when selected */\n    color: white;\n    border-color: #df7d19;\n}\n\n/* Has child elements main-section-title and content-container */\n#content {\n    display: flex;\n    flex-direction: column;\n    gap: 130px;\n    max-width: 1500px;\n    margin: 5rem auto;\n    padding: 3rem 130px;\n    background-color: #ffcd55;\n    border-radius: 20px;\n    box-sizing: border-box;\n    text-align: center;\n}\n\n/* Use for initial headings under each tab*/\n.main-title-container {\n    display: inline-block;\n    border: 15px solid #f44409;\n    padding: 5px 20px;\n    border-radius: 20px;\n    text-align: center;\n}\n\n.main-section-title {\n    margin: 0;\n    font-size: 30px;\n    font-family: \"Chewy\", cursive;\n}\n\n/* Use for subheadings, does not span across whole content div */\n.sub-title-container {\n    border: 15px solid #df7d19;\n    padding: 5px 20px;\n    border-radius: 20px;\n    text-align: center;\n}\n\n.sub-section-title {\n    margin: 0;\n    font-size: 15px;\n    font-family: \"Chewy\", cursive;\n}\n\n.content-container {\n    display: flex;\n    gap: 40px;\n    flex-direction: column;\n    border: 15px solid #f44409;\n    border-radius: 20px;\n    text-align: center;\n    padding: 30px 100px;\n}\n\n.generic-container,\n.menu-container,\n.contact-card {\n    display: flex;\n    flex-direction: column;\n    border: 15px solid #df7d19;\n    padding: 5px;\n    border-radius: 20px;\n}\n\n.text {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    white-space: pre-line;\n}\n\n.text p {\n    text-align: center;\n}\n\n.text h2 {\n    text-align: center;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js"
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
(module) {

eval("{\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/getUrl.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant/./src/styles.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/images/candyapple.png"
/*!***********************************!*\
  !*** ./src/images/candyapple.png ***!
  \***********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"e065289a94e19366c93b.png\";\n\n//# sourceURL=webpack://restaurant/./src/images/candyapple.png?\n}");

/***/ },

/***/ "./src/images/candycane.png"
/*!**********************************!*\
  !*** ./src/images/candycane.png ***!
  \**********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"8eb01c32447fe3299299.png\";\n\n//# sourceURL=webpack://restaurant/./src/images/candycane.png?\n}");

/***/ },

/***/ "./src/images/candycornbackground.png"
/*!********************************************!*\
  !*** ./src/images/candycornbackground.png ***!
  \********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"cc9d52749ac57ad77734.png\";\n\n//# sourceURL=webpack://restaurant/./src/images/candycornbackground.png?\n}");

/***/ },

/***/ "./src/images/lollipop.png"
/*!*********************************!*\
  !*** ./src/images/lollipop.png ***!
  \*********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"1e9d6b9faedbdd232cde.png\";\n\n//# sourceURL=webpack://restaurant/./src/images/lollipop.png?\n}");

/***/ },

/***/ "./src/images/tootsieroll.png"
/*!************************************!*\
  !*** ./src/images/tootsieroll.png ***!
  \************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"2dd3c2dca4fb20f81cb3.png\";\n\n//# sourceURL=webpack://restaurant/./src/images/tootsieroll.png?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _modules_homepage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/homepage.js */ \"./src/modules/homepage.js\");\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu.js */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contact.js */ \"./src/modules/contact.js\");\n\n\n\n\n\n// Load homepage by default\n(0,_modules_homepage_js__WEBPACK_IMPORTED_MODULE_1__.homepage)();\n\n// Active button logic for color\nconst buttons = document.querySelectorAll(\"nav button\");\n\nbuttons.forEach((button) => {\n    button.addEventListener(\"click\", () => {\n        // Remove 'active' from all buttons\n        buttons.forEach((btn) => btn.classList.remove(\"active\"));\n        // Add 'active' to clicked button\n        button.classList.add(\"active\");\n    });\n});\n\n// Tab switcher logic here. If user clicks a certain button, either run homepage, menu, or contact. Add event listeners.\n\n// Get buttons\nconst homeBtn = document.getElementById(\"home-btn\");\nconst menuBtn = document.getElementById(\"menu-btn\");\nconst contactBtn = document.getElementById(\"contact-btn\");\n\n// Add event listeners for each button.\nhomeBtn.addEventListener(\"click\", () => {\n    (0,_modules_homepage_js__WEBPACK_IMPORTED_MODULE_1__.homepage)();\n});\n\nmenuBtn.addEventListener(\"click\", () => {\n    (0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_2__.menu)();\n});\n\ncontactBtn.addEventListener(\"click\", () => {\n    (0,_modules_contact_js__WEBPACK_IMPORTED_MODULE_3__.contact)();\n});\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?\n}");

/***/ },

/***/ "./src/modules/contact.js"
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contact: () => (/* binding */ contact)\n/* harmony export */ });\n// CONTACT - Exports contact page\n\nfunction contact() {\n    console.log(\"homepage module is running\");\n\n    // Grab content div\n    const content = document.getElementById(\"content\");\n\n    // Clear previous content\n    content.textContent = \"\";\n\n    /* ----------- MAKE MAIN TITLE CONTAINER + TEXT ----------- */\n    const mainTitleContainer = document.createElement(\"div\");\n    mainTitleContainer.classList.add(\"main-title-container\");\n\n    const mainSectionTitle = document.createElement(\"div\");\n    mainSectionTitle.classList.add(\"main-section-title\");\n\n    const heading = document.createElement(\"h1\");\n    heading.textContent = \"Contact Us\";\n\n    mainSectionTitle.appendChild(heading);\n    mainTitleContainer.appendChild(mainSectionTitle);\n\n    content.appendChild(mainTitleContainer);\n\n    /* ----------- MAKE CONTENT CONTAINER + ELEMENTS ----------- */\n    const contentContainer = document.createElement(\"div\");\n    contentContainer.classList.add(\"content-container\");\n\n    /* Generic container helper function */\n    function createContactCard(title, name, number, email) {\n        const contactCard = document.createElement(\"div\");\n        contactCard.classList.add(\"contact-card\");\n\n        /* Inside of each contact card, I want the following: */\n        const contactTitle = document.createElement(\"h1\");\n        contactTitle.textContent = title;\n        contactCard.appendChild(contactTitle);\n\n        const contactName = document.createElement(\"p\");\n        contactName.textContent = name;\n        contactCard.appendChild(contactName);\n\n        const contactNumber = document.createElement(\"p\");\n        contactNumber.textContent = number;\n        contactCard.appendChild(contactNumber);\n\n        const contactEmail = document.createElement(\"p\");\n        contactEmail.textContent = email;\n        contactCard.appendChild(contactEmail);\n\n        return contactCard;\n    }\n\n    /* Call helper function */\n    contentContainer.appendChild(\n        createContactCard(\n            \"Little Piggie #1\",\n            \"Owner\",\n            \"999-999-9999\",\n            \"piggie1email@real.com\",\n        ),\n    );\n\n    contentContainer.appendChild(\n        createContactCard(\n            \"Little Piggie #2\",\n            \"Candy Specialist\",\n            \"999-999-9999\",\n            \"piggie2email@real.com\",\n        ),\n    );\n\n    contentContainer.appendChild(\n        createContactCard(\n            \"Little Piggie #3\",\n            \"Candy Chef\",\n            \"999-999-9999\",\n            \"piggie3email@real.com\",\n        ),\n    );\n\n    contentContainer.appendChild(\n        createContactCard(\n            \"Little Piggie #4\",\n            \"Candy chef\",\n            \"999-999-9999\",\n            \"piggie4email@real.com\",\n        ),\n    );\n\n    content.appendChild(contentContainer);\n}\n\n\n//# sourceURL=webpack://restaurant/./src/modules/contact.js?\n}");

/***/ },

/***/ "./src/modules/homepage.js"
/*!*********************************!*\
  !*** ./src/modules/homepage.js ***!
  \*********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   homepage: () => (/* binding */ homepage)\n/* harmony export */ });\n// HOMEPAGE - Creates a div element, adds the appropriate content and styles to that element and then appends it to the DOM.\n\nfunction homepage() {\n    console.log(\"homepage module is running\");\n\n    // Grab content div\n    const content = document.getElementById(\"content\");\n\n    // Clear previous content\n    content.textContent = \"\";\n\n    /* ----------- MAKE MAIN TITLE CONTAINER + TEXT ----------- */\n    const mainTitleContainer = document.createElement(\"div\");\n    mainTitleContainer.classList.add(\"main-title-container\");\n\n    const mainSectionTitle = document.createElement(\"div\");\n    mainSectionTitle.classList.add(\"main-section-title\");\n\n    const heading = document.createElement(\"h1\");\n    heading.textContent = \"Adrian's Candy Store\";\n\n    mainSectionTitle.appendChild(heading);\n    mainTitleContainer.appendChild(mainSectionTitle);\n\n    content.appendChild(mainTitleContainer);\n\n    /* ----------- MAKE CONTENT CONTAINER + ELEMENTS ----------- */\n    const contentContainer = document.createElement(\"div\");\n    contentContainer.classList.add(\"content-container\");\n\n    /* Generic container helper function */\n    function createGenericContainer(titleText, bodyText) {\n        const genericContainer = document.createElement(\"div\");\n        genericContainer.classList.add(\"generic-container\");\n\n        /* Inside of each generic container, I want the following: */\n        const heading = document.createElement(\"h1\");\n        heading.textContent = titleText;\n        heading.classList.add(\"text\");\n        genericContainer.appendChild(heading);\n\n        const description = document.createElement(\"p\");\n        description.textContent = bodyText;\n        description.classList.add(\"text\");\n        genericContainer.appendChild(description);\n\n        return genericContainer;\n    }\n\n    /* Call helper function */\n    contentContainer.appendChild(\n        createGenericContainer(\n            \"Overview\",\n            \"Welcome to Adrian's Candy Store! We offer a wide variety of sweet treats, from classic candies to unique gourmet confections. Our mission is to bring a smile to every customer with high quality, handcrafted sweets.\",\n        ),\n    );\n\n    contentContainer.appendChild(\n        createGenericContainer(\n            \"Hours\",\n            \"Monday - Friday: 10:00 AM - 8:00 PM\\nSaturday: 11:00 AM - 9:00 PM\\nSunday: 12:00 PM - 6:00 PM\",\n        ),\n    );\n\n    contentContainer.appendChild(\n        createGenericContainer(\n            \"Location\",\n            \"123 Sweet Tooth Lane, Sugarville, CA 90210\\nCome visit us and explore our delicious candy collection!\",\n        ),\n    );\n\n    content.appendChild(contentContainer);\n}\n\n\n//# sourceURL=webpack://restaurant/./src/modules/homepage.js?\n}");

/***/ },

/***/ "./src/modules/menu.js"
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menu: () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _images_lollipop_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/lollipop.png */ \"./src/images/lollipop.png\");\n/* harmony import */ var _images_tootsieroll_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/tootsieroll.png */ \"./src/images/tootsieroll.png\");\n/* harmony import */ var _images_candycane_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/candycane.png */ \"./src/images/candycane.png\");\n/* harmony import */ var _images_candyapple_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/candyapple.png */ \"./src/images/candyapple.png\");\n// MENU - Creates a div element, adds the appropriate content and styles to that element and then appends it to the DOM.\n\n\n\n\n\n\nfunction menu() {\n    console.log(\"menu module is running\");\n    // Grab content div\n    const content = document.getElementById(\"content\");\n\n    // Clear previous content\n    content.textContent = \"\";\n\n    /* ----------- MAKE MENU TITLE CONTAINER + TEXT ----------- */\n    const mainTitleContainer = document.createElement(\"div\");\n    mainTitleContainer.classList.add(\"main-title-container\");\n\n    const mainSectionTitle = document.createElement(\"div\");\n    mainSectionTitle.classList.add(\"main-section-title\");\n\n    const heading = document.createElement(\"h1\");\n    heading.textContent = \"Menu Items\";\n\n    mainSectionTitle.appendChild(heading);\n    mainTitleContainer.appendChild(mainSectionTitle);\n\n    content.appendChild(mainTitleContainer);\n\n    /* ----------- MAKE CONTENT CONTAINER + ELEMENTS ----------- */\n    const contentContainer = document.createElement(\"div\");\n    contentContainer.classList.add(\"content-container\");\n\n    /* Generic container helper function (each menu item) */\n    function createMenuItem(title, description, price, image) {\n        const menuItem = document.createElement(\"div\");\n        menuItem.classList.add(\"menu-container\");\n\n        /* Inside of each menu item, I want the following: */\n        const itemTitle = document.createElement(\"div\");\n        itemTitle.textContent = title;\n        menuItem.appendChild(itemTitle);\n\n        const itemDescription = document.createElement(\"p\");\n        itemDescription.textContent = description;\n        menuItem.appendChild(itemDescription);\n\n        const itemPrice = document.createElement(\"p\");\n        itemPrice.textContent = price;\n        menuItem.appendChild(itemPrice);\n\n        const itemImage = document.createElement(\"img\");\n        itemImage.src = image;\n        itemImage.alt = title;\n        menuItem.appendChild(itemImage);\n\n        return menuItem;\n    }\n\n    // Create test menu items */\n    contentContainer.appendChild(\n        createMenuItem(\n            \"Lollipop\",\n            \"A savory lollipop for a savory treat\",\n            \"$2\",\n            _images_lollipop_png__WEBPACK_IMPORTED_MODULE_0__,\n        ),\n    );\n\n    contentContainer.appendChild(\n        createMenuItem(\n            \"Tootsie Roll\",\n            \"The darkest of the darkest tootsie roll!\",\n            \"$1\",\n            _images_tootsieroll_png__WEBPACK_IMPORTED_MODULE_1__,\n        ),\n    );\n\n    contentContainer.appendChild(\n        createMenuItem(\n            \"Candy Cane\",\n            \"A minty candy cane\",\n            \"$1\",\n            _images_candycane_png__WEBPACK_IMPORTED_MODULE_2__,\n        ),\n    );\n\n    contentContainer.appendChild(\n        createMenuItem(\n            \"Candy Apple\",\n            \"A sweet and sour candy apple dipped in fudge\",\n            \"$5\",\n            _images_candyapple_png__WEBPACK_IMPORTED_MODULE_3__,\n        ),\n    );\n\n    content.appendChild(contentContainer);\n}\n\n\n//# sourceURL=webpack://restaurant/./src/modules/menu.js?\n}");

/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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