import React, { Component, useState } from 'react';
import LangSelector from "../lang/LangSelector.component";
import { quizzes } from "../../assets/mock-data";
import Game from './Game.component'

export default function Quiz() {

  const [whatquiz, setQuizzes] = useState(quizzes);
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, isFinished] = useState(false);

  return (
    <div>
      <h1>QUIZ</h1>
	  <Game quiz={whatquiz[currentQuiz]}/>
    </div>
  );
}
