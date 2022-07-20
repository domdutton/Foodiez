import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure';
var applicationId = '7844cb72';
var applicationKey = 'd6487333a646543fabad04afba07a8bc';
class Catalogue extends Component {
  constructor(props) {
      super(props);
      this.state = {
          recipesLoaded: false,
          items: [],
      };
  }
  componentDidMount() {
      fetch("https://api.edamam.com/api/recipes/v2?type=public&app_id=" + applicationId + "&app_key=" + applicationKey + "&q=chicken")
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
                        { item.recipe.label}
                    </Figure.Caption>
                </Figure>
              ))
          }
      </Container>
  );
  }
}
 
export default Catalogue;