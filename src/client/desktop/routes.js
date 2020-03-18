import React, {Component} from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import LayoutRoute from '../helpers/routes/LayoutRoute';
class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <LayoutRoute
                        exact
                        path="/"
                        layout={Layout.Default}
                        component={HomePage}/>
                    {/*<LayoutRoute*/}
                    {/*    exact*/}
                    {/*    path="/new-suggestions"*/}
                    {/*    layout={Layout.Default}*/}
                    {/*    component={NewestProductsPage}/>*/}

                </Switch>
            </div>
        );
    }
}

export default Routes;