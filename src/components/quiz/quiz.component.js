import React, { useEffect, useState } from 'react';
import {Toast} from "bootstrap";

import { quizzes as mockData } from "../../assets/mock-data";

import LangSelector from "../lang/LangSelector.component";
import Game from './Game.component'
import Actionbar from './content/Actionbar.component';
import Score from './content/Score.component'
import QuizNavBar from './content/QuizNavBar.component';
import Message from './content/Message.component'

export default function Quiz() {

	const [quizzes, setQuizzes] = useState([]);
	const [loaded, setLoaded] = useState(false);
	const [currentQuiz, setCurrentQuiz] = useState(0);
	const [score, setScore] = useState(0);
	const [finished, setFinished] = useState(false);

	const [userAnswers, setUserAnswers] = useState([]);
	const [answerCorrect, setAnswerCorrect] = useState([]);

	async function fetchData() {
		const res = await fetch("https://core.dit.upm.es/api/quizzes/random10wa?token=c077a2641b40e0fb129a");
		const myjson = await res.json();
		setQuizzes(myjson);
		setUserAnswers(new Array(myjson.length).fill(""));
		setAnswerCorrect(new Array(myjson.length).fill(null));
		setLoaded(true);
	}

	useEffect(() => {
		fetchData();
		changeButtonState('prev-btn', false);
	}, []);

	useEffect(() => {
		// Set saved user answer
		const answerField = document.getElementById('user-answer');
		if (answerField) {
			answerField.value = userAnswers[currentQuiz];
		}

		// Set buttons state
		if (!loaded) {
			changeButtonState('prev-btn', false);
			changeButtonState('next-btn', false);
			changeButtonState('submit-btn', false);
		} else if (currentQuiz === 0) {
			changeButtonState('prev-btn', false);
			changeButtonState('next-btn', true);
			changeButtonState('submit-btn', true);
		} else if (currentQuiz === quizzes.length - 1) {
			changeButtonState('next-btn', false);
			changeButtonState('prev-btn', true);
			changeButtonState('submit-btn', true);
		} else {
			changeButtonState('prev-btn', true);
			changeButtonState('next-btn', true);
			changeButtonState('submit-btn', true);
		}
	}, [loaded, currentQuiz]);

	function nextClick(){
		setCurrentQuiz(currentQuiz + 1);
	}

	function previousClick(){
		setCurrentQuiz(currentQuiz - 1);
	}

	function reset(){
		setQuizzes([]);
		setLoaded(false);
		setCurrentQuiz(0);
		setScore(0);
		setFinished(false);
		setUserAnswers([])
		fetchData();
		changeButtonState('prev-btn', false);
	}

	function changeButtonState(buttonName, state){
		const button = document.getElementById(buttonName)
		if (button) {
			button.disabled = !state;
		}
	}

	function onChangeUserAnswer(answer){
		const list = [...userAnswers];
		list[currentQuiz] = answer;
		setUserAnswers(list);
	}

	function handleAnswerSubmit() {
		let acertadas = 0
		let list = [...answerCorrect];
		for (let i = 0; i < quizzes.length; i++) {
			if (userAnswers[i].toLowerCase() === quizzes[i].answer.toLowerCase()) {
				acertadas += 1;
				list[i] = true;
			}
			else {
				list[i] = false;
			}
		}

		setScore(acertadas);
		setAnswerCorrect(list);
		setFinished(true)
	}

	function showNotification() {
		const toastAnswer = document.getElementById("toast-answer")
		const toast = new Toast(toastAnswer);
		toast.show()
	}

	return (
		<div>
			<h1>QUIZ</h1>
			{quizzes[currentQuiz] ? (
				<div>
					<QuizNavBar index={currentQuiz} total={quizzes.length} answerCorrect={answerCorrect} onClick={setCurrentQuiz}/>
					{finished && (
						<Score score={score}/>
					)}

					<Game quiz={quizzes[currentQuiz]} answerCorrect={answerCorrect[currentQuiz]} onChangeUserAnswer={onChangeUserAnswer} nextClick={nextClick} previousClick={previousClick} finished={finished}/>
				</div>
			) : (
				<div className="spinner-border" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			) }
			<Actionbar nextClick={nextClick} previousClick={previousClick} submitClick={handleAnswerSubmit} reClick={reset} finished={finished}/>
		</div>
	);
}
