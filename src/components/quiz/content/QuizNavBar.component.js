import React from 'react';

export default function QuizNavBar(props) {

	function getButtonColor(i){
		if(!props.answerCorrect) return "-primary";

		if(props.answerCorrect[i] === null) return "-primary";
		else if(props.answerCorrect[i]) return "-success";
		else return "-danger";
	}

	function getButtonSelected(i) {
		if (i === props.index) {
			return "";
		} else {
			return "-outline";
		}
	}

	function getButton(i) {
		var button = "btn";
		button += getButtonSelected(i);
		button += getButtonColor(i);
		return button;
	}

	function buttonRow() {
		let buttons = [];
		for (let i = 0; i < props.total; i++) {
			buttons.push((
				<button
					className={`btn ${getButton(i)}`}
					onClick={() => props.onClick(i)}
					key={i}
				>
					{i+1}
				</button>
			))
		}
		return buttons;
	}

	return (
		<div className="btn-group" role="group" aria-label="Quiz Navigation Bar">
			{buttonRow()}
		</div>
	);
}
