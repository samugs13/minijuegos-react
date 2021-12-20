import React from 'react';
import Actionbar from './Actionbar.component';
import Question from './Question.component'
import Answer from './Answer.component'

export default function Game(props) {
    return (
        <div>
            <Question question={props.quiz.question}/>
            <Answer />
            <Actionbar/>
        </div>
    );
}