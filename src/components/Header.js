import React from 'react';
import {Link} from 'react-router';

const Header = () => (
  <nav className="navbar navbar-default navbar-fixed-top">
    <div className="container">
      <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="index.html">Todo<span>App</span></a>
      </div>
      <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav navbar-right">
        <li><Link to='/todoapp'>Todo App</Link></li>
        <li><Link to='/aboutus'>About Us</Link></li>
        <li><Link to='/contactus'>Contact Us</Link></li>
      </ul>
      </div>
    </div>
  </nav>
);

export default Header;
