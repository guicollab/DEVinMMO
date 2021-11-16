import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.7rem;
  outline: 0;
  border-radius: ${(props) => props.theme.border.radius};
  border: ${(props) => props.theme.search.border};
  color: ${(props) => props.theme.search.color};
  background: ${(props) => props.theme.search.background};
  margin: 0.3rem 0;
`;
