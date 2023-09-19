import React from "react";
import { bool } from "prop-types";
import { StyledMenu, LogoImgMenu, MenuControl } from "./styles";
import { useNavigate } from "react-router-dom";
import {
  goToAbout,
  goToSkills,
  goToProjects,
  goToContact,
  goToHome,
} from "../../routes/Coordinator";
import logoImage from "../../assets/ImageMenu2.png";

const Menu = ({ open }) => {
  let navigate = useNavigate();

  return (
    <StyledMenu open={open}>
      <LogoImgMenu src={logoImage} onClick={() => goToHome(navigate)} />
      <MenuControl>
        <a onClick={() => goToAbout(navigate)}>
          <span role="img" aria-label="About me">
            &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
          </span>
          <a onClick={() => goToAbout(navigate)}>About me</a>
        </a>
        <a onClick={() => goToSkills(navigate)}>
          <span role="img" aria-label="My skills">
            &#x1f4b8;
          </span>
          <a onClick={() => goToSkills(navigate)}>My Skills</a>
        </a>
        <a onClick={() => goToProjects(navigate)}>
          <span role="img" aria-label="Projects">
            &#x1F355;
          </span>
          <a onClick={() => goToProjects(navigate)}>Projects</a>
        </a>
        <a onClick={() => goToContact(navigate)}>
          <span role="img" aria-label="Contact">
            &#x1f4e9;
          </span>
          <a onClick={() => goToContact(navigate)}>Contact</a>
        </a>
      </MenuControl>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
