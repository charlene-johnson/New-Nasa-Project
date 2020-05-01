import React from "react";
import styled from "styled-components"
import moment from "moment"

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
   
`

const PictureInfo = props => {

const newDate = moment(props.date).format('dddd, MMMM Do YYYY')    
    return (
    <div className="pictureInfo">
        <TitleDate>
            <DatePhotoHeading>Date: {newDate}</DatePhotoHeading>
            <DatePhotoHeading>Title of Photo: {props.title}</DatePhotoHeading>
        </TitleDate>
        <div className="pictureImg">
            <Pictures alt="pictures" src={props.image}></Pictures>
            <p>{props.explanation}</p>
        </div>
    </div>
    
    );
};
    

export default PictureInfo;