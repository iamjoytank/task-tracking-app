import React from 'react';

const Button = ({ color, text, toggleAdd }) => {
	return (
		<button onClick={toggleAdd} style={{ backgroundColor: color }} className="btn">
			{text}
		</button>
	);
};

export default Button;
