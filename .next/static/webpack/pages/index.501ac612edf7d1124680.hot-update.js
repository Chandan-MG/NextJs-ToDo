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
        children: props.meetups.map(function (meetup) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MeetupItem, {
            id: meetup.id,
            image: meetup.image,
            title: meetup.title,
            address: meetup.address
          }, meetup.id, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 9
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 7
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG9kby1jYXJkL2luZGV4LmpzIl0sIm5hbWVzIjpbIkRVTU1ZX0lURU0iLCJpZCIsIm5hbWUiLCJUb2RvQ2FyZCIsInVzZVN0YXRlIiwibmV3VG9kbyIsInNldE5ld1RvZG8iLCJ0b2RvTGlzdCIsInNldFRvZG9MaXN0IiwibmFtZUlucHV0UmVmIiwidXNlUmVmIiwic3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlbnRlcmVkTmFtZSIsImN1cnJlbnQiLCJ2YWx1ZSIsInRvZG9EYXRhIiwiYWxlcnQiLCJhZGRUb2RvIiwiZGVsZXRlVG9kbyIsImNsYXNzZXMiLCJsaXN0IiwicHJvcHMiLCJtZWV0dXBzIiwibWFwIiwibWVldHVwIiwiaW1hZ2UiLCJ0aXRsZSIsImFkZHJlc3MiLCJjYXJkIiwiZm9ybSIsImNvbnRyb2wiLCJhY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHLENBQ2pCO0FBQ0lDLElBQUUsRUFBRSxJQURSO0FBRUlDLE1BQUksRUFBRTtBQUZWLENBRGlCLEVBS2pCO0FBQ0lELElBQUUsRUFBRSxJQURSO0FBRUlDLE1BQUksRUFBRTtBQUZWLENBTGlCLEVBU2pCO0FBQ0lELElBQUUsRUFBRSxJQURSO0FBRUlDLE1BQUksRUFBRTtBQUZWLENBVGlCLENBQW5COztBQWdCQSxTQUFTQyxRQUFULEdBQW9CO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1lDLHNEQUFRLENBQUMsRUFBRCxDQURwQjtBQUFBLE1BQ1hDLE9BRFc7QUFBQSxNQUNGQyxVQURFOztBQUFBLG1CQUVjRixzREFBUSxDQUFDSixVQUFELENBRnRCO0FBQUEsTUFFWE8sUUFGVztBQUFBLE1BRURDLFdBRkM7O0FBSWxCLE1BQU1DLFlBQVksR0FBR0Msb0RBQU0sRUFBM0I7O0FBRUEsV0FBU0MsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFDNUJBLFNBQUssQ0FBQ0MsY0FBTjtBQUVBLFFBQU1DLFdBQVcsR0FBR0wsWUFBWSxDQUFDTSxPQUFiLENBQXFCQyxLQUF6QztBQUVBLFFBQU1DLFFBQVEsR0FBRztBQUNmZixVQUFJLEVBQUVZO0FBRFMsS0FBakI7QUFHQUksU0FBSyxDQUFDRCxRQUFRLENBQUNmLElBQVYsQ0FBTDtBQUNBTSxlQUFXLENBQUNTLFFBQUQsQ0FBWCxDQVQ0QixDQVU1QjtBQUNEOztBQUVELE1BQU1FLE9BQU87QUFBQSxrVkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVBBLE9BQU87QUFBQTtBQUFBO0FBQUEsS0FBYjs7QUFHQSxNQUFNQyxVQUFVO0FBQUEsbVZBQUcsa0JBQU9uQixFQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVm1CLFVBQVU7QUFBQTtBQUFBO0FBQUEsS0FBaEI7O0FBS0Esc0JBQ0UscUVBQUMsOENBQUQ7QUFBQSw0QkFDRTtBQUFBLDZCQUNBO0FBQUksaUJBQVMsRUFBRUMsNERBQU8sQ0FBQ0MsSUFBdkI7QUFBQSxrQkFDQ0MsS0FBSyxDQUFDQyxPQUFOLENBQWNDLEdBQWQsQ0FBa0IsVUFBQ0MsTUFBRDtBQUFBLDhCQUNqQixxRUFBQyxVQUFEO0FBRUUsY0FBRSxFQUFFQSxNQUFNLENBQUN6QixFQUZiO0FBR0UsaUJBQUssRUFBRXlCLE1BQU0sQ0FBQ0MsS0FIaEI7QUFJRSxpQkFBSyxFQUFFRCxNQUFNLENBQUNFLEtBSmhCO0FBS0UsbUJBQU8sRUFBRUYsTUFBTSxDQUFDRztBQUxsQixhQUNPSCxNQUFNLENBQUN6QixFQURkO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGlCO0FBQUEsU0FBbEI7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBY0U7QUFBSyxlQUFTLEVBQUVvQiw0REFBTyxDQUFDUyxJQUF4QjtBQUFBLDZCQUNFO0FBQU0saUJBQVMsRUFBRVQsNERBQU8sQ0FBQ1UsSUFBekI7QUFBK0IsZ0JBQVEsRUFBRXBCLGFBQXpDO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFFVSw0REFBTyxDQUFDVyxPQUF4QjtBQUFBLGlDQUVFO0FBQU8sZ0JBQUksRUFBQyxNQUFaO0FBQW1CLG9CQUFRLE1BQTNCO0FBQTRCLGNBQUUsRUFBQyxNQUEvQjtBQUFzQyxlQUFHLEVBQUV2QixZQUEzQztBQUF5RCx1QkFBVyxFQUFDO0FBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBS0U7QUFBSyxtQkFBUyxFQUFFWSw0REFBTyxDQUFDWSxPQUF4QjtBQUFBLGlDQUNFO0FBQVEsZ0JBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE0QkQ7O0dBdkRROUIsUTs7S0FBQUEsUTtBQXlETUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTAxYWM2MTJlZGY3ZDExMjQ2ODAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL3RvZG8tbGlzdC5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IERVTU1ZX0lURU0gPSBbXHJcbiAge1xyXG4gICAgICBpZDogJ20xJyxcclxuICAgICAgbmFtZTogJ0EgZmlyc3QgbWVldHVwJyxcclxuICB9LFxyXG4gIHtcclxuICAgICAgaWQ6ICdtMicsXHJcbiAgICAgIG5hbWU6ICdBIHNlY29uZCBtZWV0dXAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBpZDogJ20zJyxcclxuICAgICAgbmFtZTogJ0EgdGhpcmQgbWVldHVwJyxcclxuICB9XHJcbl1cclxuXHJcblxyXG5mdW5jdGlvbiBUb2RvQ2FyZCgpIHtcclxuICBjb25zdCBbbmV3VG9kbywgc2V0TmV3VG9kb10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3RvZG9MaXN0LCBzZXRUb2RvTGlzdF0gPSB1c2VTdGF0ZShEVU1NWV9JVEVNKTtcclxuXHJcbiAgY29uc3QgbmFtZUlucHV0UmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIGZ1bmN0aW9uIHN1Ym1pdEhhbmRsZXIoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgZW50ZXJlZE5hbWUgPSBuYW1lSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuXHJcbiAgICBjb25zdCB0b2RvRGF0YSA9IHtcclxuICAgICAgbmFtZTogZW50ZXJlZE5hbWUsXHJcbiAgICB9O1xyXG4gICAgYWxlcnQodG9kb0RhdGEubmFtZSk7XHJcbiAgICBzZXRUb2RvTGlzdCh0b2RvRGF0YSk7XHJcbiAgICAvLyBwcm9wcy5vbkFkZE1lZXR1cChtZWV0dXBEYXRhKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGFkZFRvZG8gPSBhc3luYyAoKSA9PiB7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsZXRlVG9kbyA9IGFzeW5jIChpZCkgPT4ge1xyXG4gIH07XHJcblxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPGRpdj5cclxuICAgICAgPHVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0fT5cclxuICAgICAge3Byb3BzLm1lZXR1cHMubWFwKChtZWV0dXApID0+IChcclxuICAgICAgICA8TWVldHVwSXRlbVxyXG4gICAgICAgICAga2V5PXttZWV0dXAuaWR9XHJcbiAgICAgICAgICBpZD17bWVldHVwLmlkfVxyXG4gICAgICAgICAgaW1hZ2U9e21lZXR1cC5pbWFnZX1cclxuICAgICAgICAgIHRpdGxlPXttZWV0dXAudGl0bGV9XHJcbiAgICAgICAgICBhZGRyZXNzPXttZWV0dXAuYWRkcmVzc31cclxuICAgICAgICAvPlxyXG4gICAgICApKX1cclxuICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT5cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0gb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XHJcbiAgICAgICAgICAgIHsvKiA8bGFiZWwgaHRtbEZvcj0nbmFtZSc+VGl0bGU8L2xhYmVsPiAqL31cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHJlcXVpcmVkIGlkPSduYW1lJyByZWY9e25hbWVJbnB1dFJlZn0gcGxhY2Vob2xkZXI9J05hbWUnIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+QWRkPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvQ2FyZDsiXSwic291cmNlUm9vdCI6IiJ9