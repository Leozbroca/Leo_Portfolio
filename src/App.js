import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import Header from "./components/header/Header";
import GlobalStyle from "./constants/GlobalStyle";

function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
