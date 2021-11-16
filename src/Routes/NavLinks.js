import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Games from "../Pages/Games/Games";
import Game from "../Pages/Game/Game";
import News from "../Pages/News/News";
import Error from "../Pages/Error/Error";
import Header from "../Components/Header/Header";

const NavLinks = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Games />} />
        <Route path='/game/:id' element={<Game />} />
        <Route path='/news' element={<News />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
};

export default NavLinks;
