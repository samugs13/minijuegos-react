import React, { useState } from 'react';

import Question from './content/Question.component'
import Answer from './content/Answer.component'
import Author from './content/Author.component'
import Score from './content/Score.component'

export default function Game(props) {
	const quiz = props.quiz;

	return (
		<div>
			{props.finished ?
				<Score score={props.score}/>
				:
				<div>
					<Question question={quiz.question} photo={quiz.attachment}/>
					<Author author={quiz.author}/>
					<Answer onAnswerChange={props.onChangeUserAnswer}/>
				</div>
			}
		</div>
	);
}
