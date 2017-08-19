import React, {Component} from "react";
import {getCommentData} from "./../../api";
import Comment from "./../../components/CommentList";

export default class CommentList extends Component {
    constructor() {
        super();
        this.state = {
            comments: false
        }
    }
    componentDidMount() {
        getCommentData(this.props.id, (res) => {
            this.setState({
                comments: res.data
            });
        })
    }
    render() {
        return (
            <div>
                {this.state.comments ? <Comment data={this.state.comments} /> : ""}
            </div>
        );
    }
}