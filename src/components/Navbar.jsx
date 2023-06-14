import "./NavbarStyles.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./Menu";

// class Navbar extends Component{
//   render(){

function Navbar() {
  var [isClicked, setclick] = useState(false);

  function click() {
    setclick(!isClicked);
  }
  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">
        <a href="/">
          <i className="fa-solid fa-plane-departure"></i>
        </a>{" "}
        RBTrips
      </h1>

      <div className="menu-icons">
        <i
          onClick={click}
          className={isClicked ? "fa-solid fa-circle-xmark" : "fas fa-bars"}
        ></i>
      </div>
      <ul className={isClicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                <i className={item.icon}></i> {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <form action="/signin">
        <button type="submit">Sign Up</button>
      </form>
    </nav>
  );
}

export default Navbar;
