import React, {useContext}  from 'react';
import { LangContext } from "../../lang/LangContext.component";

export default function Next(props) {

	const lang = useContext(LangContext);

	return(
		<button id="next-btn" className="btn btn-info" onClick={props.click}>

			<p className="texto">{lang.dictionary["next"]}</p>

		</button>
	);

}
