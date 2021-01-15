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
import NextHead from 'next/head';

// eslint-disable-next-line import/no-extraneous-dependencies
import css from 'styled-jsx/css';

import RangeStyle from '../input-range-style';
import ReturnIcon from '../svg/return.svg';

import Tip from '../components/tool-tip';

import Board from './Board';
import Actions from './Actions';
import Control from './Control';
import GenerationUI from './GenerateUI';
import { selectCell, fillNumber, fillSelectedWithSolution, addNumberAsNote, generateGame } from './functions';

const Description = 'Discover the next evolution of Sudoku with amazing graphics, animations, and user-friendly features. Enjoy a Sudoku experience like you never have before with customizable game generation, cell highlighting, intuitive controls and more!';

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

	renderControls() {
		const { board } = this.state;
		const selected = this.getSelectedCell();
		return (
			<div className="controls">
				<Control board={board} selected={selected} fillNumber={this.fillNumber} fillNote={this.addNumberAsNote} />
				<Actions history={this.state.history} selected={selected} undo={this.undo} redo={this.redo} erase={this.eraseSelected} solution={this.fillSelectedWithSolution} />
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
				{board && (
					<Board
						board={this.state.board}
						selected={this.getSelectedCell()}
						onClick={(x, y) => {
							this.setState({ board: selectCell(this.state.board, x, y) });
						}}
					/>
				)}
				{board && this.renderControls()}
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
