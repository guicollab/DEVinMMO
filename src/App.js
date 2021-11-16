import React from "react";
import { ThemeProvider } from "styled-components";
import { useGlobalContext } from "./Context/Context";
import Light from "./Styles/Light";
import Dark from "./Styles/Dark";
import NavLinks from "./Routes/NavLinks";
import GlobalStyle from "./Styles/GlobalStyles";

const App = () => {
  const { isDark } = useGlobalContext();
  return (
    <ThemeProvider theme={isDark ? Dark : Light}>
      <GlobalStyle />
      <NavLinks />
    </ThemeProvider>
  );
};

export default App;
