import React, { useContext } from 'react';

import { LangContext } from "../../lang/LangContext.component";

export default function Answer(props) {
	const dictionary = useContext(LangContext).dictionary;

	function handleAnswerChange(e) {
		props.onAnswerChange(e.target.value);
	}

	function handleKeyPress(e) {
		if (e.key === 'Enter') {
			props.handleEnterKey();
		}
	}

	function checkAnswer() {
		if (props.correct === false) return "is-invalid";
		else if (props.correct === true) return "is-valid";
		else return "";
	}

	return (
		<div className="col-7 mx-auto">
			<input
				className={`form-control ${checkAnswer()}`}
				id="user-answer"
				type="text"
				onChange={handleAnswerChange}
				onKeyPress={handleKeyPress}
			>
			</input>
			<div className="valid-feedback">
				{dictionary.correct}
			</div>
			<div className="invalid-feedback">
				{`${dictionary.incorrect}: ${props.correctAnswer}`}
			</div>
		</div>
	);
}
