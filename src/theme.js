import { createMuiTheme } from "@material-ui/core/styles";

const arcBlack = "#17223b";
const arcPink = "#ff6768";
const arcDarkGrey = "#263859";
const arcGrey = "#6b778d";
const fontColor =  "#bbe1fa";
const pinky = "#f1bbd5";

export default createMuiTheme({
  palette: {
    common: {
      black: arcBlack,
      pink: arcPink,
      grey: arcGrey,
      darkgrey: arcDarkGrey,
      materialgreen: "#053f5e"
    },
    primary: {
      main: arcBlack
    },
    secondary: {
      main: arcPink
    }
  },
  typography: {
    tab: {
      fontFamily: "Roboto",
      textTransform: "none",
      fontWeight: 400,
      color: "white",
      fontSize: "1.1rem"
    },
    estimate: {
      fontFamily: "Roboto",
      fontSize: "1.1rem",
      textTransform: "none",
      color: "white"
    },
    h2: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: pinky,
      lineHeight: 1.5
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      color: pinky,
      fontWeight: 700
    },
    h6: {
      fontWeight: 500,
      fontFamily: "Raleway",
      color: arcBlack
    },
    body1: {
      fontSize: "1.2rem",
      color: fontColor,
      fontWeight: 300
    }, 
  }
});
