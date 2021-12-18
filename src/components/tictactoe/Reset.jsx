import React from 'react';
import {Button} from 'react-bootstrap';
import { LangContext } from "../lang/LangContext.component";

export default function Reset(props) {
  function click() {
    props.resetClick();
  }

  return(
    <Button className="btn btn-warning" onClick={click} >
      <LangContext.Consumer>
              {(context) => {
              return (
                <p className="texto">{context.dictionary["reset"]}</p>
              )}
              }
            </LangContext.Consumer>
    </Button>
  );

}
