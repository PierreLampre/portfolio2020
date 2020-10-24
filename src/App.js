import React, { Component } from 'react';
import './App.css';
import AboutMe from "./components/AboutMe"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Skills from "./components/Skills"
import Navbar from "./components/Navbar/Navbar"
import Sidebar from "./components/SideDrawer/SideDrawer"
import Backdrop from "./components/Backdrop/Backdrop"

class App extends Component {

  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {

  let backdrop;

  if(this.state.sideDrawerOpen) {
    backdrop = <Backdrop click={this.backdropClickHandler}/>;
  }

    return (
      <div className="App" style={{ height: "100%" }}>
        <Navbar drawerClickHandler={this.drawerToggleClickHandler}/>
        <Sidebar show={this.state.sideDrawerOpen} />
        {backdrop}
        <div name="aboutme" id="aboutme"></div>
        <AboutMe />
        <div name="skills" id="skills"></div>
        <Skills />
        <div name="projects" id="projects"></div>
        <Projects />
        <div name="contact" id="contact"></div>
        <Contact  />
      </div>
    );
  }
}

export default App;
