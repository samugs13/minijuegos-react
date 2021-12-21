import React, {useContext}  from 'react';
import { LangContext } from "../../lang/LangContext.component";

export default function Reset(props) {

	const lang = useContext(LangContext);

	return(
		<button id="next-btn" className="btn btn-warning" onClick={props.click}>

			<p className="texto">{lang.dictionary["reset"]}</p>

		</button>
	);

}