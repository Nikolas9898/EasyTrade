import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = props => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="btn-toolbar">
        <Navbar.Brand href="">Church.bg</Navbar.Brand>
        <Nav className="mr-auto">
          <Link className="btn btn-secondary mb-2 mr-2" role="button" to="/">
            Начало
          </Link>
          <Link
            className="btn btn-secondary mb-2 mr-2"
            role="button"
            to="history"
          >
            История
          </Link>
          <Link className="btn btn-secondary mb-2 mr-2" role="button" to="news">
            Новини
          </Link>
          <Link
            className="btn btn-secondary mb-2 mr-2"
            role="button"
            to="library"
          >
            Библиотека
          </Link>
        </Nav>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {};

export default NavBar;
