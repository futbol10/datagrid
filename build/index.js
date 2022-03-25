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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@google/dscc/lib/index.js":
/*!************************************************!*\
  !*** ./node_modules/@google/dscc/lib/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nfunction __export(m) {\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n}\nObject.defineProperty(exports, \"__esModule\", { value: true });\n/*!\n  @license\n  Copyright 2019 Google LLC\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n  https://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n*/\nvar types_1 = __webpack_require__(/*! ./types */ \"./node_modules/@google/dscc/lib/types.js\");\n// Make all exported types available to external users.\n__export(__webpack_require__(/*! ./types */ \"./node_modules/@google/dscc/lib/types.js\"));\n/**\n * Returns the width (in pixels) of the vis's iframe.\n *\n * Usage:\n * ```\n * var myWidth = dscc.getWidth();\n * console.log('My width is: ', myWidth);\n * ```\n */\nexports.getWidth = function () { return document.body.clientWidth; };\n/**\n * Returns the height (in pixels) of the vis's iframe.\n *\n * Usage:\n * ```\n * var myHeight = dscc.getHeight();\n * console.log('My height is: ', myHeight);\n * ```\n */\nexports.getHeight = function () { return document.documentElement.clientHeight; };\n/**\n * Returns the componentId of the vis. Component ids uniquely identify a vis to\n * Data Studio.\n *\n * Usage:\n * ```\n * var myComponentId = dscc.getComponentId();\n * console.log('My componentId is: ', myComponentId);\n * ```\n */\nexports.getComponentId = function () {\n    var params = new URLSearchParams(window.location.search);\n    if (params.get('dscId') !== null) {\n        return params.get('dscId');\n    }\n    else {\n        throw new Error('dscId must be in the query parameters. ' +\n            'This is a bug in ds-component, please file a bug: ' +\n            'https://github.com/googledatastudio/ds-component/issues/new');\n    }\n};\n/**\n * Returns the fields indexed by their Data Studio id.\n */\nvar fieldsById = function (message) {\n    return message.fields.reduce(function (acc, field) {\n        acc[field.id] = field;\n        return acc;\n    }, {});\n};\n/**\n * Zips two arrays together into a new array. Uses the length of the shortest\n * array.\n *\n * Usage:\n * ```\n * const a = [1, 2, 3];\n * const b = ['a', 'b', 'c', 'd'];\n * const zipped = zip2(a, b);\n * expect(zipped).toEqual([[1, 'a'], [2, 'b'], [3, 'c']]);\n * ```\n */\nvar zip2 = function (t, u) {\n    if (t.length < u.length) {\n        return t.map(function (tEntry, idx) { return [tEntry, u[idx]]; });\n    }\n    else {\n        return u.map(function (uEntry, idx) { return [t[idx], uEntry]; });\n    }\n};\n// `.sort` isn't stable, but if you compare items, and when they are equal use\n// the original index, it is then stable.\nvar stableSort = function (arr, compare) {\n    return arr\n        .map(function (item, index) { return ({ item: item, index: index }); })\n        .sort(function (a, b) { return compare(a.item, b.item) || a.index - b.index; })\n        .map(function (_a) {\n        var item = _a.item;\n        return item;\n    });\n};\nvar dimensionOrMetric = function (cde) {\n    return cde.type === types_1.ConfigDataElementType.DIMENSION ||\n        cde.type === types_1.ConfigDataElementType.METRIC;\n};\nvar toNum = function (cdet) {\n    return cdet === types_1.ConfigDataElementType.DIMENSION ? -1 : 1;\n};\nvar flattenConfigIds = function (message) {\n    var dimnsAndMets = [];\n    message.config.data.forEach(function (configData) {\n        configData.elements\n            .filter(dimensionOrMetric)\n            .forEach(function (configDataElement) {\n            dimnsAndMets.push(configDataElement);\n        });\n    });\n    var sorted = stableSort(dimnsAndMets, function (a, b) { return toNum(a.type) - toNum(b.type); });\n    var configIds = [];\n    sorted.forEach(function (configDataElement) {\n        configDataElement.value.forEach(function () { return configIds.push(configDataElement.id); });\n    });\n    return configIds;\n};\n/**\n * Joins a single table row with the matching `ConfigId`\n */\nvar joinObjectRow = function (configIds) { return function (row) {\n    var objectRow = {};\n    zip2(row, configIds).forEach(function (_a) {\n        var rowVal = _a[0], configId = _a[1];\n        if (objectRow[configId] === undefined) {\n            objectRow[configId] = [];\n        }\n        objectRow[configId].push(rowVal);\n    }, {});\n    return objectRow;\n}; };\n/**\n * Formats tables into the `ObjectTables` format.\n */\nvar objectFormatTable = function (message) {\n    var _a;\n    var configIds = flattenConfigIds(message);\n    var objectTables = (_a = {}, _a[types_1.TableType.DEFAULT] = [], _a);\n    message.dataResponse.tables.forEach(function (table) {\n        var objectRows = table.rows.map(joinObjectRow(configIds));\n        if (table.id === types_1.TableType.DEFAULT) {\n            objectTables[table.id] = objectRows;\n        }\n        else {\n            var current = objectTables[table.id];\n            if (current === undefined) {\n                objectTables[table.id] = [];\n            }\n            objectTables[table.id] = objectTables[table.id].concat(objectRows);\n        }\n    });\n    return objectTables;\n};\n/**\n * Formats tables into the `Tables` format.\n */\nvar tableFormatTable = function (message) {\n    var _a;\n    var fieldsBy = exports.fieldsByConfigId(message);\n    var configIds = flattenConfigIds(message);\n    var configIdIdx = {};\n    var headers = configIds.map(function (configId) {\n        if (configIdIdx[configId] === undefined) {\n            configIdIdx[configId] = 0;\n        }\n        else {\n            configIdIdx[configId]++;\n        }\n        var idx = configIdIdx[configId];\n        var field = fieldsBy[configId][idx];\n        var heading = __assign(__assign({}, field), { configId: configId });\n        return heading;\n    });\n    var tableTables = (_a = {},\n        _a[types_1.TableType.DEFAULT] = { headers: [], rows: [] },\n        _a);\n    message.dataResponse.tables.forEach(function (table) {\n        tableTables[table.id] = {\n            headers: headers,\n            rows: table.rows,\n        };\n    });\n    return tableTables;\n};\n/**\n * Returns the fields indexed by their config id. Since many fields can be in\n * the same `METRIC`/`DIMENSION` selection, `configId` is mapped to `Field[]`.\n */\nexports.fieldsByConfigId = function (message) {\n    var fieldsByDSId = fieldsById(message);\n    var fieldsBy = {};\n    message.config.data.forEach(function (configData) {\n        configData.elements\n            .filter(dimensionOrMetric)\n            .forEach(function (configDataElement) {\n            fieldsBy[configDataElement.id] = configDataElement.value.map(function (dsId) { return fieldsByDSId[dsId]; });\n        });\n    });\n    return fieldsBy;\n};\n/**\n * Flattens the style entries into a single object. `styleId`s should be unique.\n */\nvar flattenStyle = function (message) {\n    var styleById = {};\n    (message.config.style || []).forEach(function (styleEntry) {\n        styleEntry.elements.forEach(function (configStyleElement) {\n            if (styleById[configStyleElement.id] !== undefined) {\n                throw new Error(\"styleIds must be unique. Your styleId: '\" + configStyleElement.id + \"' is used more than once.\");\n            }\n            styleById[configStyleElement.id] = {\n                value: configStyleElement.value,\n                defaultValue: configStyleElement.defaultValue,\n            };\n        });\n    }, {});\n    return styleById;\n};\nvar themeStyle = function (message) {\n    return message.config.themeStyle;\n};\nvar mapInteractionTypes = function (dsInteraction) {\n    switch (dsInteraction) {\n        case types_1.DSInteractionType.FILTER:\n            return types_1.InteractionType.FILTER;\n    }\n};\nvar transformDSInteraction = function (message) {\n    var dsInteractions = message.config.interactions;\n    // TODO - remove once interactions are live.\n    if (dsInteractions === undefined) {\n        return {};\n    }\n    return dsInteractions.reduce(function (acc, dsInteraction) {\n        var interactions = dsInteraction.supportedActions.map(mapInteractionTypes);\n        var value = {\n            type: mapInteractionTypes(dsInteraction.value.type),\n            data: dsInteraction.value.data,\n        };\n        acc[dsInteraction.id] = {\n            value: value,\n            supportedActions: interactions,\n        };\n        return acc;\n    }, {});\n};\n/**\n * Transform for date ranges\n */\nvar toDateRanges = function (message) {\n    var dateRanges = message.dataResponse.dateRanges || [];\n    var output = {};\n    return dateRanges.reduce(function (inProgress, currentDSDateRange) {\n        inProgress[currentDSDateRange.id] = {\n            start: currentDSDateRange.start,\n            end: currentDSDateRange.end,\n        };\n        return inProgress;\n    }, output);\n};\n/* Transform for color maps */\nvar toColorsByDimension = function (message) {\n    var colors = message.dataResponse.colorMap || {};\n    return __assign({}, colors);\n};\n/**\n * The transform to use for data in a Table format. i.e. `[[1, 2, 3], [4, 5, 6]]`\n */\nexports.tableTransform = function (message) { return ({\n    tables: tableFormatTable(message),\n    dateRanges: toDateRanges(message),\n    fields: exports.fieldsByConfigId(message),\n    style: flattenStyle(message),\n    theme: themeStyle(message),\n    interactions: transformDSInteraction(message),\n    colorMap: toColorsByDimension(message),\n}); };\n/**\n * The transform to use for data in an object format. i.e. `[{name: 'john', views: 3}, {name: 'suzie', views: 5}]`\n */\nexports.objectTransform = function (message) { return ({\n    tables: objectFormatTable(message),\n    dateRanges: toDateRanges(message),\n    fields: exports.fieldsByConfigId(message),\n    style: flattenStyle(message),\n    theme: themeStyle(message),\n    interactions: transformDSInteraction(message),\n    colorMap: toColorsByDimension(message),\n}); };\n/**\n * Check if the transform is likely the identity function\n * This is not a supported implementation path\n * Avoid this if at all possible - please use either objectTransform or tableTransform\n */\nvar isProbablyIdentityFunction = function (transform) {\n    var isIdentity = false;\n    if (transform('identity') === 'identity') {\n        isIdentity = true;\n        console.warn(\"This is an unsupported data format. Please use one of the supported transforms:\\n       dscc.objectFormat or dscc.tableFormat.\");\n    }\n    return isIdentity;\n};\nvar isValidTransform = function (transform) {\n    var isValid = false;\n    if (transform === exports.tableTransform ||\n        transform === exports.objectTransform) {\n        isValid = true;\n    }\n    else if (isProbablyIdentityFunction(transform)) {\n        isValid = true;\n    }\n    return isValid;\n};\n/*\n * Subscribes to messages from Data Studio. Calls `cb` for every new\n * [[MessageType.RENDER]] message. Returns a function that will unsubscribe\n * `callback` from further invocations.\n *\n * Usage - tableTransform:\n * ```\n * var unsubscribe = dscc.subscribeToData(function(message) {\n *   console.log(message.tables)\n *   console.log(message.fields)\n *   console.log(message.style)\n * }, {transform: dscc.tableTransform});\n *\n * setTimeout(function() {\n *   unsubscribe();\n * }, 3000)\n * ```\n\n * Usage - objectTransform:\n * ```\n * var unsubscribe = dscc.subscribeToData(function(message) {\n *   console.log(message.tables)\n *   console.log(message.fields)\n *   console.log(message.style)\n * }, {transform: dscc.objectTransform});\n *\n * setTimeout(function() {\n *   unsubscribe();\n * }, 3000)\n * ```\n */\nexports.subscribeToData = function (cb, options) {\n    if (isValidTransform(options.transform)) {\n        var onMessage_1 = function (message) {\n            if (message.data.type === types_1.MessageType.RENDER) {\n                cb(options.transform(message.data));\n            }\n            else {\n                console.error(\"MessageType: \" + message.data.type + \" is not supported by this version of the library.\");\n            }\n        };\n        window.addEventListener('message', onMessage_1);\n        var componentId = exports.getComponentId();\n        // Tell DataStudio that the viz is ready to get events.\n        var vizReadyMessage = {\n            componentId: componentId,\n            type: types_1.ToDSMessageType.VIZ_READY,\n        };\n        window.parent.postMessage(vizReadyMessage, '*');\n        return function () { return window.removeEventListener('message', onMessage_1); };\n    }\n    else {\n        throw new Error(\"Only the built in transform functions are supported.\");\n    }\n};\n/*\n * Does the thing that interactions should do.\n */\nexports.sendInteraction = function (actionId, interaction, data) {\n    var componentId = exports.getComponentId();\n    var interactionMessage = {\n        type: types_1.ToDSMessageType.INTERACTION,\n        id: actionId,\n        data: data,\n        componentId: componentId,\n    };\n    window.parent.postMessage(interactionMessage, '*');\n};\n/*\n * Clears an interaction\n */\nexports.clearInteraction = function (actionId, interaction) {\n    exports.sendInteraction(actionId, interaction, undefined);\n};\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/@google/dscc/lib/index.js?");

/***/ }),

/***/ "./node_modules/@google/dscc/lib/types.js":
/*!************************************************!*\
  !*** ./node_modules/@google/dscc/lib/types.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar ConceptType;\n(function (ConceptType) {\n    ConceptType[\"METRIC\"] = \"METRIC\";\n    ConceptType[\"DIMENSION\"] = \"DIMENSION\";\n})(ConceptType = exports.ConceptType || (exports.ConceptType = {}));\nvar MessageType;\n(function (MessageType) {\n    MessageType[\"RENDER\"] = \"RENDER\";\n})(MessageType = exports.MessageType || (exports.MessageType = {}));\nvar FieldType;\n(function (FieldType) {\n    FieldType[\"YEAR\"] = \"YEAR\";\n    FieldType[\"YEAR_QUARTER\"] = \"YEAR_QUARTER\";\n    FieldType[\"YEAR_MONTH\"] = \"YEAR_MONTH\";\n    FieldType[\"YEAR_WEEK\"] = \"YEAR_WEEK\";\n    FieldType[\"YEAR_MONTH_DAY\"] = \"YEAR_MONTH_DAY\";\n    FieldType[\"YEAR_MONTH_DAY_HOUR\"] = \"YEAR_MONTH_DAY_HOUR\";\n    FieldType[\"QUARTER\"] = \"QUARTER\";\n    FieldType[\"MONTH\"] = \"MONTH\";\n    FieldType[\"WEEK\"] = \"WEEK\";\n    FieldType[\"MONTH_DAY\"] = \"MONTH_DAY\";\n    FieldType[\"DAY_OF_WEEK\"] = \"DAY_OF_WEEK\";\n    FieldType[\"DAY\"] = \"DAY\";\n    FieldType[\"HOUR\"] = \"HOUR\";\n    FieldType[\"MINUTE\"] = \"MINUTE\";\n    FieldType[\"DURATION\"] = \"DURATION\";\n    FieldType[\"COUNTRY\"] = \"COUNTRY\";\n    FieldType[\"COUNTRY_CODE\"] = \"COUNTRY_CODE\";\n    FieldType[\"CONTINENT\"] = \"CONTINENT\";\n    FieldType[\"CONTINENT_CODE\"] = \"CONTINENT_CODE\";\n    FieldType[\"SUB_CONTINENT\"] = \"SUB_CONTINENT\";\n    FieldType[\"SUB_CONTINENT_CODE\"] = \"SUB_CONTINENT_CODE\";\n    FieldType[\"REGION\"] = \"REGION\";\n    FieldType[\"REGION_CODE\"] = \"REGION_CODE\";\n    FieldType[\"CITY\"] = \"CITY\";\n    FieldType[\"CITY_CODE\"] = \"CITY_CODE\";\n    FieldType[\"METRO_CODE\"] = \"METRO_CODE\";\n    FieldType[\"LATITUDE_LONGITUDE\"] = \"LATITUDE_LONGITUDE\";\n    FieldType[\"NUMBER\"] = \"NUMBER\";\n    FieldType[\"PERCENT\"] = \"PERCENT\";\n    FieldType[\"TEXT\"] = \"TEXT\";\n    FieldType[\"BOOLEAN\"] = \"BOOLEAN\";\n    FieldType[\"URL\"] = \"URL\";\n    FieldType[\"IMAGE\"] = \"IMAGE\";\n    FieldType[\"CURRENCY_AED\"] = \"CURRENCY_AED\";\n    FieldType[\"CURRENCY_ALL\"] = \"CURRENCY_ALL\";\n    FieldType[\"CURRENCY_ARS\"] = \"CURRENCY_ARS\";\n    FieldType[\"CURRENCY_AUD\"] = \"CURRENCY_AUD\";\n    FieldType[\"CURRENCY_BDT\"] = \"CURRENCY_BDT\";\n    FieldType[\"CURRENCY_BGN\"] = \"CURRENCY_BGN\";\n    FieldType[\"CURRENCY_BOB\"] = \"CURRENCY_BOB\";\n    FieldType[\"CURRENCY_BRL\"] = \"CURRENCY_BRL\";\n    FieldType[\"CURRENCY_CAD\"] = \"CURRENCY_CAD\";\n    FieldType[\"CURRENCY_CDF\"] = \"CURRENCY_CDF\";\n    FieldType[\"CURRENCY_CHF\"] = \"CURRENCY_CHF\";\n    FieldType[\"CURRENCY_CLP\"] = \"CURRENCY_CLP\";\n    FieldType[\"CURRENCY_CNY\"] = \"CURRENCY_CNY\";\n    FieldType[\"CURRENCY_COP\"] = \"CURRENCY_COP\";\n    FieldType[\"CURRENCY_CRC\"] = \"CURRENCY_CRC\";\n    FieldType[\"CURRENCY_CZK\"] = \"CURRENCY_CZK\";\n    FieldType[\"CURRENCY_DKK\"] = \"CURRENCY_DKK\";\n    FieldType[\"CURRENCY_DOP\"] = \"CURRENCY_DOP\";\n    FieldType[\"CURRENCY_EGP\"] = \"CURRENCY_EGP\";\n    FieldType[\"CURRENCY_ETB\"] = \"CURRENCY_ETB\";\n    FieldType[\"CURRENCY_EUR\"] = \"CURRENCY_EUR\";\n    FieldType[\"CURRENCY_GBP\"] = \"CURRENCY_GBP\";\n    FieldType[\"CURRENCY_HKD\"] = \"CURRENCY_HKD\";\n    FieldType[\"CURRENCY_HRK\"] = \"CURRENCY_HRK\";\n    FieldType[\"CURRENCY_HUF\"] = \"CURRENCY_HUF\";\n    FieldType[\"CURRENCY_IDR\"] = \"CURRENCY_IDR\";\n    FieldType[\"CURRENCY_ILS\"] = \"CURRENCY_ILS\";\n    FieldType[\"CURRENCY_INR\"] = \"CURRENCY_INR\";\n    FieldType[\"CURRENCY_IRR\"] = \"CURRENCY_IRR\";\n    FieldType[\"CURRENCY_ISK\"] = \"CURRENCY_ISK\";\n    FieldType[\"CURRENCY_JMD\"] = \"CURRENCY_JMD\";\n    FieldType[\"CURRENCY_JPY\"] = \"CURRENCY_JPY\";\n    FieldType[\"CURRENCY_KRW\"] = \"CURRENCY_KRW\";\n    FieldType[\"CURRENCY_LKR\"] = \"CURRENCY_LKR\";\n    FieldType[\"CURRENCY_LTL\"] = \"CURRENCY_LTL\";\n    FieldType[\"CURRENCY_MNT\"] = \"CURRENCY_MNT\";\n    FieldType[\"CURRENCY_MVR\"] = \"CURRENCY_MVR\";\n    FieldType[\"CURRENCY_MXN\"] = \"CURRENCY_MXN\";\n    FieldType[\"CURRENCY_MYR\"] = \"CURRENCY_MYR\";\n    FieldType[\"CURRENCY_NOK\"] = \"CURRENCY_NOK\";\n    FieldType[\"CURRENCY_NZD\"] = \"CURRENCY_NZD\";\n    FieldType[\"CURRENCY_PAB\"] = \"CURRENCY_PAB\";\n    FieldType[\"CURRENCY_PEN\"] = \"CURRENCY_PEN\";\n    FieldType[\"CURRENCY_PHP\"] = \"CURRENCY_PHP\";\n    FieldType[\"CURRENCY_PKR\"] = \"CURRENCY_PKR\";\n    FieldType[\"CURRENCY_PLN\"] = \"CURRENCY_PLN\";\n    FieldType[\"CURRENCY_RON\"] = \"CURRENCY_RON\";\n    FieldType[\"CURRENCY_RSD\"] = \"CURRENCY_RSD\";\n    FieldType[\"CURRENCY_RUB\"] = \"CURRENCY_RUB\";\n    FieldType[\"CURRENCY_SAR\"] = \"CURRENCY_SAR\";\n    FieldType[\"CURRENCY_SEK\"] = \"CURRENCY_SEK\";\n    FieldType[\"CURRENCY_SGD\"] = \"CURRENCY_SGD\";\n    FieldType[\"CURRENCY_THB\"] = \"CURRENCY_THB\";\n    FieldType[\"CURRENCY_TRY\"] = \"CURRENCY_TRY\";\n    FieldType[\"CURRENCY_TWD\"] = \"CURRENCY_TWD\";\n    FieldType[\"CURRENCY_TZS\"] = \"CURRENCY_TZS\";\n    FieldType[\"CURRENCY_UAH\"] = \"CURRENCY_UAH\";\n    FieldType[\"CURRENCY_USD\"] = \"CURRENCY_USD\";\n    FieldType[\"CURRENCY_UYU\"] = \"CURRENCY_UYU\";\n    FieldType[\"CURRENCY_VEF\"] = \"CURRENCY_VEF\";\n    FieldType[\"CURRENCY_VND\"] = \"CURRENCY_VND\";\n    FieldType[\"CURRENCY_YER\"] = \"CURRENCY_YER\";\n    FieldType[\"CURRENCY_ZAR\"] = \"CURRENCY_ZAR\";\n})(FieldType = exports.FieldType || (exports.FieldType = {}));\nvar TableType;\n(function (TableType) {\n    TableType[\"DEFAULT\"] = \"DEFAULT\";\n    TableType[\"COMPARISON\"] = \"COMPARISON\";\n    TableType[\"SUMMARY\"] = \"SUMMARY\";\n})(TableType = exports.TableType || (exports.TableType = {}));\nvar DateRangeType;\n(function (DateRangeType) {\n    DateRangeType[\"DEFAULT\"] = \"DEFAULT\";\n    DateRangeType[\"COMPARISON\"] = \"COMPARISON\";\n})(DateRangeType = exports.DateRangeType || (exports.DateRangeType = {}));\nvar ConfigDataElementType;\n(function (ConfigDataElementType) {\n    /**\n     * Renders a metric field element.\n     */\n    ConfigDataElementType[\"METRIC\"] = \"METRIC\";\n    /**\n     * Renders a dimension field element.\n     */\n    ConfigDataElementType[\"DIMENSION\"] = \"DIMENSION\";\n    /**\n     * Renders a dropdown that affects the maximum number of results returned.\n     */\n    ConfigDataElementType[\"MAX_RESULTS\"] = \"MAX_RESULTS\";\n})(ConfigDataElementType = exports.ConfigDataElementType || (exports.ConfigDataElementType = {}));\nvar ConfigStyleElementType;\n(function (ConfigStyleElementType) {\n    /**\n     * Renders a text input box.\n     */\n    ConfigStyleElementType[\"TEXTINPUT\"] = \"TEXTINPUT\";\n    /**\n     * A single select dropdown.\n     */\n    ConfigStyleElementType[\"SELECT_SINGLE\"] = \"SELECT_SINGLE\";\n    /**\n     * Renders a checkbox.\n     *\n     * Default value: `false`\n     */\n    ConfigStyleElementType[\"CHECKBOX\"] = \"CHECKBOX\";\n    /**\n     * Renders the font color selector.\n     *\n     * Acceptable default values: HEX color value. E.g. `\"#888888\"`.\n     *\n     * Default value: `\"#000\"`.\n     */\n    ConfigStyleElementType[\"FONT_COLOR\"] = \"FONT_COLOR\";\n    /**\n     * Renders the font size selector.\n     *\n     * Default value: `\"14px\"`.\n     */\n    ConfigStyleElementType[\"FONT_SIZE\"] = \"FONT_SIZE\";\n    /**\n     * Renders the font family selector.\n     *\n     * Default value: `\"\"`\n     */\n    ConfigStyleElementType[\"FONT_FAMILY\"] = \"FONT_FAMILY\";\n    /**\n     * Renders a fill color selector.\n     *\n     * Acceptable default values: HEX color value.\n     */\n    ConfigStyleElementType[\"FILL_COLOR\"] = \"FILL_COLOR\";\n    /**\n     * Renders a border color selector.\n     *\n     * Acceptable default values: HEX color value.\n     */\n    ConfigStyleElementType[\"BORDER_COLOR\"] = \"BORDER_COLOR\";\n    /**\n     * Renders an axis color selector.\n     *\n     * Acceptable default values: HEX color value.\n     */\n    ConfigStyleElementType[\"AXIS_COLOR\"] = \"AXIS_COLOR\";\n    /**\n     * Renders a grid color selector.\n     *\n     * Acceptable default values: HEX color value.\n     */\n    ConfigStyleElementType[\"GRID_COLOR\"] = \"GRID_COLOR\";\n    /**\n     * Renders an opacity selector.\n     */\n    ConfigStyleElementType[\"OPACITY\"] = \"OPACITY\";\n    /**\n     * Renders a line weight picker.\n     */\n    ConfigStyleElementType[\"LINE_WEIGHT\"] = \"LINE_WEIGHT\";\n    /**\n     * Renders a line style picker.\n     *\n     * Acceptable default values: `\"solid\"`, `\"dashed\"`, `\"dotted\"`, or `\"double\"`.\n     */\n    ConfigStyleElementType[\"LINE_STYLE\"] = \"LINE_STYLE\";\n    /**\n     * Renders a border radius selector.\n     */\n    ConfigStyleElementType[\"BORDER_RADIUS\"] = \"BORDER_RADIUS\";\n    /**\n     * Renders an interval selector.\n     */\n    ConfigStyleElementType[\"INTERVAL\"] = \"INTERVAL\";\n    /**\n     * Renders a radio select with pre-defined values.\n     */\n    ConfigStyleElementType[\"SELECT_RADIO\"] = \"SELECT_RADIO\";\n})(ConfigStyleElementType = exports.ConfigStyleElementType || (exports.ConfigStyleElementType = {}));\nvar DSInteractionType;\n(function (DSInteractionType) {\n    DSInteractionType[\"FILTER\"] = \"FILTER\";\n})(DSInteractionType = exports.DSInteractionType || (exports.DSInteractionType = {}));\nvar ToDSMessageType;\n(function (ToDSMessageType) {\n    ToDSMessageType[\"VIZ_READY\"] = \"vizReady\";\n    ToDSMessageType[\"INTERACTION\"] = \"vizAction\";\n})(ToDSMessageType = exports.ToDSMessageType || (exports.ToDSMessageType = {}));\nvar InteractionType;\n(function (InteractionType) {\n    InteractionType[\"FILTER\"] = \"FILTER\";\n})(InteractionType = exports.InteractionType || (exports.InteractionType = {}));\n//# sourceMappingURL=types.js.map\n\n//# sourceURL=webpack:///./node_modules/@google/dscc/lib/types.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: LOCAL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOCAL\", function() { return LOCAL; });\nconst dscc = __webpack_require__(/*! @google/dscc */ \"./node_modules/@google/dscc/lib/index.js\");\nconst local = __webpack_require__(/*! ./localMessage.js */ \"./src/localMessage.js\");\n\n// change this to 'true' for local development\n// change this to 'false' before deploying\nconst LOCAL = false;\n\n// create a title element\nvar titleElement = document.createElement(\"div\");\ntitleElement.id = \"myVizTitle\";\ndocument.body.appendChild(titleElement);\n\n// write viz code here\nconst drawViz = (data) => {\n  let rowData = data.tables.DEFAULT;\n  let fields = data.fields;\n  // const allFields = fields.dimID.concat(fields.metricID);\n\n  // set margins + canvas size\n  const margin = { top: 10, bottom: 50, right: 10, left: 10 };\n  const height = dscc.getHeight() - margin.top - margin.bottom;\n  const width = dscc.getWidth() - margin.left - margin.right;\n\n  // remove the svg if it already exists\n  if (document.querySelector(\"svg\")) {\n    let oldSvg = document.querySelector(\"svg\");\n    oldSvg.parentNode.removeChild(oldSvg);\n  }\n\n  let dimensions = [];\n\n  fields[\"dimID\"].forEach(function (row, i) {\n    dimensions.push(row[\"name\"]);\n  });\n\n  let measures = [];\n  fields[\"metricID\"].forEach(function (row, i) {\n    measures.push(row[\"name\"]);\n  });\n\n  let div = document.createElement(\"div\");\n  let text = document.createTextNode(dimensions.concat(measures));\n  div.appendChild(text);\n  document.body.appendChild(div);\n\n  rowData.forEach(function (row) {\n    let div = document.createElement(\"div\");\n    let text = document.createTextNode(row[\"dimID\"] + \",\" + row[\"metricID\"]);\n    div.appendChild(text);\n    document.body.appendChild(div);\n  });\n};\n\n// renders locally\nif (LOCAL) {\n  drawViz(local.message);\n} else {\n  dscc.subscribeToData(drawViz, { transform: dscc.objectTransform });\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/localMessage.js":
/*!*****************************!*\
  !*** ./src/localMessage.js ***!
  \*****************************/
/*! exports provided: message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"message\", function() { return message; });\n/**\n * This file provides the mock \"data\" received\n * by your visualization code when you develop\n * locally.\n *\n */\nconst message = {\n  tables: {\n    DEFAULT: [\n      {\n        dimID: [\"25-54\"],\n        metricID: [128863172],\n      },\n      {\n        dimID: [\"0-14\"],\n        metricID: [61175933],\n      },\n      {\n        dimID: [\"65+\"],\n        metricID: [51055052],\n      },\n      {\n        dimID: [\"15-24\"],\n        metricID: [43351778],\n      },\n      {\n        dimID: [\"55-64\"],\n        metricID: [42179856],\n      },\n    ],\n  },\n  fields: {\n    dimID: [\n      {\n        id: \"qt_nzqx6a0xvb\",\n        name: \"Age Group\",\n        type: \"TEXT\",\n        concept: \"DIMENSION\",\n      },\n    ],\n    metricID: [\n      {\n        id: \"qt_8isx6a0xvb\",\n        name: \"Population\",\n        type: \"NUMBER\",\n        concept: \"METRIC\",\n      },\n    ],\n  },\n  style: {},\n};\n\n\n//# sourceURL=webpack:///./src/localMessage.js?");

/***/ })

/******/ });