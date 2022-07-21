import React, { Component } from 'react'

import { Button, Card, Container, Form, Image, InputGroup } from 'react-bootstrap'

class Home extends Component {
  render() {
    return (
      <>
        <Container fluid className='px-0' style={{ height: '300px' }}>
          <Image
            alt='About us'
            src='banner.jpg'
            style={{ height: '100%', objectFit: 'cover', objectPosition: 'center', width: '100%' }}
          />
        </Container>

        <Container className='page-content'>
          <p className='fw-bold text-brand'>Your new recipe partner</p>
          <h1>Recipes with Foodiez!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum
          </p>

          <Card className='border-0 mb-4 shadow' style={{ width: '100%' }}>
            <Card.Body>
              <h2>Search for a Recipe</h2>
              <Form method='get' action='/Catalogue'>
                <InputGroup>
                  <Form.Control
                    name='search'
                    placeholder='Search'
                    aria-label='Search'
                    aria-describedby='basic-addon2'
                  />
                  <Button variant='success' id='button-addon2' type='submit'>
                    Search Recipes
                  </Button>
                </InputGroup>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </>
    )
  }
}

export default Home