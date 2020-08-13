import React from 'react';
import useSound from 'use-sound';
import key from '../paddle.mp3'

export default function Button(props) {
	const { fas, number, displayNumber, setDisplayNumber, calcState, setCalcState, handleSign } = props;
	const [play] = useSound(key)

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
			switch (fas) {
				case 'divide':
					setCalcState({
						...calcState,
						operation: '/',
						firstNumber: handleSign(calcState.firstNumber, calcState.operation, parseFloat(displayNumber)),
						firstIntroduced: true,
						secondIntroduced: false
					});
					break;

				case 'times':
					setCalcState({
						...calcState,
						operation: '*',
						firstNumber: handleSign(calcState.firstNumber, calcState.operation, parseFloat(displayNumber)),
						firstIntroduced: true,
						secondIntroduced: false
					});
					break;

				case 'minus':
					setCalcState({
						...calcState,
						operation: '-',
						firstNumber: handleSign(calcState.firstNumber, calcState.operation, parseFloat(displayNumber)),
						firstIntroduced: true,
						secondIntroduced: false
					});
					break;

				case 'plus':
					setCalcState({
						...calcState,
						operation: '+',
						firstNumber: handleSign(calcState.firstNumber, calcState.operation, parseFloat(displayNumber)),
						firstIntroduced: true,
						secondIntroduced: false
					});
					break;

				case 'percent':
					setCalcState({
						...calcState,
						operation: '%',
						firstNumber: handleSign(calcState.firstNumber, calcState.operation, parseFloat(displayNumber)),
						firstIntroduced: true,
						secondIntroduced: false
					});
					break;

				default:
					setCalcState({ ...calcState });
					break;
			}
			setDisplayNumber(
				(Math.round(handleSign(calcState.firstNumber, calcState.operation, parseFloat(displayNumber)) * 1000000) /
					1000000).toString()
			);
		} else if (!calcState.firstIntroduced && calcState.result !== 0) {
			switch (fas) {
				case 'divide':
					setCalcState({
						...calcState,
						operation: '/',
						firstNumber: calcState.result,
						firstIntroduced: true,
						secondIntroduced: false,
						result: 0
					});
					break;

				case 'times':
					setCalcState({
						...calcState,
						operation: '*',
						firstNumber: calcState.result,
						firstIntroduced: true,
						secondIntroduced: false,
						result: 0
					});
					break;

				case 'minus':
					setCalcState({
						...calcState,
						operation: '-',
						firstNumber: calcState.result,
						firstIntroduced: true,
						secondIntroduced: false,
						result: 0
					});
					break;

				case 'plus':
					setCalcState({
						...calcState,
						operation: '+',
						firstNumber: calcState.result,
						firstIntroduced: true,
						secondIntroduced: false,
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
			// setDisplayNumber((Math.round(handleSign(calcState.firstNumber, calcState.operation, parseFloat(displayNumber)) * 1000000) /
			// 1000000).toString());
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

		if (calcState.firstIntroduced && calcState.result === 0) {
			setDisplayNumber(strNum);
		}else if (calcState.secondIntroduced) {
			setDisplayNumber(strNum);
			setCalcState({
				firstNumber: 0,
				secondNumber: 0,
				result: 0,
				operation: '',
				firstIntroduced: false,
				secondIntroduced: false
			})
		}
	};

	return fas ? (
		<button type='button' className='btn' onClick={() => {handleOperation(fas); play()}}>
			<i className={`fas fa-${fas}`} />
		</button>
	) : (
		<button className='btn' type='button' onClick={() => {handleNumber(number); play()}}>
			{number}
		</button>
	);
}
