import React, {Component} from "react";
import { connect } from "react-redux";
import Header from "./../../components/Header";
import CurrentCity from "./../../components/CurrentCity";
import CityList from "./../../components/CityList";

class City extends Component {
    changeFn(cityName) {
        this.props.changeCity(cityName);
        sessionStorage.setItem("cityName",cityName);
        this.props.router.goBack();
    }
    render() {
        return (
            <div>
                <Header title="城市选择" />
                <CurrentCity cityName={this.props.cityName} />
                <CityList changeFn = {this.changeFn.bind(this)} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cityName: state.city
    }
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
)(City);