import React, { Component } from 'react'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import Project1 from './components/project1'
import Project2 from './components/project2'
import Project3 from './components/project3'
import {motion} from 'framer-motion'

import styled from 'styled-components'
export default class index extends Component {
    
    render() {
        const animationFrom = {opacity:0, y: -100}
        const animationTo = {opacity: 1, y : 0 }
        return (
            <>
            <NavBar item={[{id:1, text:"Voltar", url:`/#main`,delay:0.10}]}/>
            <Container initial={animationFrom} animate={animationTo} transition={{delay:0.10}}>
                <Project1/>
                <Project2/>
                <Project3/>
            </Container>
            <Footer/>
            </>
        )
    }
}

export const Container = styled(motion.div)`
    margin: 0 8%;
`