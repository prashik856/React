import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./Home";
import Movies from './Movies';
import Series from './Series';
import Stars from './Stars';

class AppRouter extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="" element={<Home/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/movies" element={<Movies/>}/>
                    <Route path="/series" element={<Series/>}/>
                    <Route path="/stars" element={<Stars/>}/>
                </Routes>
            </BrowserRouter>
        );
    }
}

export default AppRouter;