import About from "../About";
import Logo from "../Logo";
import Menu from "../Menu";

import "./styles.css";

function Header(props) {
  return (
    <header className="header">
      <Logo active={props.active} />
      <About active={props.active} />
      <Menu active={props.active} />
    </header>
  );
}

export default Header;
