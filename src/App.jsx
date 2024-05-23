import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Ribbon from './Components/Band/ribbon';
import { Nav } from './Components/Navbar_Top/nav';
import { Menu } from './Components/Side_Menu/s_menu';
import UserPage from './Components/Side_Menu/UserPage/UserPage'; // Assuming UserPage.jsx is located in the same directory
import './App.css';
import Hero from './Components/Hero/hero';
import SpotlightNewsDetail from './Components/News/SpotlightNewsDetail'; // Import detail component
import OldNewsDetail from './Components/News/OldNewsDetail'; // Import detail component

function App() {
  return (
    <>
      <div className="app_container">
        <Nav />
        <div className="content">
          <Router>
            <Routes>
              <Route path="/" element={<Menu />} />
              <Route path="/user/:name" element={<UserPage />} /> {/* Route for user profile */}
            </Routes>
          </Router>
          <Hero/>
          <Ribbon/>
        </div>
      </div>
    </>
  );
}

export default App;

