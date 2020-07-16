import React, {useState} from "react";
import "./App.css";
import PicOfDay from "./Components/PictureOfDay";
import Navigation from "./Components/Navigation";
import {ThemeProvider} from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'
import theme from '../src/ui/Theme';
import {BrowserRouter as Router} from 'react-router-dom'

// const Title = styled.h2 `
//   font-size: 5rem;
//   font-family: 'Orbitron', sans-serif;
// `

function App() {
  const[date, setDate] = useState(new Date()) 

  return (
    <ThemeProvider theme ={theme}>
    <Router>
      <Navigation date={date}
                  setDate={setDate}
      />
          <Typography>Astronomy Picture of the Day</Typography>
        
        <PicOfDay date={date}/>
        
      </Router>  
    </ThemeProvider>
  );
}

export default App;
