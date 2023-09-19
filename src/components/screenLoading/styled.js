import styled from "styled-components";

export const EmptyDiv = styled.div`
  display: flex;
`;

export const ContainerScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1d1d1d;
  height: 100%;
  min-height: 100%;
  width: 100%;
  position: fixed;
  margin-left: 10em;
  z-index: 6;
  overflow: hidden;
  font-family: "Bree Serif", serif;

  p {
    color: #909096;
    display: block;
  }

  @media (max-width: 800px) {
    margin: 0;
  }
`;

export const Loading = styled.div`
  width: 100%;
  height: 0.1em;
  background-color: #ad1111;
  animation: load 2000ms steps(100) normal;
  z-index: 4;

  @keyframes load {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;
export const LoadingBack = styled.div`
  width: 30%;
  height: 0.1em;
  background-color: #151515;
  position: absolute;
  z-index: 3;
`;

export const CentralL = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 30%;
`;

export const Photo = styled.img`
  width: 27em;
  height: 10em;
  @media (max-width: 800px) {
    width: 15em;
    height: 10em;
  }
`;
