import React, {useEffect}  from 'react';
import { LangContext } from "../../lang/LangContext.component";

export default function Next(props) {

	return(
		<button id="next-btn" className="btn btn-info" onClick={props.click}>
			<LangContext.Consumer>
				{(context) => {
					return (
						<p className="texto">{context.dictionary["next"]}</p>
					)}
				}
			</LangContext.Consumer>
		</button>
	);

}
