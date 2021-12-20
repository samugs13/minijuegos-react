import React, { useEffect, useState } from 'react';
import LangSelector from "../lang/LangSelector.component";
import { quizzes as mockData } from "../../assets/mock-data";
import Game from './Game.component'

export default function Quiz() {

	const [quizzes, setQuizzes] = useState([]);
	const [currentQuiz, setCurrentQuiz] = useState(0);
	const [score, setScore] = useState(0);
	const [finished, setFinished] = useState(false);
	const [disabled, setDisabled] = useState(false);

	useEffect(() => {
		setQuizzes(mockData);
	}, []);

	function nextClick(){

		if (quizzes.length==0 || currentQuiz==9) setDisabled(true)

		else setCurrentQuiz(currentQuiz + 1);
	}

	function previousClick(){

		if (quizzes.length==0 || currentQuiz==0) setDisabled(true)

		else setCurrentQuiz(currentQuiz - 1);
	}

	return (
		<div>
			<h1>QUIZ</h1>
			{quizzes[currentQuiz] ?
			<Game quiz={quizzes[currentQuiz]} score={score} nextClick={nextClick} previousClick={previousClick}/>
			:
			<h1>Loading...</h1>
			}
		</div>
	);
}
