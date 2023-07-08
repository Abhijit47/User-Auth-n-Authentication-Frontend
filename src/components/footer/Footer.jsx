import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='page-footer orange'>
      <div className='container'>
        <div className='row'>
          <div className='col l6 s12'>
            <h5 className='white-text'>Company Bio</h5>
            <p className='grey-text text-lighten-4'>
              We are a team of college students working on this project like
              it's our full time job. Any amount would help support and continue
              development on this project and is greatly appreciated.
            </p>
          </div>
          <div className='col l3 s12'>
            <h5 className='white-text'>Settings</h5>
            <ul>
              <li>
                <Link className='white-text' to='#!'>
                  Link 1
                </Link>
              </li>
              <li>
                <Link className='white-text' to='#!'>
                  Link 2
                </Link>
              </li>
              <li>
                <Link className='white-text' to='#!'>
                  Link 3
                </Link>
              </li>
              <li>
                <Link className='white-text' to='#!'>
                  Link 4
                </Link>
              </li>
            </ul>
          </div>
          <div className='col l3 s12'>
            <h5 className='white-text'>Connect</h5>
            <ul>
              <li>
                <Link className='white-text' to='#!'>
                  <i className='Small material-icons'>add</i>
                </Link>
              </li>
              <li>
                <Link className='white-text' to='#!'>
                  Link 2
                </Link>
              </li>
              <li>
                <Link className='white-text' to='#!'>
                  Link 3
                </Link>
              </li>
              <li>
                <Link className='white-text' to='#!'>
                  Link 4
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='footer-copyright'>
        <div className='container'>
          Made by
          <Link className='orange-text text-lighten-3' to='/'>
            ABC Company pvt. ltd.
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
