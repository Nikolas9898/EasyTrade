import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../../../../../gerb.png";
import {Link} from "react-router-dom";

const NavBar = props => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="">
          <Link to='/'>
            <img src={logo} className="Nav-Img"/>
          </Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="history">История</Nav.Link>
          <Nav.Link href="news">Новини</Nav.Link>
          <Nav.Link href="library">Библиотека</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {};

export default NavBar;
