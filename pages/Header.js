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

import Tip from '../components/tool-tip';

import ReturnIcon from '../svg/return.svg';

const Header = ({ onClick }) => (
	<div className="header">
		<div className="new-game" onClick={onClick}>
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

Header.propTypes = {
	onClick: PropTypes.func,
};

Header.defaultProps = {
	onClick: null,
};

export default Header;
