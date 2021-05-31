import "./styles.css";

function Menu({ active = "", onClick }) {
  return (
    <div className={`menu ${active}`} onClick={onClick}>
      <div className="hamburger">
        <a href="menu" className="link">
          Menu
        </a>
      </div>
    </div>
  );
}

export default Menu;
