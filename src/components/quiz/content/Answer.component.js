import React, { useContext } from 'react';

import { LangContext } from "../../lang/LangContext.component";

export default function Answer(props) {
	const dictionary = useContext(LangContext).dictionary;

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
			<input
				className={`form-control ${checkAnswer()}`}
				id="user-answer"
				type="text"
				onChange={handleAnswerChange}>
			</input>
			<div className="valid-feedback">
				{dictionary.correct}
			</div>
			<div className="invalid-feedback">
				{dictionary.incorrect}
			</div>
		</div>
	);
}
