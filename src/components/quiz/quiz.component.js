import React, { useState } from 'react';
import LangSelector from "../lang/LangSelector.component";
import { quizzes } from "../../assets/mock-data";
import Game from './Game.component'

export default function Quiz() {

	const [whatquiz, setQuizzes] = useState(quizzes);
	const [currentQuiz, setCurrentQuiz] = useState(0);
	const [score, setScore] = useState(0);
	const [finished, setFinished] = useState(false);
	const [disabled, setDisabled] = useState(false);

	function nextClick(){

		if (whatquiz.length==0 || currentQuiz==9)
		setDisabled(true)

		else setCurrentQuiz(currentQuiz + 1);
	}

	function previousClick(){

		if (whatquiz.length==0 || currentQuiz==0)
		setDisabled(true)

		else setCurrentQuiz(currentQuiz - 1);
	}

	return (
		<div>
			<h1>QUIZ</h1>
			<Game quiz={whatquiz[currentQuiz]} score={score} nextClick={nextClick} previousClick={previousClick}/>
		</div>
	);
}
