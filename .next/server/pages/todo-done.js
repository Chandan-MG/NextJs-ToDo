module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/todo-done/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/todo-done/index.js":
/*!**********************************!*\
  !*** ./pages/todo-done/index.js ***!
  \**********************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _todo_done_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-done.module.css */ "./pages/todo-done/todo-done.module.css");
/* harmony import */ var _todo_done_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_todo_done_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/rx */ "react-icons/rx");
/* harmony import */ var react_icons_rx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_rx__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\chandan\\Sharpener projects\\NextJS\\todo\\01-starting-project\\pages\\todo-done\\index.js";




function TodoDone({
  doneList
}) {
  // const [listItem, setListItem] = useState(DUMMY_ITEM);
  const {
    0: isDeleting,
    1: setIsDeleting
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const deleteHandler = async id => {
    setIsDeleting(true);

    try {
      const response = await fetch(`https://crudcrud.com/api/4307f38ee7274e5fa30e6ef92ac1d952/todo-done/${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        // If deletion is successful, you can perform any necessary cleanup or UI updates
        console.log('Item deleted successfully'); // Example: Refreshing the todo list after deletion

        window.location.reload();
      } else {
        console.error('Failed to delete item:', response.status);
      }
    } catch (error) {
      console.error('Error deleting item:', error);
    } finally {
      setIsDeleting(false);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: doneList.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _todo_done_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _todo_done_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.name,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: item.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _todo_done_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.delete,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_rx__WEBPACK_IMPORTED_MODULE_3__["RxTrash"], {
          color: "red",
          style: {
            width: '30px',
            height: '30px'
          },
          onClick: () => deleteHandler(item._id)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 21
      }, this)]
    }, item._id, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }, this))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 9
  }, this);
}

async function getStaticProps() {
  try {
    const response = await fetch(`https://crudcrud.com/api/4307f38ee7274e5fa30e6ef92ac1d952/todo-done`);

    if (response.ok) {
      const doneList = await response.json();
      return {
        props: {
          doneList
        }
      };
    } else {
      console.error("Failed to fetch data:", response.status);
      return {
        props: {
          doneList: []
        }
      };
    }
  } catch (error) {
    console.error("Error fetching:", error);
    return {
      props: {
        doneList: []
      }
    };
  }
}
/* harmony default export */ __webpack_exports__["default"] = (TodoDone);

/***/ }),

/***/ "./pages/todo-done/todo-done.module.css":
/*!**********************************************!*\
  !*** ./pages/todo-done/todo-done.module.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"card": "todo-done_card__1LAHg",
	"name": "todo-done_name__sED6Y",
	"item": "todo-done_item__3vTne"
};


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/rx":
/*!*********************************!*\
  !*** external "react-icons/rx" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/rx");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvdG9kby1kb25lL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3RvZG8tZG9uZS90b2RvLWRvbmUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL3J4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiVG9kb0RvbmUiLCJkb25lTGlzdCIsImlzRGVsZXRpbmciLCJzZXRJc0RlbGV0aW5nIiwidXNlU3RhdGUiLCJkZWxldGVIYW5kbGVyIiwiaWQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwib2siLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJlcnJvciIsInN0YXR1cyIsIm1hcCIsIml0ZW0iLCJjbGFzc2VzIiwiY2FyZCIsIm5hbWUiLCJkZWxldGUiLCJ3aWR0aCIsImhlaWdodCIsIl9pZCIsImdldFN0YXRpY1Byb3BzIiwianNvbiIsInByb3BzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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QVAsRUFBYztBQUNkTCxXQUFPLENBQUNLLEtBQVIsQ0FBYyxpQkFBZCxFQUFpQ0EsS0FBakM7QUFDQSxXQUFPO0FBQUVhLFdBQUssRUFBRTtBQUFFNUIsZ0JBQVEsRUFBRTtBQUFaO0FBQVQsS0FBUDtBQUNEO0FBQ0o7QUFFY0QsdUVBQWYsRTs7Ozs7Ozs7Ozs7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNMQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy90b2RvLWRvbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3RvZG8tZG9uZS9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL3RvZG8tZG9uZS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgUnhUcmFzaCB9IGZyb20gXCJyZWFjdC1pY29ucy9yeFwiO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBUb2RvRG9uZSh7IGRvbmVMaXN0IH0pe1xyXG4gICAgXHJcbiAgICAvLyBjb25zdCBbbGlzdEl0ZW0sIHNldExpc3RJdGVtXSA9IHVzZVN0YXRlKERVTU1ZX0lURU0pO1xyXG5cclxuICAgIGNvbnN0IFtpc0RlbGV0aW5nLCBzZXRJc0RlbGV0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBkZWxldGVIYW5kbGVyID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICAgICAgc2V0SXNEZWxldGluZyh0cnVlKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2NydWRjcnVkLmNvbS9hcGkvNDMwN2YzOGVlNzI3NGU1ZmEzMGU2ZWY5MmFjMWQ5NTIvdG9kby1kb25lLyR7aWR9YCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiBkZWxldGlvbiBpcyBzdWNjZXNzZnVsLCB5b3UgY2FuIHBlcmZvcm0gYW55IG5lY2Vzc2FyeSBjbGVhbnVwIG9yIFVJIHVwZGF0ZXNcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJdGVtIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgICAgICAgICAgICAvLyBFeGFtcGxlOiBSZWZyZXNoaW5nIHRoZSB0b2RvIGxpc3QgYWZ0ZXIgZGVsZXRpb25cclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBkZWxldGUgaXRlbTonLCByZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZGVsZXRpbmcgaXRlbTonLCBlcnJvcik7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgc2V0SXNEZWxldGluZyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7ZG9uZUxpc3QubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0ga2V5PXtpdGVtLl9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57aXRlbS5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGVsZXRlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJ4VHJhc2ggY29sb3I9XCJyZWRcIiBzdHlsZT17eyB3aWR0aDogJzMwcHgnLCBoZWlnaHQ6ICczMHB4JyB9fSBvbkNsaWNrPXsoKSA9PiBkZWxldGVIYW5kbGVyKGl0ZW0uX2lkKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vY3J1ZGNydWQuY29tL2FwaS80MzA3ZjM4ZWU3Mjc0ZTVmYTMwZTZlZjkyYWMxZDk1Mi90b2RvLWRvbmVgKTtcclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgY29uc3QgZG9uZUxpc3QgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgcmV0dXJuIHsgXHJcbiAgICAgICAgICBwcm9wczogeyBcclxuICAgICAgICAgICAgZG9uZUxpc3QgXHJcbiAgICAgICAgICB9IFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBmZXRjaCBkYXRhOlwiLCByZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICAgIHJldHVybiB7IHByb3BzOiB7IGRvbmVMaXN0OiBbXSB9IH07XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZzpcIiwgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBwcm9wczogeyBkb25lTGlzdDogW10gfSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvRG9uZTsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjYXJkXCI6IFwidG9kby1kb25lX2NhcmRfXzFMQUhnXCIsXG5cdFwibmFtZVwiOiBcInRvZG8tZG9uZV9uYW1lX19zRUQ2WVwiLFxuXHRcIml0ZW1cIjogXCJ0b2RvLWRvbmVfaXRlbV9fM3ZUbmVcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL3J4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9