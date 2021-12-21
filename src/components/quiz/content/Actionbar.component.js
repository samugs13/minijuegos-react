import React from 'react';

import Next from '../actions/Next.component';
import Previous from '../actions/Previous.component';
import Submit from '../actions/Submit.component';
import Replay from '../actions/Replay.component';
import Reset from '../actions/Reset.component';


export default function Actionbar(props) {
	return (
		<div>
			{props.finished ?
				<Replay click={props.reClick}/>
				:
				<div>
					<Reset click={props.reClick}/>
					<Previous click={props.previousClick} />
					<Next click={props.nextClick} />
					<Submit click={props.submitClick} />
				</div>
			}
		</div>
	);
}

