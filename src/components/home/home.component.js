import React, { Component, useContext } from 'react';
import '../../css/home.css';
import { LangContext } from "../../lang/LangContext";

export default class Home extends Component {
	render() {
		return (
			<div className="home">
				<br></br>
				<LangContext.Consumer>
					{(context) => {
						return <div>
							<h1 className="titulo">{context.dictionary["title"]}</h1>
							<p className="texto">{context.dictionary["text"]}</p>
						</div>
					}
					}
				</LangContext.Consumer>
			</div>
		);
	}
}
