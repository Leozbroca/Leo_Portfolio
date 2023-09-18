import styled from "styled-components";

export const MainDiv = styled.div`
  margin: 0;
  padding: 0;
  background-color: #1d1d1d;
  height: 100%;
  min-height: 100vh;

  
`;


export const MainDivSub = styled.div`
margin-left:10rem;
display: flex;
  flex-direction: row;

  @media (max-width: 1400px) {
    flex-direction: column;
  }

  .google-map {
    width: 50%;
    height: 100%;
    position: fixed;
    right: 0;

    @media (max-width: 1700px) {
      width: 45%;
    }
    @media (max-width: 1450px) {
      width: 40%;
    }
    @media (max-width: 1400px) {
      position: relative;
      width: 100%;
      margin-top: 80px;
      justify-content: center;
      align-items: center;
      height: 50%;
    }
    @media (max-width: 450px) {
      margin-top:0;
    }
  }
  .google-map iframe {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    border: none;

    @media (max-width: 1400px) {
      width: 80%;
    }

    @media (max-width: 450px) {
      display:none;
    }
  }
  .map-content {
    background-color: black;
    color: #f3f3f3;
    position: absolute;
    top: 50px;
    left: 10px;
    opacity: 0.9;
    font-family: "Bree Serif", serif;

    @media (max-width: 1400px) {
      left: 12%;
    }
    @media (max-width: 450px) {
      display:none;
    }

    p {
      font-size: 16px;
      margin-top: 0;
    }

    .InnerInfo {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 20px;

      p {
        padding: 0;
        margin: 0px 0px 0px 3px;
      }
    }

    padding: 20px;
  }

  @media (max-width: 800px) {
    margin-left: 0px;
  }
`

export const Main1 = styled.div`
  margin: 0;
  padding: 0;
  background-color: #1d1d1d;
  height: 100%;
  width: 50%;
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
  background-color: #1d1d1d;
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

  .email {
    display: inline;
    color: #ad1111;
  }

  @media (max-width: 1400px) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  color: #ad1111;
  font-size: 4em;
  margin: 0;
  padding: 0;
  margin-left: 5rem;
  font-family: "Righteous", cursive;
`;

export const Text = styled.p`
  color: #DCDCDC;
  font-size: 1em;
  margin-left: 5rem;
  margin-top: -1.3rem;
  margin-right: 10rem;
  letter-spacing: 1px;
  font-family: "Bree Serif", serif;
  @media (max-width: 1400px) {
    width: 80%;
  }
  @media (max-width: 450px) {
    width: 60%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 70%;
  padding: 0;
  margin: 0;
  margin-left: 5em;
  margin-top: -1rem;

  @media (max-width: 1400px) {
    width: 60%;
  }

  @media (max-width: 1000px) {
    width: 80%;
  }

  @media (max-width: 600px) {
    width: 70%;
  }
 
  @media (max-width: 400px) {
    width: 50%;
  }
`;

export const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const DivFormAlign = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width:100%;
`;

export const StyledInputs = styled.div`
  display:flex;
  flex-direction:row;
  justify-content: space-between;

@media (max-width: 450px) {
  flex-direction:column;
}

`
export const StyledInput1 = styled.input`
  min-width:50%;
  height: 3em;
  background-color: #2b2b2b;
  border: 0;
  padding-left: 10px;
  color: #8d8d8d;
  letter-spacing: 1px;
  border-top: 2px solid #2b2b2b;
  border-bottom: 2px solid #2b2b2b;
  margin-bottom:10px;

  :focus {
    box-shadow: 0 0 0 0;
    outline: 0;
    border-bottom: 2px solid #ad1111;
  }

`;

export const StyledInput2 = styled.input`
  min-width:50%;
  height: 3em;
  background-color: #2b2b2b;
  border: none;
  padding-left: 10px;
  color: #8d8d8d;
  letter-spacing: 1px;
  border-top: 2px solid #2b2b2b;
  border-bottom: 2px solid #2b2b2b;
  margin-bottom:10px;

  :focus {
    box-shadow: 0 0 0 0;
    outline: 0;
    border-bottom: 2px solid #ad1111;
  }

`;

export const StyledInput3 = styled.input`
  min-width: 50%;
  height: 3em;
  background-color: #2b2b2b;
  padding-left: 10px;
  color: #8d8d8d;
  letter-spacing: 1px;
  border: none;
  border-top: 2px solid #2b2b2b;
  border-bottom: 2px solid #2b2b2b;

  :focus {
    box-shadow: 0 0 0 0;
    outline: 0;
    border-bottom: 2px solid #ad1111;
  }

  input:focus::-webkit-input-placeholder {
    color: transparent;
  }
`;

export const StyledInput4 = styled.textarea`
  display: flex;
  justify-content: flex-start;
  height: 8em;
  background-color: #2b2b2b;
  padding-left: 10px;
  color: #8d8d8d;
  letter-spacing: 1px;
  margin-top: 10px;
  border: none;
  border-top: 2px solid #2b2b2b;
  border-bottom: 2px solid #2b2b2b;
  padding-top: 20px;
  font-family: "Open Sans", sans-serif;
  max-height: 8em;
  min-height: 8em;
  min-width: 5.5em;

  :focus {
    box-shadow: 0 0 0 0;
    outline: 0;
    border-bottom: 2px solid #ad1111;
  }
`;

export const StyledInput5 = styled.button`
  width: 10rem;
  height: 3rem;
  border: none;
  background-color: transparent;
  color: red;
  text-align: center;
  font-size: 1.4em;
  border: 1px solid #ad1111;
  margin-top: 10px;
  /* margin-right: 7.5rem; */
  transition: 0.5s;
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0003);

  :hover {
    background-color: #ad1111;
    color: #111;
    box-shadow: 0 0 20px #ad1111;
    transition-delay: 0s;
    cursor: pointer;
  }
  :active {
    opacity: 0.5;
    box-shadow: 0 0 10px #ad1111;
  }
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
  :hover {
    cursor: default;
  }
`;
export const Decoration5 = styled.p`
  font-family: "La Belle Aurore", cursive;
  color: #515152;
  font-size: 18px;
  margin-left: 5rem;
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

export const Decoration7 = styled.p`
  font-family: "La Belle Aurore", cursive;
  color: #515152;
  font-size: 18px;
  margin-left: 5rem;
  :hover {
    cursor: default;
  }
`;
export const Decoration8 = styled.p`
  font-family: "La Belle Aurore", cursive;
  color: #515152;
  font-size: 18px;
  margin-left: 5rem;
  margin-top: -3rem;
  :hover {
    cursor: default;
  }

  @media (max-width: 400px) {
   margin-top:30px;
  }
`;
export const Decoration9 = styled.p`
  font-family: "La Belle Aurore", cursive;
  color: #515152;
  margin-left: 2rem;
  font-size: 18px;
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
export const TitleCV = styled.h2`
  color: #ad1111;
  font-size: 4em;
  margin-left: 5rem;
  margin-top: 9rem;
`;

export const Cv_photo = styled.img`
  width: 20em;
  height: 30em;
  filter: blur(1px) grayscale(100%);
  border: 5px solid black;
  margin-left: 6rem;
`;

export const Button_CV = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  font-family: "La Belle Aurore", cursive;
  font-size: 30px;
  font-weight: bold;
  margin-left: 12.5rem;
  margin-top: 31rem;
  :hover {
    text-decoration: underline;
    cursor: pointer;
    transition: 1s;
  }
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
  font-size: 18px;
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
