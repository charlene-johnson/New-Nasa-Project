import React from "react";
import styled from "styled-components"

const Header = styled.header `
    width: 100%;
    height: 90px;
    border-bottom: 2px solid black;
    box-shadow: 5px 2px lightgrey;
`

const NavContainer = styled.div `
    display: flex;
    align-items: center;
    
`

const NasaImage = styled.img `
    height: 80px;
    width: 160px;
`
const Navs = styled.nav `
    width: 350px;
    margin-left: 60%;
    font-size: 2.4rem;
    display: flex;
    justify-content: space-evenly;
`

const Links = styled.a `
    text-decoration: none;
    color: black;
`



export default function Navigation() {
    return (
        <Header>
            <NavContainer>
                <NasaImage alt="nasa logo"src={require("../images/nasa-logo.png")}></NasaImage>
                <h1>Nasa Photos</h1>
                <Navs>
                    <Links href="#">Home</Links>
                    <Links href="">Select a Date</Links>
                </Navs>
            </NavContainer>
        </Header>
    );
}; 


