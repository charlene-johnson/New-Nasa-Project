import React, {useState} from "react";
import styled from "styled-components"
import moment from "moment"
import {Modal, ModalHeader, ModalBody} from "reactstrap"


const TitleDate = styled.div `
    display: flex;
    justify-content: space-evenly;
    margin-top: 5%;
`
const DatePhotoHeading = styled.h2 `
font-family: 'Orbitron', sans-serif;
`
const Pictures = styled.img `
    padding: 20px;
    border: 1px solid pink;
    background: linear-gradient(to right, lightblue, pink);
    width: 100%;
`
const Button = styled.button `
    padding: 1%;
    margin: 2% 0;
    background: linear-gradient(to left, purple, pink);
    border: 2px solid pink;
    font-size: 1.5rem;
    font-family: 'Orbitron', sans-serif;

    &:hover {
        background: linear-gradient(to right, lightblue, pink);
    }
`
const Paragraph = styled.p `
    padding: 20px;
    border: 1px solid purple;
    font-size: 1.5rem;
    font-family: 'Orbitron', sans-serif;
    background: white; 
`

const Footer = styled.footer `
    font-size: 1.3rem;
    font-family: 'Orbitron', sans-serif;
`
const PictureInfo = props => {

const [modal, setModal] = useState(false); 
const toggle = () => setModal(!modal);

const newDate = moment(props.date).format('dddd, MMMM Do YYYY')    
    return (
    <div className="pictureInfo">
        <TitleDate>
            <DatePhotoHeading>Date: {newDate}</DatePhotoHeading>
            <DatePhotoHeading>Title of Photo: {props.title}</DatePhotoHeading>
        </TitleDate>
        <div className="pictureImg">
            <Pictures alt="pictures" src={props.image}></Pictures>
            <Button onClick={toggle}>
                Click here for more info about this picture!     
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle} style={{background: "linear-gradient(to right, lightblue, pink)",  fontFamily:"'Orbitron', sans-serif"}} >Explanation of: {props.title}</ModalHeader>
                <ModalBody style={{padding: "15px",
                border: "1px solid pink",
                background: "linear-gradient(to right, lightblue, pink)"}}>
                    <Paragraph>{props.explanation}</Paragraph>
                </ModalBody>
            </Modal>
        </div>
        <Footer>
            &copy;2020 Charlene Johnson
        </Footer>
    </div>
    );
};
    
export default PictureInfo;