import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MainHeader,
  HeadTop,
  HeadMenu,
  HeadBottom,
  MenuItem,
  DivLogo,
  TopLogo,
  LogoMyImg,
  LogoMyName,
  TopWrite,

} from "./styled";
import { IconContext } from "react-icons";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import l6 from '../../assets/L6.png'
import leo from "../../assets/leo.jpg"
import { goToAbout, goToSkills, goToProjects, goToContact, goToHome } from "../../routes/Coordinator";

const Header = () => {
  let navigate = useNavigate();
  const [color1, setColor1] = useState("#909096")
  const [color2, setColor2] = useState("#909096")
  const [color3, setColor3] = useState("#909096")
  const [color4, setColor4] = useState("#909096")

  const mudarPagAbout = () => {
    setColor2("#909096")
    setColor3("#909096")
    setColor4("#909096")
    setColor1("#AD1111")
    goToAbout(navigate)
  }
  const mudarPagSkill = () => {
    setColor1("#909096")
    setColor3("#909096")
    setColor4("#909096")
    setColor2("#AD1111")
    goToSkills(navigate)
  }
  const mudarPagProject = () => {
    setColor1("#909096")
    setColor2("#909096")
    setColor4("#909096")
    setColor3("#AD1111")
    goToProjects(navigate)
  }
  const mudarPagContact = () => {
    setColor1("#909096")
    setColor2("#909096")
    setColor3("#909096")
    setColor4("#AD1111")
    goToContact(navigate)
  }
  const mudarPagHome = () => {
    setColor1("#909096")
    setColor2("#909096")
    setColor3("#909096")
    setColor4("#909096")
    goToHome(navigate)
  }

  return (
    <MainHeader>
      <HeadTop>
        <TopLogo>
          <LogoMyImg src={leo}/>
          <LogoMyName onClick={mudarPagHome}>Leozbroca</LogoMyName>
        </TopLogo>
        <TopWrite>Web Developer</TopWrite>
      </HeadTop>
      <HeadMenu>
        <MenuItem color={color1} onClick={mudarPagAbout}>About</MenuItem>
        <MenuItem color={color2} onClick={mudarPagSkill}>My Skills</MenuItem>
        <MenuItem color={color3} onClick={mudarPagProject}>Projects</MenuItem>
        <MenuItem color={color4} onClick={mudarPagContact}>Contact</MenuItem>
      </HeadMenu>
      <HeadBottom>
        <DivLogo href="https://www.linkedin.com/in/leozbroca" target="_blank">
          <FaLinkedinIn/>
        </DivLogo>
        <DivLogo href="https://www.github.com/leozbroca" target="_blank">
          <BsGithub/>
        </DivLogo>
        <DivLogo href="https://www.instagram.com/leozbroca" target="_blank">
          <AiFillInstagram/>
        </DivLogo>
      </HeadBottom>
    </MainHeader>
  );
};

export default Header;
