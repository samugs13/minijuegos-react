import React from 'react';
import { LangContext } from "../../lang/LangContext.component";

export default function Submit(props) {

	return(
		<button id="submit-btn" className="btn btn-danger" onClick={props.click}>
			<LangContext.Consumer>
				{(context) => {
					return (
						<p className="texto">{context.dictionary["submit"]}</p>
					)}
				}
			</LangContext.Consumer>
		</button>
	);

}
