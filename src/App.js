import AboutPage from "./components/AboutPage";
import Board from "./components/Board";
import Header from "./components/Header";
import ShowEvents from "./components/ShowEvents";

import "./styles/global.css";

function App() {
  return (
    <>
      <Header />
      <Board />
      <ShowEvents />
      <AboutPage />
    </>
  );
}

export default App;
