import { useBoard } from "../hooks/useBoard";
import { styles } from "../styles/board";
import { Square } from "./Square";

export function Board() {
  const { play, values, winner } = useBoard();

  return (
    <section style={styles.container}>
      <main style={styles.board}>
        {
          [0,1,2,3,4,5,6,7,8].map(num => (
            <Square key={num} onClick={() => { play({ position: num }); }} value={values[num]} />
          ))
        }
      </main>
      {
        winner && <p>Congratulations {winner}!</p>
      }
    </section>
  );
}
