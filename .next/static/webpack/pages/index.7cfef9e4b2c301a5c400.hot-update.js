webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _todo_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-card */ "./pages/todo-card/index.js");
/* harmony import */ var react_icons_rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/rx */ "./node_modules/react-icons/rx/index.mjs");


var _jsxFileName = "D:\\chandan\\Sharpener projects\\NextJS\\todo\\01-starting-project\\pages\\index.js",
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

function HomePage() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      add = _useState[0],
      setAdd = _useState[1];

  var addButtonHndler = function addButtonHndler() {
    setAdd(!add);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: '250px',
        marginTop: '20px'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_rx__WEBPACK_IMPORTED_MODULE_3__["RxFilePlus"], {
        color: "red",
        style: {
          width: '30px',
          height: '30px'
        },
        onClick: addButtonHndler
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this), add && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10px'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TodoList, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

_s(HomePage, "eDVr+tSx22ZstOm6uWEzv+RPH0A=");

_c = HomePage;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfSVRFTSIsImlkIiwibmFtZSIsIkhvbWVQYWdlIiwidXNlU3RhdGUiLCJhZGQiLCJzZXRBZGQiLCJhZGRCdXR0b25IbmRsZXIiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luTGVmdCIsIm1hcmdpblRvcCIsIndpZHRoIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHLENBQ2pCO0FBQ0lDLElBQUUsRUFBRSxJQURSO0FBRUlDLE1BQUksRUFBRTtBQUZWLENBRGlCLEVBS2pCO0FBQ0lELElBQUUsRUFBRSxJQURSO0FBRUlDLE1BQUksRUFBRTtBQUZWLENBTGlCLEVBU2pCO0FBQ0lELElBQUUsRUFBRSxJQURSO0FBRUlDLE1BQUksRUFBRTtBQUZWLENBVGlCLENBQW5COztBQWdCQSxTQUFTQyxRQUFULEdBQW1CO0FBQUE7O0FBQUEsa0JBRUtDLHNEQUFRLENBQUMsS0FBRCxDQUZiO0FBQUEsTUFFVkMsR0FGVTtBQUFBLE1BRUxDLE1BRks7O0FBSWpCLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBSztBQUMzQkQsVUFBTSxDQUFDLENBQUNELEdBQUYsQ0FBTjtBQUNELEdBRkQ7O0FBR0Esc0JBQ0UscUVBQUMsOENBQUQ7QUFBQSw0QkFDRTtBQUFLLFdBQUssRUFBRTtBQUFDRyxlQUFPLEVBQUMsTUFBVDtBQUFpQkMsa0JBQVUsRUFBQyxRQUE1QjtBQUFzQ0Msc0JBQWMsRUFBQyxZQUFyRDtBQUFtRUMsa0JBQVUsRUFBQyxPQUE5RTtBQUF1RkMsaUJBQVMsRUFBQztBQUFqRyxPQUFaO0FBQUEsNkJBQ0kscUVBQUMseURBQUQ7QUFBWSxhQUFLLEVBQUMsS0FBbEI7QUFBd0IsYUFBSyxFQUFFO0FBQUNDLGVBQUssRUFBRSxNQUFSO0FBQWdCQyxnQkFBTSxFQUFFO0FBQXhCLFNBQS9CO0FBQWdFLGVBQU8sRUFBRVA7QUFBekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUlJRixHQUFHLGlCQUFLO0FBQUssV0FBSyxFQUFFO0FBQUNHLGVBQU8sRUFBQyxNQUFUO0FBQWlCQyxrQkFBVSxFQUFDLFFBQTVCO0FBQXNDQyxzQkFBYyxFQUFDLFFBQXJEO0FBQStERSxpQkFBUyxFQUFFO0FBQTFFLE9BQVo7QUFBQSw2QkFDUixxRUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFVRDs7R0FqQlFULFE7O0tBQUFBLFE7QUFrQk1BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjdjZmVmOWU0YjJjMzAxYTVjNDAwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUb2RvIGZyb20gXCIuL3RvZG8tY2FyZFwiO1xuaW1wb3J0IHsgUnhGaWxlUGx1cyB9IGZyb20gXCJyZWFjdC1pY29ucy9yeFwiO1xuXG5jb25zdCBEVU1NWV9JVEVNID0gW1xuICB7XG4gICAgICBpZDogJ20xJyxcbiAgICAgIG5hbWU6ICdBIGZpcnN0IG1lZXR1cCcsXG4gIH0sXG4gIHtcbiAgICAgIGlkOiAnbTInLFxuICAgICAgbmFtZTogJ0Egc2Vjb25kIG1lZXR1cCcsXG4gIH0sXG4gIHtcbiAgICAgIGlkOiAnbTMnLFxuICAgICAgbmFtZTogJ0EgdGhpcmQgbWVldHVwJyxcbiAgfVxuXVxuXG5cbmZ1bmN0aW9uIEhvbWVQYWdlKCl7XG5cbiAgY29uc3QgW2FkZCwgc2V0QWRkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBhZGRCdXR0b25IbmRsZXIgPSAoKSA9PntcbiAgICBzZXRBZGQoIWFkZCk7XG4gIH1cbiAgcmV0dXJuKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JywgYWxpZ25JdGVtczonY2VudGVyJywganVzdGlmeUNvbnRlbnQ6J2ZsZXgtc3RhcnQnLCBtYXJnaW5MZWZ0OicyNTBweCcsIG1hcmdpblRvcDonMjBweCd9fT5cbiAgICAgICAgICA8UnhGaWxlUGx1cyBjb2xvcj1cInJlZFwiIHN0eWxlPXt7d2lkdGg6ICczMHB4JywgaGVpZ2h0OiAnMzBweCd9fSBvbkNsaWNrPXthZGRCdXR0b25IbmRsZXJ9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsgYWRkICYmICg8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsIGFsaWduSXRlbXM6J2NlbnRlcicsIGp1c3RpZnlDb250ZW50OidjZW50ZXInLCBtYXJnaW5Ub3A6ICcxMHB4J319PlxuICAgICAgICA8VG9kb0xpc3QgLz5cbiAgICAgIDwvZGl2Pil9XG4gICAgPC9GcmFnbWVudD5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==