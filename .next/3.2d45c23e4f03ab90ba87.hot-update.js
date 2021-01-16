webpackHotUpdate(3,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_jsx_css__ = __webpack_require__("./node_modules/styled-jsx/css.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_jsx_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_jsx_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__input_range_style__ = __webpack_require__("./input-range-style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_tool_tip__ = __webpack_require__("./components/tool-tip.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Board__ = __webpack_require__("./pages/Board.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__NextHeader__ = __webpack_require__("./pages/NextHeader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Header__ = __webpack_require__("./pages/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Controls__ = __webpack_require__("./pages/Controls.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__GenerateUI__ = __webpack_require__("./pages/GenerateUI.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__functions__ = __webpack_require__("./pages/functions.js");
var _jsxFileName = '/Users/qianghuang/react-sudoku-game/pages/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
	var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

	enterModule && enterModule(module);
})();

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



// eslint-disable-next-line import/no-extraneous-dependencies




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











var Description = 'Discover the next evolution of Sudoku with amazing graphics, animations, and user-friendly features. Enjoy a Sudoku experience like you never have before with customizable game generation, cell highlighting, intuitive controls and more!';

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

			_this.setState(Object(__WEBPACK_IMPORTED_MODULE_11__functions__["d" /* generateGame */])(finalCount));
		}, _this.addNumberAsNote = function (number) {
			var board = Object(__WEBPACK_IMPORTED_MODULE_11__functions__["a" /* addNumberAsNote */])(_this.state.board, _this.getSelectedCell(), number);
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

			_this.fillNumber(Object(__WEBPACK_IMPORTED_MODULE_11__functions__["c" /* fillSelectedWithSolution */])(board, solution, selectedCell));
		}, _this.fillNumber = function (number) {
			var selectedCell = _this.getSelectedCell();

			_this.updateBoard(Object(__WEBPACK_IMPORTED_MODULE_11__functions__["b" /* fillNumber */])(_this.state.board, selectedCell, number));
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
		key: 'renderHeader',
		value: function renderHeader() {
			var _this2 = this;

			return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__Header__["a" /* default */], { onClick: function onClick() {
					return _this2.setState({ board: false });
				}, __source: {
					fileName: _jsxFileName,
					lineNumber: 120
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var _state = this.state,
			    board = _state.board,
			    history = _state.history;

			return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
				'div',
				{
					className: 'jsx-2302105356' + ' ' + 'body',
					__source: {
						fileName: _jsxFileName,
						lineNumber: 126
					}
				},
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__NextHeader__["a" /* default */], {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 127
					}
				}),
				!board && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__GenerateUI__["a" /* default */], { generateGame: this.generateGame, __source: {
						fileName: _jsxFileName,
						lineNumber: 128
					}
				}),
				board && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__Header__["a" /* default */], { onClick: function onClick() {
						return _this3.setState({ board: false });
					}, __source: {
						fileName: _jsxFileName,
						lineNumber: 129
					}
				}),
				board && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Board__["a" /* default */], {
					board: this.state.board,
					selected: this.getSelectedCell(),
					onClick: function onClick(x, y) {
						_this3.setState({ board: Object(__WEBPACK_IMPORTED_MODULE_11__functions__["g" /* selectCell */])(_this3.state.board, x, y) });
					},
					__source: {
						fileName: _jsxFileName,
						lineNumber: 131
					}
				}),
				board && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__Controls__["a" /* default */], { board: board, selected: this.getSelectedCell(), fillNumber: this.fillNumber, fillNote: this.addNumberAsNote, history: history, undo: this.undo, redo: this.redo, erase: this.eraseSelected, solution: this.fillSelectedWithSolution, className: 'controls', __source: {
						fileName: _jsxFileName,
						lineNumber: 139
					}
				}),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
					styleId: '2302105356',
					css: 'body,.body.jsx-2302105356{font-family:\'Special Elite\',cursive;}.body.jsx-2302105356{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:100vh;width:100vw;position:relative;}@media (min-width:800px) and (min-height:930px){.header,.puzzle,.controls{font-size:1.5em;}}@media (max-width:800px) and (min-width:600px){.header,.puzzle,.controls{font-size:1.2em;}}@media (max-height:930px) and (min-height:800px) and (min-width:600px){.header,.puzzle,.controls{font-size:1.2em;}}@media (max-height:800px) and (min-height:600px) and (min-width:370px){.header,.puzzle,.controls{font-size:1em;}}@media (max-width:370px){.header,.puzzle,.controls{font-size:0.8em;}}@media (max-height:600px){.header,.puzzle,.controls{font-size:0.8em;}}body{margin:0;}.rooter.jsx-2302105356{position:fixed;bottom:0;font-size:0.8em;width:100%;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZJTSxBQUk2QyxBQUd4QixBQVVJLEFBS0EsQUFLQSxBQUtGLEFBS0UsQUFLQSxBQUlSLEFBR00sU0FGaEIsS0FkQyxDQWlCUyxDQWhDVCxBQUtBLEFBS0EsQUFVQSxBQUtBLFFBUWdCLFlBOUNqQixJQStDWSxXQUNPLGtCQUNuQixLQTlDdUIsOEVBQ0gsNkZBQ0ksbUdBQ1YsYUFDRCxZQUNNLGtCQUNuQiIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcWlhbmdodWFuZy9yZWFjdC1zdWRva3UtZ2FtZSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1pbmRlbnQtcHJvcHMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLW1peGVkLW9wZXJhdG9ycyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tbWl4ZWQtc3BhY2VzLWFuZC10YWJzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBhcnJvdy1wYXJlbnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1pbmRlbnQgKi9cbi8qIGVzbGludC1kaXNhYmxlIG9iamVjdC1jdXJseS1uZXdsaW5lICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbmRlbnQgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXRhYnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FjY2Vzc2libGUtZW1vamkgKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmV4dEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XG5cbmltcG9ydCBSYW5nZVN0eWxlIGZyb20gJy4uL2lucHV0LXJhbmdlLXN0eWxlJztcbmltcG9ydCBSZXR1cm5JY29uIGZyb20gJy4uL3N2Zy9yZXR1cm4uc3ZnJztcblxuaW1wb3J0IFRpcCBmcm9tICcuLi9jb21wb25lbnRzL3Rvb2wtdGlwJztcblxuaW1wb3J0IEJvYXJkIGZyb20gJy4vQm9hcmQnO1xuaW1wb3J0IE5leHRIZWFkZXIgZnJvbSAnLi9OZXh0SGVhZGVyJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuaW1wb3J0IENvbnRyb2xzIGZyb20gJy4vQ29udHJvbHMnO1xuaW1wb3J0IEdlbmVyYXRpb25VSSBmcm9tICcuL0dlbmVyYXRlVUknO1xuaW1wb3J0IHsgc2VsZWN0Q2VsbCwgZmlsbE51bWJlciwgZmlsbFNlbGVjdGVkV2l0aFNvbHV0aW9uLCBhZGROdW1iZXJBc05vdGUsIGdlbmVyYXRlR2FtZSB9IGZyb20gJy4vZnVuY3Rpb25zJztcblxuY29uc3QgRGVzY3JpcHRpb24gPSAnRGlzY292ZXIgdGhlIG5leHQgZXZvbHV0aW9uIG9mIFN1ZG9rdSB3aXRoIGFtYXppbmcgZ3JhcGhpY3MsIGFuaW1hdGlvbnMsIGFuZCB1c2VyLWZyaWVuZGx5IGZlYXR1cmVzLiBFbmpveSBhIFN1ZG9rdSBleHBlcmllbmNlIGxpa2UgeW91IG5ldmVyIGhhdmUgYmVmb3JlIHdpdGggY3VzdG9taXphYmxlIGdhbWUgZ2VuZXJhdGlvbiwgY2VsbCBoaWdobGlnaHRpbmcsIGludHVpdGl2ZSBjb250cm9scyBhbmQgbW9yZSEnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tbXVsdGktY29tcFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuXHRzdGF0ZSA9IHt9O1xuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHRcdGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0XHRcdG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyXG5cdFx0XHRcdC5yZWdpc3RlcignL3NlcnZpY2Utd29ya2VyLmpzJylcblx0XHRcdFx0LnRoZW4oKHJlZykgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHNjb3BlOiAnLCByZWcuc2NvcGUpO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCcpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goKGVycikgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUud2Fybignc2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uIGZhaWxlZCcsIGVyci5tZXNzYWdlKTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cdGdldFNlbGVjdGVkQ2VsbCgpIHtcblx0XHRjb25zdCB7IGJvYXJkIH0gPSB0aGlzLnN0YXRlO1xuXHRcdGNvbnN0IHNlbGVjdGVkID0gYm9hcmQuZ2V0KCdzZWxlY3RlZCcpO1xuXHRcdHJldHVybiBzZWxlY3RlZCAmJiBib2FyZC5nZXQoJ3B1enpsZScpLmdldEluKFtzZWxlY3RlZC54LCBzZWxlY3RlZC55XSk7XG5cdH1cblxuXHRnZW5lcmF0ZUdhbWUgPSAoZmluYWxDb3VudCA9IDIwKSA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZShnZW5lcmF0ZUdhbWUoZmluYWxDb3VudCkpO1xuXHR9O1xuXG5cdGFkZE51bWJlckFzTm90ZSA9IChudW1iZXIpID0+IHtcblx0XHRjb25zdCBib2FyZCA9IGFkZE51bWJlckFzTm90ZSh0aGlzLnN0YXRlLmJvYXJkLCB0aGlzLmdldFNlbGVjdGVkQ2VsbCgpLCBudW1iZXIpO1xuXHRcdGlmIChib2FyZCkgdGhpcy51cGRhdGVCb2FyZChib2FyZCk7XG5cdH07XG5cblx0dXBkYXRlQm9hcmQgPSAobmV3Qm9hcmQpID0+IHtcblx0XHRsZXQgeyBoaXN0b3J5IH0gPSB0aGlzLnN0YXRlO1xuXHRcdGNvbnN0IHsgaGlzdG9yeU9mZlNldCB9ID0gdGhpcy5zdGF0ZTtcblx0XHQvLyBhbnl0aGluZyBiZWZvcmUgY3VycmVudCBzdGVwIGlzIHN0aWxsIGluIGhpc3Rvcnlcblx0XHRoaXN0b3J5ID0gaGlzdG9yeS5zbGljZSgwLCBoaXN0b3J5T2ZmU2V0ICsgMSk7XG5cdFx0Ly8gYWRkIGl0c2VsZiBvbnRvIHRoZSBoaXN0b3J5XG5cdFx0aGlzdG9yeSA9IGhpc3RvcnkucHVzaChuZXdCb2FyZCk7XG5cdFx0Ly8gdXBkYXRlIHRoZSBnYW1lXG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGJvYXJkOiBuZXdCb2FyZCwgaGlzdG9yeSwgaGlzdG9yeU9mZlNldDogaGlzdG9yeS5zaXplIC0gMSB9KTtcblx0fTtcblxuXHRjYW5VbmRvID0gKCkgPT4gdGhpcy5zdGF0ZS5oaXN0b3J5T2ZmU2V0ID4gMDtcblxuXHRyZWRvID0gKCkgPT4ge1xuXHRcdGNvbnN0IHsgaGlzdG9yeSB9ID0gdGhpcy5zdGF0ZTtcblx0XHRsZXQgeyBoaXN0b3J5T2ZmU2V0IH0gPSB0aGlzLnN0YXRlO1xuXHRcdGlmIChoaXN0b3J5LnNpemUpIHtcblx0XHRcdGhpc3RvcnlPZmZTZXQgPSBNYXRoLm1pbihoaXN0b3J5LnNpemUgLSAxLCBoaXN0b3J5T2ZmU2V0ICsgMSk7XG5cdFx0XHRjb25zdCBib2FyZCA9IGhpc3RvcnkuZ2V0KGhpc3RvcnlPZmZTZXQpO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGJvYXJkLCBoaXN0b3J5T2ZmU2V0IH0pO1xuXHRcdH1cblx0fTtcblxuXHR1bmRvID0gKCkgPT4ge1xuXHRcdGNvbnN0IHsgaGlzdG9yeSB9ID0gdGhpcy5zdGF0ZTtcblx0XHRsZXQgeyBoaXN0b3J5T2ZmU2V0LCBib2FyZCB9ID0gdGhpcy5zdGF0ZTtcblx0XHRpZiAoaGlzdG9yeS5zaXplKSB7XG5cdFx0XHRoaXN0b3J5T2ZmU2V0ID0gTWF0aC5tYXgoMCwgaGlzdG9yeU9mZlNldCAtIDEpO1xuXHRcdFx0Ym9hcmQgPSBoaXN0b3J5LmdldChoaXN0b3J5T2ZmU2V0KTtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBib2FyZCwgaGlzdG9yeU9mZlNldCwgaGlzdG9yeSB9KTtcblx0XHR9XG5cdH07XG5cblx0ZXJhc2VTZWxlY3RlZCA9ICgpID0+IHtcblx0XHRjb25zdCBzZWxlY3RlZENlbGwgPSB0aGlzLmdldFNlbGVjdGVkQ2VsbCgpO1xuXHRcdGlmICghc2VsZWN0ZWRDZWxsKSByZXR1cm47XG5cdFx0dGhpcy5maWxsTnVtYmVyKGZhbHNlKTtcblx0fTtcblxuXHRmaWxsU2VsZWN0ZWRXaXRoU29sdXRpb24gPSAoKSA9PiB7XG5cdFx0Y29uc3QgeyBib2FyZCwgc29sdXRpb24gfSA9IHRoaXMuc3RhdGU7XG5cdFx0Y29uc3Qgc2VsZWN0ZWRDZWxsID0gdGhpcy5nZXRTZWxlY3RlZENlbGwoKTtcblxuXHRcdHRoaXMuZmlsbE51bWJlcihmaWxsU2VsZWN0ZWRXaXRoU29sdXRpb24oYm9hcmQsIHNvbHV0aW9uLCBzZWxlY3RlZENlbGwpKTtcblx0fTtcblxuXHQvLyBmaWxsIGN1cnJlbnRseSBzZWxlY3RlZCBjZWxsIHdpdGggbnVtYmVyXG5cdGZpbGxOdW1iZXIgPSAobnVtYmVyKSA9PiB7XG5cdFx0Y29uc3Qgc2VsZWN0ZWRDZWxsID0gdGhpcy5nZXRTZWxlY3RlZENlbGwoKTtcblxuXHRcdHRoaXMudXBkYXRlQm9hcmQoZmlsbE51bWJlcih0aGlzLnN0YXRlLmJvYXJkLCBzZWxlY3RlZENlbGwsIG51bWJlcikpO1xuXHR9O1xuXG5cdHJlbmRlckhlYWRlcigpIHtcblx0XHRyZXR1cm4gPEhlYWRlciBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgYm9hcmQ6IGZhbHNlIH0pfSAvPjtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IGJvYXJkLCBoaXN0b3J5IH0gPSB0aGlzLnN0YXRlO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cblx0XHRcdFx0PE5leHRIZWFkZXIgLz5cblx0XHRcdFx0eyFib2FyZCAmJiA8R2VuZXJhdGlvblVJIGdlbmVyYXRlR2FtZT17dGhpcy5nZW5lcmF0ZUdhbWV9IC8+fVxuXHRcdFx0XHR7Ym9hcmQgJiYgPEhlYWRlciBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgYm9hcmQ6IGZhbHNlIH0pfSAvPn1cblx0XHRcdFx0e2JvYXJkICYmIChcblx0XHRcdFx0XHQ8Qm9hcmRcblx0XHRcdFx0XHRcdGJvYXJkPXt0aGlzLnN0YXRlLmJvYXJkfVxuXHRcdFx0XHRcdFx0c2VsZWN0ZWQ9e3RoaXMuZ2V0U2VsZWN0ZWRDZWxsKCl9XG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoeCwgeSkgPT4ge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgYm9hcmQ6IHNlbGVjdENlbGwodGhpcy5zdGF0ZS5ib2FyZCwgeCwgeSkgfSk7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCl9XG5cdFx0XHRcdHtib2FyZCAmJiA8Q29udHJvbHMgYm9hcmQ9e2JvYXJkfSBzZWxlY3RlZD17dGhpcy5nZXRTZWxlY3RlZENlbGwoKX0gZmlsbE51bWJlcj17dGhpcy5maWxsTnVtYmVyfSBmaWxsTm90ZT17dGhpcy5hZGROdW1iZXJBc05vdGV9IGhpc3Rvcnk9e2hpc3Rvcnl9IHVuZG89e3RoaXMudW5kb30gcmVkbz17dGhpcy5yZWRvfSBlcmFzZT17dGhpcy5lcmFzZVNlbGVjdGVkfSBzb2x1dGlvbj17dGhpcy5maWxsU2VsZWN0ZWRXaXRoU29sdXRpb259IGNsYXNzTmFtZT1cImNvbnRyb2xzXCIgLz59XG5cdFx0XHRcdHsvKiBsYW5ndWFnZT1DU1MgKi99XG5cdFx0XHRcdDxzdHlsZSBqc3g+XG5cdFx0XHRcdFx0e2Bcblx0XHRcdFx0XHRcdDpnbG9iYWwoYm9keSksXG5cdFx0XHRcdFx0XHQuYm9keSB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiAnU3BlY2lhbCBFbGl0ZScsIGN1cnNpdmU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuYm9keSB7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMHZoO1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwdnc7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdEBtZWRpYSAobWluLXdpZHRoOiA4MDBweCkgYW5kIChtaW4taGVpZ2h0OiA5MzBweCkge1xuXHRcdFx0XHRcdFx0XHQ6Z2xvYmFsKC5oZWFkZXIsIC5wdXp6bGUsIC5jb250cm9scykge1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMS41ZW07XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkgYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG5cdFx0XHRcdFx0XHRcdDpnbG9iYWwoLmhlYWRlciwgLnB1enpsZSwgLmNvbnRyb2xzKSB7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjJlbTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0QG1lZGlhIChtYXgtaGVpZ2h0OiA5MzBweCkgYW5kIChtaW4taGVpZ2h0OiA4MDBweCkgYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG5cdFx0XHRcdFx0XHRcdDpnbG9iYWwoLmhlYWRlciwgLnB1enpsZSwgLmNvbnRyb2xzKSB7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjJlbTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0QG1lZGlhIChtYXgtaGVpZ2h0OiA4MDBweCkgYW5kIChtaW4taGVpZ2h0OiA2MDBweCkgYW5kIChtaW4td2lkdGg6IDM3MHB4KSB7XG5cdFx0XHRcdFx0XHRcdDpnbG9iYWwoLmhlYWRlciwgLnB1enpsZSwgLmNvbnRyb2xzKSB7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxZW07XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdEBtZWRpYSAobWF4LXdpZHRoOiAzNzBweCkge1xuXHRcdFx0XHRcdFx0XHQ6Z2xvYmFsKC5oZWFkZXIsIC5wdXp6bGUsIC5jb250cm9scykge1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMC44ZW07XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdEBtZWRpYSAobWF4LWhlaWdodDogNjAwcHgpIHtcblx0XHRcdFx0XHRcdFx0Omdsb2JhbCguaGVhZGVyLCAucHV6emxlLCAuY29udHJvbHMpIHtcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDAuOGVtO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ6Z2xvYmFsKGJvZHkpIHtcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LnJvb3RlciB7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHRcdFx0XHRcdFx0Ym90dG9tOiAwO1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDAuOGVtO1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGB9XG5cdFx0XHRcdDwvc3R5bGU+XG5cdFx0XHRcdDxzdHlsZSBqc3ggZ2xvYmFsPlxuXHRcdFx0XHRcdHtSYW5nZVN0eWxlfVxuXHRcdFx0XHQ8L3N0eWxlPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuIl19 */\n/*@ sourceURL=pages/index.js */'
				}),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
					styleId: __WEBPACK_IMPORTED_MODULE_4__input_range_style__["a" /* default */].__hash,
					css: __WEBPACK_IMPORTED_MODULE_4__input_range_style__["a" /* default */]
				})
			);
		}
	}, {
		key: '__reactstandin__regenerateByEval',
		value: function __reactstandin__regenerateByEval(key, code) {
			this[key] = eval(code);
		}
	}]);

	return Index;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var _default = Index;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

	var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(Description, 'Description', '/Users/qianghuang/react-sudoku-game/pages/index.js');
	reactHotLoader.register(Index, 'Index', '/Users/qianghuang/react-sudoku-game/pages/index.js');
	reactHotLoader.register(_default, 'default', '/Users/qianghuang/react-sudoku-game/pages/index.js');
	leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.2d45c23e4f03ab90ba87.hot-update.js.map