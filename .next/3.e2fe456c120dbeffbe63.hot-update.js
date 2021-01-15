webpackHotUpdate(3,{

/***/ "./pages/functions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* unused harmony export makeBoard */
/* unused harmony export updateBoardWithNumber */
/* harmony export (immutable) */ __webpack_exports__["g"] = selectCell;
/* harmony export (immutable) */ __webpack_exports__["f"] = isConflict;
/* harmony export (immutable) */ __webpack_exports__["b"] = fillNumber;
/* harmony export (immutable) */ __webpack_exports__["c"] = fillSelectedWithSolution;
/* harmony export (immutable) */ __webpack_exports__["a"] = addNumberAsNote;
/* harmony export (immutable) */ __webpack_exports__["e"] = getNumberValueCount;
/* harmony export (immutable) */ __webpack_exports__["d"] = generateGame;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__("./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sudoku__ = __webpack_require__("./sudoku.js");
(function () {
	var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

	enterModule && enterModule(module);
})();

/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
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

function addNumberAsNote(oldBoard, currentSelectedCell, number) {
	var selectedCell = currentSelectedCell;
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
	return board.setIn(['puzzle', x, y], selectedCell);
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
		history: __WEBPACK_IMPORTED_MODULE_0_immutable__["a" /* List */].of(board),
		historyOffSet: 0,
		solution: solution
	};
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
	reactHotLoader.register(fillNumber, 'fillNumber', '/Users/qianghuang/react-sudoku-game/pages/functions.js');
	reactHotLoader.register(fillSelectedWithSolution, 'fillSelectedWithSolution', '/Users/qianghuang/react-sudoku-game/pages/functions.js');
	reactHotLoader.register(addNumberAsNote, 'addNumberAsNote', '/Users/qianghuang/react-sudoku-game/pages/functions.js');
	reactHotLoader.register(getNumberOfGroupsAssignedForNumber, 'getNumberOfGroupsAssignedForNumber', '/Users/qianghuang/react-sudoku-game/pages/functions.js');
	reactHotLoader.register(getNumberValueCount, 'getNumberValueCount', '/Users/qianghuang/react-sudoku-game/pages/functions.js');
	reactHotLoader.register(generateGame, 'generateGame', '/Users/qianghuang/react-sudoku-game/pages/functions.js');
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
//# sourceMappingURL=3.e2fe456c120dbeffbe63.hot-update.js.map