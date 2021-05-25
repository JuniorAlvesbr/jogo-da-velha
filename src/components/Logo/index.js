import logoDark from "../../assets/logo-dark.svg";
import logoWhite from "../../assets/logo-white.svg";

function Logo(props) {
  return (
    <img src={props.active ? logoWhite : logoDark} alt="Logo jogo da velha" />
  );
}

export default Logo;
