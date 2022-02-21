import React from 'react';
import Common from './Common';
import wev from "../src/img/home.jpg";


const About = () => {
    
    return(
        <Common 
      name='Welcome to your about page'
      visit= '/contact'
      btn='Contact Us'
      imgsrc={wev}
      />
        
    );
};

export default About 
