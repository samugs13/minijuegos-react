import React, { useState, useEffect, useContext } from 'react';
import { LangContext } from "../lang/LangContext.component";
import Header from './Header.jsx';
import Board from './Board.jsx';
import Reset from './Reset.jsx';

const PLAYERX = "Player 1 - Xs";
const PLAYER0 = "Player 2 - 0s";

export default function Tictactoe(props) {
  const [turn, setTurn] = useState(PLAYERX);
  const [moves, setMoves] = useState(0);
  const [values, setValues] = useState([
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-']
    ]);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `Turn of ${turn}`;
  });

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://myjson.dit.upm.es/api/bins/ccr5");
      const myjson = await res.json();
      console.log(myjson);
      setTurn(myjson.turn);
      setMoves(myjson.moves);
      setValues(myjson.values);
    }

    fetchData();
  }, []);

  function appClick(rowNumber, columnNumber) {
      let valuesCopy = JSON.parse(JSON.stringify(values));
      let newMovement = turn === PLAYERX ? 'X' : '0';
      valuesCopy[rowNumber][columnNumber] = newMovement;
      setTurn(turn === PLAYERX ? PLAYER0 : PLAYERX);
      setValues(valuesCopy);
      setMoves(moves + 1); 
  }

  function resetClick(){
    setTurn(PLAYERX);
    setMoves(0);
    setValues([
      ['-', '-', '-'],
      ['-', '-', '-'],
      ['-', '-', '-']
    ]);
  }

  let text = turn;
  
  return (
    <div>
      <Header text={text}/>
      <Board values={values}  appClick={appClick}/>
      <h3><LangContext.Consumer>
              {(context) => {
                return (
                  <p className="texto">{context.dictionary["number"]} {moves}</p>
                )}
              }
          </LangContext.Consumer>
        </h3>
      <Reset resetClick={resetClick}></Reset>
    </div>
  );


}