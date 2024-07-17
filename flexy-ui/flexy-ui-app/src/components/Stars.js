import React from "react";
import Header from "./Header";
import Footer from "./Footer";

class Stars extends React.Component {

    constructor(props) {
        super(props);

        console.log("In Stars: " 
            + this.isActiveHome + " " 
            + this.isActiveMovies + " " 
            + this.isActiveSeries + " "
            + this.isActiveStars);
          
        let endpoint = "/api/v1/stars/random";
        let responseText = fetch(endpoint)
                            .then(
                                function (response) {
                                console.log( "Response from Server: " + response.text());
                                let responseText = response.text();
                                return responseText;
                            });
        console.log("Response Text: " + responseText);
    }

    render() {
        return (
            <div>
                <Header isActiveStars="true"/>
                <h1>
                    Random stars here.
                </h1>
                <Footer/>
            </div>
        );
    }
}

export default Stars;