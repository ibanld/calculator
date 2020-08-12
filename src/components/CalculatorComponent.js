import React, { useState } from 'react';
import Screen from './ScreenComponent';
import Button from './ButtonsComponent';

export default function Calculator() {
	const [ calcState, setCalcState ] = useState({
		firstNumber: 0,
		secondNumber: 0,
		result: 0,
		operation: '',
		firstIntroduced: false,
		secondIntroduced: false
	});

	const [ displayNumber, setDisplayNumber ] = useState('0');

	const clearCalc = () => {
		setCalcState({
			firstNumber: 0,
			secondNumber: 0,
			result: 0,
			operation: '',
			firstIntroduced: false,
			secondIntroduced: false
		});
		setDisplayNumber('0');
	};

	const handleSign = (op) => {
		switch (op) {
			case '/':
				setCalcState({
					...calcState,
					result: calcState.firstNumber / calcState.secondNumber
				});
				break;

			case '*':
				setCalcState({
					...calcState,
					result: calcState.firstNumber * calcState.secondNumber
				});
				break;

			case '+':
				setCalcState({
					...calcState,
					result: calcState.firstNumber + calcState.secondNumber
				});
				break;

			case '-':
				setCalcState({
					...calcState,
					result: calcState.firstNumber - calcState.secondNumber
				});
				break;

			default:
				setCalcState({ ...calcState });
				break;
		}
		setDisplayNumber(calcState.result);
	};

	const handleEqual = () => {
		handleSign(calcState.operation);
	};

	console.log(calcState);
	console.log(displayNumber);

	return (
		<div className='container'>
			<div id='calculator'>
				<Screen displayNumber={displayNumber} calcState={calcState} />
				<div id='btn-grid'>
					<button className='btn' id='clear' onClick={() => clearCalc()}>
						<i className='fas fa-backspace' />
					</button>
					<Button
						id='divide'
						fas='divide'
						displayNumber={displayNumber}
						setDisplayNumber={setDisplayNumber}
						setCalcState={setCalcState}
						calcState={calcState}
						handleSign={handleSign}
					/>
					<Button
						id='multiply'
						fas='times'
						displayNumber={displayNumber}
						setDisplayNumber={setDisplayNumber}
						setCalcState={setCalcState}
						calcState={calcState}
						handleSign={handleSign}
					/>
					<Button
						id='seven'
						number={7}
						displayNumber={displayNumber}
						setDisplayNumber={setDisplayNumber}
						setCalcState={setCalcState}
						calcState={calcState}
					/>
					<Button
						id='eight'
						number={8}
						displayNumber={displayNumber}
						setDisplayNumber={setDisplayNumber}
						setCalcState={setCalcState}
						calcState={calcState}
					/>
					<Button
						id='nine'
						number={9}
						displayNumber={displayNumber}
						setDisplayNumber={setDisplayNumber}
						setCalcState={setCalcState}
						calcState={calcState}
					/>
					<Button
						id='subtract'
						fas='minus'
						displayNumber={displayNumber}
						setDisplayNumber={setDisplayNumber}
						setCalcState={setCalcState}
						calcState={calcState}
						handleSign={handleSign}
					/>
					<Button
						id='four'
						number={4}
						displayNumber={displayNumber}
						setDisplayNumber={setDisplayNumber}
						setCalcState={setCalcState}
						calcState={calcState}
					/>
					<Button
						id='five'
						number={5}
						displayNumber={displayNumber}
						setDisplayNumber={setDisplayNumber}
						setCalcState={setCalcState}
						calcState={calcState}
					/>
					<Button
						id='six'
						number={6}
						displayNumber={displayNumber}
						setDisplayNumber={setDisplayNumber}
						setCalcState={setCalcState}
						calcState={calcState}
					/>
					<Button
						id='add'
						fas='plus'
						displayNumber={displayNumber}
						setDisplayNumber={setDisplayNumber}
						setCalcState={setCalcState}
						calcState={calcState}
						handleSign={handleSign}
					/>
					<Button
						id='one'
						number={1}
						displayNumber={displayNumber}
						setDisplayNumber={setDisplayNumber}
						setCalcState={setCalcState}
						calcState={calcState}
					/>
					<Button
						id='two'
						number={2}
						displayNumber={displayNumber}
						setDisplayNumber={setDisplayNumber}
						setCalcState={setCalcState}
						calcState={calcState}
					/>
					<Button
						id='three'
						number={3}
						displayNumber={displayNumber}
						setDisplayNumber={setDisplayNumber}
						setCalcState={setCalcState}
						calcState={calcState}
					/>
					<button className='btn' id='equals' onClick={() => handleEqual()}>
						<i className='fas fa-equals' />
					</button>
					<Button
						id='percent'
						fas='percent'
						displayNumber={displayNumber}
						setDisplayNumber={setDisplayNumber}
						setCalcState={setCalcState}
						calcState={calcState}
						handleSign={handleSign}
					/>
					<Button
						id='zero'
						number={0}
						displayNumber={displayNumber}
						setDisplayNumber={setDisplayNumber}
						setCalcState={setCalcState}
						calcState={calcState}
					/>
					<Button
						id='decimal'
						number='.'
						displayNumber={displayNumber}
						setDisplayNumber={setDisplayNumber}
						setCalcState={setCalcState}
						calcState={calcState}
					/>
				</div>
			</div>
		</div>
	);
}
