import React, { useRef } from 'react';
import { useGlobalContext } from '../context';

const Search = () => {
  const searchRef = useRef(null);
  const { setSearchTerm } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  React.useEffect(() => {
    searchRef.current.focus();
  }, []);

  return (
    <article className='search-section'>
      <form className='search-form' onSubmit={handleSubmit}>
        <label htmlFor='search'>search your favourite cocktail</label>
        <input
          type='text'
          id='search'
          ref={searchRef}
          onChange={() => setSearchTerm(searchRef.current.value)}
        />
      </form>
    </article>
  );
};

export default Search;
