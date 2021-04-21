import React from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router';
import { heroes } from '../../data/heroes';
import useForm from '../../hooks/useForm';
import HeroCard from '../heroes/HeroCard';

const SearchScreen = ({ history }) => {
  const [formValues, handleInputChange] = useForm({ searchText: '' });
  const { searchText } = formValues;

  const location = useLocation();
  const { q } = queryString.parse(location.search);

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${searchText}`);
  };

  const heroesFiltered = heroes;

  return (
    <div>
      <h1>Search Screen</h1>
      <hr />

      <div className='row'>
        <div className='col-5'>
          <h4>Search Form</h4>
          <hr />

          <form onSubmit={handleSearch}>
            <input
              type='text'
              placeholder='Find your hero'
              className='form-control'
              autoComplete='off'
              name='searchText'
              value={searchText}
              onChange={handleInputChange}
            />
            <button
              type='submit'
              className='btn m-1 btn-block btn-outline-primary'
            >
              Search
            </button>
          </form>
        </div>

        <div className='col-7'>
          <h4>Results</h4>
          <hr />
          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
