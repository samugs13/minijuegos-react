import React from 'react';
import { LangContext } from "../../lang/LangContext.component";

export default function Previous(props) {

	return(
		<button id="prev-btn" className="btn btn-info" onClick={props.click} >
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
