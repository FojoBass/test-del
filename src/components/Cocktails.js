import React from 'react';
import { useGlobalContext } from '../context';
import Cocktail from './Cocktail';
import Loading from '../components/Loading';

const Cocktails = () => {
  const { isLoading, cocktails } = useGlobalContext();

  if (isLoading) {
    return (
      <section className='cocktails'>
        <Loading />
      </section>
    );
  }

  if (cocktails.length < 1) {
    return (
      <section className='cocktails'>
        <h1 className='nil-search'>
          no cocktails matched your search criteria
        </h1>
      </section>
    );
  }

  return (
    <section className='cocktails'>
      <h1 className='section-heading'>cocktails</h1>
      <div className='center'>
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Cocktails;
