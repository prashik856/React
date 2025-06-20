import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {Link} from 'react-router-dom';
import {getAllModels, getIdFromModel} from "../utils/Utility";
import Navigation from "./Navigation";

class Stars extends React.Component {

    constructor(props) {
        super(props);
        console.log("In Stars: " 
            + this.isActiveHome + " " 
            + this.isActiveMovies + " " 
            + this.isActiveSeries + " "
            + this.isActiveStars);
    }

    getAllModels() {
        let allModels = getAllModels()
        allModels.sort()
        console.log("All models at stars: " + allModels)
        return(
            allModels.map((model) => 
                <Link className='random-model-button' to={'/'+getIdFromModel(model)}> {model} </Link>
            )
        )
    }

    render() {
        return (
            <div>
                <Header isActiveStars="true"/>
                <Navigation isActiveHome={this.isActiveHome}
                            isActiveMovies={this.isActiveMovies}
                            isActiveSeries={this.isActiveSeries}
                            isActiveStars={this.isActiveStars}/>
                <br/>
                <div>
                    {this.getAllModels()}
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Stars;