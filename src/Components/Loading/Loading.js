import React from "react";
import { StyledLoadingContainer } from "./Loading.style";
import load from "./img/loading.gif";

const Loading = () => {
  return (
    <section>
      <StyledLoadingContainer>
        <img src={load} alt='Loading' />
      </StyledLoadingContainer>
    </section>
  );
};

export default Loading;
