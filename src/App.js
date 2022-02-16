import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// import "../node_modules/bootstrap/dist/react-bootstrap.min.js";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Navbar from './Navbar';
import { Routes, Route} from 'react-router-dom';

const App = () => {
  return(
    <>
     <Navbar />
     <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/About' element={<About />} />
      <Route exact path='/Contact' element={<Contact />} />
      <Route exact path='/Service' element={<Service />} />
      <Route path="*" element={<Home />} />
     </Routes>
    </>
  );
};

export default App;