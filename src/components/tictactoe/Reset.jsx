import React, { useContext } from 'react';
import { LangContext } from "../lang/LangContext.component";

export default function Reset(props) {
  function click() {
    props.resetClick();
  }

  const lang = useContext(LangContext);

  return(
    <button className="btn btn-warning" onClick={click} >
      <p className="texto">{lang.dictionary["reset"]}</p>
    </button>
  );

}
