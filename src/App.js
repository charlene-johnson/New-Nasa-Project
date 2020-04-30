import React from "react";
import "./App.css";
import PicOfDay from "./Components/PictureOfDay";
import Navigation from "./Components/Navigation";


function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="title">
        <h1>Astronomy Picture of the Day</h1>
      </div>
      <PicOfDay />
    </div>
  );
}

export default App;
