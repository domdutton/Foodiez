import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Container, Figure } from 'react-bootstrap'
import { Spinner } from 'react-bootstrap'

const applicationId = 'fd48e7de'
const applicationKey = 'fbedb101903e8235ee9a899394ba3a19'

function get_id(url) {
  return url.split('#').pop()
}

class Catalogue extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchString: '',
      recipesLoaded: false,
      items: [],
    }
  }

  componentDidMount() {
    const search = window.location.search
    const params = new URLSearchParams(search)
    const search_str = params.get('search')

    this.setState({
      searchString: search_str,
    })

    fetch(
      'https://api.edamam.com/api/recipes/v2?type=public&app_id=' +
        applicationId +
        '&app_key=' +
        applicationKey +
        '&q=' +
        search_str
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json.hits)
        this.setState({
          items: json.hits,
          recipesLoaded: true,
        })
      })
  }
  render() {
    const { recipesLoaded, items, searchString } = this.state

    if (!recipesLoaded)
      return (
        <div className='page-content'>
          <div className='d-flex align-items-center justify-content-center'>
            <Spinner animation='border' className='d-block me-4 text-brand' />
            <h1 className='mb-0'>Just a moment...</h1>
          </div>
        </div>
      )

    return (
      <Container className='page-content'>
        <h1>
          Our Top <span className='text-capitalize'>{searchString}</span> Recipe Selection
        </h1>{' '}
        {items.map((item, index) => (
          <Link to={`/detail?id=${get_id(item.recipe.uri)}&search=${searchString}`}>
            <Figure className='p-4' key={index}>
              <Figure.Image src={item.recipe.image} className='rounded' />
              <Figure.Caption>
                <p class='text-center text-wrap w-100'>
                  <strong>{item.recipe.label}</strong>
                </p>
              </Figure.Caption>
            </Figure>
          </Link>
        ))}
      </Container>
    )
  }
}

export default Catalogue