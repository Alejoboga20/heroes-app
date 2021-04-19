import React from 'react';
import HeroList from '../heroes/HeroList';

const publisher = 'DC Comics';

const DcScreen = () => {
  return (
    <div>
      <h1>Dc Screen</h1>
      <hr />

      <HeroList publisher={publisher} />
    </div>
  );
};

export default DcScreen;
