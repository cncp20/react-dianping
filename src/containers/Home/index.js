import React, {Component} from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import {getHomeList} from "./../../api";
import HomeHeader from "./../../components/HomeHeader";
import AD from "./AD";
import List from "./../../components/List";
import LoadMore from "./../../components/LoadMore";


class Home extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            hasMore: true,
            isLoadingMore: false,
            page: 0
        }
    }
    componentDidMount() {
        getHomeList(this.props.cityName, 0, res => {
            this.setState({
                data: res.data,
                hasMore: res.hasMore
            })
        })
    }
    render() {
        const {cityName} = this.props;
        return (
            <div>
                <HomeHeader cityName={cityName} />
                <AD style={{height: 100}}/>
                <div style={{height: '15px'}}>{/* 分割线 */}</div>
                {this.state.data.length == 0 ? "加载中" : <List data={this.state.data} />}
                {/* <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreFn.bind(this)} hasMore={this.state.hasMore}/> */}
            </div>
        );
    }
    loadMoreFn() {
        this.setState({
            isLoadingMore: true
        });
        let page = this.state.page + 1;
        getHomeList(this.props.cityName, page, res => {
            this.setState({
                data: this.state.data.concat(res.data),
                hasMore: res.hasMore,
                isLoadingMore: false,
                page
            })
        })
    }
}

function mapStateToProps(state) {
    return {
        cityName: state.city
    }
}

function mapDiapatchToProps(dispatch) {
    return {

    }
}
export default connect(
    mapStateToProps,
    mapDiapatchToProps
)(Home);