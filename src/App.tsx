import React, {useState, useRef, useEffect} from "react";
import styled, { ThemeProvider, DefaultTheme } from "styled-components";

import { lightTheme, darkTheme } from "./theme";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";

const Container = styled.div`
  width:100vw;
  height:100vh;
  margin:0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;


function App() {
  const [currentTheme, setcurrentTheme] = useState<DefaultTheme>(lightTheme);
  const [selectTone, setSelectTone] = useState<string>("");
  const rootContainer = useRef<HTMLDivElement>(null);
  
  const changeColor = () => {
    currentTheme === lightTheme ? setcurrentTheme(darkTheme) : setcurrentTheme(lightTheme);
  }

  useEffect(() => {
    const { current } = rootContainer;
    if (current !== null) {
      current.style.backgroundColor = currentTheme.bgColor;
      current.style.color = currentTheme.textColorP;
    }
  },[currentTheme]);

  return (
    <Container ref={rootContainer} >
      <ThemeProvider theme={currentTheme} >
        <Header changeColor={changeColor} setSelectTone={setSelectTone}></Header>
        <Main selectTone={selectTone}></Main>
        <Footer></Footer>
      </ThemeProvider>
    </Container>
  );
}

export default App;
