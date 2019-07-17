import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

function NavLinks() {
  return (
    <div className="links">
      <NavLink exact to="/" className="link" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/about" className="link">
        About
      </NavLink>
      <NavLink to="/contact" className="link">
        Contact Us
      </NavLink>
      <NavLink to="/admin" className="link">
        Admin
      </NavLink>
    </div>
  );
}

export default NavLinks;
