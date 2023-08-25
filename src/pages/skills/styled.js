import styled from "styled-components";

export const MainDiv = styled.div`
  margin: 0;
  padding: 0;
  background-color: #1d1d1d;
  height: 100%;
  min-height: 100vh;
  margin-left: 10rem;
  display: flex;
  flex-direction: row;
  @media (max-width: 1400px) {
    flex-direction: column;
  }
  @media (max-width: 800px) {
    margin-left:0px;
  }
`;

export const Main1 = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;
  /* pointer-events: none; */
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  @media (max-width: 1400px) {
    width: 100%;
  }
`;

export const Main2 = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  @media (max-width: 1400px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const Title = styled.h2`
  color: #ad1111;
  font-size: 4em;
  margin: 0;
  padding: 0;
  margin-left: 5rem;
  font-family: 'Righteous', cursive;
`;

export const Decoration1 = styled.div`
  font-family: "La Belle Aurore", cursive;
  color: #515152;
  font-size: 18px;
  margin-left: 1rem;
  :hover {
    cursor: default;
  }
`;
export const Decoration2 = styled.div`
  font-family: "La Belle Aurore", cursive;
  color: #515152;
  font-size: 18px;
  margin-left: 2rem;

  :hover {
    cursor: default;
  }
`;

export const Decoration3 = styled.div`
  font-family: "La Belle Aurore", cursive;
  color: #515152;
  font-size: 18px;
  margin-left: 5rem;
  :hover {
    cursor: default;
  }
`;

export const Decoration4 = styled.div`
  font-family: "La Belle Aurore", cursive;
  color: #515152;
  font-size: 18px;
  margin-left: 5rem;
  margin-bottom: 1rem;
  :hover {
    cursor: default;
  }
`;
export const Decoration5 = styled.p`
  font-family: "La Belle Aurore", cursive;
  color: #515152;
  font-size: 18px;
  margin-left: 5rem;
  margin-top: -2rem;
  :hover {
    cursor: default;
  }
`;

export const Decoration6 = styled.p`
  font-family: "La Belle Aurore", cursive;
  color: #515152;
  font-size: 18px;
  margin-left: 5rem;
  margin-top: -1rem;
  :hover {
    cursor: default;
  }
`;

export const Text = styled.p`
  color: #DCDCDC;
  font-size: 1em;
  margin-left: 5rem;
  margin-top: -1.3rem;
  margin-right: 10rem;
  letter-spacing: 1px;
  font-family: 'Bree Serif', serif;
`;

export const Skill1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 5rem;
  @media (max-width: 1400px) {
    width: 50%;
    justify-content: center;
    align-items: center;
  }
`;

export const Skill = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media (max-width: 1400px) {
    width: 50%;
    justify-content: center;
    align-items: center;
    text-align: start;
  }
`;

export const SkillName = styled.p`
  color: white;
  font-family: "Russo One", sans-serif;
  font-size: 18px;
  margin: 0;
  padding: 0;
  @media (max-width: 1400px) {
    font-size: 22px;
    text-align: start;
    justify-self: start;
  }
`;
export const SkillPorcentage = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 80%;
  margin-top: 5px;
  margin-bottom: 15px;
  @media (max-width: 1400px) {
    width: 100%;
  }
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 95%;
  margin-bottom: 50px;
  overflow: hidden;
  

  @media (max-width: 1400px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 30em;
  height: 100%;
  background-color: #151515;
  margin-top: 30px;
  color: #ffffff;
  padding: 10px;

  @media (max-width: 1950px) {
  }
  @media (max-width: 1800px) {
  }
  @media (max-width: 1650px) {
  }
  @media (max-width: 1150px) {
  }

  h1 {
    font-size: 20px;
    padding: 0;
    margin: 0;
    padding-bottom: 20px;
    font-family: 'Righteous', cursive;
    letter-spacing: 1px;
  }
  h2 {
    font-size: 12px;
    color: #ababab;
    padding: 0;
    margin: 0;
    padding-bottom: 20px;
  }
  p {
    font-size: 15px;
    color: #ababab;
    padding: 0;
    margin: 0;
    font-family: 'Bree Serif', serif;
  }
`;

export const LoadingBack = styled.div`
  height: 3px;
  width: 100%;
  background-color: #151515;
  z-index: 1;
  overflow: auto;
  @media (max-width: 1400px) {
    height: 5px;
  }
`;

export const LoadingRed = styled.div`
  width: 500%;
  height: 3px;
  background-color: #ad1111;
  animation: load1 2000ms steps(100) normal;
  animation-delay: 2s;
  z-index: 2;

  @keyframes load1 {
    from {
      width: 0;
    }
    to {
      width: 500%;
    }
  }
`;

export const LoadingBlue = styled.div`
  width: 200%;
  height: 3px;
  background-color: darkblue;
  animation: load2 2000ms steps(100) normal;
  animation-delay: 2s;
  z-index: 2;

  @keyframes load2 {
    from {
      width: 0;
    }
    to {
      width: 200%;
    }
  }
`;

export const LoadingGreen = styled.div`
  width: 25%;
  height: 3px;
  background-color: darkgreen;
  animation: load3 2000ms steps(100) normal;
  animation-delay: 2s;
  z-index: 2;

  @keyframes load3 {
    from {
      width: 0;
    }
    to {
      width: 25%;
    }
  }
`;

export const LoadingPurple = styled.div`
  width: 500%;
  height: 3px;
  background-color: purple;
  animation: load4 2000ms steps(100) normal;
  animation-delay: 2s;
  z-index: 2;

  @keyframes load4 {
    from {
      width: 0;
    }
    to {
      width: 500%;
    }
  }
`;

export const LoadingYellow = styled.div`
  width: 100%;
  height: 3px;
  background-color: yellow;
  animation: load5 2000ms steps(100) normal;
  animation-delay: 2s;
  z-index: 2;

  @keyframes load5 {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;

export const LoadingOrange = styled.div`
  width: 30%;
  height: 3px;
  background-color: #f77e21;
  animation: load6 2000ms steps(100) normal;
  animation-delay: 2s;
  z-index: 2;

  @keyframes load6 {
    from {
      width: 0;
    }
    to {
      width: 30%;
    }
  }
`;

export const LoadingLightBlue = styled.div`
  width: 300%;
  height: 3px;
  background-color: #47b5ff;
  animation: load7 2000ms steps(100) normal;
  animation-delay: 2s;
  z-index: 2;

  @keyframes load7 {
    from {
      width: 0;
    }
    to {
      width: 300%;
    }
  }
`;

export const StyledButton = styled.button`
  width: 18rem;
  height: 3.5rem;
  border: none;
  background-color: transparent;
  color: red;
  text-align: center;
  font-size: 1.4em;
  border: 1px solid #ad1111;
  /* margin-top:10px;
margin-left:16rem; */
  transition: 0.5s;
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0003);

  :hover {
    background-color: #ad1111;
    color: #111;
    box-shadow: 0 0 20px #ad1111;
    transition-delay: 0s;
    cursor: pointer;
  }
`;
export const Align = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const AlignName = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: flex-start;
`;

export const Decoration9 = styled.p`
  font-family: "La Belle Aurore", cursive;
  color: #515152;
  margin-left: 2rem;
  :hover {
    cursor: default;
  }
  @media (max-width: 1400px) {
    display: none;
  }
`;
export const Decoration10 = styled.p`
  font-family: "La Belle Aurore", cursive;
  color: #515152;
  font-size: 18px;
  margin-left: 1rem;
  margin-top: -1rem;
  :hover {
    cursor: default;
  }
  @media (max-width: 1400px) {
    display: none;
  }
`;

export const PSpecial = styled.p`
  display: inline;
  color: #00ced1;
  font-size: 1em;
  letter-spacing: 1px;
`;
export const DivBodyHtml = styled.p`
  display: none;
  @media (max-width: 1400px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const Decoration9resp = styled.p`
  font-family: "La Belle Aurore", cursive;
  color: #515152;
  margin-left: 2rem;
  :hover {
    cursor: default;
  }
`;
export const Decoration10resp = styled.p`
  font-family: "La Belle Aurore", cursive;
  color: #515152;
  font-size: 18px;
  margin-left: 1rem;
  margin-top: -1rem;
  :hover {
    cursor: default;
  }
`;
