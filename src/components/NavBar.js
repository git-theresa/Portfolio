import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
    const location = useLocation();

  return (

    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
          About
        </Link>
      </li>
      
      <li className="nav-item">
        <Link
          to="/portfolio"
          className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </li>
     
    </ul>
  );
}

export default NavTabs;
//     <Nav defaultActiveKey="/home" className="flex-column">
//   <Nav.Link href="/home">Active</Nav.Link>
//   <Nav.Link eventKey="link-1">Link</Nav.Link>
//   <Nav.Link eventKey="link-2">Link</Nav.Link>
//   <Nav.Link eventKey="disabled" disabled>
//     Disabled
//   </Nav.Link>
// </Nav>