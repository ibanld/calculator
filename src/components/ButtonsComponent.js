import React from 'react';

export default function Button(props) {
	const { fas, number } = props;

	return fas ? (
		<button className='btn'>
			<i className={`fas fa-${fas}`} />
		</button>
	) : (
		<button className='btn'>{number}</button>
	);
}
