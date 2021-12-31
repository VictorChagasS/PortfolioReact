import React, { Component } from 'react'
import styled from 'styled-components'
import SkillPng from '../../../images/skills.jpg'
import Skill from '../../../components/Skill'
import {FaHtml5,FaCss3Alt,FaPhp,FaPython,FaReact} from 'react-icons/fa'
import { IoLogoJavascript } from "react-icons/io";

export default class AboutMe extends Component {
    render() {
        return (
            <Content id='skills'>
                        <Title>Habilidades</Title>
                        <Container>
                            <Left>
                            <Subtitle>Minhas habilidades</Subtitle>
                            <Text>Sou um desenvolvedor que atua em áreas diversificadas, tenho forte tendência à desenvolvimento web e de aplicações, além de conhecimento vasto em banco de dados, consigo me relacionar bem tanto no Frontend quanto no Backend. Minha formação também se consiste no conhecimento no que diz respeito à noções de segurança em redes e na web</Text>
                            <SkillContainer>
                                <Skill name="HTML" percent={"92%"} icon={<FaHtml5/>}></Skill>
                                <Skill name="CSS3" percent="95%" icon={<FaCss3Alt/>}></Skill>
                                <Skill name="JavaScript" percent="85%" icon={<IoLogoJavascript/>}></Skill>
                                <Skill name="PHP" percent="80%" icon={<FaPhp/>}></Skill>
                                <Skill name="Python" percent="80%" icon={<FaPython/>}></Skill>
                                <Skill name="React/React Native" percent="88%" icon={<FaReact/>}></Skill>
                                <Skill name="MySQL/PostgreSQL" percent="85%" icon={<FaCss3Alt/>}></Skill>
                                <Skill name="Node.Js" percent="80%" icon={<FaCss3Alt/>}></Skill>
                                <Skill name="C/C++" percent="80%" icon={<FaCss3Alt/>}></Skill>
                               
                            </SkillContainer>
                        </Left>  
                        <Image><img src={SkillPng} alt="aboutme" width={300}/></Image>
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

export const SkillContainer = styled.div`
    margin: 5vh 0;
    display: flex;
    flex-direction: column;
`
export const Left = styled.div``
export const Image = styled.div`
    border:2px solid #000;
    border-radius:10px;
    margin-left:3vh;
    padding:3px 6px;
    align-self:center;

    @media (max-width: 1020px) {
       display:none;
    }

`
