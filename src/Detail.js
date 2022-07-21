import React, { Component } from 'react'

import { Badge, Container, Image, Row, Spinner } from 'react-bootstrap'

class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipesLoaded: false,
      item: null,
    }
  }

  componentDidMount() {
    const search = window.location.search
    const params = new URLSearchParams(search)
    const id = params.get('id')
    const search_str = params.get('search')

    this.setState({
      searchString: search_str,
    })

    fetch(
      'https://api.edamam.com/api/recipes/v2/' +
        id +
        '?type=public&app_id=' +
        process.env.REACT_APP_DETAIL_ID +
        '&app_key=' +
        process.env.REACT_APP_DETAIL_KEY +
        '&q=chicken'
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json.recipe)
        this.setState({
          item: json.recipe,
          recipesLoaded: true,
        })
      })
  }

  render() {
    const { recipesLoaded, item, searchString } = this.state

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
        </h1>
        {
          <Row>
            <div className='col-md-4'>
              <Image fluid src={item.image} className='rounded w-100' />
            </div>
            <div className='col-md-8'>
              <p className='fw-bold text-brand text-capitalize'>{item.cuisineType}</p>
              <h1>{item.label}</h1>
              {item.ingredientLines.map((item, index) => (
                <p>{item}</p>
              ))}
            </div>
          </Row>
        }
        <div>
          <p className='fw-bold'>Labels</p>
          {item.healthLabels.map((item) => {
            const text = item.replaceAll('-', ' ')

            return (
              <Badge bg='secondary' className='me-2'>
                {text}
              </Badge>
            )
          })}
        </div>
      </Container>
    )
  }
}

export default Detail
