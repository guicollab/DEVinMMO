import styled from "styled-components";

export const StyledNews = styled.main`
  html {
    ${(props) => props.theme.news.background};
  }
  background: ${(props) => props.theme.news.background};
`;

export const StyledPostContainer = styled.div`
  padding-bottom: 5rem;
`;

export const StyledFormContainer = styled.form`
  width: 100%;
  padding: 3.125rem 0 1.25rem;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.7rem;
  outline: 0;
  border-radius: ${(props) => props.theme.border.radius};
  border: ${(props) => props.theme.search.border};
  background: ${(props) => props.theme.search.background};
  color: ${(props) => props.theme.search.color};
`;
