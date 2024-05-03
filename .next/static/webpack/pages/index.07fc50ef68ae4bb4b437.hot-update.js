webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/todo-card/index.js":
/*!**********************************!*\
  !*** ./pages/todo-card/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _todo_list_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-list.module.css */ "./pages/todo-card/todo-list.module.css");
/* harmony import */ var _todo_list_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_todo_list_module_css__WEBPACK_IMPORTED_MODULE_4__);




var _jsxFileName = "D:\\chandan\\Sharpener projects\\NextJS\\todo\\01-starting-project\\pages\\todo-card\\index.js",
    _s = $RefreshSig$();



var DUMMY_ITEM = [{
  id: 'm1',
  name: 'A first meetup'
}, {
  id: 'm2',
  name: 'A second meetup'
}, {
  id: 'm3',
  name: 'A third meetup'
}];

function TodoCard() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      newTodo = _useState[0],
      setNewTodo = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(DUMMY_ITEM),
      todoList = _useState2[0],
      setTodoList = _useState2[1];

  var nameInputRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();

  function submitHandler(event) {
    event.preventDefault();
    var enteredName = nameInputRef.current.value;
    var todoData = {
      name: enteredName
    };
    alert(todoData.name);
    setTodoList(todoData); // props.onAddMeetup(meetupData);
  }

  var addTodo = /*#__PURE__*/function () {
    var _ref = Object(D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      return D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function addTodo() {
      return _ref.apply(this, arguments);
    };
  }();

  var deleteTodo = /*#__PURE__*/function () {
    var _ref2 = Object(D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(id) {
      return D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function deleteTodo(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        className: _todo_list_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.list,
        children: todoList.map(function (item) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MeetupItem, {
            id: meetup.id,
            image: meetup.image,
            title: meetup.title,
            address: meetup.address
          }, meetup.id, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _todo_list_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.card,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        className: _todo_list_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.form,
        onSubmit: submitHandler,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _todo_list_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.control,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            required: true,
            id: "name",
            ref: nameInputRef,
            placeholder: "Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _todo_list_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.actions,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "submit",
            children: "Add"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, this);
}

_s(TodoCard, "efCkfd6e/wEuprGTGz9UUYY08VA=");

_c = TodoCard;
/* harmony default export */ __webpack_exports__["default"] = (TodoCard);

var _c;

$RefreshReg$(_c, "TodoCard");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG9kby1jYXJkL2luZGV4LmpzIl0sIm5hbWVzIjpbIkRVTU1ZX0lURU0iLCJpZCIsIm5hbWUiLCJUb2RvQ2FyZCIsInVzZVN0YXRlIiwibmV3VG9kbyIsInNldE5ld1RvZG8iLCJ0b2RvTGlzdCIsInNldFRvZG9MaXN0IiwibmFtZUlucHV0UmVmIiwidXNlUmVmIiwic3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlbnRlcmVkTmFtZSIsImN1cnJlbnQiLCJ2YWx1ZSIsInRvZG9EYXRhIiwiYWxlcnQiLCJhZGRUb2RvIiwiZGVsZXRlVG9kbyIsImNsYXNzZXMiLCJsaXN0IiwibWFwIiwiaXRlbSIsIm1lZXR1cCIsImltYWdlIiwidGl0bGUiLCJhZGRyZXNzIiwiY2FyZCIsImZvcm0iLCJjb250cm9sIiwiYWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBRyxDQUNqQjtBQUNJQyxJQUFFLEVBQUUsSUFEUjtBQUVJQyxNQUFJLEVBQUU7QUFGVixDQURpQixFQUtqQjtBQUNJRCxJQUFFLEVBQUUsSUFEUjtBQUVJQyxNQUFJLEVBQUU7QUFGVixDQUxpQixFQVNqQjtBQUNJRCxJQUFFLEVBQUUsSUFEUjtBQUVJQyxNQUFJLEVBQUU7QUFGVixDQVRpQixDQUFuQjs7QUFnQkEsU0FBU0MsUUFBVCxHQUFvQjtBQUFBOztBQUFBOztBQUFBLGtCQUNZQyxzREFBUSxDQUFDLEVBQUQsQ0FEcEI7QUFBQSxNQUNYQyxPQURXO0FBQUEsTUFDRkMsVUFERTs7QUFBQSxtQkFFY0Ysc0RBQVEsQ0FBQ0osVUFBRCxDQUZ0QjtBQUFBLE1BRVhPLFFBRlc7QUFBQSxNQUVEQyxXQUZDOztBQUlsQixNQUFNQyxZQUFZLEdBQUdDLG9EQUFNLEVBQTNCOztBQUVBLFdBQVNDLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCO0FBQzVCQSxTQUFLLENBQUNDLGNBQU47QUFFQSxRQUFNQyxXQUFXLEdBQUdMLFlBQVksQ0FBQ00sT0FBYixDQUFxQkMsS0FBekM7QUFFQSxRQUFNQyxRQUFRLEdBQUc7QUFDZmYsVUFBSSxFQUFFWTtBQURTLEtBQWpCO0FBR0FJLFNBQUssQ0FBQ0QsUUFBUSxDQUFDZixJQUFWLENBQUw7QUFDQU0sZUFBVyxDQUFDUyxRQUFELENBQVgsQ0FUNEIsQ0FVNUI7QUFDRDs7QUFFRCxNQUFNRSxPQUFPO0FBQUEsa1ZBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFQQSxPQUFPO0FBQUE7QUFBQTtBQUFBLEtBQWI7O0FBR0EsTUFBTUMsVUFBVTtBQUFBLG1WQUFHLGtCQUFPbkIsRUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVZtQixVQUFVO0FBQUE7QUFBQTtBQUFBLEtBQWhCOztBQUtBLHNCQUNFLHFFQUFDLDhDQUFEO0FBQUEsNEJBQ0U7QUFBQSw2QkFDRTtBQUFJLGlCQUFTLEVBQUVDLDREQUFPLENBQUNDLElBQXZCO0FBQUEsa0JBQ0dmLFFBQVEsQ0FBQ2dCLEdBQVQsQ0FBYSxVQUFDQyxJQUFEO0FBQUEsOEJBQ1oscUVBQUMsVUFBRDtBQUVFLGNBQUUsRUFBRUMsTUFBTSxDQUFDeEIsRUFGYjtBQUdFLGlCQUFLLEVBQUV3QixNQUFNLENBQUNDLEtBSGhCO0FBSUUsaUJBQUssRUFBRUQsTUFBTSxDQUFDRSxLQUpoQjtBQUtFLG1CQUFPLEVBQUVGLE1BQU0sQ0FBQ0c7QUFMbEIsYUFDT0gsTUFBTSxDQUFDeEIsRUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURZO0FBQUEsU0FBYjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFjRTtBQUFLLGVBQVMsRUFBRW9CLDREQUFPLENBQUNRLElBQXhCO0FBQUEsNkJBQ0U7QUFBTSxpQkFBUyxFQUFFUiw0REFBTyxDQUFDUyxJQUF6QjtBQUErQixnQkFBUSxFQUFFbkIsYUFBekM7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUVVLDREQUFPLENBQUNVLE9BQXhCO0FBQUEsaUNBRUU7QUFBTyxnQkFBSSxFQUFDLE1BQVo7QUFBbUIsb0JBQVEsTUFBM0I7QUFBNEIsY0FBRSxFQUFDLE1BQS9CO0FBQXNDLGVBQUcsRUFBRXRCLFlBQTNDO0FBQXlELHVCQUFXLEVBQUM7QUFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFLRTtBQUFLLG1CQUFTLEVBQUVZLDREQUFPLENBQUNXLE9BQXhCO0FBQUEsaUNBQ0U7QUFBUSxnQkFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTRCRDs7R0F2RFE3QixROztLQUFBQSxRO0FBeURNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wN2ZjNTBlZjY4YWU0YmI0YjQzNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vdG9kby1saXN0Lm1vZHVsZS5jc3MnO1xyXG5cclxuY29uc3QgRFVNTVlfSVRFTSA9IFtcclxuICB7XHJcbiAgICAgIGlkOiAnbTEnLFxyXG4gICAgICBuYW1lOiAnQSBmaXJzdCBtZWV0dXAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBpZDogJ20yJyxcclxuICAgICAgbmFtZTogJ0Egc2Vjb25kIG1lZXR1cCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICAgIGlkOiAnbTMnLFxyXG4gICAgICBuYW1lOiAnQSB0aGlyZCBtZWV0dXAnLFxyXG4gIH1cclxuXVxyXG5cclxuXHJcbmZ1bmN0aW9uIFRvZG9DYXJkKCkge1xyXG4gIGNvbnN0IFtuZXdUb2RvLCBzZXROZXdUb2RvXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdG9kb0xpc3QsIHNldFRvZG9MaXN0XSA9IHVzZVN0YXRlKERVTU1ZX0lURU0pO1xyXG5cclxuICBjb25zdCBuYW1lSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgZnVuY3Rpb24gc3VibWl0SGFuZGxlcihldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBlbnRlcmVkTmFtZSA9IG5hbWVJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG5cclxuICAgIGNvbnN0IHRvZG9EYXRhID0ge1xyXG4gICAgICBuYW1lOiBlbnRlcmVkTmFtZSxcclxuICAgIH07XHJcbiAgICBhbGVydCh0b2RvRGF0YS5uYW1lKTtcclxuICAgIHNldFRvZG9MaXN0KHRvZG9EYXRhKTtcclxuICAgIC8vIHByb3BzLm9uQWRkTWVldHVwKG1lZXR1cERhdGEpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYWRkVG9kbyA9IGFzeW5jICgpID0+IHtcclxuICB9O1xyXG5cclxuICBjb25zdCBkZWxldGVUb2RvID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgfTtcclxuXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH0+XHJcbiAgICAgICAgICB7dG9kb0xpc3QubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgIDxNZWV0dXBJdGVtXHJcbiAgICAgICAgICAgICAga2V5PXttZWV0dXAuaWR9XHJcbiAgICAgICAgICAgICAgaWQ9e21lZXR1cC5pZH1cclxuICAgICAgICAgICAgICBpbWFnZT17bWVldHVwLmltYWdlfVxyXG4gICAgICAgICAgICAgIHRpdGxlPXttZWV0dXAudGl0bGV9XHJcbiAgICAgICAgICAgICAgYWRkcmVzcz17bWVldHVwLmFkZHJlc3N9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0+XHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19IG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxyXG4gICAgICAgICAgICB7LyogPGxhYmVsIGh0bWxGb3I9J25hbWUnPlRpdGxlPC9sYWJlbD4gKi99XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyByZXF1aXJlZCBpZD0nbmFtZScgcmVmPXtuYW1lSW5wdXRSZWZ9IHBsYWNlaG9sZGVyPSdOYW1lJyAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfT5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPkFkZDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9kb0NhcmQ7Il0sInNvdXJjZVJvb3QiOiIifQ==