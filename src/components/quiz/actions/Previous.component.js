import React, {useContext} from 'react';
import { LangContext } from "../../lang/LangContext.component";

export default function Previous(props) {

	const lang = useContext(LangContext);

	return(
		<button id="prev-btn" className="btn btn-info" onClick={props.click} >
		
			<p className="texto">{lang.dictionary["previous"]}</p>
	
		</button>
	);

}
