import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "../src/components/navbar";
import theme from "./theme";
import Footer from "../src/components/footer";
import Main from "./pages/main";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);



  return (
    <div
      style={{ backgroundColor: "#263859",}}>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename = {'/animal-farm'}>
          <Navbar
            value={value}
            setValue={setValue}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
          <Route
            exact
            path="/"
            render={props => (
              <Main
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />

          <Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
