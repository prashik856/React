import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "reactstrap";

class Stars extends React.Component {

    constructor(props) {
        super(props);
        let data = [];
        console.log("In Stars: " 
            + this.isActiveHome + " " 
            + this.isActiveMovies + " " 
            + this.isActiveSeries + " "
            + this.isActiveStars);
        
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        let endpoint = "/api/v1/stars/random";
        fetch(endpoint)
        .then((response) => response.json())
        .then((json) => {
            this.setState({
                data: json.data
            })
        });
    }

    render() {
        let {data} = this.state;
        return (
            <div>
                <Header isActiveStars="true"/>
                <br/>
                <div>
                    {console.log("Data Length: " + data.length)}
                    {
                        data.map((item) => {
                            {console.log("Item name: " + item.name)}
                            return(
                                <div> 
                                    <Button
                                        active
                                        block
                                        color="dark"
                                        size="lg"
                                    >
                                        {item.name}
                                    </Button>
                                    <br/><br/>
                                </div>
                            );
                        })
                    }
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Stars;