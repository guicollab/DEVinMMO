import styled from "styled-components";

export const StyledFigure = styled.figure`
  & img {
    width: 100%;
    border-radius: 0.75rem;
    padding: 0.2rem;
  }
`;

export const StyledGalleryScreen = styled.div`
  display: flex;
  gap: 0.3rem;

  & img {
    width: 20%;
    margin-top: 0.5rem;
    gap: 0.5rem;
    border-radius: 0.75rem;
  }
`;
