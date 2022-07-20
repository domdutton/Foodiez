import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card';
class Contact extends Component {
  render() {
    return (
      <Container className="page-content">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        <Card style={{ width: '100%' }}>
          <Card.Body>
            <Card.Title>Get In Touch With Us</Card.Title>
            <Card.Text>
              <strong>Office Address:</strong>&nbsp;44 Mountain View, CA<br />
              <strong>Email Address:</strong>&nbsp;info@myrecipe.com<br />
              <strong>Phone Number:</strong>&nbsp;+1 235 657 895<br />
              <strong>Website:</strong>&nbsp;http://www.myrecipe.com/<br />
            </Card.Text>
          </Card.Body>
      </Card>
      </Container>
    );
  }
}
 
export default Contact;