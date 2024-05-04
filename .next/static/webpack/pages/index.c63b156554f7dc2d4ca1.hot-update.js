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
        var response, todoItems;
        return D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return fetch("https://crudcrud.com/api/4750e20b495744a1a7029e7947281f42/todo-input");

              case 3:
                response = _context.sent;

                if (!response.ok) {
                  _context.next = 9;
                  break;
                }

                _context.next = 7;
                return response.json();

              case 7:
                todoItems = _context.sent;
                // Update cart context with fetched cart items
                setTodoList(todoItems);

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
  }, [todoList]);

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
            lineNumber: 50,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
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
        lineNumber: 59,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
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
        lineNumber: 62,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfSVRFTSIsImlkIiwibmFtZSIsIkhvbWVQYWdlIiwidXNlU3RhdGUiLCJ0b2RvTGlzdCIsInNldFRvZG9MaXN0IiwiYWRkIiwic2V0QWRkIiwidXNlRWZmZWN0IiwiZmV0Y2hMaXN0SXRlbXMiLCJmZXRjaCIsInJlc3BvbnNlIiwib2siLCJqc29uIiwidG9kb0l0ZW1zIiwiY29uc29sZSIsImVycm9yIiwiYWRkQnV0dG9uSG5kbGVyIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Ub3AiLCJjbGFzc2VzIiwibGlzdCIsIm1hcCIsIml0ZW0iLCJ3aWR0aCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBRyxDQUNqQjtBQUNJQyxJQUFFLEVBQUUsSUFEUjtBQUVJQyxNQUFJLEVBQUU7QUFGVixDQURpQixFQUtqQjtBQUNJRCxJQUFFLEVBQUUsSUFEUjtBQUVJQyxNQUFJLEVBQUU7QUFGVixDQUxpQixFQVNqQjtBQUNJRCxJQUFFLEVBQUUsSUFEUjtBQUVJQyxNQUFJLEVBQUU7QUFGVixDQVRpQixDQUFuQjs7QUFjQSxTQUFTQyxRQUFULEdBQW1CO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ2VDLHNEQUFRLENBQUNKLFVBQUQsQ0FEdkI7QUFBQSxNQUNWSyxRQURVO0FBQUEsTUFDQUMsV0FEQTs7QUFBQSxtQkFFS0Ysc0RBQVEsQ0FBQyxLQUFELENBRmI7QUFBQSxNQUVWRyxHQUZVO0FBQUEsTUFFTEMsTUFGSzs7QUFJakJDLFdBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBTUMsY0FBYztBQUFBLG9WQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFFUUMsS0FBSyx3RUFGYjs7QUFBQTtBQUVUQyx3QkFGUzs7QUFBQSxxQkFHWEEsUUFBUSxDQUFDQyxFQUhFO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsdUJBSWFELFFBQVEsQ0FBQ0UsSUFBVCxFQUpiOztBQUFBO0FBSUxDLHlCQUpLO0FBS1g7QUFDQVQsMkJBQVcsQ0FBQ1MsU0FBRCxDQUFYOztBQU5XO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFTZkMsdUJBQU8sQ0FBQ0MsS0FBUixDQUFjLGlCQUFkOztBQVRlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQWRQLGNBQWM7QUFBQTtBQUFBO0FBQUEsT0FBcEI7O0FBYUFBLGtCQUFjO0FBQ2pCLEdBZlEsRUFlTixDQUFDTCxRQUFELENBZk0sQ0FBVDs7QUFpQkEsTUFBTWEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFLO0FBQzNCVixVQUFNLENBQUMsQ0FBQ0QsR0FBRixDQUFOO0FBQ0QsR0FGRDs7QUFHQSxzQkFDRSxxRUFBQyw4Q0FBRDtBQUFBLDRCQUNFO0FBQUssV0FBSyxFQUFFO0FBQUNZLGVBQU8sRUFBQyxNQUFUO0FBQWlCQyxrQkFBVSxFQUFDLFFBQTVCO0FBQXNDQyxzQkFBYyxFQUFDLFlBQXJEO0FBQW1FQyxrQkFBVSxFQUFDLE9BQTlFO0FBQXVGQyxpQkFBUyxFQUFDO0FBQWpHLE9BQVo7QUFBQSw2QkFDRTtBQUFJLGlCQUFTLEVBQUVDLHdEQUFPLENBQUNDLElBQXZCO0FBQUEsa0JBQ0twQixRQUFRLENBQUNxQixHQUFULENBQWEsVUFBQ0MsSUFBRDtBQUFBLDhCQUNaLHFFQUFDLGtEQUFEO0FBRUUsY0FBRSxFQUFFQSxJQUFJLENBQUMxQixFQUZYO0FBR0UsZ0JBQUksRUFBRTBCLElBQUksQ0FBQ3pCO0FBSGIsYUFDT3lCLElBQUksQ0FBQzFCLEVBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEWTtBQUFBLFNBQWI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBWUU7QUFBSyxXQUFLLEVBQUU7QUFBQ2tCLGVBQU8sRUFBQyxNQUFUO0FBQWlCQyxrQkFBVSxFQUFDLFFBQTVCO0FBQXNDQyxzQkFBYyxFQUFDLFlBQXJEO0FBQW1FQyxrQkFBVSxFQUFDLE9BQTlFO0FBQXVGQyxpQkFBUyxFQUFDO0FBQWpHLE9BQVo7QUFBQSw2QkFDSSxxRUFBQyx5REFBRDtBQUFZLGFBQUssRUFBQyxLQUFsQjtBQUF3QixhQUFLLEVBQUU7QUFBQ0ssZUFBSyxFQUFFLE1BQVI7QUFBZ0JDLGdCQUFNLEVBQUU7QUFBeEIsU0FBL0I7QUFBZ0UsZUFBTyxFQUFFWDtBQUF6RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpGLEVBZUlYLEdBQUcsaUJBQUs7QUFBSyxXQUFLLEVBQUU7QUFBQ1ksZUFBTyxFQUFDLE1BQVQ7QUFBaUJDLGtCQUFVLEVBQUMsUUFBNUI7QUFBc0NDLHNCQUFjLEVBQUMsUUFBckQ7QUFBK0RFLGlCQUFTLEVBQUU7QUFBMUUsT0FBWjtBQUFBLDZCQUNSLHFFQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFxQkQ7O0dBN0NRcEIsUTs7S0FBQUEsUTtBQThDTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzYzYjE1NjU1NGY3ZGMyZDRjYTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRvZG9DYXJkIGZyb20gXCIuL3RvZG8tY2FyZFwiO1xuaW1wb3J0IHsgUnhGaWxlUGx1cyB9IGZyb20gXCJyZWFjdC1pY29ucy9yeFwiO1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gXCIuL3RvZG8tbGlzdFwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9pbmRleC5tb2R1bGUuY3NzJztcblxuY29uc3QgRFVNTVlfSVRFTSA9IFtcbiAge1xuICAgICAgaWQ6ICdtMScsXG4gICAgICBuYW1lOiAnQSBmaXJzdCBtZWV0dXAnLFxuICB9LFxuICB7XG4gICAgICBpZDogJ20yJyxcbiAgICAgIG5hbWU6ICdBIHNlY29uZCBtZWV0dXAnLFxuICB9LFxuICB7XG4gICAgICBpZDogJ20zJyxcbiAgICAgIG5hbWU6ICdBIHRoaXJkIG1lZXR1cCcsXG4gIH1cbl1cbmZ1bmN0aW9uIEhvbWVQYWdlKCl7XG4gIGNvbnN0IFt0b2RvTGlzdCwgc2V0VG9kb0xpc3RdID0gdXNlU3RhdGUoRFVNTVlfSVRFTSk7XG4gIGNvbnN0IFthZGQsIHNldEFkZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnN0IGZldGNoTGlzdEl0ZW1zID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vY3J1ZGNydWQuY29tL2FwaS80NzUwZTIwYjQ5NTc0NGExYTcwMjllNzk0NzI4MWY0Mi90b2RvLWlucHV0YCk7XG4gICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0l0ZW1zID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgICAgLy8gVXBkYXRlIGNhcnQgY29udGV4dCB3aXRoIGZldGNoZWQgY2FydCBpdGVtc1xuICAgICAgICAgICAgICAgICAgc2V0VG9kb0xpc3QodG9kb0l0ZW1zKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nOicsIGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBmZXRjaExpc3RJdGVtcygpO1xuICB9LCBbdG9kb0xpc3RdKTtcblxuICBjb25zdCBhZGRCdXR0b25IbmRsZXIgPSAoKSA9PntcbiAgICBzZXRBZGQoIWFkZCk7XG4gIH1cbiAgcmV0dXJuKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JywgYWxpZ25JdGVtczonY2VudGVyJywganVzdGlmeUNvbnRlbnQ6J2ZsZXgtc3RhcnQnLCBtYXJnaW5MZWZ0OicyMjBweCcsIG1hcmdpblRvcDonMjBweCd9fT5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0fT5cbiAgICAgICAgICAgIHt0b2RvTGlzdC5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgPFRvZG9MaXN0XG4gICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgIGlkPXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgIG5hbWU9e2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsIGFsaWduSXRlbXM6J2NlbnRlcicsIGp1c3RpZnlDb250ZW50OidmbGV4LXN0YXJ0JywgbWFyZ2luTGVmdDonMjUwcHgnLCBtYXJnaW5Ub3A6JzIwcHgnfX0+XG4gICAgICAgICAgPFJ4RmlsZVBsdXMgY29sb3I9XCJyZWRcIiBzdHlsZT17e3dpZHRoOiAnMzBweCcsIGhlaWdodDogJzMwcHgnfX0gb25DbGljaz17YWRkQnV0dG9uSG5kbGVyfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICB7IGFkZCAmJiAoPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLCBhbGlnbkl0ZW1zOidjZW50ZXInLCBqdXN0aWZ5Q29udGVudDonY2VudGVyJywgbWFyZ2luVG9wOiAnMTBweCd9fT5cbiAgICAgICAgPFRvZG9DYXJkIC8+XG4gICAgICA8L2Rpdj4pfVxuICAgIDwvRnJhZ21lbnQ+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=