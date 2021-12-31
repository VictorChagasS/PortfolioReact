import React, {Component} from 'react'
import NavBar from './components/NavBar'
import Main from './components/Main'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Footer from './components/Footer'

import styled from 'styled-components'

class Home extends Component {
    render() {
        return (
     <>
           <NavBar/>
           <Container>
                <Main></Main>
                <AboutMe></AboutMe>
                <Skills></Skills>
           </Container>
           <Footer></Footer>
     </>
    )}
}
export default Home

export const Container = styled.div`
    margin: 0 8%;
`
