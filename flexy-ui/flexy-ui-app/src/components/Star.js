import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useParams } from 'react-router-dom';
import {getModelFromId, getModelVideos} from '../utils/Utility';
import './Home.css'

function getModel(id) {
    let model = getModelFromId(id)
    return model
}

function getVideos(model) {
    let modelVideos = getModelVideos(model)
    return(
        modelVideos.map((video) => 
            <div className="random-video">
                <video width="15%" height="15%" controls title={video.name}>
                <source src={video.path} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                {/* <p className="video-title">{video.name}</p> */}
            </div> 
        )
    )
}

function Star() {
    let {id} = useParams();
    let model = getModel(id);
    console.log("Model id: " + id + ". Model value: " + model);
    return (
        <div>
            <Header isActiveStars="true"/>
            <br/>
            <div>
                <h2>Videos of star {model}</h2>
                <br/>
                {getVideos(model)}
            </div>
            <br/> <br/>
            <Footer/>
        </div>
    );
}

export default Star;