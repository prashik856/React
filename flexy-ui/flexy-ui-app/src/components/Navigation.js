import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import {activeDefaultValue, activeBooleanValue} from '../utils/Utility';

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
                        <NavLink 
                        style={{
                            fontFamily: activeBooleanValue(this.isActiveHome) ? "bold" : "",
                            color: activeBooleanValue(this.isActiveHome) ? "red" : ""
                        }} 
                        href="/home">
                            Home
                        </NavLink>
                    </NavItem>
                    
                    <NavItem>
                        <NavLink 
                        style={{
                            fontFamily: activeBooleanValue(this.isActiveMovies) ? "bold" : "",
                            color: activeBooleanValue(this.isActiveMovies) ? "red" : ""
                        }}
                        href="/movies">
                            Movies
                        </NavLink>
                    </NavItem>
  
                    <NavItem>
                        <NavLink 
                        style={{
                            fontFamily: activeBooleanValue(this.isActiveSeries) ? "bold" : "",
                            color: activeBooleanValue(this.isActiveSeries) ? "red" : ""
                        }}
                        href="/series">
                            Series
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink 
                        style={{
                            fontFamily: activeBooleanValue(this.isActiveStars) ? "bold" : "",
                            color: activeBooleanValue(this.isActiveStars) ? "red" : ""
                        }}
                        href="/stars">
                            Stars
                        </NavLink>
                    </NavItem>   
                                 
                </Nav>
            </div>
        );
    }
}

export default Navigation;