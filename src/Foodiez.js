import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import About from './about'
import Catalogue from './Catalogue'
import Contact from './contact'
import Detail from './Detail'
import Home from './Home'
import NavigationBar from './NavigationBar'

class Foodiez extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <NavigationBar />
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route path='/catalogue' element={<Catalogue />}></Route>
            <Route path='/detail' element={<Detail />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}

export default Foodiez