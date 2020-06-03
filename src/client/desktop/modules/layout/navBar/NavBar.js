import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBarStyl.css";
import jwt_decode from "jwt-decode";

let user;

if (localStorage.getItem("jwt") === null) {
  user = null;
} else {
  user = jwt_decode(localStorage.getItem("jwt"));
}

function Exit() {
  localStorage.removeItem("jwt");
  window.location.reload();
}

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
          {user ? (
            <div className="profile">
              {" "}
              Здравей {user.username}
              <button
                className="btn btn-secondary mb-2 mr-2"
                onClick={() => Exit()}
              >
                Изход
              </button>
            </div>
          ) : (
            <div>
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
            </div>
          )}
        </Nav>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {};

export default NavBar;
