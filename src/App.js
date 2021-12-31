import React, { Component } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Home from './pages/Home'
import Projects from './pages/Projects'
export default class App extends Component {
  render() {
    const url = process.env.PUBLIC_URL
    console.log(url)
    return (
      <BrowserRouter>
        <Routes>
            <Route path={url+'/'} element={<Home/>}/>
            <Route path={url+'/projects'} element={<Projects/>}/>
            <Route path ="*" element={<h1>404</h1>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
