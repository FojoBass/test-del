import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navHome = useNavigate();
  return (
    <section className='error'>
      <div className='center'>
        <h1>
          <span>Oops!</span> Dead end{' '}
          <button onClick={() => navHome('/')}>click to go back home</button>
        </h1>
      </div>
    </section>
  );
};

export default Error;
