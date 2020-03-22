import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../../../../../gerb.png";
import { Link } from "react-router-dom";



const NavBar = props => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="">
          <Link to="/">
            <img src={logo} className="Nav-Img" />
          </Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Link
            className="btn btn-secondary mb-2 mr-2"
            role="button"
            to="/news"
          >
            Новини
          </Link>
          <Link
            className="btn btn-secondary mb-2 mr-2"
            role="button"
            to="/documents"
          >
            Документи
          </Link>
          <Link
            className="btn btn-secondary mb-2 mr-2"
            role="button"
            to="/library"
          >
            Библиотека
          </Link>
          <Link
            className="btn btn-secondary mb-2 mr-2"
            role="button"
            to="/diocese"
          >
            Епархия
          </Link>
          <Link
            className="btn btn-secondary mb-2 mr-2"
            role="button"
            to="/history"
          >
            История
          </Link>
          <Link
            className="btn btn-secondary mb-2 mr-2"
            role="button"
            to="/bishop"
        >
          Митрополит
        </Link>
          <Link
              className="btn btn-secondary mb-2 mr-2"
              role="button"
              to="/registration"
          >
            Регистрация
          </Link>

        </Nav>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {};

export default NavBar;
