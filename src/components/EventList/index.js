import EventTag from "../EventTag";

import './styles.css';

function EventList({ history }) {
  return (
    <ol className="event-list">
      {history.map((item, index) => (
        item === "empate" ? <li className="item" key={index}><EventTag content="Empate !" className="-end" /></li> :
          <li className="item" key={index}><EventTag content={item} /></li>
      ))}
    </ol>
  )
}

export default EventList;