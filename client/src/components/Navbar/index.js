import React from "react";
import Foundation from 'foundation-sites';
import { Link } from "react-router-dom";
import { TopBar, TopBarRight, TopBarLeft, Sizes } from 'react-foundation';
import { Menu, MenuItem, MenuText, Button, MenuDropdown, MenuDropdownContent, MenuDropdownTitle } from 'react-foundation';
import 'foundation-sites/dist/css/foundation.min.css';
import "./style.css"


function Navbar(props) {

  return (
    <TopBar className='myTopBar'>
      <TopBarLeft className='my-top-bar-right'>
        <Menu className='menuLeft'>
          <MenuText>Reservation Maker</MenuText>
          <Link to="/home">
            Home
          </Link>
          <Link to="/business">
            Business
          </Link>
          <Link to="/search">
            Search
          </Link>
          {/* <label className="search">
            <textarea placeholder="Search for Business..."></textarea>
          </label> */}
        </Menu>

      </TopBarLeft>

      <TopBarRight>
        <Menu className='menuRight'>
          <Link to="/signup">
            Signup/Login
          </Link>
          <Link to="/create-business">
            Create Business
          </Link>
          <Link to="/profile">
            Profile
          </Link>
          <MenuItem isActive><a>{props.accountName}</a></MenuItem>
        </Menu>
      </TopBarRight>
    </TopBar>

  )
}
export default Navbar;