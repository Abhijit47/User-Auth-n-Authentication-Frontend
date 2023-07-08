// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Navbar = ({ login, setLogin }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setLogin(localStorage.removeItem('jwt'));
    toast.success('Logout Successfully');
    navigate('/');
  };

  return (
    <nav className='light-blue lighten-1 ' role='navigation'>
      <div className='nav-wrapper container accent-4'>
        <Link id='logo-container' to='/' className='brand-logo'>
          Authentication
        </Link>
        <ul className='right hide-on-med-and-down'>
          {!login || login === undefined ? (
            <li>
              <Link to='/login' className='waves-effect waves-light btn'>
                Sign in
              </Link>
            </li>
          ) : (
            <li>
              <Link
                to='/'
                className='waves-effect waves-purple btn'
                onClick={() => handleLogout()}>
                Sign out
              </Link>
            </li>
          )}
        </ul>

        <ul id='nav-mobile' className='sidenav'>
          <li>
            <Link to='#'>Navbar Link</Link>
          </li>
        </ul>
        <Link to='#' data-target='nav-mobile' className='sidenav-trigger'>
          <i className='material-icons'>menu</i>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
