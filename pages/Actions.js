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

// eslint-disable-next-line import/no-extraneous-dependencies
import css from 'styled-jsx/css';

import LoupeIcon from '../svg/loupe.svg';
import ReloadIcon from '../svg/reload.svg';
import RemoveIcon from '../svg/remove.svg';

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

const Actions = (props) => {
	const { history, selected, undo, redo, erase, solution } = props;
	const prefilled = selected && selected.get('prefilled');

	return (
		<div className="actions">
			<div className="action" onClick={history.size ? undo : null}>
				<ReloadIcon />
				Undo
			</div>
			<div className="action redo" onClick={history.size ? redo : null}>
				<ReloadIcon />
				Redo
			</div>
			<div className="action" onClick={!prefilled ? erase : null}>
				<RemoveIcon />
				Erase
			</div>
			<div className="action" onClick={!prefilled ? solution : null}>
				<LoupeIcon />
				Hint
			</div>
			<style jsx>{ActionsStyle}</style>
		</div>
	);
};

Actions.propTypes = {
	history: PropTypes.object,
	selected: PropTypes.object,
	undo: PropTypes.func.isRequired,
	redo: PropTypes.func.isRequired,
	erase: PropTypes.func.isRequired,
	solution: PropTypes.func.isRequired,
};

Actions.defaultProps = {
	history: null,
	selected: null,
};

export default Actions;
