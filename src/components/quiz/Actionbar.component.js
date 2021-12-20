import React, { Component} from 'react';
import Next from './Next.component';
import Previous from './Previous.component';
import Submit from './Submit.component';

export default function Actionbar(props) {
    return (
        <div>
            <Previous/>
            <Next/>
            <Submit/>
        </div>
    );
}