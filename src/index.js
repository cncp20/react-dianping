import React from "react";
import ReactDOM from "react-dom";
import Router from "./router";
import {hashHistory} from "react-router";
import {Provider} from "react-redux";
import Store from "./store";

import './static/css/common.less'
import './static/css/font.css'

ReactDOM.render(
    <Provider store={Store}>
        <Router history={hashHistory} />
    </Provider>,
    document.querySelector("#app")
)
