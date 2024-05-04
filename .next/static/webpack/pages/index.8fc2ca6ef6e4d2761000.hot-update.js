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
/* harmony import */ var D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _todo_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-card */ "./pages/todo-card/index.js");
/* harmony import */ var react_icons_rx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/rx */ "./node_modules/react-icons/rx/index.mjs");
/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todo-list */ "./pages/todo-list/index.js");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.module.css */ "./pages/index.module.css");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_7__);




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

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(DUMMY_ITEM),
      todoList = _useState[0],
      setTodoList = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      add = _useState2[0],
      setAdd = _useState2[1];

  useEffect(function () {
    var fetchListItems = /*#__PURE__*/function () {
      var _ref = Object(D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var response, _candyListItems;

        return D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return fetch("https://crudcrud.com/api/eb09af7a554f437ba458dfc6d04d7281/candy");

              case 3:
                response = _context.sent;

                if (!response.ok) {
                  _context.next = 9;
                  break;
                }

                _context.next = 7;
                return response.json();

              case 7:
                _candyListItems = _context.sent;
                // Update cart context with fetched cart items
                setCandyListItems(_candyListItems);

              case 9:
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);
                console.error('Error fetching:', _context.t0);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 11]]);
      }));

      return function fetchListItems() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchListItems();
  }, [candyListItems]);

  var addButtonHndler = function addButtonHndler() {
    setAdd(!add);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: '220px',
        marginTop: '20px'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        className: _index_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.list,
        children: todoList.map(function (item) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_todo_list__WEBPACK_IMPORTED_MODULE_6__["default"], {
            id: item.id,
            name: item.name
          }, item.id, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: '250px',
        marginTop: '20px'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_rx__WEBPACK_IMPORTED_MODULE_5__["RxFilePlus"], {
        color: "red",
        style: {
          width: '30px',
          height: '30px'
        },
        onClick: addButtonHndler
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this), add && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10px'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_todo_card__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 5
  }, this);
}

_s(HomePage, "TxmQFP0ikrFhjSKbiFoRBlYwQ34=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfSVRFTSIsImlkIiwibmFtZSIsIkhvbWVQYWdlIiwidXNlU3RhdGUiLCJ0b2RvTGlzdCIsInNldFRvZG9MaXN0IiwiYWRkIiwic2V0QWRkIiwidXNlRWZmZWN0IiwiZmV0Y2hMaXN0SXRlbXMiLCJmZXRjaCIsInJlc3BvbnNlIiwib2siLCJqc29uIiwiY2FuZHlMaXN0SXRlbXMiLCJzZXRDYW5keUxpc3RJdGVtcyIsImNvbnNvbGUiLCJlcnJvciIsImFkZEJ1dHRvbkhuZGxlciIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIiwiY2xhc3NlcyIsImxpc3QiLCJtYXAiLCJpdGVtIiwid2lkdGgiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUcsQ0FDakI7QUFDSUMsSUFBRSxFQUFFLElBRFI7QUFFSUMsTUFBSSxFQUFFO0FBRlYsQ0FEaUIsRUFLakI7QUFDSUQsSUFBRSxFQUFFLElBRFI7QUFFSUMsTUFBSSxFQUFFO0FBRlYsQ0FMaUIsRUFTakI7QUFDSUQsSUFBRSxFQUFFLElBRFI7QUFFSUMsTUFBSSxFQUFFO0FBRlYsQ0FUaUIsQ0FBbkI7O0FBY0EsU0FBU0MsUUFBVCxHQUFtQjtBQUFBOztBQUFBOztBQUFBLGtCQUNlQyxzREFBUSxDQUFDSixVQUFELENBRHZCO0FBQUEsTUFDVkssUUFEVTtBQUFBLE1BQ0FDLFdBREE7O0FBQUEsbUJBRUtGLHNEQUFRLENBQUMsS0FBRCxDQUZiO0FBQUEsTUFFVkcsR0FGVTtBQUFBLE1BRUxDLE1BRks7O0FBSWpCQyxXQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLGNBQWM7QUFBQSxvVkFBRztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUVRQyxLQUFLLG1FQUZiOztBQUFBO0FBRVRDLHdCQUZTOztBQUFBLHFCQUdYQSxRQUFRLENBQUNDLEVBSEU7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSx1QkFJa0JELFFBQVEsQ0FBQ0UsSUFBVCxFQUpsQjs7QUFBQTtBQUlMQywrQkFKSztBQUtYO0FBQ0FDLGlDQUFpQixDQUFDRCxlQUFELENBQWpCOztBQU5XO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFTZkUsdUJBQU8sQ0FBQ0MsS0FBUixDQUFjLGlCQUFkOztBQVRlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQWRSLGNBQWM7QUFBQTtBQUFBO0FBQUEsT0FBcEI7O0FBYUFBLGtCQUFjO0FBQ2pCLEdBZlUsRUFlUixDQUFDSyxjQUFELENBZlEsQ0FBVDs7QUFnQkEsTUFBTUksZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFLO0FBQzNCWCxVQUFNLENBQUMsQ0FBQ0QsR0FBRixDQUFOO0FBQ0QsR0FGRDs7QUFHQSxzQkFDRSxxRUFBQyw4Q0FBRDtBQUFBLDRCQUNFO0FBQUssV0FBSyxFQUFFO0FBQUNhLGVBQU8sRUFBQyxNQUFUO0FBQWlCQyxrQkFBVSxFQUFDLFFBQTVCO0FBQXNDQyxzQkFBYyxFQUFDLFlBQXJEO0FBQW1FQyxrQkFBVSxFQUFDLE9BQTlFO0FBQXVGQyxpQkFBUyxFQUFDO0FBQWpHLE9BQVo7QUFBQSw2QkFDRTtBQUFJLGlCQUFTLEVBQUVDLHdEQUFPLENBQUNDLElBQXZCO0FBQUEsa0JBQ0tyQixRQUFRLENBQUNzQixHQUFULENBQWEsVUFBQ0MsSUFBRDtBQUFBLDhCQUNaLHFFQUFDLGtEQUFEO0FBRUUsY0FBRSxFQUFFQSxJQUFJLENBQUMzQixFQUZYO0FBR0UsZ0JBQUksRUFBRTJCLElBQUksQ0FBQzFCO0FBSGIsYUFDTzBCLElBQUksQ0FBQzNCLEVBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEWTtBQUFBLFNBQWI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBWUU7QUFBSyxXQUFLLEVBQUU7QUFBQ21CLGVBQU8sRUFBQyxNQUFUO0FBQWlCQyxrQkFBVSxFQUFDLFFBQTVCO0FBQXNDQyxzQkFBYyxFQUFDLFlBQXJEO0FBQW1FQyxrQkFBVSxFQUFDLE9BQTlFO0FBQXVGQyxpQkFBUyxFQUFDO0FBQWpHLE9BQVo7QUFBQSw2QkFDSSxxRUFBQyx5REFBRDtBQUFZLGFBQUssRUFBQyxLQUFsQjtBQUF3QixhQUFLLEVBQUU7QUFBQ0ssZUFBSyxFQUFFLE1BQVI7QUFBZ0JDLGdCQUFNLEVBQUU7QUFBeEIsU0FBL0I7QUFBZ0UsZUFBTyxFQUFFWDtBQUF6RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpGLEVBZUlaLEdBQUcsaUJBQUs7QUFBSyxXQUFLLEVBQUU7QUFBQ2EsZUFBTyxFQUFDLE1BQVQ7QUFBaUJDLGtCQUFVLEVBQUMsUUFBNUI7QUFBc0NDLHNCQUFjLEVBQUMsUUFBckQ7QUFBK0RFLGlCQUFTLEVBQUU7QUFBMUUsT0FBWjtBQUFBLDZCQUNSLHFFQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFxQkQ7O0dBNUNRckIsUTs7S0FBQUEsUTtBQTZDTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGZjMmNhNmVmNmU0ZDI3NjEwMDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRvZG9DYXJkIGZyb20gXCIuL3RvZG8tY2FyZFwiO1xuaW1wb3J0IHsgUnhGaWxlUGx1cyB9IGZyb20gXCJyZWFjdC1pY29ucy9yeFwiO1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gXCIuL3RvZG8tbGlzdFwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9pbmRleC5tb2R1bGUuY3NzJztcblxuY29uc3QgRFVNTVlfSVRFTSA9IFtcbiAge1xuICAgICAgaWQ6ICdtMScsXG4gICAgICBuYW1lOiAnQSBmaXJzdCBtZWV0dXAnLFxuICB9LFxuICB7XG4gICAgICBpZDogJ20yJyxcbiAgICAgIG5hbWU6ICdBIHNlY29uZCBtZWV0dXAnLFxuICB9LFxuICB7XG4gICAgICBpZDogJ20zJyxcbiAgICAgIG5hbWU6ICdBIHRoaXJkIG1lZXR1cCcsXG4gIH1cbl1cbmZ1bmN0aW9uIEhvbWVQYWdlKCl7XG4gIGNvbnN0IFt0b2RvTGlzdCwgc2V0VG9kb0xpc3RdID0gdXNlU3RhdGUoRFVNTVlfSVRFTSk7XG4gIGNvbnN0IFthZGQsIHNldEFkZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaExpc3RJdGVtcyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vY3J1ZGNydWQuY29tL2FwaS9lYjA5YWY3YTU1NGY0MzdiYTQ1OGRmYzZkMDRkNzI4MS9jYW5keWApO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FuZHlMaXN0SXRlbXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIGNhcnQgY29udGV4dCB3aXRoIGZldGNoZWQgY2FydCBpdGVtc1xuICAgICAgICAgICAgICAgIHNldENhbmR5TGlzdEl0ZW1zKGNhbmR5TGlzdEl0ZW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nOicsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaExpc3RJdGVtcygpO1xufSwgW2NhbmR5TGlzdEl0ZW1zXSk7XG4gIGNvbnN0IGFkZEJ1dHRvbkhuZGxlciA9ICgpID0+e1xuICAgIHNldEFkZCghYWRkKTtcbiAgfVxuICByZXR1cm4oXG4gICAgPEZyYWdtZW50PlxuICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLCBhbGlnbkl0ZW1zOidjZW50ZXInLCBqdXN0aWZ5Q29udGVudDonZmxleC1zdGFydCcsIG1hcmdpbkxlZnQ6JzIyMHB4JywgbWFyZ2luVG9wOicyMHB4J319PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9PlxuICAgICAgICAgICAge3RvZG9MaXN0Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8VG9kb0xpc3RcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgbmFtZT17aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JywgYWxpZ25JdGVtczonY2VudGVyJywganVzdGlmeUNvbnRlbnQ6J2ZsZXgtc3RhcnQnLCBtYXJnaW5MZWZ0OicyNTBweCcsIG1hcmdpblRvcDonMjBweCd9fT5cbiAgICAgICAgICA8UnhGaWxlUGx1cyBjb2xvcj1cInJlZFwiIHN0eWxlPXt7d2lkdGg6ICczMHB4JywgaGVpZ2h0OiAnMzBweCd9fSBvbkNsaWNrPXthZGRCdXR0b25IbmRsZXJ9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsgYWRkICYmICg8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsIGFsaWduSXRlbXM6J2NlbnRlcicsIGp1c3RpZnlDb250ZW50OidjZW50ZXInLCBtYXJnaW5Ub3A6ICcxMHB4J319PlxuICAgICAgICA8VG9kb0NhcmQgLz5cbiAgICAgIDwvZGl2Pil9XG4gICAgPC9GcmFnbWVudD5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==