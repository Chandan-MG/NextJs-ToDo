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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _todo_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-card */ "./pages/todo-card/index.js");
/* harmony import */ var react_icons_rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/rx */ "react-icons/rx");
/* harmony import */ var react_icons_rx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_rx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-list */ "./pages/todo-list/index.js");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.module.css */ "./pages/index.module.css");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "D:\\chandan\\Sharpener projects\\NextJS\\todo\\01-starting-project\\pages\\index.js";






function HomePage({
  todoList
}) {
  const {
    0: add,
    1: setAdd
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const addButtonHandler = () => {
    setAdd(!add);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        marginLeft: "220px",
        marginTop: "20px"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.list,
        children: todoList.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_todo_list__WEBPACK_IMPORTED_MODULE_4__["default"], {
          id: item._id,
          name: item.name
        }, item._id, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        marginLeft: "250px",
        marginTop: "20px"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_rx__WEBPACK_IMPORTED_MODULE_3__["RxFilePlus"], {
        color: "red",
        style: {
          width: "30px",
          height: "30px"
        },
        onClick: addButtonHandler
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this), add && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "10px"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_todo_card__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

async function getStaticProps() {
  try {
    const response = await fetch(`https://crudcrud.com/api/4307f38ee7274e5fa30e6ef92ac1d952/todo-input`);

    if (response.ok) {
      const todoList = await response.json();
      return {
        props: {
          todoList
        }
      };
    } else {
      console.error("Failed to fetch data:", response.status);
      return {
        props: {
          todoList: []
        }
      };
    }
  } catch (error) {
    console.error("Error fetching:", error);
    return {
      props: {
        todoList: []
      }
    };
  }
}
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./pages/index.module.css":
/*!********************************!*\
  !*** ./pages/index.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"list": "index_list__j6-WF"
};


/***/ }),

/***/ "./pages/todo-card/index.js":
/*!**********************************!*\
  !*** ./pages/todo-card/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _todo_card_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-card.module.css */ "./pages/todo-card/todo-card.module.css");
/* harmony import */ var _todo_card_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_todo_card_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\chandan\\Sharpener projects\\NextJS\\todo\\01-starting-project\\pages\\todo-card\\index.js";



function TodoCard() {
  const {
    0: newTodo,
    1: setNewTodo
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: todoList,
    1: setTodoList
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const nameInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  async function submitHandler(event) {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const todoData = {
      name: enteredName
    }; // const response = await fetch('/api/todo-input',{
    //     method: 'POST',
    //     body: JSON.stringify(todoData),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // });

    const response = await fetch(`https://crudcrud.com/api/4307f38ee7274e5fa30e6ef92ac1d952/todo-input`, {
      method: "POST",
      body: JSON.stringify(todoData),
      headers: {
        "Content-Type": "application/json"
      }
    }); // const data = await response.json();

    if (response.ok) {
      alert('added succesfully..');
    }

    nameInputRef.current.value = ''; // props.onAddMeetup(meetupData);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _todo_card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          className: _todo_card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.form,
          onSubmit: submitHandler,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _todo_card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.control,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              required: true,
              id: "name",
              ref: nameInputRef,
              placeholder: "Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _todo_card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.actions,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              type: "submit",
              children: "Add"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (TodoCard);

/***/ }),

/***/ "./pages/todo-card/todo-card.module.css":
/*!**********************************************!*\
  !*** ./pages/todo-card/todo-card.module.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"card": "todo-card_card__1wnAU",
	"form": "todo-card_form__23FsD",
	"control": "todo-card_control__r5Xxy",
	"actions": "todo-card_actions__1Snvz"
};


/***/ }),

/***/ "./pages/todo-list/index.js":
/*!**********************************!*\
  !*** ./pages/todo-list/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _todo_list_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-list.module.css */ "./pages/todo-list/todo-list.module.css");
/* harmony import */ var _todo_list_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_todo_list_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/rx */ "react-icons/rx");
/* harmony import */ var react_icons_rx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_rx__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\chandan\\Sharpener projects\\NextJS\\todo\\01-starting-project\\pages\\todo-list\\index.js";




function TodoList(props) {
  const {
    0: isDeleting,
    1: setIsDeleting
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const deleteHandler = async () => {
    setIsDeleting(true);

    try {
      const response = await fetch(`https://crudcrud.com/api/4307f38ee7274e5fa30e6ef92ac1d952/todo-input/${props.id}`, {
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

  const pushToDoneHandler = async () => {
    try {
      const response = await fetch(`https://crudcrud.com/api/4307f38ee7274e5fa30e6ef92ac1d952/todo-done`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: props.id,
          name: props.name
        })
      });

      if (response.ok) {
        console.log('Item moved to "todo-done" folder successfully');
        await deleteHandler();
      } else {
        console.error('Failed to move item to "todo-done" folder:', response.status);
      }
    } catch (error) {
      console.error('Error moving item to "todo-done" folder:', error);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _todo_list_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        padding: '0.5rem'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _todo_list_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.select,
        onClick: pushToDoneHandler
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _todo_list_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.name,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: props.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _todo_list_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.delete,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_rx__WEBPACK_IMPORTED_MODULE_3__["RxTrash"], {
        color: "red",
        style: {
          width: '30px',
          height: '30px'
        },
        onClick: deleteHandler
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 13
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (TodoList);

/***/ }),

/***/ "./pages/todo-list/todo-list.module.css":
/*!**********************************************!*\
  !*** ./pages/todo-list/todo-list.module.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"card": "todo-list_card__30QtW",
	"select": "todo-list_select__3TNI0",
	"name": "todo-list_name__3Np6n",
	"item": "todo-list_item__3Tkkt"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy90b2RvLWNhcmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvdG9kby1jYXJkL3RvZG8tY2FyZC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3BhZ2VzL3RvZG8tbGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy90b2RvLWxpc3QvdG9kby1saXN0Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9yeFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkhvbWVQYWdlIiwidG9kb0xpc3QiLCJhZGQiLCJzZXRBZGQiLCJ1c2VTdGF0ZSIsImFkZEJ1dHRvbkhhbmRsZXIiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luTGVmdCIsIm1hcmdpblRvcCIsImNsYXNzZXMiLCJsaXN0IiwibWFwIiwiaXRlbSIsIl9pZCIsIm5hbWUiLCJ3aWR0aCIsImhlaWdodCIsImdldFN0YXRpY1Byb3BzIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwianNvbiIsInByb3BzIiwiY29uc29sZSIsImVycm9yIiwic3RhdHVzIiwiVG9kb0NhcmQiLCJuZXdUb2RvIiwic2V0TmV3VG9kbyIsInNldFRvZG9MaXN0IiwibmFtZUlucHV0UmVmIiwidXNlUmVmIiwic3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlbnRlcmVkTmFtZSIsImN1cnJlbnQiLCJ2YWx1ZSIsInRvZG9EYXRhIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwiYWxlcnQiLCJmbGV4RGlyZWN0aW9uIiwiY2FyZCIsImZvcm0iLCJjb250cm9sIiwiYWN0aW9ucyIsIlRvZG9MaXN0IiwiaXNEZWxldGluZyIsInNldElzRGVsZXRpbmciLCJkZWxldGVIYW5kbGVyIiwiaWQiLCJsb2ciLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsInB1c2hUb0RvbmVIYW5kbGVyIiwicGFkZGluZyIsInNlbGVjdCIsImRlbGV0ZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxDQUFrQjtBQUFFQztBQUFGLENBQWxCLEVBQWdDO0FBQzlCLFFBQU07QUFBQSxPQUFDQyxHQUFEO0FBQUEsT0FBTUM7QUFBTixNQUFnQkMsc0RBQVEsQ0FB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LFdBQUssRUFBRTtBQUFDYyxlQUFPLEVBQUU7QUFBVixPQUFaO0FBQUEsNkJBQ0k7QUFBUSxpQkFBUyxFQUFFbkQsNERBQU8sQ0FBQ29ELE1BQTNCO0FBQW1DLGVBQU8sRUFBRUY7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUlJO0FBQUssZUFBUyxFQUFFbEQsNERBQU8sQ0FBQ0ssSUFBeEI7QUFBQSw2QkFDSTtBQUFBLGtCQUFLUSxLQUFLLENBQUNSO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSixlQU9JO0FBQUssZUFBUyxFQUFFTCw0REFBTyxDQUFDcUQsTUFBeEI7QUFBQSw2QkFDSSxxRUFBQyxzREFBRDtBQUFTLGFBQUssRUFBQyxLQUFmO0FBQXFCLGFBQUssRUFBRTtBQUFDL0MsZUFBSyxFQUFFLE1BQVI7QUFBZ0JDLGdCQUFNLEVBQUU7QUFBeEIsU0FBNUI7QUFBNkQsZUFBTyxFQUFFcUM7QUFBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGUjtBQWVIOztBQUVjSCx1RUFBZixFOzs7Ozs7Ozs7OztBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVG9kb0NhcmQgZnJvbSBcIi4vdG9kby1jYXJkXCI7XG5pbXBvcnQgeyBSeEZpbGVQbHVzIH0gZnJvbSBcInJlYWN0LWljb25zL3J4XCI7XG5pbXBvcnQgVG9kb0xpc3QgZnJvbSBcIi4vdG9kby1saXN0XCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL2luZGV4Lm1vZHVsZS5jc3MnO1xuXG5mdW5jdGlvbiBIb21lUGFnZSh7IHRvZG9MaXN0IH0pIHtcbiAgY29uc3QgW2FkZCwgc2V0QWRkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBhZGRCdXR0b25IYW5kbGVyID0gKCkgPT4ge1xuICAgIHNldEFkZCghYWRkKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIiwgbWFyZ2luTGVmdDogXCIyMjBweFwiLCBtYXJnaW5Ub3A6IFwiMjBweFwiIH19PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9PlxuICAgICAgICAgIHt0b2RvTGlzdC5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgIDxUb2RvTGlzdCBrZXk9e2l0ZW0uX2lkfSBpZD17aXRlbS5faWR9IG5hbWU9e2l0ZW0ubmFtZX0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1zdGFydFwiLCBtYXJnaW5MZWZ0OiBcIjI1MHB4XCIsIG1hcmdpblRvcDogXCIyMHB4XCIgfX0+XG4gICAgICAgIDxSeEZpbGVQbHVzIGNvbG9yPVwicmVkXCIgc3R5bGU9e3sgd2lkdGg6IFwiMzBweFwiLCBoZWlnaHQ6IFwiMzBweFwiIH19IG9uQ2xpY2s9e2FkZEJ1dHRvbkhhbmRsZXJ9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIHthZGQgJiYgKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiwgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fT5cbiAgICAgICAgICA8VG9kb0NhcmQgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2NydWRjcnVkLmNvbS9hcGkvNDMwN2YzOGVlNzI3NGU1ZmEzMGU2ZWY5MmFjMWQ5NTIvdG9kby1pbnB1dGApO1xuICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgY29uc3QgdG9kb0xpc3QgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICByZXR1cm4geyBcbiAgICAgICAgcHJvcHM6IHsgXG4gICAgICAgICAgdG9kb0xpc3QgXG4gICAgICAgIH0gXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGZldGNoIGRhdGE6XCIsIHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgICByZXR1cm4geyBwcm9wczogeyB0b2RvTGlzdDogW10gfSB9O1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmc6XCIsIGVycm9yKTtcbiAgICByZXR1cm4geyBwcm9wczogeyB0b2RvTGlzdDogW10gfSB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibGlzdFwiOiBcImluZGV4X2xpc3RfX2o2LVdGXCJcbn07XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi90b2RvLWNhcmQubW9kdWxlLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBUb2RvQ2FyZCgpIHtcclxuICBjb25zdCBbbmV3VG9kbywgc2V0TmV3VG9kb10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3RvZG9MaXN0LCBzZXRUb2RvTGlzdF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IG5hbWVJbnB1dFJlZiA9IHVzZVJlZigpO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBzdWJtaXRIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IGVudGVyZWROYW1lID0gbmFtZUlucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcblxyXG4gICAgY29uc3QgdG9kb0RhdGEgPSB7XHJcbiAgICAgIG5hbWU6IGVudGVyZWROYW1lLFxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgLy8gY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS90b2RvLWlucHV0Jyx7XHJcbiAgICAvLyAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAvLyAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodG9kb0RhdGEpLFxyXG4gICAgLy8gICAgIGhlYWRlcnM6IHtcclxuICAgIC8vICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0pO1xyXG4gICAgXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cHM6Ly9jcnVkY3J1ZC5jb20vYXBpLzQzMDdmMzhlZTcyNzRlNWZhMzBlNmVmOTJhYzFkOTUyL3RvZG8taW5wdXRgLFxyXG4gICAgICB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0b2RvRGF0YSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIC8vIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICBhbGVydCgnYWRkZWQgc3VjY2VzZnVsbHkuLicpXHJcbiAgICB9XHJcbiAgICBuYW1lSW5wdXRSZWYuY3VycmVudC52YWx1ZSA9ICcnXHJcbiAgICAvLyBwcm9wcy5vbkFkZE1lZXR1cChtZWV0dXBEYXRhKTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCB3aWR0aDonMTAwJScgfX0+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0+XHJcbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0gb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cclxuICAgICAgICAgICAgICB7LyogPGxhYmVsIGh0bWxGb3I9J25hbWUnPlRpdGxlPC9sYWJlbD4gKi99XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHJlcXVpcmVkIGlkPSduYW1lJyByZWY9e25hbWVJbnB1dFJlZn0gcGxhY2Vob2xkZXI9J05hbWUnIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+QWRkPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9kb0NhcmQ7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2FyZFwiOiBcInRvZG8tY2FyZF9jYXJkX18xd25BVVwiLFxuXHRcImZvcm1cIjogXCJ0b2RvLWNhcmRfZm9ybV9fMjNGc0RcIixcblx0XCJjb250cm9sXCI6IFwidG9kby1jYXJkX2NvbnRyb2xfX3I1WHh5XCIsXG5cdFwiYWN0aW9uc1wiOiBcInRvZG8tY2FyZF9hY3Rpb25zX18xU252elwiXG59O1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vdG9kby1saXN0Lm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyBSeFRyYXNoIH0gZnJvbSBcInJlYWN0LWljb25zL3J4XCI7XHJcbiAgXHJcblxyXG5mdW5jdGlvbiBUb2RvTGlzdCAocHJvcHMpe1xyXG4gICAgY29uc3QgW2lzRGVsZXRpbmcsIHNldElzRGVsZXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGRlbGV0ZUhhbmRsZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNEZWxldGluZyh0cnVlKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2NydWRjcnVkLmNvbS9hcGkvNDMwN2YzOGVlNzI3NGU1ZmEzMGU2ZWY5MmFjMWQ5NTIvdG9kby1pbnB1dC8ke3Byb3BzLmlkfWAsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURSdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgZGVsZXRpb24gaXMgc3VjY2Vzc2Z1bCwgeW91IGNhbiBwZXJmb3JtIGFueSBuZWNlc3NhcnkgY2xlYW51cCBvciBVSSB1cGRhdGVzXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnSXRlbSBkZWxldGVkIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICAgICAgICAgICAgLy8gRXhhbXBsZTogUmVmcmVzaGluZyB0aGUgdG9kbyBsaXN0IGFmdGVyIGRlbGV0aW9uXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZGVsZXRlIGl0ZW06JywgcmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGl0ZW06JywgZXJyb3IpO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIHNldElzRGVsZXRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcHVzaFRvRG9uZUhhbmRsZXI9IGFzeW5jKCk9PntcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2NydWRjcnVkLmNvbS9hcGkvNDMwN2YzOGVlNzI3NGU1ZmEzMGU2ZWY5MmFjMWQ5NTIvdG9kby1kb25lYCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaWQ6IHByb3BzLmlkLCBuYW1lOiBwcm9wcy5uYW1lIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJdGVtIG1vdmVkIHRvIFwidG9kby1kb25lXCIgZm9sZGVyIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgZGVsZXRlSGFuZGxlcigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIG1vdmUgaXRlbSB0byBcInRvZG8tZG9uZVwiIGZvbGRlcjonLCByZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbW92aW5nIGl0ZW0gdG8gXCJ0b2RvLWRvbmVcIiBmb2xkZXI6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybihcclxuICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzogJzAuNXJlbSd9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuc2VsZWN0fSBvbkNsaWNrPXtwdXNoVG9Eb25lSGFuZGxlcn0+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz57cHJvcHMubmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZWxldGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSeFRyYXNoIGNvbG9yPVwicmVkXCIgc3R5bGU9e3t3aWR0aDogJzMwcHgnLCBoZWlnaHQ6ICczMHB4J319IG9uQ2xpY2s9e2RlbGV0ZUhhbmRsZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9MaXN0OyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNhcmRcIjogXCJ0b2RvLWxpc3RfY2FyZF9fMzBRdFdcIixcblx0XCJzZWxlY3RcIjogXCJ0b2RvLWxpc3Rfc2VsZWN0X18zVE5JMFwiLFxuXHRcIm5hbWVcIjogXCJ0b2RvLWxpc3RfbmFtZV9fM05wNm5cIixcblx0XCJpdGVtXCI6IFwidG9kby1saXN0X2l0ZW1fXzNUa2t0XCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9yeFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==