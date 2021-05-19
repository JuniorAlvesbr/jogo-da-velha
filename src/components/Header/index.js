import About from "../About";
import Logo from "../Logo";
import Menu from "../Menu";

import "./styles.css";

function Header() {
  return (
    <header className="header">
      <Logo />
      <About />
      <Menu />
    </header>
  );
}

export default Header;
