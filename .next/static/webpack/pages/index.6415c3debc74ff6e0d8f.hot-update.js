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
      var enteredName, todoData, response, data;
      return D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              enteredName = nameInputRef.current.value;
              todoData = {
                name: enteredName
              }; // const response = await fetch('/api/todo-input',{
              //     method: 'POST',
              //     body: JSON.stringify(todoData),
              //     headers: {
              //         'Content-Type': 'application/json'
              //     }
              // });

              _context.next = 5;
              return fetch("https://expense-tracker-dfeec-default-rtdb.firebaseio.com/todo/todoInput.json", {
                method: "POST",
                body: JSON.stringify(todoData),
                headers: {
                  "Content-Type": "application/json"
                }
              });

            case 5:
              response = _context.sent;
              _context.next = 8;
              return response.json();

            case 8:
              data = _context.sent;
              console.log(response);
              console.log(data);

              if (response.ok) {
                _context.next = 13;
                break;
              }

              throw new Error(data.error);

            case 13:
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
              lineNumber: 55,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: _todo_card_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.actions,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG9kby1jYXJkL2luZGV4LmpzIl0sIm5hbWVzIjpbIlRvZG9DYXJkIiwidXNlU3RhdGUiLCJuZXdUb2RvIiwic2V0TmV3VG9kbyIsInRvZG9MaXN0Iiwic2V0VG9kb0xpc3QiLCJuYW1lSW5wdXRSZWYiLCJ1c2VSZWYiLCJzdWJtaXRIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImVudGVyZWROYW1lIiwiY3VycmVudCIsInZhbHVlIiwidG9kb0RhdGEiLCJuYW1lIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIm9rIiwiRXJyb3IiLCJlcnJvciIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJmbGV4RGlyZWN0aW9uIiwid2lkdGgiLCJjbGFzc2VzIiwiY2FyZCIsImZvcm0iLCJjb250cm9sIiwiYWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQUEsa0JBQ1lDLHNEQUFRLENBQUMsRUFBRCxDQURwQjtBQUFBLE1BQ1hDLE9BRFc7QUFBQSxNQUNGQyxVQURFOztBQUFBLG1CQUVjRixzREFBUSxDQUFDLEVBQUQsQ0FGdEI7QUFBQSxNQUVYRyxRQUZXO0FBQUEsTUFFREMsV0FGQzs7QUFJbEIsTUFBTUMsWUFBWSxHQUFHQyxvREFBTSxFQUEzQjs7QUFKa0IsV0FNSEMsYUFORztBQUFBO0FBQUE7O0FBQUE7QUFBQSx3VkFNbEIsaUJBQTZCQyxLQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRUEsbUJBQUssQ0FBQ0MsY0FBTjtBQUVNQyx5QkFIUixHQUdzQkwsWUFBWSxDQUFDTSxPQUFiLENBQXFCQyxLQUgzQztBQUtRQyxzQkFMUixHQUttQjtBQUNmQyxvQkFBSSxFQUFFSjtBQURTLGVBTG5CLEVBU0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBZkY7QUFBQSxxQkFnQnlCSyxLQUFLLGtGQUUxQjtBQUNFQyxzQkFBTSxFQUFFLE1BRFY7QUFFRUMsb0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVOLFFBQWYsQ0FGUjtBQUdFTyx1QkFBTyxFQUFFO0FBQ1Asa0NBQWdCO0FBRFQ7QUFIWCxlQUYwQixDQWhCOUI7O0FBQUE7QUFnQlFDLHNCQWhCUjtBQUFBO0FBQUEscUJBMEJxQkEsUUFBUSxDQUFDQyxJQUFULEVBMUJyQjs7QUFBQTtBQTBCUUMsa0JBMUJSO0FBMkJRQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlKLFFBQVo7QUFDQUcscUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaOztBQTVCUixrQkE2QmFGLFFBQVEsQ0FBQ0ssRUE3QnRCO0FBQUE7QUFBQTtBQUFBOztBQUFBLG9CQThCZ0IsSUFBSUMsS0FBSixDQUFVSixJQUFJLENBQUNLLEtBQWYsQ0E5QmhCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTmtCO0FBQUE7QUFBQTs7QUEyQ2xCLHNCQUNFLHFFQUFDLDhDQUFEO0FBQUEsMkJBQ0U7QUFBSyxXQUFLLEVBQUU7QUFBRUMsZUFBTyxFQUFFLE1BQVg7QUFBbUJDLGtCQUFVLEVBQUUsUUFBL0I7QUFBeUNDLHNCQUFjLEVBQUUsUUFBekQ7QUFBbUVDLHFCQUFhLEVBQUUsUUFBbEY7QUFBNEZDLGFBQUssRUFBQztBQUFsRyxPQUFaO0FBQUEsNkJBRUU7QUFBSyxpQkFBUyxFQUFFQyw0REFBTyxDQUFDQyxJQUF4QjtBQUFBLCtCQUNFO0FBQU0sbUJBQVMsRUFBRUQsNERBQU8sQ0FBQ0UsSUFBekI7QUFBK0Isa0JBQVEsRUFBRTdCLGFBQXpDO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFFMkIsNERBQU8sQ0FBQ0csT0FBeEI7QUFBQSxtQ0FFRTtBQUFPLGtCQUFJLEVBQUMsTUFBWjtBQUFtQixzQkFBUSxNQUEzQjtBQUE0QixnQkFBRSxFQUFDLE1BQS9CO0FBQXNDLGlCQUFHLEVBQUVoQyxZQUEzQztBQUF5RCx5QkFBVyxFQUFDO0FBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBS0U7QUFBSyxxQkFBUyxFQUFFNkIsNERBQU8sQ0FBQ0ksT0FBeEI7QUFBQSxtQ0FDRTtBQUFRLGtCQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFrQkQ7O0dBN0RRdkMsUTs7S0FBQUEsUTtBQStETUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjQxNWMzZGViYzc0ZmY2ZTBkOGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL3RvZG8tY2FyZC5tb2R1bGUuY3NzJztcclxuXHJcbmZ1bmN0aW9uIFRvZG9DYXJkKCkge1xyXG4gIGNvbnN0IFtuZXdUb2RvLCBzZXROZXdUb2RvXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdG9kb0xpc3QsIHNldFRvZG9MaXN0XSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgbmFtZUlucHV0UmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdEhhbmRsZXIoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgZW50ZXJlZE5hbWUgPSBuYW1lSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuXHJcbiAgICBjb25zdCB0b2RvRGF0YSA9IHtcclxuICAgICAgbmFtZTogZW50ZXJlZE5hbWUsXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICAvLyBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL3RvZG8taW5wdXQnLHtcclxuICAgIC8vICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIC8vICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0b2RvRGF0YSksXHJcbiAgICAvLyAgICAgaGVhZGVyczoge1xyXG4gICAgLy8gICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSk7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cHM6Ly9leHBlbnNlLXRyYWNrZXItZGZlZWMtZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tL3RvZG8vdG9kb0lucHV0Lmpzb25gLFxyXG4gICAgICB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0b2RvRGF0YSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGRhdGEuZXJyb3IpO1xyXG4gICAgICAgICAgfVxyXG4gICAgLy8gcHJvcHMub25BZGRNZWV0dXAobWVldHVwRGF0YSk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgd2lkdGg6JzEwMCUnIH19PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmR9PlxyXG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19IG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XHJcbiAgICAgICAgICAgICAgey8qIDxsYWJlbCBodG1sRm9yPSduYW1lJz5UaXRsZTwvbGFiZWw+ICovfVxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyByZXF1aXJlZCBpZD0nbmFtZScgcmVmPXtuYW1lSW5wdXRSZWZ9IHBsYWNlaG9sZGVyPSdOYW1lJyAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uc30+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPkFkZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9DYXJkOyJdLCJzb3VyY2VSb290IjoiIn0=