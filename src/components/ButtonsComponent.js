import React from 'react';

export default function Button(props) {
	const { fas, number, setCalcState, calcState, displayNumber } = props;

	const handleOperation = (operation) => {
		switch (operation) {
			case 'divide':
				setCalcState({
					...calcState,
					operation: '/',
					firstNumber: displayNumber,
					firstIntroduced: true
				});

				break;

			default:
				break;
		}
	};

	return fas ? (
		<button className='btn'>
			<i className={`fas fa-${fas}`} onClick={() => handleOperation(fas)} />
		</button>
	) : (
		<button className='btn'>{number}</button>
	);
}
