import React from 'react';

export default function Button(props) {
	const { fas, number, displayNumber, setDisplayNumber, calcState, setCalcState, handleSign } = props;

	const handleOperation = (fas) => {
		if (!calcState.firstIntroduced) {
			switch (fas) {
				case 'divide':
					setCalcState({
						...calcState,
						operation: '/',
						firstNumber: parseFloat(displayNumber),
						firstIntroduced: true
					});
					break;

				case 'times':
					setCalcState({
						...calcState,
						operation: '*',
						firstNumber: parseFloat(displayNumber),
						firstIntroduced: true
					});
					break;

				case 'minus':
					setCalcState({
						...calcState,
						operation: '-',
						firstNumber: parseFloat(displayNumber),
						firstIntroduced: true
					});
					break;

				case 'plus':
					setCalcState({
						...calcState,
						operation: '+',
						firstNumber: parseFloat(displayNumber),
						firstIntroduced: true
					});
					break;

				case 'percent':
					setCalcState({
						...calcState,
						operation: '%',
						firstNumber: parseFloat(displayNumber),
						firstIntroduced: true
					});
					break;

				default:
					setCalcState({ ...calcState });
					break;
			}
			setDisplayNumber(calcState.operation);
		} else if (calcState.firstIntroduced) {
			setCalcState({
				...calcState,
				secondNumber: parseFloat(displayNumber),
				secondIntroduced: true
			});
		} else if (calcState.firstIntroduced && calcState.secondIntroduced) {
			handleSign(calcState.operation);
			setDisplayNumber(calcState.result);
		}
	};

	const handleNumber = (number) => {
		const strNum = number.toString();
		displayNumber === '0' ? setDisplayNumber(strNum) : setDisplayNumber(displayNumber.concat(strNum));
	};
	return fas ? (
		<button type='button' className='btn' onClick={() => handleOperation(fas)}>
			<i className={`fas fa-${fas}`} />
		</button>
	) : (
		<button className='btn' type='button' onClick={() => handleNumber(number)}>
			{number}
		</button>
	);
}
