import React, { useState } from "react";
import {
  MainDiv,
  FirstDiv,
  SecondDiv,
  LetterLogo,
  Main1,
  Paragraph,
  MainDivSub
} from "./styled.js";
import ScreenLoading from "../../components/screenLoading/ScreenLoading.js";
import { useNavigate } from "react-router-dom";
import Background from "../../components/background/Background";
import ResponsiveHeader from "../../components/responsiveHeader/ResponsiveHeader.js";

const HomePage = () => {
  const navigate = useNavigate();
  const [hasClick, setHasClick] = useState(false);

  const handleClick = () => {
    if (hasClick == true) {
      setHasClick(false);
    } else {
      setHasClick(true);
    }
  };
  return (
    <MainDiv>
      <ScreenLoading/>
      
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
            <br/>
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
