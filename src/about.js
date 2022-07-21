import React, { Component } from 'react'

import { Container, Image } from 'react-bootstrap'

class About extends Component {
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
          <p className='fw-bold text-brand'>Welcome to our application</p>
          <h1>About Foodiez</h1>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
            sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
            amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
            labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
            consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
            nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?
          </p>
        </Container>
      </>
    )
  }
}

export default About