import React, {useContext}  from 'react';
import { LangContext } from "../../lang/LangContext.component";

export default function Replay(props) {

	const lang = useContext(LangContext);

	return(
		<button id="next-btn" className="btn btn-warning" onClick={props.click}>
			
			<p className="texto">{lang.dictionary["replay"]}</p>
	
		</button>
	);

}