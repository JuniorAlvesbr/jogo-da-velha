import EventTag from "../EventTag";

import './styles.css';

function EventList() {
  return (
    <ol className="event-list">
      <li className="item"><EventTag content="Adicionado O" /></li>
      <li className="item"><EventTag content="Adicionado X" /></li>
      <li className="item"><EventTag content="Adicionado O" /></li>
      <li className="item"><EventTag content="Adicionado X" /></li>
      <li className="item"><EventTag content="Empate !" className="-end" /></li>
    </ol>
  )
}

export default EventList;