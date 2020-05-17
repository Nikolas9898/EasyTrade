import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UsersPage from "./pages/users/UsersPage";
import HomePage from "./pages/home/HomePage";
import ProductsPage from "./pages/products/producstPage/ProductsPage";
import ProductEditPage from "./pages/products/productEdit/ProductEditPage";
import ProductCreatePage from "./pages/products/productCreate/ProductCreatePage";
import CategoryPage from "./pages/category/CategoryPage";

class AdminRoutes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/admincp" component={HomePage} />
                    <Route exact path="/admincp/users"  component={UsersPage} />
                    <Route exact path="/admincp/products"  component={ProductsPage} />
                    <Route exact path="/admincp/product/edit"  component={ProductEditPage} />
                    <Route exact path="/admincp/product/create"  component={ProductCreatePage} />
                    <Route exact path="/admincp/category"  component={CategoryPage} />
                </Switch>
            </Router>
        );
    }
}

export default AdminRoutes;
