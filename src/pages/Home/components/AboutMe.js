import React, { Component } from 'react'
import styled from 'styled-components'
import AboutMeImg from '../../../images/aboutMe.png'
export default class AboutMe extends Component {
    render() {
        return (
            <Content >
                        <Title id='about'>Sobre mim</Title>
                        <Container>
                            <Image><img src={AboutMeImg} alt="aboutme" width={300}/></Image>
                            <Right>
                            <Subtitle>Sou Victor, técnico em redes e programador</Subtitle>
                            <Text>Possuo formação de nível técnico em Redes de Computadores pelo Instituto Federal de Sergipe (2018-2021). Sou atuante na área de desenvolvimento de aplicativos pelo grupo de pesquisa GRUFEE onde houve a criação do aplicativo L2 (2019), já atuei em projetos de extensão como PIBIC em desenvolvimento de sites e aplicações (2019). Atualmente sou estudante de Engenharia de Computação na Universidade Federal de Sergipe(2021)</Text>
                        </Right>  
                </Container>
            </Content>
        )

    }
}
export const Content = styled.div`
    display:flex;
    flex-direction:column;
    margin-bottom:10vh;
`

export const Container = styled.div`
    display:flex;`
export const Title = styled.h2`
    text-align:center;
`
export const Subtitle= styled.h3`
    text-align:center;
`
export const Text = styled.p`
    text-align:center;
  
`
export const Right = styled.div``
export const Image = styled.div`
    border:2px solid #000;
    border-radius:10px;
    margin-right:3vh;
    padding:3px 6px;
`
