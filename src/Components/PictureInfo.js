import React from "react";
import styled from "styled-components"
import moment from "moment"

const TitleDate = styled.div `
    display: flex;
    justify-content: space-evenly;
    margin-top: 5%;
`


const PictureInfo = props => {

const newDate = moment(props.date).format('dddd, MMMM Do YYYY')    
    return (
    <div className="pictureInfo">
        <TitleDate>
            <h2>Date: {newDate}</h2>
            <h2>Title of Photo: {props.title}</h2>
        </TitleDate>
        <div className="pictureImg">
            <img alt="pictures" src={props.image}></img>
            <p>{props.explanation}</p>
        </div>
    </div>
    
    );
};
    

export default PictureInfo;