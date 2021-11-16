import React from "react";
import { useGlobalContext } from "../../Context/Context";
import {
  StyledGamesMain,
  StyledGamesContainer,
} from "../../Pages/Games/Games.style";
import {
  StyledCountNews,
  StyledArticle,
  StyledPost,
  StyledPostDetails,
  StyledPostName,
  StyledPostLink,
} from "./PostNews.style";
import Loading from "../Loading/Loading";

const PostNews = ({ term }) => {
  const { news, loading } = useGlobalContext();

  if (loading) {
    return (
      <StyledGamesMain>
        <StyledGamesContainer>
          <Loading />
        </StyledGamesContainer>
      </StyledGamesMain>
    );
  }

  if (news.length < 1) {
    return (
      <StyledGamesMain>
        <StyledGamesContainer>
          <h2>Nenhuma publicação disponível.</h2>
        </StyledGamesContainer>
      </StyledGamesMain>
    );
  }

  const count = news.filter((item) => {
    if (term === "") {
      return item;
    } else if (item.title.toLowerCase().includes(term.toLowerCase())) {
      return item;
    }
  });

  return (
    <>
      <StyledCountNews>
        <strong>{count.length}</strong> resultado(s) encontrado(s)
      </StyledCountNews>
      {count.map((items) => {
        const { id, thumbnail, title, short_description, article_url } = items;
        return (
          <StyledArticle key={id}>
            <StyledPost>
              <img src={thumbnail} alt={title} />
              <StyledPostDetails>
                <StyledPostName>{title}</StyledPostName>
                <p>{short_description}</p>
              </StyledPostDetails>
              <StyledPostLink target='_blank' href={article_url}>
                Ver Mais
              </StyledPostLink>
            </StyledPost>
          </StyledArticle>
        );
      })}
    </>
  );
};

export default PostNews;
