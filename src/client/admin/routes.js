import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UsersPage from "./pages/users/UsersPage";
import HomePage from "./pages/home/HomePage";
import ProductsPage from "./pages/products/producstPage/ProductsPage";
import ProductEditPage from "./pages/products/productEdit/ProductEditPage";
import ProductCreatePage from "./pages/products/productCreate/ProductCreatePage";
import CategoryPage from "./pages/category/CategoryPage";
import { AuthenticatedRoute } from "../helpers/guards/AuthenticatedRoute";

class AdminRoutes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <AuthenticatedRoute exact path="/admincp" component={HomePage} />
          <AuthenticatedRoute
            exact
            path="/admincp/users"
            component={UsersPage}
          />
          <AuthenticatedRoute
            exact
            path="/admincp/products"
            component={ProductsPage}
          />
          <AuthenticatedRoute
            exact
            path="/admincp/product/edit"
            component={ProductEditPage}
          />
          <AuthenticatedRoute
            exact
            path="/admincp/product/create"
            component={ProductCreatePage}
          />
          <AuthenticatedRoute
            exact
            path="/admincp/category"
            component={CategoryPage}
          />
        </Switch>
      </Router>
    );
  }
}

export default AdminRoutes;
