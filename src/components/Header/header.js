import React from "react";
import "./header.css";

// create a header with a Bootstrap navbar and jumbotron
const Header = props => (
  
  <div className="main-container">
    <nav className="navbar sticky-top navbar-light bg-light justify-content-end">
      <h5 className="text-muted">Current Game Score: {props.currentScore} | Top Score: {props.topScore}</h5>
    </nav>
    
    <div className="jumbotron text-muted">
      <h1>Care Bear Memory Game</h1>
      <p className="lead">Click a Care Bear image to begin, but only click it once!</p>
    </div>
  </div>
);

export default Header;