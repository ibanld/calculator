import React from 'react';

export default function Screen(props) {
	const {
		displayNumber,
		calcState: { firstNumber, firstIntroduced, operation, secondNumber, secondIntroduced }
	} = props;

	const showNumbers = () => {
		if (firstIntroduced && secondIntroduced) {
			return `${firstNumber} ${operation} ${secondNumber}`;
		} else if (firstIntroduced) {
			return `${firstNumber} ${operation}`;
		}
	};

	return (
		<div id='display'>
			<div id='prev-operation'>{showNumbers()}</div>
			<div id='current-operation'>{displayNumber}</div>
		</div>
	);
}
