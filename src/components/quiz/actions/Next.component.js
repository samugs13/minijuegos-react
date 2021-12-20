import React, { Component} from 'react';
import { LangContext } from "../../lang/LangContext.component";

export default function Next(props) {
  
  function click() {
    props.nextClick();
  }

  return(
    <button className="btn btn-info" onClick={click}>
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