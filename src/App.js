import React from "react";
import "./App.css";
import PicOfDay from "./Components/PictureOfDay"
function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <div className="title">
        <h1>Astronomy Picture of the Day</h1>
      </div>
      <PicOfDay />
    </div>
  );
}

export default App;
