import ProfilePage from "./components/ProfilePage";
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
      <ProfilePage />
    </>
  );
}

export default App;
