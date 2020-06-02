import React from "react";
import PropTypes from "prop-types";
import "./SideBar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

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
                <Link to={"/admincp/category"} className="sideBar_sub_titles">
                  Категории
                </Link>
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

        <li className="sideBar_titles">
          <a
            href="/"
            target="_blank"
            className={
              window.location.pathname === "/admincp/users"
                ? "sideBar_titles_hover"
                : "sideBar_titles"
            }
          >
            <FontAwesomeIcon icon={faHome} />
          </a>
        </li>
      </ul>
    </div>
  );
};

SideBar.propTypes = {};

export default SideBar;
