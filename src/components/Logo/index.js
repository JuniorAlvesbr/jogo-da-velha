import logoDark from "../../assets/logo-dark.svg";
import logoWhite from "../../assets/logo-white.svg";

function Logo({ logo }) {
  return <img src={logo === "logoWhite" ? logoWhite : logoDark} alt="teste" />;
}

export default Logo;
