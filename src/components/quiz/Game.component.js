import React from 'react';
import Actionbar from './content/Actionbar.component';
import Question from './content/Question.component'
import Answer from './content/Answer.component'
import Author from './content/Author.component'

export default function Game(props) {

    return (
        <div>
            <Question question={props.quiz.question}/>
            <Author author={props.quiz.author}/>
            <Answer />
            <Actionbar nextClick={props.nextClick} previousClick={props.previousClick}/>
        </div>
    );
}