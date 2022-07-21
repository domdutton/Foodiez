import React from 'react'
import { Link } from 'react-router-dom'

import { Navbar, Nav, Container } from 'react-bootstrap'

function NavigationBar() {
  return (
    <Navbar
      sticky='top'
      variant='light'
      className='shadow'
      style={{ borderBottom: '1px solid rgba(29, 209, 161, .5)' }}
    >
      <Container>
        <Navbar.Brand as={Link} to='/'>
          <strong>Foodiez</strong>
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to='/about'>
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to='/contact'>
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default NavigationBar