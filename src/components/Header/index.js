import React from 'react'
import { hashHistory } from 'react-router'
import "./style.less";

export default class Header extends React.Component {
    backHandle() {
        const back = this.props.backRouter;
        if (back) {
            hashHistory.push(hashHistory);
        }else {
            window.history.back();
        }
    }
    render() {
        return (
            <div id="common-header">
                <span className="back-icon" onClick={this.backHandle.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}