import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./../../components/Header";
import LoginComp from "./../../components/Login";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            checked: true
        }
    }
    componentDidMount() {
        if (this.props.username) {
            this.props.router.push("/user");
        } else {
            this.setState({
                checked: false
            });
        }
    }
    render() {
        return (
            <div>
                <Header title="登录" />
                {this.state.checked ? "" : <LoginComp loginHandle={this.loginHandle.bind(this)} />}
            </div>
        )
    }
    loginHandle(username) {
        let login = this.props.login;
        login(username);
        this.props.router.push("/user");
    }
}

function mapStateToProps(state) {
    return {
        username: state.username
    }
}

function mapDispatchToProps(dispatch) {
    return {
        login: function (username) {
            dispatch({
                type: "LOGIN",
                payload: username
            })
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);