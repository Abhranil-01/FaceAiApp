import { faBars, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-scroll";
import "./navbar.css";
import {NavLink} from 'react-router-dom'
import LoginRegister from "../LoginRegister/LoginRegister";


function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark  px-0 px-md-5 ">
      <div className="container-fluid ">
        <div class="keyboard">
          <span class="key">F</span>
          <span class="key">a</span>
          <span class="key">c</span>
          <span class="key">e</span>
          <span class="key">s</span>
          <span class="key">e</span>
          <span class="key">a</span>
          <span class="key">r</span>  
          <span class="key">c</span>
          <span class="key">h</span>
          <span class="key">A</span>
          <span class="key">I</span>
        </div>
 
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="text-white fs-2">
            <FontAwesomeIcon icon={faBars} />
          </span>
        </button>
        <div
          className="offcanvas offcanvas-end bg-dark"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header ">
            <h5
              className="offcanvas-title text-white"
              id="offcanvasNavbarLabel"
            >
              FacesearchAI
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body ">
            <ul
              className={
                click
                  ? "navbar-nav ms-auto gap-4 justify-content-center flex-grow-1 pe-2  active "
                  : "navbar-nav ms-auto gap-4 justify-content-center flex-grow-1 pe-2  "
              }
            >
              <li className="nav-item " onClick={closeMenu}>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={200}
                  aria-current="page"
                  className="nav-link "
                >
                  Home
                </Link>
              </li>
              <li className="nav-item" onClick={closeMenu}>
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={200}
                  className="nav-link"
                >
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={200}
                  onClick={closeMenu}
                  className="nav-link"
                >
                  About Us
                </Link>
              </li>
            
              <li className="nav-item">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={200}
                  onClick={closeMenu}
                  className="nav-link"
                >
                  Plan
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={200}
                  onClick={closeMenu}
                  className="nav-link"
                >
                  Contact Me
                </Link>
              </li>
            </ul>
            <NavLink  className="login-button" >Login</NavLink>
            <div></div>
            {/* <LoginRegister/> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
