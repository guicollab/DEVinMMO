import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80vw;
  margin: 0 auto;

  & h1 {
    font-size: 1.7rem;
  }

  & ul {
    display: flex;
    list-style: none;
  }
`;

export const StyledLinkLogo = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.navBar.linkLogo};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.link.color};
  padding: 0.625rem;
  font-size: 0.8rem;
  text-transform: uppercase;
  &:hover {
    background: ${(props) => props.theme.link.hBackgroundS};
    border-radius: ${(props) => props.theme.border.radius};
  }
`;

export const StyledButton = styled.button`
  margin-left: 1rem;
  background: ${(props) => props.theme.mode.background};
  color: ${(props) => props.theme.mode.color};
  border: none;
  padding: 0.1rem;
  border-radius: ${(props) => props.theme.border.radius};
`;
