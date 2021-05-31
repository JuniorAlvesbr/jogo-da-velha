import "./styles.css";

function Menu({ active = "" }) {
  return (
    <div className={`menu ${active}`}>
      <div className="hamburger">
        <a href="menu" className="link">
          Menu
        </a>
      </div>
    </div>
  );
}

export default Menu;
