import React from "react";
import styled from "styled-components"

const Header = styled.header `
    width: 100%;
    height: 90px;
    border-bottom: 2px solid black;
`

const NavContainer = styled.div `
    display: flex;
    align-items: center;
    
`

const NasaImage = styled.img `
    height: 80px;
    width: 160px;
`

const NasaPhotos = styled.h1 `
    font-family: 'Orbitron', sans-serif;
`

const Navs = styled.nav `
    width: 350px;
    margin-left: 60%;
    font-size: 2.4rem;
    display: flex;
    justify-content: space-evenly;
    font-family: 'Orbitron', sans-serif;
`

const Links = styled.a `
    text-decoration: none;
    color: black;

    &:hover {
        color: grey;
    }
`



export default function Navigation() {
    return (
        <Header>
            <NavContainer>
                <NasaImage alt="nasa logo"src={require("../images/nasa-logo.png")}></NasaImage>
                <NasaPhotos>Nasa Photos</NasaPhotos>
                <Navs>
                    <Links href="#">Home</Links>
                    <Links href="">Select a Date</Links>
                </Navs>
            </NavContainer>
        </Header>
    );
}; 


