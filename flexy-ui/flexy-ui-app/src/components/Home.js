import React from "react";
import Header from './Header';
import Footer from './Footer';
import {getRandomModels, getRandomVideos} from '../utils/Utility';
import './Home.css'

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    getRandomVideos() {
        let randomVideos = getRandomVideos()
        return(
            randomVideos.map((video) => 
                <div className="random-video">
                    <video width="15%" height="15%" controls>
                    <source src={video.path} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
                
            )
        )
    }

    getRandomModelsButtons() {
        let randomModels = getRandomModels()
        console.log("Random Models at home: " + randomModels)
        return(
            randomModels.map((model) => 
                <button className='random-model-button'> {model} </button>
            )
        )
    }

    render() {
        return(
            <div>
                <Header isActiveHome="true"/>
                <br/> <br/>

                <div>
                    <h2>Random Videos</h2>
                    <br/>
                    <div>
                        {this.getRandomVideos()}
                    </div>
                </div>
                <br/> <br/>
                    
                <div>
                    <h2>Random Models</h2>
                    
                    <div>
                        {this.getRandomModelsButtons()}
                    </div>
                </div>
                <br/> <br/>
                    
                <Footer/>
            </div>
        );
    }
}

export default Home;