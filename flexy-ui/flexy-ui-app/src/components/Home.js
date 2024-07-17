import React from "react";
import Header from './Header';
import Footer from './Footer';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Header isActiveHome="true"/>
                    <h1>
                        Home with random movies, series and stars
                    </h1>
                <Footer/>
            </div>
        );
    }
}

export default Home;