import React, { Component} from 'react';
import Next from '../actions/Next.component';
import Previous from '../actions/Previous.component';
import Submit from '../actions/Submit.component';

export default function Actionbar(props) {
	return (
		<div>
			<Previous previousClick={props.previousClick}/>
			<Next nextClick={props.nextClick}/>
			<Submit/>
		</div>
	);
}
