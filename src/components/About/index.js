import "./styles.css";

function About({ onClick, white = "" }) {
  return (
    <a href="#todo" className={`about ${white}`} onClick={onClick}>
      About
    </a>
  );
}

export default About;
