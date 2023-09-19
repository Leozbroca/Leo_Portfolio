import styled from "styled-components";

export const MainDiv = styled.div`
  margin: 0;
  padding: 0;
  background-color: #1d1d1d;
  height: 100%;
  min-height: 100vh;
`;

export const MainDivSub = styled.div`
  margin-left: 10rem;
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
      margin-top: 0;
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
      display: none;
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
      display: none;
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
`;

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

  @media (max-width: 500px) {
    font-size: 3em;
  }
  @media (max-width: 380px) {
    font-size: 2.2em;
  }
  @media (max-width: 350px) {
    margin-left: 3rem;
  }
`;

export const Text = styled.p`
  color: #dcdcdc;
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
  @media (max-width: 380px) {
    font-size: 0.8em;
  }
  @media (max-width: 350px) {
    margin-left: 3rem;
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
    width: 60%;
  }
  @media (max-width: 350px) {
    margin-left: 3rem;
    width: 70%;
  }
`;

export const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  .column {
    display: flex;
    flex-direction: row;
    @media (max-width: 500px) {
      flex-direction: column;
    }
  }

  .input {
    color: gray;
    font-size: 0.9rem;
    background-color: rgba(0, 0, 0, 0.1);
    width: 100%;
    box-sizing: border-box;
    padding-inline: 0.5em;
    padding-block: 0.7em;
    border: none;
    border-bottom: var(--border-height) solid var(--border-before-color);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
  }

  .input-border {
    position: absolute;
    background: var(--border-after-color);
    width: 0%;
    height: 2px;
    bottom: 0;
    left: 0;
    transition: width 0.3s cubic-bezier(0.6, -0.28, 0.735, 0.045);
  }

  .input:focus {
    outline: none;
  }

  .input:focus + .input-border {
    width: 100%;
  }

  .form-control-1 {
    position: relative;
    --width-of-input: 300px;

    width: 50%;
    @media (max-width: 500px) {
      width: 100%;
    }
  }
  .form-control-2 {
    position: relative;
    --width-of-input: 300px;

    margin-left: 20px;
    width: 50%;

    @media (max-width: 500px) {
      margin-left: 0;
      width: 100%;
    }
  }
  .form-control-3 {
    position: relative;
    --width-of-input: 300px;
  }
  .form-control-4 {
    position: relative;
    --width-of-input: 300px;

    .input {
      height: 200px;
      resize: none;
    }
  }

  .input-alt {
    font-size: 1.2rem;
    padding-inline: 1em;
    padding-block: 0.8em;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .input-border-alt {
    height: 3px;
    background: linear-gradient(90deg, #ff6464 0%, #ffbf59 50%, #47c9ff 100%);
    transition: width 0.4s cubic-bezier(0.42, 0, 0.58, 1);
  }

  .input-alt:focus + .input-border-alt {
    width: 100%;
  }
`;

export const DivFormAlign = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
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
  @media (max-width: 350px) {
    margin-left: 3rem;
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
  @media (max-width: 350px) {
    margin-left: 3rem;
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
  @media (max-width: 350px) {
    margin-left: 3rem;
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
  @media (max-width: 350px) {
    margin-left: 3rem;
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
  @media (max-width: 350px) {
    margin-left: 3rem;
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
    margin-top: 30px;
  }

  @media (max-width: 350px) {
    margin-left: 3rem;
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
