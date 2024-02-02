import "./NavBar.css";
import { Link } from "react-router-dom";
import React from "react";
import FontSelector from "./FontSelector";

function NavBar() {
  return (
    <nav className="NavBar">
      <h1 className="HdrTxt">
        About<span>Me</span>
      </h1>
      <div className="Links">
       <FontSelector />

        <h3>
          <Link to="/" className="navLink">
            HOME
          </Link>
        </h3>
        <h3>
          <Link to="/About" className="navLink">
            ABOUT
          </Link>
        </h3>
        <h3>
          <Link to="/My-Work" className="navLink">
            MY WORK
          </Link>
        </h3>
        <h3>
          <Link to="/Contact" className="navLink">
            CONTACT
          </Link>
        </h3>
      </div>
    </nav>
  );
}
export default NavBar;
