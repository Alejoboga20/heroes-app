import React from 'react';
import HeroList from '../heroes/HeroList';

const publisher = 'Marvel Comics';

const MarvelScreen = () => {
  return (
    <div>
      <h1>MarvelScreen</h1>
      <hr />

      <HeroList publisher={publisher} />
    </div>
  );
};

export default MarvelScreen;
