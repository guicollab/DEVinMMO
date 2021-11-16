import styled from "styled-components";

export const StyledGamesMain = styled.main`
  html {
    ${(props) => props.theme.games.bGames};
  }
  background: ${(props) => props.theme.games.bGames};
`;

export const StyledGamesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  margin: 0 auto;
  gap: 1rem;
`;

export const StyledFormContainer = styled.form`
  width: 100%;
  margin-top: 3.125rem;
`;

export const StyledGamesGameList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.7rem;
  outline: 0;
  border-radius: ${(props) => props.theme.border.radius};
  border: ${(props) => props.theme.search.border};
  color: ${(props) => props.theme.search.color};
  background: ${(props) => props.theme.search.background};
`;
