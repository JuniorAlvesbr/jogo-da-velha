import Player from "../Player";
import "./styles.css";

function Board() {
  return (
    <article className="board">
      <Player player="X" />
      <Player player="O" />
      <Player player="X" />
      <Player player="O" />
      <Player player="X" />
      <Player player="O" />
      <Player player="X" />
      <Player player="O" />
      <Player player="X" />
    </article>
  );
}

export default Board;
