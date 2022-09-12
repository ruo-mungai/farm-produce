import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
 
//navlinks
export default function SearchAppBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Navbar">
      <div className={`nav-items ${isOpen && "open"}`}>
        <NavLink style={{ marginLeft: "50px", marginRight: "20px" }} to="/home">
          Home
        </NavLink>
        <NavLink
          style={{ marginLeft: "50px", marginRight: "20px" }}
          to="/views"
        >
          Products
        </NavLink>
        <NavLink
          style={{ marginLeft: "50px", marginRight: "20px" }}
          to="/product"
        >
          Buy product
        </NavLink>
        <NavLink style={{ marginLeft: "50px", marginRight: "20px" }} to="/">
          Logout
        </NavLink>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
}
