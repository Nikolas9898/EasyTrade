import React from "react";
import PropTypes from "prop-types";
import "./SideBar.css";
import { Link } from "react-router-dom";
const SideBar = props => {
  return (
    <div className="sideBar">
      <label className="title">Меню</label>
      <ul>
        <li className="sideBar_titles">
          <Link
            to={"/admincp/products"}
            className={
              window.location.pathname === "/admincp/products"
                ? "sideBar_titles_hover"
                : "sideBar_titles"
            }
          >
            Продукти
            {window.location.pathname === "/admincp/products" ? (
              <div>
                <Link className="sideBar_sub_titles">Категории</Link>
              </div>
            ) : (
              ""
            )}
          </Link>
        </li>
        <li className="sideBar_titles">
          <Link
            to={"/admincp/users"}
            className={
              window.location.pathname === "/admincp/users"
                ? "sideBar_titles_hover"
                : "sideBar_titles"
            }
          >
            Служители
          </Link>
        </li>
      </ul>
    </div>
  );
};

SideBar.propTypes = {};

export default SideBar;
