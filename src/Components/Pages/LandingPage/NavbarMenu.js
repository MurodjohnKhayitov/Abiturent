import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./Navbar.css";
export default function NavbarMenu() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div className="fixed-top">
      <nav className="navbar fixed-top">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            TEST<font>MASTER</font>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Bosh Sahifa
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/exam"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Test
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/news"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Qullanma
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Bog'lanish
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/authentication"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Kirish
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? <AiOutlineMenu /> : <AiOutlineClose />}
          </div>
        </div>
      </nav>
    </div>
  );
}
