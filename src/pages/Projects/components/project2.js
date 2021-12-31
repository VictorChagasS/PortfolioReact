import React, { Component } from 'react'
import styled from 'styled-components'
import Integrador3 from '../../../images/integrador3.jpg'

export default class project2 extends Component {
    render() {
        return (
            <Align>
           
            <Container>
               
            <Left>
                <Title>Aplicativo L2</Title>
                <Subtitle>Um projeto criado juntamente com o grupo de pesquisa GRUFEE para auxiliar surdos</Subtitle>
                <Text>É um projeto feito em 2019 cujo objetivo é voltado para o auxílio de deficientes auditivos, o aplicativo conta com séries de quizzes e perguntas relacionado ao aprendizado em forma de gamificação, o aplicativo foi feito em linguagem web (HTML,CSS e JavaScript (JQuery)) e transformado em APK com o auxílio do framework Cordova)</Text>
                <Link href="/#">Mais informações aqui</Link>
            </Left>
            <ContainerImage>
                    <img src={Integrador3} alt='projeto1' width={"340vh"}></img>
                </ContainerImage>
            </Container>
            </Align>
        )
    }
}
const Align = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:5vh;
`
const Container = styled.div`
    display:flex;
    text-align:center;
    align-items:center;

    @media (max-width: 1250px) {
        flex-direction:column
     }

`
const Left = styled.div`
    margin-right:2%;
   
`

const ContainerImage=styled.div`
    border: 2px solid #000;
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