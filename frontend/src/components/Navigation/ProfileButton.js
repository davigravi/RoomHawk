import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './ProfileButton.css'
import {useHistory} from 'react-router-dom';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/');

  };

  return (
    <>
      <button className='nav-icon-button' onClick={openMenu}>
        {/* <img src="" className="fas fa-bars"></img> */}
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <div className='profile-button-div'>
            <li>{user.username}</li>
            <li>{user.email}</li>
            <li className="log-out-li">
              <button className="log-out-button" onClick={logout}>Log Out</button>
            </li>
          </div>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
