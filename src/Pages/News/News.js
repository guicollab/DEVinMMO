import React from "react";
import PostNews from "../../Components/PostNews/PostNews";
import {
  StyledNews,
  StyledPostContainer,
  StyledFormContainer,
  StyledInput,
} from "./News.style";

const News = () => {
  const [searchNews, setSearchNews] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <StyledNews>
      <div className='container'>
        <div>
          <StyledFormContainer onSubmit={handleSubmit}>
            <StyledInput
              type='text'
              value={searchNews}
              placeholder='Pesquisar...'
              onChange={(e) => setSearchNews(e.target.value)}
            />
          </StyledFormContainer>
        </div>
        <StyledPostContainer>
          <PostNews term={searchNews} />
        </StyledPostContainer>
      </div>
    </StyledNews>
  );
};

export default News;
