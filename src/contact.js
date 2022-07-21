import React, { Component } from 'react'

import { Card, Container, Image } from 'react-bootstrap'

class Contact extends Component {
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
          <p className='fw-bold text-brand'>Get in touch with us easily</p>
          <h1>Contact Foodiez</h1>
          <Card className='border-0 mb-4 shadow' style={{ width: '100%' }}>
            <Card.Body>
              <Card.Text className='d-flex justify-content-between'>
                <span>
                  <strong>Office Address:</strong>&nbsp;44 Mountain View, CA
                </span>
                <span>
                  <strong>Email Address:</strong>&nbsp;info@myrecipe.com
                </span>
                <span>
                  <strong>Phone Number:</strong>&nbsp;+1 235 657 895
                </span>
                <span>
                  <strong>Website:</strong>&nbsp;http://www.myrecipe.com/
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
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

export default Contact