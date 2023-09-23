import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import Header from "./components/header/Header";
import GlobalStyle from "./constants/GlobalStyle";
import GlobalState from "./context/GlobalState";

function App() {
  return (
    <div>
      <GlobalStyle />
      <GlobalState>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
      </GlobalState>
    </div>
  );
}

export default App;
