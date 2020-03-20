import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import BlogContainer from "./modules/blog/BlogContainer";
import DocumentsContainer from "./modules/documents/DocumentsContainer";
import HistoryPage from "./pages/history/HistoryPage";
import NewsPage from "./pages/news/News";
import LibraryPage from "./pages/library/LibraryPage";
class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/home" component={HomePage} />
          <Route path="/news" component={NewsPage} />
          <Route path="/blog" component={BlogContainer} />
          <Route path="/documents" component={DocumentsContainer} />
          <Route path="/history" component={HistoryPage} />
          <Route path="/library" component={LibraryPage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
