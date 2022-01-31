import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from '../components/Loading';

const url = 'https://thecocktaildb.com/api/json/v1/1/lookup.php?i=';

function SingleCocktail() {
  const [cocktail, setCocktail] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const getCocktail = async () => {
    setLoading(true);
    try {
      const response = await fetch(url + id);
      const { drinks } = await response.json();
      const {
        strDrink: name,
        strCategory: category,
        strAlcoholic: info,
        strGlass: glass,
        strInstructions: instructions,
        strDrinkThumb: image,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      } = drinks[0];

      const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      ];
      setCocktail({
        name,
        image,
        category,
        info,
        glass,
        instructions,
        ingredients,
      });
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  // Fetch Data
  useEffect(() => {
    getCocktail();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (!cocktail) {
    return (
      <h2 className='section-heading' style={{ marginTop: '100px' }}>
        no cocktail to display
      </h2>
    );
  }

  const { name, category, info, image, glass, instructions, ingredients } =
    cocktail;

  return (
    <section className='single-cocktail'>
      <header>
        <Link className='details-btn' to='/'>
          BACK HOME
        </Link>
        <h1 className='name'>{name}</h1>
      </header>

      <article className='center'>
        <div className='img-wrapper'>
          <img src={image} alt={name} />
        </div>
        <div className='m-info'>
          <p>
            <span className='title'>name: </span>
            <span className='more m-name'>{name}</span>
          </p>

          <p>
            <span className='title'>category: </span>
            <span className='more '>{category}</span>
          </p>

          <p>
            <span className='title'>info: </span>
            <span className='more '>{info}</span>
          </p>
          <p>
            <span className='title'>glass: </span>
            <span className='more '>{glass}</span>
          </p>
          <p>
            <span className='title'>instructions: </span>
            <span className='more '>{instructions}</span>
          </p>
          <p>
            <span className='title'>ingredients: </span>
            <span className='more '>
              {ingredients.map((ingr, ind) => {
                if (ingr) {
                  return <span key={ind}>{ingr} | </span>;
                }
              })}
            </span>
          </p>
        </div>
      </article>
    </section>
  );
}

export default SingleCocktail;
