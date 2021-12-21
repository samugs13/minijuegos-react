import React, {useEffect}  from 'react';
import { LangContext } from "../../lang/LangContext.component";

export default function Reset(props) {

	return(
		<button id="next-btn" className="btn btn-warning" onClick={props.click}>
			<LangContext.Consumer>
				{(context) => {
					return (
						<p className="texto">{context.dictionary["reset"]}</p>
					)}
				}
			</LangContext.Consumer>
		</button>
	);

}
