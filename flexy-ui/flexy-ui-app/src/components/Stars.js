import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "reactstrap";

class Stars extends React.Component {

    constructor(props) {
        super(props);
        let randomData = [];
        console.log("In Stars: " 
            + this.isActiveHome + " " 
            + this.isActiveMovies + " " 
            + this.isActiveSeries + " "
            + this.isActiveStars);
        
        this.state = {
            randomData: []
        };
    }

    componentDidMount() {
        let endpoint = "/api/v1/stars/random";
        fetch(endpoint)
        .then((response) => response.json())
        .then((json) => {
            this.setState({
                randomData: json.data
            })
        });
    }

    render() {
        let {randomData} = this.state;
        return (
            <div>
                <Header isActiveStars="true"/>
                <br/>
                <div>
                    {console.log("Data Length: " + randomData.length)}
                    {
                        randomData.map((item) => {
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
                                    <br/>
                                    {
                                        item.movies.map((movie) => {
                                            console.log("Movie Location: " + movie.location);
                                            return(
                                                <div> 
                                                    <a href={"file:" + movie.location}>
                                                        {movie.name}
                                                    </a>
                                                    <br/>
                                                </div>
                                                
                                            )
                                        })
                                    }
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