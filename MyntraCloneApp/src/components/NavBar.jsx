import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav_bar">
      <Link to="/">Men</Link>
      <Link to="/">Women</Link>
      <Link to="/">Kids</Link>
      <Link to="/">Home & Living</Link>
      <Link to="/">Beauty</Link>
      <Link to="/">
        Studio <sup>New</sup>
      </Link>
    </nav>
  );
}

export default NavBar;
