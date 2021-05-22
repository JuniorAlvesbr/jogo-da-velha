function Input(props) {
  return (
    <input
      type={props.type}
      id={props.id}
      name={props.name}
      className="input"
    />
  );
}

export default Input;
