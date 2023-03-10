import React, { Component } from "react";
import "./NavbarStyle.css";
import Logo from "./logoImage.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="mainNav">
        <nav className="navbar navbar-expand-xl navbar-dark bg-primary">
          <div className="container">
            <span>
              <img
                src={Logo}
                className="img-fluid"
                style={{ marginBottom: "9px", height: "40px", width: "95px" }}
              ></img>
            </span>
            <NavLink exact to="/" id="navbarFont" className="navbar-brand">
              WeatherToday
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul className="navbar-nav ml-auto">
                <div className="navbar-nav">
                  <NavLink
                    exact
                    id="navbarSubFont"
                    className="nav-item nav-link"
                    to="/"
                  >
                    Home <span className="sr-only">(current)</span>
                  </NavLink>
                  <NavLink
                    exact
                    id="navbarSubFont"
                    className="nav-item nav-link"
                    to="/Login"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    exact
                    id="navbarSubFont"
                    className="nav-item nav-link"
                    to="/Contact"
                  >
                    Contact Us
                  </NavLink>
                  <a
                    exact
                    id="navbarSubFont-icon"
                    className="nav-item nav-link"
                    href="mailto:sahil.gunjal@gmail.com?subject=subject&cc=cc@example.com"
                  >
                    <i
                      className="fab fa-google fa-spin fa-circle fa-lg"
                      aria-hidden="true"
                    ></i>
                  </a>
                  <a
                    exact
                    id="navbarSubFont-icon"
                    className="nav-item nav-link"
                    href="https://www.linkedin.com/in/sahil-gunjal-1590b51a1"
                  >
                    <i
                      className="fab fa-linkedin-in fa-circle fa-lg"
                      aria-hidden="true"
                    ></i>
                  </a>
                  <a
                    exact
                    id="navbarSubFont-icon"
                    className="nav-item nav-link"
                    href="https://www.facebook.com/sahil.gunjal/"
                  >
                    <i
                      className="fab fa-facebook-f fa-circle fa-lg"
                      aria-hidden="true"
                    ></i>
                  </a>
                  <a
                    exact
                    id="navbarSubFont-icon"
                    className="nav-item nav-link"
                    href="https://www.instagram.com/sahil_gunjal93"
                  >
                    <i
                      class="fab fa-instagram fa-spin fa-lg"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
