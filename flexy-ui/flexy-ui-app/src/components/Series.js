import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import activeDefaultValue from "../utils/Utility";

class Series extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header isActiveSeries="true"/>
                <h1>
                    Random Series here.
                </h1>
                <Footer/>
            </div>
        );
    }
}

export default Series;