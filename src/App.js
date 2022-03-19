import React, { Component } from 'react'
import {Route, Routes, HashRouter } from 'react-router-dom'



import Home from './pages/Home'
import Projects from './pages/Projects'
export default class App extends Component {
  render() {
    
    return (
      <HashRouter hashType="noslash">
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/projects' element={<Projects/>}/> 
      
        </Routes>
      </HashRouter>
    )
  }
}


