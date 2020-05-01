import React from "react";
import "./App.css";
import PicOfDay from "./Components/PictureOfDay";
import Navigation from "./Components/Navigation";
import styled from "styled-components"

const Title = styled.h2 `
  font-size: 5rem;
  font-family: 'Orbitron', sans-serif;
`

function App() {
  return (
    <div className="App">
      <Navigation />
      <div class="container">
        <div className="title">
          <Title>Astronomy Picture of the Day</Title>
        </div>
        <PicOfDay />
        </div>
    </div>
  );
}

export default App;
