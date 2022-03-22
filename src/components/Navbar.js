import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav
      className="navbar sticky-top navbar-expand-lg mb-5 navbar-dark"
      id="navbar"
    >
      <div className="container-fluid">
        <NavLink className="nav-link display-6 me-1" to="/">
          DOGGIES
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon --bs-white"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav align-items-center mx-auto mx-5 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Főoldal
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/breeds">
                Kutyafajták
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
