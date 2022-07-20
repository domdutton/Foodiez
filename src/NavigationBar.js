import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function NavigationBar() {
return (
    <Navbar  fixed="top" bg="success" variant="dark">
        <Container>
        <Navbar.Brand as={Link} to="/"><strong>Foodiez</strong></Navbar.Brand>
        <Navbar.Collapse>
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/catalogue">Recipe Catalogue</Nav.Link>
                <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                <Nav.Link  as={Link} to="/contact">Contact Us</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
);
}
export default NavigationBar;