import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledArticle = styled.article`
  display: flex;
  width: 250px;
  margin: 1rem auto;
  box-shadow: ${(props) => props.theme.shadow.color};
  border-radius: 0.75rem;
`;

export const StyledCard = styled.div`
  background: ${(props) => props.theme.cardGame.background};
  border: ${(props) => props.theme.cardGame.border};
  padding: 0.5rem;
  border-radius: 0.75rem;

  & img {
    width: 100%;
    object-fit: cover;
    border-radius: 0.75rem;
  }
`;

export const StyledCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0.5rem 0.5rem 0.5rem;

  & p {
    font-size: 0.87rem;
    color: ${(props) => props.theme.cardGame.paragraph};
    line-height: 150%;
  }
`;

export const StyledCardTag = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & span {
    padding: 0.25rem 0.5rem;
    border: ${(props) => props.theme.cardGame.sBorder};
    border-radius: 50px;
    font-size: 0.75rem;
    font-weight: 600;
    color: ${(props) => props.theme.cardGame.color};
  }
`;

export const StyledCardName = styled.div`
  font-size: 1.15rem;
  font-weight: 600;
  margin: 0.625rem 0;
  color: ${(props) => props.theme.color.text};
`;

export const StyledCardLink = styled(Link)`
  border: none;
  padding: 0.75rem 1.5rem;
  border: ${(props) => props.theme.cardGame.box};
  border-radius: ${(props) => props.theme.border.radius};
  font-weight: 600;
  color: ${(props) => props.theme.cardGame.lColor};
  background: ${(props) => props.theme.cardGame.lBackground};
  margin: 1rem auto 0;
  display: block;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.link.color};
    background: ${(props) => props.theme.cardGame.hBackgroundS};
  }
`;

export const StyledCountGames = styled.span`
  width: 100%;
  margin-bottom: 1.25rem;
  color: ${(props) => props.theme.color.text};
`;
