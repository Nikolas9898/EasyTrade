import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HistoryPage from "./pages/history/HistoryPage";
import NewsPage from "./pages/news/News";
import LibraryPage from "./pages/library/LibraryPage";
import DiocesePage from "./pages/diocese/DiocesePage";
import BlogPage from "./pages/blog/BlogPage";
import DocumentsPage from "./pages/documents/DocumentsPage";
import HomePage from "./pages/home/HomePage";
import BishopPage from "./pages/bishop/BishopPage";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/news" component={NewsPage} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/documents" component={DocumentsPage} />
          <Route path="/history" component={HistoryPage} />
          <Route path="/library" component={LibraryPage} />
          <Route path="/diocese" component={DiocesePage} />
          <Route path="/bishop" component={BishopPage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
