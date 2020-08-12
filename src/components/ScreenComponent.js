import React from 'react';

export default function Screen(props) {
	const {
		displayNumber,
		calcState: { firstNumber, operation, secondNumber, firstIntroduced, secondIntroduced }
	} = props;
	return (
		<div id='display'>
			<div id='prev-operation'>
				{' '}
				{firstIntroduced && `${firstNumber}${operation}`}
				{secondIntroduced && `${firstNumber}${operation}${secondNumber}`}{' '}
			</div>
			<div id='current-operation'>{displayNumber}</div>
		</div>
	);
}
