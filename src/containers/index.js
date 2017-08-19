import React, {Component} from "react";
import {connect} from "react-redux";

class App extends Component{
    componentDidMount() {
        let cityName = sessionStorage.getItem("cityName");
        if (cityName == null) {
            cityName = "上海";
        }
        this.props.changeCity(cityName);
    }
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return{}
}

function mapDispatchToProps(dispatch) {
    return {
        changeCity: (city) => {
            dispatch({
                type: "CHANGE_CITY",
                payload: city
            })
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);