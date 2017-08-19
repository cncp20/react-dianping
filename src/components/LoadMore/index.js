import React, {Component} from "react";
import "./style.less";

export default class LoadMore extends Component {
    render() {
        return (
            <div className="load-more" ref="wrapper">  
                {this.props.hasMore ?
                <span>加载中。。。</span>
                :<span>加载更多</span>
                }
            </div>
        )
    }
    componentDidMount() {
        const wrapper = this.refs.wrapper;
        const loadMoreFn = this.props.loadMoreFn;
        let timeoutId;
        window.addEventListener("scroll", function() {
            if (this.props.isLoadingMore) {
                return;
            }
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(() => {
                if (wrapper.getBoundingClientRect().top < window.screen.height) {
                    // 证明 wrapper 已经被滚动到暴露在页面可视范围之内了
                    loadMoreFn();
                }
            }, 50);
        }.bind(this), false);
    }
}