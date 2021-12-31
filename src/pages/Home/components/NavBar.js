import React from 'react'
import logo from '../../../images/logoIcon.png'
import styled from 'styled-components'
import {HiMenu} from "react-icons/hi"
import {motion} from 'framer-motion'
import { useState } from 'react'

export default function NavBar() {
        const [open,setOpen] = useState(false);
        const [active, setActive] = useState(1);

        const navItems = [
            {id:1, text:"Home", url:"#main",delay:0.10},
            {id:2, text:"Sobre", url:"#about",delay:0.15},
            {id:3, text:"Habilidades",url:"#skills",delay:0.20},
            {id:4, text:"Projetos",url:"#projects",delay:0.25}
        ]

        const closeMenu = () => setOpen(false)

        const setAndCloseMenu = (id) => {
            closeMenu()
            setActive(id)
        }
        const animationFrom = {opacity:0, x: 200}
        const animationTo = {opacity: 1, x : 0 }
        const variants = {
            animationTo,
            animationFrom
            
        }
        const logoAnimationFrom = {opacity:0,x:-20}
        return (
            <Header className='active'>
                <Logo initial={logoAnimationFrom} animate={animationTo} transition={{delay:0.20}}>
                    <img src={logo} width={35} alt="logo"/>
                    <Text>Victor Chagas</Text>
                </Logo>

                <Menu>
                        <ItensMenu initial={animationFrom} animate={animationTo} transition={{delay:0.20}}>
                        {navItems.map((val) => (
                          <Item onClick={()=>setActive(val.id)}><Link href={val.url} className={active === val.id ? "active" : "inactive"}>{val.text}</Link></Item>                          
                        ))}
                        </ItensMenu>
                </Menu>

                <MenuBtn size={40} onClick={()=>setOpen(!open)}/>  

                <ResponsiveMenu animate={open ? "animationTo" : "animationFrom"} variants={variants}>
                    {navItems.map((val) => (
                        <ResponsiveItem onClick={() => setAndCloseMenu(val.id)} 
                                        animate={open ? "animationTo" : "animationFrom"}
                                        variants={variants} transition={{delay:val.delay}}> 
                                        <LinkResp href={val.url} className={active === val.id ? "active" : "inactive"}>{val.text}</LinkResp>
                        </ResponsiveItem>
                    ))}
                </ResponsiveMenu>
            </Header>
        )
    }




export const Header = styled.header`
background-color:#FFF;
top:0;
position:fixed;
right:0;
left:0;
padding: 9px 8%;
display: flex;
align-items: center;
border-bottom: 1px solid rgba(138, 138, 138, 0.5);
font-weight:bold;

@media (max-width: 1020px) {
    padding: 9px 1%;


`
export const Logo = styled(motion.div)`
display: flex;
flex-grow: 1;
align-items: center;


`
export const Text = styled.p`
margin:0;
`
export const Menu = styled.div`
display:flex;
flex-direction:row;
align-items:center;
`

export const ItensMenu = styled(motion.ul)`
margin:0;
display: flex;
list-style-type: none;

@media (max-width: 1020px) {
    display:none;
}
`
export const Link = styled.a`
color:#000;
margin-right:4vh;
font-weight:600;

`


const Item = styled.li`
.active {
    padding:0px 0.3vh 0.3vh 0.3vh;
    border-bottom: 2px solid #14d9b8;
}

`

export const ResponsiveMenu = styled(motion.ul)`
    position: fixed;
    display:flex;
    flex-direction:column;
    top:40px;
    right:0px;
    background-color: #0e2431;
    width: 14em;
    height: 100%;
    list-style-type: none;

    
    @media (min-width: 1020px) {
        display:none;
       

}
    `
export const ResponsiveItem =  styled(motion.li)`
    margin-top: 20px;

    .active {
        padding:0px 0.3vh 0.3vh 0.3vh;
        border-bottom: 2px solid #14d9b8;
    }

`

export const LinkResp = styled.a`
    color:#FFF;
`

export const MenuBtn = styled(HiMenu)`
    cursor:pointer;
    @media (min-width: 1020px) {
        display:none;
`
