import About from "../About";
import Logo from "../Logo";
import Menu from "../Menu";

import "./styles.css";

function Header({ onClick }) {
  return (
    <header className="header">
      <Logo />
      <About onClick={onClick} />
      <Menu />
    </header>
  );
}

export default Header;
