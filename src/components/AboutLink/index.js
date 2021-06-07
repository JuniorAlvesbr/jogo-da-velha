import "./styles.css";

function AboutLink({ onClick, white = "" }) {
  return (
    <a href="#todo" className={`about-link ${white}`} onClick={onClick}>
      About
    </a>
  );
}

export default AboutLink;
