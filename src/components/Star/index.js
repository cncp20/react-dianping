import React, {Component} from "react";
import "./style.less";

export default class Star extends Component {
    render() {
        return (
            <div className="star-container">
                {[1, 2, 3, 4, 5].map((item, index) => {
                    const lightClass = this.props.star >= item ? ' light' : ''
                    return <i key={index} className={'icon-star' + lightClass}></i>
                })}
            </div>
        )
    }
}