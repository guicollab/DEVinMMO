import React from "react";
import {
  StyledErrorContainer,
  StyledErrorTitle,
  StyledErrorLink,
} from "./Error.style";

const Error = () => {
  return (
    <main>
      <StyledErrorContainer>
        <StyledErrorTitle>
          <h1>404!</h1>
          <h3>Página não encontrada.</h3>
        </StyledErrorTitle>
        <StyledErrorLink to='/'>Voltar Home</StyledErrorLink>
      </StyledErrorContainer>
    </main>
  );
};

export default Error;
