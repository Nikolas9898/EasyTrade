import React from "react";
import { Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";

let token = jwt_decode(localStorage.getItem("jwt"));

export function AuthenticatedRoute(props) {
  const loggedUser = token;

  // route requires admin priv
  if (loggedUser.isAdmin) {
    return <props.component {...props} />;
  } else {
    window.location.href = "/";
  }
}
