import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from './Contact';
import About from './About';
import Home from './Home';
import NavigationBar from "./NavigationBar";
class Foodiez extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <NavigationBar></NavigationBar>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
 
export default Foodiez;