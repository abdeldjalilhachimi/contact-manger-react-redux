import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark  mb-3">
      <div className="container">
        <a href="/" className="navbar-brand">
          Contact Management
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                Add Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "My App",
};

Header.propTypes = {
  branding: PropTypes.string.isRequired,
};

export default Header;
