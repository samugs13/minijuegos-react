import React, { useContext } from 'react';
import { LangContext } from "../lang/LangContext.component";

export default function Header(props) {

	const lang = useContext(LangContext);

	return (
		<div
			className="card"
			style={{
				width: '18rem',
				margin: '0 auto',
			}}
		>
			<div className="card-body">
				<div className="card-title">
               		 <p className="texto">{lang.dictionary["turn"]}</p>
				</div>
				
				<div className="card-text">
					{props.text}
				</div>
			</div>
		</div>
	);
}
