import React, { Component } from "react";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
 
class Home extends Component {
  render() {
    return (
      <Container className="page-content">
        <div className="jumbotron">
          <h1>Regular, Jumbotron!</h1>
          <p>
            This is a simple Jumbotron example.
          </p>
      
          <p>
            <Button variant="success">
              Browse Our Catalogue
            </Button>
          </p>
        </div>
      </Container>
    );
  }
}
 
export default Home;