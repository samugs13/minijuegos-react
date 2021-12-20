import React, { Component} from 'react';
import { LangContext } from "../lang/LangContext.component";

export default function Submit(props) {

    return(
      <button className="btn btn-danger">
        <LangContext.Consumer>
          {(context) => {
            return (
                <p className="texto">{context.dictionary["submit"]}</p>
            )}
          }
        </LangContext.Consumer>
      </button>
    );
  
  }