import React from "react";
import { useGlobalContext } from "../../Context/Context";
import { StyledGamesContainer } from "../../Pages/Games/Games.style";
import {
  StyledArticle,
  StyledCard,
  StyledCardDetails,
  StyledCardTag,
  StyledCardName,
  StyledCardLink,
  StyledCountGames,
} from "./CardGame.style";
import Loading from "../Loading/Loading";

const CardGame = ({ term }) => {
  const { games, loading } = useGlobalContext();

  if (loading) {
    return (
      <main>
        <StyledGamesContainer>
          <Loading />
        </StyledGamesContainer>
      </main>
    );
  }

  if (games.length < 1) {
    return (
      <main>
        <StyledGamesContainer>
          <h2>Nenhum game disponível.</h2>
        </StyledGamesContainer>
      </main>
    );
  }

  const count = games.filter((item) => {
    if (term === "") {
      return item;
    } else if (item.title.toLowerCase().includes(term.toLowerCase())) {
      return item;
    }
  });

  return (
    <>
      <StyledCountGames>
        <strong>{count.length}</strong> resultado(s) encontrado(s)
      </StyledCountGames>
      {count.map((items) => {
        const { id, thumbnail, title, platform, short_description } = items;
        return (
          <>
            <StyledArticle key={id}>
              <StyledCard>
                <img src={thumbnail} alt={title} />
                <StyledCardDetails>
                  <StyledCardTag>
                    <span>{platform}</span>
                  </StyledCardTag>
                  <StyledCardName>{title}</StyledCardName>
                  <p>{short_description.substring(0, 105)}...</p>
                  <StyledCardLink to={`/game/${id}`}>Ver Mais</StyledCardLink>
                </StyledCardDetails>
              </StyledCard>
            </StyledArticle>
          </>
        );
      })}
    </>
  );
};

export default CardGame;
