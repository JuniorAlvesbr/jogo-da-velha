import "./styles.css";
import playerX from "../../assets/X.svg";
import playerO from "../../assets/O.svg";

import "./styles.css";

function Player(props) {
  const player = [];
  player["X"] = playerX;
  player["O"] = playerO;

  return (
    <button className="player">
      <img src={player[props.player]} alt="teste" />
    </button>
  );
}

export default Player;
