import Input from "../Input";
import Label from "../Label";

import "./styles.css";

function ShowEvents() {
  return (
    <div className="show-events">
      <Input type="checkbox" id="events" name="events" />
      <Label htmlfor="events">Mostrar Eventos</Label>
    </div>
  );
}

export default ShowEvents;
