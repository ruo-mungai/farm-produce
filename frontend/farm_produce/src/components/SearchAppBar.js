import React, { useState } from "react";
import "./Navbar.css"
import { NavLink } from "react-router-dom";

export default function SearchAppBar({images}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <div className={`nav-items ${isOpen && "open"}`}>
         {/* <NavLink style={{ marginLeft: "50px",  marginRight:"20px"}} to="/search">Home</NavLink>
       <NavLink style={{ marginLeft: "50px",  marginRight:"20px"}} to="/search">Search</NavLink> */}
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};