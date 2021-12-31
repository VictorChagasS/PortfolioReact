import React, { Component } from 'react'
import { FaWhatsapp,FaGithub,FaLinkedinIn,FaInstagram } from "react-icons/fa";
import styled from 'styled-components'

export default class Icons extends Component {
    render() {
        return (
                    <IconsFlex>
                        <Link color={this.props.color} href='/#'><FaWhatsapp fontSize={26}/> </Link> 
                        <Link color={this.props.color} href='/#'><FaGithub fontSize={26}/> </Link> 
                        <Link color={this.props.color} href='/#'><FaLinkedinIn fontSize={26}/> </Link> 
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
