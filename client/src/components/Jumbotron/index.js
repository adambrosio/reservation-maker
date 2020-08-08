import React from "react";
import Slider from "react-slick";   
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Jumbotron(){
    var settings = {dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:1500
    }
return(
<Slider {...settings}>
    <div>
        <img src={process.env.PUBLIC_URL+ '/assests/storefront1.jpg'} height = "500px" width = "600px" ></img>
    </div>
    <div>
        <img src={process.env.PUBLIC_URL+ '/assests/storefront2.jpg'} height = "500px" width = "600px"></img>
    </div>
    <div>
        <img src={process.env.PUBLIC_URL+ '/assests/storefront3.jpg'} height = "500px" width = "600px"></img>
    </div>

</Slider>
)
}

export default Jumbotron;