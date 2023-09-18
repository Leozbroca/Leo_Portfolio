import styled from "styled-components";

export const MainDiv = styled.div`
  margin: 0;
  padding: 0;
  background-color: #1d1d1d;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;


`;

export const MainDivSub = styled.div`
margin-left:10rem;
display: flex;
  flex-direction: row;
  @media (max-width: 1400px) {
    flex-direction: column;
  }

@media (max-width: 800px) {
    margin-left:0px;
    font-size:12px;
    h2{
      font-size:40px;
    }
  }
`

export const Main1 = styled.div`
  margin: 0;
  padding: 0;
  background-color: #1d1d1d;
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: row;
  /* pointer-events: none; */
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  @media (max-width: 1400px) {
    width: 85%;
  }
  @media (max-width: 800px) {
    width: 80%;
  }

  @media (max-width: 550px) {
    width: 70%;
  }

  @media (max-width: 350px) {
    width: 60%;
  }

`;

export const Main2 = styled.div`
  margin: 0;
  padding: 0;
  background-color: #1d1d1d;
  height: 100%;
  min-height: 100vh;
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

  @media (max-width: 1400px) {
    width: 100%;

  }
 
  @media (max-width: 550px) {
    display:none;
  }
`;


export const Title = styled.h2`
  color: #ad1111;
  font-size: 4em;
  margin: 0;
  padding: 0;
  margin-left: 5rem;
  font-family: 'Righteous', cursive;
  letter-spacing:1px;

  p {
    display: inline;
  }
`;

export const Decoration1 = styled.div`
  font-family: "La Belle Aurore", cursive;
  color: #515152;
  margin-left: 1rem;
  font-size: 18px;
  :hover {
    cursor: default;
  }
`;
export const Decoration2 = styled.div`
  font-family: "La Belle Aurore", cursive;
  color: #515152;
  margin-left: 2rem;
  font-size: 18px;
  :hover {
    cursor: default;
  }
`;

export const Decoration3 = styled.div`
  font-family: "La Belle Aurore", cursive;
  color: #515152;
  margin-left: 5rem;
  font-size: 18px;
  :hover {
    cursor: default;
  }
`;

export const Decoration4 = styled.div`
  font-family: "La Belle Aurore", cursive;
  color: #515152;
  margin-left: 5rem;
  margin-bottom: 1rem;
  font-size: 18px;
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

export const Decoration9 = styled.p`
  font-family: "La Belle Aurore", cursive;
  color: #515152;
  margin: 0;
  margin-left: 2rem;
  :hover {
    cursor: default;
  }
`;
export const Decoration10 = styled.p`
  font-family: "La Belle Aurore", cursive;
  margin: 0;
  margin-left: 1rem;
  color: #515152;
  font-size: 18px;
  :hover {
    cursor: default;
  }
`;

export const MyImg = styled.img`
  z-index: 2;
  border-radius: 15px;
  width: 490px;
  height: 590px;
  background-size: auto;
`;

export const Text = styled.p`
  color: #DCDCDC;
  font-size: 1em;
  margin-left: 5rem;
  margin-top: -1.3rem;
  margin-right: 10rem;
  letter-spacing: 1px;
  font-family: 'Bree Serif', serif;

  @media (max-width: 1400px) {
    width: 100%;
  }

  @media (max-width: 350px) {
    margin-right:0;
  }

`;

export const Border = styled.div`
  position: relative;
  width: 500px;
  height: 600px;
  background-color: black;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const ImgBorder = styled.span`
  position: absolute;
  inset: 5px;
  border-radius: 16px;
  background-color: black;
  z-index: 1;
`;

export const FixedB = styled.div`
display:flex;
flex-direction: column;
width:100%;
`