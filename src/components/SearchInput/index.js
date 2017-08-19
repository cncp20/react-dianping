import React, { Component } from "react";
import "./style.less";

export default class SearchInput extends Component {
    constructor() {
        super();
        this.state = {
            value:""
        }
    }
    changeHandle(e) {
        this.setState({
            value: e.target.value
        })
    }
    onKeyDownHandle(e) {
        if (e.keyCode != 13) {
            return;
        }
        this.props.enterHandle(e.target.value);
        this.setState({
            value: ""
        })
    }
    render() {
        return (
            <div>
                <input 
                    type="text" 
                    onChange={this.changeHandle.bind(this)} 
                    className="search-input" 
                    placeholder="请输入关键字" 
                    value={this.state.value}
                    onKeyDown={this.onKeyDownHandle.bind(this)}
                />
            </div>
        );
    }
}