import React from "react";

export default function Navigation() {
    return (
        <div className="nav-container">
            <img alt="nasa logo" src={require("../images/nasa-logo.png")}></img>
            <h2>Nasa Photos</h2>
            <nav>
               <a href="">Home</a>
               <a href="">Select a Date</a> 
            </nav>
        </div>
    );
}; 