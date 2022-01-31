import React, { useContext, useState, useEffect } from 'react';

const AppContext = React.createContext();
const url = 'https://thecocktaildb.com/api/json/v1/1/search.php?s=';

export const AppProvider = ({ children }) => {
  // UseStates
  const [cocktails, setCocktails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('f');

  //FUNCTIONS
  // Fetch Cocktails
  const getCocktails = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url + searchTerm);
      const data = await response.json();
      const newCocktails = data.drinks
        ? data.drinks.map((item) => {
            return {
              id: item.idDrink,
              type: item.strAlcoholic,
              image: item.strDrinkThumb,
              name: item.strDrink,
              glass: item.strGlass,
            };
          })
        : [];
      setCocktails(newCocktails);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  // UseEffect for Fetching
  useEffect(() => {
    getCocktails();
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{
        cocktails,
        setCocktails,
        isLoading,
        setIsLoading,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
