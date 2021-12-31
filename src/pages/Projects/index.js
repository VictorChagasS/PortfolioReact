import React, { Component } from 'react'
import NavBar from '../../components/NavBar'
export default class index extends Component {
    render() {
        return (
            <>
            <NavBar item={[{id:1, text:"Voltar", url:"/",delay:0.10}]}/>
            </>
        )
    }
}
