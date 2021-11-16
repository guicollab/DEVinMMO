import styled from "styled-components";

export const StyledGame = styled.main`
  html {
    ${(props) => props.theme.game.background};
  }
  background: ${(props) => props.theme.game.background};
  padding: 5rem 0;
`;

export const StyledGameContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  margin: 0 auto;
  gap: 1rem;
`;

export const StyledSingleGameContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  margin: 0 auto;
  padding: 1rem;
  box-shadow: ${(props) => props.theme.shadow.color};
  border-radius: 0.75rem;
  position: relative;
  background: ${(props) => props.theme.game.cBackground};
  border: ${(props) => props.theme.game.border};
`;

export const StyledSingleGameContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: -3.5rem auto 2rem;
  background: ${(props) => props.theme.game.bTitle};
  border-radius: 0.75rem;
  color: ${(props) => props.theme.game.cTitle};
  padding: 0 5rem 1rem;

  & h1 {
    margin-top: 0.6rem;
  }

  & span {
    margin-top: 0.1rem;
    font-size: 0.8rem;
  }

  @media (max-width: 768px) {
    & h1 {
      font-size: 1.5rem;
      margin-top: 1rem;
      color: ${(props) => props.theme.color.text};
    }

    & span {
      font-size: 0.6 rem;
      margin-top: 0.1rem;
    }
  }

  @media (max-width: 400px) {
    & h1,
    span {
      font-size: 1rem;
    }
  }
`;

export const StyledSingleGameInfo = styled.div`
  display: flex;
  margin: 1.5rem 0 1rem;
`;

export const StyledSingleGameTag = styled.div`
  width: 50%;
  padding: 0.4rem 0;

  & h4 {
    color: ${(props) => props.theme.color.text};
  }

  & p {
    color: ${(props) => props.theme.color.text};
  }
`;

export const StyledSingleGameDesc = styled.div`
  & h4 {
    margin-bottom: 1rem;
    color: ${(props) => props.theme.color.text};
  }

  & p {
    color: ${(props) => props.theme.color.text};
  }
`;

export const StyledSingleGameSystem = styled.div`
  margin-top: 2rem;
  background: ${(props) => props.theme.game.system};
  padding: 0.5rem;
  border-radius: 0.75rem;
  border: ${(props) => props.theme.game.bSystem};

  & h4 {
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme.color.text};
  }

  & ul {
    list-style: none;
  }

  & li {
    margin-bottom: 0.3rem;
    color: ${(props) => props.theme.color.text};
  }
`;
