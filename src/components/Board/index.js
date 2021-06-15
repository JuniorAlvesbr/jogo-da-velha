import { useState } from "react";
import Player from "../Player";
import "./styles.css";

function Board({ addHistory }) {
  const [player, setPlayer] = useState('x')
  const [stateBoard, setStateBoard] = useState([
    { key: '1', content: "" },
    { key: '2', content: "" },
    { key: '3', content: "" },
    { key: '4', content: "" },
    { key: '5', content: "" },
    { key: '6', content: "" },
    { key: '7', content: "" },
    { key: '8', content: "" },
    { key: '9', content: "" },
  ])

  const handleCLick = (key) => {
    setPlayer((old) => old === "x" ? "o" : "x")
    setStateBoard((old) => old.map(item => item.key === key ? { key, content: player } : item))
    addHistory(player)
  }

  return (
    <article className="board" >
      {stateBoard.map(({ key, content }) =>
        <Player
          key={key}
          content={content}
          onClick={() => content === "" && handleCLick(key)}
        />)}
    </article>
  );
}

export default Board;
