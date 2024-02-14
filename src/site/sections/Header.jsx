import React from "react";
import "./Header.scss";
import logoPhoenix from "../../images/logo/logo_2.png";

import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

function SecondHeader() {
  const [show, setShow] = useState(() => false);
  return (
    <header>
      <div className="container">
        <div className="logo_toggler">
          <div className="logo">
            <Link to="/" alt="logo phoenix air lines">
              <img src={logoPhoenix} alt="Header phoenix airlines brand" />
            </Link>
          </div>
          <div className="navbar_toggler">
            <FontAwesomeIcon
              icon={show ? faXmark : faBars}
              onClick={() => setShow((prevState) => !prevState)}
            />
          </div>
        </div>
        <div className={`nav_Contact ${!show ? "hideNav" : null}`}>
          <nav onClick={() => setShow((prevState) => !prevState)}>
            <ul>
              <li>
                <NavLink to="/">Accueil</NavLink>
              </li>
              <li>
                <NavLink to="/horaire">Horaire</NavLink>
              </li>
              <li>
                <NavLink to="/reservations">Reservations</NavLink>
              </li>
              <li>
                <NavLink to="/destinations">Destinations</NavLink>
              </li>
              <li>
                <NavLink to="/apropos">a propos</NavLink>
              </li>
            </ul>
          </nav>
          <div
            className="contactBtn"
            onClick={() => setShow((prevState) => !prevState)}
          >
            <Link to="/contact">
              <button>Contacts</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default SecondHeader;
