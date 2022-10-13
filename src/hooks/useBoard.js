import { useState } from "react";
import { VALUES } from "../constants/constants";

export function useBoard() {
  const [turn, setTurn] = useState(0);
  const [values, setValues] = useState(Array(9).fill(undefined));

  const advanceTurn = () => {
    setTurn(turn + 1);
  };

  const play = ({ position }) => {
    if (values[position]) return;

    advanceTurn();
    values[position] = turn % 2 === 0 ? VALUES.X : VALUES.O;
  };

  return {
    play,
    values,
  };
}
