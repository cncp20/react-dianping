import React, {Component} from "react";
import HomeAD from "./../../components/HomeAD";
import {getHomeAD} from "./../../api";

export default class AD extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        getHomeAD((res) => {
            this.setState({
                data: res
            });
        });
    }

    render() {
        return (
            <div>
                <HomeAD data={this.state.data} />
            </div>
        )
    }
}