import React from "react";
import { HiColorSwatch } from "react-icons/hi";
import { useGlobalContext } from "../../Context/Context";
import {
  StyledNavbarContainer,
  StyledLinkLogo,
  StyledLink,
  StyledButton,
} from "./NavBar.style";

const NavBar = () => {
  const { changeTheme } = useGlobalContext();
  return (
    <StyledNavbarContainer>
      <h1>
        <StyledLinkLogo to='/'>DEVinMMO</StyledLinkLogo>
      </h1>
      <ul>
        <li>
          <StyledLink to='/'>Games</StyledLink>
        </li>
        <li>
          <StyledLink to='/news'>News</StyledLink>
        </li>
        <li>
          <StyledButton onClick={() => changeTheme()}>
            <HiColorSwatch />
          </StyledButton>
        </li>
      </ul>
    </StyledNavbarContainer>
  );
};

export default NavBar;
