import Player from "../Player";
import "./styles.css";

function Board() {
  return (
    <article className="board">
      <Player />
      <Player />
      <Player />
      <Player />
      <Player />
      <Player />
      <Player />
      <Player />
      <Player />
    </article>
  );
}

export default Board;
