import React from 'react';
import './Header.css';
import logo from'./logo.png';

const Header = () => {
  return (
    <header>
      <div className="container">
      <nav className="navbar navbar-expand-lg  navbar-light">
        <img src={logo} alt="Logo"/>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <div className="navbar-nav ml-auto">
            <a className="nav-item nav-link mr-md-4 mr-0" href="/books">Books</a>
            <a className="nav-item nav-link mr-md-4 mr-0" href="/courses">Courses</a>
            <a className="nav-item nav-link mr-md-4 mr-0" href="/others">Others</a>
            <a className="nav-item nav-link mr-md-4 mr-0" href="/blog">Blog</a>
            <a className="btn rounded-pill px-4" href="/signin">Sign in</a>
          </div>
        </div>
      </nav>
    </div>
    </header>
  );
};

export default Header;