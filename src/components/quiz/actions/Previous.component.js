import React from 'react';
import { LangContext } from "../../lang/LangContext.component";

export default function Previous(props) {

	function click() {
		props.previousClick();
	}

	return(
		<button className="btn btn-info" onClick={click} >
			<LangContext.Consumer>
				{(context) => {
					return (
						<p className="texto">{context.dictionary["previous"]}</p>
					)}
				}
			</LangContext.Consumer>
		</button>
	);

}
