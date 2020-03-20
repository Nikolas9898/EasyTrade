import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";

const NavBar = props => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="">Church.bg</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="home">Начало</Nav.Link>
          <Nav.Link href="history">История</Nav.Link>
          <Nav.Link href="news">Новини</Nav.Link>
          <Nav.Link href="library">Библиотека</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Търсене</Button>
        </Form>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {};

export default NavBar;
