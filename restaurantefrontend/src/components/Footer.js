import React from "react";
import Logo from "../assets/LaEstacionLogo.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className="container-fluid fixed-bottom"
      style={{ background: "#b5ab85" }}
    >
      <footer
        className="d-flex justify-content-between align-items-center border-top border-2 border-dark static-bottom"
        style={{ height: "81px"}}
      >
        <p className="col-md-4 text-center" style={{ color: "#0f020a" }}>
          © 2023 La Estación
        </p>

        <NavLink
          to="/"
          className="col-md-4 d-flex align-items-center justify-content-center"
        >
          <img
            className="color-image"
            src={Logo}
            alt="La estacion logo"
            height="50"
          />
        </NavLink>

        <ul className="nav col-md-4 justify-content-center">
          <li className="nav-item">
            <a
              href="https://github.com/juanescastro29/Video-Gallery"
              className="nav-link px-2 text-white"
              target="_blank"
              rel="noreferrer"
            >
              <i
                className="bi bi-whatsapp"
                style={{ fontSize: 22, color: "#0f020a" }}
              ></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://github.com/juanescastro29"
              className="nav-link px-2 text-white"
              target="_blank"
              rel="noreferrer"
            >
              <i
                className="bi bi-facebook"
                style={{ fontSize: 22, color: "#0f020a" }}
              ></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.linkedin.com/in/juan-esteban-castro-molano-248912150/"
              className="nav-link px-2 text-white"
              target="_blank"
              rel="noreferrer"
            >
              <i
                className="bi bi-instagram"
                style={{ fontSize: 22, color: "#0f020a" }}
              ></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
