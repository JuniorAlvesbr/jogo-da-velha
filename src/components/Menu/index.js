import "./styles.css";

function Menu(props) {
  return (
    <div className={`menu ${props.active}`}>
      <div className="hamburger">
        <a href="menu" className="link">
          Menu
        </a>
      </div>
    </div>
  );
}

export default Menu;
