import React, { Component } from 'react'
import { FaWhatsapp,FaGithub,FaLinkedinIn,FaInstagram } from "react-icons/fa";
import styled from 'styled-components'

export default class Icons extends Component {
    render() {
        return (
                    <IconsFlex>
                        <Link color={this.props.color} href="https://api.whatsapp.com/send?phone=5579996413041&text=Entre%20em%20contato"><FaWhatsapp fontSize={26}/> </Link> 
                        <Link color={this.props.color} href='https://github.com/VictorChagasS'><FaGithub fontSize={26}/> </Link> 
                        <Link color={this.props.color} href='https://www.linkedin.com/in/victor-santos-chagas-439a9621a'><FaLinkedinIn fontSize={26}/> </Link> 
                        <Link color={this.props.color} href='/#'><FaInstagram fontSize={26}/> </Link> 
                    </IconsFlex>
        )
    }
}

export const Icon = styled.div``


export const Link = styled.a`
    color:${(props) => props.color};
    display:flex;
    padding:0.5vh;
    margin: 0px 1vh;
    border: 2px solid ${(props) => props.color};
    border-radius: 180px;
`
export const IconsFlex = styled.div`
    display:flex;
`
