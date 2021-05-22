import "./styles.css";

function Menu() {
  return (
    <>
      <input type="checkbox" id="checkbox" className="checkbox" />
      <label className="hamburger-container" htmlFor="checkbox">
        <div className="hamburger"></div>
      </label>
    </>
  );
}

export default Menu;
