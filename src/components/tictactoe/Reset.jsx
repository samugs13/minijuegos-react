import React from 'react';

export default function Reset(props) {
  function click() {
    props.resetClick();
  }

  return(
    <button className="btn btn-warning" onClick={click} >
      Reset
    </button>
  );

}
