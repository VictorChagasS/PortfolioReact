import React, { Component } from 'react'
import Icons from './Icons'
import styled from 'styled-components'

export default class Footer extends Component {
    render() {
        return (
            <FooterContainer>
                <Name>Victor Chagas</Name>
                <Icons color="#FFF"/>
                <Text>© 2020 copyright all right reserved</Text>

            </FooterContainer>
        )
    }
}

export const FooterContainer = styled.footer`
color:#FFF!important;
display: flex;
flex-direction: column;
align-items: center;
padding: 3.5vh 0px; 
background-color: #0e2431;
color: #fff; 
text-align: center;
margin: 10vh 0 0 0;
`
export const Name = styled.h3``

export const Text = styled.p``