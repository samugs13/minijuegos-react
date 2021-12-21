import React from 'react';

import Next from '../actions/Next.component';
import Previous from '../actions/Previous.component';
import Submit from '../actions/Submit.component';
import Replay from '../actions/Replay.component';
import Reset from '../actions/Reset.component';


export default function Actionbar(props) {
	return (
		<div>
			{props.finished ? (
				<div>
					<Previous click={props.previousClick} />
					<Next click={props.nextClick} />
					<Replay click={props.reClick}/>
				</div>
			) : (
				<div>
					<Previous click={props.previousClick} />
					<Next click={props.nextClick} />
					<Reset click={props.reClick}/>
					<Submit click={props.submitClick} />
				</div>
			)}
		</div>
	);
}
