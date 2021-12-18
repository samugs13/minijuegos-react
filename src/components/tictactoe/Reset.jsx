import React from 'react';
import {Button} from 'react-bootstrap';

export default function Reset(props) {
  function click() {
    props.resetClick();
  }

  return(
    <Button className="btn btn-warning" onClick={click} >
      Reset
    </Button>
  );

}
