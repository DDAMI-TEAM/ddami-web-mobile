import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./styles";
import "./App.css";
import Page from "./pages";

const GlobalStyle = createGlobalStyle`
  body {
    color: #3C3C3C;
    font-family: 'NanumSquare';
    height: 100vh;
    box-sizing: border-box;
    margin: 0;
    overflow-x: hidden;
    #root, .App{
      height: 100%;
      width: 100%;
    }
   }
  *:focus { outline:none; }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Page />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
