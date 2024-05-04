webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/todo-card/index.js":
/*!**********************************!*\
  !*** ./pages/todo-card/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _todo_card_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-card.module.css */ "./pages/todo-card/todo-card.module.css");
/* harmony import */ var _todo_card_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_todo_card_module_css__WEBPACK_IMPORTED_MODULE_4__);




var _jsxFileName = "D:\\chandan\\Sharpener projects\\NextJS\\todo\\01-starting-project\\pages\\todo-card\\index.js",
    _s = $RefreshSig$();




function TodoCard() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      newTodo = _useState[0],
      setNewTodo = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      todoList = _useState2[0],
      setTodoList = _useState2[1];

  var nameInputRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();

  function submitHandler(_x) {
    return _submitHandler.apply(this, arguments);
  }

  function _submitHandler() {
    _submitHandler = Object(D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
      var enteredName, todoData, response;
      return D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              enteredName = nameInputRef.current.value;
              todoData = {
                name: enteredName
              };
              alert(todoData.name);
              _context.next = 6;
              return fetch('/api/todo-', {
                method: 'POST',
                body: JSON.stringify(todoData),
                headers: {
                  'Content-Type': 'application/json'
                }
              });

            case 6:
              response = _context.sent;

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _submitHandler.apply(this, arguments);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _todo_card_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.card,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
          className: _todo_card_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.form,
          onSubmit: submitHandler,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: _todo_card_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.control,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
              type: "text",
              required: true,
              id: "name",
              ref: nameInputRef,
              placeholder: "Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: _todo_card_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.actions,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
              type: "submit",
              children: "Add"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

_s(TodoCard, "09NESPOLtvfoS5JRwBURlTcHfCU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG9kby1jYXJkL2luZGV4LmpzIl0sIm5hbWVzIjpbIlRvZG9DYXJkIiwidXNlU3RhdGUiLCJuZXdUb2RvIiwic2V0TmV3VG9kbyIsInRvZG9MaXN0Iiwic2V0VG9kb0xpc3QiLCJuYW1lSW5wdXRSZWYiLCJ1c2VSZWYiLCJzdWJtaXRIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImVudGVyZWROYW1lIiwiY3VycmVudCIsInZhbHVlIiwidG9kb0RhdGEiLCJuYW1lIiwiYWxlcnQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInJlc3BvbnNlIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImZsZXhEaXJlY3Rpb24iLCJ3aWR0aCIsImNsYXNzZXMiLCJjYXJkIiwiZm9ybSIsImNvbnRyb2wiLCJhY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFBQSxrQkFDWUMsc0RBQVEsQ0FBQyxFQUFELENBRHBCO0FBQUEsTUFDWEMsT0FEVztBQUFBLE1BQ0ZDLFVBREU7O0FBQUEsbUJBRWNGLHNEQUFRLENBQUMsRUFBRCxDQUZ0QjtBQUFBLE1BRVhHLFFBRlc7QUFBQSxNQUVEQyxXQUZDOztBQUlsQixNQUFNQyxZQUFZLEdBQUdDLG9EQUFNLEVBQTNCOztBQUprQixXQU1IQyxhQU5HO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHdWQU1sQixpQkFBNkJDLEtBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFQSxtQkFBSyxDQUFDQyxjQUFOO0FBRU1DLHlCQUhSLEdBR3NCTCxZQUFZLENBQUNNLE9BQWIsQ0FBcUJDLEtBSDNDO0FBS1FDLHNCQUxSLEdBS21CO0FBQ2ZDLG9CQUFJLEVBQUVKO0FBRFMsZUFMbkI7QUFRRUssbUJBQUssQ0FBQ0YsUUFBUSxDQUFDQyxJQUFWLENBQUw7QUFSRjtBQUFBLHFCQVN5QkUsS0FBSyxDQUFDLFlBQUQsRUFBYztBQUN0Q0Msc0JBQU0sRUFBRSxNQUQ4QjtBQUV0Q0Msb0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVQLFFBQWYsQ0FGZ0M7QUFHdENRLHVCQUFPLEVBQUU7QUFDTCxrQ0FBZ0I7QUFEWDtBQUg2QixlQUFkLENBVDlCOztBQUFBO0FBU1FDLHNCQVRSOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTmtCO0FBQUE7QUFBQTs7QUEyQmxCLHNCQUNFLHFFQUFDLDhDQUFEO0FBQUEsMkJBQ0U7QUFBSyxXQUFLLEVBQUU7QUFBRUMsZUFBTyxFQUFFLE1BQVg7QUFBbUJDLGtCQUFVLEVBQUUsUUFBL0I7QUFBeUNDLHNCQUFjLEVBQUUsUUFBekQ7QUFBbUVDLHFCQUFhLEVBQUUsUUFBbEY7QUFBNEZDLGFBQUssRUFBQztBQUFsRyxPQUFaO0FBQUEsNkJBRUU7QUFBSyxpQkFBUyxFQUFFQyw0REFBTyxDQUFDQyxJQUF4QjtBQUFBLCtCQUNFO0FBQU0sbUJBQVMsRUFBRUQsNERBQU8sQ0FBQ0UsSUFBekI7QUFBK0Isa0JBQVEsRUFBRXZCLGFBQXpDO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFFcUIsNERBQU8sQ0FBQ0csT0FBeEI7QUFBQSxtQ0FFRTtBQUFPLGtCQUFJLEVBQUMsTUFBWjtBQUFtQixzQkFBUSxNQUEzQjtBQUE0QixnQkFBRSxFQUFDLE1BQS9CO0FBQXNDLGlCQUFHLEVBQUUxQixZQUEzQztBQUF5RCx5QkFBVyxFQUFDO0FBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBS0U7QUFBSyxxQkFBUyxFQUFFdUIsNERBQU8sQ0FBQ0ksT0FBeEI7QUFBQSxtQ0FDRTtBQUFRLGtCQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFrQkQ7O0dBN0NRakMsUTs7S0FBQUEsUTtBQStDTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWM5ZDYyZGQzYWU5NTc0YTY3MWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL3RvZG8tY2FyZC5tb2R1bGUuY3NzJztcclxuXHJcbmZ1bmN0aW9uIFRvZG9DYXJkKCkge1xyXG4gIGNvbnN0IFtuZXdUb2RvLCBzZXROZXdUb2RvXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdG9kb0xpc3QsIHNldFRvZG9MaXN0XSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgbmFtZUlucHV0UmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdEhhbmRsZXIoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgZW50ZXJlZE5hbWUgPSBuYW1lSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuXHJcbiAgICBjb25zdCB0b2RvRGF0YSA9IHtcclxuICAgICAgbmFtZTogZW50ZXJlZE5hbWUsXHJcbiAgICB9O1xyXG4gICAgYWxlcnQodG9kb0RhdGEubmFtZSk7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL3RvZG8tJyx7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodG9kb0RhdGEpLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gcHJvcHMub25BZGRNZWV0dXAobWVldHVwRGF0YSk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgd2lkdGg6JzEwMCUnIH19PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmR9PlxyXG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19IG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XHJcbiAgICAgICAgICAgICAgey8qIDxsYWJlbCBodG1sRm9yPSduYW1lJz5UaXRsZTwvbGFiZWw+ICovfVxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyByZXF1aXJlZCBpZD0nbmFtZScgcmVmPXtuYW1lSW5wdXRSZWZ9IHBsYWNlaG9sZGVyPSdOYW1lJyAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uc30+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPkFkZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9DYXJkOyJdLCJzb3VyY2VSb290IjoiIn0=