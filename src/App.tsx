import React, {useState} from "react";
import styled, { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme } from "./theme";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

const Container = styled.div`
  width:100vw;
  height:100vh;
  margin:0;
  background-color: ${darkTheme.bgColor};
`;

function App() {
  const [defaultTheme, setDefaultTheme] = useState(lightTheme);
  return (
    <Container>
      <ThemeProvider theme={defaultTheme} >
        <Header setTheme={setDefaultTheme}></Header>
        <Footer></Footer>
      </ThemeProvider>
    </Container>
  );
}

export default App;
