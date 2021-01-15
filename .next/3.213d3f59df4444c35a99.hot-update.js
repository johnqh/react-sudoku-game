webpackHotUpdate(3,{

/***/ "./pages/functions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (immutable) */ __webpack_exports__["a"] = makeBoard;
/* harmony export (immutable) */ __webpack_exports__["c"] = updateBoardWithNumber;
/* harmony export (immutable) */ __webpack_exports__["b"] = selectCell;
/* unused harmony export isConflict */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__("./node_modules/immutable/dist/immutable.es.js");
(function () {
	var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

	enterModule && enterModule(module);
})();

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
	return Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["c" /* fromJS */])({ puzzle: result, selected: false, choices: { rows: rows, columns: columns, squares: squares } });
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
;

(function () {
	var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

	var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(makeCountObject, 'makeCountObject', '/Users/qianghuang/react-sudoku-game/pages/functions.js');
	reactHotLoader.register(makeBoard, 'makeBoard', '/Users/qianghuang/react-sudoku-game/pages/functions.js');
	reactHotLoader.register(updateBoardWithNumber, 'updateBoardWithNumber', '/Users/qianghuang/react-sudoku-game/pages/functions.js');
	reactHotLoader.register(selectCell, 'selectCell', '/Users/qianghuang/react-sudoku-game/pages/functions.js');
	reactHotLoader.register(isConflict, 'isConflict', '/Users/qianghuang/react-sudoku-game/pages/functions.js');
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/functions")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.213d3f59df4444c35a99.hot-update.js.map