import "./styles.css";

function About({ white = "" }) {
  return (
    <a href="#todo" className={`about ${white}`}>
      About
    </a>
  );
}

export default About;
