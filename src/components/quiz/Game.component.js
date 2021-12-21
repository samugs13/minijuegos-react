import React, { useState } from 'react';

import Question from './content/Question.component'
import Answer from './content/Answer.component'
import Author from './content/Author.component'

export default function Game(props) {
	const quiz = props.quiz;

	return (
		<div>
			<Question question={quiz.question} photo={quiz.attachment}/>
			<Author author={quiz.author}/>
			<Answer onAnswerChange={props.onChangeUserAnswer} correctAnswer={quiz.answer} correct={props.answerCorrect} handleEnterKey={props.handleEnterKey}/>
		</div>
	);
}
