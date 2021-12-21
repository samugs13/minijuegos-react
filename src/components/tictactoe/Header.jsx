import React from 'react';
import { LangContext } from "../lang/LangContext.component";

export default function Header(props) {
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
					<LangContext.Consumer>
						{(context) => {
							return (
								<p className="texto">{context.dictionary["turn"]}</p>
							)}
						}
					</LangContext.Consumer>
				</div>
				<div className="card-text">
					{props.text}
				</div>
			</div>
		</div>
	);
}
