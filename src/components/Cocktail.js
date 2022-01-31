import React from 'react';
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';

function Cocktail({ name, glass, image, type, id }) {
  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      <div className='more-info'>
        <h1 className='name'>{name}</h1>
        <h4 className='glass'>{glass}</h4>
        <p className='type'>{type}</p>
        <Link to={`/cocktail/${id}`} className='details-btn'>
          details
        </Link>
      </div>
    </article>
  );
}

export default Cocktail;
