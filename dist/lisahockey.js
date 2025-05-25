/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/lisahockey.scss":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/lisahockey.scss ***!
  \*****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.HJK {
  position: unset;
  width: 100%;
  flex-wrap: unset !important;
  display: flex !important;
  flex-direction: row;
  align-items: center !important;
}
.HJK div {
  width: max-content;
  max-width: unset;
  flex: unset;
}
.HJK div span {
  width: max-content;
}

.app-container {
  max-width: unset !important;
}

.JK-wrapper {
  background: #ffffff;
  width: 100% !important;
  display: flex;
  justify-content: space-between;
  border-radius: 1.5rem;
  padding: 0.6rem;
  margin: 0 1rem;
}
.JK-wrapper div {
  margin-left: 1rem;
}

.reorder-button {
  transition: all 0.3s ease;
  cursor: pointer;
  background: #e9eef6;
  color: #1f1f1f;
  font-weight: bold;
  align-items: center;
  text-align: center;
  padding: 0.4rem 1rem;
  border-radius: 1.5rem;
  margin: 0 0.4rem;
  transition: all 0.1s;
}
.reorder-button:hover {
  background: rgba(39, 39, 39, 0.3);
}

.paidData-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.paidData-wrapper p {
  font-weight: bold;
  margin: 0;
}
.paidData-wrapper a {
  margin-left: 0.3rem;
}`, "",{"version":3,"sources":["webpack://./src/styles/lisahockey.scss"],"names":[],"mappings":"AAcA;EACI,eAAA;EAEA,WAAA;EAEA,2BAAA;EAEA,wBAAA;EACA,mBAAA;EAEA,8BAAA;AAjBJ;AAmBI;EACI,kBAAA;EACA,gBAAA;EACA,WAAA;AAjBR;AAmBQ;EACI,kBAAA;AAjBZ;;AAuBA;EACI,2BAAA;AApBJ;;AAwBA;EACI,mBA3CmB;EA6CnB,sBAAA;EACA,aAAA;EACA,8BAAA;EAEA,qBAAA;EACA,eAAA;EACA,cAAA;AAvBJ;AAyBI;EACI,iBAAA;AAvBR;;AA2BA;EACI,yBAAA;EACA,eAAA;EAEA,mBA/DS;EAgET,cAtDG;EAwDH,iBAAA;EAEA,mBAAA;EACA,kBAAA;EAEA,oBAAA;EACA,qBAAA;EAEA,gBAAA;EAEA,oBAAA;AA9BJ;AAgCI;EACI,iCAAA;AA9BR;;AAkCA;EACI,aAAA;EAEA,mBAAA;EACA,uBAAA;EACA,kBAAA;AAhCJ;AAkCI;EACI,iBAAA;EAEA,SAAA;AAjCR;AAoCI;EACI,mBAAA;AAlCR","sourcesContent":["$background: #e9eef6;\r\n$background-secondary: #ffffff;\r\n\r\n$primary: #b3c6fa;\r\n$Hbs-primary: #6c201d;\r\n$Hbs-primary-hover: #743a37;\r\n\r\n$supported: #7db880;\r\n$unspported: #b87d7d;\r\n\r\n$text: #1f1f1f;\r\n$text-dark: #585858;\r\n\r\n//main elements\r\n.HJK {\r\n    position: unset;\r\n\r\n    width: 100%;\r\n\r\n    flex-wrap: unset !important;\r\n\r\n    display: flex !important;\r\n    flex-direction: row;\r\n\r\n    align-items: center !important;\r\n\r\n    div {\r\n        width: max-content;\r\n        max-width: unset;\r\n        flex: unset;\r\n\r\n        span {\r\n            width: max-content;\r\n        }\r\n    }\r\n}\r\n\r\n//fix lisahockey container width\r\n.app-container {\r\n    max-width: unset !important;\r\n}\r\n\r\n//elements\r\n.JK-wrapper {\r\n    background: $background-secondary;\r\n\r\n    width: 100% !important;\r\n    display: flex;\r\n    justify-content: space-between;\r\n\r\n    border-radius: 1.5rem;\r\n    padding: 0.6rem;\r\n    margin: 0 1rem;\r\n\r\n    div {\r\n        margin-left: 1rem;\r\n    }\r\n}\r\n\r\n.reorder-button {\r\n    transition: all 0.3s ease;\r\n    cursor: pointer;\r\n\r\n    background: $background;\r\n    color: $text;\r\n\r\n    font-weight: bold;\r\n\r\n    align-items: center;\r\n    text-align: center;\r\n\r\n    padding: 0.4rem 1rem;\r\n    border-radius: 1.5rem;\r\n\r\n    margin: 0 0.4rem;\r\n\r\n    transition: all 0.1s;\r\n\r\n    &:hover {\r\n        background: rgba(#272727, 0.3);\r\n    }\r\n}\r\n\r\n.paidData-wrapper {\r\n    display: flex;\r\n\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n\r\n    p {\r\n        font-weight: bold;\r\n\r\n        margin: 0;\r\n    }\r\n\r\n    a {\r\n        margin-left: 0.3rem;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/styles/lisahockey.scss":
/*!************************************!*\
  !*** ./src/styles/lisahockey.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_lisahockey_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./lisahockey.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/lisahockey.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_lisahockey_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_lisahockey_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_lisahockey_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_lisahockey_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/lisahockey.jsx ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_lisahockey_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/lisahockey.scss */ "./src/styles/lisahockey.scss");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


//HJK = Hijacked item
//JK = JobKTools added item

var observer = new MutationObserver(function () {
  Array.from(document.getElementsByClassName("el-row mt-1")).forEach(function (DataRow) {
    // Check if the button already exists to prevent adding it multiple times
    if (!DataRow.querySelector("div.JK-wrapper")) {
      addHubDiv(DataRow);
    }
    if (!DataRow.querySelector("div.paidData-wrapper")) {
      addPaidData(DataRow.querySelector("div.JK-wrapper"));
    }
    if (!DataRow.querySelector("p.reorder-button")) {
      addReorderButton(DataRow.querySelector("div.JK-wrapper"));
    }

    //continous items//

    calcPaidData(DataRow.querySelector("div.JK-wrapper"));

    //finishers
    HJKReorder(DataRow);
  });
});
observer.observe(document.body, {
  subtree: true,
  childList: true,
  attributes: true
});

//HJK reorder
var HJKReorder = function HJKReorder(parent) {
  if (parent.classList.contains("HJK")) return;

  //Hijack css//
  parent.classList.add("HJK");

  //reorder
  var container = parent;
  var children = Array.from(container.children);
  var reorder = children[2];
  var target = children[1]; // The second element (you want to insert before this)

  if (reorder && target) {
    container.insertBefore(reorder, target);
  }
};

//main div
var addHubDiv = function addHubDiv(parent) {
  var div = document.createElement("div");
  div.className = "JK-wrapper JK";
  parent.appendChild(div);
};
var addReorderButton = function addReorderButton(parent) {
  var button = document.createElement("p");
  button.className = "reorder-button JK button";
  button.innerText = "Reorder";
  button.addEventListener("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          reorderByDateNewOld();
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
  parent.appendChild(button);
};
var reorderByDateNewOld = function reorderByDateNewOld() {
  var tbody = document.querySelector(".el-table__body tbody");
  var rows = Array.from(tbody.querySelectorAll("tr.el-table__row"));
  rows.sort(function (rowA, rowB) {
    var dateA = getDateFromRow(rowA);
    var dateB = getDateFromRow(rowB);
    return dateB - dateA; // Ascending order
  });
  rows.forEach(function (row) {
    return tbody.appendChild(row);
  }); // Reorder rows in table

  function getDateFromRow(row) {
    var strongElement = row.querySelector("td .cell p strong");
    if (!strongElement) {
      console.error("Date not found in row:", row);
      return new Date(0); // Default date to prevent errors
    }
    var dateText = strongElement.innerText.trim();

    // Remove day abbreviations (ma, di, wo, do, vr, za, zo)
    dateText = dateText.replace(/\b(ma|di|wo|do|vr|za|zo)\b/gi, "").trim();

    // Convert date string to a valid Date object
    var parsedDate = parseDate(dateText);
    if (isNaN(parsedDate.getTime())) {
      console.error("Invalid date format:", dateText);
      return new Date(0);
    }
    return parsedDate;
  }
  function parseDate(dateString) {
    var months = {
      jan: 0,
      feb: 1,
      mrt: 2,
      apr: 3,
      mei: 4,
      jun: 5,
      jul: 6,
      aug: 7,
      sep: 8,
      okt: 9,
      nov: 10,
      dec: 11
    };
    var parts = dateString.toLowerCase().match(/(\d{1,2})\s([a-z]{3})\s(\d{4})/);
    if (!parts || !months.hasOwnProperty(parts[2])) {
      console.error("Invalid date format:", dateString);
      return new Date(0);
    }
    return new Date(parts[3], months[parts[2]], parts[1]);
  }
};

//paid data
var calcPaidData = function calcPaidData(parent) {
  var tbody = document.querySelector(".el-table__body tbody");
  var rows = Array.from(tbody.querySelectorAll("tr.el-table__row"));
  if (!Array.from(rows[0].children)[7]) return;
  var uitbetaald = 0;
  rows.forEach(function (row) {
    var isPaid = Array.from(row.children);
    if (isPaid[7].textContent == "Nee") {
      var amount = isPaid[4].textContent.replace("€", "").replace(",", ".");
      uitbetaald += Number(amount);
    }
  });
  if (parent.querySelector("a").innerText.replace("€", "").replace(" ", "") == "loading...") {
    parent.querySelector("a").innerText = " \u20AC ".concat(uitbetaald.toFixed(2).replace(".", ","));
  } else if (parent.querySelector("a").innerText.replace("€", "").replace(" ", "") != uitbetaald.toFixed(2).replace(".", ",")) {
    parent.querySelector("a").innerText = " \u20AC ".concat(uitbetaald.toFixed(2).replace(".", ","));
  }
};
var addPaidData = function addPaidData(parent) {
  var wrapper = document.createElement("div");
  wrapper.className = "paidData-wrapper JK";
  var text = document.createElement("p");
  text.innerText = "Nog niet betaald: ";
  wrapper.appendChild(text);
  var data = document.createElement("a");
  data.innerText = "loading...";
  wrapper.appendChild(data);
  parent.appendChild(wrapper);
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzYWhvY2tleS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sNkZBQTZGLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sYUFBYSxhQUFhLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFlBQVksWUFBWSxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsK0NBQStDLG1DQUFtQywwQkFBMEIsMEJBQTBCLGdDQUFnQyw0QkFBNEIseUJBQXlCLHVCQUF1Qix3QkFBd0IsaUNBQWlDLHdCQUF3Qix3QkFBd0Isd0NBQXdDLHFDQUFxQyw0QkFBNEIsMkNBQTJDLGlCQUFpQiwrQkFBK0IsNkJBQTZCLHdCQUF3QixzQkFBc0IsbUNBQW1DLGFBQWEsU0FBUyxLQUFLLDREQUE0RCxvQ0FBb0MsS0FBSyxtQ0FBbUMsMENBQTBDLG1DQUFtQyxzQkFBc0IsdUNBQXVDLGtDQUFrQyx3QkFBd0IsdUJBQXVCLGlCQUFpQiw4QkFBOEIsU0FBUyxLQUFLLHlCQUF5QixrQ0FBa0Msd0JBQXdCLG9DQUFvQyxxQkFBcUIsOEJBQThCLGdDQUFnQywyQkFBMkIsaUNBQWlDLDhCQUE4Qiw2QkFBNkIsaUNBQWlDLHFCQUFxQiwyQ0FBMkMsU0FBUyxLQUFLLDJCQUEyQixzQkFBc0IsZ0NBQWdDLGdDQUFnQywyQkFBMkIsZUFBZSw4QkFBOEIsMEJBQTBCLFNBQVMsZUFBZSxnQ0FBZ0MsU0FBUyxLQUFLLHVCQUF1QjtBQUN6NkU7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUN0RTFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNmYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUF1SjtBQUN2SjtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhO0FBQ3JDLGlCQUFpQix1R0FBYTtBQUM5QixpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLGlJQUFPOzs7O0FBSWlHO0FBQ3pILE9BQU8saUVBQWUsaUlBQU8sSUFBSSxpSUFBTyxVQUFVLGlJQUFPLG1CQUFtQixFQUFDOzs7Ozs7O1VDeEI3RTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OzsrQ0NDQSxtS0FBQUEsbUJBQUEsWUFBQUEsb0JBQUEsV0FBQUMsQ0FBQSxTQUFBQyxDQUFBLEVBQUFELENBQUEsT0FBQUUsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLFNBQUEsRUFBQUMsQ0FBQSxHQUFBSCxDQUFBLENBQUFJLGNBQUEsRUFBQUMsQ0FBQSx3QkFBQUMsTUFBQSxHQUFBQSxNQUFBLE9BQUFDLENBQUEsR0FBQUYsQ0FBQSxDQUFBRyxRQUFBLGtCQUFBQyxDQUFBLEdBQUFKLENBQUEsQ0FBQUssYUFBQSx1QkFBQUMsQ0FBQSxHQUFBTixDQUFBLENBQUFPLFdBQUEsOEJBQUFDLEVBQUFkLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsV0FBQUYsTUFBQSxDQUFBYSxjQUFBLENBQUFmLENBQUEsRUFBQUQsQ0FBQSxJQUFBaUIsS0FBQSxFQUFBZixDQUFBLEVBQUFnQixVQUFBLEdBQUFiLENBQUEsRUFBQWMsWUFBQSxHQUFBZCxDQUFBLEVBQUFlLFFBQUEsR0FBQWYsQ0FBQSxhQUFBVSxDQUFBLG1CQUFBZCxDQUFBLElBQUFjLENBQUEsWUFBQUEsRUFBQWQsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsV0FBQUQsQ0FBQSxDQUFBRCxDQUFBLElBQUFFLENBQUEsZ0JBQUFtQixFQUFBckIsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsRUFBQUUsQ0FBQSxRQUFBRSxDQUFBLEdBQUFQLENBQUEsSUFBQUEsQ0FBQSxDQUFBRSxTQUFBLFlBQUFrQixTQUFBLEdBQUFwQixDQUFBLEdBQUFvQixTQUFBLEVBQUFYLENBQUEsR0FBQVIsTUFBQSxDQUFBb0IsTUFBQSxDQUFBZCxDQUFBLENBQUFMLFNBQUEsVUFBQVcsQ0FBQSxDQUFBSixDQUFBLHVCQUFBWCxDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxRQUFBRSxDQUFBLHVCQUFBRSxDQUFBLEVBQUFFLENBQUEsY0FBQUosQ0FBQSxRQUFBaUIsS0FBQSw0Q0FBQWpCLENBQUEsb0JBQUFFLENBQUEsUUFBQUUsQ0FBQSxXQUFBTSxLQUFBLEVBQUFoQixDQUFBLEVBQUF3QixJQUFBLGVBQUFwQixDQUFBLENBQUFxQixNQUFBLEdBQUFqQixDQUFBLEVBQUFKLENBQUEsQ0FBQXNCLEdBQUEsR0FBQWhCLENBQUEsVUFBQUUsQ0FBQSxHQUFBUixDQUFBLENBQUF1QixRQUFBLE1BQUFmLENBQUEsUUFBQUUsQ0FBQSxHQUFBYyxDQUFBLENBQUFoQixDQUFBLEVBQUFSLENBQUEsT0FBQVUsQ0FBQSxRQUFBQSxDQUFBLEtBQUFlLENBQUEsbUJBQUFmLENBQUEscUJBQUFWLENBQUEsQ0FBQXFCLE1BQUEsRUFBQXJCLENBQUEsQ0FBQTBCLElBQUEsR0FBQTFCLENBQUEsQ0FBQTJCLEtBQUEsR0FBQTNCLENBQUEsQ0FBQXNCLEdBQUEsc0JBQUF0QixDQUFBLENBQUFxQixNQUFBLGNBQUFuQixDQUFBLFFBQUFBLENBQUEsTUFBQUYsQ0FBQSxDQUFBc0IsR0FBQSxFQUFBdEIsQ0FBQSxDQUFBNEIsaUJBQUEsQ0FBQTVCLENBQUEsQ0FBQXNCLEdBQUEsdUJBQUF0QixDQUFBLENBQUFxQixNQUFBLElBQUFyQixDQUFBLENBQUE2QixNQUFBLFdBQUE3QixDQUFBLENBQUFzQixHQUFBLEdBQUFwQixDQUFBLFVBQUFjLENBQUEsR0FBQWMsQ0FBQSxDQUFBbkMsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsb0JBQUFnQixDQUFBLENBQUFlLElBQUEsUUFBQTdCLENBQUEsR0FBQUYsQ0FBQSxDQUFBb0IsSUFBQSxVQUFBSixDQUFBLENBQUFNLEdBQUEsS0FBQUcsQ0FBQSxxQkFBQWIsS0FBQSxFQUFBSSxDQUFBLENBQUFNLEdBQUEsRUFBQUYsSUFBQSxFQUFBcEIsQ0FBQSxDQUFBb0IsSUFBQSxrQkFBQUosQ0FBQSxDQUFBZSxJQUFBLEtBQUE3QixDQUFBLE1BQUFGLENBQUEsQ0FBQXFCLE1BQUEsWUFBQXJCLENBQUEsQ0FBQXNCLEdBQUEsR0FBQU4sQ0FBQSxDQUFBTSxHQUFBLFVBQUEzQixDQUFBLEVBQUFLLENBQUEsTUFBQWdDLE9BQUEsQ0FBQTlCLENBQUEsZUFBQUksQ0FBQSxhQUFBd0IsRUFBQWxDLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLG1CQUFBa0MsSUFBQSxZQUFBVCxHQUFBLEVBQUExQixDQUFBLENBQUFxQyxJQUFBLENBQUF0QyxDQUFBLEVBQUFFLENBQUEsY0FBQUQsQ0FBQSxhQUFBbUMsSUFBQSxXQUFBVCxHQUFBLEVBQUExQixDQUFBLFFBQUFELENBQUEsQ0FBQXVDLElBQUEsR0FBQWxCLENBQUEsTUFBQVMsQ0FBQSxnQkFBQVIsVUFBQSxjQUFBa0Isa0JBQUEsY0FBQUMsMkJBQUEsU0FBQUMsQ0FBQSxPQUFBM0IsQ0FBQSxDQUFBMkIsQ0FBQSxFQUFBakMsQ0FBQSxxQ0FBQWtDLENBQUEsR0FBQXhDLE1BQUEsQ0FBQXlDLGNBQUEsRUFBQUMsQ0FBQSxHQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUEsQ0FBQSxDQUFBRyxDQUFBLFFBQUFELENBQUEsSUFBQUEsQ0FBQSxLQUFBM0MsQ0FBQSxJQUFBRyxDQUFBLENBQUFpQyxJQUFBLENBQUFPLENBQUEsRUFBQXBDLENBQUEsTUFBQWlDLENBQUEsR0FBQUcsQ0FBQSxPQUFBRSxDQUFBLEdBQUFOLDBCQUFBLENBQUFyQyxTQUFBLEdBQUFrQixTQUFBLENBQUFsQixTQUFBLEdBQUFELE1BQUEsQ0FBQW9CLE1BQUEsQ0FBQW1CLENBQUEsWUFBQU0sRUFBQS9DLENBQUEsZ0NBQUFnRCxPQUFBLFdBQUFqRCxDQUFBLElBQUFlLENBQUEsQ0FBQWQsQ0FBQSxFQUFBRCxDQUFBLFlBQUFDLENBQUEsZ0JBQUFpRCxPQUFBLENBQUFsRCxDQUFBLEVBQUFDLENBQUEsc0JBQUFrRCxjQUFBbEQsQ0FBQSxFQUFBRCxDQUFBLGFBQUFFLEVBQUFLLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENBQUEsUUFBQUUsQ0FBQSxHQUFBb0IsQ0FBQSxDQUFBbEMsQ0FBQSxDQUFBTSxDQUFBLEdBQUFOLENBQUEsRUFBQVEsQ0FBQSxtQkFBQU0sQ0FBQSxDQUFBcUIsSUFBQSxRQUFBZixDQUFBLEdBQUFOLENBQUEsQ0FBQVksR0FBQSxFQUFBRyxDQUFBLEdBQUFULENBQUEsQ0FBQUosS0FBQSxTQUFBYSxDQUFBLGdCQUFBc0IsT0FBQSxDQUFBdEIsQ0FBQSxLQUFBekIsQ0FBQSxDQUFBaUMsSUFBQSxDQUFBUixDQUFBLGVBQUE5QixDQUFBLENBQUFxRCxPQUFBLENBQUF2QixDQUFBLENBQUF3QixPQUFBLEVBQUFDLElBQUEsV0FBQXRELENBQUEsSUFBQUMsQ0FBQSxTQUFBRCxDQUFBLEVBQUFVLENBQUEsRUFBQUUsQ0FBQSxnQkFBQVosQ0FBQSxJQUFBQyxDQUFBLFVBQUFELENBQUEsRUFBQVUsQ0FBQSxFQUFBRSxDQUFBLFFBQUFiLENBQUEsQ0FBQXFELE9BQUEsQ0FBQXZCLENBQUEsRUFBQXlCLElBQUEsV0FBQXRELENBQUEsSUFBQW9CLENBQUEsQ0FBQUosS0FBQSxHQUFBaEIsQ0FBQSxFQUFBVSxDQUFBLENBQUFVLENBQUEsZ0JBQUFwQixDQUFBLFdBQUFDLENBQUEsVUFBQUQsQ0FBQSxFQUFBVSxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxDQUFBRSxDQUFBLENBQUFZLEdBQUEsU0FBQXBCLENBQUEsRUFBQVEsQ0FBQSw0QkFBQWQsQ0FBQSxFQUFBSSxDQUFBLGFBQUFJLEVBQUEsZUFBQVQsQ0FBQSxXQUFBQSxDQUFBLEVBQUFPLENBQUEsSUFBQUwsQ0FBQSxDQUFBRCxDQUFBLEVBQUFJLENBQUEsRUFBQUwsQ0FBQSxFQUFBTyxDQUFBLGdCQUFBQSxDQUFBLEdBQUFBLENBQUEsR0FBQUEsQ0FBQSxDQUFBZ0QsSUFBQSxDQUFBOUMsQ0FBQSxFQUFBQSxDQUFBLElBQUFBLENBQUEsdUJBQUFvQixFQUFBN0IsQ0FBQSxFQUFBRSxDQUFBLFFBQUFHLENBQUEsR0FBQUgsQ0FBQSxDQUFBd0IsTUFBQSxFQUFBbkIsQ0FBQSxHQUFBUCxDQUFBLENBQUFTLENBQUEsQ0FBQUosQ0FBQSxPQUFBRSxDQUFBLEtBQUFOLENBQUEsU0FBQUMsQ0FBQSxDQUFBMEIsUUFBQSxxQkFBQXZCLENBQUEsSUFBQUwsQ0FBQSxDQUFBUyxDQUFBLGVBQUFQLENBQUEsQ0FBQXdCLE1BQUEsYUFBQXhCLENBQUEsQ0FBQXlCLEdBQUEsR0FBQTFCLENBQUEsRUFBQTRCLENBQUEsQ0FBQTdCLENBQUEsRUFBQUUsQ0FBQSxlQUFBQSxDQUFBLENBQUF3QixNQUFBLGtCQUFBckIsQ0FBQSxLQUFBSCxDQUFBLENBQUF3QixNQUFBLFlBQUF4QixDQUFBLENBQUF5QixHQUFBLE9BQUE2QixTQUFBLHVDQUFBbkQsQ0FBQSxpQkFBQXlCLENBQUEsTUFBQXJCLENBQUEsR0FBQTBCLENBQUEsQ0FBQTVCLENBQUEsRUFBQVAsQ0FBQSxDQUFBUyxDQUFBLEVBQUFQLENBQUEsQ0FBQXlCLEdBQUEsbUJBQUFsQixDQUFBLENBQUEyQixJQUFBLFNBQUFsQyxDQUFBLENBQUF3QixNQUFBLFlBQUF4QixDQUFBLENBQUF5QixHQUFBLEdBQUFsQixDQUFBLENBQUFrQixHQUFBLEVBQUF6QixDQUFBLENBQUEwQixRQUFBLFNBQUFFLENBQUEsTUFBQW5CLENBQUEsR0FBQUYsQ0FBQSxDQUFBa0IsR0FBQSxTQUFBaEIsQ0FBQSxHQUFBQSxDQUFBLENBQUFjLElBQUEsSUFBQXZCLENBQUEsQ0FBQUYsQ0FBQSxDQUFBQSxDQUFBLElBQUFXLENBQUEsQ0FBQU0sS0FBQSxFQUFBZixDQUFBLENBQUF1RCxJQUFBLEdBQUF6RCxDQUFBLENBQUFLLENBQUEsZUFBQUgsQ0FBQSxDQUFBd0IsTUFBQSxLQUFBeEIsQ0FBQSxDQUFBd0IsTUFBQSxXQUFBeEIsQ0FBQSxDQUFBeUIsR0FBQSxHQUFBMUIsQ0FBQSxHQUFBQyxDQUFBLENBQUEwQixRQUFBLFNBQUFFLENBQUEsSUFBQW5CLENBQUEsSUFBQVQsQ0FBQSxDQUFBd0IsTUFBQSxZQUFBeEIsQ0FBQSxDQUFBeUIsR0FBQSxPQUFBNkIsU0FBQSxzQ0FBQXRELENBQUEsQ0FBQTBCLFFBQUEsU0FBQUUsQ0FBQSxjQUFBNEIsRUFBQXpELENBQUEsU0FBQTBELFVBQUEsQ0FBQUMsSUFBQSxDQUFBM0QsQ0FBQSxjQUFBNEQsRUFBQTdELENBQUEsUUFBQUUsQ0FBQSxHQUFBRixDQUFBLFdBQUFFLENBQUEsQ0FBQWtDLElBQUEsYUFBQWxDLENBQUEsQ0FBQXlCLEdBQUEsR0FBQTFCLENBQUEsRUFBQUQsQ0FBQSxNQUFBRSxDQUFBLGFBQUFtQyxRQUFBcEMsQ0FBQSxTQUFBMEQsVUFBQSxXQUFBMUQsQ0FBQSxDQUFBZ0QsT0FBQSxDQUFBUyxDQUFBLGNBQUFJLEtBQUEsaUJBQUFoQixFQUFBOUMsQ0FBQSxnQkFBQUEsQ0FBQSxRQUFBRSxDQUFBLEdBQUFGLENBQUEsQ0FBQVMsQ0FBQSxPQUFBUCxDQUFBLFNBQUFBLENBQUEsQ0FBQW9DLElBQUEsQ0FBQXRDLENBQUEsNEJBQUFBLENBQUEsQ0FBQXlELElBQUEsU0FBQXpELENBQUEsT0FBQStELEtBQUEsQ0FBQS9ELENBQUEsQ0FBQWdFLE1BQUEsU0FBQXpELENBQUEsT0FBQUksQ0FBQSxZQUFBVCxFQUFBLGFBQUFLLENBQUEsR0FBQVAsQ0FBQSxDQUFBZ0UsTUFBQSxPQUFBM0QsQ0FBQSxDQUFBaUMsSUFBQSxDQUFBdEMsQ0FBQSxFQUFBTyxDQUFBLFVBQUFMLENBQUEsQ0FBQWUsS0FBQSxHQUFBakIsQ0FBQSxDQUFBTyxDQUFBLEdBQUFMLENBQUEsQ0FBQXVCLElBQUEsT0FBQXZCLENBQUEsU0FBQUEsQ0FBQSxDQUFBZSxLQUFBLEdBQUFoQixDQUFBLEVBQUFDLENBQUEsQ0FBQXVCLElBQUEsT0FBQXZCLENBQUEsWUFBQVMsQ0FBQSxDQUFBOEMsSUFBQSxHQUFBOUMsQ0FBQSxnQkFBQTZDLFNBQUEsQ0FBQUosT0FBQSxDQUFBcEQsQ0FBQSxrQ0FBQXdDLGlCQUFBLENBQUFwQyxTQUFBLEdBQUFxQywwQkFBQSxFQUFBMUIsQ0FBQSxDQUFBZ0MsQ0FBQSxpQkFBQU4sMEJBQUEsR0FBQTFCLENBQUEsQ0FBQTBCLDBCQUFBLGlCQUFBRCxpQkFBQSxHQUFBQSxpQkFBQSxDQUFBeUIsV0FBQSxHQUFBbEQsQ0FBQSxDQUFBMEIsMEJBQUEsRUFBQTVCLENBQUEsd0JBQUFiLENBQUEsQ0FBQWtFLG1CQUFBLGFBQUFqRSxDQUFBLFFBQUFELENBQUEsd0JBQUFDLENBQUEsSUFBQUEsQ0FBQSxDQUFBa0UsV0FBQSxXQUFBbkUsQ0FBQSxLQUFBQSxDQUFBLEtBQUF3QyxpQkFBQSw2QkFBQXhDLENBQUEsQ0FBQWlFLFdBQUEsSUFBQWpFLENBQUEsQ0FBQW9FLElBQUEsT0FBQXBFLENBQUEsQ0FBQXFFLElBQUEsYUFBQXBFLENBQUEsV0FBQUUsTUFBQSxDQUFBbUUsY0FBQSxHQUFBbkUsTUFBQSxDQUFBbUUsY0FBQSxDQUFBckUsQ0FBQSxFQUFBd0MsMEJBQUEsS0FBQXhDLENBQUEsQ0FBQXNFLFNBQUEsR0FBQTlCLDBCQUFBLEVBQUExQixDQUFBLENBQUFkLENBQUEsRUFBQVksQ0FBQSx5QkFBQVosQ0FBQSxDQUFBRyxTQUFBLEdBQUFELE1BQUEsQ0FBQW9CLE1BQUEsQ0FBQXdCLENBQUEsR0FBQTlDLENBQUEsS0FBQUQsQ0FBQSxDQUFBd0UsS0FBQSxhQUFBdkUsQ0FBQSxhQUFBcUQsT0FBQSxFQUFBckQsQ0FBQSxPQUFBK0MsQ0FBQSxDQUFBRyxhQUFBLENBQUEvQyxTQUFBLEdBQUFXLENBQUEsQ0FBQW9DLGFBQUEsQ0FBQS9DLFNBQUEsRUFBQU8sQ0FBQSxpQ0FBQVgsQ0FBQSxDQUFBbUQsYUFBQSxHQUFBQSxhQUFBLEVBQUFuRCxDQUFBLENBQUF5RSxLQUFBLGFBQUF4RSxDQUFBLEVBQUFDLENBQUEsRUFBQUcsQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENBQUEsZUFBQUEsQ0FBQSxLQUFBQSxDQUFBLEdBQUFpRSxPQUFBLE9BQUEvRCxDQUFBLE9BQUF3QyxhQUFBLENBQUE5QixDQUFBLENBQUFwQixDQUFBLEVBQUFDLENBQUEsRUFBQUcsQ0FBQSxFQUFBRSxDQUFBLEdBQUFFLENBQUEsVUFBQVQsQ0FBQSxDQUFBa0UsbUJBQUEsQ0FBQWhFLENBQUEsSUFBQVMsQ0FBQSxHQUFBQSxDQUFBLENBQUE4QyxJQUFBLEdBQUFGLElBQUEsV0FBQXRELENBQUEsV0FBQUEsQ0FBQSxDQUFBd0IsSUFBQSxHQUFBeEIsQ0FBQSxDQUFBZ0IsS0FBQSxHQUFBTixDQUFBLENBQUE4QyxJQUFBLFdBQUFULENBQUEsQ0FBQUQsQ0FBQSxHQUFBaEMsQ0FBQSxDQUFBZ0MsQ0FBQSxFQUFBbEMsQ0FBQSxnQkFBQUUsQ0FBQSxDQUFBZ0MsQ0FBQSxFQUFBdEMsQ0FBQSxpQ0FBQU0sQ0FBQSxDQUFBZ0MsQ0FBQSw2REFBQS9DLENBQUEsQ0FBQTJFLElBQUEsYUFBQTFFLENBQUEsUUFBQUQsQ0FBQSxHQUFBRyxNQUFBLENBQUFGLENBQUEsR0FBQUMsQ0FBQSxnQkFBQUcsQ0FBQSxJQUFBTCxDQUFBLEVBQUFFLENBQUEsQ0FBQTBFLE9BQUEsQ0FBQXZFLENBQUEsbUJBQUFKLEVBQUEsV0FBQUMsQ0FBQSxDQUFBOEQsTUFBQSxRQUFBM0QsQ0FBQSxHQUFBSCxDQUFBLENBQUEyRSxHQUFBLE9BQUE3RSxDQUFBLFNBQUFDLENBQUEsQ0FBQWdCLEtBQUEsR0FBQVosQ0FBQSxFQUFBSixDQUFBLENBQUF3QixJQUFBLE9BQUF4QixDQUFBLFNBQUFBLENBQUEsQ0FBQXdCLElBQUEsT0FBQXhCLENBQUEsUUFBQUQsQ0FBQSxDQUFBOEUsTUFBQSxHQUFBaEMsQ0FBQSxFQUFBVCxPQUFBLENBQUFqQyxTQUFBLEtBQUErRCxXQUFBLEVBQUE5QixPQUFBLEVBQUF5QixLQUFBLFdBQUFBLE1BQUE5RCxDQUFBLGFBQUErRSxJQUFBLFFBQUF0QixJQUFBLFdBQUExQixJQUFBLFFBQUFDLEtBQUEsR0FBQS9CLENBQUEsT0FBQXdCLElBQUEsWUFBQUcsUUFBQSxjQUFBRixNQUFBLGdCQUFBQyxHQUFBLEdBQUExQixDQUFBLE9BQUEwRCxVQUFBLENBQUFWLE9BQUEsQ0FBQVksQ0FBQSxJQUFBN0QsQ0FBQSxXQUFBRSxDQUFBLGtCQUFBQSxDQUFBLENBQUE4RSxNQUFBLE9BQUEzRSxDQUFBLENBQUFpQyxJQUFBLE9BQUFwQyxDQUFBLE1BQUE2RCxLQUFBLEVBQUE3RCxDQUFBLENBQUErRSxLQUFBLGNBQUEvRSxDQUFBLElBQUFELENBQUEsTUFBQWlGLElBQUEsV0FBQUEsS0FBQSxTQUFBekQsSUFBQSxXQUFBeEIsQ0FBQSxRQUFBMEQsVUFBQSx3QkFBQTFELENBQUEsQ0FBQW1DLElBQUEsUUFBQW5DLENBQUEsQ0FBQTBCLEdBQUEsY0FBQXdELElBQUEsS0FBQWxELGlCQUFBLFdBQUFBLGtCQUFBakMsQ0FBQSxhQUFBeUIsSUFBQSxRQUFBekIsQ0FBQSxNQUFBRSxDQUFBLGtCQUFBRyxFQUFBSixDQUFBLElBQUFVLENBQUEsQ0FBQXlCLElBQUEsWUFBQXpCLENBQUEsQ0FBQWdCLEdBQUEsR0FBQTNCLENBQUEsRUFBQUUsQ0FBQSxDQUFBdUQsSUFBQSxHQUFBeEQsQ0FBQSxhQUFBTSxDQUFBLEdBQUFMLENBQUEsQ0FBQXlELFVBQUEsQ0FBQUssTUFBQSxNQUFBekQsQ0FBQSxTQUFBQSxDQUFBLFFBQUFFLENBQUEsUUFBQWtELFVBQUEsQ0FBQXBELENBQUEsR0FBQUksQ0FBQSxHQUFBRixDQUFBLEtBQUFJLENBQUEsUUFBQWtFLElBQUEsRUFBQWhFLENBQUEsR0FBQU4sQ0FBQSxLQUFBWSxDQUFBLEdBQUFaLENBQUEsZ0JBQUFBLENBQUEsWUFBQUosQ0FBQSxrQkFBQVUsQ0FBQSxLQUFBTSxDQUFBLFFBQUFHLEtBQUEsd0RBQUFmLENBQUEsT0FBQUEsQ0FBQSxPQUFBSSxDQUFBLFFBQUFBLENBQUEsR0FBQUUsQ0FBQSxjQUFBVyxNQUFBLGdCQUFBQyxHQUFBLEdBQUExQixDQUFBLEVBQUFJLENBQUEsQ0FBQVUsQ0FBQSxXQUFBRixDQUFBLEdBQUFRLENBQUEsU0FBQWhCLENBQUEsQ0FBQWdCLENBQUEsY0FBQWEsTUFBQSxXQUFBQSxPQUFBakMsQ0FBQSxFQUFBRCxDQUFBLGFBQUFFLENBQUEsUUFBQXlELFVBQUEsQ0FBQUssTUFBQSxNQUFBOUQsQ0FBQSxTQUFBQSxDQUFBLFFBQUFHLENBQUEsUUFBQXNELFVBQUEsQ0FBQXpELENBQUEsT0FBQUcsQ0FBQSxZQUFBQSxDQUFBLFlBQUEwRSxJQUFBLFNBQUFBLElBQUEsR0FBQTFFLENBQUEsV0FBQUUsQ0FBQSxHQUFBRixDQUFBLGFBQUFFLENBQUEsaUJBQUFOLENBQUEsbUJBQUFBLENBQUEsS0FBQU0sQ0FBQSxPQUFBUCxDQUFBLElBQUFBLENBQUEsSUFBQU8sQ0FBQSxRQUFBQSxDQUFBLGNBQUFFLENBQUEsR0FBQUYsQ0FBQSxHQUFBQSxDQUFBLGlCQUFBRSxDQUFBLENBQUEyQixJQUFBLEdBQUFuQyxDQUFBLEVBQUFRLENBQUEsQ0FBQWtCLEdBQUEsR0FBQTNCLENBQUEsRUFBQU8sQ0FBQSxTQUFBbUIsTUFBQSxnQkFBQStCLElBQUEsR0FBQWxELENBQUEsS0FBQXVCLENBQUEsU0FBQXNELFFBQUEsQ0FBQTNFLENBQUEsTUFBQTJFLFFBQUEsV0FBQUEsU0FBQW5GLENBQUEsRUFBQUQsQ0FBQSxvQkFBQUMsQ0FBQSxDQUFBbUMsSUFBQSxRQUFBbkMsQ0FBQSxDQUFBMEIsR0FBQSxxQkFBQTFCLENBQUEsQ0FBQW1DLElBQUEsbUJBQUFuQyxDQUFBLENBQUFtQyxJQUFBLFFBQUFxQixJQUFBLEdBQUF4RCxDQUFBLENBQUEwQixHQUFBLGdCQUFBMUIsQ0FBQSxDQUFBbUMsSUFBQSxTQUFBK0MsSUFBQSxRQUFBeEQsR0FBQSxHQUFBMUIsQ0FBQSxDQUFBMEIsR0FBQSxPQUFBRCxNQUFBLGtCQUFBK0IsSUFBQSx5QkFBQXhELENBQUEsQ0FBQW1DLElBQUEsSUFBQXBDLENBQUEsVUFBQXlELElBQUEsR0FBQXpELENBQUEsR0FBQThCLENBQUEsS0FBQXVELE1BQUEsV0FBQUEsT0FBQXBGLENBQUEsYUFBQUQsQ0FBQSxRQUFBMkQsVUFBQSxDQUFBSyxNQUFBLE1BQUFoRSxDQUFBLFNBQUFBLENBQUEsUUFBQUUsQ0FBQSxRQUFBeUQsVUFBQSxDQUFBM0QsQ0FBQSxPQUFBRSxDQUFBLFFBQUFELENBQUEsY0FBQW1GLFFBQUEsQ0FBQWxGLENBQUEsS0FBQUEsQ0FBQSxNQUFBMkQsQ0FBQSxDQUFBM0QsQ0FBQSxHQUFBNEIsQ0FBQSx5QkFBQXdELE9BQUFyRixDQUFBLGFBQUFELENBQUEsUUFBQTJELFVBQUEsQ0FBQUssTUFBQSxNQUFBaEUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFFLENBQUEsUUFBQXlELFVBQUEsQ0FBQTNELENBQUEsT0FBQUUsQ0FBQSxRQUFBRCxDQUFBLFFBQUFJLENBQUEsR0FBQUgsQ0FBQSxxQkFBQUcsQ0FBQSxDQUFBK0IsSUFBQSxRQUFBN0IsQ0FBQSxHQUFBRixDQUFBLENBQUFzQixHQUFBLEVBQUFrQyxDQUFBLENBQUEzRCxDQUFBLFlBQUFLLENBQUEsWUFBQWlCLEtBQUEsOEJBQUErRCxhQUFBLFdBQUFBLGNBQUF2RixDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxnQkFBQXVCLFFBQUEsS0FBQW5CLENBQUEsRUFBQXFDLENBQUEsQ0FBQTlDLENBQUEsR0FBQUEsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsRUFBQUEsQ0FBQSxvQkFBQXFCLE1BQUEsVUFBQUMsR0FBQSxHQUFBMUIsQ0FBQSxHQUFBNkIsQ0FBQSxPQUFBOUIsQ0FBQTtBQUFBLFNBQUF3RixtQkFBQW5GLENBQUEsRUFBQUosQ0FBQSxFQUFBQyxDQUFBLEVBQUFGLENBQUEsRUFBQU8sQ0FBQSxFQUFBSSxDQUFBLEVBQUFJLENBQUEsY0FBQU4sQ0FBQSxHQUFBSixDQUFBLENBQUFNLENBQUEsRUFBQUksQ0FBQSxHQUFBRixDQUFBLEdBQUFKLENBQUEsQ0FBQVEsS0FBQSxXQUFBWixDQUFBLGdCQUFBSCxDQUFBLENBQUFHLENBQUEsS0FBQUksQ0FBQSxDQUFBZ0IsSUFBQSxHQUFBeEIsQ0FBQSxDQUFBWSxDQUFBLElBQUE2RCxPQUFBLENBQUFyQixPQUFBLENBQUF4QyxDQUFBLEVBQUEwQyxJQUFBLENBQUF2RCxDQUFBLEVBQUFPLENBQUE7QUFBQSxTQUFBa0Ysa0JBQUFwRixDQUFBLDZCQUFBSixDQUFBLFNBQUFDLENBQUEsR0FBQXdGLFNBQUEsYUFBQWhCLE9BQUEsV0FBQTFFLENBQUEsRUFBQU8sQ0FBQSxRQUFBSSxDQUFBLEdBQUFOLENBQUEsQ0FBQXNGLEtBQUEsQ0FBQTFGLENBQUEsRUFBQUMsQ0FBQSxZQUFBMEYsTUFBQXZGLENBQUEsSUFBQW1GLGtCQUFBLENBQUE3RSxDQUFBLEVBQUFYLENBQUEsRUFBQU8sQ0FBQSxFQUFBcUYsS0FBQSxFQUFBQyxNQUFBLFVBQUF4RixDQUFBLGNBQUF3RixPQUFBeEYsQ0FBQSxJQUFBbUYsa0JBQUEsQ0FBQTdFLENBQUEsRUFBQVgsQ0FBQSxFQUFBTyxDQUFBLEVBQUFxRixLQUFBLEVBQUFDLE1BQUEsV0FBQXhGLENBQUEsS0FBQXVGLEtBQUE7QUFEa0M7O0FBRWxDO0FBQ0E7O0FBRUEsSUFBTUUsUUFBUSxHQUFHLElBQUlDLGdCQUFnQixDQUFDLFlBQU07RUFDeENDLEtBQUssQ0FBQ0MsSUFBSSxDQUFDQyxRQUFRLENBQUNDLHNCQUFzQixDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUNsRCxPQUFPLENBQUMsVUFBQ21ELE9BQU8sRUFBSztJQUM1RTtJQUNBLElBQUksQ0FBQ0EsT0FBTyxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtNQUMxQ0MsU0FBUyxDQUFDRixPQUFPLENBQUM7SUFDdEI7SUFFQSxJQUFJLENBQUNBLE9BQU8sQ0FBQ0MsYUFBYSxDQUFDLHNCQUFzQixDQUFDLEVBQUU7TUFDaERFLFdBQVcsQ0FBQ0gsT0FBTyxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUN4RDtJQUVBLElBQUksQ0FBQ0QsT0FBTyxDQUFDQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsRUFBRTtNQUM1Q0csZ0JBQWdCLENBQUNKLE9BQU8sQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDN0Q7O0lBRUE7O0lBRUFJLFlBQVksQ0FBQ0wsT0FBTyxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzs7SUFFckQ7SUFDQUssVUFBVSxDQUFDTixPQUFPLENBQUM7RUFDdkIsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDO0FBRUZOLFFBQVEsQ0FBQ2EsT0FBTyxDQUFDVCxRQUFRLENBQUNVLElBQUksRUFBRTtFQUFFQyxPQUFPLEVBQUUsSUFBSTtFQUFFQyxTQUFTLEVBQUUsSUFBSTtFQUFFQyxVQUFVLEVBQUU7QUFBSyxDQUFDLENBQUM7O0FBRXJGO0FBQ0EsSUFBTUwsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUlNLE1BQU0sRUFBSztFQUMzQixJQUFJQSxNQUFNLENBQUNDLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFOztFQUV0QztFQUNBRixNQUFNLENBQUNDLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLEtBQUssQ0FBQzs7RUFFM0I7RUFDQSxJQUFNQyxTQUFTLEdBQUdKLE1BQU07RUFDeEIsSUFBTUssUUFBUSxHQUFHckIsS0FBSyxDQUFDQyxJQUFJLENBQUNtQixTQUFTLENBQUNDLFFBQVEsQ0FBQztFQUUvQyxJQUFNQyxPQUFPLEdBQUdELFFBQVEsQ0FBQyxDQUFDLENBQUM7RUFDM0IsSUFBTUUsTUFBTSxHQUFHRixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7RUFFNUIsSUFBSUMsT0FBTyxJQUFJQyxNQUFNLEVBQUU7SUFDbkJILFNBQVMsQ0FBQ0ksWUFBWSxDQUFDRixPQUFPLEVBQUVDLE1BQU0sQ0FBQztFQUMzQztBQUNKLENBQUM7O0FBRUQ7QUFDQSxJQUFNakIsU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUlVLE1BQU0sRUFBSztFQUMxQixJQUFNUyxHQUFHLEdBQUd2QixRQUFRLENBQUN3QixhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ3pDRCxHQUFHLENBQUNFLFNBQVMsR0FBRyxlQUFlO0VBRS9CWCxNQUFNLENBQUNZLFdBQVcsQ0FBQ0gsR0FBRyxDQUFDO0FBQzNCLENBQUM7QUFFRCxJQUFNakIsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBSVEsTUFBTSxFQUFLO0VBQ2pDLElBQU1hLE1BQU0sR0FBRzNCLFFBQVEsQ0FBQ3dCLGFBQWEsQ0FBQyxHQUFHLENBQUM7RUFDMUNHLE1BQU0sQ0FBQ0YsU0FBUyxHQUFHLDBCQUEwQjtFQUM3Q0UsTUFBTSxDQUFDQyxTQUFTLEdBQUcsU0FBUztFQUM1QkQsTUFBTSxDQUFDRSxnQkFBZ0IsQ0FBQyxPQUFPLGVBQUF0QyxpQkFBQSxjQUFBMUYsbUJBQUEsR0FBQXNFLElBQUEsQ0FBRSxTQUFBMkQsUUFBQTtJQUFBLE9BQUFqSSxtQkFBQSxHQUFBd0MsSUFBQSxVQUFBMEYsU0FBQUMsUUFBQTtNQUFBLGtCQUFBQSxRQUFBLENBQUFuRCxJQUFBLEdBQUFtRCxRQUFBLENBQUF6RSxJQUFBO1FBQUE7VUFDN0IwRSxtQkFBbUIsQ0FBQyxDQUFDO1FBQUM7UUFBQTtVQUFBLE9BQUFELFFBQUEsQ0FBQWhELElBQUE7TUFBQTtJQUFBLEdBQUE4QyxPQUFBO0VBQUEsQ0FDekIsR0FBQztFQUVGaEIsTUFBTSxDQUFDWSxXQUFXLENBQUNDLE1BQU0sQ0FBQztBQUM5QixDQUFDO0FBRUQsSUFBTU0sbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFtQkEsQ0FBQSxFQUFTO0VBQzlCLElBQUlDLEtBQUssR0FBR2xDLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLHVCQUF1QixDQUFDO0VBQzNELElBQUlnQyxJQUFJLEdBQUdyQyxLQUFLLENBQUNDLElBQUksQ0FBQ21DLEtBQUssQ0FBQ0UsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztFQUVqRUQsSUFBSSxDQUFDRSxJQUFJLENBQUMsVUFBQ0MsSUFBSSxFQUFFQyxJQUFJLEVBQUs7SUFDdEIsSUFBSUMsS0FBSyxHQUFHQyxjQUFjLENBQUNILElBQUksQ0FBQztJQUNoQyxJQUFJSSxLQUFLLEdBQUdELGNBQWMsQ0FBQ0YsSUFBSSxDQUFDO0lBQ2hDLE9BQU9HLEtBQUssR0FBR0YsS0FBSyxDQUFDLENBQUM7RUFDMUIsQ0FBQyxDQUFDO0VBRUZMLElBQUksQ0FBQ3BGLE9BQU8sQ0FBQyxVQUFDNEYsR0FBRztJQUFBLE9BQUtULEtBQUssQ0FBQ1IsV0FBVyxDQUFDaUIsR0FBRyxDQUFDO0VBQUEsRUFBQyxDQUFDLENBQUM7O0VBRS9DLFNBQVNGLGNBQWNBLENBQUNFLEdBQUcsRUFBRTtJQUN6QixJQUFJQyxhQUFhLEdBQUdELEdBQUcsQ0FBQ3hDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztJQUMxRCxJQUFJLENBQUN5QyxhQUFhLEVBQUU7TUFDaEJDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLHdCQUF3QixFQUFFSCxHQUFHLENBQUM7TUFDNUMsT0FBTyxJQUFJSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QjtJQUVBLElBQUlDLFFBQVEsR0FBR0osYUFBYSxDQUFDaEIsU0FBUyxDQUFDcUIsSUFBSSxDQUFDLENBQUM7O0lBRTdDO0lBQ0FELFFBQVEsR0FBR0EsUUFBUSxDQUFDRSxPQUFPLENBQUMsOEJBQThCLEVBQUUsRUFBRSxDQUFDLENBQUNELElBQUksQ0FBQyxDQUFDOztJQUV0RTtJQUNBLElBQUlFLFVBQVUsR0FBR0MsU0FBUyxDQUFDSixRQUFRLENBQUM7SUFDcEMsSUFBSW5GLEtBQUssQ0FBQ3NGLFVBQVUsQ0FBQ0UsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQzdCUixPQUFPLENBQUNDLEtBQUssQ0FBQyxzQkFBc0IsRUFBRUUsUUFBUSxDQUFDO01BQy9DLE9BQU8sSUFBSUQsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN0QjtJQUVBLE9BQU9JLFVBQVU7RUFDckI7RUFFQSxTQUFTQyxTQUFTQSxDQUFDRSxVQUFVLEVBQUU7SUFDM0IsSUFBTUMsTUFBTSxHQUFHO01BQ1hDLEdBQUcsRUFBRSxDQUFDO01BQ05DLEdBQUcsRUFBRSxDQUFDO01BQ05DLEdBQUcsRUFBRSxDQUFDO01BQ05DLEdBQUcsRUFBRSxDQUFDO01BQ05DLEdBQUcsRUFBRSxDQUFDO01BQ05DLEdBQUcsRUFBRSxDQUFDO01BQ05DLEdBQUcsRUFBRSxDQUFDO01BQ05DLEdBQUcsRUFBRSxDQUFDO01BQ05DLEdBQUcsRUFBRSxDQUFDO01BQ05DLEdBQUcsRUFBRSxDQUFDO01BQ05DLEdBQUcsRUFBRSxFQUFFO01BQ1BDLEdBQUcsRUFBRTtJQUNULENBQUM7SUFDRCxJQUFJQyxLQUFLLEdBQUdkLFVBQVUsQ0FBQ2UsV0FBVyxDQUFDLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLGdDQUFnQyxDQUFDO0lBQzVFLElBQUksQ0FBQ0YsS0FBSyxJQUFJLENBQUNiLE1BQU0sQ0FBQ25KLGNBQWMsQ0FBQ2dLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQzVDdkIsT0FBTyxDQUFDQyxLQUFLLENBQUMsc0JBQXNCLEVBQUVRLFVBQVUsQ0FBQztNQUNqRCxPQUFPLElBQUlQLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdEI7SUFDQSxPQUFPLElBQUlBLElBQUksQ0FBQ3FCLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRWIsTUFBTSxDQUFDYSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3pEO0FBQ0osQ0FBQzs7QUFFRDtBQUNBLElBQU03RCxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBSU8sTUFBTSxFQUFLO0VBQzdCLElBQUlvQixLQUFLLEdBQUdsQyxRQUFRLENBQUNHLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQztFQUMzRCxJQUFJZ0MsSUFBSSxHQUFHckMsS0FBSyxDQUFDQyxJQUFJLENBQUNtQyxLQUFLLENBQUNFLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLENBQUM7RUFFakUsSUFBSSxDQUFDdEMsS0FBSyxDQUFDQyxJQUFJLENBQUNvQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNoQixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtFQUV0QyxJQUFJb0QsVUFBVSxHQUFHLENBQUM7RUFFbEJwQyxJQUFJLENBQUNwRixPQUFPLENBQUMsVUFBQzRGLEdBQUcsRUFBSztJQUNsQixJQUFJNkIsTUFBTSxHQUFHMUUsS0FBSyxDQUFDQyxJQUFJLENBQUM0QyxHQUFHLENBQUN4QixRQUFRLENBQUM7SUFFckMsSUFBSXFELE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsV0FBVyxJQUFJLEtBQUssRUFBRTtNQUNoQyxJQUFJQyxNQUFNLEdBQUdGLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsV0FBVyxDQUFDdkIsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQ0EsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7TUFFckVxQixVQUFVLElBQUlJLE1BQU0sQ0FBQ0QsTUFBTSxDQUFDO0lBQ2hDO0VBQ0osQ0FBQyxDQUFDO0VBRUYsSUFBSTVELE1BQU0sQ0FBQ1gsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDeUIsU0FBUyxDQUFDc0IsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQ0EsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxZQUFZLEVBQUU7SUFDdkZwQyxNQUFNLENBQUNYLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQ3lCLFNBQVMsY0FBQWdELE1BQUEsQ0FBU0wsVUFBVSxDQUFDTSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMzQixPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFFO0VBQ3pGLENBQUMsTUFBTSxJQUNIcEMsTUFBTSxDQUFDWCxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUN5QixTQUFTLENBQUNzQixPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDQSxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxJQUNyRXFCLFVBQVUsQ0FBQ00sT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDM0IsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDekM7SUFDRXBDLE1BQU0sQ0FBQ1gsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDeUIsU0FBUyxjQUFBZ0QsTUFBQSxDQUFTTCxVQUFVLENBQUNNLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzNCLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUU7RUFDekY7QUFDSixDQUFDO0FBRUQsSUFBTTdDLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFJUyxNQUFNLEVBQUs7RUFDNUIsSUFBTWdFLE9BQU8sR0FBRzlFLFFBQVEsQ0FBQ3dCLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDN0NzRCxPQUFPLENBQUNyRCxTQUFTLEdBQUcscUJBQXFCO0VBRXpDLElBQU1zRCxJQUFJLEdBQUcvRSxRQUFRLENBQUN3QixhQUFhLENBQUMsR0FBRyxDQUFDO0VBQ3hDdUQsSUFBSSxDQUFDbkQsU0FBUyxHQUFHLG9CQUFvQjtFQUNyQ2tELE9BQU8sQ0FBQ3BELFdBQVcsQ0FBQ3FELElBQUksQ0FBQztFQUV6QixJQUFNQyxJQUFJLEdBQUdoRixRQUFRLENBQUN3QixhQUFhLENBQUMsR0FBRyxDQUFDO0VBQ3hDd0QsSUFBSSxDQUFDcEQsU0FBUyxHQUFHLFlBQVk7RUFDN0JrRCxPQUFPLENBQUNwRCxXQUFXLENBQUNzRCxJQUFJLENBQUM7RUFFekJsRSxNQUFNLENBQUNZLFdBQVcsQ0FBQ29ELE9BQU8sQ0FBQztBQUMvQixDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qb2JrdG9vbHMvLi9zcmMvc3R5bGVzL2xpc2Fob2NrZXkuc2NzcyIsIndlYnBhY2s6Ly9qb2JrdG9vbHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2pvYmt0b29scy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2pvYmt0b29scy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qb2JrdG9vbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2pvYmt0b29scy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9qb2JrdG9vbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vam9ia3Rvb2xzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vam9ia3Rvb2xzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vam9ia3Rvb2xzLy4vc3JjL3N0eWxlcy9saXNhaG9ja2V5LnNjc3M/N2Y5YiIsIndlYnBhY2s6Ly9qb2JrdG9vbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vam9ia3Rvb2xzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2pvYmt0b29scy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vam9ia3Rvb2xzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vam9ia3Rvb2xzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vam9ia3Rvb2xzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9qb2JrdG9vbHMvLi9zcmMvbGlzYWhvY2tleS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5ISksge1xuICBwb3NpdGlvbjogdW5zZXQ7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LXdyYXA6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuLkhKSyBkaXYge1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIG1heC13aWR0aDogdW5zZXQ7XG4gIGZsZXg6IHVuc2V0O1xufVxuLkhKSyBkaXYgc3BhbiB7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbn1cblxuLmFwcC1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbi5KSy13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XG4gIHBhZGRpbmc6IDAuNnJlbTtcbiAgbWFyZ2luOiAwIDFyZW07XG59XG4uSkstd3JhcHBlciBkaXYge1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLnJlb3JkZXItYnV0dG9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiAjZTllZWY2O1xuICBjb2xvcjogIzFmMWYxZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMC40cmVtIDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcbiAgbWFyZ2luOiAwIDAuNHJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XG59XG4ucmVvcmRlci1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDM5LCAzOSwgMzksIDAuMyk7XG59XG5cbi5wYWlkRGF0YS13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wYWlkRGF0YS13cmFwcGVyIHAge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwO1xufVxuLnBhaWREYXRhLXdyYXBwZXIgYSB7XG4gIG1hcmdpbi1sZWZ0OiAwLjNyZW07XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2xpc2Fob2NrZXkuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFjQTtFQUNJLGVBQUE7RUFFQSxXQUFBO0VBRUEsMkJBQUE7RUFFQSx3QkFBQTtFQUNBLG1CQUFBO0VBRUEsOEJBQUE7QUFqQko7QUFtQkk7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQWpCUjtBQW1CUTtFQUNJLGtCQUFBO0FBakJaOztBQXVCQTtFQUNJLDJCQUFBO0FBcEJKOztBQXdCQTtFQUNJLG1CQTNDbUI7RUE2Q25CLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBRUEscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQXZCSjtBQXlCSTtFQUNJLGlCQUFBO0FBdkJSOztBQTJCQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtFQUVBLG1CQS9EUztFQWdFVCxjQXRERztFQXdESCxpQkFBQTtFQUVBLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSxvQkFBQTtFQUNBLHFCQUFBO0VBRUEsZ0JBQUE7RUFFQSxvQkFBQTtBQTlCSjtBQWdDSTtFQUNJLGlDQUFBO0FBOUJSOztBQWtDQTtFQUNJLGFBQUE7RUFFQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFoQ0o7QUFrQ0k7RUFDSSxpQkFBQTtFQUVBLFNBQUE7QUFqQ1I7QUFvQ0k7RUFDSSxtQkFBQTtBQWxDUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkYmFja2dyb3VuZDogI2U5ZWVmNjtcXHJcXG4kYmFja2dyb3VuZC1zZWNvbmRhcnk6ICNmZmZmZmY7XFxyXFxuXFxyXFxuJHByaW1hcnk6ICNiM2M2ZmE7XFxyXFxuJEhicy1wcmltYXJ5OiAjNmMyMDFkO1xcclxcbiRIYnMtcHJpbWFyeS1ob3ZlcjogIzc0M2EzNztcXHJcXG5cXHJcXG4kc3VwcG9ydGVkOiAjN2RiODgwO1xcclxcbiR1bnNwcG9ydGVkOiAjYjg3ZDdkO1xcclxcblxcclxcbiR0ZXh0OiAjMWYxZjFmO1xcclxcbiR0ZXh0LWRhcms6ICM1ODU4NTg7XFxyXFxuXFxyXFxuLy9tYWluIGVsZW1lbnRzXFxyXFxuLkhKSyB7XFxyXFxuICAgIHBvc2l0aW9uOiB1bnNldDtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuXFxyXFxuICAgIGZsZXgtd3JhcDogdW5zZXQgIWltcG9ydGFudDtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcblxcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XFxyXFxuXFxyXFxuICAgIGRpdiB7XFxyXFxuICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IHVuc2V0O1xcclxcbiAgICAgICAgZmxleDogdW5zZXQ7XFxyXFxuXFxyXFxuICAgICAgICBzcGFuIHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLy9maXggbGlzYWhvY2tleSBjb250YWluZXIgd2lkdGhcXHJcXG4uYXBwLWNvbnRhaW5lciB7XFxyXFxuICAgIG1heC13aWR0aDogdW5zZXQgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLy9lbGVtZW50c1xcclxcbi5KSy13cmFwcGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQtc2Vjb25kYXJ5O1xcclxcblxcclxcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcXHJcXG4gICAgcGFkZGluZzogMC42cmVtO1xcclxcbiAgICBtYXJnaW46IDAgMXJlbTtcXHJcXG5cXHJcXG4gICAgZGl2IHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5yZW9yZGVyLWJ1dHRvbiB7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQ7XFxyXFxuICAgIGNvbG9yOiAkdGV4dDtcXHJcXG5cXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgcGFkZGluZzogMC40cmVtIDFyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcXHJcXG5cXHJcXG4gICAgbWFyZ2luOiAwIDAuNHJlbTtcXHJcXG5cXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XFxyXFxuXFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgjMjcyNzI3LCAwLjMpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5wYWlkRGF0YS13cmFwcGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG5cXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgcCB7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG5cXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBhIHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjNyZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbGlzYWhvY2tleS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xpc2Fob2NrZXkuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGVzL2xpc2Fob2NrZXkuc2Nzc1wiO1xyXG5cclxuLy9ISksgPSBIaWphY2tlZCBpdGVtXHJcbi8vSksgPSBKb2JLVG9vbHMgYWRkZWQgaXRlbVxyXG5cclxuY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XHJcbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJlbC1yb3cgbXQtMVwiKSkuZm9yRWFjaCgoRGF0YVJvdykgPT4ge1xyXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBidXR0b24gYWxyZWFkeSBleGlzdHMgdG8gcHJldmVudCBhZGRpbmcgaXQgbXVsdGlwbGUgdGltZXNcclxuICAgICAgICBpZiAoIURhdGFSb3cucXVlcnlTZWxlY3RvcihcImRpdi5KSy13cmFwcGVyXCIpKSB7XHJcbiAgICAgICAgICAgIGFkZEh1YkRpdihEYXRhUm93KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghRGF0YVJvdy5xdWVyeVNlbGVjdG9yKFwiZGl2LnBhaWREYXRhLXdyYXBwZXJcIikpIHtcclxuICAgICAgICAgICAgYWRkUGFpZERhdGEoRGF0YVJvdy5xdWVyeVNlbGVjdG9yKFwiZGl2LkpLLXdyYXBwZXJcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFEYXRhUm93LnF1ZXJ5U2VsZWN0b3IoXCJwLnJlb3JkZXItYnV0dG9uXCIpKSB7XHJcbiAgICAgICAgICAgIGFkZFJlb3JkZXJCdXR0b24oRGF0YVJvdy5xdWVyeVNlbGVjdG9yKFwiZGl2LkpLLXdyYXBwZXJcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9jb250aW5vdXMgaXRlbXMvL1xyXG5cclxuICAgICAgICBjYWxjUGFpZERhdGEoRGF0YVJvdy5xdWVyeVNlbGVjdG9yKFwiZGl2LkpLLXdyYXBwZXJcIikpO1xyXG5cclxuICAgICAgICAvL2ZpbmlzaGVyc1xyXG4gICAgICAgIEhKS1Jlb3JkZXIoRGF0YVJvdyk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5vYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHsgc3VidHJlZTogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlLCBhdHRyaWJ1dGVzOiB0cnVlIH0pO1xyXG5cclxuLy9ISksgcmVvcmRlclxyXG5jb25zdCBISktSZW9yZGVyID0gKHBhcmVudCkgPT4ge1xyXG4gICAgaWYgKHBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJISktcIikpIHJldHVybjtcclxuXHJcbiAgICAvL0hpamFjayBjc3MvL1xyXG4gICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoXCJISktcIik7XHJcblxyXG4gICAgLy9yZW9yZGVyXHJcbiAgICBjb25zdCBjb250YWluZXIgPSBwYXJlbnQ7XHJcbiAgICBjb25zdCBjaGlsZHJlbiA9IEFycmF5LmZyb20oY29udGFpbmVyLmNoaWxkcmVuKTtcclxuXHJcbiAgICBjb25zdCByZW9yZGVyID0gY2hpbGRyZW5bMl07XHJcbiAgICBjb25zdCB0YXJnZXQgPSBjaGlsZHJlblsxXTsgLy8gVGhlIHNlY29uZCBlbGVtZW50ICh5b3Ugd2FudCB0byBpbnNlcnQgYmVmb3JlIHRoaXMpXHJcblxyXG4gICAgaWYgKHJlb3JkZXIgJiYgdGFyZ2V0KSB7XHJcbiAgICAgICAgY29udGFpbmVyLmluc2VydEJlZm9yZShyZW9yZGVyLCB0YXJnZXQpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLy9tYWluIGRpdlxyXG5jb25zdCBhZGRIdWJEaXYgPSAocGFyZW50KSA9PiB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZGl2LmNsYXNzTmFtZSA9IFwiSkstd3JhcHBlciBKS1wiO1xyXG5cclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChkaXYpO1xyXG59O1xyXG5cclxuY29uc3QgYWRkUmVvcmRlckJ1dHRvbiA9IChwYXJlbnQpID0+IHtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgYnV0dG9uLmNsYXNzTmFtZSA9IFwicmVvcmRlci1idXR0b24gSksgYnV0dG9uXCI7XHJcbiAgICBidXR0b24uaW5uZXJUZXh0ID0gXCJSZW9yZGVyXCI7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcclxuICAgICAgICByZW9yZGVyQnlEYXRlTmV3T2xkKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxufTtcclxuXHJcbmNvbnN0IHJlb3JkZXJCeURhdGVOZXdPbGQgPSAoKSA9PiB7XHJcbiAgICBsZXQgdGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsLXRhYmxlX19ib2R5IHRib2R5XCIpO1xyXG4gICAgbGV0IHJvd3MgPSBBcnJheS5mcm9tKHRib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0ci5lbC10YWJsZV9fcm93XCIpKTtcclxuXHJcbiAgICByb3dzLnNvcnQoKHJvd0EsIHJvd0IpID0+IHtcclxuICAgICAgICBsZXQgZGF0ZUEgPSBnZXREYXRlRnJvbVJvdyhyb3dBKTtcclxuICAgICAgICBsZXQgZGF0ZUIgPSBnZXREYXRlRnJvbVJvdyhyb3dCKTtcclxuICAgICAgICByZXR1cm4gZGF0ZUIgLSBkYXRlQTsgLy8gQXNjZW5kaW5nIG9yZGVyXHJcbiAgICB9KTtcclxuXHJcbiAgICByb3dzLmZvckVhY2goKHJvdykgPT4gdGJvZHkuYXBwZW5kQ2hpbGQocm93KSk7IC8vIFJlb3JkZXIgcm93cyBpbiB0YWJsZVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldERhdGVGcm9tUm93KHJvdykge1xyXG4gICAgICAgIGxldCBzdHJvbmdFbGVtZW50ID0gcm93LnF1ZXJ5U2VsZWN0b3IoXCJ0ZCAuY2VsbCBwIHN0cm9uZ1wiKTtcclxuICAgICAgICBpZiAoIXN0cm9uZ0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkRhdGUgbm90IGZvdW5kIGluIHJvdzpcIiwgcm93KTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKDApOyAvLyBEZWZhdWx0IGRhdGUgdG8gcHJldmVudCBlcnJvcnNcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBkYXRlVGV4dCA9IHN0cm9uZ0VsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKTtcclxuXHJcbiAgICAgICAgLy8gUmVtb3ZlIGRheSBhYmJyZXZpYXRpb25zIChtYSwgZGksIHdvLCBkbywgdnIsIHphLCB6bylcclxuICAgICAgICBkYXRlVGV4dCA9IGRhdGVUZXh0LnJlcGxhY2UoL1xcYihtYXxkaXx3b3xkb3x2cnx6YXx6bylcXGIvZ2ksIFwiXCIpLnRyaW0oKTtcclxuXHJcbiAgICAgICAgLy8gQ29udmVydCBkYXRlIHN0cmluZyB0byBhIHZhbGlkIERhdGUgb2JqZWN0XHJcbiAgICAgICAgbGV0IHBhcnNlZERhdGUgPSBwYXJzZURhdGUoZGF0ZVRleHQpO1xyXG4gICAgICAgIGlmIChpc05hTihwYXJzZWREYXRlLmdldFRpbWUoKSkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgZGF0ZSBmb3JtYXQ6XCIsIGRhdGVUZXh0KTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHBhcnNlZERhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGFyc2VEYXRlKGRhdGVTdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBtb250aHMgPSB7XHJcbiAgICAgICAgICAgIGphbjogMCxcclxuICAgICAgICAgICAgZmViOiAxLFxyXG4gICAgICAgICAgICBtcnQ6IDIsXHJcbiAgICAgICAgICAgIGFwcjogMyxcclxuICAgICAgICAgICAgbWVpOiA0LFxyXG4gICAgICAgICAgICBqdW46IDUsXHJcbiAgICAgICAgICAgIGp1bDogNixcclxuICAgICAgICAgICAgYXVnOiA3LFxyXG4gICAgICAgICAgICBzZXA6IDgsXHJcbiAgICAgICAgICAgIG9rdDogOSxcclxuICAgICAgICAgICAgbm92OiAxMCxcclxuICAgICAgICAgICAgZGVjOiAxMSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGxldCBwYXJ0cyA9IGRhdGVTdHJpbmcudG9Mb3dlckNhc2UoKS5tYXRjaCgvKFxcZHsxLDJ9KVxccyhbYS16XXszfSlcXHMoXFxkezR9KS8pO1xyXG4gICAgICAgIGlmICghcGFydHMgfHwgIW1vbnRocy5oYXNPd25Qcm9wZXJ0eShwYXJ0c1syXSkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgZGF0ZSBmb3JtYXQ6XCIsIGRhdGVTdHJpbmcpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShwYXJ0c1szXSwgbW9udGhzW3BhcnRzWzJdXSwgcGFydHNbMV0pO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLy9wYWlkIGRhdGFcclxuY29uc3QgY2FsY1BhaWREYXRhID0gKHBhcmVudCkgPT4ge1xyXG4gICAgbGV0IHRib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbC10YWJsZV9fYm9keSB0Ym9keVwiKTtcclxuICAgIGxldCByb3dzID0gQXJyYXkuZnJvbSh0Ym9keS5xdWVyeVNlbGVjdG9yQWxsKFwidHIuZWwtdGFibGVfX3Jvd1wiKSk7XHJcblxyXG4gICAgaWYgKCFBcnJheS5mcm9tKHJvd3NbMF0uY2hpbGRyZW4pWzddKSByZXR1cm47XHJcblxyXG4gICAgbGV0IHVpdGJldGFhbGQgPSAwO1xyXG5cclxuICAgIHJvd3MuZm9yRWFjaCgocm93KSA9PiB7XHJcbiAgICAgICAgbGV0IGlzUGFpZCA9IEFycmF5LmZyb20ocm93LmNoaWxkcmVuKTtcclxuXHJcbiAgICAgICAgaWYgKGlzUGFpZFs3XS50ZXh0Q29udGVudCA9PSBcIk5lZVwiKSB7XHJcbiAgICAgICAgICAgIGxldCBhbW91bnQgPSBpc1BhaWRbNF0udGV4dENvbnRlbnQucmVwbGFjZShcIuKCrFwiLCBcIlwiKS5yZXBsYWNlKFwiLFwiLCBcIi5cIik7XHJcblxyXG4gICAgICAgICAgICB1aXRiZXRhYWxkICs9IE51bWJlcihhbW91bnQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChwYXJlbnQucXVlcnlTZWxlY3RvcihcImFcIikuaW5uZXJUZXh0LnJlcGxhY2UoXCLigqxcIiwgXCJcIikucmVwbGFjZShcIiBcIiwgXCJcIikgPT0gXCJsb2FkaW5nLi4uXCIpIHtcclxuICAgICAgICBwYXJlbnQucXVlcnlTZWxlY3RvcihcImFcIikuaW5uZXJUZXh0ID0gYCDigqwgJHt1aXRiZXRhYWxkLnRvRml4ZWQoMikucmVwbGFjZShcIi5cIiwgXCIsXCIpfWA7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIHBhcmVudC5xdWVyeVNlbGVjdG9yKFwiYVwiKS5pbm5lclRleHQucmVwbGFjZShcIuKCrFwiLCBcIlwiKS5yZXBsYWNlKFwiIFwiLCBcIlwiKSAhPVxyXG4gICAgICAgIHVpdGJldGFhbGQudG9GaXhlZCgyKS5yZXBsYWNlKFwiLlwiLCBcIixcIilcclxuICAgICkge1xyXG4gICAgICAgIHBhcmVudC5xdWVyeVNlbGVjdG9yKFwiYVwiKS5pbm5lclRleHQgPSBgIOKCrCAke3VpdGJldGFhbGQudG9GaXhlZCgyKS5yZXBsYWNlKFwiLlwiLCBcIixcIil9YDtcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IGFkZFBhaWREYXRhID0gKHBhcmVudCkgPT4ge1xyXG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB3cmFwcGVyLmNsYXNzTmFtZSA9IFwicGFpZERhdGEtd3JhcHBlciBKS1wiO1xyXG5cclxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHRleHQuaW5uZXJUZXh0ID0gXCJOb2cgbmlldCBiZXRhYWxkOiBcIjtcclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQodGV4dCk7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgZGF0YS5pbm5lclRleHQgPSBcImxvYWRpbmcuLi5cIjtcclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZGF0YSk7XHJcblxyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsInIiLCJ0IiwiZSIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJTeW1ib2wiLCJpIiwiaXRlcmF0b3IiLCJhIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImMiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiaCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImFyZyIsImRlbGVnYXRlIiwiZCIsImYiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsInMiLCJ0eXBlIiwiQ29udGV4dCIsImNhbGwiLCJ3cmFwIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsImwiLCJwIiwiZ2V0UHJvdG90eXBlT2YiLCJ5IiwieCIsInYiLCJnIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsIlR5cGVFcnJvciIsIm5leHQiLCJ3IiwidHJ5RW50cmllcyIsInB1c2giLCJtIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInVuc2hpZnQiLCJwb3AiLCJ2YWx1ZXMiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIm9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIkFycmF5IiwiZnJvbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIkRhdGFSb3ciLCJxdWVyeVNlbGVjdG9yIiwiYWRkSHViRGl2IiwiYWRkUGFpZERhdGEiLCJhZGRSZW9yZGVyQnV0dG9uIiwiY2FsY1BhaWREYXRhIiwiSEpLUmVvcmRlciIsIm9ic2VydmUiLCJib2R5Iiwic3VidHJlZSIsImNoaWxkTGlzdCIsImF0dHJpYnV0ZXMiLCJwYXJlbnQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImFkZCIsImNvbnRhaW5lciIsImNoaWxkcmVuIiwicmVvcmRlciIsInRhcmdldCIsImluc2VydEJlZm9yZSIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsImJ1dHRvbiIsImlubmVyVGV4dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfY2FsbGVlIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInJlb3JkZXJCeURhdGVOZXdPbGQiLCJ0Ym9keSIsInJvd3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwic29ydCIsInJvd0EiLCJyb3dCIiwiZGF0ZUEiLCJnZXREYXRlRnJvbVJvdyIsImRhdGVCIiwicm93Iiwic3Ryb25nRWxlbWVudCIsImNvbnNvbGUiLCJlcnJvciIsIkRhdGUiLCJkYXRlVGV4dCIsInRyaW0iLCJyZXBsYWNlIiwicGFyc2VkRGF0ZSIsInBhcnNlRGF0ZSIsImdldFRpbWUiLCJkYXRlU3RyaW5nIiwibW9udGhzIiwiamFuIiwiZmViIiwibXJ0IiwiYXByIiwibWVpIiwianVuIiwianVsIiwiYXVnIiwic2VwIiwib2t0Iiwibm92IiwiZGVjIiwicGFydHMiLCJ0b0xvd2VyQ2FzZSIsIm1hdGNoIiwidWl0YmV0YWFsZCIsImlzUGFpZCIsInRleHRDb250ZW50IiwiYW1vdW50IiwiTnVtYmVyIiwiY29uY2F0IiwidG9GaXhlZCIsIndyYXBwZXIiLCJ0ZXh0IiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=