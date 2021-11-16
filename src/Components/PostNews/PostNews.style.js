import styled from "styled-components";

export const StyledCountNews = styled.div`
  width: 100%;
  padding-bottom: 2rem;
  color: ${(props) => props.theme.color.text};
`;

export const StyledArticle = styled.article`
  margin: 0 auto 2rem;
  padding: 0;
  box-shadow: ${(props) => props.theme.shadow.color};
  border-radius: 0.75rem;
`;

export const StyledPost = styled.div`
  display: flex;
  background: ${(props) => props.theme.postNews.background};
  border: ${(props) => props.theme.postNews.border};
  padding: 0.5rem;
  border-radius: 0.75rem;
  position: relative;

  & img {
    border-radius: 0.75rem;
    margin-right: 0.6rem;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;

    & img {
      width: 100%;
      border-radius: 0.75rem;
      margin-right: 0.6rem;
    }
  }
`;

export const StyledPostDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0.5rem 0.5rem 0.5rem;

  & p {
    font-size: 0.87rem;
    color: ${(props) => props.theme.postNews.paragraph};
    line-height: 150%;
  }
`;

export const StyledPostTag = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledPostName = styled.div`
  font-size: 1.15rem;
  font-weight: 600;
  margin: 0.625rem 0;
  color: ${(props) => props.theme.color.text};
`;

export const StyledPostLink = styled.a`
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem 0 0.75rem 0;
  font-weight: 600;
  color: ${(props) => props.theme.link.color};
  background: ${(props) => props.theme.link.background};
  border: ${(props) => props.theme.link.border};
  position: absolute;
  right: 0;
  bottom: 0;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.link.hColor};
    background: ${(props) => props.theme.link.hBackgroundS};
  }

  @media (max-width: 768px) {
    position: relative;
    margin: 0 auto;
    border-radius: 0.75rem;
    margin: 2rem auto 1rem;
    text-align: center;

    &:hover {
      color: ${(props) => props.theme.link.hColor};
      background: ${(props) => props.theme.link.hBackgroundS};
    }
  }
`;
