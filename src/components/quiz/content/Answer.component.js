import React from 'react';

export default function Answer(props) {
	function handleAnswerChange(e) {
		props.onAnswerChange(e.target.value);
	}

	function checkAnswer() {
		if (props.correct === false) return "is-invalid";
		else if (props.correct === true) return "is-valid";
		else return "";
	}

	return (
		<div className="col-md-2 mx-auto">
			<input className={`form-control ${checkAnswer()}`} id="user-answer" type="text" onChange={handleAnswerChange}></input>
			<div className="valid-feedback">
			Correct!
			</div>
			<div className="invalid-feedback">
			Incorrect!
			</div>
		</div>
	);
}
