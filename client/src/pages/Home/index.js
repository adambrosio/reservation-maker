import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer"
import Jumbotron from "../../components/Jumbotron"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home(props){
    return(
        <div className="container">
            <Navbar accountName = {props.accountName}/>
            <Jumbotron/>
            <Footer/>
        </div>
    );
}

export default Home;
