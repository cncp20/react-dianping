import React, {Component} from "react";
import OrderListComp from "./../../components/OrderList";
import {getOrderList} from "./../../api";
import "./style.less";

export default class OrderList extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        getOrderList(this.props.username, (res) => {
            this.setState({
                data: res
            })
        })
    }
    render() {
        return (
            <div className="order-list-container">
                <h2>您的订单</h2>
                {
                    this.state.data.length
                    ? <OrderListComp data={this.state.data} submitComment={this.submitComment.bind(this)}/>
                    : <div>{/* loading */}</div>
                }
            </div>
        )
    }
    submitComment() {
        console.log("post");
    }
}