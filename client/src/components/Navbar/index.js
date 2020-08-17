import React from "react";
import Foundation from 'foundation-sites';
import { Link } from "react-router-dom";
import { TopBar, TopBarRight, TopBarLeft, Sizes } from 'react-foundation';
import { Menu, MenuItem, MenuText, Button, MenuDropdown, MenuDropdownContent, MenuDropdownTitle } from 'react-foundation';
import 'foundation-sites/dist/css/foundation.min.css';
import "./style.css"
// import ContextProvider from '../../utils/ContextProvider';


function Navbar(props) {
  //
  // console.log('UserContext');
  // console.log(ContextProvider);

  return (
    <TopBar className='myTopBar'>
      <TopBarLeft className='my-top-bar-right'>
        <Menu className='menuLeft'>
          <MenuText>Reservation Maker</MenuText>
          <Link to="/home">
            Home
          </Link>
          {/*<Link to="/business">
            Business
          </Link>*/}
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
        <MenuItem isActive><Link to='/login'>Login</Link></MenuItem>

        </Menu>
        {/*<ContextProvider.Consumer>
        {({id, username, name}) => (
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
              <MenuItem isActive><Link to={ (id) ? ('/user/' + id) : '/login' }>{name}</Link></MenuItem>

          </Menu>
        )}
        </ContextProvider.Consumer>*/}
      </TopBarRight>
    </TopBar>

  )
}
export default Navbar;
