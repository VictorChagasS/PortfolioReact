import React, { Component } from 'react'
import styled from 'styled-components'
import Robo1 from '../../../images/robo1.jpg'
import Robo2 from '../../../images/robo2.jpg'

export default class project2 extends Component {
    render() {
        return (
        <Container>
           <Title>Robôs reativos seguidores de linha</Title>
           <Subtitle>Um projeto criado por iniciação científica utilizando arduino</Subtitle>
           <Text>É um projeito feito através do PIBIC, cujo objetivo era criar um robô utilizando arduino para seguir linhas demarcadas em uma pista reta utilizando sensores de proximidade e cor</Text>

           <ContainerImage>
               <Image src = {Robo1} alt="robo1"/>
               <Image src= {Robo2}  alt="robo2"/>
           </ContainerImage>
           </Container>
        )
    }
}
const Image = styled.img`
    width:300px;
    margin: 0 2vh 0 2vh;
    border: 2px solid #000;

`
const Container = styled.div`
    text-align:center;

`
const ContainerImage=styled.div`
    display:flex;
    justify-content:center;

    @media (max-width: 1250px) {
        flex-direction:column
     }
   
`
const Title = styled.h2`
    margin: 15vh 0 7vh 0;
`
const Subtitle = styled.h3``
const Text = styled.p``
