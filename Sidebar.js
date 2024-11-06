// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Styling for the sidebar
import logo from '../images/2019740.webp'; // Path to the logo

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <nav>
        <ul className="sidebar-items">
          <li><Link to="/usecase">Usecase</Link></li>
          <li><Link to="/dataset">Dataset</Link></li>
          <li><Link to="/experiments">Experiments</Link></li>
          <li><Link to="/serving">Serving</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
