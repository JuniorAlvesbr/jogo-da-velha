import { useState } from "react";
import playerX from "../../assets/X.svg";
import playerO from "../../assets/O.svg";

import "./styles.css";

function Player({ player = "" }) {
  const [statePlayer, setStatePlayer] = useState(player)

  const players = [];
  players["X"] = playerX;
  players["O"] = playerO;

  const handleClick = () => {
    statePlayer === "X" ? setStatePlayer("O") : setStatePlayer("X")
  }

  return (
    <button className="player" onClick={handleClick}>
      {statePlayer && <img src={players[statePlayer]} alt="teste" />}
    </button>
  );
}

export default Player;
