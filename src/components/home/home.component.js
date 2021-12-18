import React, { Component, useContext } from 'react';
import '../../css/home.css';
import { LangContext } from "../../lang/LangContext";

export default class Home extends Component {
  render() {
    return (
      <div class="home">
        <br></br>
        <LangContext.Consumer>
				{(context) => {
					return <div>
									<h1 class="titulo">{context.dictionary["title"]}</h1>
                  <p class="texto">{context.dictionary["text"]}</p>
								</div>
					}
				}		
			</LangContext.Consumer>			
      </div>
    );
  }
}