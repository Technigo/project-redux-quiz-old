import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <section className='main-container'>
      <h1>Worlds most amazing quiz</h1>
      <Link to='/quiz'>Start quiz</Link>
    </section>
  );
};

export default HomePage;
