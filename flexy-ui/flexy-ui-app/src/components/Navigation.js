import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import {activeDefaultValue, activeBooleanValue} from '../utils/Utility';
import {Link} from 'react-router-dom';

class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.isActiveHome = activeDefaultValue(props.isActiveHome);
        this.isActiveMovies = activeDefaultValue(props.isActiveMovies);
        this.isActiveSeries = activeDefaultValue(props.isActiveSeries);
        this.isActiveStars = activeDefaultValue(props.isActiveStars);

        console.log("In Navigation: " 
            + this.isActiveHome + " " 
            + this.isActiveMovies + " " 
            + this.isActiveSeries + " "
            + this.isActiveStars);
    }

    render() {
        return(
            <div className="navigation">
                <Nav tabs fill>
                    <NavItem>
                        <NavLink>
                            <Link style={{
                            fontFamily: activeBooleanValue(this.isActiveHome) ? "bold" : "",
                            color: activeBooleanValue(this.isActiveHome) ? "red" : ""
                        }} to="/home">Home</Link>    
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink >
                            <Link style={{
                            fontFamily: activeBooleanValue(this.isActiveStars) ? "bold" : "",
                            color: activeBooleanValue(this.isActiveStars) ? "red" : ""
                        }} to="/stars">Stars</Link>
                        </NavLink>
                    </NavItem>   
                                 
                </Nav>
            </div>
        );
    }
}

export default Navigation;