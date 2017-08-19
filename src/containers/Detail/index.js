import React from "react";
import Header from "./../../components/Header";
import Info from "./info";
import Buy from "./buy";
import Comment from "./comment";

class Detail extends React.Component {
    render() {
        const ID = this.props.params.id;
        return (
            <div>
                <Header title="商户详情" />
                <Info id={ID} />
                <Buy id={ID} />
                <Comment id={ID}/>
            </div>
        )
    }
}

export default Detail;