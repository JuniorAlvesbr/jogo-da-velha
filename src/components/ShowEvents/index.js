import Input from "../Input";
import Label from "../Label";
import EventList from "../EventList";

import "./styles.css";

function ShowEvents({ history }) {
  return (
    <div className="show-events">
      <Input type="checkbox" id="events" name="events" />
      <Label htmlfor="events">Mostrar Eventos</Label>
      <EventList history={history} />
    </div>
  );
}

export default ShowEvents;
