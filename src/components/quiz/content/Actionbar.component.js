import React from 'react';

import Next from '../actions/Next.component';
import Previous from '../actions/Previous.component';
import Submit from '../actions/Submit.component';

export default function Actionbar(props) {
	return (
		<div>
			<Previous click={props.previousClick} />
			<Next click={props.nextClick} />
			<Submit click={props.submitClick} />
		</div>
	);
}
