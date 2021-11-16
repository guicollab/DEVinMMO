import styled from "styled-components";

export const StyledHeader = styled.header`
  background: ${(props) => props.theme.header.background};
  height: 80px;
  line-height: 80px;
  border-bottom: ${(props) => props.theme.header.bBottom};
`;
