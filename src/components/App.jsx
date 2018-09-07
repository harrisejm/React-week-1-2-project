import React from 'react';
import Header from './Header';
import BrewList from './BrewList';
import IrishCoffee from './IrishCoffee';
import Hefeweizen from './Hefeweizen';
import OrangeHefeweizen from './OrangeHefeweizen';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Header/>
        <Switch>
          <Route exact path='/' component={BrewList} />
          <Route exact path='/IrishCoffee' component={IrishCoffee} />
          <Route exact path='/Hefeweizen' component={Hefeweizen} />
          <Route exact path='/OrangeHefeweizen' component={OrangeHefeweizen} />
        </Switch>
    </div>
  );
}

export default App;
