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
import React, { Component } from 'react';
import { Set, List } from 'immutable';
import NextHead from 'next/head';

// eslint-disable-next-line import/no-extraneous-dependencies
import css from 'styled-jsx/css';

import RangeStyle from '../input-range-style';
import LoupeIcon from '../svg/loupe.svg';
import RemoveIcon from '../svg/remove.svg';
import ReloadIcon from '../svg/reload.svg';
import ReturnIcon from '../svg/return.svg';

import { makePuzzle, pluck, isPeer as areCoordinatePeers, range } from '../sudoku';
import Tip from '../components/tool-tip';

import Cell from './Cell';
import NumberControl from './NumberControl';
import GenerationUI from './GenerateUI';
import { cellWidth } from './utils';
import { makeBoard, updateBoardWithNumber, selectCell, isConflict, fillNumber, fillSelectedWithSolution, addNumberAsNote, getNumberValueCount, generateGame } from './functions';

const Description = 'Discover the next evolution of Sudoku with amazing graphics, animations, and user-friendly features. Enjoy a Sudoku experience like you never have before with customizable game generation, cell highlighting, intuitive controls and more!';

// eslint-disable-next-line no-lone-blocks
{
	/* language=CSS */
}
const ActionsStyle = css`
	.actions {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		max-width: 400px;
		margin-top: 0.5em;
		padding: 0 0.6em;
	}
	.action {
		display: flex;
		align-items: center;
		flex-direction: column;
	}
	.action :global(svg) {
		width: 2.5em;
		margin-bottom: 0.2em;
	}
	.redo :global(svg) {
		transform: scaleX(-1);
	}
`;

// eslint-disable-next-line no-lone-blocks
{
	/* language=CSS */
}
const ControlStyle = css`
	.control {
		padding: 0 2em;
		cursor: pointer;
		display: inline-flex;
		align-items: center;
		flex-wrap: wrap;
		justify-content: center;
		font-family: 'Special Elite', cursive;
		transition: filter 0.5s ease-in-out;
		width: 100%;
	}
`;

// eslint-disable-next-line no-lone-blocks
{
	/* language=CSS */
}
const PuzzleStyle = css`
	.puzzle {
		margin-top: 0.5em;
		width: ${cellWidth * 9}em;
		cursor: pointer;
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
	}
	.row {
		display: flex;
		align-items: center;
		flex: 0;
		width: ${cellWidth * 9}em;
	}
	.row:not(:last-child) {
		border-bottom: 1px solid black;
	}
	.row:nth-child(3n + 3):not(:last-child) {
		border-bottom: 2px solid black !important;
	}
`;

function getClickHandler(onClick, onDoubleClick, delay = 250) {
	let timeoutID = null;
	return (event) => {
		if (!timeoutID) {
			timeoutID = setTimeout(() => {
				onClick(event);
				timeoutID = null;
			}, delay);
		} else {
			timeoutID = clearTimeout(timeoutID);
			onDoubleClick(event);
		}
	};
}

// eslint-disable-next-line react/no-multi-comp
export default class Index extends Component {
	state = {};

	componentDidMount() {
		// eslint-disable-next-line no-undef
		if ('serviceWorker' in navigator) {
			// eslint-disable-next-line no-undef
			navigator.serviceWorker
				.register('/service-worker.js')
				.then((reg) => {
					console.log('ServiceWorker scope: ', reg.scope);
					console.log('service worker registration successful');
				})
				.catch((err) => {
					console.warn('service worker registration failed', err.message);
				});
		}
	}
	getSelectedCell() {
		const { board } = this.state;
		const selected = board.get('selected');
		return selected && board.get('puzzle').getIn([selected.x, selected.y]);
	}

	generateGame = (finalCount = 20) => {
		this.setState(generateGame(finalCount));
	};

	addNumberAsNote = (number) => {
		let { board } = this.state;
		let selectedCell = this.getSelectedCell();

		if (!selectedCell) return;
		const prefilled = selectedCell.get('prefilled');
		if (prefilled) return;
		const { x, y } = board.get('selected');
		const currentValue = selectedCell.get('value');
		if (currentValue) {
			board = updateBoardWithNumber({
				x,
				y,
				number: currentValue,
				fill: false,
				board: this.state.board,
			});
		}
		let notes = selectedCell.get('notes') || Set();
		if (notes.has(number)) {
			notes = notes.delete(number);
		} else {
			notes = notes.add(number);
		}
		selectedCell = selectedCell.set('notes', notes);
		selectedCell = selectedCell.delete('value');
		board = board.setIn(['puzzle', x, y], selectedCell);
		this.updateBoard(board);
	};

	updateBoard = (newBoard) => {
		let { history } = this.state;
		const { historyOffSet } = this.state;
		// anything before current step is still in history
		history = history.slice(0, historyOffSet + 1);
		// add itself onto the history
		history = history.push(newBoard);
		// update the game
		this.setState({ board: newBoard, history, historyOffSet: history.size - 1 });
	};

	canUndo = () => this.state.historyOffSet > 0;

	redo = () => {
		const { history } = this.state;
		let { historyOffSet } = this.state;
		if (history.size) {
			historyOffSet = Math.min(history.size - 1, historyOffSet + 1);
			const board = history.get(historyOffSet);
			this.setState({ board, historyOffSet });
		}
	};

	undo = () => {
		const { history } = this.state;
		let { historyOffSet, board } = this.state;
		if (history.size) {
			historyOffSet = Math.max(0, historyOffSet - 1);
			board = history.get(historyOffSet);
			this.setState({ board, historyOffSet, history });
		}
	};

	eraseSelected = () => {
		const selectedCell = this.getSelectedCell();
		if (!selectedCell) return;
		this.fillNumber(false);
	};

	fillSelectedWithSolution = () => {
		const { board, solution } = this.state;
		const selectedCell = this.getSelectedCell();

		this.fillNumber(fillSelectedWithSolution(board, solution, selectedCell));
	};

	// fill currently selected cell with number
	fillNumber = (number) => {
		const selectedCell = this.getSelectedCell();

		this.updateBoard(fillNumber(this.state.board, selectedCell, number));
	};

	renderCell(cell, x, y) {
		const { board } = this.state;
		const selected = this.getSelectedCell();
		const { value, prefilled, notes } = cell.toJSON();
		const conflict = isConflict(this.state.board, x, y);
		const peer = areCoordinatePeers({ x, y }, board.get('selected'));
		const sameValue = !!(selected && selected.get('value') && value === selected.get('value'));

		const isSelected = cell === selected;
		return (
			<Cell
				prefilled={prefilled}
				notes={notes}
				sameValue={sameValue}
				isSelected={isSelected}
				isPeer={peer}
				value={value}
				onClick={() => {
					this.setState({ board: selectCell(this.state.board, x, y) });
				}}
				key={y}
				x={x}
				y={y}
				conflict={conflict}
			/>
		);
	}

	renderNumberControl() {
		const selectedCell = this.getSelectedCell();
		const prefilled = selectedCell && selectedCell.get('prefilled');
		return (
			<div className="control">
				{range(9).map((i) => {
					const number = i + 1;
					// handles binding single click and double click callbacks
					const clickHandle = getClickHandler(
						() => {
							this.fillNumber(number);
						},
						() => {
							this.addNumberAsNote(number);
						}
					);
					return <NumberControl key={number} number={number} onClick={!prefilled ? clickHandle : undefined} completionPercentage={getNumberValueCount(this.state.board, number) / 9} />;
				})}
				<style jsx>{ControlStyle}</style>
			</div>
		);
	}

	renderActions() {
		const { history } = this.state;
		const selectedCell = this.getSelectedCell();
		const prefilled = selectedCell && selectedCell.get('prefilled');
		return (
			<div className="actions">
				<div className="action" onClick={history.size ? this.undo : null}>
					<ReloadIcon />
					Undo
				</div>
				<div className="action redo" onClick={history.size ? this.redo : null}>
					<ReloadIcon />
					Redo
				</div>
				<div className="action" onClick={!prefilled ? this.eraseSelected : null}>
					<RemoveIcon />
					Erase
				</div>
				<div className="action" onClick={!prefilled ? this.fillSelectedWithSolution : null}>
					<LoupeIcon />
					Hint
				</div>
				<style jsx>{ActionsStyle}</style>
			</div>
		);
	}

	renderPuzzle() {
		const { board } = this.state;
		return (
			<div className="puzzle">
				{board
					.get('puzzle')
					.map((row, i) => (
						// eslint-disable-next-line react/no-array-index-key
						<div key={i} className="row">
							{row.map((cell, j) => this.renderCell(cell, i, j)).toArray()}
						</div>
					))
					.toArray()}
				<style jsx>{PuzzleStyle}</style>
			</div>
		);
	}

	renderControls() {
		return (
			<div className="controls">
				{this.renderNumberControl()}
				{this.renderActions()}
				{/* language=CSS */}
				<style jsx>
					{`
						.controls {
							margin-top: 0.3em;
							display: flex;
							flex-wrap: wrap;
							justify-content: center;
							width: 100%;
							padding: 0.5em 0;
						}
					`}
				</style>
			</div>
		);
	}

	renderGenerationUI() {
		return <GenerationUI generateGame={this.generateGame} />;
	}

	renderHeader() {
		return (
			<div className="header">
				<div className="new-game" onClick={() => this.setState({ board: false })}>
					<ReturnIcon />
					<div>New Game</div>
				</div>
				<Tip />
				{/* language=CSS */}
				<style jsx>
					{`
						.header {
							display: flex;
							width: 100%;
							justify-content: space-between;
							max-width: 500px;
							padding: 0 0.5em;
							box-sizing: border-box;
						}
						.new-game {
							cursor: pointer;
							margin-top: 0.2em;
							display: inline-flex;
							justify-content: center;
							align-items: center;
							padding: 0.2em 0;
						}
						.new-game :global(svg) {
							height: 1em;
							margin-bottom: 0.3em;
						}
					`}
				</style>
			</div>
		);
	}

	render() {
		const { board } = this.state;
		return (
			<div className="body">
				<NextHead>
					<title>Sudoku Evolved</title>
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
					<meta name="description" content={Description} />
					<link href="https://fonts.googleapis.com/css?family=Special+Elite" rel="stylesheet" />
					<meta property="og:url" content="https://sudoku.sitianliu.com/" />
					<meta property="og:title" content="Sudoku Evolved" />
					<meta property="og:type" content="website" />
					<meta property="og:description" content={Description} />
					<meta property="og:image" content="https://sudoku.sitianliu.com/static/og-image.png" />
				</NextHead>
				{!board && this.renderGenerationUI()}
				{board && this.renderHeader()}
				{board && this.renderPuzzle()}
				{board && this.renderControls()}
				<div className="rooter">
					Made with <span>❤️</span>️ By <a href="https://www.sitianliu.com/">Sitian Liu</a> | <a href="https://medium.com/@sitianliu_57680/building-a-sudoku-game-in-react-ca663915712">Blog Post</a>
				</div>
				{/* language=CSS */}
				<style jsx>
					{`
						:global(body),
						.body {
							font-family: 'Special Elite', cursive;
						}
						.body {
							display: flex;
							flex-direction: column;
							align-items: center;
							justify-content: center;
							height: 100vh;
							width: 100vw;
							position: relative;
						}
						@media (min-width: 800px) and (min-height: 930px) {
							:global(.header, .puzzle, .controls) {
								font-size: 1.5em;
							}
						}
						@media (max-width: 800px) and (min-width: 600px) {
							:global(.header, .puzzle, .controls) {
								font-size: 1.2em;
							}
						}
						@media (max-height: 930px) and (min-height: 800px) and (min-width: 600px) {
							:global(.header, .puzzle, .controls) {
								font-size: 1.2em;
							}
						}
						@media (max-height: 800px) and (min-height: 600px) and (min-width: 370px) {
							:global(.header, .puzzle, .controls) {
								font-size: 1em;
							}
						}
						@media (max-width: 370px) {
							:global(.header, .puzzle, .controls) {
								font-size: 0.8em;
							}
						}
						@media (max-height: 600px) {
							:global(.header, .puzzle, .controls) {
								font-size: 0.8em;
							}
						}
						:global(body) {
							margin: 0;
						}
						.rooter {
							position: fixed;
							bottom: 0;
							font-size: 0.8em;
							width: 100%;
							text-align: center;
						}
					`}
				</style>
				<style jsx global>
					{RangeStyle}
				</style>
			</div>
		);
	}
}
