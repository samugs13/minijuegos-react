import React from 'react';
import { LangContext } from "../../lang/LangContext.component";
import { useContext } from 'react';


export default function Score(props) {

	const lang = useContext(LangContext);

	return (
		<h1>
			<span className="badge bg-success" style={{marginLeft: "10px",}}>
				{lang.dictionary["score"]}: {props.score}/10
			</span>
		</h1>
	);
}
