module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./colors.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export backGroundOrange */
/* unused harmony export backGroundGrey */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return backGroundBlue; });
/* unused harmony export backGroundGreen */
var backGroundOrange = '#F4511E';
var backGroundGrey = '#546E7A';
var backGroundBlue = '#1B6B9B';
var backGroundGreen = '#7CDC1B';

/***/ }),

/***/ "./components/tool-tip.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_popover__ = __webpack_require__("react-popover");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_popover___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_popover__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsxFileName = '/Users/qianghuang/react-sudoku-game/components/tool-tip.js';


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var HelpIcon = function HelpIcon(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'svg',
    props,
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', {
      d: 'M231.2 336.033c-9.35 0-17 7.65-17 17v11.333c0 9.35 7.65 17 17 17s17-7.65 17-17v-11.333c0-9.35-7.65-17-17-17z'
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', {
      d: 'M236.867 473.733c130.617 0 236.867-106.25 236.867-236.867S367.483 0 236.867 0 0 106.25 0 236.867s106.25 236.866 236.867 236.866zm0-439.733c111.917 0 202.867 90.95 202.867 202.867s-90.95 202.867-202.867 202.867S34 348.783 34 236.867 124.95 34 236.867 34z'
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', {
      d: 'M163.2 194.367c.283 0 .283 0 0 0 9.35 0 17-7.083 17-16.433 0 0 .283-13.6 7.083-26.917 8.5-17 23.517-25.5 45.617-25.5 20.683 0 35.983 5.667 44.483 16.717 7.083 9.067 9.067 21.533 5.667 35.133-4.25 16.717-18.7 31.167-32.583 45.333-17 17.567-34.85 35.417-34.85 59.5 0 9.35 7.65 17 17 17s17-7.65 17-17c0-10.2 12.183-22.667 25.217-35.7 16.15-16.433 34.567-35.133 41.083-60.633 6.233-23.517 1.983-47.033-11.617-64.317-10.483-13.6-31.45-30.033-71.117-30.033-44.483 0-65.733 23.8-75.933 44.2-10.2 20.4-10.767 39.95-10.767 42.217 0 9.066 7.367 16.433 16.717 16.433z'
    })
  );
};

HelpIcon.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 473.733 473.733'
};


var TipCopy = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
  'div',
  {
    className: 'jsx-289995913' + ' ' + 'tip-copy',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  },
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    {
      className: 'jsx-289995913' + ' ' + 'tip-line',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'b',
      {
        className: 'jsx-289995913',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      'Select:'
    ),
    ' Click a cell'
  ),
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    {
      className: 'jsx-289995913' + ' ' + 'tip-line',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'b',
      {
        className: 'jsx-289995913',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      },
      'Assign Number:'
    ),
    ' Single click on desired number control'
  ),
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    {
      className: 'jsx-289995913',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'b',
      {
        className: 'jsx-289995913',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      },
      'Tag Number as Note:'
    ),
    ' Double click on the desired number control'
  ),
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: '289995913',
    css: '.tip-copy.jsx-289995913{font-size:1.2em;}.tip-line.jsx-289995913{margin-bottom:.4em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdG9vbC10aXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVWdCLEFBRzZCLEFBR0csZ0JBRnZCLEdBR0EiLCJmaWxlIjoiY29tcG9uZW50cy90b29sLXRpcC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcWlhbmdodWFuZy9yZWFjdC1zdWRva3UtZ2FtZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUG9wb3ZlciBmcm9tICdyZWFjdC1wb3BvdmVyJztcbmltcG9ydCBIZWxwSWNvbiBmcm9tICcuLi9zdmcvaGVscC5zdmcnO1xuXG5jb25zdCBUaXBDb3B5ID0gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInRpcC1jb3B5XCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0aXAtbGluZVwiPjxiPlNlbGVjdDo8L2I+IENsaWNrIGEgY2VsbDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGlwLWxpbmVcIj48Yj5Bc3NpZ24gTnVtYmVyOjwvYj4gU2luZ2xlIGNsaWNrIG9uIGRlc2lyZWQgbnVtYmVyIGNvbnRyb2w8L2Rpdj5cbiAgICA8ZGl2PjxiPlRhZyBOdW1iZXIgYXMgTm90ZTo8L2I+IERvdWJsZSBjbGljayBvbiB0aGUgZGVzaXJlZCBudW1iZXIgY29udHJvbDwvZGl2PlxuICAgIHsgLyogbGFuZ3VhZ2U9Q1NTICovIH1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC50aXAtY29weSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICB9XG4gICAgICAgIC50aXAtbGluZSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAuNGVtO1xuICAgICAgICB9XG4gICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L2Rpdj5cbilcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaXAgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRlID0ge31cbiAgICB0b2dnbGVPcGVuID0gKGV2ZW50KSA9PiB7XG4gICAgICAvLyBUaGlzIHByZXZlbnRzIGdob3N0IGNsaWNrLlxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiAhdGhpcy5zdGF0ZS5vcGVuIH0pO1xuICAgIH1cblxuICAgIGNsb3NlID0gKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IGZhbHNlIH0pO1xuICAgIH1cblxuICAgIG9wZW4gPSAoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFBvcG92ZXJcbiAgICAgICAgICBpc09wZW49e3RoaXMuc3RhdGUub3Blbn1cbiAgICAgICAgICBwcmVmZXJQbGFjZT1cImJlbG93XCJcbiAgICAgICAgICBib2R5PXtUaXBDb3B5fVxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnOTB2dycsIG1heFdpZHRoOiAnNDBlbScgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlT3Blbn1cbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5vcGVufVxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmNsb3NlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxIZWxwSWNvbiBjbGFzc05hbWU9XCJpY29uXCIgLz5cbiAgICAgICAgICAgIHsgLyogbGFuZ3VhZ2U9Q1NTICovIH1cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICA6Z2xvYmFsKC5pY29uKSB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMS4yNWVtO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICk7XG4gICAgfVxufVxuIl19 */\n/*@ sourceURL=components/tool-tip.js */'
  })
);

var Tip = function (_Component) {
  _inherits(Tip, _Component);

  function Tip() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tip);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tip.__proto__ || Object.getPrototypeOf(Tip)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.toggleOpen = function (event) {
      // This prevents ghost click.
      event.preventDefault();
      _this.setState({ open: !_this.state.open });
    }, _this.close = function () {
      _this.setState({ open: false });
    }, _this.open = function () {
      _this.setState({ open: true });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tip, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_react_popover___default.a,
        {
          isOpen: this.state.open,
          preferPlace: 'below',
          body: TipCopy,
          style: { width: '90vw', maxWidth: '40em' },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            onClick: this.toggleOpen,
            onMouseEnter: this.open,
            onMouseLeave: this.close,
            className: 'jsx-2314980512',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(HelpIcon, { className: 'icon', __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
            styleId: '2314980512',
            css: '.icon{height:1.25em;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdG9vbC10aXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUR3QixBQUdtQyxjQUNDLGVBQ25CIiwiZmlsZSI6ImNvbXBvbmVudHMvdG9vbC10aXAuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3FpYW5naHVhbmcvcmVhY3Qtc3Vkb2t1LWdhbWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBvcG92ZXIgZnJvbSAncmVhY3QtcG9wb3Zlcic7XG5pbXBvcnQgSGVscEljb24gZnJvbSAnLi4vc3ZnL2hlbHAuc3ZnJztcblxuY29uc3QgVGlwQ29weSA9IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ0aXAtY29weVwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGlwLWxpbmVcIj48Yj5TZWxlY3Q6PC9iPiBDbGljayBhIGNlbGw8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRpcC1saW5lXCI+PGI+QXNzaWduIE51bWJlcjo8L2I+IFNpbmdsZSBjbGljayBvbiBkZXNpcmVkIG51bWJlciBjb250cm9sPC9kaXY+XG4gICAgPGRpdj48Yj5UYWcgTnVtYmVyIGFzIE5vdGU6PC9iPiBEb3VibGUgY2xpY2sgb24gdGhlIGRlc2lyZWQgbnVtYmVyIGNvbnRyb2w8L2Rpdj5cbiAgICB7IC8qIGxhbmd1YWdlPUNTUyAqLyB9XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAudGlwLWNvcHkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgfVxuICAgICAgICAudGlwLWxpbmUge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLjRlbTtcbiAgICAgICAgfVxuICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHt9XG4gICAgdG9nZ2xlT3BlbiA9IChldmVudCkgPT4ge1xuICAgICAgLy8gVGhpcyBwcmV2ZW50cyBnaG9zdCBjbGljay5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogIXRoaXMuc3RhdGUub3BlbiB9KTtcbiAgICB9XG5cbiAgICBjbG9zZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiBmYWxzZSB9KTtcbiAgICB9XG5cbiAgICBvcGVuID0gKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IHRydWUgfSk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxQb3BvdmVyXG4gICAgICAgICAgaXNPcGVuPXt0aGlzLnN0YXRlLm9wZW59XG4gICAgICAgICAgcHJlZmVyUGxhY2U9XCJiZWxvd1wiXG4gICAgICAgICAgYm9keT17VGlwQ29weX1cbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzkwdncnLCBtYXhXaWR0aDogJzQwZW0nIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZU9wZW59XG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMub3Blbn1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5jbG9zZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SGVscEljb24gY2xhc3NOYW1lPVwiaWNvblwiIC8+XG4gICAgICAgICAgICB7IC8qIGxhbmd1YWdlPUNTUyAqLyB9XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgOmdsb2JhbCguaWNvbikge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuMjVlbTtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1BvcG92ZXI+XG4gICAgICApO1xuICAgIH1cbn1cbiJdfQ== */\n/*@ sourceURL=components/tool-tip.js */'
          })
        )
      );
    }
  }]);

  return Tip;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Tip);

/***/ }),

/***/ "./input-range-style.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__("./colors.js");



// eslint-disable-next-line no-lone-blocks
// eslint-disable-next-line import/no-extraneous-dependencies
{/* language=CSS */}
var Style = new String(".input-range__slider{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:#3f51b5;border:1px solid #3f51b5;border-radius:100%;cursor:pointer;display:block;height:1rem;margin-left:-0.5rem;margin-top:-0.65rem;outline:none;position:absolute;top:50%;-webkit-transition:-webkit-transform 0.3s ease-out,box-shadow 0.3s ease-out;-webkit-transition:transform 0.3s ease-out,box-shadow 0.3s ease-out;transition:transform 0.3s ease-out,box-shadow 0.3s ease-out;width:1rem;}.input-range__slider:active{-webkit-transform:scale(1.3);-ms-transform:scale(1.3);transform:scale(1.3);}.input-range__slider:focus{box-shadow:0 0 0 5px rgba(63,81,181,0.2);}.input-range--disabled .input-range__slider{background:#cccccc;border:1px solid #cccccc;box-shadow:none;-webkit-transform:none;-ms-transform:none;transform:none;}.input-range__slider-container{-webkit-transition:left 0.3s ease-out;transition:left 0.3s ease-out;}.input-range__label{color:#aaaaaa;font-size:0.8rem;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);white-space:nowrap;}.input-range__label--min,.input-range__label--max{bottom:-1.4rem;position:absolute;}.input-range__label--min{left:0;}.input-range__label--max{right:0;}.input-range__label--value{position:absolute;top:-1.8rem;}.input-range__label-container{left:-50%;position:relative;}.input-range__label--max .input-range__label-container{left:50%;}.input-range__track{background:#eeeeee;border-radius:0.3rem;cursor:pointer;display:block;height:0.3rem;position:relative;-webkit-transition:left 0.3s ease-out,width 0.3s ease-out;transition:left 0.3s ease-out,width 0.3s ease-out;}.input-range--disabled .input-range__track{background:#eeeeee;}.input-range__track--background{left:0;margin-top:-0.15rem;position:absolute;right:0;top:50%;}.input-range__track--active{background:#3f51b5;}.input-range{height:1rem;position:relative;margin-top:1.2em;margin-bottom:1.4em;}.Popover{z-index:2000;}.Popover-body{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:.5rem 1rem;background:white;border-radius:0.3rem;opacity:.95;box-shadow:rgba(0,0,0,0.12) 0 1px 6px,rgba(0,0,0,0.12) 0 1px 4px;font-size:14px;}.Popover-tipShape{fill:" + __WEBPACK_IMPORTED_MODULE_0__colors__["a" /* backGroundBlue */] + ";}.Popover-white .Popover-tipShape{fill:#00bcd4;}.Popover-white .Popover-body{background:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LXJhbmdlLXN0eWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1pQixBQUdtQixBQWVPLEFBRXVCLEFBRXpCLEFBTVMsQUFHaEIsQUFPQyxBQUlSLEFBR0MsQUFHVSxBQUlSLEFBR0MsQUFHUSxBQVFFLEFBR2QsQUFPWSxBQUdQLEFBT0csQUFHTyxBQVdjLEFBSXJCLEFBSUksT0FsRVgsQUE0QlksQ0F6QlgsQ0FVRyxDQUZNLEVBMkJBLENBT3BCLEFBa0JBLENBekVtQixDQU9DLEVBc0VwQixDQTVEYyxDQTFCZSxBQW9DTixBQU9DLEFBVUYsUUFMRixDQWxCQyxFQUpOLEFBZ0NJLENBaERPLEVBTUwsQ0E4RHJCLE1BekNpQixDQXhDZ0MsR0FJN0IsQ0FnRFYsRUFVWSxNQVRaLEVBWk0sS0FwQ0csQ0FyQkUsQUFxRVYsTUFVWCxDQXZEaUMsQ0FrQ2pCLE1BNUNVLEtBYkMsR0EwRFAsa0JBQ2lDLENBMEIzQixHQXBGTCxVQTRCQSxFQVRELE9BbEJILFVBMkJLLEtBMUJOLGNBQ0YsWUFDUSxlQWlGQyxLQWhGRCxjQWlGRCxNQWhGTixJQW9EdUMsT0E2QjdCLEVBaEZMLGtCQUNWLENBZ0ZNLE9BL0UrQyxLQWdGYSxpRUFDekQsZUFDbkIsdUhBakZhLFdBQUMiLCJmaWxlIjoiaW5wdXQtcmFuZ2Utc3R5bGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3FpYW5naHVhbmcvcmVhY3Qtc3Vkb2t1LWdhbWUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5pbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcbmltcG9ydCB7YmFja0dyb3VuZEJsdWV9IGZyb20gXCIuL2NvbG9yc1wiO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9uZS1ibG9ja3NcbnsgLyogbGFuZ3VhZ2U9Q1NTICovIH1cbmNvbnN0IFN0eWxlID0gY3NzYFxuLmlucHV0LXJhbmdlX19zbGlkZXIge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjM2Y1MWI1O1xuICBib3JkZXI6IDFweCBzb2xpZCAjM2Y1MWI1O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDFyZW07XG4gIG1hcmdpbi1sZWZ0OiAtMC41cmVtO1xuICBtYXJnaW4tdG9wOiAtMC42NXJlbTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1vdXQsIGJveC1zaGFkb3cgMC4zcyBlYXNlLW91dDtcbiAgd2lkdGg6IDFyZW07IH1cbiAgLmlucHV0LXJhbmdlX19zbGlkZXI6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7IH1cbiAgLmlucHV0LXJhbmdlX19zbGlkZXI6Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDVweCByZ2JhKDYzLCA4MSwgMTgxLCAwLjIpOyB9XG4gIC5pbnB1dC1yYW5nZS0tZGlzYWJsZWQgLmlucHV0LXJhbmdlX19zbGlkZXIge1xuICAgIGJhY2tncm91bmQ6ICNjY2NjY2M7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIHRyYW5zZm9ybTogbm9uZTsgfVxuXG4uaW5wdXQtcmFuZ2VfX3NsaWRlci1jb250YWluZXIge1xuICB0cmFuc2l0aW9uOiBsZWZ0IDAuM3MgZWFzZS1vdXQ7IH1cblxuLmlucHV0LXJhbmdlX19sYWJlbCB7XG4gIGNvbG9yOiAjYWFhYWFhO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG5cbi5pbnB1dC1yYW5nZV9fbGFiZWwtLW1pbixcbi5pbnB1dC1yYW5nZV9fbGFiZWwtLW1heCB7XG4gIGJvdHRvbTogLTEuNHJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlOyB9XG5cbi5pbnB1dC1yYW5nZV9fbGFiZWwtLW1pbiB7XG4gIGxlZnQ6IDA7IH1cblxuLmlucHV0LXJhbmdlX19sYWJlbC0tbWF4IHtcbiAgcmlnaHQ6IDA7IH1cblxuLmlucHV0LXJhbmdlX19sYWJlbC0tdmFsdWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTEuOHJlbTsgfVxuXG4uaW5wdXQtcmFuZ2VfX2xhYmVsLWNvbnRhaW5lciB7XG4gIGxlZnQ6IC01MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAuaW5wdXQtcmFuZ2VfX2xhYmVsLS1tYXggLmlucHV0LXJhbmdlX19sYWJlbC1jb250YWluZXIge1xuICAgIGxlZnQ6IDUwJTsgfVxuXG4uaW5wdXQtcmFuZ2VfX3RyYWNrIHtcbiAgYmFja2dyb3VuZDogI2VlZWVlZTtcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDAuM3JlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBsZWZ0IDAuM3MgZWFzZS1vdXQsIHdpZHRoIDAuM3MgZWFzZS1vdXQ7IH1cbiAgLmlucHV0LXJhbmdlLS1kaXNhYmxlZCAuaW5wdXQtcmFuZ2VfX3RyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlZWVlOyB9XG5cbi5pbnB1dC1yYW5nZV9fdHJhY2stLWJhY2tncm91bmQge1xuICBsZWZ0OiAwO1xuICBtYXJnaW4tdG9wOiAtMC4xNXJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7IH1cblxuLmlucHV0LXJhbmdlX190cmFjay0tYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzNmNTFiNTsgfVxuXG4uaW5wdXQtcmFuZ2Uge1xuICBoZWlnaHQ6IDFyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMS4yZW07XG4gIG1hcmdpbi1ib3R0b206IDEuNGVtO1xufVxuICBcbi5Qb3BvdmVyIHtcbiAgICB6LWluZGV4OiAyMDAwO1xufVxuLlBvcG92ZXItYm9keSB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcbiAgICBvcGFjaXR5OiAuOTU7XG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEyKSAwIDFweCA2cHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMCAxcHggNHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLlBvcG92ZXItdGlwU2hhcGUge1xuICAgIGZpbGw6ICR7YmFja0dyb3VuZEJsdWV9O1xufVxuXG4uUG9wb3Zlci13aGl0ZSAuUG9wb3Zlci10aXBTaGFwZSB7XG4gICAgZmlsbDogIzAwYmNkNDtcbn1cblxuLlBvcG92ZXItd2hpdGUgLlBvcG92ZXItYm9keSB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4gIGA7XG5cbmV4cG9ydCBkZWZhdWx0IFN0eWxlO1xuIl19 */\n/*@ sourceURL=input-range-style.js */");

Style.__hash = "2208778758";
Style.__scoped = ".input-range__slider.jsx-821553959{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:#3f51b5;border:1px solid #3f51b5;border-radius:100%;cursor:pointer;display:block;height:1rem;margin-left:-0.5rem;margin-top:-0.65rem;outline:none;position:absolute;top:50%;-webkit-transition:-webkit-transform 0.3s ease-out,box-shadow 0.3s ease-out;-webkit-transition:transform 0.3s ease-out,box-shadow 0.3s ease-out;transition:transform 0.3s ease-out,box-shadow 0.3s ease-out;width:1rem;}.input-range__slider.jsx-821553959:active{-webkit-transform:scale(1.3);-ms-transform:scale(1.3);transform:scale(1.3);}.input-range__slider.jsx-821553959:focus{box-shadow:0 0 0 5px rgba(63,81,181,0.2);}.input-range--disabled.jsx-821553959 .input-range__slider.jsx-821553959{background:#cccccc;border:1px solid #cccccc;box-shadow:none;-webkit-transform:none;-ms-transform:none;transform:none;}.input-range__slider-container.jsx-821553959{-webkit-transition:left 0.3s ease-out;transition:left 0.3s ease-out;}.input-range__label.jsx-821553959{color:#aaaaaa;font-size:0.8rem;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);white-space:nowrap;}.input-range__label--min.jsx-821553959,.input-range__label--max.jsx-821553959{bottom:-1.4rem;position:absolute;}.input-range__label--min.jsx-821553959{left:0;}.input-range__label--max.jsx-821553959{right:0;}.input-range__label--value.jsx-821553959{position:absolute;top:-1.8rem;}.input-range__label-container.jsx-821553959{left:-50%;position:relative;}.input-range__label--max.jsx-821553959 .input-range__label-container.jsx-821553959{left:50%;}.input-range__track.jsx-821553959{background:#eeeeee;border-radius:0.3rem;cursor:pointer;display:block;height:0.3rem;position:relative;-webkit-transition:left 0.3s ease-out,width 0.3s ease-out;transition:left 0.3s ease-out,width 0.3s ease-out;}.input-range--disabled.jsx-821553959 .input-range__track.jsx-821553959{background:#eeeeee;}.input-range__track--background.jsx-821553959{left:0;margin-top:-0.15rem;position:absolute;right:0;top:50%;}.input-range__track--active.jsx-821553959{background:#3f51b5;}.input-range.jsx-821553959{height:1rem;position:relative;margin-top:1.2em;margin-bottom:1.4em;}.Popover.jsx-821553959{z-index:2000;}.Popover-body.jsx-821553959{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:.5rem 1rem;background:white;border-radius:0.3rem;opacity:.95;box-shadow:rgba(0,0,0,0.12) 0 1px 6px,rgba(0,0,0,0.12) 0 1px 4px;font-size:14px;}.Popover-tipShape.jsx-821553959{fill:" + __WEBPACK_IMPORTED_MODULE_0__colors__["a" /* backGroundBlue */] + ";}.Popover-white.jsx-821553959 .Popover-tipShape.jsx-821553959{fill:#00bcd4;}.Popover-white.jsx-821553959 .Popover-body.jsx-821553959{background:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LXJhbmdlLXN0eWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1pQixBQUdtQixBQWVPLEFBRXVCLEFBRXpCLEFBTVMsQUFHaEIsQUFPQyxBQUlSLEFBR0MsQUFHVSxBQUlSLEFBR0MsQUFHUSxBQVFFLEFBR2QsQUFPWSxBQUdQLEFBT0csQUFHTyxBQVdjLEFBSXJCLEFBSUksT0FsRVgsQUE0QlksQ0F6QlgsQ0FVRyxDQUZNLEVBMkJBLENBT3BCLEFBa0JBLENBekVtQixDQU9DLEVBc0VwQixDQTVEYyxDQTFCZSxBQW9DTixBQU9DLEFBVUYsUUFMRixDQWxCQyxFQUpOLEFBZ0NJLENBaERPLEVBTUwsQ0E4RHJCLE1BekNpQixDQXhDZ0MsR0FJN0IsQ0FnRFYsRUFVWSxNQVRaLEVBWk0sS0FwQ0csQ0FyQkUsQUFxRVYsTUFVWCxDQXZEaUMsQ0FrQ2pCLE1BNUNVLEtBYkMsR0EwRFAsa0JBQ2lDLENBMEIzQixHQXBGTCxVQTRCQSxFQVRELE9BbEJILFVBMkJLLEtBMUJOLGNBQ0YsWUFDUSxlQWlGQyxLQWhGRCxjQWlGRCxNQWhGTixJQW9EdUMsT0E2QjdCLEVBaEZMLGtCQUNWLENBZ0ZNLE9BL0UrQyxLQWdGYSxpRUFDekQsZUFDbkIsdUhBakZhLFdBQUMiLCJmaWxlIjoiaW5wdXQtcmFuZ2Utc3R5bGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3FpYW5naHVhbmcvcmVhY3Qtc3Vkb2t1LWdhbWUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5pbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcbmltcG9ydCB7YmFja0dyb3VuZEJsdWV9IGZyb20gXCIuL2NvbG9yc1wiO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9uZS1ibG9ja3NcbnsgLyogbGFuZ3VhZ2U9Q1NTICovIH1cbmNvbnN0IFN0eWxlID0gY3NzYFxuLmlucHV0LXJhbmdlX19zbGlkZXIge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjM2Y1MWI1O1xuICBib3JkZXI6IDFweCBzb2xpZCAjM2Y1MWI1O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDFyZW07XG4gIG1hcmdpbi1sZWZ0OiAtMC41cmVtO1xuICBtYXJnaW4tdG9wOiAtMC42NXJlbTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1vdXQsIGJveC1zaGFkb3cgMC4zcyBlYXNlLW91dDtcbiAgd2lkdGg6IDFyZW07IH1cbiAgLmlucHV0LXJhbmdlX19zbGlkZXI6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7IH1cbiAgLmlucHV0LXJhbmdlX19zbGlkZXI6Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDVweCByZ2JhKDYzLCA4MSwgMTgxLCAwLjIpOyB9XG4gIC5pbnB1dC1yYW5nZS0tZGlzYWJsZWQgLmlucHV0LXJhbmdlX19zbGlkZXIge1xuICAgIGJhY2tncm91bmQ6ICNjY2NjY2M7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIHRyYW5zZm9ybTogbm9uZTsgfVxuXG4uaW5wdXQtcmFuZ2VfX3NsaWRlci1jb250YWluZXIge1xuICB0cmFuc2l0aW9uOiBsZWZ0IDAuM3MgZWFzZS1vdXQ7IH1cblxuLmlucHV0LXJhbmdlX19sYWJlbCB7XG4gIGNvbG9yOiAjYWFhYWFhO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG5cbi5pbnB1dC1yYW5nZV9fbGFiZWwtLW1pbixcbi5pbnB1dC1yYW5nZV9fbGFiZWwtLW1heCB7XG4gIGJvdHRvbTogLTEuNHJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlOyB9XG5cbi5pbnB1dC1yYW5nZV9fbGFiZWwtLW1pbiB7XG4gIGxlZnQ6IDA7IH1cblxuLmlucHV0LXJhbmdlX19sYWJlbC0tbWF4IHtcbiAgcmlnaHQ6IDA7IH1cblxuLmlucHV0LXJhbmdlX19sYWJlbC0tdmFsdWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTEuOHJlbTsgfVxuXG4uaW5wdXQtcmFuZ2VfX2xhYmVsLWNvbnRhaW5lciB7XG4gIGxlZnQ6IC01MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAuaW5wdXQtcmFuZ2VfX2xhYmVsLS1tYXggLmlucHV0LXJhbmdlX19sYWJlbC1jb250YWluZXIge1xuICAgIGxlZnQ6IDUwJTsgfVxuXG4uaW5wdXQtcmFuZ2VfX3RyYWNrIHtcbiAgYmFja2dyb3VuZDogI2VlZWVlZTtcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDAuM3JlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBsZWZ0IDAuM3MgZWFzZS1vdXQsIHdpZHRoIDAuM3MgZWFzZS1vdXQ7IH1cbiAgLmlucHV0LXJhbmdlLS1kaXNhYmxlZCAuaW5wdXQtcmFuZ2VfX3RyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlZWVlOyB9XG5cbi5pbnB1dC1yYW5nZV9fdHJhY2stLWJhY2tncm91bmQge1xuICBsZWZ0OiAwO1xuICBtYXJnaW4tdG9wOiAtMC4xNXJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7IH1cblxuLmlucHV0LXJhbmdlX190cmFjay0tYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzNmNTFiNTsgfVxuXG4uaW5wdXQtcmFuZ2Uge1xuICBoZWlnaHQ6IDFyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMS4yZW07XG4gIG1hcmdpbi1ib3R0b206IDEuNGVtO1xufVxuICBcbi5Qb3BvdmVyIHtcbiAgICB6LWluZGV4OiAyMDAwO1xufVxuLlBvcG92ZXItYm9keSB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcbiAgICBvcGFjaXR5OiAuOTU7XG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEyKSAwIDFweCA2cHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMCAxcHggNHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLlBvcG92ZXItdGlwU2hhcGUge1xuICAgIGZpbGw6ICR7YmFja0dyb3VuZEJsdWV9O1xufVxuXG4uUG9wb3Zlci13aGl0ZSAuUG9wb3Zlci10aXBTaGFwZSB7XG4gICAgZmlsbDogIzAwYmNkNDtcbn1cblxuLlBvcG92ZXItd2hpdGUgLlBvcG92ZXItYm9keSB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4gIGA7XG5cbmV4cG9ydCBkZWZhdWx0IFN0eWxlO1xuIl19 */\n/*@ sourceURL=input-range-style.js */";
Style.__scopedHash = "821553959";
/* harmony default export */ __webpack_exports__["a"] = (Style);

/***/ }),

/***/ "./pages/Actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
var _jsxFileName = '/Users/qianghuang/react-sudoku-game/pages/Actions.js';

/* eslint-disable react/forbid-prop-types */
/* eslint-disable max-len */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable arrow-parens */
/* eslint-disable react/jsx-indent */
/* eslint-disable object-curly-newline */
/* eslint-disable indent */
/* eslint-disable no-tabs */
/* eslint-disable jsx-a11y/accessible-emoji */



// eslint-disable-next-line import/no-extraneous-dependencies

var LoupeIcon = function LoupeIcon(props) {
	return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
		'svg',
		props,
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', {
			d: 'M457.602 54.355c-72.417-72.416-190.245-72.416-262.661 0-35.081 35.079-54.399 81.721-54.399 131.331 0 45.193 16.039 87.917 45.413 121.688l-22.119 22.119-22.542-22.542a13.173 13.173 0 0 0-18.628 0L17.055 412.563C6.057 423.559 0 438.18 0 453.733c0 15.552 6.057 30.174 17.053 41.17 10.998 10.998 25.619 17.054 41.17 17.054 15.551 0 30.174-6.057 41.17-17.053l105.612-105.61a13.173 13.173 0 0 0 0-18.628l-22.542-22.542 22.126-22.126c34.793 30.215 78.234 45.331 121.682 45.331 47.561 0 95.123-18.104 131.331-54.311C492.68 281.938 512 235.298 512 185.688c0-49.613-19.318-96.254-54.398-131.333zM80.765 476.275c-6.021 6.021-14.026 9.337-22.542 9.337-8.515 0-16.521-3.317-22.542-9.338-6.02-6.02-9.337-14.026-9.337-22.54s3.317-16.521 9.338-22.542l58.934-58.934L139.7 417.34l-58.935 58.935zm77.565-77.564l-45.084-45.084 18.734-18.734 45.084 45.085-18.734 18.733zm280.643-100.323c-62.144 62.146-163.259 62.146-225.403 0-30.104-30.104-46.683-70.128-46.683-112.702s16.579-82.598 46.683-112.701c31.072-31.072 71.887-46.609 112.702-46.609 40.814 0 81.63 15.535 112.702 46.609 30.104 30.103 46.683 70.128 46.683 112.701s-16.58 82.598-46.684 112.702z'
		}),
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', {
			d: 'M417.234 94.721c-50.158-50.156-131.769-50.158-181.927 0-50.156 50.158-50.156 131.769.001 181.927 25.079 25.077 58.02 37.617 90.963 37.617s65.885-12.54 90.964-37.617v-.001c50.156-50.156 50.156-131.768-.001-181.926zM398.605 258.02c-39.886 39.886-104.783 39.886-144.669.001-39.886-39.886-39.886-104.784-.001-144.67 19.945-19.946 46.136-29.914 72.336-29.914 26.193 0 52.394 9.974 72.334 29.914 39.886 39.885 39.886 104.783 0 144.669z'
		}),
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', {
			d: 'M375.321 136.636c-27.048-27.045-71.053-27.045-98.1 0-5.144 5.144-5.144 13.484 0 18.63 5.144 5.144 13.484 5.144 18.63 0 16.772-16.774 44.068-16.774 60.842 0a13.128 13.128 0 0 0 9.314 3.858 13.13 13.13 0 0 0 9.314-3.858c5.144-5.144 5.144-13.485 0-18.63z'
		})
	);
};

LoupeIcon.defaultProps = {
	xmlns: 'http://www.w3.org/2000/svg',
	viewBox: '0 0 512 512'
};

var ReloadIcon = function ReloadIcon(props) {
	return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
		'svg',
		props,
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', {
			d: 'M482.195 226.196C482.195 101.471 380.725 0 256.001 0S29.805 101.471 29.805 226.196c0 7.409 6.007 13.416 13.416 13.416s13.416-6.008 13.416-13.416c0-109.93 89.434-199.363 199.363-199.363s199.363 89.434 199.363 199.363c0 109.928-89.434 199.362-199.363 199.362h-23.276l33.282-37.255c4.937-5.525 4.458-14.007-1.067-18.944-5.525-4.937-14.008-4.457-18.944 1.068l-47.576 53.255c-7.788 8.718-7.788 21.866 0 30.584l47.576 53.255a13.379 13.379 0 0 0 10.01 4.478c3.181 0 6.375-1.126 8.934-3.41 5.526-4.937 6.004-13.419 1.067-18.944l-33.282-37.255H256c124.725 0 226.195-101.471 226.195-226.194z'
		})
	);
};

ReloadIcon.defaultProps = {
	xmlns: 'http://www.w3.org/2000/svg',
	viewBox: '0 0 512 512'
};

var RemoveIcon = function RemoveIcon(props) {
	return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
		'svg',
		props,
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', {
			d: 'M60.197 418.646H27.571c-6.978 0-12.634 5.657-12.634 12.634s5.656 12.634 12.634 12.634h32.627c6.978 0 12.634-5.657 12.634-12.634-.001-6.976-5.658-12.634-12.635-12.634zM114.205 467.363c-4.934-4.932-12.933-4.934-17.867 0l-23.07 23.07c-4.934 4.934-4.935 12.933 0 17.868a12.598 12.598 0 0 0 8.933 3.701c3.233 0 6.467-1.234 8.933-3.701l23.07-23.07c4.935-4.934 4.936-12.933.001-17.868zM484.431 424.963H262.965l226.699-226.688c9.851-9.852 9.852-25.881.001-35.733L334.522 7.388c-9.853-9.851-25.882-9.851-35.735 0l-247.99 247.99c-14.318 14.318-22.203 33.354-22.203 53.602 0 20.247 7.885 39.284 22.203 53.602l74.701 74.699c8.351 8.351 19.455 12.951 31.266 12.951H484.43c6.978 0 12.634-5.657 12.634-12.634.001-6.977-5.655-12.635-12.633-12.635zm-327.666 0c-5.062 0-9.82-1.972-13.401-5.551l-74.699-74.699c-19.704-19.704-19.704-51.765 0-71.468l40.557-40.557 133.335 133.336c2.467 2.466 5.7 3.7 8.933 3.7s6.467-1.234 8.933-3.7c4.934-4.934 4.935-12.933.001-17.868L127.09 214.821 316.655 25.254l155.142 155.155L227.23 424.963h-70.465z'
		})
	);
};

RemoveIcon.defaultProps = {
	xmlns: 'http://www.w3.org/2000/svg',
	viewBox: '0 0 512.001 512.001'
};

// eslint-disable-next-line no-lone-blocks

{
	/* language=CSS */
}
var ActionsStyle = new String('.actions{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%;max-width:400px;margin-top:0.5em;padding:0 0.6em;}.action{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.action svg{width:2.5em;margin-bottom:0.2em;}.redo svg{-webkit-transform:scaleX(-1);-ms-transform:scaleX(-1);transform:scaleX(-1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL0FjdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJ3QixBQUdnQixBQVNBLEFBS0QsQUFJUyxZQUhELG9CQUNyQiwwQ0Fmb0IsQUFTQSxDQVNwQiw0RkFqQitCLEFBU1IsOEVBQ3ZCLHFDQVRZLFdBQ0ssZ0JBQ0MsaUJBQ0QsZ0JBQ2pCIiwiZmlsZSI6InBhZ2VzL0FjdGlvbnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3FpYW5naHVhbmcvcmVhY3Qtc3Vkb2t1LWdhbWUiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9mb3JiaWQtcHJvcC10eXBlcyAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWluZGVudC1wcm9wcyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tbWl4ZWQtb3BlcmF0b3JzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1taXhlZC1zcGFjZXMtYW5kLXRhYnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGFycm93LXBhcmVucyAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWluZGVudCAqL1xuLyogZXNsaW50LWRpc2FibGUgb2JqZWN0LWN1cmx5LW5ld2xpbmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGluZGVudCAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdGFicyAqL1xuLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYWNjZXNzaWJsZS1lbW9qaSAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcbmltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnO1xuXG5pbXBvcnQgTG91cGVJY29uIGZyb20gJy4uL3N2Zy9sb3VwZS5zdmcnO1xuaW1wb3J0IFJlbG9hZEljb24gZnJvbSAnLi4vc3ZnL3JlbG9hZC5zdmcnO1xuaW1wb3J0IFJlbW92ZUljb24gZnJvbSAnLi4vc3ZnL3JlbW92ZS5zdmcnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9uZS1ibG9ja3Ncbntcblx0LyogbGFuZ3VhZ2U9Q1NTICovXG59XG5jb25zdCBBY3Rpb25zU3R5bGUgPSBjc3NgXG5cdC5hY3Rpb25zIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdG1heC13aWR0aDogNDAwcHg7XG5cdFx0bWFyZ2luLXRvcDogMC41ZW07XG5cdFx0cGFkZGluZzogMCAwLjZlbTtcblx0fVxuXHQuYWN0aW9uIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0fVxuXHQuYWN0aW9uIDpnbG9iYWwoc3ZnKSB7XG5cdFx0d2lkdGg6IDIuNWVtO1xuXHRcdG1hcmdpbi1ib3R0b206IDAuMmVtO1xuXHR9XG5cdC5yZWRvIDpnbG9iYWwoc3ZnKSB7XG5cdFx0dHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuXHR9XG5gO1xuXG5jb25zdCBBY3Rpb25zID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHsgaGlzdG9yeSwgc2VsZWN0ZWQsIHVuZG8sIHJlZG8sIGVyYXNlLCBzb2x1dGlvbiB9ID0gcHJvcHM7XG5cdGNvbnN0IHByZWZpbGxlZCA9IHNlbGVjdGVkICYmIHNlbGVjdGVkLmdldCgncHJlZmlsbGVkJyk7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbnNcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uXCIgb25DbGljaz17aGlzdG9yeS5zaXplID8gdW5kbyA6IG51bGx9PlxuXHRcdFx0XHQ8UmVsb2FkSWNvbiAvPlxuXHRcdFx0XHRVbmRvXG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uIHJlZG9cIiBvbkNsaWNrPXtoaXN0b3J5LnNpemUgPyByZWRvIDogbnVsbH0+XG5cdFx0XHRcdDxSZWxvYWRJY29uIC8+XG5cdFx0XHRcdFJlZG9cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhY3Rpb25cIiBvbkNsaWNrPXshcHJlZmlsbGVkID8gZXJhc2UgOiBudWxsfT5cblx0XHRcdFx0PFJlbW92ZUljb24gLz5cblx0XHRcdFx0RXJhc2Vcblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhY3Rpb25cIiBvbkNsaWNrPXshcHJlZmlsbGVkID8gc29sdXRpb24gOiBudWxsfT5cblx0XHRcdFx0PExvdXBlSWNvbiAvPlxuXHRcdFx0XHRIaW50XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxzdHlsZSBqc3g+e0FjdGlvbnNTdHlsZX08L3N0eWxlPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuQWN0aW9ucy5wcm9wVHlwZXMgPSB7XG5cdGhpc3Rvcnk6IFByb3BUeXBlcy5vYmplY3QsXG5cdHNlbGVjdGVkOiBQcm9wVHlwZXMub2JqZWN0LFxuXHR1bmRvOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXHRyZWRvOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXHRlcmFzZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblx0c29sdXRpb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5BY3Rpb25zLmRlZmF1bHRQcm9wcyA9IHtcblx0aGlzdG9yeTogbnVsbCxcblx0c2VsZWN0ZWQ6IG51bGwsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25zO1xuIl19 */\n/*@ sourceURL=pages/Actions.js */');

ActionsStyle.__hash = '3947629645';
ActionsStyle.__scoped = '.actions.jsx-2689811820{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%;max-width:400px;margin-top:0.5em;padding:0 0.6em;}.action.jsx-2689811820{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.action.jsx-2689811820 svg{width:2.5em;margin-bottom:0.2em;}.redo.jsx-2689811820 svg{-webkit-transform:scaleX(-1);-ms-transform:scaleX(-1);transform:scaleX(-1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL0FjdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJ3QixBQUdnQixBQVNBLEFBS0QsQUFJUyxZQUhELG9CQUNyQiwwQ0Fmb0IsQUFTQSxDQVNwQiw0RkFqQitCLEFBU1IsOEVBQ3ZCLHFDQVRZLFdBQ0ssZ0JBQ0MsaUJBQ0QsZ0JBQ2pCIiwiZmlsZSI6InBhZ2VzL0FjdGlvbnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3FpYW5naHVhbmcvcmVhY3Qtc3Vkb2t1LWdhbWUiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9mb3JiaWQtcHJvcC10eXBlcyAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWluZGVudC1wcm9wcyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tbWl4ZWQtb3BlcmF0b3JzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1taXhlZC1zcGFjZXMtYW5kLXRhYnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGFycm93LXBhcmVucyAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWluZGVudCAqL1xuLyogZXNsaW50LWRpc2FibGUgb2JqZWN0LWN1cmx5LW5ld2xpbmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGluZGVudCAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdGFicyAqL1xuLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYWNjZXNzaWJsZS1lbW9qaSAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcbmltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnO1xuXG5pbXBvcnQgTG91cGVJY29uIGZyb20gJy4uL3N2Zy9sb3VwZS5zdmcnO1xuaW1wb3J0IFJlbG9hZEljb24gZnJvbSAnLi4vc3ZnL3JlbG9hZC5zdmcnO1xuaW1wb3J0IFJlbW92ZUljb24gZnJvbSAnLi4vc3ZnL3JlbW92ZS5zdmcnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9uZS1ibG9ja3Ncbntcblx0LyogbGFuZ3VhZ2U9Q1NTICovXG59XG5jb25zdCBBY3Rpb25zU3R5bGUgPSBjc3NgXG5cdC5hY3Rpb25zIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdG1heC13aWR0aDogNDAwcHg7XG5cdFx0bWFyZ2luLXRvcDogMC41ZW07XG5cdFx0cGFkZGluZzogMCAwLjZlbTtcblx0fVxuXHQuYWN0aW9uIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0fVxuXHQuYWN0aW9uIDpnbG9iYWwoc3ZnKSB7XG5cdFx0d2lkdGg6IDIuNWVtO1xuXHRcdG1hcmdpbi1ib3R0b206IDAuMmVtO1xuXHR9XG5cdC5yZWRvIDpnbG9iYWwoc3ZnKSB7XG5cdFx0dHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuXHR9XG5gO1xuXG5jb25zdCBBY3Rpb25zID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHsgaGlzdG9yeSwgc2VsZWN0ZWQsIHVuZG8sIHJlZG8sIGVyYXNlLCBzb2x1dGlvbiB9ID0gcHJvcHM7XG5cdGNvbnN0IHByZWZpbGxlZCA9IHNlbGVjdGVkICYmIHNlbGVjdGVkLmdldCgncHJlZmlsbGVkJyk7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbnNcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uXCIgb25DbGljaz17aGlzdG9yeS5zaXplID8gdW5kbyA6IG51bGx9PlxuXHRcdFx0XHQ8UmVsb2FkSWNvbiAvPlxuXHRcdFx0XHRVbmRvXG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uIHJlZG9cIiBvbkNsaWNrPXtoaXN0b3J5LnNpemUgPyByZWRvIDogbnVsbH0+XG5cdFx0XHRcdDxSZWxvYWRJY29uIC8+XG5cdFx0XHRcdFJlZG9cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhY3Rpb25cIiBvbkNsaWNrPXshcHJlZmlsbGVkID8gZXJhc2UgOiBudWxsfT5cblx0XHRcdFx0PFJlbW92ZUljb24gLz5cblx0XHRcdFx0RXJhc2Vcblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhY3Rpb25cIiBvbkNsaWNrPXshcHJlZmlsbGVkID8gc29sdXRpb24gOiBudWxsfT5cblx0XHRcdFx0PExvdXBlSWNvbiAvPlxuXHRcdFx0XHRIaW50XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxzdHlsZSBqc3g+e0FjdGlvbnNTdHlsZX08L3N0eWxlPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuQWN0aW9ucy5wcm9wVHlwZXMgPSB7XG5cdGhpc3Rvcnk6IFByb3BUeXBlcy5vYmplY3QsXG5cdHNlbGVjdGVkOiBQcm9wVHlwZXMub2JqZWN0LFxuXHR1bmRvOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXHRyZWRvOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXHRlcmFzZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblx0c29sdXRpb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5BY3Rpb25zLmRlZmF1bHRQcm9wcyA9IHtcblx0aGlzdG9yeTogbnVsbCxcblx0c2VsZWN0ZWQ6IG51bGwsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25zO1xuIl19 */\n/*@ sourceURL=pages/Actions.js */';
ActionsStyle.__scopedHash = '2689811820';
var Actions = function Actions(props) {
	var history = props.history,
	    selected = props.selected,
	    undo = props.undo,
	    redo = props.redo,
	    erase = props.erase,
	    solution = props.solution;

	var prefilled = selected && selected.get('prefilled');

	return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
		'div',
		{
			className: 'jsx-' + ActionsStyle.__scopedHash + ' ' + 'actions',
			__source: {
				fileName: _jsxFileName,
				lineNumber: 55
			}
		},
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
			'div',
			{ onClick: history.size ? undo : null, className: 'jsx-' + ActionsStyle.__scopedHash + ' ' + 'action',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 56
				}
			},
			__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ReloadIcon, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 57
				}
			}),
			'Undo'
		),
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
			'div',
			{ onClick: history.size ? redo : null, className: 'jsx-' + ActionsStyle.__scopedHash + ' ' + 'action redo',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 60
				}
			},
			__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ReloadIcon, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 61
				}
			}),
			'Redo'
		),
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
			'div',
			{ onClick: !prefilled ? erase : null, className: 'jsx-' + ActionsStyle.__scopedHash + ' ' + 'action',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 64
				}
			},
			__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(RemoveIcon, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 65
				}
			}),
			'Erase'
		),
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
			'div',
			{ onClick: !prefilled ? solution : null, className: 'jsx-' + ActionsStyle.__scopedHash + ' ' + 'action',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 68
				}
			},
			__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(LoupeIcon, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 69
				}
			}),
			'Hint'
		),
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
			styleId: ActionsStyle.__scopedHash,
			css: ActionsStyle.__scoped
		})
	);
};

Actions.propTypes = {
	history: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
	selected: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
	undo: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
	redo: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
	erase: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
	solution: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired
};

Actions.defaultProps = {
	history: null,
	selected: null
};

/* harmony default export */ __webpack_exports__["a"] = (Actions);

/***/ }),

/***/ "./pages/BoardView.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CellView__ = __webpack_require__("./pages/CellView.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__("./pages/utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sudoku__ = __webpack_require__("./sudoku.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__functions__ = __webpack_require__("./pages/functions.js");
var _jsxFileName = '/Users/qianghuang/react-sudoku-game/pages/BoardView.js';

/* eslint-disable react/forbid-prop-types */
/* eslint-disable max-len */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable arrow-parens */
/* eslint-disable react/jsx-indent */
/* eslint-disable object-curly-newline */
/* eslint-disable indent */
/* eslint-disable no-tabs */
/* eslint-disable jsx-a11y/accessible-emoji */



// eslint-disable-next-line import/no-extraneous-dependencies







// eslint-disable-next-line no-lone-blocks
{
	/* language=CSS */
}
var PuzzleStyle = new String('.puzzle{margin-top:0.5em;width:' + __WEBPACK_IMPORTED_MODULE_4__utils__["b" /* cellWidth */] * 9 + 'em;cursor:pointer;box-shadow:0 3px 6px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23);}.row{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex:0;-ms-flex:0;flex:0;width:' + __WEBPACK_IMPORTED_MODULE_4__utils__["b" /* cellWidth */] * 9 + 'em;}.row:not(:last-child){border-bottom:1px solid black;}.row:nth-child(3n + 3):not(:last-child){border-bottom:2px solid black !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL0JvYXJkVmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQnVCLEFBR29CLEFBTUosQUFNaUIsQUFHVyxpQkFkSixhQVl0QyxXQUdBLGFBZGdCLGVBQ3lELEtBSXJELDREQUhwQixpQ0FJUSxpQ0FDOEIscUNBQ3RDIiwiZmlsZSI6InBhZ2VzL0JvYXJkVmlldy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcWlhbmdodWFuZy9yZWFjdC1zdWRva3UtZ2FtZSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtaW5kZW50LXByb3BzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1taXhlZC1vcGVyYXRvcnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLW1peGVkLXNwYWNlcy1hbmQtdGFicyAqL1xuLyogZXNsaW50LWRpc2FibGUgYXJyb3ctcGFyZW5zICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtaW5kZW50ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBvYmplY3QtY3VybHktbmV3bGluZSAqL1xuLyogZXNsaW50LWRpc2FibGUgaW5kZW50ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby10YWJzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hY2Nlc3NpYmxlLWVtb2ppICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XG5cbmltcG9ydCBDZWxsVmlldyBmcm9tICcuL0NlbGxWaWV3JztcbmltcG9ydCB7IGNlbGxXaWR0aCB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgaXNQZWVyIGFzIGFyZUNvb3JkaW5hdGVQZWVycyB9IGZyb20gJy4uL3N1ZG9rdSc7XG5pbXBvcnQgeyBpc0NvbmZsaWN0IH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9uZS1ibG9ja3Ncbntcblx0LyogbGFuZ3VhZ2U9Q1NTICovXG59XG5jb25zdCBQdXp6bGVTdHlsZSA9IGNzc2Bcblx0LnB1enpsZSB7XG5cdFx0bWFyZ2luLXRvcDogMC41ZW07XG5cdFx0d2lkdGg6ICR7Y2VsbFdpZHRoICogOX1lbTtcblx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0Ym94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xuXHR9XG5cdC5yb3cge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRmbGV4OiAwO1xuXHRcdHdpZHRoOiAke2NlbGxXaWR0aCAqIDl9ZW07XG5cdH1cblx0LnJvdzpub3QoOmxhc3QtY2hpbGQpIHtcblx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG5cdH1cblx0LnJvdzpudGgtY2hpbGQoM24gKyAzKTpub3QoOmxhc3QtY2hpbGQpIHtcblx0XHRib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2sgIWltcG9ydGFudDtcblx0fVxuYDtcblxuZnVuY3Rpb24gcmVuZGVyQ2VsbChib2FyZCwgY2VsbCwgeCwgeSwgc2VsZWN0ZWQsIG9uQ2xpY2spIHtcblx0Y29uc3QgeyB2YWx1ZSwgcHJlZmlsbGVkLCBub3RlcyB9ID0gY2VsbC50b0pTT04oKTtcblx0Y29uc3QgY29uZmxpY3QgPSBpc0NvbmZsaWN0KGJvYXJkLCB4LCB5KTtcblx0Y29uc3QgcGVlciA9IGFyZUNvb3JkaW5hdGVQZWVycyh7IHgsIHkgfSwgYm9hcmQuZ2V0KCdzZWxlY3RlZCcpKTtcblx0Y29uc3Qgc2FtZVZhbHVlID0gISEoc2VsZWN0ZWQgJiYgc2VsZWN0ZWQuZ2V0KCd2YWx1ZScpICYmIHZhbHVlID09PSBzZWxlY3RlZC5nZXQoJ3ZhbHVlJykpO1xuXG5cdGNvbnN0IGlzU2VsZWN0ZWQgPSBjZWxsID09PSBzZWxlY3RlZDtcblx0cmV0dXJuIChcblx0XHQ8Q2VsbFZpZXdcblx0XHRcdHByZWZpbGxlZD17cHJlZmlsbGVkfVxuXHRcdFx0bm90ZXM9e25vdGVzfVxuXHRcdFx0c2FtZVZhbHVlPXtzYW1lVmFsdWV9XG5cdFx0XHRpc1NlbGVjdGVkPXtpc1NlbGVjdGVkfVxuXHRcdFx0aXNQZWVyPXtwZWVyfVxuXHRcdFx0dmFsdWU9e3ZhbHVlfVxuXHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRvbkNsaWNrKHgsIHkpO1xuXHRcdFx0fX1cblx0XHRcdGtleT17eX1cblx0XHRcdHg9e3h9XG5cdFx0XHR5PXt5fVxuXHRcdFx0Y29uZmxpY3Q9e2NvbmZsaWN0fVxuXHRcdC8+XG5cdCk7XG59XG5cbmNvbnN0IEJvYXJkVmlldyA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7IGJvYXJkLCBzZWxlY3RlZCwgb25DbGljayB9ID0gcHJvcHM7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInB1enpsZVwiPlxuXHRcdFx0e2JvYXJkXG5cdFx0XHRcdC5nZXQoJ3B1enpsZScpXG5cdFx0XHRcdC5tYXAoKHJvdywgaSkgPT4gKFxuXHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1hcnJheS1pbmRleC1rZXlcblx0XHRcdFx0XHQ8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwicm93XCI+XG5cdFx0XHRcdFx0XHR7cm93Lm1hcCgoY2VsbCwgaikgPT4gcmVuZGVyQ2VsbChib2FyZCwgY2VsbCwgaSwgaiwgc2VsZWN0ZWQsIG9uQ2xpY2spKS50b0FycmF5KCl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCkpXG5cdFx0XHRcdC50b0FycmF5KCl9XG5cdFx0XHQ8c3R5bGUganN4PntQdXp6bGVTdHlsZX08L3N0eWxlPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuQm9hcmRWaWV3LnByb3BUeXBlcyA9IHtcblx0Ym9hcmQ6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcblx0c2VsZWN0ZWQ6IFByb3BUeXBlcy5vYmplY3QsXG5cdG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5Cb2FyZFZpZXcuZGVmYXVsdFByb3BzID0ge1xuXHRzZWxlY3RlZDogbnVsbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJvYXJkVmlldztcbiJdfQ== */\n/*@ sourceURL=pages/BoardView.js */');

PuzzleStyle.__hash = '2878659807';
PuzzleStyle.__scoped = '.puzzle.jsx-192934110{margin-top:0.5em;width:' + __WEBPACK_IMPORTED_MODULE_4__utils__["b" /* cellWidth */] * 9 + 'em;cursor:pointer;box-shadow:0 3px 6px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23);}.row.jsx-192934110{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex:0;-ms-flex:0;flex:0;width:' + __WEBPACK_IMPORTED_MODULE_4__utils__["b" /* cellWidth */] * 9 + 'em;}.row.jsx-192934110:not(:last-child){border-bottom:1px solid black;}.row.jsx-192934110:nth-child(3n + 3):not(:last-child){border-bottom:2px solid black !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL0JvYXJkVmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQnVCLEFBR29CLEFBTUosQUFNaUIsQUFHVyxpQkFkSixhQVl0QyxXQUdBLGFBZGdCLGVBQ3lELEtBSXJELDREQUhwQixpQ0FJUSxpQ0FDOEIscUNBQ3RDIiwiZmlsZSI6InBhZ2VzL0JvYXJkVmlldy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcWlhbmdodWFuZy9yZWFjdC1zdWRva3UtZ2FtZSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtaW5kZW50LXByb3BzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1taXhlZC1vcGVyYXRvcnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLW1peGVkLXNwYWNlcy1hbmQtdGFicyAqL1xuLyogZXNsaW50LWRpc2FibGUgYXJyb3ctcGFyZW5zICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtaW5kZW50ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBvYmplY3QtY3VybHktbmV3bGluZSAqL1xuLyogZXNsaW50LWRpc2FibGUgaW5kZW50ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby10YWJzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hY2Nlc3NpYmxlLWVtb2ppICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XG5cbmltcG9ydCBDZWxsVmlldyBmcm9tICcuL0NlbGxWaWV3JztcbmltcG9ydCB7IGNlbGxXaWR0aCB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgaXNQZWVyIGFzIGFyZUNvb3JkaW5hdGVQZWVycyB9IGZyb20gJy4uL3N1ZG9rdSc7XG5pbXBvcnQgeyBpc0NvbmZsaWN0IH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9uZS1ibG9ja3Ncbntcblx0LyogbGFuZ3VhZ2U9Q1NTICovXG59XG5jb25zdCBQdXp6bGVTdHlsZSA9IGNzc2Bcblx0LnB1enpsZSB7XG5cdFx0bWFyZ2luLXRvcDogMC41ZW07XG5cdFx0d2lkdGg6ICR7Y2VsbFdpZHRoICogOX1lbTtcblx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0Ym94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xuXHR9XG5cdC5yb3cge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRmbGV4OiAwO1xuXHRcdHdpZHRoOiAke2NlbGxXaWR0aCAqIDl9ZW07XG5cdH1cblx0LnJvdzpub3QoOmxhc3QtY2hpbGQpIHtcblx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG5cdH1cblx0LnJvdzpudGgtY2hpbGQoM24gKyAzKTpub3QoOmxhc3QtY2hpbGQpIHtcblx0XHRib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2sgIWltcG9ydGFudDtcblx0fVxuYDtcblxuZnVuY3Rpb24gcmVuZGVyQ2VsbChib2FyZCwgY2VsbCwgeCwgeSwgc2VsZWN0ZWQsIG9uQ2xpY2spIHtcblx0Y29uc3QgeyB2YWx1ZSwgcHJlZmlsbGVkLCBub3RlcyB9ID0gY2VsbC50b0pTT04oKTtcblx0Y29uc3QgY29uZmxpY3QgPSBpc0NvbmZsaWN0KGJvYXJkLCB4LCB5KTtcblx0Y29uc3QgcGVlciA9IGFyZUNvb3JkaW5hdGVQZWVycyh7IHgsIHkgfSwgYm9hcmQuZ2V0KCdzZWxlY3RlZCcpKTtcblx0Y29uc3Qgc2FtZVZhbHVlID0gISEoc2VsZWN0ZWQgJiYgc2VsZWN0ZWQuZ2V0KCd2YWx1ZScpICYmIHZhbHVlID09PSBzZWxlY3RlZC5nZXQoJ3ZhbHVlJykpO1xuXG5cdGNvbnN0IGlzU2VsZWN0ZWQgPSBjZWxsID09PSBzZWxlY3RlZDtcblx0cmV0dXJuIChcblx0XHQ8Q2VsbFZpZXdcblx0XHRcdHByZWZpbGxlZD17cHJlZmlsbGVkfVxuXHRcdFx0bm90ZXM9e25vdGVzfVxuXHRcdFx0c2FtZVZhbHVlPXtzYW1lVmFsdWV9XG5cdFx0XHRpc1NlbGVjdGVkPXtpc1NlbGVjdGVkfVxuXHRcdFx0aXNQZWVyPXtwZWVyfVxuXHRcdFx0dmFsdWU9e3ZhbHVlfVxuXHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRvbkNsaWNrKHgsIHkpO1xuXHRcdFx0fX1cblx0XHRcdGtleT17eX1cblx0XHRcdHg9e3h9XG5cdFx0XHR5PXt5fVxuXHRcdFx0Y29uZmxpY3Q9e2NvbmZsaWN0fVxuXHRcdC8+XG5cdCk7XG59XG5cbmNvbnN0IEJvYXJkVmlldyA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7IGJvYXJkLCBzZWxlY3RlZCwgb25DbGljayB9ID0gcHJvcHM7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInB1enpsZVwiPlxuXHRcdFx0e2JvYXJkXG5cdFx0XHRcdC5nZXQoJ3B1enpsZScpXG5cdFx0XHRcdC5tYXAoKHJvdywgaSkgPT4gKFxuXHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1hcnJheS1pbmRleC1rZXlcblx0XHRcdFx0XHQ8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwicm93XCI+XG5cdFx0XHRcdFx0XHR7cm93Lm1hcCgoY2VsbCwgaikgPT4gcmVuZGVyQ2VsbChib2FyZCwgY2VsbCwgaSwgaiwgc2VsZWN0ZWQsIG9uQ2xpY2spKS50b0FycmF5KCl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCkpXG5cdFx0XHRcdC50b0FycmF5KCl9XG5cdFx0XHQ8c3R5bGUganN4PntQdXp6bGVTdHlsZX08L3N0eWxlPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuQm9hcmRWaWV3LnByb3BUeXBlcyA9IHtcblx0Ym9hcmQ6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcblx0c2VsZWN0ZWQ6IFByb3BUeXBlcy5vYmplY3QsXG5cdG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5Cb2FyZFZpZXcuZGVmYXVsdFByb3BzID0ge1xuXHRzZWxlY3RlZDogbnVsbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJvYXJkVmlldztcbiJdfQ== */\n/*@ sourceURL=pages/BoardView.js */';
PuzzleStyle.__scopedHash = '192934110';
function renderCell(board, cell, x, y, selected, _onClick) {
	var _cell$toJSON = cell.toJSON(),
	    value = _cell$toJSON.value,
	    prefilled = _cell$toJSON.prefilled,
	    notes = _cell$toJSON.notes;

	var conflict = Object(__WEBPACK_IMPORTED_MODULE_6__functions__["f" /* isConflict */])(board, x, y);
	var peer = Object(__WEBPACK_IMPORTED_MODULE_5__sudoku__["a" /* isPeer */])({ x: x, y: y }, board.get('selected'));
	var sameValue = !!(selected && selected.get('value') && value === selected.get('value'));

	var isSelected = cell === selected;
	return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__CellView__["a" /* default */], {
		prefilled: prefilled,
		notes: notes,
		sameValue: sameValue,
		isSelected: isSelected,
		isPeer: peer,
		value: value,
		onClick: function onClick() {
			_onClick(x, y);
		},
		key: y,
		x: x,
		y: y,
		conflict: conflict,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 56
		}
	});
}

var BoardView = function BoardView(props) {
	var board = props.board,
	    selected = props.selected,
	    onClick = props.onClick;


	return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
		'div',
		{
			className: 'jsx-' + PuzzleStyle.__scopedHash + ' ' + 'puzzle',
			__source: {
				fileName: _jsxFileName,
				lineNumber: 78
			}
		},
		board.get('puzzle').map(function (row, i) {
			return (
				// eslint-disable-next-line react/no-array-index-key
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					'div',
					{ key: i, className: 'jsx-' + PuzzleStyle.__scopedHash + ' ' + 'row',
						__source: {
							fileName: _jsxFileName,
							lineNumber: 83
						}
					},
					row.map(function (cell, j) {
						return renderCell(board, cell, i, j, selected, onClick);
					}).toArray()
				)
			);
		}).toArray(),
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
			styleId: PuzzleStyle.__scopedHash,
			css: PuzzleStyle.__scoped
		})
	);
};

BoardView.propTypes = {
	board: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object.isRequired,
	selected: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
	onClick: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired
};

BoardView.defaultProps = {
	selected: null
};

/* harmony default export */ __webpack_exports__["a"] = (BoardView);

/***/ }),

/***/ "./pages/CellView.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_immutable__ = __webpack_require__("immutable");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sudoku__ = __webpack_require__("./sudoku.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__("./pages/utils.js");
var _jsxFileName = '/Users/qianghuang/react-sudoku-game/pages/CellView.js';

/* eslint-disable max-len */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable arrow-parens */
/* eslint-disable react/jsx-indent */
/* eslint-disable object-curly-newline */
/* eslint-disable indent */
/* eslint-disable no-tabs */
/* eslint-disable jsx-a11y/accessible-emoji */




// eslint-disable-next-line import/no-extraneous-dependencies






// eslint-disable-next-line no-lone-blocks
{
	/* language=CSS */
}
var CellViewStyle = new String('.cell{height:' + __WEBPACK_IMPORTED_MODULE_5__utils__["b" /* cellWidth */] + 'em;width:' + __WEBPACK_IMPORTED_MODULE_5__utils__["b" /* cellWidth */] + 'em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:1.1em;font-weight:bold;-webkit-transition:background-color 0.3s ease-in-out;transition:background-color 0.3s ease-in-out;}.cell:nth-child(3n + 3):not(:last-child){border-right:2px solid black;}.cell:not(:last-child){border-right:1px solid black;}.note-number{font-size:0.6em;width:33%;height:33%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL0NlbGxWaWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCeUIsQUFHeUMsQUFXVCxBQUdBLEFBR2IsZ0JBQ04sVUFDQyxHQVBaLEFBR0EsUUFLdUIsQ0FuQmUscUJBb0J4QixnQkFuQkEsMERBb0JNLGdCQW5CSix5REFDSSxvQkFtQkkseUVBbEJBLDBCQW1CeEIseUVBbEJpQixnQkFDQyxpQkFDNEIsa0dBQzlDIiwiZmlsZSI6InBhZ2VzL0NlbGxWaWV3LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9xaWFuZ2h1YW5nL3JlYWN0LXN1ZG9rdS1nYW1lIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWluZGVudC1wcm9wcyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tbWl4ZWQtb3BlcmF0b3JzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1taXhlZC1zcGFjZXMtYW5kLXRhYnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGFycm93LXBhcmVucyAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWluZGVudCAqL1xuLyogZXNsaW50LWRpc2FibGUgb2JqZWN0LWN1cmx5LW5ld2xpbmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGluZGVudCAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdGFicyAqL1xuLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYWNjZXNzaWJsZS1lbW9qaSAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNldCB9IGZyb20gJ2ltbXV0YWJsZSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5pbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcblxuaW1wb3J0IHsgcmFuZ2UgfSBmcm9tICcuLi9zdWRva3UnO1xuXG5pbXBvcnQgeyBnZXRCYWNrR3JvdW5kQ29sb3IsIGdldEZvbnRDb2xvciwgY2VsbFdpZHRoIH0gZnJvbSAnLi91dGlscyc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb25lLWJsb2Nrc1xue1xuXHQvKiBsYW5ndWFnZT1DU1MgKi9cbn1cbmNvbnN0IENlbGxWaWV3U3R5bGUgPSBjc3NgXG5cdC5jZWxsIHtcblx0XHRoZWlnaHQ6ICR7Y2VsbFdpZHRofWVtO1xuXHRcdHdpZHRoOiAke2NlbGxXaWR0aH1lbTtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdGZvbnQtc2l6ZTogMS4xZW07XG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xuXHR9XG5cdC5jZWxsOm50aC1jaGlsZCgzbiArIDMpOm5vdCg6bGFzdC1jaGlsZCkge1xuXHRcdGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGJsYWNrO1xuXHR9XG5cdC5jZWxsOm5vdCg6bGFzdC1jaGlsZCkge1xuXHRcdGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xuXHR9XG5cdC5ub3RlLW51bWJlciB7XG5cdFx0Zm9udC1zaXplOiAwLjZlbTtcblx0XHR3aWR0aDogMzMlO1xuXHRcdGhlaWdodDogMzMlO1xuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHR9XG5gO1xuXG5jb25zdCBDZWxsVmlldyA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7IHZhbHVlLCBvbkNsaWNrLCBpc1BlZXIsIGlzU2VsZWN0ZWQsIHNhbWVWYWx1ZSwgcHJlZmlsbGVkLCBub3RlcywgY29uZmxpY3QgfSA9IHByb3BzO1xuXHRjb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSBnZXRCYWNrR3JvdW5kQ29sb3Ioe1xuXHRcdGNvbmZsaWN0LFxuXHRcdGlzUGVlcixcblx0XHRzYW1lVmFsdWUsXG5cdFx0aXNTZWxlY3RlZCxcblx0fSk7XG5cdGNvbnN0IGZvbnRDb2xvciA9IGdldEZvbnRDb2xvcih7IGNvbmZsaWN0LCBwcmVmaWxsZWQsIHZhbHVlIH0pO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY2VsbFwiIG9uQ2xpY2s9e29uQ2xpY2t9PlxuXHRcdFx0e25vdGVzXG5cdFx0XHRcdD8gcmFuZ2UoOSkubWFwKChpKSA9PiAoXG5cdFx0XHRcdFx0XHQ8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwibm90ZS1udW1iZXJcIj5cblx0XHRcdFx0XHRcdFx0e25vdGVzLmhhcyhpICsgMSkgJiYgaSArIDF9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0ICApKVxuXHRcdFx0XHQ6IHZhbHVlICYmIHZhbHVlfVxuXHRcdFx0ey8qIGxhbmd1YWdlPUNTUyAqL31cblx0XHRcdDxzdHlsZSBqc3g+e0NlbGxWaWV3U3R5bGV9PC9zdHlsZT5cblx0XHRcdDxzdHlsZSBqc3g+XG5cdFx0XHRcdHtgXG5cdFx0XHRcdFx0LmNlbGwge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJHtiYWNrZ3JvdW5kQ29sb3IgfHwgJ2luaXRpYWwnfTtcblx0XHRcdFx0XHRcdGNvbG9yOiAke2ZvbnRDb2xvciB8fCAnaW5pdGlhbCd9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH1cblx0XHRcdDwvc3R5bGU+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5DZWxsVmlldy5wcm9wVHlwZXMgPSB7XG5cdC8vIGN1cnJlbnQgbnVtYmVyIHZhbHVlXG5cdHZhbHVlOiBQcm9wVHlwZXMubnVtYmVyLFxuXHQvLyBjZWxsIGNsaWNrIGhhbmRsZXJcblx0b25DbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblx0Ly8gaWYgdGhlIGNlbGwgaXMgYSBwZWVyIG9mIHRoZSBzZWxlY3RlZCBjZWxsXG5cdGlzUGVlcjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcblx0Ly8gaWYgdGhlIGNlbGwgaXMgc2VsZWN0ZWQgYnkgdGhlIHVzZXJcblx0aXNTZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcblx0Ly8gY3VycmVudCBjZWxsIGhhcyB0aGUgc2FtZSB2YWx1ZSBpZiB0aGUgdXNlciBzZWxlY3RlZCBjZWxsXG5cdHNhbWVWYWx1ZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcblx0Ly8gaWYgdGhpcyB3YXMgcHJlZmlsbGVkIGFzIGEgcGFydCBvZiB0aGUgcHV6emxlXG5cdHByZWZpbGxlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcblx0Ly8gY3VycmVudCBub3RlcyB0YWtlbiBvbiB0aGUgY2VsbFxuXHRub3RlczogUHJvcFR5cGVzLmluc3RhbmNlT2YoU2V0KSxcblx0Ly8gaWYgdGhlIGN1cnJlbnQgY2VsbCBkb2VzIG5vdCBzYXRpc2Z5IHRoZSBnYW1lIGNvbnN0cmFpbnRcblx0Y29uZmxpY3Q6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG59O1xuXG5DZWxsVmlldy5kZWZhdWx0UHJvcHMgPSB7XG5cdG5vdGVzOiBudWxsLFxuXHR2YWx1ZTogbnVsbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENlbGxWaWV3O1xuIl19 */\n/*@ sourceURL=pages/CellView.js */');

CellViewStyle.__hash = '1022797800';
CellViewStyle.__scoped = '.cell.jsx-1401184073{height:' + __WEBPACK_IMPORTED_MODULE_5__utils__["b" /* cellWidth */] + 'em;width:' + __WEBPACK_IMPORTED_MODULE_5__utils__["b" /* cellWidth */] + 'em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:1.1em;font-weight:bold;-webkit-transition:background-color 0.3s ease-in-out;transition:background-color 0.3s ease-in-out;}.cell.jsx-1401184073:nth-child(3n + 3):not(:last-child){border-right:2px solid black;}.cell.jsx-1401184073:not(:last-child){border-right:1px solid black;}.note-number.jsx-1401184073{font-size:0.6em;width:33%;height:33%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL0NlbGxWaWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCeUIsQUFHeUMsQUFXVCxBQUdBLEFBR2IsZ0JBQ04sVUFDQyxHQVBaLEFBR0EsUUFLdUIsQ0FuQmUscUJBb0J4QixnQkFuQkEsMERBb0JNLGdCQW5CSix5REFDSSxvQkFtQkkseUVBbEJBLDBCQW1CeEIseUVBbEJpQixnQkFDQyxpQkFDNEIsa0dBQzlDIiwiZmlsZSI6InBhZ2VzL0NlbGxWaWV3LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9xaWFuZ2h1YW5nL3JlYWN0LXN1ZG9rdS1nYW1lIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWluZGVudC1wcm9wcyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tbWl4ZWQtb3BlcmF0b3JzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1taXhlZC1zcGFjZXMtYW5kLXRhYnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGFycm93LXBhcmVucyAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWluZGVudCAqL1xuLyogZXNsaW50LWRpc2FibGUgb2JqZWN0LWN1cmx5LW5ld2xpbmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGluZGVudCAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdGFicyAqL1xuLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYWNjZXNzaWJsZS1lbW9qaSAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNldCB9IGZyb20gJ2ltbXV0YWJsZSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5pbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcblxuaW1wb3J0IHsgcmFuZ2UgfSBmcm9tICcuLi9zdWRva3UnO1xuXG5pbXBvcnQgeyBnZXRCYWNrR3JvdW5kQ29sb3IsIGdldEZvbnRDb2xvciwgY2VsbFdpZHRoIH0gZnJvbSAnLi91dGlscyc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb25lLWJsb2Nrc1xue1xuXHQvKiBsYW5ndWFnZT1DU1MgKi9cbn1cbmNvbnN0IENlbGxWaWV3U3R5bGUgPSBjc3NgXG5cdC5jZWxsIHtcblx0XHRoZWlnaHQ6ICR7Y2VsbFdpZHRofWVtO1xuXHRcdHdpZHRoOiAke2NlbGxXaWR0aH1lbTtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdGZvbnQtc2l6ZTogMS4xZW07XG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xuXHR9XG5cdC5jZWxsOm50aC1jaGlsZCgzbiArIDMpOm5vdCg6bGFzdC1jaGlsZCkge1xuXHRcdGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGJsYWNrO1xuXHR9XG5cdC5jZWxsOm5vdCg6bGFzdC1jaGlsZCkge1xuXHRcdGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xuXHR9XG5cdC5ub3RlLW51bWJlciB7XG5cdFx0Zm9udC1zaXplOiAwLjZlbTtcblx0XHR3aWR0aDogMzMlO1xuXHRcdGhlaWdodDogMzMlO1xuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHR9XG5gO1xuXG5jb25zdCBDZWxsVmlldyA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7IHZhbHVlLCBvbkNsaWNrLCBpc1BlZXIsIGlzU2VsZWN0ZWQsIHNhbWVWYWx1ZSwgcHJlZmlsbGVkLCBub3RlcywgY29uZmxpY3QgfSA9IHByb3BzO1xuXHRjb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSBnZXRCYWNrR3JvdW5kQ29sb3Ioe1xuXHRcdGNvbmZsaWN0LFxuXHRcdGlzUGVlcixcblx0XHRzYW1lVmFsdWUsXG5cdFx0aXNTZWxlY3RlZCxcblx0fSk7XG5cdGNvbnN0IGZvbnRDb2xvciA9IGdldEZvbnRDb2xvcih7IGNvbmZsaWN0LCBwcmVmaWxsZWQsIHZhbHVlIH0pO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY2VsbFwiIG9uQ2xpY2s9e29uQ2xpY2t9PlxuXHRcdFx0e25vdGVzXG5cdFx0XHRcdD8gcmFuZ2UoOSkubWFwKChpKSA9PiAoXG5cdFx0XHRcdFx0XHQ8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwibm90ZS1udW1iZXJcIj5cblx0XHRcdFx0XHRcdFx0e25vdGVzLmhhcyhpICsgMSkgJiYgaSArIDF9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0ICApKVxuXHRcdFx0XHQ6IHZhbHVlICYmIHZhbHVlfVxuXHRcdFx0ey8qIGxhbmd1YWdlPUNTUyAqL31cblx0XHRcdDxzdHlsZSBqc3g+e0NlbGxWaWV3U3R5bGV9PC9zdHlsZT5cblx0XHRcdDxzdHlsZSBqc3g+XG5cdFx0XHRcdHtgXG5cdFx0XHRcdFx0LmNlbGwge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJHtiYWNrZ3JvdW5kQ29sb3IgfHwgJ2luaXRpYWwnfTtcblx0XHRcdFx0XHRcdGNvbG9yOiAke2ZvbnRDb2xvciB8fCAnaW5pdGlhbCd9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH1cblx0XHRcdDwvc3R5bGU+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5DZWxsVmlldy5wcm9wVHlwZXMgPSB7XG5cdC8vIGN1cnJlbnQgbnVtYmVyIHZhbHVlXG5cdHZhbHVlOiBQcm9wVHlwZXMubnVtYmVyLFxuXHQvLyBjZWxsIGNsaWNrIGhhbmRsZXJcblx0b25DbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblx0Ly8gaWYgdGhlIGNlbGwgaXMgYSBwZWVyIG9mIHRoZSBzZWxlY3RlZCBjZWxsXG5cdGlzUGVlcjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcblx0Ly8gaWYgdGhlIGNlbGwgaXMgc2VsZWN0ZWQgYnkgdGhlIHVzZXJcblx0aXNTZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcblx0Ly8gY3VycmVudCBjZWxsIGhhcyB0aGUgc2FtZSB2YWx1ZSBpZiB0aGUgdXNlciBzZWxlY3RlZCBjZWxsXG5cdHNhbWVWYWx1ZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcblx0Ly8gaWYgdGhpcyB3YXMgcHJlZmlsbGVkIGFzIGEgcGFydCBvZiB0aGUgcHV6emxlXG5cdHByZWZpbGxlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcblx0Ly8gY3VycmVudCBub3RlcyB0YWtlbiBvbiB0aGUgY2VsbFxuXHRub3RlczogUHJvcFR5cGVzLmluc3RhbmNlT2YoU2V0KSxcblx0Ly8gaWYgdGhlIGN1cnJlbnQgY2VsbCBkb2VzIG5vdCBzYXRpc2Z5IHRoZSBnYW1lIGNvbnN0cmFpbnRcblx0Y29uZmxpY3Q6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG59O1xuXG5DZWxsVmlldy5kZWZhdWx0UHJvcHMgPSB7XG5cdG5vdGVzOiBudWxsLFxuXHR2YWx1ZTogbnVsbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENlbGxWaWV3O1xuIl19 */\n/*@ sourceURL=pages/CellView.js */';
CellViewStyle.__scopedHash = '1401184073';
var CellView = function CellView(props) {
	var value = props.value,
	    onClick = props.onClick,
	    isPeer = props.isPeer,
	    isSelected = props.isSelected,
	    sameValue = props.sameValue,
	    prefilled = props.prefilled,
	    notes = props.notes,
	    conflict = props.conflict;

	var backgroundColor = Object(__WEBPACK_IMPORTED_MODULE_5__utils__["c" /* getBackGroundColor */])({
		conflict: conflict,
		isPeer: isPeer,
		sameValue: sameValue,
		isSelected: isSelected
	});
	var fontColor = Object(__WEBPACK_IMPORTED_MODULE_5__utils__["d" /* getFontColor */])({ conflict: conflict, prefilled: prefilled, value: value });
	return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
		'div',
		{ onClick: onClick, className: 'jsx-' + CellViewStyle.__scopedHash + ' ' + __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['1319113765', [backgroundColor || 'initial', fontColor || 'initial']]]) + ' ' + 'cell',
			__source: {
				fileName: _jsxFileName,
				lineNumber: 65
			}
		},
		notes ? Object(__WEBPACK_IMPORTED_MODULE_4__sudoku__["d" /* range */])(9).map(function (i) {
			return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
				'div',
				{ key: i, className: 'jsx-' + CellViewStyle.__scopedHash + ' ' + __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['1319113765', [backgroundColor || 'initial', fontColor || 'initial']]]) + ' ' + 'note-number',
					__source: {
						fileName: _jsxFileName,
						lineNumber: 68
					}
				},
				notes.has(i + 1) && i + 1
			);
		}) : value && value,
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
			styleId: CellViewStyle.__scopedHash,
			css: CellViewStyle.__scoped
		}),
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
			styleId: '1319113765',
			css: '.cell.__jsx-style-dynamic-selector{background-color:' + (backgroundColor || 'initial') + ';color:' + (fontColor || 'initial') + ';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL0NlbGxWaWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJFSyxBQUdxRCw4Q0FDWCxtQ0FDcEMiLCJmaWxlIjoicGFnZXMvQ2VsbFZpZXcuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3FpYW5naHVhbmcvcmVhY3Qtc3Vkb2t1LWdhbWUiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtaW5kZW50LXByb3BzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1taXhlZC1vcGVyYXRvcnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLW1peGVkLXNwYWNlcy1hbmQtdGFicyAqL1xuLyogZXNsaW50LWRpc2FibGUgYXJyb3ctcGFyZW5zICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtaW5kZW50ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBvYmplY3QtY3VybHktbmV3bGluZSAqL1xuLyogZXNsaW50LWRpc2FibGUgaW5kZW50ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby10YWJzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hY2Nlc3NpYmxlLWVtb2ppICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2V0IH0gZnJvbSAnaW1tdXRhYmxlJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcbmltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnO1xuXG5pbXBvcnQgeyByYW5nZSB9IGZyb20gJy4uL3N1ZG9rdSc7XG5cbmltcG9ydCB7IGdldEJhY2tHcm91bmRDb2xvciwgZ2V0Rm9udENvbG9yLCBjZWxsV2lkdGggfSBmcm9tICcuL3V0aWxzJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWxvbmUtYmxvY2tzXG57XG5cdC8qIGxhbmd1YWdlPUNTUyAqL1xufVxuY29uc3QgQ2VsbFZpZXdTdHlsZSA9IGNzc2Bcblx0LmNlbGwge1xuXHRcdGhlaWdodDogJHtjZWxsV2lkdGh9ZW07XG5cdFx0d2lkdGg6ICR7Y2VsbFdpZHRofWVtO1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC13cmFwOiB3cmFwO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0Zm9udC1zaXplOiAxLjFlbTtcblx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XG5cdH1cblx0LmNlbGw6bnRoLWNoaWxkKDNuICsgMyk6bm90KDpsYXN0LWNoaWxkKSB7XG5cdFx0Ym9yZGVyLXJpZ2h0OiAycHggc29saWQgYmxhY2s7XG5cdH1cblx0LmNlbGw6bm90KDpsYXN0LWNoaWxkKSB7XG5cdFx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XG5cdH1cblx0Lm5vdGUtbnVtYmVyIHtcblx0XHRmb250LXNpemU6IDAuNmVtO1xuXHRcdHdpZHRoOiAzMyU7XG5cdFx0aGVpZ2h0OiAzMyU7XG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdH1cbmA7XG5cbmNvbnN0IENlbGxWaWV3ID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHsgdmFsdWUsIG9uQ2xpY2ssIGlzUGVlciwgaXNTZWxlY3RlZCwgc2FtZVZhbHVlLCBwcmVmaWxsZWQsIG5vdGVzLCBjb25mbGljdCB9ID0gcHJvcHM7XG5cdGNvbnN0IGJhY2tncm91bmRDb2xvciA9IGdldEJhY2tHcm91bmRDb2xvcih7XG5cdFx0Y29uZmxpY3QsXG5cdFx0aXNQZWVyLFxuXHRcdHNhbWVWYWx1ZSxcblx0XHRpc1NlbGVjdGVkLFxuXHR9KTtcblx0Y29uc3QgZm9udENvbG9yID0gZ2V0Rm9udENvbG9yKHsgY29uZmxpY3QsIHByZWZpbGxlZCwgdmFsdWUgfSk7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjZWxsXCIgb25DbGljaz17b25DbGlja30+XG5cdFx0XHR7bm90ZXNcblx0XHRcdFx0PyByYW5nZSg5KS5tYXAoKGkpID0+IChcblx0XHRcdFx0XHRcdDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJub3RlLW51bWJlclwiPlxuXHRcdFx0XHRcdFx0XHR7bm90ZXMuaGFzKGkgKyAxKSAmJiBpICsgMX1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQgICkpXG5cdFx0XHRcdDogdmFsdWUgJiYgdmFsdWV9XG5cdFx0XHR7LyogbGFuZ3VhZ2U9Q1NTICovfVxuXHRcdFx0PHN0eWxlIGpzeD57Q2VsbFZpZXdTdHlsZX08L3N0eWxlPlxuXHRcdFx0PHN0eWxlIGpzeD5cblx0XHRcdFx0e2Bcblx0XHRcdFx0XHQuY2VsbCB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAke2JhY2tncm91bmRDb2xvciB8fCAnaW5pdGlhbCd9O1xuXHRcdFx0XHRcdFx0Y29sb3I6ICR7Zm9udENvbG9yIHx8ICdpbml0aWFsJ307XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfVxuXHRcdFx0PC9zdHlsZT5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbkNlbGxWaWV3LnByb3BUeXBlcyA9IHtcblx0Ly8gY3VycmVudCBudW1iZXIgdmFsdWVcblx0dmFsdWU6IFByb3BUeXBlcy5udW1iZXIsXG5cdC8vIGNlbGwgY2xpY2sgaGFuZGxlclxuXHRvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXHQvLyBpZiB0aGUgY2VsbCBpcyBhIHBlZXIgb2YgdGhlIHNlbGVjdGVkIGNlbGxcblx0aXNQZWVyOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuXHQvLyBpZiB0aGUgY2VsbCBpcyBzZWxlY3RlZCBieSB0aGUgdXNlclxuXHRpc1NlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuXHQvLyBjdXJyZW50IGNlbGwgaGFzIHRoZSBzYW1lIHZhbHVlIGlmIHRoZSB1c2VyIHNlbGVjdGVkIGNlbGxcblx0c2FtZVZhbHVlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuXHQvLyBpZiB0aGlzIHdhcyBwcmVmaWxsZWQgYXMgYSBwYXJ0IG9mIHRoZSBwdXp6bGVcblx0cHJlZmlsbGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuXHQvLyBjdXJyZW50IG5vdGVzIHRha2VuIG9uIHRoZSBjZWxsXG5cdG5vdGVzOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihTZXQpLFxuXHQvLyBpZiB0aGUgY3VycmVudCBjZWxsIGRvZXMgbm90IHNhdGlzZnkgdGhlIGdhbWUgY29uc3RyYWludFxuXHRjb25mbGljdDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbn07XG5cbkNlbGxWaWV3LmRlZmF1bHRQcm9wcyA9IHtcblx0bm90ZXM6IG51bGwsXG5cdHZhbHVlOiBudWxsLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2VsbFZpZXc7XG4iXX0= */\n/*@ sourceURL=pages/CellView.js */',
			dynamic: [backgroundColor || 'initial', fontColor || 'initial']
		})
	);
};

CellView.propTypes = {
	// current number value
	value: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number,
	// cell click handler
	onClick: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func.isRequired,
	// if the cell is a peer of the selected cell
	isPeer: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool.isRequired,
	// if the cell is selected by the user
	isSelected: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool.isRequired,
	// current cell has the same value if the user selected cell
	sameValue: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool.isRequired,
	// if this was prefilled as a part of the puzzle
	prefilled: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool.isRequired,
	// current notes taken on the cell
	notes: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.instanceOf(__WEBPACK_IMPORTED_MODULE_2_immutable__["Set"]),
	// if the current cell does not satisfy the game constraint
	conflict: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool.isRequired
};

CellView.defaultProps = {
	notes: null,
	value: null
};

/* harmony default export */ __webpack_exports__["a"] = (CellView);

/***/ }),

/***/ "./pages/CirclularProgress.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__("./pages/utils.js");
var _jsxFileName = '/Users/qianghuang/react-sudoku-game/pages/CirclularProgress.js';

/* eslint-disable max-len */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable arrow-parens */
/* eslint-disable react/jsx-indent */
/* eslint-disable object-curly-newline */
/* eslint-disable indent */
/* eslint-disable no-tabs */
/* eslint-disable jsx-a11y/accessible-emoji */



// eslint-disable-next-line import/no-extraneous-dependencies




// eslint-disable-next-line no-lone-blocks
{
	/* language=CSS */
}
var CirculuarProgressStyle = new String('.circular-progress{display:block;width:100%;position:absolute;top:0;left:0;-webkit-transition:filter 0.4s ease-in-out;transition:filter 0.4s ease-in-out;}.circle-bg{fill:none;stroke:#eee;stroke-width:3.8;}.circle{stroke:' + __WEBPACK_IMPORTED_MODULE_3__utils__["a" /* ControlNumberColor */] + ';-webkit-transition:stroke-dasharray 0.4s ease-in-out;transition:stroke-dasharray 0.4s ease-in-out;fill:none;stroke-width:2.8;stroke-linecap:round;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL0NpcmNsdWxhclByb2dyZXNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCa0MsQUFHaUIsQUFTSixBQU0wQixVQUx4QixJQVRELFFBVU0sR0FUQyxXQWMyQixHQUo5QyxJQVRPLE1BQ0MsT0FDNEIsOEVBQ3BDLEFBV1csVUFDTyxpQkFDSSxxQkFDdEIiLCJmaWxlIjoicGFnZXMvQ2lyY2x1bGFyUHJvZ3Jlc3MuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3FpYW5naHVhbmcvcmVhY3Qtc3Vkb2t1LWdhbWUiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtaW5kZW50LXByb3BzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1taXhlZC1vcGVyYXRvcnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLW1peGVkLXNwYWNlcy1hbmQtdGFicyAqL1xuLyogZXNsaW50LWRpc2FibGUgYXJyb3ctcGFyZW5zICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtaW5kZW50ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBvYmplY3QtY3VybHktbmV3bGluZSAqL1xuLyogZXNsaW50LWRpc2FibGUgaW5kZW50ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby10YWJzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hY2Nlc3NpYmxlLWVtb2ppICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XG5cbmltcG9ydCB7IENvbnRyb2xOdW1iZXJDb2xvciB9IGZyb20gJy4vdXRpbHMnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9uZS1ibG9ja3Ncbntcblx0LyogbGFuZ3VhZ2U9Q1NTICovXG59XG5jb25zdCBDaXJjdWx1YXJQcm9ncmVzc1N0eWxlID0gY3NzYFxuXHQuY2lyY3VsYXItcHJvZ3Jlc3Mge1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR0b3A6IDA7XG5cdFx0bGVmdDogMDtcblx0XHR0cmFuc2l0aW9uOiBmaWx0ZXIgMC40cyBlYXNlLWluLW91dDtcblx0fVxuXG5cdC5jaXJjbGUtYmcge1xuXHRcdGZpbGw6IG5vbmU7XG5cdFx0c3Ryb2tlOiAjZWVlO1xuXHRcdHN0cm9rZS13aWR0aDogMy44O1xuXHR9XG5cblx0LmNpcmNsZSB7XG5cdFx0c3Ryb2tlOiAke0NvbnRyb2xOdW1iZXJDb2xvcn07XG5cdFx0dHJhbnNpdGlvbjogc3Ryb2tlLWRhc2hhcnJheSAwLjRzIGVhc2UtaW4tb3V0O1xuXHRcdGZpbGw6IG5vbmU7XG5cdFx0c3Ryb2tlLXdpZHRoOiAyLjg7XG5cdFx0c3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuXHR9XG5gO1xuXG5jb25zdCBDaXJjdWxhclBhdGhEID0gJ00xOCAyLjA4NDUgYSAxNS45MTU1IDE1LjkxNTUgMCAwIDEgMCAzMS44MzEgYSAxNS45MTU1IDE1LjkxNTUgMCAwIDEgMCAtMzEuODMxJztcblxuY29uc3QgQ2lyY2x1bGFyUHJvZ3Jlc3MgPSAoeyBwZXJjZW50IH0pID0+IChcblx0PHN2ZyB2aWV3Qm94PVwiMCAwIDM2IDM2XCIgY2xhc3NOYW1lPVwiY2lyY3VsYXItcHJvZ3Jlc3NcIj5cblx0XHQ8cGF0aCBjbGFzc05hbWU9XCJjaXJjbGUtYmdcIiBkPXtDaXJjdWxhclBhdGhEfSAvPlxuXHRcdDxwYXRoIGNsYXNzTmFtZT1cImNpcmNsZVwiIHN0cm9rZURhc2hhcnJheT17YCR7cGVyY2VudCAqIDEwMH0sIDEwMGB9IGQ9e0NpcmN1bGFyUGF0aER9IC8+XG5cdFx0ey8qIGxhbmd1YWdlPUNTUyAqL31cblx0XHQ8c3R5bGUganN4PntDaXJjdWx1YXJQcm9ncmVzc1N0eWxlfTwvc3R5bGU+XG5cdDwvc3ZnPlxuKTtcblxuQ2lyY2x1bGFyUHJvZ3Jlc3MucHJvcFR5cGVzID0ge1xuXHRwZXJjZW50OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaXJjbHVsYXJQcm9ncmVzcztcbiJdfQ== */\n/*@ sourceURL=pages/CirclularProgress.js */');

CirculuarProgressStyle.__hash = '289854377';
CirculuarProgressStyle.__scoped = '.circular-progress.jsx-895867784{display:block;width:100%;position:absolute;top:0;left:0;-webkit-transition:filter 0.4s ease-in-out;transition:filter 0.4s ease-in-out;}.circle-bg.jsx-895867784{fill:none;stroke:#eee;stroke-width:3.8;}.circle.jsx-895867784{stroke:' + __WEBPACK_IMPORTED_MODULE_3__utils__["a" /* ControlNumberColor */] + ';-webkit-transition:stroke-dasharray 0.4s ease-in-out;transition:stroke-dasharray 0.4s ease-in-out;fill:none;stroke-width:2.8;stroke-linecap:round;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL0NpcmNsdWxhclByb2dyZXNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCa0MsQUFHaUIsQUFTSixBQU0wQixVQUx4QixJQVRELFFBVU0sR0FUQyxXQWMyQixHQUo5QyxJQVRPLE1BQ0MsT0FDNEIsOEVBQ3BDLEFBV1csVUFDTyxpQkFDSSxxQkFDdEIiLCJmaWxlIjoicGFnZXMvQ2lyY2x1bGFyUHJvZ3Jlc3MuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3FpYW5naHVhbmcvcmVhY3Qtc3Vkb2t1LWdhbWUiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtaW5kZW50LXByb3BzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1taXhlZC1vcGVyYXRvcnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLW1peGVkLXNwYWNlcy1hbmQtdGFicyAqL1xuLyogZXNsaW50LWRpc2FibGUgYXJyb3ctcGFyZW5zICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtaW5kZW50ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBvYmplY3QtY3VybHktbmV3bGluZSAqL1xuLyogZXNsaW50LWRpc2FibGUgaW5kZW50ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby10YWJzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hY2Nlc3NpYmxlLWVtb2ppICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XG5cbmltcG9ydCB7IENvbnRyb2xOdW1iZXJDb2xvciB9IGZyb20gJy4vdXRpbHMnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9uZS1ibG9ja3Ncbntcblx0LyogbGFuZ3VhZ2U9Q1NTICovXG59XG5jb25zdCBDaXJjdWx1YXJQcm9ncmVzc1N0eWxlID0gY3NzYFxuXHQuY2lyY3VsYXItcHJvZ3Jlc3Mge1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR0b3A6IDA7XG5cdFx0bGVmdDogMDtcblx0XHR0cmFuc2l0aW9uOiBmaWx0ZXIgMC40cyBlYXNlLWluLW91dDtcblx0fVxuXG5cdC5jaXJjbGUtYmcge1xuXHRcdGZpbGw6IG5vbmU7XG5cdFx0c3Ryb2tlOiAjZWVlO1xuXHRcdHN0cm9rZS13aWR0aDogMy44O1xuXHR9XG5cblx0LmNpcmNsZSB7XG5cdFx0c3Ryb2tlOiAke0NvbnRyb2xOdW1iZXJDb2xvcn07XG5cdFx0dHJhbnNpdGlvbjogc3Ryb2tlLWRhc2hhcnJheSAwLjRzIGVhc2UtaW4tb3V0O1xuXHRcdGZpbGw6IG5vbmU7XG5cdFx0c3Ryb2tlLXdpZHRoOiAyLjg7XG5cdFx0c3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuXHR9XG5gO1xuXG5jb25zdCBDaXJjdWxhclBhdGhEID0gJ00xOCAyLjA4NDUgYSAxNS45MTU1IDE1LjkxNTUgMCAwIDEgMCAzMS44MzEgYSAxNS45MTU1IDE1LjkxNTUgMCAwIDEgMCAtMzEuODMxJztcblxuY29uc3QgQ2lyY2x1bGFyUHJvZ3Jlc3MgPSAoeyBwZXJjZW50IH0pID0+IChcblx0PHN2ZyB2aWV3Qm94PVwiMCAwIDM2IDM2XCIgY2xhc3NOYW1lPVwiY2lyY3VsYXItcHJvZ3Jlc3NcIj5cblx0XHQ8cGF0aCBjbGFzc05hbWU9XCJjaXJjbGUtYmdcIiBkPXtDaXJjdWxhclBhdGhEfSAvPlxuXHRcdDxwYXRoIGNsYXNzTmFtZT1cImNpcmNsZVwiIHN0cm9rZURhc2hhcnJheT17YCR7cGVyY2VudCAqIDEwMH0sIDEwMGB9IGQ9e0NpcmN1bGFyUGF0aER9IC8+XG5cdFx0ey8qIGxhbmd1YWdlPUNTUyAqL31cblx0XHQ8c3R5bGUganN4PntDaXJjdWx1YXJQcm9ncmVzc1N0eWxlfTwvc3R5bGU+XG5cdDwvc3ZnPlxuKTtcblxuQ2lyY2x1bGFyUHJvZ3Jlc3MucHJvcFR5cGVzID0ge1xuXHRwZXJjZW50OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaXJjbHVsYXJQcm9ncmVzcztcbiJdfQ== */\n/*@ sourceURL=pages/CirclularProgress.js */';
CirculuarProgressStyle.__scopedHash = '895867784';
var CircularPathD = 'M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831';

var CirclularProgress = function CirclularProgress(_ref) {
	var percent = _ref.percent;
	return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
		'svg',
		{ viewBox: '0 0 36 36', className: 'jsx-' + CirculuarProgressStyle.__scopedHash + ' ' + 'circular-progress',
			__source: {
				fileName: _jsxFileName,
				lineNumber: 51
			}
		},
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', { d: CircularPathD, className: 'jsx-' + CirculuarProgressStyle.__scopedHash + ' ' + 'circle-bg',
			__source: {
				fileName: _jsxFileName,
				lineNumber: 52
			}
		}),
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', { strokeDasharray: percent * 100 + ', 100', d: CircularPathD, className: 'jsx-' + CirculuarProgressStyle.__scopedHash + ' ' + 'circle',
			__source: {
				fileName: _jsxFileName,
				lineNumber: 53
			}
		}),
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
			styleId: CirculuarProgressStyle.__scopedHash,
			css: CirculuarProgressStyle.__scoped
		})
	);
};

CirclularProgress.propTypes = {
	percent: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (CirclularProgress);

/***/ }),

/***/ "./pages/Control.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sudoku__ = __webpack_require__("./sudoku.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__NumberControl__ = __webpack_require__("./pages/NumberControl.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__functions__ = __webpack_require__("./pages/functions.js");
var _jsxFileName = '/Users/qianghuang/react-sudoku-game/pages/Control.js';

/* eslint-disable react/forbid-prop-types */
/* eslint-disable max-len */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable arrow-parens */
/* eslint-disable react/jsx-indent */
/* eslint-disable object-curly-newline */
/* eslint-disable indent */
/* eslint-disable no-tabs */
/* eslint-disable jsx-a11y/accessible-emoji */



// eslint-disable-next-line import/no-extraneous-dependencies







// eslint-disable-next-line no-lone-blocks
{
	/* language=CSS */
}
var ControlStyle = new String('.control{padding:0 2em;cursor:pointer;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-family:\'Special Elite\',cursive;-webkit-transition:filter 0.5s ease-in-out;transition:filter 0.5s ease-in-out;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL0NvbnRyb2wuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJ3QixBQUdpQixjQUNDLGVBQ0ssc0dBQ0QsNkZBQ0oseURBQ1EsbUdBQ2Msb0NBQ0YsOEVBQ3hCLFdBQ1oiLCJmaWxlIjoicGFnZXMvQ29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcWlhbmdodWFuZy9yZWFjdC1zdWRva3UtZ2FtZSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtaW5kZW50LXByb3BzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1taXhlZC1vcGVyYXRvcnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLW1peGVkLXNwYWNlcy1hbmQtdGFicyAqL1xuLyogZXNsaW50LWRpc2FibGUgYXJyb3ctcGFyZW5zICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtaW5kZW50ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBvYmplY3QtY3VybHktbmV3bGluZSAqL1xuLyogZXNsaW50LWRpc2FibGUgaW5kZW50ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby10YWJzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hY2Nlc3NpYmxlLWVtb2ppICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XG5cbmltcG9ydCB7IHJhbmdlIH0gZnJvbSAnLi4vc3Vkb2t1JztcblxuaW1wb3J0IE51bWJlckNvbnRyb2wgZnJvbSAnLi9OdW1iZXJDb250cm9sJztcbmltcG9ydCB7IGdldE51bWJlclZhbHVlQ291bnQgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb25lLWJsb2Nrc1xue1xuXHQvKiBsYW5ndWFnZT1DU1MgKi9cbn1cbmNvbnN0IENvbnRyb2xTdHlsZSA9IGNzc2Bcblx0LmNvbnRyb2wge1xuXHRcdHBhZGRpbmc6IDAgMmVtO1xuXHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRmb250LWZhbWlseTogJ1NwZWNpYWwgRWxpdGUnLCBjdXJzaXZlO1xuXHRcdHRyYW5zaXRpb246IGZpbHRlciAwLjVzIGVhc2UtaW4tb3V0O1xuXHRcdHdpZHRoOiAxMDAlO1xuXHR9XG5gO1xuXG5mdW5jdGlvbiBnZXRDbGlja0hhbmRsZXIob25DbGljaywgb25Eb3VibGVDbGljaywgZGVsYXkgPSAyNTApIHtcblx0bGV0IHRpbWVvdXRJRCA9IG51bGw7XG5cdHJldHVybiAoZXZlbnQpID0+IHtcblx0XHRpZiAoIXRpbWVvdXRJRCkge1xuXHRcdFx0dGltZW91dElEID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdG9uQ2xpY2soZXZlbnQpO1xuXHRcdFx0XHR0aW1lb3V0SUQgPSBudWxsO1xuXHRcdFx0fSwgZGVsYXkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aW1lb3V0SUQgPSBjbGVhclRpbWVvdXQodGltZW91dElEKTtcblx0XHRcdG9uRG91YmxlQ2xpY2soZXZlbnQpO1xuXHRcdH1cblx0fTtcbn1cblxuY29uc3QgQ29udHJvbCA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7IGJvYXJkLCBzZWxlY3RlZCwgZmlsbE51bWJlciwgZmlsbE5vdGUgfSA9IHByb3BzO1xuXHRjb25zdCBwcmVmaWxsZWQgPSBzZWxlY3RlZCAmJiBzZWxlY3RlZC5nZXQoJ3ByZWZpbGxlZCcpO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjb250cm9sXCI+XG5cdFx0XHR7cmFuZ2UoOSkubWFwKChpKSA9PiB7XG5cdFx0XHRcdGNvbnN0IG51bWJlciA9IGkgKyAxO1xuXHRcdFx0XHQvLyBoYW5kbGVzIGJpbmRpbmcgc2luZ2xlIGNsaWNrIGFuZCBkb3VibGUgY2xpY2sgY2FsbGJhY2tzXG5cdFx0XHRcdGNvbnN0IGNsaWNrSGFuZGxlID0gZ2V0Q2xpY2tIYW5kbGVyKFxuXHRcdFx0XHRcdCgpID0+IHtcblx0XHRcdFx0XHRcdGZpbGxOdW1iZXIobnVtYmVyKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdCgpID0+IHtcblx0XHRcdFx0XHRcdGZpbGxOb3RlKG51bWJlcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRyZXR1cm4gPE51bWJlckNvbnRyb2wga2V5PXtudW1iZXJ9IG51bWJlcj17bnVtYmVyfSBvbkNsaWNrPXshcHJlZmlsbGVkID8gY2xpY2tIYW5kbGUgOiB1bmRlZmluZWR9IGNvbXBsZXRpb25QZXJjZW50YWdlPXtnZXROdW1iZXJWYWx1ZUNvdW50KGJvYXJkLCBudW1iZXIpIC8gOX0gLz47XG5cdFx0XHR9KX1cblx0XHRcdDxzdHlsZSBqc3g+e0NvbnRyb2xTdHlsZX08L3N0eWxlPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuQ29udHJvbC5wcm9wVHlwZXMgPSB7XG5cdGJvYXJkOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cdHNlbGVjdGVkOiBQcm9wVHlwZXMub2JqZWN0LFxuXHRmaWxsTnVtYmVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXHRmaWxsTm90ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbkNvbnRyb2wuZGVmYXVsdFByb3BzID0ge1xuXHRzZWxlY3RlZDogbnVsbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyb2w7XG4iXX0= */\n/*@ sourceURL=pages/Control.js */');

ControlStyle.__hash = '3640242354';
ControlStyle.__scoped = '.control.jsx-811494771{padding:0 2em;cursor:pointer;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-family:\'Special Elite\',cursive;-webkit-transition:filter 0.5s ease-in-out;transition:filter 0.5s ease-in-out;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL0NvbnRyb2wuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJ3QixBQUdpQixjQUNDLGVBQ0ssc0dBQ0QsNkZBQ0oseURBQ1EsbUdBQ2Msb0NBQ0YsOEVBQ3hCLFdBQ1oiLCJmaWxlIjoicGFnZXMvQ29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcWlhbmdodWFuZy9yZWFjdC1zdWRva3UtZ2FtZSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtaW5kZW50LXByb3BzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1taXhlZC1vcGVyYXRvcnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLW1peGVkLXNwYWNlcy1hbmQtdGFicyAqL1xuLyogZXNsaW50LWRpc2FibGUgYXJyb3ctcGFyZW5zICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtaW5kZW50ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBvYmplY3QtY3VybHktbmV3bGluZSAqL1xuLyogZXNsaW50LWRpc2FibGUgaW5kZW50ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby10YWJzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hY2Nlc3NpYmxlLWVtb2ppICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XG5cbmltcG9ydCB7IHJhbmdlIH0gZnJvbSAnLi4vc3Vkb2t1JztcblxuaW1wb3J0IE51bWJlckNvbnRyb2wgZnJvbSAnLi9OdW1iZXJDb250cm9sJztcbmltcG9ydCB7IGdldE51bWJlclZhbHVlQ291bnQgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb25lLWJsb2Nrc1xue1xuXHQvKiBsYW5ndWFnZT1DU1MgKi9cbn1cbmNvbnN0IENvbnRyb2xTdHlsZSA9IGNzc2Bcblx0LmNvbnRyb2wge1xuXHRcdHBhZGRpbmc6IDAgMmVtO1xuXHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRmb250LWZhbWlseTogJ1NwZWNpYWwgRWxpdGUnLCBjdXJzaXZlO1xuXHRcdHRyYW5zaXRpb246IGZpbHRlciAwLjVzIGVhc2UtaW4tb3V0O1xuXHRcdHdpZHRoOiAxMDAlO1xuXHR9XG5gO1xuXG5mdW5jdGlvbiBnZXRDbGlja0hhbmRsZXIob25DbGljaywgb25Eb3VibGVDbGljaywgZGVsYXkgPSAyNTApIHtcblx0bGV0IHRpbWVvdXRJRCA9IG51bGw7XG5cdHJldHVybiAoZXZlbnQpID0+IHtcblx0XHRpZiAoIXRpbWVvdXRJRCkge1xuXHRcdFx0dGltZW91dElEID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdG9uQ2xpY2soZXZlbnQpO1xuXHRcdFx0XHR0aW1lb3V0SUQgPSBudWxsO1xuXHRcdFx0fSwgZGVsYXkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aW1lb3V0SUQgPSBjbGVhclRpbWVvdXQodGltZW91dElEKTtcblx0XHRcdG9uRG91YmxlQ2xpY2soZXZlbnQpO1xuXHRcdH1cblx0fTtcbn1cblxuY29uc3QgQ29udHJvbCA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7IGJvYXJkLCBzZWxlY3RlZCwgZmlsbE51bWJlciwgZmlsbE5vdGUgfSA9IHByb3BzO1xuXHRjb25zdCBwcmVmaWxsZWQgPSBzZWxlY3RlZCAmJiBzZWxlY3RlZC5nZXQoJ3ByZWZpbGxlZCcpO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjb250cm9sXCI+XG5cdFx0XHR7cmFuZ2UoOSkubWFwKChpKSA9PiB7XG5cdFx0XHRcdGNvbnN0IG51bWJlciA9IGkgKyAxO1xuXHRcdFx0XHQvLyBoYW5kbGVzIGJpbmRpbmcgc2luZ2xlIGNsaWNrIGFuZCBkb3VibGUgY2xpY2sgY2FsbGJhY2tzXG5cdFx0XHRcdGNvbnN0IGNsaWNrSGFuZGxlID0gZ2V0Q2xpY2tIYW5kbGVyKFxuXHRcdFx0XHRcdCgpID0+IHtcblx0XHRcdFx0XHRcdGZpbGxOdW1iZXIobnVtYmVyKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdCgpID0+IHtcblx0XHRcdFx0XHRcdGZpbGxOb3RlKG51bWJlcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRyZXR1cm4gPE51bWJlckNvbnRyb2wga2V5PXtudW1iZXJ9IG51bWJlcj17bnVtYmVyfSBvbkNsaWNrPXshcHJlZmlsbGVkID8gY2xpY2tIYW5kbGUgOiB1bmRlZmluZWR9IGNvbXBsZXRpb25QZXJjZW50YWdlPXtnZXROdW1iZXJWYWx1ZUNvdW50KGJvYXJkLCBudW1iZXIpIC8gOX0gLz47XG5cdFx0XHR9KX1cblx0XHRcdDxzdHlsZSBqc3g+e0NvbnRyb2xTdHlsZX08L3N0eWxlPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuQ29udHJvbC5wcm9wVHlwZXMgPSB7XG5cdGJvYXJkOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cdHNlbGVjdGVkOiBQcm9wVHlwZXMub2JqZWN0LFxuXHRmaWxsTnVtYmVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXHRmaWxsTm90ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbkNvbnRyb2wuZGVmYXVsdFByb3BzID0ge1xuXHRzZWxlY3RlZDogbnVsbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyb2w7XG4iXX0= */\n/*@ sourceURL=pages/Control.js */';
ControlStyle.__scopedHash = '811494771';
function getClickHandler(onClick, onDoubleClick) {
	var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 250;

	var timeoutID = null;
	return function (event) {
		if (!timeoutID) {
			timeoutID = setTimeout(function () {
				onClick(event);
				timeoutID = null;
			}, delay);
		} else {
			timeoutID = clearTimeout(timeoutID);
			onDoubleClick(event);
		}
	};
}

var Control = function Control(props) {
	var board = props.board,
	    selected = props.selected,
	    fillNumber = props.fillNumber,
	    fillNote = props.fillNote;

	var prefilled = selected && selected.get('prefilled');

	return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
		'div',
		{
			className: 'jsx-' + ControlStyle.__scopedHash + ' ' + 'control',
			__source: {
				fileName: _jsxFileName,
				lineNumber: 61
			}
		},
		Object(__WEBPACK_IMPORTED_MODULE_3__sudoku__["d" /* range */])(9).map(function (i) {
			var number = i + 1;
			// handles binding single click and double click callbacks
			var clickHandle = getClickHandler(function () {
				fillNumber(number);
			}, function () {
				fillNote(number);
			});
			return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__NumberControl__["a" /* default */], { key: number, number: number, onClick: !prefilled ? clickHandle : undefined, completionPercentage: Object(__WEBPACK_IMPORTED_MODULE_5__functions__["e" /* getNumberValueCount */])(board, number) / 9, __source: {
					fileName: _jsxFileName,
					lineNumber: 73
				}
			});
		}),
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
			styleId: ControlStyle.__scopedHash,
			css: ControlStyle.__scoped
		})
	);
};

Control.propTypes = {
	board: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object.isRequired,
	selected: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
	fillNumber: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
	fillNote: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired
};

Control.defaultProps = {
	selected: null
};

/* harmony default export */ __webpack_exports__["a"] = (Control);

/***/ }),

/***/ "./pages/Controls.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Control__ = __webpack_require__("./pages/Control.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Actions__ = __webpack_require__("./pages/Actions.js");
var _jsxFileName = '/Users/qianghuang/react-sudoku-game/pages/Controls.js';

/* eslint-disable react/forbid-prop-types */
/* eslint-disable max-len */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable arrow-parens */
/* eslint-disable react/jsx-indent */
/* eslint-disable object-curly-newline */
/* eslint-disable indent */
/* eslint-disable no-tabs */
/* eslint-disable jsx-a11y/accessible-emoji */






var Controls = function Controls(props) {
	var board = props.board,
	    history = props.history,
	    selected = props.selected,
	    fillNumber = props.fillNumber,
	    fillNote = props.fillNote,
	    undo = props.undo,
	    redo = props.redo,
	    erase = props.erase,
	    solution = props.solution;


	return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
		'div',
		{
			className: 'jsx-4158310308' + ' ' + 'controls',
			__source: {
				fileName: _jsxFileName,
				lineNumber: 22
			}
		},
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Control__["a" /* default */], { board: board, selected: selected, fillNumber: fillNumber, fillNote: fillNote, __source: {
				fileName: _jsxFileName,
				lineNumber: 23
			}
		}),
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Actions__["a" /* default */], { history: history, selected: selected, undo: undo, redo: redo, erase: erase, solution: solution, __source: {
				fileName: _jsxFileName,
				lineNumber: 24
			}
		}),
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
			styleId: '4158310308',
			css: '.controls.jsx-4158310308{margin-top:0.3em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;padding:0.5em 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL0NvbnRyb2xzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCSyxBQUd3QixpQkFDSiwwRUFDRSx5REFDUSxtR0FDWixXQUNLLGdCQUNqQiIsImZpbGUiOiJwYWdlcy9Db250cm9scy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcWlhbmdodWFuZy9yZWFjdC1zdWRva3UtZ2FtZSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtaW5kZW50LXByb3BzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1taXhlZC1vcGVyYXRvcnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLW1peGVkLXNwYWNlcy1hbmQtdGFicyAqL1xuLyogZXNsaW50LWRpc2FibGUgYXJyb3ctcGFyZW5zICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtaW5kZW50ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBvYmplY3QtY3VybHktbmV3bGluZSAqL1xuLyogZXNsaW50LWRpc2FibGUgaW5kZW50ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby10YWJzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hY2Nlc3NpYmxlLWVtb2ppICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBBY3Rpb25zIGZyb20gJy4vQWN0aW9ucyc7XG5cbmNvbnN0IENvbnRyb2xzID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHsgYm9hcmQsIGhpc3RvcnksIHNlbGVjdGVkLCBmaWxsTnVtYmVyLCBmaWxsTm90ZSwgdW5kbywgcmVkbywgZXJhc2UsIHNvbHV0aW9uIH0gPSBwcm9wcztcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbHNcIj5cblx0XHRcdDxDb250cm9sIGJvYXJkPXtib2FyZH0gc2VsZWN0ZWQ9e3NlbGVjdGVkfSBmaWxsTnVtYmVyPXtmaWxsTnVtYmVyfSBmaWxsTm90ZT17ZmlsbE5vdGV9IC8+XG5cdFx0XHQ8QWN0aW9ucyBoaXN0b3J5PXtoaXN0b3J5fSBzZWxlY3RlZD17c2VsZWN0ZWR9IHVuZG89e3VuZG99IHJlZG89e3JlZG99IGVyYXNlPXtlcmFzZX0gc29sdXRpb249e3NvbHV0aW9ufSAvPlxuXHRcdFx0ey8qIGxhbmd1YWdlPUNTUyAqL31cblx0XHRcdDxzdHlsZSBqc3g+XG5cdFx0XHRcdHtgXG5cdFx0XHRcdFx0LmNvbnRyb2xzIHtcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDAuM2VtO1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwLjVlbSAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH1cblx0XHRcdDwvc3R5bGU+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5Db250cm9scy5wcm9wVHlwZXMgPSB7XG5cdGJvYXJkOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cdGhpc3Rvcnk6IFByb3BUeXBlcy5vYmplY3QsXG5cdHNlbGVjdGVkOiBQcm9wVHlwZXMub2JqZWN0LFxuXHRmaWxsTnVtYmVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXHRmaWxsTm90ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblx0dW5kbzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblx0cmVkbzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblx0ZXJhc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cdHNvbHV0aW9uOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuQ29udHJvbHMuZGVmYXVsdFByb3BzID0ge1xuXHRoaXN0b3J5OiBudWxsLFxuXHRzZWxlY3RlZDogbnVsbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xzO1xuIl19 */\n/*@ sourceURL=pages/Controls.js */'
		})
	);
};

Controls.propTypes = {
	board: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object.isRequired,
	history: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
	selected: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
	fillNumber: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
	fillNote: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
	undo: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
	redo: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
	erase: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
	solution: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired
};

Controls.defaultProps = {
	history: null,
	selected: null
};

/* harmony default export */ __webpack_exports__["a"] = (Controls);

/***/ }),

/***/ "./pages/GenerateUI.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_color__ = __webpack_require__("color");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_color___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_color__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_input_range__ = __webpack_require__("react-input-range");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_input_range___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_input_range__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__colors__ = __webpack_require__("./colors.js");
var _jsxFileName = '/Users/qianghuang/react-sudoku-game/pages/GenerateUI.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable max-len */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable arrow-parens */
/* eslint-disable react/jsx-indent */
/* eslint-disable object-curly-newline */
/* eslint-disable indent */
/* eslint-disable no-tabs */
/* eslint-disable jsx-a11y/accessible-emoji */







var GenerationUI = function (_Component) {
	_inherits(GenerationUI, _Component);

	function GenerationUI(props) {
		_classCallCheck(this, GenerationUI);

		var _this = _possibleConstructorReturn(this, (GenerationUI.__proto__ || Object.getPrototypeOf(GenerationUI)).call(this, props));

		_this.generateGame = function () {
			_this.props.generateGame(_this.state.value);
		};

		_this.state = { value: 30 };
		return _this;
	}

	_createClass(GenerationUI, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
				'div',
				{
					className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['4276926998', [__WEBPACK_IMPORTED_MODULE_5__colors__["a" /* backGroundBlue */], __WEBPACK_IMPORTED_MODULE_3_color___default()(__WEBPACK_IMPORTED_MODULE_5__colors__["a" /* backGroundBlue */]).darken(0.5).hsl().string(), __WEBPACK_IMPORTED_MODULE_3_color___default()(__WEBPACK_IMPORTED_MODULE_5__colors__["a" /* backGroundBlue */]).lighten(0.2).hsl().string()]]]) + ' ' + 'generation',
					__source: {
						fileName: _jsxFileName,
						lineNumber: 31
					}
				},
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					'div',
					{
						className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['4276926998', [__WEBPACK_IMPORTED_MODULE_5__colors__["a" /* backGroundBlue */], __WEBPACK_IMPORTED_MODULE_3_color___default()(__WEBPACK_IMPORTED_MODULE_5__colors__["a" /* backGroundBlue */]).darken(0.5).hsl().string(), __WEBPACK_IMPORTED_MODULE_3_color___default()(__WEBPACK_IMPORTED_MODULE_5__colors__["a" /* backGroundBlue */]).lighten(0.2).hsl().string()]]]) + ' ' + 'copy',
						__source: {
							fileName: _jsxFileName,
							lineNumber: 32
						}
					},
					'Start with ',
					this.state.value,
					' cells prefilled'
				),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_input_range___default.a, { maxValue: 81, minValue: 17, value: this.state.value, onChange: function onChange(value) {
						return _this2.setState({ value: value });
					}, __source: {
						fileName: _jsxFileName,
						lineNumber: 33
					}
				}),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					'div',
					{ onClick: this.generateGame, className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['4276926998', [__WEBPACK_IMPORTED_MODULE_5__colors__["a" /* backGroundBlue */], __WEBPACK_IMPORTED_MODULE_3_color___default()(__WEBPACK_IMPORTED_MODULE_5__colors__["a" /* backGroundBlue */]).darken(0.5).hsl().string(), __WEBPACK_IMPORTED_MODULE_3_color___default()(__WEBPACK_IMPORTED_MODULE_5__colors__["a" /* backGroundBlue */]).lighten(0.2).hsl().string()]]]) + ' ' + 'button',
						__source: {
							fileName: _jsxFileName,
							lineNumber: 34
						}
					},
					'Play Sudoku'
				),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
					styleId: '4276926998',
					css: '.copy.__jsx-style-dynamic-selector{text-align:center;font-size:1.3em;margin-bottom:0.5em;}.generation.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.input-range{width:80%;max-width:500px;}.button.__jsx-style-dynamic-selector{margin-top:0.5em;border-radius:0.25em;cursor:pointer;font-weight:bold;-webkit-text-decoration:none;text-decoration:none;color:#fff;position:relative;display:inline-block;-webkit-transition:all 0.25s;transition:all 0.25s;padding:5px 10px;font-size:1.4em;}.button.__jsx-style-dynamic-selector:active{-webkit-transform:translate(0px,5px);-ms-transform:translate(0px,5px);transform:translate(0px,5px);box-shadow:0 1px 0 0;}.button.__jsx-style-dynamic-selector{background-color:' + __WEBPACK_IMPORTED_MODULE_5__colors__["a" /* backGroundBlue */] + ';box-shadow:0 2px 4px 0 ' + __WEBPACK_IMPORTED_MODULE_3_color___default()(__WEBPACK_IMPORTED_MODULE_5__colors__["a" /* backGroundBlue */]).darken(0.5).hsl().string() + ';display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.button.__jsx-style-dynamic-selector:hover{background-color:' + __WEBPACK_IMPORTED_MODULE_3_color___default()(__WEBPACK_IMPORTED_MODULE_5__colors__["a" /* backGroundBlue */]).lighten(0.2).hsl().string() + ';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL0dlbmVyYXRlVUkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0NNLEFBRzBCLEFBS0wsQUFPSCxBQUlPLEFBYWEsQUFLZ0IsQUFPQSxVQTVCOUIsT0FJSyxDQWhCTCxRQWFqQixRQVpxQixJQWdCTCxRQWlCcUMsQUFPckQsT0F2QmtCLENBaEJsQixnQkFpQnNCLElBZEUsd0JBOEJWLENBTlEscUJBVFYsQUFVWixXQVRtQixrQkFDRyxxQkFDQSxFQWFGLENBOUJHLCtDQWtCTCxpQkFDRCxjQWxCTCxFQW1CWixTQWxCb0IsR0E2QnBCLDBGQTVCQSIsImZpbGUiOiJwYWdlcy9HZW5lcmF0ZVVJLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9xaWFuZ2h1YW5nL3JlYWN0LXN1ZG9rdS1nYW1lIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWluZGVudC1wcm9wcyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tbWl4ZWQtb3BlcmF0b3JzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1taXhlZC1zcGFjZXMtYW5kLXRhYnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGFycm93LXBhcmVucyAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWluZGVudCAqL1xuLyogZXNsaW50LWRpc2FibGUgb2JqZWN0LWN1cmx5LW5ld2xpbmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGluZGVudCAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdGFicyAqL1xuLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYWNjZXNzaWJsZS1lbW9qaSAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQ29sb3IgZnJvbSAnY29sb3InO1xuaW1wb3J0IElucHV0UmFuZ2UgZnJvbSAncmVhY3QtaW5wdXQtcmFuZ2UnO1xuXG5pbXBvcnQgeyBiYWNrR3JvdW5kQmx1ZSB9IGZyb20gJy4uL2NvbG9ycyc7XG5cbmNsYXNzIEdlbmVyYXRpb25VSSBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0dGhpcy5zdGF0ZSA9IHsgdmFsdWU6IDMwIH07XG5cdH1cblxuXHRnZW5lcmF0ZUdhbWUgPSAoKSA9PiB7XG5cdFx0dGhpcy5wcm9wcy5nZW5lcmF0ZUdhbWUodGhpcy5zdGF0ZS52YWx1ZSk7XG5cdH07XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdlbmVyYXRpb25cIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb3B5XCI+U3RhcnQgd2l0aCB7dGhpcy5zdGF0ZS52YWx1ZX0gY2VsbHMgcHJlZmlsbGVkPC9kaXY+XG5cdFx0XHRcdDxJbnB1dFJhbmdlIG1heFZhbHVlPXs4MX0gbWluVmFsdWU9ezE3fSB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0gb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHZhbHVlIH0pfSAvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuZ2VuZXJhdGVHYW1lfT5cblx0XHRcdFx0XHRQbGF5IFN1ZG9rdVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0ey8qIGxhbmd1YWdlPUNTUyAqL31cblx0XHRcdFx0PHN0eWxlIGpzeD5cblx0XHRcdFx0XHR7YFxuXHRcdFx0XHRcdFx0LmNvcHkge1xuXHRcdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMS4zZW07XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDAuNWVtO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmdlbmVyYXRpb24ge1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ6Z2xvYmFsKC5pbnB1dC1yYW5nZSkge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogODAlO1xuXHRcdFx0XHRcdFx0XHRtYXgtd2lkdGg6IDUwMHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmJ1dHRvbiB7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDAuNWVtO1xuXHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAwLjI1ZW07XG5cdFx0XHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0XHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDVweCAxMHB4O1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEuNGVtO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmJ1dHRvbjphY3RpdmUge1xuXHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDVweCk7XG5cdFx0XHRcdFx0XHRcdGJveC1zaGFkb3c6IDAgMXB4IDAgMDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LmJ1dHRvbiB7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICR7YmFja0dyb3VuZEJsdWV9O1xuXHRcdFx0XHRcdFx0XHRib3gtc2hhZG93OiAwIDJweCA0cHggMCAke0NvbG9yKGJhY2tHcm91bmRCbHVlKS5kYXJrZW4oMC41KS5oc2woKS5zdHJpbmcoKX07XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5idXR0b246aG92ZXIge1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAke0NvbG9yKGJhY2tHcm91bmRCbHVlKS5saWdodGVuKDAuMikuaHNsKCkuc3RyaW5nKCl9O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGB9XG5cdFx0XHRcdDwvc3R5bGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbkdlbmVyYXRpb25VSS5wcm9wVHlwZXMgPSB7XG5cdGdlbmVyYXRlR2FtZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdlbmVyYXRpb25VSTtcbiJdfQ== */\n/*@ sourceURL=pages/GenerateUI.js */',
					dynamic: [__WEBPACK_IMPORTED_MODULE_5__colors__["a" /* backGroundBlue */], __WEBPACK_IMPORTED_MODULE_3_color___default()(__WEBPACK_IMPORTED_MODULE_5__colors__["a" /* backGroundBlue */]).darken(0.5).hsl().string(), __WEBPACK_IMPORTED_MODULE_3_color___default()(__WEBPACK_IMPORTED_MODULE_5__colors__["a" /* backGroundBlue */]).lighten(0.2).hsl().string()]
				})
			);
		}
	}]);

	return GenerationUI;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

GenerationUI.propTypes = {
	generateGame: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (GenerationUI);

/***/ }),

/***/ "./pages/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_tool_tip__ = __webpack_require__("./components/tool-tip.js");
var _jsxFileName = '/Users/qianghuang/react-sudoku-game/pages/Header.js';

/* eslint-disable max-len */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable arrow-parens */
/* eslint-disable react/jsx-indent */
/* eslint-disable object-curly-newline */
/* eslint-disable indent */
/* eslint-disable no-tabs */
/* eslint-disable jsx-a11y/accessible-emoji */





var ReturnIcon = function ReturnIcon(props) {
	return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
		'svg',
		props,
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', {
			d: 'M384.834 180.699H36.101l73.326-82.187c4.755-5.33 4.289-13.505-1.041-18.26-5.328-4.754-13.505-4.29-18.26 1.041l-82.582 92.56c-10.059 11.278-10.058 28.282.001 39.557l82.582 92.561a12.897 12.897 0 0 0 9.654 4.323c3.064 0 6.139-1.083 8.606-3.282 5.33-4.755 5.795-12.93 1.041-18.26l-73.326-82.188h348.733c55.858 0 101.3 45.444 101.3 101.3s-45.443 101.3-101.3 101.3h-61.58c-7.143 0-12.933 5.791-12.933 12.933 0 7.142 5.79 12.933 12.933 12.933h61.58c70.12 0 127.166-57.046 127.166-127.166-.001-70.119-57.047-127.165-127.167-127.165z'
		})
	);
};

ReturnIcon.defaultProps = {
	xmlns: 'http://www.w3.org/2000/svg',
	viewBox: '0 0 512.001 512.001'
};


var Header = function Header(_ref) {
	var onClick = _ref.onClick;
	return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
		'div',
		{
			className: 'jsx-1668768040' + ' ' + 'header',
			__source: {
				fileName: _jsxFileName,
				lineNumber: 19
			}
		},
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
			'div',
			{ onClick: onClick, className: 'jsx-1668768040' + ' ' + 'new-game',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 20
				}
			},
			__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ReturnIcon, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 21
				}
			}),
			__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
				'div',
				{
					className: 'jsx-1668768040',
					__source: {
						fileName: _jsxFileName,
						lineNumber: 22
					}
				},
				'New Game'
			)
		),
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_tool_tip__["a" /* default */], {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 24
			}
		}),
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
			styleId: '1668768040',
			css: '.header.jsx-1668768040{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;max-width:500px;padding:0 0.5em;box-sizing:border-box;}.new-game.jsx-1668768040{cursor:pointer;margin-top:0.2em;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0.2em 0;}.new-game.jsx-1668768040 svg{height:1em;margin-bottom:0.3em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL0hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQkksQUFHbUIsQUFRRSxBQVFKLFdBQ1MsSUFSSCxnQkFTbEIsQ0FScUIsMENBVFQsV0FDbUIsaURBU1Asa0VBUlAsZ0JBQ0EsZ0JBQ00sQ0FPSCxxQkFOcEIsd0VBT2lCLGdCQUNqQiIsImZpbGUiOiJwYWdlcy9IZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3FpYW5naHVhbmcvcmVhY3Qtc3Vkb2t1LWdhbWUiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtaW5kZW50LXByb3BzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1taXhlZC1vcGVyYXRvcnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLW1peGVkLXNwYWNlcy1hbmQtdGFicyAqL1xuLyogZXNsaW50LWRpc2FibGUgYXJyb3ctcGFyZW5zICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtaW5kZW50ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBvYmplY3QtY3VybHktbmV3bGluZSAqL1xuLyogZXNsaW50LWRpc2FibGUgaW5kZW50ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby10YWJzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hY2Nlc3NpYmxlLWVtb2ppICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IFRpcCBmcm9tICcuLi9jb21wb25lbnRzL3Rvb2wtdGlwJztcblxuaW1wb3J0IFJldHVybkljb24gZnJvbSAnLi4vc3ZnL3JldHVybi5zdmcnO1xuXG5jb25zdCBIZWFkZXIgPSAoeyBvbkNsaWNrIH0pID0+IChcblx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5ldy1nYW1lXCIgb25DbGljaz17b25DbGlja30+XG5cdFx0XHQ8UmV0dXJuSWNvbiAvPlxuXHRcdFx0PGRpdj5OZXcgR2FtZTwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcdDxUaXAgLz5cblx0XHR7LyogbGFuZ3VhZ2U9Q1NTICovfVxuXHRcdDxzdHlsZSBqc3g+XG5cdFx0XHR7YFxuXHRcdFx0XHQuaGVhZGVyIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRcdFx0XHRtYXgtd2lkdGg6IDUwMHB4O1xuXHRcdFx0XHRcdHBhZGRpbmc6IDAgMC41ZW07XG5cdFx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdFx0fVxuXHRcdFx0XHQubmV3LWdhbWUge1xuXHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAwLjJlbTtcblx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDAuMmVtIDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0Lm5ldy1nYW1lIDpnbG9iYWwoc3ZnKSB7XG5cdFx0XHRcdFx0aGVpZ2h0OiAxZW07XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMC4zZW07XG5cdFx0XHRcdH1cblx0XHRcdGB9XG5cdFx0PC9zdHlsZT5cblx0PC9kaXY+XG4pO1xuXG5IZWFkZXIucHJvcFR5cGVzID0ge1xuXHRvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cbkhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XG5cdG9uQ2xpY2s6IG51bGwsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXX0= */\n/*@ sourceURL=pages/Header.js */'
		})
	);
};

Header.propTypes = {
	onClick: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func
};

Header.defaultProps = {
	onClick: null
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./pages/NextHeader.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
var _jsxFileName = '/Users/qianghuang/react-sudoku-game/pages/NextHeader.js';
/* eslint-disable max-len */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable arrow-parens */
/* eslint-disable react/jsx-indent */
/* eslint-disable object-curly-newline */
/* eslint-disable indent */
/* eslint-disable no-tabs */
/* eslint-disable jsx-a11y/accessible-emoji */



var Description = 'Discover the next evolution of Sudoku with amazing graphics, animations, and user-friendly features. Enjoy a Sudoku experience like you never have before with customizable game generation, cell highlighting, intuitive controls and more!';

var NextHeader = function NextHeader() {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		__WEBPACK_IMPORTED_MODULE_1_next_head___default.a,
		{
			__source: {
				fileName: _jsxFileName,
				lineNumber: 17
			}
		},
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'title',
			{
				__source: {
					fileName: _jsxFileName,
					lineNumber: 18
				}
			},
			'Sudoku Evolved'
		),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
				fileName: _jsxFileName,
				lineNumber: 19
			}
		}),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'description', content: Description, __source: {
				fileName: _jsxFileName,
				lineNumber: 20
			}
		}),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Special+Elite', rel: 'stylesheet', __source: {
				fileName: _jsxFileName,
				lineNumber: 21
			}
		}),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:url', content: 'https://sudoku.sitianliu.com/', __source: {
				fileName: _jsxFileName,
				lineNumber: 22
			}
		}),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:title', content: 'Sudoku Evolved', __source: {
				fileName: _jsxFileName,
				lineNumber: 23
			}
		}),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:type', content: 'website', __source: {
				fileName: _jsxFileName,
				lineNumber: 24
			}
		}),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:description', content: Description, __source: {
				fileName: _jsxFileName,
				lineNumber: 25
			}
		}),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:image', content: 'https://sudoku.sitianliu.com/static/og-image.png', __source: {
				fileName: _jsxFileName,
				lineNumber: 26
			}
		})
	);
};

/* harmony default export */ __webpack_exports__["a"] = (NextHeader);

/***/ }),

/***/ "./pages/NumberControl.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CirclularProgress__ = __webpack_require__("./pages/CirclularProgress.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__("./pages/utils.js");
var _jsxFileName = '/Users/qianghuang/react-sudoku-game/pages/NumberControl.js';

/* eslint-disable max-len */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable arrow-parens */
/* eslint-disable react/jsx-indent */
/* eslint-disable object-curly-newline */
/* eslint-disable indent */
/* eslint-disable no-tabs */
/* eslint-disable jsx-a11y/accessible-emoji */



// eslint-disable-next-line import/no-extraneous-dependencies





// eslint-disable-next-line no-lone-blocks
{
	/* language=CSS */
}
var NumberControlStyle = new String('.number{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:2em;margin:0.1em;width:1.5em;height:1.5em;color:' + __WEBPACK_IMPORTED_MODULE_4__utils__["a" /* ControlNumberColor */] + ';box-shadow:0 1px 2px rgba(0,0,0,0.16),0 1px 2px rgba(0,0,0,0.23);border-radius:50%;}.number>div{margin-top:0.3em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL051bWJlckNvbnRyb2wuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUI4QixBQUdnQixBQWFJLGlCQUNsQix5REFibUIsa0JBQ0ssbUdBQ0osNkZBQ0wsY0FDRCxhQUNELFlBQ0MsYUFDc0IsbUNBQ3FDLGlFQUN0RCxrQkFDbkIiLCJmaWxlIjoicGFnZXMvTnVtYmVyQ29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcWlhbmdodWFuZy9yZWFjdC1zdWRva3UtZ2FtZSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1pbmRlbnQtcHJvcHMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLW1peGVkLW9wZXJhdG9ycyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tbWl4ZWQtc3BhY2VzLWFuZC10YWJzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBhcnJvdy1wYXJlbnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1pbmRlbnQgKi9cbi8qIGVzbGludC1kaXNhYmxlIG9iamVjdC1jdXJseS1uZXdsaW5lICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbmRlbnQgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXRhYnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FjY2Vzc2libGUtZW1vamkgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5pbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcblxuaW1wb3J0IENpcmNsdWxhclByb2dyZXNzIGZyb20gJy4vQ2lyY2x1bGFyUHJvZ3Jlc3MnO1xuaW1wb3J0IHsgQ29udHJvbE51bWJlckNvbG9yIH0gZnJvbSAnLi91dGlscyc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb25lLWJsb2Nrc1xue1xuXHQvKiBsYW5ndWFnZT1DU1MgKi9cbn1cbmNvbnN0IE51bWJlckNvbnRyb2xTdHlsZSA9IGNzc2Bcblx0Lm51bWJlciB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRmb250LXNpemU6IDJlbTtcblx0XHRtYXJnaW46IDAuMWVtO1xuXHRcdHdpZHRoOiAxLjVlbTtcblx0XHRoZWlnaHQ6IDEuNWVtO1xuXHRcdGNvbG9yOiAke0NvbnRyb2xOdW1iZXJDb2xvcn07XG5cdFx0Ym94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0fVxuXHQubnVtYmVyID4gZGl2IHtcblx0XHRtYXJnaW4tdG9wOiAwLjNlbTtcblx0fVxuYDtcblxuY29uc3QgTnVtYmVyQ29udHJvbCA9ICh7IG51bWJlciwgb25DbGljaywgY29tcGxldGlvblBlcmNlbnRhZ2UgfSkgPT4gKFxuXHQ8ZGl2IGtleT17bnVtYmVyfSBjbGFzc05hbWU9XCJudW1iZXJcIiBvbkNsaWNrPXtvbkNsaWNrfT5cblx0XHQ8ZGl2PntudW1iZXJ9PC9kaXY+XG5cdFx0PENpcmNsdWxhclByb2dyZXNzIHBlcmNlbnQ9e2NvbXBsZXRpb25QZXJjZW50YWdlfSAvPlxuXHRcdDxzdHlsZSBqc3g+e051bWJlckNvbnRyb2xTdHlsZX08L3N0eWxlPlxuXHQ8L2Rpdj5cbik7XG5cbk51bWJlckNvbnRyb2wucHJvcFR5cGVzID0ge1xuXHRudW1iZXI6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblx0b25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG5cdGNvbXBsZXRpb25QZXJjZW50YWdlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG59O1xuXG5OdW1iZXJDb250cm9sLmRlZmF1bHRQcm9wcyA9IHtcblx0b25DbGljazogbnVsbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckNvbnRyb2w7XG4iXX0= */\n/*@ sourceURL=pages/NumberControl.js */');

NumberControlStyle.__hash = '3439289403';
NumberControlStyle.__scoped = '.number.jsx-869851258{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:2em;margin:0.1em;width:1.5em;height:1.5em;color:' + __WEBPACK_IMPORTED_MODULE_4__utils__["a" /* ControlNumberColor */] + ';box-shadow:0 1px 2px rgba(0,0,0,0.16),0 1px 2px rgba(0,0,0,0.23);border-radius:50%;}.number.jsx-869851258>div.jsx-869851258{margin-top:0.3em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL051bWJlckNvbnRyb2wuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUI4QixBQUdnQixBQWFJLGlCQUNsQix5REFibUIsa0JBQ0ssbUdBQ0osNkZBQ0wsY0FDRCxhQUNELFlBQ0MsYUFDc0IsbUNBQ3FDLGlFQUN0RCxrQkFDbkIiLCJmaWxlIjoicGFnZXMvTnVtYmVyQ29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcWlhbmdodWFuZy9yZWFjdC1zdWRva3UtZ2FtZSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1pbmRlbnQtcHJvcHMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLW1peGVkLW9wZXJhdG9ycyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tbWl4ZWQtc3BhY2VzLWFuZC10YWJzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBhcnJvdy1wYXJlbnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1pbmRlbnQgKi9cbi8qIGVzbGludC1kaXNhYmxlIG9iamVjdC1jdXJseS1uZXdsaW5lICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbmRlbnQgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXRhYnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FjY2Vzc2libGUtZW1vamkgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5pbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcblxuaW1wb3J0IENpcmNsdWxhclByb2dyZXNzIGZyb20gJy4vQ2lyY2x1bGFyUHJvZ3Jlc3MnO1xuaW1wb3J0IHsgQ29udHJvbE51bWJlckNvbG9yIH0gZnJvbSAnLi91dGlscyc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb25lLWJsb2Nrc1xue1xuXHQvKiBsYW5ndWFnZT1DU1MgKi9cbn1cbmNvbnN0IE51bWJlckNvbnRyb2xTdHlsZSA9IGNzc2Bcblx0Lm51bWJlciB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRmb250LXNpemU6IDJlbTtcblx0XHRtYXJnaW46IDAuMWVtO1xuXHRcdHdpZHRoOiAxLjVlbTtcblx0XHRoZWlnaHQ6IDEuNWVtO1xuXHRcdGNvbG9yOiAke0NvbnRyb2xOdW1iZXJDb2xvcn07XG5cdFx0Ym94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0fVxuXHQubnVtYmVyID4gZGl2IHtcblx0XHRtYXJnaW4tdG9wOiAwLjNlbTtcblx0fVxuYDtcblxuY29uc3QgTnVtYmVyQ29udHJvbCA9ICh7IG51bWJlciwgb25DbGljaywgY29tcGxldGlvblBlcmNlbnRhZ2UgfSkgPT4gKFxuXHQ8ZGl2IGtleT17bnVtYmVyfSBjbGFzc05hbWU9XCJudW1iZXJcIiBvbkNsaWNrPXtvbkNsaWNrfT5cblx0XHQ8ZGl2PntudW1iZXJ9PC9kaXY+XG5cdFx0PENpcmNsdWxhclByb2dyZXNzIHBlcmNlbnQ9e2NvbXBsZXRpb25QZXJjZW50YWdlfSAvPlxuXHRcdDxzdHlsZSBqc3g+e051bWJlckNvbnRyb2xTdHlsZX08L3N0eWxlPlxuXHQ8L2Rpdj5cbik7XG5cbk51bWJlckNvbnRyb2wucHJvcFR5cGVzID0ge1xuXHRudW1iZXI6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblx0b25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG5cdGNvbXBsZXRpb25QZXJjZW50YWdlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG59O1xuXG5OdW1iZXJDb250cm9sLmRlZmF1bHRQcm9wcyA9IHtcblx0b25DbGljazogbnVsbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckNvbnRyb2w7XG4iXX0= */\n/*@ sourceURL=pages/NumberControl.js */';
NumberControlStyle.__scopedHash = '869851258';
var NumberControl = function NumberControl(_ref) {
	var number = _ref.number,
	    onClick = _ref.onClick,
	    completionPercentage = _ref.completionPercentage;
	return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
		'div',
		{ key: number, onClick: onClick, className: 'jsx-' + NumberControlStyle.__scopedHash + ' ' + 'number',
			__source: {
				fileName: _jsxFileName,
				lineNumber: 44
			}
		},
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
			'div',
			{
				className: 'jsx-' + NumberControlStyle.__scopedHash,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 45
				}
			},
			number
		),
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__CirclularProgress__["a" /* default */], { percent: completionPercentage, __source: {
				fileName: _jsxFileName,
				lineNumber: 46
			}
		}),
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
			styleId: NumberControlStyle.__scopedHash,
			css: NumberControlStyle.__scoped
		})
	);
};

NumberControl.propTypes = {
	number: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number.isRequired,
	onClick: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
	completionPercentage: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number.isRequired
};

NumberControl.defaultProps = {
	onClick: null
};

/* harmony default export */ __webpack_exports__["a"] = (NumberControl);

/***/ }),

/***/ "./pages/functions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export makeBoard */
/* unused harmony export updateBoardWithNumber */
/* harmony export (immutable) */ __webpack_exports__["g"] = selectCell;
/* harmony export (immutable) */ __webpack_exports__["f"] = isConflict;
/* harmony export (immutable) */ __webpack_exports__["b"] = fillNumber;
/* harmony export (immutable) */ __webpack_exports__["c"] = fillSelectedWithSolution;
/* harmony export (immutable) */ __webpack_exports__["a"] = addNumberAsNote;
/* harmony export (immutable) */ __webpack_exports__["e"] = getNumberValueCount;
/* harmony export (immutable) */ __webpack_exports__["d"] = generateGame;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__("immutable");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sudoku__ = __webpack_require__("./sudoku.js");
/* eslint-disable consistent-return */
/* eslint-disable max-len */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable arrow-parens */
/* eslint-disable react/jsx-indent */
/* eslint-disable object-curly-newline */
/* eslint-disable indent */
/* eslint-disable no-tabs */
/* eslint-disable jsx-a11y/accessible-emoji */





/**
 * make size 9 array of 0s
 * @returns {Array}
 */
function makeCountObject() {
	var countObj = [];
	for (var i = 0; i < 10; i += 1) {
		countObj.push(0);
	}return countObj;
}

/**
 * given a 2D array of numbers as the initial puzzle, generate the initial game state
 * @param puzzle
 * @returns {any}
 */
function makeBoard(_ref) {
	var puzzle = _ref.puzzle;

	// create initial count object to keep track of conflicts per number value
	var rows = Array.from(Array(9).keys()).map(function () {
		return makeCountObject();
	});
	var columns = Array.from(Array(9).keys()).map(function () {
		return makeCountObject();
	});
	var squares = Array.from(Array(9).keys()).map(function () {
		return makeCountObject();
	});
	var result = puzzle.map(function (row, i) {
		return row.map(function (cell, j) {
			if (cell) {
				rows[i][cell] += 1;
				columns[j][cell] += 1;
				squares[Math.floor(i / 3) * 3 + Math.floor(j / 3)][cell] += 1;
			}
			return {
				value: puzzle[i][j] > 0 ? puzzle[i][j] : null,
				prefilled: !!puzzle[i][j]
			};
		});
	});
	return Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["fromJS"])({ puzzle: result, selected: false, choices: { rows: rows, columns: columns, squares: squares } });
}

/**
 * give the coordinate update the current board with a number choice
 * @param x
 * @param y
 * @param number
 * @param fill whether to set or unset
 * @param board the immutable board given to change
 */
function updateBoardWithNumber(_ref2) {
	var x = _ref2.x,
	    y = _ref2.y,
	    number = _ref2.number,
	    _ref2$fill = _ref2.fill,
	    fill = _ref2$fill === undefined ? true : _ref2$fill,
	    board = _ref2.board;

	var cell = board.get('puzzle').getIn([x, y]);
	// delete its notes
	cell = cell.delete('notes');
	// set or unset its value depending on `fill`
	cell = fill ? cell.set('value', number) : cell.delete('value');
	var increment = fill ? 1 : -1;
	// update the current group choices
	var rowPath = ['choices', 'rows', x, number];
	var columnPath = ['choices', 'columns', y, number];
	var squarePath = ['choices', 'squares', Math.floor(x / 3) * 3 + Math.floor(y / 3), number];
	return board.setIn(rowPath, board.getIn(rowPath) + increment).setIn(columnPath, board.getIn(columnPath) + increment).setIn(squarePath, board.getIn(squarePath) + increment).setIn(['puzzle', x, y], cell);
}

function selectCell(board, x, y) {
	return board.set('selected', { x: x, y: y });
}

function isConflict(board, i, j) {
	var _board$getIn$toJSON = board.getIn(['puzzle', i, j]).toJSON(),
	    value = _board$getIn$toJSON.value;

	if (!value) return false;
	var rowConflict = board.getIn(['choices', 'rows', i, value]) > 1;
	var columnConflict = board.getIn(['choices', 'columns', j, value]) > 1;
	var squareConflict = board.getIn(['choices', 'squares', Math.floor(i / 3) * 3 + Math.floor(j / 3), value]) > 1;
	return rowConflict || columnConflict || squareConflict;
}

function fillNumber(oldBoard, selectedCell, number) {
	var board = oldBoard;
	// no-op if nothing is selected
	if (!selectedCell) return;
	var prefilled = selectedCell.get('prefilled');
	// no-op if it is refilled
	if (prefilled) return;

	var _board$get = board.get('selected'),
	    x = _board$get.x,
	    y = _board$get.y;

	var currentValue = selectedCell.get('value');
	// remove the current value and update the game state
	if (currentValue) {
		board = updateBoardWithNumber({
			x: x,
			y: y,
			number: currentValue,
			fill: false,
			board: board
		});
	}
	// update to new number if any
	var setNumber = currentValue !== number && number;
	if (setNumber) {
		board = updateBoardWithNumber({
			x: x,
			y: y,
			number: number,
			fill: true,
			board: board
		});
	}
	return board;
}

function fillSelectedWithSolution(board, solution, selectedCell) {
	if (!selectedCell) return;

	var _board$get2 = board.get('selected'),
	    x = _board$get2.x,
	    y = _board$get2.y;

	return solution[x][y];
}

function addNumberAsNote(oldBoard, oldSelectedCell, number) {
	var board = oldBoard;
	var selectedCell = oldSelectedCell;
	if (!selectedCell) return;
	var prefilled = selectedCell.get('prefilled');
	if (prefilled) return;

	var _board$get3 = board.get('selected'),
	    x = _board$get3.x,
	    y = _board$get3.y;

	var currentValue = selectedCell.get('value');
	if (currentValue) {
		board = updateBoardWithNumber({
			x: x,
			y: y,
			number: currentValue,
			fill: false,
			board: board
		});
	}
	var notes = selectedCell.get('notes') || Set();
	if (notes.has(number)) {
		notes = notes.delete(number);
	} else {
		notes = notes.add(number);
	}
	selectedCell = selectedCell.set('notes', notes);
	selectedCell = selectedCell.delete('value');
	board = board.setIn(['puzzle', x, y], selectedCell);
}

function getNumberOfGroupsAssignedForNumber(number, groups) {
	return groups.reduce(function (accumulator, row) {
		return accumulator + (row.get(number) > 0 ? 1 : 0);
	}, 0);
}

// get the min between its completion in rows, columns and squares.
function getNumberValueCount(board, number) {
	var rows = board.getIn(['choices', 'rows']);
	var columns = board.getIn(['choices', 'columns']);
	var squares = board.getIn(['choices', 'squares']);
	return Math.min(getNumberOfGroupsAssignedForNumber(number, squares), Math.min(getNumberOfGroupsAssignedForNumber(number, rows), getNumberOfGroupsAssignedForNumber(number, columns)));
}

function generateGame() {
	var finalCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;

	console.log('generating');
	// get a filled puzzle generated
	var solution = Object(__WEBPACK_IMPORTED_MODULE_1__sudoku__["b" /* makePuzzle */])();
	// pluck values from cells to create the game

	var _pluck = Object(__WEBPACK_IMPORTED_MODULE_1__sudoku__["c" /* pluck */])(solution, finalCount),
	    puzzle = _pluck.puzzle;
	// initialize the board with choice counts


	var board = makeBoard({ puzzle: puzzle });
	return {
		board: board,
		history: __WEBPACK_IMPORTED_MODULE_0_immutable__["List"].of(board),
		historyOffSet: 0,
		solution: solution
	};
}

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__input_range_style__ = __webpack_require__("./input-range-style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__BoardView__ = __webpack_require__("./pages/BoardView.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__NextHeader__ = __webpack_require__("./pages/NextHeader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Header__ = __webpack_require__("./pages/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Controls__ = __webpack_require__("./pages/Controls.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__GenerateUI__ = __webpack_require__("./pages/GenerateUI.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__functions__ = __webpack_require__("./pages/functions.js");
var _jsxFileName = '/Users/qianghuang/react-sudoku-game/pages/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable arrow-parens */
/* eslint-disable react/jsx-indent */
/* eslint-disable object-curly-newline */
/* eslint-disable indent */
/* eslint-disable no-tabs */
/* eslint-disable jsx-a11y/accessible-emoji */











// eslint-disable-next-line react/no-multi-comp

var Index = function (_Component) {
	_inherits(Index, _Component);

	function Index() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Index);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.generateGame = function () {
			var finalCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;

			_this.setState(Object(__WEBPACK_IMPORTED_MODULE_8__functions__["d" /* generateGame */])(finalCount));
		}, _this.addNumberAsNote = function (number) {
			var board = Object(__WEBPACK_IMPORTED_MODULE_8__functions__["a" /* addNumberAsNote */])(_this.state.board, _this.getSelectedCell(), number);
			if (board) _this.updateBoard(board);
		}, _this.updateBoard = function (newBoard) {
			var history = _this.state.history;
			var historyOffSet = _this.state.historyOffSet;
			// anything before current step is still in history

			history = history.slice(0, historyOffSet + 1);
			// add itself onto the history
			history = history.push(newBoard);
			// update the game
			_this.setState({ board: newBoard, history: history, historyOffSet: history.size - 1 });
		}, _this.canUndo = function () {
			return _this.state.historyOffSet > 0;
		}, _this.redo = function () {
			var history = _this.state.history;
			var historyOffSet = _this.state.historyOffSet;

			if (history.size) {
				historyOffSet = Math.min(history.size - 1, historyOffSet + 1);
				var board = history.get(historyOffSet);
				_this.setState({ board: board, historyOffSet: historyOffSet });
			}
		}, _this.undo = function () {
			var history = _this.state.history;
			var _this$state = _this.state,
			    historyOffSet = _this$state.historyOffSet,
			    board = _this$state.board;

			if (history.size) {
				historyOffSet = Math.max(0, historyOffSet - 1);
				board = history.get(historyOffSet);
				_this.setState({ board: board, historyOffSet: historyOffSet, history: history });
			}
		}, _this.eraseSelected = function () {
			var selectedCell = _this.getSelectedCell();
			if (!selectedCell) return;
			_this.fillNumber(false);
		}, _this.fillSelectedWithSolution = function () {
			var _this$state2 = _this.state,
			    board = _this$state2.board,
			    solution = _this$state2.solution;

			var selectedCell = _this.getSelectedCell();

			_this.fillNumber(Object(__WEBPACK_IMPORTED_MODULE_8__functions__["c" /* fillSelectedWithSolution */])(board, solution, selectedCell));
		}, _this.fillNumber = function (number) {
			var selectedCell = _this.getSelectedCell();

			_this.updateBoard(Object(__WEBPACK_IMPORTED_MODULE_8__functions__["b" /* fillNumber */])(_this.state.board, selectedCell, number));
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Index, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			// eslint-disable-next-line no-undef
			if ('serviceWorker' in navigator) {
				// eslint-disable-next-line no-undef
				navigator.serviceWorker.register('/service-worker.js').then(function (reg) {
					console.log('ServiceWorker scope: ', reg.scope);
					console.log('service worker registration successful');
				}).catch(function (err) {
					console.warn('service worker registration failed', err.message);
				});
			}
		}
	}, {
		key: 'getSelectedCell',
		value: function getSelectedCell() {
			var board = this.state.board;

			var selected = board.get('selected');
			return selected && board.get('puzzle').getIn([selected.x, selected.y]);
		}

		// fill currently selected cell with number

	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _state = this.state,
			    board = _state.board,
			    history = _state.history;

			return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
				'div',
				{
					className: 'jsx-2302105356' + ' ' + 'body',
					__source: {
						fileName: _jsxFileName,
						lineNumber: 113
					}
				},
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__NextHeader__["a" /* default */], {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 114
					}
				}),
				!board && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__GenerateUI__["a" /* default */], { generateGame: this.generateGame, __source: {
						fileName: _jsxFileName,
						lineNumber: 115
					}
				}),
				board && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Header__["a" /* default */], { onClick: function onClick() {
						return _this2.setState({ board: false });
					}, __source: {
						fileName: _jsxFileName,
						lineNumber: 116
					}
				}),
				board && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__BoardView__["a" /* default */], {
					board: this.state.board,
					selected: this.getSelectedCell(),
					onClick: function onClick(x, y) {
						_this2.setState({ board: Object(__WEBPACK_IMPORTED_MODULE_8__functions__["g" /* selectCell */])(_this2.state.board, x, y) });
					},
					__source: {
						fileName: _jsxFileName,
						lineNumber: 118
					}
				}),
				board && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Controls__["a" /* default */], { board: board, selected: this.getSelectedCell(), fillNumber: this.fillNumber, fillNote: this.addNumberAsNote, history: history, undo: this.undo, redo: this.redo, erase: this.eraseSelected, solution: this.fillSelectedWithSolution, className: 'controls', __source: {
						fileName: _jsxFileName,
						lineNumber: 126
					}
				}),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
					styleId: '2302105356',
					css: 'body,.body.jsx-2302105356{font-family:\'Special Elite\',cursive;}.body.jsx-2302105356{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:100vh;width:100vw;position:relative;}@media (min-width:800px) and (min-height:930px){.header,.puzzle,.controls{font-size:1.5em;}}@media (max-width:800px) and (min-width:600px){.header,.puzzle,.controls{font-size:1.2em;}}@media (max-height:930px) and (min-height:800px) and (min-width:600px){.header,.puzzle,.controls{font-size:1.2em;}}@media (max-height:800px) and (min-height:600px) and (min-width:370px){.header,.puzzle,.controls{font-size:1em;}}@media (max-width:370px){.header,.puzzle,.controls{font-size:0.8em;}}@media (max-height:600px){.header,.puzzle,.controls{font-size:0.8em;}}body{margin:0;}.rooter.jsx-2302105356{position:fixed;bottom:0;font-size:0.8em;width:100%;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdJTSxBQUk2QyxBQUd4QixBQVVJLEFBS0EsQUFLQSxBQUtGLEFBS0UsQUFLQSxBQUlSLEFBR00sU0FGaEIsS0FkQyxDQWlCUyxDQWhDVCxBQUtBLEFBS0EsQUFVQSxBQUtBLFFBUWdCLFlBOUNqQixJQStDWSxXQUNPLGtCQUNuQixLQTlDdUIsOEVBQ0gsNkZBQ0ksbUdBQ1YsYUFDRCxZQUNNLGtCQUNuQiIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcWlhbmdodWFuZy9yZWFjdC1zdWRva3UtZ2FtZSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1pbmRlbnQtcHJvcHMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLW1peGVkLW9wZXJhdG9ycyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tbWl4ZWQtc3BhY2VzLWFuZC10YWJzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBhcnJvdy1wYXJlbnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1pbmRlbnQgKi9cbi8qIGVzbGludC1kaXNhYmxlIG9iamVjdC1jdXJseS1uZXdsaW5lICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbmRlbnQgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXRhYnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FjY2Vzc2libGUtZW1vamkgKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBSYW5nZVN0eWxlIGZyb20gJy4uL2lucHV0LXJhbmdlLXN0eWxlJztcblxuaW1wb3J0IEJvYXJkVmlldyBmcm9tICcuL0JvYXJkVmlldyc7XG5pbXBvcnQgTmV4dEhlYWRlciBmcm9tICcuL05leHRIZWFkZXInO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgQ29udHJvbHMgZnJvbSAnLi9Db250cm9scyc7XG5pbXBvcnQgR2VuZXJhdGlvblVJIGZyb20gJy4vR2VuZXJhdGVVSSc7XG5pbXBvcnQgeyBzZWxlY3RDZWxsLCBmaWxsTnVtYmVyLCBmaWxsU2VsZWN0ZWRXaXRoU29sdXRpb24sIGFkZE51bWJlckFzTm90ZSwgZ2VuZXJhdGVHYW1lIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tbXVsdGktY29tcFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuXHRzdGF0ZSA9IHt9O1xuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHRcdGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0XHRcdG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyXG5cdFx0XHRcdC5yZWdpc3RlcignL3NlcnZpY2Utd29ya2VyLmpzJylcblx0XHRcdFx0LnRoZW4oKHJlZykgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHNjb3BlOiAnLCByZWcuc2NvcGUpO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCcpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goKGVycikgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUud2Fybignc2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uIGZhaWxlZCcsIGVyci5tZXNzYWdlKTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cdGdldFNlbGVjdGVkQ2VsbCgpIHtcblx0XHRjb25zdCB7IGJvYXJkIH0gPSB0aGlzLnN0YXRlO1xuXHRcdGNvbnN0IHNlbGVjdGVkID0gYm9hcmQuZ2V0KCdzZWxlY3RlZCcpO1xuXHRcdHJldHVybiBzZWxlY3RlZCAmJiBib2FyZC5nZXQoJ3B1enpsZScpLmdldEluKFtzZWxlY3RlZC54LCBzZWxlY3RlZC55XSk7XG5cdH1cblxuXHRnZW5lcmF0ZUdhbWUgPSAoZmluYWxDb3VudCA9IDIwKSA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZShnZW5lcmF0ZUdhbWUoZmluYWxDb3VudCkpO1xuXHR9O1xuXG5cdGFkZE51bWJlckFzTm90ZSA9IChudW1iZXIpID0+IHtcblx0XHRjb25zdCBib2FyZCA9IGFkZE51bWJlckFzTm90ZSh0aGlzLnN0YXRlLmJvYXJkLCB0aGlzLmdldFNlbGVjdGVkQ2VsbCgpLCBudW1iZXIpO1xuXHRcdGlmIChib2FyZCkgdGhpcy51cGRhdGVCb2FyZChib2FyZCk7XG5cdH07XG5cblx0dXBkYXRlQm9hcmQgPSAobmV3Qm9hcmQpID0+IHtcblx0XHRsZXQgeyBoaXN0b3J5IH0gPSB0aGlzLnN0YXRlO1xuXHRcdGNvbnN0IHsgaGlzdG9yeU9mZlNldCB9ID0gdGhpcy5zdGF0ZTtcblx0XHQvLyBhbnl0aGluZyBiZWZvcmUgY3VycmVudCBzdGVwIGlzIHN0aWxsIGluIGhpc3Rvcnlcblx0XHRoaXN0b3J5ID0gaGlzdG9yeS5zbGljZSgwLCBoaXN0b3J5T2ZmU2V0ICsgMSk7XG5cdFx0Ly8gYWRkIGl0c2VsZiBvbnRvIHRoZSBoaXN0b3J5XG5cdFx0aGlzdG9yeSA9IGhpc3RvcnkucHVzaChuZXdCb2FyZCk7XG5cdFx0Ly8gdXBkYXRlIHRoZSBnYW1lXG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGJvYXJkOiBuZXdCb2FyZCwgaGlzdG9yeSwgaGlzdG9yeU9mZlNldDogaGlzdG9yeS5zaXplIC0gMSB9KTtcblx0fTtcblxuXHRjYW5VbmRvID0gKCkgPT4gdGhpcy5zdGF0ZS5oaXN0b3J5T2ZmU2V0ID4gMDtcblxuXHRyZWRvID0gKCkgPT4ge1xuXHRcdGNvbnN0IHsgaGlzdG9yeSB9ID0gdGhpcy5zdGF0ZTtcblx0XHRsZXQgeyBoaXN0b3J5T2ZmU2V0IH0gPSB0aGlzLnN0YXRlO1xuXHRcdGlmIChoaXN0b3J5LnNpemUpIHtcblx0XHRcdGhpc3RvcnlPZmZTZXQgPSBNYXRoLm1pbihoaXN0b3J5LnNpemUgLSAxLCBoaXN0b3J5T2ZmU2V0ICsgMSk7XG5cdFx0XHRjb25zdCBib2FyZCA9IGhpc3RvcnkuZ2V0KGhpc3RvcnlPZmZTZXQpO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGJvYXJkLCBoaXN0b3J5T2ZmU2V0IH0pO1xuXHRcdH1cblx0fTtcblxuXHR1bmRvID0gKCkgPT4ge1xuXHRcdGNvbnN0IHsgaGlzdG9yeSB9ID0gdGhpcy5zdGF0ZTtcblx0XHRsZXQgeyBoaXN0b3J5T2ZmU2V0LCBib2FyZCB9ID0gdGhpcy5zdGF0ZTtcblx0XHRpZiAoaGlzdG9yeS5zaXplKSB7XG5cdFx0XHRoaXN0b3J5T2ZmU2V0ID0gTWF0aC5tYXgoMCwgaGlzdG9yeU9mZlNldCAtIDEpO1xuXHRcdFx0Ym9hcmQgPSBoaXN0b3J5LmdldChoaXN0b3J5T2ZmU2V0KTtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBib2FyZCwgaGlzdG9yeU9mZlNldCwgaGlzdG9yeSB9KTtcblx0XHR9XG5cdH07XG5cblx0ZXJhc2VTZWxlY3RlZCA9ICgpID0+IHtcblx0XHRjb25zdCBzZWxlY3RlZENlbGwgPSB0aGlzLmdldFNlbGVjdGVkQ2VsbCgpO1xuXHRcdGlmICghc2VsZWN0ZWRDZWxsKSByZXR1cm47XG5cdFx0dGhpcy5maWxsTnVtYmVyKGZhbHNlKTtcblx0fTtcblxuXHRmaWxsU2VsZWN0ZWRXaXRoU29sdXRpb24gPSAoKSA9PiB7XG5cdFx0Y29uc3QgeyBib2FyZCwgc29sdXRpb24gfSA9IHRoaXMuc3RhdGU7XG5cdFx0Y29uc3Qgc2VsZWN0ZWRDZWxsID0gdGhpcy5nZXRTZWxlY3RlZENlbGwoKTtcblxuXHRcdHRoaXMuZmlsbE51bWJlcihmaWxsU2VsZWN0ZWRXaXRoU29sdXRpb24oYm9hcmQsIHNvbHV0aW9uLCBzZWxlY3RlZENlbGwpKTtcblx0fTtcblxuXHQvLyBmaWxsIGN1cnJlbnRseSBzZWxlY3RlZCBjZWxsIHdpdGggbnVtYmVyXG5cdGZpbGxOdW1iZXIgPSAobnVtYmVyKSA9PiB7XG5cdFx0Y29uc3Qgc2VsZWN0ZWRDZWxsID0gdGhpcy5nZXRTZWxlY3RlZENlbGwoKTtcblxuXHRcdHRoaXMudXBkYXRlQm9hcmQoZmlsbE51bWJlcih0aGlzLnN0YXRlLmJvYXJkLCBzZWxlY3RlZENlbGwsIG51bWJlcikpO1xuXHR9O1xuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IGJvYXJkLCBoaXN0b3J5IH0gPSB0aGlzLnN0YXRlO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cblx0XHRcdFx0PE5leHRIZWFkZXIgLz5cblx0XHRcdFx0eyFib2FyZCAmJiA8R2VuZXJhdGlvblVJIGdlbmVyYXRlR2FtZT17dGhpcy5nZW5lcmF0ZUdhbWV9IC8+fVxuXHRcdFx0XHR7Ym9hcmQgJiYgPEhlYWRlciBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgYm9hcmQ6IGZhbHNlIH0pfSAvPn1cblx0XHRcdFx0e2JvYXJkICYmIChcblx0XHRcdFx0XHQ8Qm9hcmRWaWV3XG5cdFx0XHRcdFx0XHRib2FyZD17dGhpcy5zdGF0ZS5ib2FyZH1cblx0XHRcdFx0XHRcdHNlbGVjdGVkPXt0aGlzLmdldFNlbGVjdGVkQ2VsbCgpfVxuXHRcdFx0XHRcdFx0b25DbGljaz17KHgsIHkpID0+IHtcblx0XHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGJvYXJkOiBzZWxlY3RDZWxsKHRoaXMuc3RhdGUuYm9hcmQsIHgsIHkpIH0pO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpfVxuXHRcdFx0XHR7Ym9hcmQgJiYgPENvbnRyb2xzIGJvYXJkPXtib2FyZH0gc2VsZWN0ZWQ9e3RoaXMuZ2V0U2VsZWN0ZWRDZWxsKCl9IGZpbGxOdW1iZXI9e3RoaXMuZmlsbE51bWJlcn0gZmlsbE5vdGU9e3RoaXMuYWRkTnVtYmVyQXNOb3RlfSBoaXN0b3J5PXtoaXN0b3J5fSB1bmRvPXt0aGlzLnVuZG99IHJlZG89e3RoaXMucmVkb30gZXJhc2U9e3RoaXMuZXJhc2VTZWxlY3RlZH0gc29sdXRpb249e3RoaXMuZmlsbFNlbGVjdGVkV2l0aFNvbHV0aW9ufSBjbGFzc05hbWU9XCJjb250cm9sc1wiIC8+fVxuXHRcdFx0XHR7LyogbGFuZ3VhZ2U9Q1NTICovfVxuXHRcdFx0XHQ8c3R5bGUganN4PlxuXHRcdFx0XHRcdHtgXG5cdFx0XHRcdFx0XHQ6Z2xvYmFsKGJvZHkpLFxuXHRcdFx0XHRcdFx0LmJvZHkge1xuXHRcdFx0XHRcdFx0XHRmb250LWZhbWlseTogJ1NwZWNpYWwgRWxpdGUnLCBjdXJzaXZlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmJvZHkge1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAxMDB2aDtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMHZ3O1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRAbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIGFuZCAobWluLWhlaWdodDogOTMwcHgpIHtcblx0XHRcdFx0XHRcdFx0Omdsb2JhbCguaGVhZGVyLCAucHV6emxlLCAuY29udHJvbHMpIHtcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEuNWVtO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuXHRcdFx0XHRcdFx0XHQ6Z2xvYmFsKC5oZWFkZXIsIC5wdXp6bGUsIC5jb250cm9scykge1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMS4yZW07XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdEBtZWRpYSAobWF4LWhlaWdodDogOTMwcHgpIGFuZCAobWluLWhlaWdodDogODAwcHgpIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuXHRcdFx0XHRcdFx0XHQ6Z2xvYmFsKC5oZWFkZXIsIC5wdXp6bGUsIC5jb250cm9scykge1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMS4yZW07XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdEBtZWRpYSAobWF4LWhlaWdodDogODAwcHgpIGFuZCAobWluLWhlaWdodDogNjAwcHgpIGFuZCAobWluLXdpZHRoOiAzNzBweCkge1xuXHRcdFx0XHRcdFx0XHQ6Z2xvYmFsKC5oZWFkZXIsIC5wdXp6bGUsIC5jb250cm9scykge1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMWVtO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRAbWVkaWEgKG1heC13aWR0aDogMzcwcHgpIHtcblx0XHRcdFx0XHRcdFx0Omdsb2JhbCguaGVhZGVyLCAucHV6emxlLCAuY29udHJvbHMpIHtcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDAuOGVtO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRAbWVkaWEgKG1heC1oZWlnaHQ6IDYwMHB4KSB7XG5cdFx0XHRcdFx0XHRcdDpnbG9iYWwoLmhlYWRlciwgLnB1enpsZSwgLmNvbnRyb2xzKSB7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAwLjhlbTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Omdsb2JhbChib2R5KSB7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5yb290ZXIge1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0XHRcdFx0XHRcdGJvdHRvbTogMDtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAwLjhlbTtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRgfVxuXHRcdFx0XHQ8L3N0eWxlPlxuXHRcdFx0XHQ8c3R5bGUganN4IGdsb2JhbD5cblx0XHRcdFx0XHR7UmFuZ2VTdHlsZX1cblx0XHRcdFx0PC9zdHlsZT5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cbiJdfQ== */\n/*@ sourceURL=pages/index.js */'
				}),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
					styleId: __WEBPACK_IMPORTED_MODULE_2__input_range_style__["a" /* default */].__hash,
					css: __WEBPACK_IMPORTED_MODULE_2__input_range_style__["a" /* default */]
				})
			);
		}
	}]);

	return Index;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./pages/utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlNumberColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return cellWidth; });
/* harmony export (immutable) */ __webpack_exports__["c"] = getBackGroundColor;
/* harmony export (immutable) */ __webpack_exports__["d"] = getFontColor;
/* eslint-disable no-tabs */
/* eslint-disable object-curly-newline */
var LightBlue100 = '#B3E5FC';
var LightBlue200 = '#81D4FA';
var LightBlue300 = '#4FC3F7';
var Indigo700 = '#303F9F';
var DeepOrange200 = '#FFAB91';
var DeepOrange600 = '#F4511E';
var ControlNumberColor = Indigo700;

var cellWidth = 2.5;

/* eslint-disable indent */
function getBackGroundColor(_ref) {
	var conflict = _ref.conflict,
	    isPeer = _ref.isPeer,
	    sameValue = _ref.sameValue,
	    isSelected = _ref.isSelected;

	if (conflict && isPeer && sameValue) {
		return DeepOrange200;
	} else if (sameValue) {
		return LightBlue300;
	} else if (isSelected) {
		return LightBlue200;
	} else if (isPeer) {
		return LightBlue100;
	}
	return false;
}

function getFontColor(_ref2) {
	var value = _ref2.value,
	    conflict = _ref2.conflict,
	    prefilled = _ref2.prefilled;

	if (conflict && !prefilled) {
		return DeepOrange600;
	} else if (!prefilled && value) {
		return ControlNumberColor;
	}
	return false;
}

/***/ }),

/***/ "./sudoku.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = range;
/* harmony export (immutable) */ __webpack_exports__["b"] = makePuzzle;
/* harmony export (immutable) */ __webpack_exports__["a"] = isPeer;
/* harmony export (immutable) */ __webpack_exports__["c"] = pluck;
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function randomChoice(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}

function range(n) {
  return Array.from(Array(n).keys());
}

// TODO use immutable when this is all working
function makePuzzle() {
  while (true) {
    try {
      var _ret = function () {
        var puzzle = Array.from(Array(9).keys()).map(function () {
          return Array.from(Array(9).keys());
        });
        var rows = Array.from(Array(9).keys()).map(function () {
          return new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        });
        var columns = Array.from(Array(9).keys()).map(function () {
          return new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        });
        var squares = Array.from(Array(9).keys()).map(function () {
          return new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        });
        Array.from(Array(9).keys()).forEach(function (i) {
          Array.from(Array(9).keys()).forEach(function (j) {
            var row = rows[i];
            var column = columns[j];
            var square = squares[Math.floor(i / 3) * 3 + Math.floor(j / 3)];
            var choices = [].concat(_toConsumableArray(row)).filter(function (x) {
              return column.has(x);
            }).filter(function (x) {
              return square.has(x);
            });
            var choice = randomChoice(choices);
            if (!choice) {
              // eslint-disable-next-line no-throw-literal
              throw 'dead end';
            }
            puzzle[i][j] = choice;
            column.delete(choice);
            row.delete(choice);
            square.delete(choice);
          });
        });
        return {
          v: puzzle
        };
      }();

      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
    } catch (e) {
      // eslint-disable-next-line no-continue
      continue;
    }
  }
}

/**
 * Answers the question: can the cell (i,j) in the puzzle contain the number
 in cell "c"
 * @param puzzle
 * @param i
 * @param j
 * @param c
 */
function canBeA(puzzle, i, j, c) {
  var x = Math.floor(c / 9);
  var y = c % 9;
  var value = puzzle[x][y];
  if (puzzle[i][j] === value) return true;
  if (puzzle[i][j] > 0) return false;
  // if not the cell itself, and the mth cell of the group contains the value v, then "no"
  // eslint-disable-next-line guard-for-in,no-restricted-syntax
  for (var m in Array.from(Array(9).keys())) {
    var rowPeer = { x: m, y: j };
    var columnPeer = { x: i, y: m };
    var SquarePeer = {
      x: Math.floor(i / 3) * 3 + Math.floor(m / 3),
      y: Math.floor(j / 3) * 3 + m % 3
    };
    if (!(rowPeer.x === x && rowPeer.y === y) && puzzle[(rowPeer.x, rowPeer.y)] === value) return false;
    if (!(columnPeer.x === x && columnPeer.y === y) && puzzle[(columnPeer.x, columnPeer.y)] === value) return false;
    if (!(SquarePeer.x === x && SquarePeer.y === y) && puzzle[(SquarePeer.x, SquarePeer.y)] === value) return false;
  }
  return true;
}

/**
 *
 * @param a
 * @param b
 * @returns {boolean}
 */
function isPeer(a, b) {
  if (!a || !b) return false;
  var squareA = Math.floor(a.x / 3) * 3 + Math.floor(a.y / 3);
  var squareB = Math.floor(b.x / 3) * 3 + Math.floor(b.y / 3);
  return a.x === b.x || a.y === b.y || squareA === squareB;
}

function pluck(allCells) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var puzzle = JSON.parse(JSON.stringify(allCells));
  /**
     * starts with a set of all 81 cells, and tries to remove one (randomly) at a time,
     * but not before checking that the cell can still be deduced from the remaining cells.
     * @type {Set}
     */
  var cells = new Set(Array.from(Array(81).keys()));
  var cellsLeft = new Set(cells);

  var _loop = function _loop() {
    var cell = randomChoice([].concat(_toConsumableArray(cells)));
    var x = Math.floor(cell / 9);
    var y = cell % 9;
    cellsLeft.delete(cell);
    /**
         * row, column and square record whether another cell in those groups could also take
         * on the value we are trying to pluck. (If another cell can, then we can't use the
         * group to deduce this value.) If all three groups are True, then we cannot pluck
         * this cell and must try another one.
         */
    var row = false;
    var column = false;
    var square = false;
    range(9).forEach(function (i) {
      var rowPeer = { x: i, y: y };
      var columnPeer = { x: x, y: i };
      var squarePeer = {
        x: Math.floor(Math.floor(cell / 9) / 3) * 3 + Math.floor(i / 3),
        y: Math.floor(cell / 9) % 3 * 3 + i % 3
      };
      if (rowPeer.x !== x) {
        row = canBeA(puzzle, rowPeer.x, rowPeer.y, cell);
      }
      if (columnPeer.y !== y) {
        column = canBeA(puzzle, columnPeer.x, columnPeer.y, cell);
      }
      if (squarePeer.x !== x && squarePeer.y !== y) {
        square = canBeA(puzzle, squarePeer.x, squarePeer.y, cell);
      }
    });
    if (row && column && square) {
      // eslint-disable-next-line no-continue
      return 'continue';
    } else {
      // this is a pluckable cell!
      // eslint-disable-next-line no-param-reassign
      puzzle[x][y] = 0; // 0 denotes a blank cell
      /**
             * remove from the set of visible cells (pluck it)
             * we don't need to reset "cellsleft" because if a cell was not pluckable
             * earlier, then it will still not be pluckable now (with less information
             * on the board).
             */
      cells.delete(cell);
    }
  };

  while (cellsLeft.size && cells.size > n) {
    var _ret2 = _loop();

    if (_ret2 === 'continue') continue;
  }
  return { puzzle: puzzle, size: cells.size };
}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "color":
/***/ (function(module, exports) {

module.exports = require("color");

/***/ }),

/***/ "immutable":
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-input-range":
/***/ (function(module, exports) {

module.exports = require("react-input-range");

/***/ }),

/***/ "react-popover":
/***/ (function(module, exports) {

module.exports = require("react-popover");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map