import React, {Component} from 'react';
import {BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import HomePage from "./pages/home/HomePage";
import BlogContainer from "./modules/blog/BlogContainer";
import DocumentsContainer from "./modules/documents/DocumentsContainer";
import HistoryContainer from "./modules/history/HistoryContainer";
import LibraryContainer from "./modules/library/LibraryContainer";
class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route
                        path="/"
                        exact
                        component={HomePage}/>
                    <Route
                        path="/blog"
                        component={BlogContainer}/>
                    <Route
                        path="/documents"
                        component={DocumentsContainer}/>
                    <Route
                        path="/history"
                        component={HistoryContainer}/>
                    <Route
                        path="/library"
                        component={LibraryContainer}/>
                </Switch>
            </Router>
        );
    }
}

export default Routes;