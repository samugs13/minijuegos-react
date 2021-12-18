import React from 'react';

const squareStyle = {
  height: '100px',
  width: '100px',
};

export default function Square(props) {
  
  function squareClick() {
    if(props.value === "-") {
      props.boardClick(props.rowIndex, props.columnIndex);
    }
  }

  return(
    <button style={squareStyle} onClick={squareClick} className={props.value === "-" ? "clickable" : "no_clickable"}>
      {props.value}
    </button>
  );
  
}