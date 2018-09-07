import React from 'react';
import Header from './Header';
import BrewList from './BrewList';
import IrishCoffee from './IrishCoffee';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Header/>
        <Switch>
          <Route exact path='/' component={BrewList} />
          <Route exact path='/IrishCoffee' component={IrishCoffee} />
        </Switch>
    </div>
  );
}

export default App;
