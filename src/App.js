import { useState } from "react";
import Board from "./components/Board";
import Header from "./components/Header";
import ShowEvents from "./components/ShowEvents";
import EventList from "./components/EventList";
import AboutPage from "./components/AboutPage";

import "./styles/global.css";

function App() {
  const [active, setActive] = useState("");

  const handleClick = () => {
    active === "-active" ? setActive("") : setActive("-active");
  };

  return (
    <>
      <Header onClick={handleClick} />
      <Board />
      <ShowEvents />
      <EventList />
      <AboutPage active={active} onClick={handleClick} />
    </>
  );
}

export default App;
