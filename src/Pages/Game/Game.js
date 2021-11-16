import React from "react";
import Loading from "../../Components/Loading/Loading";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Form from "../../Components/Form/Form";
import Gallery from "../../Components/Gallery/Gallery";
import {
  StyledGame,
  StyledGameContainer,
  StyledSingleGameContainer,
  StyledSingleGameContainerTitle,
  StyledSingleGameInfo,
  StyledSingleGameDesc,
  StyledSingleGameSystem,
  StyledSingleGameTag,
} from "./Game.style";

const urlSingleGame = "https://mmo-games.p.rapidapi.com/game?id=";

const Game = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [game, setGame] = React.useState(null);

  //const strippedString = originalString.replace(/(<([^>]+)>)/gi, "");

  const getSingleGame = React.useCallback(async () => {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-host": "mmo-games.p.rapidapi.com",
        "x-rapidapi-key": "331d95d5d4msh6c677a27b19e46ap14e809jsn0794cdac732d",
      },
    };

    setLoading(true);
    try {
      const response = await fetch(`${urlSingleGame}${id}`, options);
      const game = await response.json();
      if (game) {
        setGame(game);
      } else {
        setGame(null);
      }
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  }, [id]);

  React.useEffect(() => {
    getSingleGame();
  }, [id, getSingleGame]);

  if (loading) {
    return (
      <StyledGame>
        <StyledGameContainer>
          <Loading />
        </StyledGameContainer>
      </StyledGame>
    );
  }

  if (!game) {
    return (
      <StyledGame>
        <StyledGameContainer>
          <h2>Nenhum game disponível.</h2>
        </StyledGameContainer>
      </StyledGame>
    );
  }

  const {
    title,
    release_date,
    screenshots,
    genre,
    platform,
    description,
    minimum_system_requirements: r,
  } = game;

  return (
    <StyledGame>
      <StyledSingleGameContainer key={id}>
        <StyledSingleGameContainerTitle>
          <h1>{title}</h1>
          <span>
            <FaRegCalendarAlt style={{ marginRight: "0.2rem" }} />
            {new Date(release_date).toLocaleDateString("pt-BR", {
              timeZone: "UTC",
            })}
          </span>
        </StyledSingleGameContainerTitle>
        <Gallery images={screenshots} />
        <StyledSingleGameInfo>
          <StyledSingleGameTag>
            <h4>Generos:</h4>
            <p>{genre}</p>
          </StyledSingleGameTag>
          <StyledSingleGameTag>
            <h4>Plataforma:</h4>
            <p>{platform}</p>
          </StyledSingleGameTag>
        </StyledSingleGameInfo>
        <StyledSingleGameDesc>
          <h4>Descrição:</h4>
          <p>{description.replace(/(<([^>]+)>)/gi, "")}</p>
        </StyledSingleGameDesc>
        <StyledSingleGameSystem>
          <h4>Requisitos do Sistema:</h4>
          <ul>
            <li>
              <strong>Sistema Operacional:</strong> {r.os}
            </li>
            <li>
              <strong>Processador:</strong> {r.processor}
            </li>
            <li>
              <strong>Memória:</strong> {r.memory}
            </li>
            <li>
              <strong>Gráficos:</strong> {r.graphics}
            </li>
            <li>
              <strong>Espaço em disco:</strong> {r.storage}
            </li>
          </ul>
        </StyledSingleGameSystem>
        <Form postID={id} />
      </StyledSingleGameContainer>
    </StyledGame>
  );
};

export default Game;
