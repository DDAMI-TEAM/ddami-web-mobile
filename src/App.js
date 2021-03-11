import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import reset from "styled-reset";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./styles";
import "./App.css";
import Page from "./pages";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    color: #101010;
    background-color: #F4F0F8;
    font-family: 'NanumSquare';
    height: 100vh;
    font-size: 14px;
    box-sizing: border-box;
    margin: 0;
    overflow-x: hidden;
    #root, .App{
      height: 100%;
      width: 100%;
    }
   }
  *:focus { outline:none; }
  button {
    padding: 0;
    border: none;
    background: none;
  }
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
