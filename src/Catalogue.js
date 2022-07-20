import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
class Catalogue extends Component {
  constructor(props) {
      super(props);
      this.state = {
          recipesLoaded: false,
          items: [],
      };
  }
  componentDidMount() {
      fetch("https://api.edamam.com/api/recipes/v2")
          .then((res) => res.json())
          .then((json) => {
            console.log(json);
              this.setState({
                  items: json,
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
          <h1> Fetch data from an api in react </h1>  {
              items.map((item) => ( 
              <ol key = { item.id } >
                  User_Name: { item.username }, 
                  Full_Name: { item.name }, 
                  User_Email: { item.email } 
                  </ol>
              ))
          }
      </Container>
  );
  }
}
 
export default Catalogue;