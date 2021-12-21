import React from 'react';
import { LangContext } from "../../lang/LangContext.component";
import { useContext } from 'react';


export default function Score(props) {

	const lang = useContext(LangContext);

	return (
		<h1>
<<<<<<< HEAD
			<span className="badge bg-success" style={{marginLeft: "10px",}}>
				{lang.dictionary["score"]}: {props.score}/10
			</span>
=======
			<LangContext.Consumer>
				{(context) => {
					return (
						<span className="badge bg-success" style={{marginLeft: "10px",}}>
							{context.dictionary["score"]}: {props.score}/10
						</span>
					)}
				}
			</LangContext.Consumer>
>>>>>>> 054e37feba3e7dc70eb84069c33fa3434d964a3f
		</h1>
	);
}
