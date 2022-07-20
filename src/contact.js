import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
class Contact extends Component {
  render() {
    return (
      <Container className="page-content">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" placeholder="Enter your subject" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Inquiry</Form.Label>
            <Form.Control type="text" placeholder="Enter your message" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email address" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit Inquiry
          </Button>
        </Form>
      </Container>
    );
  }
}
 
export default Contact;