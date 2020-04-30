import React from "react";
import "./App.css";
import PicOfDay from "./Components/PictureOfDay"
function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>Astronomy Picture of the Day</h1>
      </div>
      <PicOfDay />
    </div>
  );
}

export default App;
