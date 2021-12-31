import React, { Component } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Home from './pages/Home'
import Projects from './pages/Projects'
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path ="*" element={<h1>404</h1>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
