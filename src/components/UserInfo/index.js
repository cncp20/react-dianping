import React , {Component} from "react";
import "./style.less";

export default class UserInfo extends Component {
    render() {
        return (
            <div className="userinfo-container">
                <p>
                    <i className="icon-user"></i>
                    &nbsp;
                    <span>{this.props.username}</span>
                </p>
                <p>
                    <i className="icon-map-marker"></i>
                    &nbsp;
                    <span>{this.props.cityname}</span>
                </p>
            </div>
        )
    }
}