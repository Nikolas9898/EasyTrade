import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = props => {
  return (
    <div>
      <Link to="/">Home</Link>

      <Link to="history">History</Link>

      <Link to="link-2">Link</Link>
    </div>
  );
};

NavBar.propTypes = {};

export default NavBar;
