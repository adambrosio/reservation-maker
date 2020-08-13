import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

function Jumbotron(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:1500
    }
return(
    <div className = "slideShow">
<Slider {...settings}>
    <div>
        <img src={process.env.PUBLIC_URL+ '/assests/storefront1.jpg'}></img>
    </div>
    <div>
        <img src={process.env.PUBLIC_URL+ '/assests/storefront2.jpg'}></img>
    </div>
    <div>
        <img src={process.env.PUBLIC_URL+ '/assests/storefront3.jpg'}></img>
    </div>

</Slider>
</div>
)
}

export default Jumbotron;
