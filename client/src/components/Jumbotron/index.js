import React from "react";
import Foundation from 'foundation-sites';

function Jumbotron(){
return(
<ul className="example-orbit" data-orbit>
  <li>
    <img src="../assests/storefront1.jpg" alt="slide 1" />
    <div className="orbit-caption">
      Store 1
    </div>
  </li>
  <li className="active">
    <img src="../assests/storefront2.jpg" alt="slide 2" />
    <div className="orbit-caption">
      Store 2
    </div>
  </li>
  <li>
    <img src="./assests/storefront3.jpg" alt="slide 3" />
    <div className="orbit-caption">
      Store 3
    </div>
  </li>
</ul>
)
}

export default Jumbotron;