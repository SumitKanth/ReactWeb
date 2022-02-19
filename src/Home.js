import React from 'react';
import Common from './Common';
import wev from "../src/img/home.jpg";

const Home = () => {
  return(
      <>
      <Common 
      name='Grow your business with'
      visit= './service'
      btn='Service'
      imgsrc={wev}
      />

      </>
  );
};

export default Home

// Grow your business with <strong className='brand-name'> Sumit</strong>

// <NavLink to="/service" className="btn-get-started">
// Get Started
// </NavLink>