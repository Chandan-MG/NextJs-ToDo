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
/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-list */ "./pages/todo-list/index.js");
/* harmony import */ var react_icons_rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/rx */ "./node_modules/react-icons/rx/index.mjs");


var _jsxFileName = "D:\\chandan\\Sharpener projects\\NextJS\\todo\\01-starting-project\\pages\\index.js",
    _s = $RefreshSig$();




var DUMMY_ITEM = [{
  id: 'm1',
  name: 'A first meetup'
}, {
  id: 'm2',
  title: 'A second meetup',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/S%C3%A3o_Paulo_City.jpg/1280px-S%C3%A3o_Paulo_City.jpg',
  address: 'Some address 3, 55 some city',
  description: 'This is a second meetup'
}, {
  id: 'm3',
  title: 'A third meetup',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/S%C3%A3o_Paulo_City.jpg/1280px-S%C3%A3o_Paulo_City.jpg',
  address: 'Some address 3, 55 some city',
  description: 'This is a third meetup'
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
        lineNumber: 37,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), add && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10px'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_todo_list__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfSVRFTSIsImlkIiwibmFtZSIsInRpdGxlIiwiaW1hZ2UiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJIb21lUGFnZSIsInVzZVN0YXRlIiwiYWRkIiwic2V0QWRkIiwiYWRkQnV0dG9uSG5kbGVyIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Ub3AiLCJ3aWR0aCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBRyxDQUNqQjtBQUNJQyxJQUFFLEVBQUUsSUFEUjtBQUVJQyxNQUFJLEVBQUU7QUFGVixDQURpQixFQUtqQjtBQUNJRCxJQUFFLEVBQUUsSUFEUjtBQUVJRSxPQUFLLEVBQUUsaUJBRlg7QUFHSUMsT0FBSyxFQUFFLGtIQUhYO0FBSUlDLFNBQU8sRUFBRSw4QkFKYjtBQUtJQyxhQUFXLEVBQUU7QUFMakIsQ0FMaUIsRUFZakI7QUFDSUwsSUFBRSxFQUFFLElBRFI7QUFFSUUsT0FBSyxFQUFFLGdCQUZYO0FBR0lDLE9BQUssRUFBRSxrSEFIWDtBQUlJQyxTQUFPLEVBQUUsOEJBSmI7QUFLSUMsYUFBVyxFQUFFO0FBTGpCLENBWmlCLENBQW5COztBQXNCQSxTQUFTQyxRQUFULEdBQW1CO0FBQUE7O0FBQUEsa0JBRUtDLHNEQUFRLENBQUMsS0FBRCxDQUZiO0FBQUEsTUFFVkMsR0FGVTtBQUFBLE1BRUxDLE1BRks7O0FBSWpCLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBSztBQUMzQkQsVUFBTSxDQUFDLENBQUNELEdBQUYsQ0FBTjtBQUNELEdBRkQ7O0FBR0Esc0JBQ0UscUVBQUMsOENBQUQ7QUFBQSw0QkFDRTtBQUFLLFdBQUssRUFBRTtBQUFDRyxlQUFPLEVBQUMsTUFBVDtBQUFpQkMsa0JBQVUsRUFBQyxRQUE1QjtBQUFzQ0Msc0JBQWMsRUFBQyxZQUFyRDtBQUFtRUMsa0JBQVUsRUFBQyxPQUE5RTtBQUF1RkMsaUJBQVMsRUFBQztBQUFqRyxPQUFaO0FBQUEsNkJBQ0kscUVBQUMseURBQUQ7QUFBWSxhQUFLLEVBQUMsS0FBbEI7QUFBd0IsYUFBSyxFQUFFO0FBQUNDLGVBQUssRUFBRSxNQUFSO0FBQWdCQyxnQkFBTSxFQUFFO0FBQXhCLFNBQS9CO0FBQWdFLGVBQU8sRUFBRVA7QUFBekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUlJRixHQUFHLGlCQUFLO0FBQUssV0FBSyxFQUFFO0FBQUNHLGVBQU8sRUFBQyxNQUFUO0FBQWlCQyxrQkFBVSxFQUFDLFFBQTVCO0FBQXNDQyxzQkFBYyxFQUFDLFFBQXJEO0FBQStERSxpQkFBUyxFQUFFO0FBQTFFLE9BQVo7QUFBQSw2QkFDUixxRUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBVUQ7O0dBakJRVCxROztLQUFBQSxRO0FBa0JNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lMmMyZDFiNzMzOGUxZjkzYjc2Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVG9kb0xpc3QgZnJvbSBcIi4vdG9kby1saXN0XCI7XG5pbXBvcnQgeyBSeEZpbGVQbHVzIH0gZnJvbSBcInJlYWN0LWljb25zL3J4XCI7XG5cbmNvbnN0IERVTU1ZX0lURU0gPSBbXG4gIHtcbiAgICAgIGlkOiAnbTEnLFxuICAgICAgbmFtZTogJ0EgZmlyc3QgbWVldHVwJyxcbiAgfSxcbiAge1xuICAgICAgaWQ6ICdtMicsXG4gICAgICB0aXRsZTogJ0Egc2Vjb25kIG1lZXR1cCcsXG4gICAgICBpbWFnZTogJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvZC9kOS9TJUMzJUEzb19QYXVsb19DaXR5LmpwZy8xMjgwcHgtUyVDMyVBM29fUGF1bG9fQ2l0eS5qcGcnLFxuICAgICAgYWRkcmVzczogJ1NvbWUgYWRkcmVzcyAzLCA1NSBzb21lIGNpdHknLFxuICAgICAgZGVzY3JpcHRpb246ICdUaGlzIGlzIGEgc2Vjb25kIG1lZXR1cCdcbiAgfSxcbiAge1xuICAgICAgaWQ6ICdtMycsXG4gICAgICB0aXRsZTogJ0EgdGhpcmQgbWVldHVwJyxcbiAgICAgIGltYWdlOiAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi9kL2Q5L1MlQzMlQTNvX1BhdWxvX0NpdHkuanBnLzEyODBweC1TJUMzJUEzb19QYXVsb19DaXR5LmpwZycsXG4gICAgICBhZGRyZXNzOiAnU29tZSBhZGRyZXNzIDMsIDU1IHNvbWUgY2l0eScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgYSB0aGlyZCBtZWV0dXAnXG4gIH1cbl1cblxuXG5mdW5jdGlvbiBIb21lUGFnZSgpe1xuXG4gIGNvbnN0IFthZGQsIHNldEFkZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgYWRkQnV0dG9uSG5kbGVyID0gKCkgPT57XG4gICAgc2V0QWRkKCFhZGQpO1xuICB9XG4gIHJldHVybihcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsIGFsaWduSXRlbXM6J2NlbnRlcicsIGp1c3RpZnlDb250ZW50OidmbGV4LXN0YXJ0JywgbWFyZ2luTGVmdDonMjUwcHgnLCBtYXJnaW5Ub3A6JzIwcHgnfX0+XG4gICAgICAgICAgPFJ4RmlsZVBsdXMgY29sb3I9XCJyZWRcIiBzdHlsZT17e3dpZHRoOiAnMzBweCcsIGhlaWdodDogJzMwcHgnfX0gb25DbGljaz17YWRkQnV0dG9uSG5kbGVyfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICB7IGFkZCAmJiAoPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLCBhbGlnbkl0ZW1zOidjZW50ZXInLCBqdXN0aWZ5Q29udGVudDonY2VudGVyJywgbWFyZ2luVG9wOiAnMTBweCd9fT5cbiAgICAgICAgPFRvZG9MaXN0IC8+XG4gICAgICA8L2Rpdj4pfVxuICAgIDwvRnJhZ21lbnQ+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=