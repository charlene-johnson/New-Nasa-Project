import {createMuiTheme} from '@material-ui/core/styles';

const pink = "#FFC0CB";
const lightblue = "#ADD8E6";
const purple = "#800080";
const black = "#000000";

export default createMuiTheme({
    palette: {
       common: {
           pink: pink,
           lightblue: lightblue,
           purple: purple,
           black: black
       },
        primary: {
            main: pink,
            mainGradient: "linear-gradient(to left, purple, pink)"
        },
        secondary: {
            main: lightblue,
        }
    },
    typography: {
        tab: {
            fontFamily: "Orbitron",
            textTransform: "none",
            fontSize: "2.5rem",
            color: black
        },
        h1: {
            fontFamily: "Orbitron",
            fontSize: "2.5em"
        },
        h2: {
            fontFamily: "Orbitron"
        },
        subtitle1: {
            fontFamily:"Orbitron"
        },
        buttons: {
            fontFamily: "Orbitron",
            textTransform: "none",
        }
    }
})
