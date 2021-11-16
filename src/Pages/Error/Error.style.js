import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  margin: 0 auto;
  padding-top: 3rem;
  gap: 1rem;
`;

export const StyledErrorTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & h1 {
    ${(props) => props.theme.color.text};
  }

  & h3 {
    ${(props) => props.theme.color.text};
  }
`;

export const StyledErrorLink = styled(Link)`
  padding: 0.4rem 1rem;
  background: ${(props) => props.theme.link.background};
  color: ${(props) => props.theme.link.color};
  text-decoration: none;
  border-radius: 0.3rem;
  border: none;
  &:hover {
    background: ${(props) => props.theme.link.secondary};
  }
`;
