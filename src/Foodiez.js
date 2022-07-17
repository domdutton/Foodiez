import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Route, NavLink, HashRouter } from "react-router-dom";
import Contact from './contact';
import About from './about';
class Foodiez extends Component {
  render() {
    return (
      <HashRouter>
        <Container>
          <Navbar  fixed="top" bg="success" variant="dark">
          <Container>
            <Navbar.Brand><strong>Foodiez</strong></Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/">Recipe Catalogue</Nav.Link>
                <Nav.Link as={NavLink} to="/about">About Us</Nav.Link>
                <Nav.Link  as={NavLink} to="/contact">Contact Us</Nav.Link>
              </Nav>
          </Container>
        </Navbar>
      </Container>
    </HashRouter>
    );
  }
}
 
export default Foodiez;