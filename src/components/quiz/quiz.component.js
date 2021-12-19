import React, { Component, useState } from 'react';
import LangSelector from "../lang/LangSelector.component";
import { quizzes } from "../../assets/mock-data";

export default function Quiz() {

	let initialState = {
		score: 0,
		finished: false,
		currentQuiz: 0,
		quizzes: []
	}
	  
	const [quizzes, setQuizzes] = useState([]);

  return (
    <div>
      <h1>QUIZ</h1>
    </div>
  );
}
