import React from 'react';
import { useGlobalContext } from '../context';

const Loading = () => {
  return (
    <article className='loading-section'>
      <div className='bar1'></div>
      <div className='bar2'></div>
      <div className='bar3'></div>
    </article>
  );
};

export default Loading;
