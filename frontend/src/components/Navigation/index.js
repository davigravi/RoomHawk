import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import DemoUser from '../DemoUser';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <div className="div-banner">
          <NavLink className="banner" to="/">RoomHawk</NavLink>
        </div>
        <NavLink className="listings" to="/rooms">Listings</NavLink>
        <NavLink className="host" to="/host">Host</NavLink>
        <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <div className="div-banner">
          <NavLink className="banner" to="/">RoomHawk</NavLink>
        </div>
        <NavLink className="signup" to="/signup">Sign Up</NavLink>
        <DemoUser/>
        <LoginFormModal />
      </>
    );
  }

  return (
    <header>
      <ul>
        <li>
          <NavLink className="home" exact to="/">Home</NavLink>
          {isLoaded && sessionLinks}
        </li>
      </ul>
    </header>
  );
}

export default Navigation;
