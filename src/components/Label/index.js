import "./styles.css";

function Label(props) {
  return (
    <label htmlFor={props.htmlfor} className="label">
      {props.children}
    </label>
  );
}

export default Label;
