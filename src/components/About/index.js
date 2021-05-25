import "./styles.css";

function About(props) {
  console.log(props.active);
  return <span className={`about ${props.active}`}>About</span>;
}

export default About;
