import React from 'react'
import "./Navbar.css"
import SideDrawerToggler from "../SideDrawer/SideDrawerToggler"

const Navbar = props => (
  <header className="navbar">
    <nav className="navbar-grid">
      <div className="burger">
        <SideDrawerToggler click={props.drawerClickHandler}/>
      </div>
      <h1 className="logo">JUSTIN LAMPE</h1>
      <div className="listItemContainer">
        <ul>
          <li><a href="#aboutme">About Me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Navbar;