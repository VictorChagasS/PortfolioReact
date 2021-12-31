import React, {Component} from 'react'
import NavBar from '../../components/NavBar'
import Main from './components/Main'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Footer from '../../components/Footer'

import styled from 'styled-components'

class Home extends Component {
    render() {
        return (
     <>
           <NavBar  item = {[{id:1, text:"Home", url:"#main",delay:0.10},
                            {id:2, text:"Sobre", url:"#about",delay:0.15},
                            {id:3, text:"Habilidades",url:"#skills",delay:0.20},
                            {id:4, text:"Projetos",url:"/projects"}]}/>
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