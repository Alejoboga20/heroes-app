import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import MarvelScreen from '../components/marvel/MarvelScreen';
import HeroScreen from '../components/heroes/HeroScreen';
import Navbar from '../components/ui/NavBar';
import DcScreen from '../components/dc/DcScreen';

const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div>
        <Switch>
          <Route exact path='/marvel' component={MarvelScreen} />
          <Route exact path='/dc' component={DcScreen} />
          <Route exact path='/hero/:heroId' component={HeroScreen} />

          <Redirect to='/marvel' />
        </Switch>
      </div>
    </>
  );
};

export default DashboardRoutes;
