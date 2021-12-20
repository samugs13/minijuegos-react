import React, { Component} from 'react';
import { LangContext } from "../lang/LangContext.component";

export default function Previous(props) {

    return(
      <button className="btn btn-info">
        <LangContext.Consumer>
          {(context) => {
            return (
                <p className="texto">{context.dictionary["previous"]}</p>
            )}
          }
        </LangContext.Consumer>
      </button>
    );
  
  }