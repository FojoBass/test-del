import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <div className='center'>
        <p className='logo'>
          <Link to='/'>
            The<span>Cocktail</span>DB
          </Link>
        </p>

        <ul className='nav-links'>
          <li>
            <Link to='/' className='nav-link'>
              home
            </Link>
          </li>
          <li>
            <Link to='/about' className='nav-link'>
              about
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
