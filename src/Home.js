import React, { Component } from "react";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom';
 
class Home extends Component {
  render() {
    return (
      <Container className="page-content">
        <div className="jumbotron">
          <h1>Regular, Jumbotron!</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </p>
      
          <p>
            <Button variant="success" as={Link} to="/catalogue">
              Browse Our Catalogue
            </Button>
          </p>
        </div>
      </Container>
    );
  }
}
 
export default Home;