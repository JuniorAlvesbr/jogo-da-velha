import AboutLink from "../AboutLink";
import Logo from "../Logo";
import Menu from "../Menu";

import "./styles.css";

function HeaderInternal({ onClick }) {
  return (
    <header className="header-internal">
      <Logo logo="logoWhite" />
      <AboutLink white="-white" onClick={onClick} />
      <Menu active="-active" onClick={onClick} />
    </header>
  );
}

export default HeaderInternal;
