import React, { Component } from 'react'
import styled from 'styled-components';


export default class Skill extends Component {
    
    render() {
        return (
          
            <Item>
               <ItemSkill>
                   <IconSkill><Icon> {this.props.icon} </Icon></IconSkill>
                    <Language>{this.props.name}</Language>
                    <Porcentage>{this.props.percent}</Porcentage>
                </ItemSkill>
                <Bar width={this.props.percent}/>
            </Item>
         
        )
    }
}



export const Icon = styled.div`
    font-size:4vh;
    margin-right: 2vh;
    color: #14d9b8;
`
export const Porcentage = styled.span`
    margin-left: auto;
`
export const Bar = styled.div`
    left: 0;
    bottom: 0;
    height: .25rem;
    background-color: #14d9b8;
    width:${(props)=>props.width};
`

export const ItemSkill = styled.div`
    padding: 2vh 2vh;
    display: flex;
    align-items:center;
    flex-direction: row;
    align-items: center;
`
export const Item = styled.div`
    margin: 2vh 0;
    font-weight: bold;
    box-shadow: 0 4px 25px rgba(14,36,49,.15);
`
export const IconSkill = styled.div`
   
`
export const Language = styled.span``