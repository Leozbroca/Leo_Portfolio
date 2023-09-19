import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #181818;
  height: 100%;
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.5s ease-in-out;
  z-index: 4;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(150%)")};
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

  @media (max-width: 800px) {
    display: flex;
  }
  @media (max-width: 800px) {
    padding: 0;
    width: 100%;
  }

  @media (max-height: 550px) {
    flex-direction: row;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: gray;
    text-decoration: none;
    transition: color 0.3s linear;
    border-top: 1px solid #282828;

    :hover {
      cursor: pointer;
    }

    p {
      display: inline;
    }

    @media (max-width: 800px) {
      font-size: 1.5rem;
      text-align: center;
    }

    @media (max-width: 300px) {
      font-size: 1rem;
    }

    @media (max-height: 550px) {
      font-size: 0.8rem;
    }

    @media (max-height: 470px) {
      padding: 1.5rem 0;
    }

    @media (max-height: 400px) {
      border-bottom: 1px solid #282828;
    }

    &:hover {
      color: #ad1111;
    }
  }
`;

export const LogoImgMenu = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;

  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  pointer-events: none;

  @media (max-height: 550px) {
    margin-right: 100px;
  }
`;

export const MenuControl = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
