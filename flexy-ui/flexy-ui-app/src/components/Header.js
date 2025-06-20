import React from "react";
import '../App.css';
import {activeDefaultValue} from '../utils/Utility';

class Header extends React.Component {

    constructor(props) {
        super(props);
        console.log("Header Before convertion: " + props.isActiveHome + " " 
            + props.isActiveMovies + " " 
            + props.isActiveSeries + " " 
            + props.isActiveStars);
        this.isActiveHome = activeDefaultValue(props.isActiveHome);
        this.isActiveMovies = activeDefaultValue(props.isActiveMovies);
        this.isActiveSeries = activeDefaultValue(props.isActiveSeries);
        this.isActiveStars = activeDefaultValue(props.isActiveStars);

        console.log("In Header: " 
            + this.isActiveHome + " " 
            + this.isActiveMovies + " " 
            + this.isActiveSeries + " "
            + this.isActiveStars);
    }

    render() {
        return(
            <div>
                <div className='application-name'>
                    <br/>
                    <h1>
                        Flexy
                    </h1>
                </div>
                <br/><br/>
            </div>
        );
    }
}

export default Header;