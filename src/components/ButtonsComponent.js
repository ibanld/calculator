import React from 'react';

export default function Button(props) {
	const { fas, number, displayNumber, setDisplayNumber, calcState, setCalcState, handleSign, handleEqual } = props;

	const handleOperation = (fas) => {
		if (!calcState.firstIntroduced && calcState.result === 0) {
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
			setDisplayNumber(calcState.firstNumber.toString());
		} else if (calcState.firstIntroduced && calcState.result === 0) {
			handleEqual();
			console.log(calcState);
		} else if (calcState.firstIntroduced && calcState.result !== 0) {
			switch (fas) {
				case 'divide':
					setCalcState({
						...calcState,
						operation: '/',
						firstNumber: calcState.result,
						result: 0
					});
					break;

				case 'times':
					setCalcState({
						...calcState,
						operation: '*',
						firstNumber: calcState.result,
						result: 0
					});
					break;

				case 'minus':
					setCalcState({
						...calcState,
						operation: '-',
						firstNumber: calcState.result,
						result: 0
					});
					break;

				case 'plus':
					setCalcState({
						...calcState,
						operation: '+',
						firstNumber: calcState.result,
						result: 0
					});
					break;

				case 'percent':
					setCalcState({
						...calcState,
						operation: '%',
						firstNumber: calcState.result
					});
					break;

				default:
					setCalcState({ ...calcState });
					break;
			}
			setDisplayNumber('0');
		}
	};

	const handleNumber = (number) => {
		const strNum = number.toString();

		if (number === '.') {
			!displayNumber.includes('.') && setDisplayNumber(displayNumber.concat(strNum));
		} else {
			displayNumber === '0' ? setDisplayNumber(strNum) : setDisplayNumber(displayNumber.concat(strNum));
		}

		if (calcState.firstIntroduced && calcState.secondIntroduced) {
			setDisplayNumber(strNum);
		}

		if (calcState.firstIntroduced && calcState.result !== 0) {
			switch (fas) {
				case 'divide':
					setCalcState({
						...calcState,
						operation: '/',
						firstNumber: calcState.result,
						result: 0
					});
					break;

				case 'times':
					setCalcState({
						...calcState,
						operation: '*',
						firstNumber: calcState.result,
						result: 0
					});
					break;

				case 'minus':
					setCalcState({
						...calcState,
						operation: '-',
						firstNumber: calcState.result,
						result: 0
					});
					console.log(calcState);
					break;

				case 'plus':
					setCalcState({
						...calcState,
						operation: '+',
						firstNumber: calcState.result,
						result: 0
					});
					break;

				case 'percent':
					setCalcState({
						...calcState,
						operation: '%',
						firstNumber: calcState.result
					});
					break;

				default:
					setCalcState({ ...calcState });
					break;
			}
			setDisplayNumber(strNum);
		}
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
