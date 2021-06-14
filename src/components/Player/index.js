import playerX from "../../assets/X.svg";
import playerO from "../../assets/O.svg";

import "./styles.css";

function Player({ content = "", onClick }) {
  const players = [];
  players["x"] = playerX;
  players["o"] = playerO;

  return (
    <button className="player" onClick={onClick}>
      {content && <img src={players[content]} alt={`jogador ${content}`} />}
    </button>
  );
}

export default Player;
