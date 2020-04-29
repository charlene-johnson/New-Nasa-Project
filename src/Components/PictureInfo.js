import React from "react";

const PictureInfo = props => {
    return (
    <div className="pictureInfo">
        <h2>Date: {props.date}</h2>
        <h2>Title of Photo: {props.title}</h2>
        <div className="pictureImg">
            <img alt="pictures" src={props.image}></img>
            <p>{props.explanation}</p>
        </div>
    </div>
    );
};
    

export default PictureInfo;