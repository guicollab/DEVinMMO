import React from "react";
import CardGame from "../../Components/CardGame/CardGame";
import {
  StyledGamesMain,
  StyledGamesContainer,
  StyledGamesGameList,
  StyledFormContainer,
  StyledInput,
} from "./Games.style";

const Home = () => {
  const [searchGame, setSearchGame] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <StyledGamesMain>
      <StyledGamesContainer>
        <div>
          <StyledFormContainer onSubmit={handleSubmit}>
            <StyledInput
              type='text'
              value={searchGame}
              placeholder='Pesquisar...'
              onChange={(e) => setSearchGame(e.target.value)}
            />
          </StyledFormContainer>
        </div>
        <StyledGamesGameList>
          <CardGame term={searchGame} />
        </StyledGamesGameList>
      </StyledGamesContainer>
    </StyledGamesMain>
  );
};

export default Home;
