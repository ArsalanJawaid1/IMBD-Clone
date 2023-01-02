import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='Header' >
        <Link to="/" > <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png' alt='logo' /> </Link>
        <Link to="/movies/Popular" className='Popular'> Popular </Link>
        <Link to="/movies/Top_rated" className='top_rated'> Top Rated  </Link>
        <Link to="/movies/Upcoming" className='Upcoming'> Upcoming  </Link>
    </div>
  )
}

export default Header;