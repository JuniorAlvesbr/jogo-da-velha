import AboutLink from "../AboutLink";
import Logo from "../Logo";
import Menu from "../Menu";

import "./styles.css";

function Header({ onClick }) {
  return (
    <header className="header">
      <Logo />
      <AboutLink onClick={onClick} />
      <Menu onClick={onClick} />
    </header>
  );
}

export default Header;
