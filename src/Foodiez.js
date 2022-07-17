import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
class Foodiez extends Component {
  render() {
    return (
      <Navbar bg="success" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><strong>Foodiez</strong></Navbar.Brand>
      </Container>
    </Navbar>
    );
  }
}
 
export default Foodiez;