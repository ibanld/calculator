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

	const [ displayNumber, setDisplayNumber ] = useState(0);

	const handleEqual = () => {
		setCalcState({
			...calcState,
			result: calcState.firstNumber + calcState.operation + calcState.secondNumber
		});
		setDisplayNumber(calcState.result);
	};

	return (
		<div className='container'>
			<div id='calculator'>
				<Screen displayNumber={displayNumber} calcState={calcState} />
				<div id='btn-grid'>
					<button
						className='btn'
						id='clear'
						onClick={() =>
							setCalcState({
								firstNumber: 0,
								secondNumber: 0,
								result: 0,
								operation: null,
								firstIntroduced: false,
								secondIntroduced: false
							})}
					>
						<i className='fas fa-backspace' />
					</button>
					<Button
						id='divide'
						fas='divide'
						displayNumber={displayNumber}
						setDisplayNumber={setDisplayNumber}
						setCalcState={setCalcState}
						calcState={calcState}
					/>
					<Button id='multiply' fas='times' />
					<Button id='seven' number={7} />
					<Button id='eight' number={8} />
					<Button id='nine' number={9} />
					<Button id='subtract' fas='minus' />
					<Button id='four' number={4} />
					<Button id='five' number={5} />
					<Button id='six' number={6} />
					<Button id='add' fas='plus' />
					<Button id='one' number={1} />
					<Button id='two' number={2} />
					<Button id='three' number={3} />
					<button className='btn' id='equals' onClick={() => handleEqual()}>
						<i className='fas fa-equals' />
					</button>
					<Button id='percent' fas='percent' />
					<Button id='zero' number={0} />
					<Button id='decimal' fas='dot-circle' />
				</div>
			</div>
		</div>
	);
}