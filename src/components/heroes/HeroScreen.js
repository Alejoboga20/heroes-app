import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getHeroesById } from '../../selectors/getHeroesById';

const HeroScreen = () => {
  const { heroId } = useParams();
  const hero = getHeroesById(heroId);

  if (!hero) {
    return <Redirect to='/' />;
  }

  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  } = hero;

  return (
    <div>
      <h1>Hero Screen</h1>
    </div>
  );
};

export default HeroScreen;
