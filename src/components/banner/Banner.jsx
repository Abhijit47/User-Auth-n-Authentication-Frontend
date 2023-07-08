import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className='section no-pad-bot' id='index-banner'>
      <div className='container bg-danger'>
        <br />
        <br />
        <h1 className='header center indigo-text'>Starter Template</h1>
        <div className='row center'>
          <h5 className='header col s12 light'>
            A modern responsive front-end framework based on Material Design
          </h5>
        </div>
        <div className='row center'>
          <Link
            to='/signup'
            id='download-button'
            className='btn-large waves-effect waves-light blue'>
            Get Started
          </Link>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Banner;
