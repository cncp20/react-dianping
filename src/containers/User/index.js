import React, {Component} from "react";
import {connect} from "react-redux";
import Header from "./../../components/Header";
import UserInfo from "./../../components/UserInfo";
import { hashHistory } from 'react-router'
import OrderList from "./orderlist";

class User extends Component{
    componentDidMount() {
        if (!this.props.username) {
            hashHistory.push('/Login')
        }
    }
    render() {
        return (
            <div>
                <Header title="用户信息" />
                <UserInfo username={this.props.username} cityname={this.props.cityname} />
                <OrderList username={this.props.username} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        username: state.username,
        cityname: state.city
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User);