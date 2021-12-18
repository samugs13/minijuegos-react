import React from 'react';
import {Button} from 'react-bootstrap';

export default function Reset(props) {
  function click() {
    props.resetClick();
  }

  return(
    <Button onClick={click} >
      Reset
    </Button>
  );
    
}