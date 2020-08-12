import React from 'react';

export default function Screen(props) {
	const { displayNumber, calcState: { firstNumber, operation, secondNumber, secondIntroduced } } = props;

	return (
		<div id='display'>
			<div id='prev-operation'>
				{' '}
				{secondIntroduced ? `${firstNumber}${operation}${secondNumber}` : `${firstNumber}${operation}`}{' '}
			</div>
			<div id='current-operation'>{displayNumber}</div>
		</div>
	);
}
