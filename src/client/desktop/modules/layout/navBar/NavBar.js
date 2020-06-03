import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../../../../../gerb.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRegistered } from "@fortawesome/free-solid-svg-icons";
import "./NavBarStyl.css";

const NavBar = props => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="" className="containerr">
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="navbarLogo">EasyTrade</div>
          </Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Link
            className="btn btn-secondary mb-2 mr-2"
            role="button"
            to="/registration"
          >
            Регистрация
          </Link>
          <Link
            className="btn btn-secondary mb-2 mr-2"
            role="button"
            to="/login"
          >
            Вход
          </Link>
        </Nav>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {};

export default NavBar;
