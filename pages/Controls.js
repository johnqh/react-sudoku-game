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
import React from 'react';
import PropTypes from 'prop-types';

import Control from './Control';
import Actions from './Actions';

const Controls = (props) => {
	const { board, history, selected, fillNumber, fillNote, undo, redo, erase, solution } = props;

	return (
		<div className="controls">
			<Control board={board} selected={selected} fillNumber={fillNumber} fillNote={fillNote} />
			<Actions history={history} selected={selected} undo={undo} redo={redo} erase={erase} solution={solution} />
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
};

Controls.propTypes = {
	board: PropTypes.object.isRequired,
	history: PropTypes.object,
	selected: PropTypes.object,
	fillNumber: PropTypes.func.isRequired,
	fillNote: PropTypes.func.isRequired,
	undo: PropTypes.func.isRequired,
	redo: PropTypes.func.isRequired,
	erase: PropTypes.func.isRequired,
	solution: PropTypes.func.isRequired,
};

Controls.defaultProps = {
	history: null,
	selected: null,
};

export default Controls;
