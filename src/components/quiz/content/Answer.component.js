import React from 'react';

export default function Question(props) {
	function handleAnswerChange(e) {
		props.onAnswerChange(e.target.value);
	}

	return (
		<input type="text" onChange={handleAnswerChange}></input>
	);
}
