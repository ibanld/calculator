import React from 'react';

export default function Button(props) {
	const { fas, number, displayNumber, setDisplayNumber, calcState, setCalcState } = props;

	const handleOperation = (operation) => {
		switch (operation) {
			case 'divide':
				setCalcState({
					...calcState,
					operation: '/',
					firstNumber: parseInt(displayNumber),
					firstIntroduced: true
				});
				break;

			case 'times':
				setCalcState({
					...calcState,
					operation: '*',
					firstNumber: parseInt(displayNumber),
					firstIntroduced: true
				});
				break;

			case 'minus':
				setCalcState({
					...calcState,
					operation: '-',
					firstNumber: parseInt(displayNumber),
					firstIntroduced: true
				});
				break;

			case 'plus':
				setCalcState({
					...calcState,
					operation: '+',
					firstNumber: parseInt(displayNumber),
					firstIntroduced: true
				});
				break;

			case 'percent':
				setCalcState({
					...calcState,
					operation: '%',
					firstNumber: parseInt(displayNumber),
					firstIntroduced: true
				});
				break;

			default:
				setCalcState({ ...calcState });
				break;
		}
		setDisplayNumber(calcState.operation);
	};

	const handleNumber = (number) => {
		const strNum = number.toString();
		displayNumber === '0' ? setDisplayNumber(strNum) : setDisplayNumber(displayNumber.concat(strNum));
	};

	return fas ? (
		<button className='btn'>
			<i className={`fas fa-${fas}`} onClick={() => handleOperation(fas)} />
		</button>
	) : (
		<button className='btn' onClick={() => handleNumber(number)}>
			{number}
		</button>
	);
}
