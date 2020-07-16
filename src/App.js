import React, { useState } from "react";
import PicOfDay from "./Components/PictureOfDay";
import Navigation from "./Components/Navigation";
import { ThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import theme from "../src/ui/Theme";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [date, setDate] = useState(new Date());

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navigation date={date} setDate={setDate} />
        <Typography
          variant="h1"
          style={{ fontSize: "5rem", textAlign: "center", marginTop:"2rem" }}
        >
          Astronomy Picture of the Day
        </Typography>
        <PicOfDay date={date} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
