import React, {useState} from "react";
import "./App.css";
import PicOfDay from "./Components/PictureOfDay";
import Navigation from "./Components/Navigation";
import styled from "styled-components"

const Title = styled.h2 `
  font-size: 5rem;
  font-family: 'Orbitron', sans-serif;
`

function App() {
  const[date, setDate] = useState(new Date()) 

  return (
    <div className="App">
      <Navigation date={date}
                  setDate={setDate}
      />
      <div class="container">
        <div className="title">
          <Title>Astronomy Picture of the Day</Title>
        </div>
        <PicOfDay date={date}/>
        </div>
    </div>
  );
}

export default App;
