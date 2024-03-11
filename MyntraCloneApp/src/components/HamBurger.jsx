import React from "react";

import { Link } from "react-router-dom";

function HamBurger() {
  return (
    <div className="topnav">
      <ul id="myLinks">
        <li>
          <Link to="/"></Link>MEN
        </li>
        <hr></hr>
        <li>
          <Link to="/"></Link>WOMEN
        </li>
        <hr></hr>
        <li>
          <Link to="/"></Link>KIDS
        </li>
        <hr></hr>
        <li>
          <Link to="/"></Link>HOME & LIVING
        </li>
        <hr></hr>
        <li>
          <Link to="/"></Link>BEAUTY
        </li>
      </ul>
    </div>
  );
}

export default HamBurger;
