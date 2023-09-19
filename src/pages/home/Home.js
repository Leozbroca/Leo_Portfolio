import React, { useState } from "react";
import {
  MainDiv,
  FirstDiv,
  SecondDiv,
  Main1,
  Paragraph,
  MainDivSub,
} from "./styled.js";
import ScreenLoading from "../../components/screenLoading/ScreenLoading.js";
import Background from "../../components/background/Background";

import Burger from "../../components/Burger/Burger.js";
import Menu from "../../components/Menu/Menu.js";

const HomePage = () => {
  const [open, setOpen] = useState(false);

  return (
    <MainDiv>
      <ScreenLoading />

      <div>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>

      <MainDivSub>
        <Background />
        <Main1>
          <FirstDiv>
            <Paragraph className="animate__animated animate__flipInX animate__delay-2s">
              <p className="letter">H</p>
              <p>i</p>
              <p>,</p> <br />
            </Paragraph>{" "}
            <Paragraph className="animate__animated animate__flipInX animate__delay-3s">
              <p>I</p>
              <p>'</p>
              <p>m</p> <p>L</p>
              <p>e</p>
              <p>o</p>
              <p>z</p>
              <p>b</p>
              <p>r</p>
              <p>o</p>
              <p>c</p>
              <p>a</p>
              <p>,</p>
              <br />
            </Paragraph>
            <Paragraph className="animate__animated animate__flipInX animate__delay-4s">
              <p>W</p>
              <p>e</p>
              <p>b</p> <p>D</p>
              <p>e</p>
              <p>v</p>
              <p>e</p>
              <p>l</p>
              <p>o</p>
              <p>p</p>
              <p>e</p>
              <p>r</p>
            </Paragraph>
          </FirstDiv>
          <SecondDiv className="animate__animated animate__fadeIn animate__delay-5s">
            Full Stack Developer / Data Scientist
          </SecondDiv>
        </Main1>
      </MainDivSub>
    </MainDiv>
  );
};

export default HomePage;
