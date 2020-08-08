import React from "react";
import Foundation from 'foundation-sites';
import { TopBar, TopBarRight, TopBarLeft, Sizes } from 'react-foundation';
import { Menu, MenuItem, MenuText, Button, MenuDropdown, MenuDropdownContent,MenuDropdownTitle} from 'react-foundation';
import 'foundation-sites/dist/css/foundation.min.css';
import "./style.css"


function Navbar(props) {

    return (
<TopBar className='myTopBar'>
        <TopBarLeft className='my-top-bar-right'>
          <Menu className='menuLeft'>
          <MenuText>Reservation Maker</MenuText>
            <MenuItem isActive><a>Home</a></MenuItem>
            <label className = "search">
            <textarea placeholder = "Search for Business..."></textarea>
          </label>
          </Menu>
          
        </TopBarLeft>

        <TopBarRight>
                <Menu className='menuRight'>
        <MenuItem isActive><a>{props.accountName}</a></MenuItem>
        </Menu>
        </TopBarRight>



      </TopBar>
       
    )
}
export default Navbar;