import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme } from "./theme";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";

import { useRecoilValue } from "recoil";
import { isDarkMode } from "./atoms";

const Container = styled.div`
  width:100vw;
  height:100vh;
  margin:0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;


function App() {  
  const _isDarkMode = useRecoilValue(isDarkMode);

  return (
    <Container>
      <ThemeProvider theme={_isDarkMode ? darkTheme : lightTheme} >
        <Header />
        <Main />
        <Footer />
      </ThemeProvider>
    </Container>
  );
}

export default App;
