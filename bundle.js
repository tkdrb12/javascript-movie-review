/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ 'use strict';
  /******/ var __webpack_modules__ = {
    /***/ './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/styles/common.css':
      /*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/styles/common.css ***!
  \*************************************************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, "* {\\r\\n  box-sizing: border-box !important;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-size: 14px;\\r\\n  background-color: #222222;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\na {\\r\\n  color: inherit;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n#app {\\r\\n  padding-bottom: 48px;\\r\\n}\\r\\n\\r\\n*:focus {\\r\\n  outline: none;\\r\\n}\\r\\n.item-view,\\r\\n.item-test {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.item-view {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  width: 1200px;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\n.item-view h2 {\\r\\n  font-size: 2rem;\\r\\n  font-weight: bold;\\r\\n  user-select: none;\\r\\n}\\r\\n\\r\\n/* https://andrew.hedges.name/experiments/aspect_ratio/ */\\r\\n\\r\\n.item-list {\\r\\n  display: grid;\\r\\n  margin: 48px 0;\\r\\n  grid-template-columns: repeat(4, 180px);\\r\\n  grid-column-gap: 160px;\\r\\n  grid-row-gap: 48px;\\r\\n}\\r\\n\\r\\n.item-card {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.item-thumbnail {\\r\\n  border-radius: 8px;\\r\\n  width: 180px;\\r\\n  height: 270px;\\r\\n  background-size: contain;\\r\\n}\\r\\n\\r\\n.item-title {\\r\\n  margin-top: 16px;\\r\\n  font-size: 1.2rem;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.item-score {\\r\\n  margin-top: 16px;\\r\\n  font-size: 1.2rem;\\r\\n}\\r\\n\\r\\n.item-score::after {\\r\\n  margin-left: 8px;\\r\\n}\\r\\n\\r\\n.item-title.skeleton::after,\\r\\n.item-score.skeleton::after {\\r\\n  font-size: 0;\\r\\n  content: \'loading\';\\r\\n}\\r\\n\\r\\n.full-width {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.last-item {\\r\\n  margin-top: 48px;\\r\\n}\\r\\n\\r\\nbutton.btn {\\r\\n  border: 0;\\r\\n  border-radius: 8px;\\r\\n  height: 30px;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\nbutton.primary {\\r\\n  background: #f33f3f;\\r\\n}\\r\\n\\r\\n.item-card .skeleton {\\r\\n  background: linear-gradient(-90deg, #aaa, #f0f0f0, #aaa, #f0f0f0);\\r\\n  background-size: 400%;\\r\\n  animation: skeleton-animation 5s infinite ease-out;\\r\\n  border-radius: 8px;\\r\\n}\\r\\n\\r\\n@keyframes skeleton-animation {\\r\\n  0% {\\r\\n    background-position: 0% 50%;\\r\\n  }\\r\\n  50% {\\r\\n    background-position: 100% 50%;\\r\\n  }\\r\\n  100% {\\r\\n    background-position: 0% 50%;\\r\\n  }\\r\\n}\\r\\nheader {\\r\\n  width: 100%;\\r\\n  min-width: 1200px;\\r\\n  height: 72px;\\r\\n  background-color: #222;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 0 20px;\\r\\n  border-bottom: 1px solid white;\\r\\n  margin-bottom: 48px;\\r\\n}\\r\\n\\r\\nheader h1 {\\r\\n  cursor: pointer;\\r\\n  user-select: none;\\r\\n  font-size: 2rem;\\r\\n  font-weight: bold;\\r\\n  letter-spacing: -0.1rem;\\r\\n  color: #f33f3f;\\r\\n}\\r\\n\\r\\nheader > .search-box {\\r\\n  background: #fff;\\r\\n  padding: 8px;\\r\\n  border-radius: 4px;\\r\\n}\\r\\n\\r\\nheader .search-box > form > input {\\r\\n  border: 0;\\r\\n}\\r\\n\\r\\nheader .search-box > form > .search-button {\\r\\n  width: 14px;\\r\\n  border: 0;\\r\\n  text-indent: -1000rem;\\r\\n  background: url(\'./search_button.png\') transparent no-repeat 0 1px;\\r\\n  background-size: contain;\\r\\n}\\r\\n", ""]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/styles/common.css?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B1%5D'
        );

        /***/
      },

    /***/ './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/styles/reset.css':
      /*!************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/styles/reset.css ***!
  \************************************************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/\\r\\n   v2.0 | 20110126\\r\\n   License: none (public domain)\\r\\n*/\\r\\n\\r\\nhtml,\\r\\nbody,\\r\\ndiv,\\r\\nspan,\\r\\napplet,\\r\\nobject,\\r\\niframe,\\r\\nh1,\\r\\nh2,\\r\\nh3,\\r\\nh4,\\r\\nh5,\\r\\nh6,\\r\\np,\\r\\nblockquote,\\r\\npre,\\r\\na,\\r\\nabbr,\\r\\nacronym,\\r\\naddress,\\r\\nbig,\\r\\ncite,\\r\\ncode,\\r\\ndel,\\r\\ndfn,\\r\\nem,\\r\\nimg,\\r\\nins,\\r\\nkbd,\\r\\nq,\\r\\ns,\\r\\nsamp,\\r\\nsmall,\\r\\nstrike,\\r\\nstrong,\\r\\nsub,\\r\\nsup,\\r\\ntt,\\r\\nvar,\\r\\nb,\\r\\nu,\\r\\ni,\\r\\ncenter,\\r\\ndl,\\r\\ndt,\\r\\ndd,\\r\\nol,\\r\\nul,\\r\\nli,\\r\\nfieldset,\\r\\nform,\\r\\nlabel,\\r\\nlegend,\\r\\ntable,\\r\\ncaption,\\r\\ntbody,\\r\\ntfoot,\\r\\nthead,\\r\\ntr,\\r\\nth,\\r\\ntd,\\r\\narticle,\\r\\naside,\\r\\ncanvas,\\r\\ndetails,\\r\\nembed,\\r\\nfigure,\\r\\nfigcaption,\\r\\nfooter,\\r\\nheader,\\r\\nhgroup,\\r\\nmenu,\\r\\nnav,\\r\\noutput,\\r\\nruby,\\r\\nsection,\\r\\nsummary,\\r\\ntime,\\r\\nmark,\\r\\naudio,\\r\\nvideo {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  border: 0;\\r\\n  font-size: 100%;\\r\\n  font: inherit;\\r\\n  vertical-align: baseline;\\r\\n}\\r\\n/* HTML5 display-role reset for older browsers */\\r\\narticle,\\r\\naside,\\r\\ndetails,\\r\\nfigcaption,\\r\\nfigure,\\r\\nfooter,\\r\\nheader,\\r\\nhgroup,\\r\\nmenu,\\r\\nnav,\\r\\nsection {\\r\\n  display: block;\\r\\n}\\r\\nbody {\\r\\n  line-height: 1;\\r\\n}\\r\\nol,\\r\\nul {\\r\\n  list-style: none;\\r\\n}\\r\\nblockquote,\\r\\nq {\\r\\n  quotes: none;\\r\\n}\\r\\nblockquote:before,\\r\\nblockquote:after,\\r\\nq:before,\\r\\nq:after {\\r\\n  content: \'\';\\r\\n  content: none;\\r\\n}\\r\\ntable {\\r\\n  border-collapse: collapse;\\r\\n  border-spacing: 0;\\r\\n}\\r\\n", ""]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/styles/reset.css?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B1%5D'
        );

        /***/
      },

    /***/ './node_modules/css-loader/dist/runtime/api.js':
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
        eval(
          '\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = "";\n      var needLayer = typeof item[5] !== "undefined";\n      if (item[4]) {\n        content += "@supports (".concat(item[4], ") {");\n      }\n      if (item[2]) {\n        content += "@media ".concat(item[2], " {");\n      }\n      if (needLayer) {\n        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += "}";\n      }\n      if (item[2]) {\n        content += "}";\n      }\n      if (item[4]) {\n        content += "}";\n      }\n      return content;\n    }).join("");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === "string") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== "undefined") {\n        if (typeof item[5] === "undefined") {\n          item[5] = layer;\n        } else {\n          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = "".concat(supports);\n        } else {\n          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/css-loader/dist/runtime/api.js?'
        );

        /***/
      },

    /***/ './node_modules/css-loader/dist/runtime/noSourceMaps.js':
      /*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
      /***/ (module) => {
        eval(
          '\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/css-loader/dist/runtime/noSourceMaps.js?'
        );

        /***/
      },

    /***/ './src/styles/common.css':
      /*!*******************************!*\
  !*** ./src/styles/common.css ***!
  \*******************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_common_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./common.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/styles/common.css");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_common_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_common_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_common_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_common_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/styles/common.css?'
        );

        /***/
      },

    /***/ './src/styles/reset.css':
      /*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./reset.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/styles/reset.css");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/styles/reset.css?'
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js':
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = "".concat(id, " ").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?'
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/insertBySelector.js':
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === "undefined") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error("Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/insertBySelector.js?'
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/insertStyleElement.js':
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement("style");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/insertStyleElement.js?'
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js':
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute("nonce", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?'
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/styleDomAPI.js':
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = "";\n\n  if (obj.supports) {\n    css += "@supports (".concat(obj.supports, ") {");\n  }\n\n  if (obj.media) {\n    css += "@media ".concat(obj.media, " {");\n  }\n\n  var needLayer = typeof obj.layer !== "undefined";\n\n  if (needLayer) {\n    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += "}";\n  }\n\n  if (obj.media) {\n    css += "}";\n  }\n\n  if (obj.supports) {\n    css += "}";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== "undefined") {\n    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/styleDomAPI.js?'
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/styleTagTransform.js':
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/styleTagTransform.js?'
        );

        /***/
      },

    /***/ './src/apis/index.ts':
      /*!***************************!*\
  !*** ./src/apis/index.ts ***!
  \***************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "fetchMoviesByKeyword": () => (/* binding */ fetchMoviesByKeyword),\n/* harmony export */   "fetchPopularMovies": () => (/* binding */ fetchPopularMovies),\n/* harmony export */   "waitFor": () => (/* binding */ waitFor)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nconst REDIRECT_SERVER_HOST = \'https://ornate-swan-ce5a5e.netlify.app\';\r\nconst fetchQuery = (path, init) => __awaiter(void 0, void 0, void 0, function* () {\r\n    const url = new URL(path, REDIRECT_SERVER_HOST);\r\n    const response = yield fetch(url, init);\r\n    const body = yield response.json();\r\n    if (!response.ok) {\r\n        throw new Error(body.error.message);\r\n    }\r\n    return body;\r\n});\r\nconst fetchMoviesByKeyword = (keyword, page) => {\r\n    return fetchQuery(`tmdb/search/movie?query=${keyword}&${page ? `page=${page}` : \'\'}&language=ko`);\r\n};\r\nconst fetchPopularMovies = (page = 1) => {\r\n    return fetchQuery(`tmdb/movie/popular?page=${page}&language=ko`);\r\n};\r\nconst waitFor = (promise) => __awaiter(void 0, void 0, void 0, function* () {\r\n    try {\r\n        const data = yield promise;\r\n        return [data, null];\r\n    }\r\n    catch (err) {\r\n        return [undefined, new Error(JSON.stringify(err))];\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/apis/index.ts?'
        );

        /***/
      },

    /***/ './src/components/App/actions.ts':
      /*!***************************************!*\
  !*** ./src/components/App/actions.ts ***!
  \***************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HeaderComponent\": () => (/* binding */ HeaderComponent),\n/* harmony export */   \"MovieChartComponent\": () => (/* binding */ MovieChartComponent)\n/* harmony export */ });\n/* harmony import */ var _utils_common_domHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/common/domHelper */ \"./src/utils/common/domHelper.ts\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Header */ \"./src/components/Header/index.ts\");\n/* harmony import */ var _MovieChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MovieChart */ \"./src/components/MovieChart/index.ts\");\n/* harmony import */ var _utils_common_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../utils/common/debounce */ \"./src/utils/common/debounce.ts\");\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core */ \"./src/core/index.ts\");\n\r\n\r\n\r\n\r\n\r\nconst AppActions = () => {\r\n    const HeaderComponent = (props) => {\r\n        (0,_core__WEBPACK_IMPORTED_MODULE_4__.setComponentList)('#Header', (0,_Header__WEBPACK_IMPORTED_MODULE_1__.Header)(props));\r\n        return '';\r\n        return ((0,_utils_common_debounce__WEBPACK_IMPORTED_MODULE_3__.debounce)(() => {\r\n            (0,_utils_common_domHelper__WEBPACK_IMPORTED_MODULE_0__.replaceComponent)((0,_utils_common_domHelper__WEBPACK_IMPORTED_MODULE_0__.$)('#Header'), (0,_Header__WEBPACK_IMPORTED_MODULE_1__.Header)(props));\r\n        })() && '');\r\n    };\r\n    const MovieChartComponent = (props) => {\r\n        (0,_core__WEBPACK_IMPORTED_MODULE_4__.setComponentList)('#MovieChart', (0,_MovieChart__WEBPACK_IMPORTED_MODULE_2__.MovieChart)(props));\r\n        return '';\r\n        return ((0,_utils_common_debounce__WEBPACK_IMPORTED_MODULE_3__.debounce)(() => {\r\n            (0,_utils_common_domHelper__WEBPACK_IMPORTED_MODULE_0__.replaceComponent)((0,_utils_common_domHelper__WEBPACK_IMPORTED_MODULE_0__.$)('#MovieChart'), (0,_MovieChart__WEBPACK_IMPORTED_MODULE_2__.MovieChart)(props));\r\n        })() && '');\r\n    };\r\n    return { HeaderComponent, MovieChartComponent };\r\n};\r\nconst { HeaderComponent, MovieChartComponent } = AppActions();\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/App/actions.ts?"
        );

        /***/
      },

    /***/ './src/components/App/index.ts':
      /*!*************************************!*\
  !*** ./src/components/App/index.ts ***!
  \*************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "App": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core */ "./src/core/index.ts");\n/* harmony import */ var _utils_common_domHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../utils/common/domHelper */ "./src/utils/common/domHelper.ts");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/components/App/actions.ts");\n\r\n\r\n\r\nconst App = (0,_core__WEBPACK_IMPORTED_MODULE_0__.assemble)(() => {\r\n    const [keyword, setKeyword] = (0,_core__WEBPACK_IMPORTED_MODULE_0__.useState)(\'\');\r\n    const $events = [];\r\n    const handleKeyword = (keyword) => {\r\n        setKeyword(keyword);\r\n    };\r\n    const $template = (0,_utils_common_domHelper__WEBPACK_IMPORTED_MODULE_1__.getElement)(` \r\n      <div>\r\n        <fragment id="Header">${(0,_actions__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent)({ keyword, handleKeyword })}</fragment>\r\n        <fragment id="MovieChart">${(0,_actions__WEBPACK_IMPORTED_MODULE_2__.MovieChartComponent)({ keyword })}</fragment>\r\n      </div>\r\n    `);\r\n    return [$template, $events];\r\n});\r\n\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/App/index.ts?'
        );

        /***/
      },

    /***/ './src/components/Header/action.ts':
      /*!*****************************************!*\
  !*** ./src/components/Header/action.ts ***!
  \*****************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "KeywordInputComponent": () => (/* binding */ KeywordInputComponent)\n/* harmony export */ });\n/* harmony import */ var _utils_common_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../utils/common/debounce */ "./src/utils/common/debounce.ts");\n/* harmony import */ var _utils_common_domHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../utils/common/domHelper */ "./src/utils/common/domHelper.ts");\n\r\n\r\nconst HeaderAction = () => {\r\n    const KeywordInputComponent = (keyword) => {\r\n        return ((0,_utils_common_debounce__WEBPACK_IMPORTED_MODULE_0__.debounce)(() => {\r\n            var _a;\r\n            (_a = (0,_utils_common_domHelper__WEBPACK_IMPORTED_MODULE_1__.$)(`input[name="keyword"]`)) === null || _a === void 0 ? void 0 : _a.setAttribute(\'placeholder\', keyword);\r\n        })() && \'\');\r\n    };\r\n    return { KeywordInputComponent };\r\n};\r\nconst { KeywordInputComponent } = HeaderAction();\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/Header/action.ts?'
        );

        /***/
      },

    /***/ './src/components/Header/index.ts':
      /*!****************************************!*\
  !*** ./src/components/Header/index.ts ***!
  \****************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "Header": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core */ "./src/core/index.ts");\n/* harmony import */ var _utils_common_formData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/common/formData */ "./src/utils/common/formData.ts");\n/* harmony import */ var _utils_common_domHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../utils/common/domHelper */ "./src/utils/common/domHelper.ts");\n/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action */ "./src/components/Header/action.ts");\n\r\n\r\n\r\n\r\n\r\nconst Header = (0,_core__WEBPACK_IMPORTED_MODULE_0__.assemble)(({ handleKeyword, keyword }) => {\r\n    const $events = [\r\n        {\r\n            event: \'submit\',\r\n            callback(e) {\r\n                e.preventDefault();\r\n                if (!e.target)\r\n                    return new Error(\'이벤트 타깃이 존재하지 않습니다\');\r\n                if (e.target === (0,_utils_common_domHelper__WEBPACK_IMPORTED_MODULE_2__.$)(\'.search-form\') && (0,_utils_common_formData__WEBPACK_IMPORTED_MODULE_1__.isFormElement)(e.target)) {\r\n                    const fields = (0,_utils_common_formData__WEBPACK_IMPORTED_MODULE_1__.getFormFields)(e.target);\r\n                    (0,_utils_common_formData__WEBPACK_IMPORTED_MODULE_1__.isStringFields)(fields[\'keyword\']) && handleKeyword(fields[\'keyword\']);\r\n                }\r\n            },\r\n        },\r\n    ];\r\n    const $template = (0,_utils_common_domHelper__WEBPACK_IMPORTED_MODULE_2__.getElement)(`\r\n    <header>\r\n      <h1><a href="/"><img src="./logo.png" alt="MovieList 로고" /></a></h1>\r\n      <div class="search-box">\r\n        <form class="search-form">\r\n        ${keyword ? (0,_action__WEBPACK_IMPORTED_MODULE_3__.KeywordInputComponent)(keyword) : (0,_action__WEBPACK_IMPORTED_MODULE_3__.KeywordInputComponent)(\'검색\')}\r\n          <input type="text" name="keyword" placeholder="검색" />\r\n          <button class="search-button">검색</button>\r\n        </form>\r\n      </div>\r\n    </header>\r\n  `);\r\n    return [$template, $events];\r\n});\r\n\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/Header/index.ts?'
        );

        /***/
      },

    /***/ './src/components/MovieChart/action.ts':
      /*!*********************************************!*\
  !*** ./src/components/MovieChart/action.ts ***!
  \*********************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "MovieListComponent": () => (/* binding */ MovieListComponent),\n/* harmony export */   "SkeletonMovieListComponent": () => (/* binding */ SkeletonMovieListComponent)\n/* harmony export */ });\n/* harmony import */ var _utils_common_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../utils/common/debounce */ "./src/utils/common/debounce.ts");\n/* harmony import */ var _utils_common_domHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../utils/common/domHelper */ "./src/utils/common/domHelper.ts");\n/* harmony import */ var _MovieList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MovieList */ "./src/components/MovieList/index.ts");\n/* harmony import */ var _SkeletonMovieList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SkeletonMovieList */ "./src/components/SkeletonMovieList/index.ts");\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core */ "./src/core/index.ts");\n\r\n\r\n\r\n\r\n\r\nconst MovieChartActions = () => {\r\n    const MovieListComponent = (props) => {\r\n        (0,_core__WEBPACK_IMPORTED_MODULE_4__.setComponentList)(`#MovieList`, (0,_MovieList__WEBPACK_IMPORTED_MODULE_2__.MovieList)(props));\r\n        return \'\';\r\n        return ((0,_utils_common_debounce__WEBPACK_IMPORTED_MODULE_0__.debounce)(() => {\r\n            (0,_utils_common_domHelper__WEBPACK_IMPORTED_MODULE_1__.replaceComponent)((0,_utils_common_domHelper__WEBPACK_IMPORTED_MODULE_1__.$)(`#MovieList`), (0,_MovieList__WEBPACK_IMPORTED_MODULE_2__.MovieList)(props));\r\n        })() && \'\');\r\n    };\r\n    const SkeletonMovieListComponent = () => {\r\n        (0,_core__WEBPACK_IMPORTED_MODULE_4__.setComponentList)(`#SkeletonList`, (0,_SkeletonMovieList__WEBPACK_IMPORTED_MODULE_3__.SkeletonMovieList)({}));\r\n        return \'\';\r\n        return ((0,_utils_common_debounce__WEBPACK_IMPORTED_MODULE_0__.debounce)(() => {\r\n            (0,_utils_common_domHelper__WEBPACK_IMPORTED_MODULE_1__.replaceComponent)((0,_utils_common_domHelper__WEBPACK_IMPORTED_MODULE_1__.$)(`#SkeletonList`), (0,_SkeletonMovieList__WEBPACK_IMPORTED_MODULE_3__.SkeletonMovieList)({}));\r\n        })() && \'\');\r\n    };\r\n    return { MovieListComponent, SkeletonMovieListComponent };\r\n};\r\nconst { MovieListComponent, SkeletonMovieListComponent } = MovieChartActions();\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MovieChart/action.ts?'
        );

        /***/
      },

    /***/ './src/components/MovieChart/index.ts':
      /*!********************************************!*\
  !*** ./src/components/MovieChart/index.ts ***!
  \********************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MovieChart\": () => (/* binding */ MovieChart)\n/* harmony export */ });\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core */ \"./src/core/index.ts\");\n/* harmony import */ var _utils_common_domHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../utils/common/domHelper */ \"./src/utils/common/domHelper.ts\");\n/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action */ \"./src/components/MovieChart/action.ts\");\n/* harmony import */ var _hooks_useMovieChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useMovieChart */ \"./src/hooks/useMovieChart.ts\");\n\r\n\r\n\r\n\r\nlet page;\r\nconst MovieChart = (0,_core__WEBPACK_IMPORTED_MODULE_0__.assemble)(({ keyword }) => {\r\n    const { chartInfo, movieList, isLoading, fetchMore } = (0,_hooks_useMovieChart__WEBPACK_IMPORTED_MODULE_3__.useMovieChart)(keyword);\r\n    const $events = [\r\n        {\r\n            event: 'click',\r\n            callback(e) {\r\n                if (e.target === (0,_utils_common_domHelper__WEBPACK_IMPORTED_MODULE_1__.$)('.btn.primary'))\r\n                    fetchMore(keyword);\r\n            },\r\n        },\r\n    ];\r\n    const $template = (0,_utils_common_domHelper__WEBPACK_IMPORTED_MODULE_1__.getElement)(`\r\n    <main>\r\n      <section class=\"item-view\">\r\n        <h2>지금 인기 있는 영화</h2>\r\n        <fragment id='MovieList'>\r\n          ${chartInfo ? (0,_action__WEBPACK_IMPORTED_MODULE_2__.MovieListComponent)({ movieList }) : ''}\r\n        </fragment>\r\n        <fragment id='SkeletonList'>\r\n          ${isLoading ? (0,_action__WEBPACK_IMPORTED_MODULE_2__.SkeletonMovieListComponent)() : ''}\r\n        </fragment>\r\n        <button class=\"btn primary full-width\" ${(chartInfo === null || chartInfo === void 0 ? void 0 : chartInfo.page) === 500 ? 'disabled' : ''}>\r\n        ${(chartInfo === null || chartInfo === void 0 ? void 0 : chartInfo.page) === 500 || movieList.length % 20 !== 0 || movieList.length === 0 ? '마지막 페이지' : '더 보기'}\r\n        </button>\r\n      </section>\r\n      </main>\r\n      `);\r\n    return [$template, $events];\r\n});\r\n\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MovieChart/index.ts?"
        );

        /***/
      },

    /***/ './src/components/MovieList/action.ts':
      /*!********************************************!*\
  !*** ./src/components/MovieList/action.ts ***!
  \********************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "MovieComponent": () => (/* binding */ MovieComponent)\n/* harmony export */ });\n/* harmony import */ var _utils_common_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../utils/common/debounce */ "./src/utils/common/debounce.ts");\n/* harmony import */ var _utils_common_domHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../utils/common/domHelper */ "./src/utils/common/domHelper.ts");\n/* harmony import */ var _Movie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Movie */ "./src/components/Movie/index.ts");\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core */ "./src/core/index.ts");\n\r\n\r\n\r\n\r\nconst MovieListActions = () => {\r\n    const MovieComponent = (props) => {\r\n        (0,_core__WEBPACK_IMPORTED_MODULE_3__.setComponentList)(`#Movie-${props.info.id}`, (0,_Movie__WEBPACK_IMPORTED_MODULE_2__.Movie)(props));\r\n        return \'\';\r\n        return ((0,_utils_common_debounce__WEBPACK_IMPORTED_MODULE_0__.debounce)(() => {\r\n            (0,_utils_common_domHelper__WEBPACK_IMPORTED_MODULE_1__.replaceComponent)((0,_utils_common_domHelper__WEBPACK_IMPORTED_MODULE_1__.$)(`#Movie-${props.info.id}`), (0,_Movie__WEBPACK_IMPORTED_MODULE_2__.Movie)(props));\r\n        })() && \'\');\r\n    };\r\n    return { MovieComponent };\r\n};\r\nconst { MovieComponent } = MovieListActions();\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MovieList/action.ts?'
        );

        /***/
      },

    /***/ './src/components/MovieList/index.ts':
      /*!*******************************************!*\
  !*** ./src/components/MovieList/index.ts ***!
  \*******************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "MovieList": () => (/* binding */ MovieList)\n/* harmony export */ });\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core */ "./src/core/index.ts");\n/* harmony import */ var _utils_common_domHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../utils/common/domHelper */ "./src/utils/common/domHelper.ts");\n/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action */ "./src/components/MovieList/action.ts");\n\r\n\r\n\r\nconst MovieList = (0,_core__WEBPACK_IMPORTED_MODULE_0__.assemble)((props) => {\r\n    const { movieList } = props;\r\n    const $events = [];\r\n    const $template = (0,_utils_common_domHelper__WEBPACK_IMPORTED_MODULE_1__.getElement)(`\r\n        <ul class="item-list">\r\n        ${movieList\r\n        .map((info) => `\r\n          <fragment id="Movie-${info.id}">\r\n            ${(0,_action__WEBPACK_IMPORTED_MODULE_2__.MovieComponent)({ info })}\r\n          </fragment>`)\r\n        .join(\'\')}\r\n        </ul>\r\n  `);\r\n    return [$template, $events];\r\n});\r\n\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MovieList/index.ts?'
        );

        /***/
      },

    /***/ './src/components/Movie/index.ts':
      /*!***************************************!*\
  !*** ./src/components/Movie/index.ts ***!
  \***************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "Movie": () => (/* binding */ Movie)\n/* harmony export */ });\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core */ "./src/core/index.ts");\n/* harmony import */ var _utils_common_domHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../utils/common/domHelper */ "./src/utils/common/domHelper.ts");\n\r\n\r\nconst Movie = (0,_core__WEBPACK_IMPORTED_MODULE_0__.assemble)((props) => {\r\n    const { info: { poster_path, title, vote_average, id }, } = props;\r\n    const $events = [];\r\n    const $template = (0,_utils_common_domHelper__WEBPACK_IMPORTED_MODULE_1__.getElement)(`\r\n      <li data=id=${id}>\r\n        <a href="#">\r\n          <div class="item-card movie">\r\n            <img\r\n              class="item-thumbnail"\r\n              src=https://image.tmdb.org/t/p/w200/${poster_path}\r\n              loading="lazy"\r\n              alt=${title}\r\n            />\r\n            <p class="item-title">${title}</p>\r\n            <p class="item-score"><img src="./star_filled.png" alt="별점" />${vote_average}</p>\r\n          </div>\r\n        </a>\r\n    </li>\r\n  `);\r\n    return [$template, $events];\r\n});\r\n\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/Movie/index.ts?'
        );

        /***/
      },

    /***/ './src/components/SkeletonMovieList/action.ts':
      /*!****************************************************!*\
  !*** ./src/components/SkeletonMovieList/action.ts ***!
  \****************************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "SkeletonMovieComponent": () => (/* binding */ SkeletonMovieComponent)\n/* harmony export */ });\n/* harmony import */ var _utils_common_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../utils/common/debounce */ "./src/utils/common/debounce.ts");\n/* harmony import */ var _utils_common_domHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../utils/common/domHelper */ "./src/utils/common/domHelper.ts");\n/* harmony import */ var _SkeletonMovie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SkeletonMovie */ "./src/components/SkeletonMovie/index.ts");\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core */ "./src/core/index.ts");\n\r\n\r\n\r\n\r\nconst SkeletonMovieListActions = () => {\r\n    const SkeletonMovieComponent = (props) => {\r\n        (0,_core__WEBPACK_IMPORTED_MODULE_3__.setComponentList)(`#SkeletonMovie-${props.id}`, (0,_SkeletonMovie__WEBPACK_IMPORTED_MODULE_2__.SkeletonMovie)(props));\r\n        return \'\';\r\n        return ((0,_utils_common_debounce__WEBPACK_IMPORTED_MODULE_0__.debounce)(() => {\r\n            (0,_utils_common_domHelper__WEBPACK_IMPORTED_MODULE_1__.replaceComponent)((0,_utils_common_domHelper__WEBPACK_IMPORTED_MODULE_1__.$)(`#SkeletonMovie-${props.id}`), (0,_SkeletonMovie__WEBPACK_IMPORTED_MODULE_2__.SkeletonMovie)(props));\r\n        })() && \'\');\r\n    };\r\n    return { SkeletonMovieComponent };\r\n};\r\nconst { SkeletonMovieComponent } = SkeletonMovieListActions();\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/SkeletonMovieList/action.ts?'
        );

        /***/
      },

    /***/ './src/components/SkeletonMovieList/index.ts':
      /*!***************************************************!*\
  !*** ./src/components/SkeletonMovieList/index.ts ***!
  \***************************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "SkeletonMovieList": () => (/* binding */ SkeletonMovieList)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./src/constants/index.ts");\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core */ "./src/core/index.ts");\n/* harmony import */ var _utils_common_domHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../utils/common/domHelper */ "./src/utils/common/domHelper.ts");\n/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action */ "./src/components/SkeletonMovieList/action.ts");\n\r\n\r\n\r\n\r\nconst getDummyArray = (num) => Array(num).fill(\'\').map(Number);\r\nconst SkeletonMovieList = (0,_core__WEBPACK_IMPORTED_MODULE_1__.assemble)(() => {\r\n    const $events = [];\r\n    const $template = (0,_utils_common_domHelper__WEBPACK_IMPORTED_MODULE_2__.getElement)(`\r\n      <ul class="item-list">\r\n        ${getDummyArray(_constants__WEBPACK_IMPORTED_MODULE_0__.DUMMY_AMOUNT)\r\n        .map((_, id) => `\r\n          <fragment id="SkeletonMovie-${id}">\r\n            ${(0,_action__WEBPACK_IMPORTED_MODULE_3__.SkeletonMovieComponent)({ id })}\r\n          </fragment>\r\n        `)\r\n        .join(\'\')}\r\n      <ul>\r\n  `);\r\n    return [$template, $events];\r\n});\r\n\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/SkeletonMovieList/index.ts?'
        );

        /***/
      },

    /***/ './src/components/SkeletonMovie/index.ts':
      /*!***********************************************!*\
  !*** ./src/components/SkeletonMovie/index.ts ***!
  \***********************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "SkeletonMovie": () => (/* binding */ SkeletonMovie)\n/* harmony export */ });\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core */ "./src/core/index.ts");\n/* harmony import */ var _utils_common_domHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../utils/common/domHelper */ "./src/utils/common/domHelper.ts");\n\r\n\r\nconst SkeletonMovie = (0,_core__WEBPACK_IMPORTED_MODULE_0__.assemble)(() => {\r\n    const $events = [];\r\n    const $template = (0,_utils_common_domHelper__WEBPACK_IMPORTED_MODULE_1__.getElement)(`\r\n      <li>\r\n        <a href="#">\r\n          <div class="item-card">\r\n            <div class="item-thumbnail skeleton"></div>\r\n            <div class="item-title skeleton"></div>\r\n            <div class="item-score skeleton"></div>\r\n          </div>\r\n        </a>\r\n      </li>\r\n  `);\r\n    return [$template, $events];\r\n});\r\n\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/SkeletonMovie/index.ts?'
        );

        /***/
      },

    /***/ './src/constants/index.ts':
      /*!********************************!*\
  !*** ./src/constants/index.ts ***!
  \********************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "DUMMY_AMOUNT": () => (/* binding */ DUMMY_AMOUNT),\n/* harmony export */   "INITIAL_PAGE": () => (/* binding */ INITIAL_PAGE),\n/* harmony export */   "PAGE": () => (/* binding */ PAGE),\n/* harmony export */   "PAGINATION": () => (/* binding */ PAGINATION)\n/* harmony export */ });\nconst INITIAL_PAGE = 1;\r\nconst PAGE = 1;\r\nconst PAGINATION = 1;\r\nconst DUMMY_AMOUNT = 20;\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/constants/index.ts?'
        );

        /***/
      },

    /***/ './src/core/index.ts':
      /*!***************************!*\
  !*** ./src/core/index.ts ***!
  \***************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "addEvent": () => (/* binding */ addEvent),\n/* harmony export */   "assemble": () => (/* binding */ assemble),\n/* harmony export */   "render": () => (/* binding */ render),\n/* harmony export */   "setComponentList": () => (/* binding */ setComponentList),\n/* harmony export */   "useEffect": () => (/* binding */ useEffect),\n/* harmony export */   "useState": () => (/* binding */ useState)\n/* harmony export */ });\n/* harmony import */ var _utils_common_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common/debounce */ "./src/utils/common/debounce.ts");\n/* harmony import */ var _utils_common_domHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/common/domHelper */ "./src/utils/common/domHelper.ts");\n\r\n\r\nfunction Core() {\r\n    const options = {\r\n        currentStateKey: 0,\r\n        currentEffectsKey: 0,\r\n        states: [],\r\n        events: [],\r\n        effects: [],\r\n        componentList: [],\r\n        root: null,\r\n        rootComponent: null,\r\n    };\r\n    function useState(initialState) {\r\n        const { currentStateKey: key, states } = options;\r\n        if (states.length === key)\r\n            states.push(initialState);\r\n        const state = states[key];\r\n        const setState = (newState) => {\r\n            states[key] = newState;\r\n            _render();\r\n        };\r\n        options.currentStateKey += 1;\r\n        return [state, setState];\r\n    }\r\n    const useEffect = (callback, deps) => {\r\n        const { currentEffectsKey: key, effects } = options;\r\n        if (effects.length === key) {\r\n            effects.push({ deps, callback });\r\n            callback();\r\n        }\r\n        if (JSON.stringify(effects[key].deps) !== JSON.stringify(deps)) {\r\n            callback();\r\n            effects[key] = { deps, callback };\r\n        }\r\n        options.currentEffectsKey += 1;\r\n    };\r\n    const _render = (0,_utils_common_debounce__WEBPACK_IMPORTED_MODULE_0__.debounce)(() => {\r\n        const { root, rootComponent } = options;\r\n        const component = rootComponent === null || rootComponent === void 0 ? void 0 : rootComponent({});\r\n        if (!root || !component)\r\n            return;\r\n        root.innerHTML = \'\';\r\n        root.appendChild(component);\r\n        _replaceComponents();\r\n        options.currentStateKey = 0;\r\n        options.currentEffectsKey = 0;\r\n        options.events = [];\r\n    });\r\n    const setComponentList = (target, component) => {\r\n        const { componentList } = options;\r\n        componentList.push([target, component]);\r\n    };\r\n    const _replaceComponents = () => {\r\n        const { componentList } = options;\r\n        componentList.reverse().forEach(([target, component]) => {\r\n            (0,_utils_common_domHelper__WEBPACK_IMPORTED_MODULE_1__.replaceComponent)((0,_utils_common_domHelper__WEBPACK_IMPORTED_MODULE_1__.$)(target), component);\r\n        });\r\n        options.componentList = [];\r\n    };\r\n    function render(rootComponent, root) {\r\n        options.root = root;\r\n        options.rootComponent = rootComponent;\r\n        _render();\r\n    }\r\n    return { useState, useEffect, render, setComponentList };\r\n}\r\nconst { useState, useEffect, render, setComponentList } = Core();\r\nconst addEvent = ({ $element, event, callback }) => {\r\n    $element.addEventListener(event, callback);\r\n};\r\nconst assemble = (getElement) => (props) => {\r\n    try {\r\n        const [$element, $events = []] = getElement(props);\r\n        if (!$element)\r\n            throw new Error(\'이벤트를 등록할 엘리먼트가 존재하지 않습니다.\');\r\n        $events.forEach(({ event, callback }) => addEvent({ $element, event, callback }));\r\n        return $element;\r\n    }\r\n    catch (error) {\r\n        return null;\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/core/index.ts?'
        );

        /***/
      },

    /***/ './src/hooks/useMovieChart.ts':
      /*!************************************!*\
  !*** ./src/hooks/useMovieChart.ts ***!
  \************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "useMovieChart": () => (/* binding */ useMovieChart)\n/* harmony export */ });\n/* harmony import */ var _apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apis */ "./src/apis/index.ts");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants/index.ts");\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/core/index.ts");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\n\r\n\r\nlet page;\r\nfunction useMovieChart(keyword) {\r\n    const [chartInfo, setChartInfo] = (0,_core__WEBPACK_IMPORTED_MODULE_2__.useState)();\r\n    const [movieList, setMovieList] = (0,_core__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\r\n    const [isLoading, setIsLoading] = (0,_core__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\r\n    const defaultFetchAction = (callback) => (args) => __awaiter(this, void 0, void 0, function* () {\r\n        setIsLoading(true);\r\n        yield callback(args);\r\n        setIsLoading(false);\r\n    });\r\n    const updateMovieData = (data) => {\r\n        setChartInfo(data);\r\n        page === _constants__WEBPACK_IMPORTED_MODULE_1__.INITIAL_PAGE ? setMovieList(data.results) : setMovieList([...movieList, ...data.results]);\r\n        page += _constants__WEBPACK_IMPORTED_MODULE_1__.PAGE;\r\n    };\r\n    const getPopularMovies = defaultFetchAction(() => __awaiter(this, void 0, void 0, function* () {\r\n        const [data, error] = yield (0,_apis__WEBPACK_IMPORTED_MODULE_0__.waitFor)((0,_apis__WEBPACK_IMPORTED_MODULE_0__.fetchPopularMovies)(page));\r\n        if (error)\r\n            throw new Error(JSON.stringify(error));\r\n        updateMovieData(data);\r\n    }));\r\n    const getMoviesByKeyword = defaultFetchAction((keyword) => __awaiter(this, void 0, void 0, function* () {\r\n        const [data, error] = yield (0,_apis__WEBPACK_IMPORTED_MODULE_0__.waitFor)((0,_apis__WEBPACK_IMPORTED_MODULE_0__.fetchMoviesByKeyword)(keyword, page));\r\n        if (error)\r\n            throw new Error(JSON.stringify(error));\r\n        updateMovieData(data);\r\n    }));\r\n    const fetchMore = (keyword) => {\r\n        if (keyword)\r\n            getMoviesByKeyword(keyword);\r\n        else\r\n            getPopularMovies();\r\n    };\r\n    (0,_core__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {\r\n        page = _constants__WEBPACK_IMPORTED_MODULE_1__.INITIAL_PAGE;\r\n        fetchMore(keyword);\r\n    }, [keyword]);\r\n    return { chartInfo, movieList, isLoading, fetchMore };\r\n}\r\n\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/hooks/useMovieChart.ts?'
        );

        /***/
      },

    /***/ './src/index.ts':
      /*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/core/index.ts");\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/App */ "./src/components/App/index.ts");\n/* harmony import */ var _utils_common_domHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/common/domHelper */ "./src/utils/common/domHelper.ts");\n/* harmony import */ var _src_styles_reset_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/styles/reset.css */ "./src/styles/reset.css");\n/* harmony import */ var _src_styles_common_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/styles/common.css */ "./src/styles/common.css");\n/* harmony import */ var _src_assets_search_button_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/assets/search_button.png */ "./src/assets/search_button.png");\n/* harmony import */ var _src_assets_logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/assets/logo.png */ "./src/assets/logo.png");\n/* harmony import */ var _src_assets_star_filled_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/assets/star_filled.png */ "./src/assets/star_filled.png");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_core__WEBPACK_IMPORTED_MODULE_0__.render)(_components_App__WEBPACK_IMPORTED_MODULE_1__.App, (0,_utils_common_domHelper__WEBPACK_IMPORTED_MODULE_2__.$)(\'#app\'));\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/index.ts?'
        );

        /***/
      },

    /***/ './src/utils/common/debounce.ts':
      /*!**************************************!*\
  !*** ./src/utils/common/debounce.ts ***!
  \**************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "debounce": () => (/* binding */ debounce)\n/* harmony export */ });\nconst debounce = (callback) => {\r\n    let id = -1;\r\n    return () => {\r\n        cancelAnimationFrame(id);\r\n        id = requestAnimationFrame(callback);\r\n        return id !== -1;\r\n    };\r\n};\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/utils/common/debounce.ts?'
        );

        /***/
      },

    /***/ './src/utils/common/domHelper.ts':
      /*!***************************************!*\
  !*** ./src/utils/common/domHelper.ts ***!
  \***************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "$": () => (/* binding */ $),\n/* harmony export */   "$$": () => (/* binding */ $$),\n/* harmony export */   "getElement": () => (/* binding */ getElement),\n/* harmony export */   "replaceComponent": () => (/* binding */ replaceComponent)\n/* harmony export */ });\nconst $ = (selector, parentNode = document) => parentNode && parentNode.querySelector(selector);\r\nconst $$ = (selector, parentNode = document) => parentNode && parentNode.querySelectorAll(selector);\r\nconst getElement = (template) => {\r\n    const root = document.createElement(\'div\');\r\n    root.innerHTML = template;\r\n    return root.firstElementChild;\r\n};\r\nconst replaceComponent = (element, component) => {\r\n    if (!element || !component || !element.parentNode)\r\n        return;\r\n    console.log(element, component);\r\n    element.replaceWith(component);\r\n};\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/utils/common/domHelper.ts?'
        );

        /***/
      },

    /***/ './src/utils/common/formData.ts':
      /*!**************************************!*\
  !*** ./src/utils/common/formData.ts ***!
  \**************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "getFormFields": () => (/* binding */ getFormFields),\n/* harmony export */   "isFormElement": () => (/* binding */ isFormElement),\n/* harmony export */   "isStringFields": () => (/* binding */ isStringFields)\n/* harmony export */ });\nconst isFormElement = (target) => {\r\n    return target instanceof HTMLFormElement;\r\n};\r\nconst isStringFields = (target) => {\r\n    return typeof target === \'string\';\r\n};\r\nfunction getFormFields(form) {\r\n    const formaData = new FormData(form);\r\n    return Object.fromEntries(formaData);\r\n}\r\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/utils/common/formData.ts?'
        );

        /***/
      },

    /***/ './src/assets/logo.png':
      /*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "40422730fb09ec2b5aa5.png";\n\n//# sourceURL=webpack://javascript-movie-review/./src/assets/logo.png?'
        );

        /***/
      },

    /***/ './src/assets/search_button.png':
      /*!**************************************!*\
  !*** ./src/assets/search_button.png ***!
  \**************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "8ab96eb448678796eac6.png";\n\n//# sourceURL=webpack://javascript-movie-review/./src/assets/search_button.png?'
        );

        /***/
      },

    /***/ './src/assets/star_filled.png':
      /*!************************************!*\
  !*** ./src/assets/star_filled.png ***!
  \************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "966d4a11f15962b42f8b.png";\n\n//# sourceURL=webpack://javascript-movie-review/./src/assets/star_filled.png?'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter = module && module.__esModule ? /******/ () => module['default'] : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          /******/ Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/global */
  /******/ (() => {
    /******/ __webpack_require__.g = (function () {
      /******/ if (typeof globalThis === 'object') return globalThis;
      /******/ try {
        /******/ return this || new Function('return this')();
        /******/
      } catch (e) {
        /******/ if (typeof window === 'object') return window;
        /******/
      }
      /******/
    })();
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/publicPath */
  /******/ (() => {
    /******/ var scriptUrl;
    /******/ if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + '';
    /******/ var document = __webpack_require__.g.document;
    /******/ if (!scriptUrl && document) {
      /******/ if (document.currentScript) /******/ scriptUrl = document.currentScript.src;
      /******/ if (!scriptUrl) {
        /******/ var scripts = document.getElementsByTagName('script');
        /******/ if (scripts.length) scriptUrl = scripts[scripts.length - 1].src;
        /******/
      }
      /******/
    }
    /******/ // When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
    /******/ // or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
    /******/ if (!scriptUrl) throw new Error('Automatic publicPath is not supported in this browser');
    /******/ scriptUrl = scriptUrl
      .replace(/#.*$/, '')
      .replace(/\?.*$/, '')
      .replace(/\/[^\/]+$/, '/');
    /******/ __webpack_require__.p = scriptUrl;
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/ (() => {
    /******/ __webpack_require__.nc = undefined;
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__('./src/index.ts');
  /******/
  /******/
})();
