import react, { useState } from "react";
import Menu from "./Menu";
import "./header.css";
const Header = () => {
  const menuBtn = { postion: "-100%", status: true };
  const [menu, setMenu] = useState(menuBtn);
  const handleMenu = () => {
    setMenu({ postion: "0", status: !menu.status });
  };
  const handleMenuCansel = () => {
    setMenu({ postion: "-100%", status: !menu.status });
  };
  return (
    <>
      <div className="header">
        <div className="nav__logo">Logo{menu.status}</div>
        <ul className="header__ul">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact US</li>
        </ul>
        {menu.status ? (
          <button
            className="menu__btn"
            onClick={() => {
              handleMenu();
            }}
          >
            menu
          </button>
        ) : (
          <button
            className="menu__btn"
            onClick={() => {
              handleMenuCansel();
            }}
          >
            cansel
          </button>
        )}
      </div>
      <div className="menu__container" style={{ left: menu.postion }}>
        <Menu />
      </div>
    </>
  );
};
export default Header;
