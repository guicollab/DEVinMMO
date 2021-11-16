import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
::before,
::after,
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Montserrat, sans-serif;
}
.container {
  width: 80vw;
  margin: 0 auto;
}
`;

export default GlobalStyle;
