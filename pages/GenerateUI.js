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
import PropTypes from 'prop-types';
import Color from 'color';
import InputRange from 'react-input-range';

import { backGroundBlue } from '../colors';

class GenerationUI extends Component {
	constructor(props) {
		super(props);

		this.state = { value: 30 };
	}

	generateGame = () => {
		this.props.generateGame(this.state.value);
	};

	render() {
		return (
			<div className="generation">
				<div className="copy">Start with {this.state.value} cells prefilled</div>
				<InputRange maxValue={81} minValue={17} value={this.state.value} onChange={(value) => this.setState({ value })} />
				<div className="button" onClick={this.generateGame}>
					Play Sudoku
				</div>
				{/* language=CSS */}
				<style jsx>
					{`
						.copy {
							text-align: center;
							font-size: 1.3em;
							margin-bottom: 0.5em;
						}
						.generation {
							display: flex;
							justify-content: center;
							flex-direction: column;
							width: 100%;
							align-items: center;
						}
						:global(.input-range) {
							width: 80%;
							max-width: 500px;
						}
						.button {
							margin-top: 0.5em;
							border-radius: 0.25em;
							cursor: pointer;
							font-weight: bold;
							text-decoration: none;
							color: #fff;
							position: relative;
							display: inline-block;
							transition: all 0.25s;
							padding: 5px 10px;
							font-size: 1.4em;
						}
						.button:active {
							transform: translate(0px, 5px);
							box-shadow: 0 1px 0 0;
						}

						.button {
							background-color: ${backGroundBlue};
							box-shadow: 0 2px 4px 0 ${Color(backGroundBlue).darken(0.5).hsl().string()};
							display: flex;
							align-items: center;
						}

						.button:hover {
							background-color: ${Color(backGroundBlue).lighten(0.2).hsl().string()};
						}
					`}
				</style>
			</div>
		);
	}
}

GenerationUI.propTypes = {
	generateGame: PropTypes.func.isRequired,
};

export default GenerationUI;
