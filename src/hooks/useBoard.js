import { useState } from "react";
import { VALUES, WIN_POSITIONS } from "../constants/constants";

export function useBoard() {
  const [turn, setTurn] = useState(0);
  const [values, setValues] = useState(Array(9).fill(undefined));
  const [winner, setWinner] = useState(undefined);

  const advanceTurn = () => {
    setTurn(turn + 1);
  };

  const hasWin = () => {
    for (const positions of WIN_POSITIONS) {
      if (values[positions[0]] 
        && values[positions[0]] === values[positions[1]] 
        && values[positions[0]] === values[positions[2]]) 
        {
        setWinner(values[positions[0]]);
      }
    }
  };

  const play = ({ position }) => {
    if (winner) return;
    if (values[position]) return;

    advanceTurn();
    values[position] = turn % 2 === 0 ? VALUES.X : VALUES.O;
    hasWin();
  };

  const resetGame = () => {
    setTurn(0);
    setValues([]);
    setWinner(undefined);
  };

  return {
    play,
    resetGame,
    values,
    winner,
  };
}
