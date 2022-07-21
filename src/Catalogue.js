import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
var applicationId = 'fd48e7de';
var applicationKey = 'fbedb101903e8235ee9a899394ba3a19';
function get_id(url) {
  return url.split('#').pop();
}
class Catalogue extends Component {
  constructor(props) {
      super(props);
      this.state = {
          recipesLoaded: false,
          items: [],
      };
  }
  componentDidMount() {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const search_str = params.get('search');
      fetch("https://api.edamam.com/api/recipes/v2?type=public&app_id=" + applicationId + "&app_key=" + applicationKey + "&q=" + search_str)
          .then((res) => res.json())
          .then((json) => {
            console.log(json.hits);
              this.setState({
                  items: json.hits,
                  recipesLoaded: true
              });
          })
  }
  render() {
      const { 
        recipesLoaded, 
        items 
      } = this.state;
      if (!recipesLoaded) return <div>
          <h1>Just a moment...</h1></div> ;
 
      return (
      <Container className = "page-content">
          <h1>Our Top Chicken Recipe Selection</h1>  {
              items.map((item, index) => (
                <Figure key={index}>
                    <Figure.Image 
                        src={item.recipe.image}
                    />
                    <Figure.Caption>
                        <h5 class="text-center"><strong>{ item.recipe.label}</strong></h5>
                    </Figure.Caption>
                    <div class="text-center"><Button variant="success" as={Link} to={`/detail?id=${get_id(item.recipe.uri)}`}>View Details</Button></div>
                </Figure>
              ))
          }
      </Container>
  );
  }
}
 
export default Catalogue;