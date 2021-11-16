import React from "react";

const urlGame = "https://mmo-games.p.rapidapi.com/games";
const urlNews = "https://mmo-games.p.rapidapi.com/latestnews";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  /***************************************
   ************** States *****************
   ***************************************/
  const [loading, setLoading] = React.useState(true);
  const [games, setGames] = React.useState([]);
  const [news, setNews] = React.useState([]);
  const [isDark, setIsDark] = React.useState(false);
  const [comment, dispatch] = React.useReducer(commentsLocalStorage, [], () => {
    const getComments = localStorage.getItem("comments");
    return getComments ? JSON.parse(getComments) : [];
  });

  /***************************************
   ************* Get Games ***************
   ***************************************/

  const getGames = async () => {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-host": "mmo-games.p.rapidapi.com",
        "x-rapidapi-key": "331d95d5d4msh6c677a27b19e46ap14e809jsn0794cdac732d",
      },
    };
    setLoading(true);
    try {
      const response = await fetch(urlGame, options);
      const games = await response.json();
      setGames(games);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getGames();
  }, []);

  /***************************************
   ************* Comments ****************
   ***************************************/

  function commentsLocalStorage(state, action) {
    switch (action.type) {
      case "ADD_COMMENT":
        return [
          ...state,
          {
            id: Math.random().toString().slice(2),
            postID: action.id,
            ...action.comment,
          },
        ];
      default:
        return state;
    }
  }

  React.useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comment));
  }, [comment]);

  /***************************************
   ************* Get News ****************
   ***************************************/

  const getNews = async () => {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-host": "mmo-games.p.rapidapi.com",
        "x-rapidapi-key": "331d95d5d4msh6c677a27b19e46ap14e809jsn0794cdac732d",
      },
    };
    setLoading(true);
    try {
      const response = await fetch(urlNews, options);
      const news = await response.json();
      setNews(news);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getNews();
  }, []);

  /***************************************
   ************ Theme Color **************
   ***************************************/

  const changeTheme = () => {
    setIsDark((prevTheme) => !prevTheme);
  };

  const getFromLocalStorage = () => {
    const mode = localStorage.getItem("dark-mode");

    if (mode) {
      setIsDark(mode === "true");
    }
  };

  const setToLocalStorage = () => {
    return localStorage.setItem("dark-mode", isDark);
  };

  React.useEffect(getFromLocalStorage, []);
  React.useEffect(setToLocalStorage, [isDark]);

  /***************************************
   *********** Return Context *************
   ***************************************/

  return (
    <AppContext.Provider
      value={{
        loading,
        games,
        news,
        isDark,
        changeTheme,
        comment,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

/***************************************
 *********** Globa Context *************
 ***************************************/
export const useGlobalContext = () => {
  return React.useContext(AppContext);
};

export { AppContext, AppProvider };
