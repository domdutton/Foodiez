import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { HashRouter } from "react-router-dom";
class Foodiez extends Component {
  render() {
    return (
      <HashRouter>
        <Container>
          <Navbar  fixed="top" bg="success" variant="dark">
          <Container>
            <Navbar.Brand><strong>Foodiez</strong></Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Recipe Catalogue</Nav.Link>
                <Nav.Link href="#features">About Us</Nav.Link>
                <Nav.Link href="#pricing">Contact Us</Nav.Link>
              </Nav>
          </Container>
        </Navbar>

      </Container>
    </HashRouter>
    );
  }
}
 
export default Foodiez;