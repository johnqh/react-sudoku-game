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

import RangeStyle from '../input-range-style';

import Board from './Board';
import NextHeader from './NextHeader';
import Header from './Header';
import Controls from './Controls';
import GenerationUI from './GenerateUI';
import { selectCell, fillNumber, fillSelectedWithSolution, addNumberAsNote, generateGame } from './functions';

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
		const board = addNumberAsNote(this.state.board, this.getSelectedCell(), number);
		if (board) this.updateBoard(board);
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

	render() {
		const { board, history } = this.state;
		return (
			<div className="body">
				<NextHeader />
				{!board && <GenerationUI generateGame={this.generateGame} />}
				{board && <Header onClick={() => this.setState({ board: false })} />}
				{board && (
					<Board
						board={this.state.board}
						selected={this.getSelectedCell()}
						onClick={(x, y) => {
							this.setState({ board: selectCell(this.state.board, x, y) });
						}}
					/>
				)}
				{board && <Controls board={board} selected={this.getSelectedCell()} fillNumber={this.fillNumber} fillNote={this.addNumberAsNote} history={history} undo={this.undo} redo={this.redo} erase={this.eraseSelected} solution={this.fillSelectedWithSolution} className="controls" />}
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
