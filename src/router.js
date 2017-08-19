import React, {Component} from "react";
import {Router, Route, IndexRoute} from "react-router";

import App from "./containers";
import Home from "./containers/Home";
import City from "./containers/City";
import Detail from "./containers/Detail";
import Login from "./containers/Login";
import User from "./containers/User";

class RouterMap extends Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home} />
                    <Route path="/city" component={City} />
                    <Route path="/detail/:id" component={Detail} />
                    <Route path="/login" component={Login} />
                    <Route path="/user" component={User} />
                </Route>
            </Router>
        );
    }
}
export default RouterMap;