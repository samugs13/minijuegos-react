import React from 'react';

export default function Answer(props) {
	function handleAnswerChange(e) {
		props.onAnswerChange(e.target.value);
	}

	return (
		<input id="user-answer" type="text" onChange={handleAnswerChange}></input>
	);
}
