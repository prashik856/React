import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {getStartsDirectory} from '../utils/Utility';
import ReactPlayer from 'react-player'

class Stars extends React.Component {

    constructor(props) {
        super(props);
        this.randomVideo = "/test.mp4";
        console.log("In Stars: " 
            + this.isActiveHome + " " 
            + this.isActiveMovies + " " 
            + this.isActiveSeries + " "
            + this.isActiveStars);
        
        this.state = {
            randomData: []
        };
    }

    render() {
        let {randomData} = this.state;
        return (
            <div>
                <Header isActiveStars="true"/>
                <br/>
                <div>
                {/* <ReactPlayer
                url= 'videos/test.mp4'
                width='360'
                height='360'
                controls = {true}
                /> */}

                <video width="320" height="240" controls>
                    <source src="videos/test.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video> 
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Stars;