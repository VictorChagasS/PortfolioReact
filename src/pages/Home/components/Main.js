import React, {useState } from 'react'
import styled from 'styled-components'
import principal from '../../../images/principalSVG.png'
import Icons from '../../../components/Icons'
import {motion} from 'framer-motion'

export default function Main() {

        const animationFrom = {opacity:0, y: -100}
        const animationTo = {opacity: 1, y : 0 }

        const rotateFrom = {rotate:0 }
        const rotateTo = {rotate: 360}
        
        const [rotate,setRotate] = useState(false);
        console.log(rotate)
        const variants = {
            rotateTo,
            rotateFrom }

        return (
        
            <Section id='main' initial={animationFrom} animate={animationTo} transition={{delay:0.10}}> 
                <Container>
                        <ContainerImage onClick={()=>setRotate(!rotate)} animate={rotate ? "rotateTo" : "rotateFrom"} variants={variants}>
                            <img src={principal} alt="principal"/>
                        </ContainerImage>
                        <TextDiv>
                            <Name>Victor Chagas</Name>
                            <Description>Desenvolvedor de sites e apps</Description>
                        </TextDiv>
                    <Icons color="#000"></Icons>
                </Container>
            </Section>
        )
    }

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
    justify-content:center;
`
export const Section = styled(motion.section)`
    height:100vh;
    display:flex;
    align-itens:center;
    justify-content:center;
`
export const ContainerImage = styled(motion.div)`
    padding: 5vh;
    border-radius:180px;
    border: 2px solid #14d9b8;
    box-shadow: 0 4px 25px rgba(14,36,49,.15);
    transition: 1000ms linear;
`
export const Name = styled.p`
    font-weight:bold;
    font-size:2rem;
    margin: 20px 0 0 0;
`
export const Description = styled.p``
export const TextDiv = styled.div``


