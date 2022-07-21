import React, { Component } from "react";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
class Home extends Component {
  render() {
    return (
      <Container className="page-content">
        <div className="jumbotron">
          <h1>Regular, Jumbotron!</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </p>
      
          <Form method="get" action="/Catalogue">
            <InputGroup className="mb-3">
              <Form.Control
                name="search"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <Button variant="success" id="button-addon2" type="submit">
                Search Recipes
              </Button>
            </InputGroup>
          </Form>
        </div>
      </Container>
    );
  }
}
 
export default Home;