import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

function SocialMedia() {
  return (
    <ul className="social-media">
      <li className="item">
        <a href="github">
          <img src={github} alt="link" />
        </a>
      </li>
      <li className="item">
        <a href="github">
          <img src={linkedin} alt="link" />
        </a>
      </li>
      <li className="item">
        <a href="github">
          <img src={facebook} alt="link" />
        </a>
      </li>
      <li className="item">
        <a href="github">
          <img src={twitter} alt="link" />
        </a>
      </li>
      <li className="item">
        <a href="github">
          <img src={instagram} alt="link" />
        </a>
      </li>
    </ul>
  );
}

export default SocialMedia;
