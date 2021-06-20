import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, toggleAdd, showAdd }) => {
	return (
		<header className="header">
			<h1>{title}</h1>
			<Button
				toggleAdd={toggleAdd}
				color={!showAdd ? 'green' : 'red'}
				text={!showAdd ? 'Add' : 'Close'}
			/>
		</header>
	);
};

Header.prototype = {
	title: PropTypes.string.isRequired,
};

export default Header;
