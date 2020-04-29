import React, {useState, useEffect} from "react";
import axios from "axios";
import PictureInfo from "./PictureInfo";

export default function PictureOfDay() {
        const[pictures, setPictures] = useState([])

        useEffect(()=> {
            axios
                .get("https://api.nasa.gov/planetary/apod?api_key=QQpTYaQHDUvPAyVorMgxfKhQEoSQikBYt5WuFCf6")
                .then(response => {
                    console.log(response.data)
                    setPictures(response.data)
                })
                .catch(err => {
                    console.log(err);
                });
        }, [])

        return(
            <div className="info">
                {pictures.map(picture => {
                    return (
                       <PictureInfo 
                       date={picture.date}
                       title={picture.title}
                       image={picture.hdurl}
                       explanation={picture.explanation}
                       />  
                    )
                })}
               
            </div>
        )
}