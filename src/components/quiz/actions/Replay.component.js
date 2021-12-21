import React, {useEffect}  from 'react';
import { LangContext } from "../../lang/LangContext.component";

export default function Replay(props) {

	return(
		<button id="next-btn" className="btn btn-warning" onClick={props.click}>
			<LangContext.Consumer>
				{(context) => {
					return (
						<p className="texto">{context.dictionary["replay"]}</p>
					)}
				}
			</LangContext.Consumer>
		</button>
	);

}