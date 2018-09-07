import React from 'react';
import Header from './Header';
import BrewList from './BrewList';
import IrishCoffee from './IrishCoffee';
import Hefeweizen from './Hefeweizen';
import OrangeHefeweizen from './OrangeHefeweizen';
import { Switch, Route } from 'react-router-dom';
import background from '../img/background.jpg';

let mainSyles = {
  backgroundImage: `url(${background})`,
   backgroundRepeat: "no-repeat",
   backgroundSize: "cover",
   backgroundAttachment: "fixed",
   minHeight: "800px"
}
let mainBox = {
  marginRight: "auto",
  marginLeft: "auto",
  width: "400px",
  border: "solid",
  backgroundColor: "white",
  opacity: ".9"
}

function App(){
  return (
    <div style={mainSyles}>
    <div className="container">
      <Header/>
       <div style={mainBox}>
        <Switch>
          <Route exact path='/' component={BrewList} />
          <Route exact path='/IrishCoffee' component={IrishCoffee} />
          <Route exact path='/Hefeweizen' component={Hefeweizen} />
          <Route exact path='/OrangeHefeweizen' component={OrangeHefeweizen} />
        </Switch>
    </div>
    </div>
    </div>
  );
}

export default App;
