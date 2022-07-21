import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Figure from 'react-bootstrap/Figure';
var applicationId = '7844cb72';
var applicationKey = 'd6487333a646543fabad04afba07a8bc';
class Detail extends Component {
  constructor(props) {
      super(props);
      this.state = {
          recipesLoaded: false,
          item: null
      };
  }
  componentDidMount() {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const id = params.get('id');
    fetch("https://api.edamam.com/api/recipes/v2/" + id + "?type=public&app_id=" + applicationId + "&app_key=" + applicationKey + "&q=chicken")
        .then((res) => res.json())
        .then((json) => {
            console.log(json.recipe);
            this.setState({
                item: json.recipe,
                recipesLoaded: true
            });
        });
  }
  render() {
      const { 
        recipesLoaded, 
        item
      } = this.state;
      if (!recipesLoaded) return <div>
          <h1>Just a moment...</h1></div> ;
 
      return (
      <Container className = "page-content">
          <h1>Our Top Chicken Recipe Selection</h1>  {
              (
                <Row>
                    <div className="col-md-6">
                        <Figure key={item.uri}>
                            <Figure.Image 
                                src={item.images.LARGE.url}
                            />
                            <Figure.Caption>
                            <h5 class="text-center"><strong>{ item.label}</strong></h5>
                            </Figure.Caption>
                        </Figure>
                    </div>
                    <div className="col-md-6">
                    {
                        item.ingredientLines.map((item, index) => (
                            <p>{item}</p>
                        ))
                    }
                    </div>
                </Row>
              )
          }
      </Container>
  );
  }
}
 
export default Detail;