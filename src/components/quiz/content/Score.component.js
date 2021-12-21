import React from 'react';
import { LangContext } from "../../lang/LangContext.component";

export default function Score(props) {

	return (
		<h1>
            <LangContext.Consumer>
				{(context) => {
					return (
						<span className="badge bg-success" style={{marginLeft: "10px",}}>
               				{context.dictionary["score"]}: {props.score}/10
            			</span>
					)}
				}
			</LangContext.Consumer>
		</h1>
	);
}

			