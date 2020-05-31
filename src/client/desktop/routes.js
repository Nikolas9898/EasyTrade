import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HistoryPage from "./pages/history/HistoryPage";
import NewsPage from "./pages/news/News";
import LibraryPage from "./pages/library/LibraryPage";
import DiocesePage from "./pages/diocese/DiocesePage";
import BlogPage from "./pages/blog/BlogPage";
import DocumentsPage from "./pages/documents/DocumentsPage";
import HomePage from "./pages/home/HomePage";
import Register from "./modules/registration/Register";
import Login from "./modules/login/Login";
import BishopPage from "./pages/bishop/BishopPage";
import CategoryProductsContainer from "./modules/products/categoryProducts/CategoryProductsContainer";
import CategoryProductsPage from "./pages/category/CategoryProductsPage";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/news" component={NewsPage} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/documents" component={DocumentsPage} />
          <Route path="/category/:slug" component={CategoryProductsPage} />
          <Route path="/library" component={LibraryPage} />
          <Route path="product/:slug" component={DiocesePage} />
          <Route path="/bishop" component={BishopPage} />
          <Route path ="/registration" component={Register}/>
          <Route path ="/login" component={Login}/>
        </Switch>
      </Router>
    );
  }
}

export default Routes;
