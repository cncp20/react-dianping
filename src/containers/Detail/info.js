import React, {Component} from "react";
import DInfo from "./../../components/Info";
import {getInfoData} from "./../../api";

export default class Info extends Component {
    constructor() {
        super();
        this.state = {
            info: false
        }
    }
    componentDidMount() {
        getInfoData(this.props.id, (data) => {
            this.setState({
                info: data
            });
        })
    }
    render() {
        return (
            <div>
                {this.state.info ? <DInfo data={this.state.info} /> : ""}
            </div>
        )
    }
}