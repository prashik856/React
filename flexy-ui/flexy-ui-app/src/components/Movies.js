import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import activeDefaultValue from "../utils/Utility";

class Movies extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header isActiveMovies="true"/>
                    <h1>
                        Random movies here
                    </h1>
                <Footer/>
            </div>
        );
    }
}

export default Movies;