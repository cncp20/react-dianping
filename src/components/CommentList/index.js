import React, {Component} from "react";
import Item from "./Item";
import "./style.less";

export default class Comment extends Component {
    render() {
        return (
            <div className="comment-list">
                {this.props.data.map((item, index) => {
                    return <Item data={item} key={index}/>
                })}
            </div>
        );
    }
}