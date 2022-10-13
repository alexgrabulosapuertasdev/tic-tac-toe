import { COLOUR_BY_VALUE } from "../constants/constants";
import { styles } from "../styles/square";

export function Square({ onClick, value }) {
  const color = COLOUR_BY_VALUE[value];

  return(
    <div onClick={onClick} style={{ ...styles.container, color }}>
      <span>{ value }</span>
    </div>
  );
}