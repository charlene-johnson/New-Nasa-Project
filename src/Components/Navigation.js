import React, {useState} from "react";
import styled from "styled-components"
import Calendar from "./Calendar"
import {Modal, ModalBody} from "reactstrap"
import 'react-calendar/dist/Calendar.css';

const Header = styled.header `
    width: 100%;
    height: 100%;
    border-bottom: 2px solid black;
  
`

const NavContainer = styled.div `
    display: flex;
    align-items: center;
`

const NasaImage = styled.img `
    height: 80%;
    width: 8%;

    @media(max-width: 800px) {
        width: 15%
    }
`

const NasaPhotos = styled.h1 `
    font-family: 'Orbitron', sans-serif;
`

const Navs = styled.nav `
    width: 50rem;
    margin-left: 60%;
    font-size: 2.4rem;
    display: flex;
    justify-content: space-evenly;
    font-family: 'Orbitron', sans-serif;

    @media(max-width: 1024px) {
        margin-left: 40%;
    }

    @media(max-width: 800px) {
        margin-left: 25%
    }

   
`

const Links = styled.a `
    text-decoration: none;
    color: black;

    &:hover {
        color: purple;
        text-decoration: none;
    }
`

export default function Navigation(props) {
    const [modal, setModal] = useState(false); 
    const toggle = () => setModal(!modal);
    return (
        <Header>
            <NavContainer>
                <NasaImage alt="nasa logo"src={require("../images/nasa-logo.png")}></NasaImage>
                <NasaPhotos>Nasa Photos</NasaPhotos>
                <Navs>
                    <Links href="/">Home</Links>
                    <Links onClick={toggle}toggle={toggle}>Select a Date</Links>
                    <Modal isOpen={modal} toggle={toggle}>
                        <ModalBody style={{padding: "20px",
                    border: "1px solid pink",
                    background: "linear-gradient(to right, lightblue, pink)", display:"flex", justifyContent:"center"}}>
                            <Calendar date={props.date}
                                            setDate={props.setDate}
                     
                                />
                    </ModalBody>  
                </Modal>
            </Navs>
        </NavContainer>
    </Header>
    );
}; 


