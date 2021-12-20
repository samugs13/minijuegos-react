import React from 'react';
import Actionbar from './Actionbar.component';
import Question from './Question.component'
import Answer from './Answer.component'
import Author from './Author.component'

export default function Game(props) {
    return (
        <div>
            <Question question={props.quiz.question}/>
            <Author author={props.quiz.author}/>
            <Answer />
            <Actionbar/>
        </div>
    );
}