import About from "../About";
import Logo from "../Logo";
import Menu from "../Menu";

import "./styles.css";

function HeaderInternal() {
  return (
    <header className="header-internal">
      <Logo logo="logoWhite" />
      <About white="-white" />
      <Menu active="-active" />
    </header>
  );
}

export default HeaderInternal;
