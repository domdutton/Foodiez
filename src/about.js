import React, { Component } from "react";
import Figure from 'react-bootstrap/Figure';
import Container from 'react-bootstrap/Container'
class About extends Component {
  render() {
    return (
        <Container className="page-content">
          <Figure>
            <Figure.Image
            width={1980}
            height={1080}
            alt="About us"
            src="banner.jpg"
            />
            <Figure.Caption>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </Figure.Caption>
          </Figure>
        </Container>
    );
  }
}
 
export default About;