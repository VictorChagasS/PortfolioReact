import React, { Component } from 'react'
import styled from 'styled-components'
import Integrador1 from '../../../images/integrador1.jpg'
import Integrador2 from '../../../images/integrador2.jpg'
import IntegradorMobile from '../../../images/mobileImg2.jpeg'
export default class Project1 extends Component {
    render() {
        return (
                <Align>
                <Title id='begin'>Agendamento para psicólogos</Title>
                <Container>
                <Right>
                    <Subtitle>Um projeto criado para o Instituto Federal de Sergipe para atender demandas dos psicólogos</Subtitle>
                    <Text>É um projeto feito em 2020 por minha autoria sob supervisão do Instituto Federal de Sergipe, é um projeto visando facilitar o dia a dia dos psicólogos que demandam de um tráfego muito intenso de pessoas, o projeto conta com uma API feita em Node.Js, uma página web feita em React e uma aplicação feita em React Native</Text>
                    <Link href="/#">Mais informações aqui</Link>
                    <ImagePC src = {Integrador2} alt='projeto2'></ImagePC>
                </Right>

                <ContainerImage>
                        <ImageMobile src = {IntegradorMobile} alt="projetmobile"/>
                        <Image src={Integrador1} alt='projeto1'/>
                </ContainerImage>

                
                </Container>
                </Align>
        )

    }
}
const Image = styled.img`
width:340vh
    @media (max-width: 1250px) {
       width:200vh;
    }
`
const ImageMobile =styled.img`
    display:none;
    margin-bottom:2vh;
    @media (max-width: 1250px) {
        display:block
     }
` 
const Align = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`
const Container = styled.div`
    display:flex;
    text-align:center;
    align-items:center;
    direction: rtl;
    @media (max-width: 1250px) {
        flex-direction:column
     }
`
const Right = styled.div`
    margin-left:2%;
`
const ContainerImage=styled.div`
    border: 2px solid #000;
`
const ImagePC = styled.img`
width:100vh;
@media (max-width: 1250px) {
    display:none;
 }
`
const Title = styled.h2`
    margin: 15vh 0 7vh 0;
`
const Subtitle = styled.h3``
const Text = styled.p``
const Link = styled.a`
    font-weight:bold;
    color:#000;
    margin:0 auto;
`