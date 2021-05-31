import About from "../About";
import Logo from "../Logo";
import Menu from "../Menu";

function HeaderInternal() {
  return (
    <header>
      <Logo />
      <About />
      <Menu />
    </header>
  );
}

export default HeaderInternal;
