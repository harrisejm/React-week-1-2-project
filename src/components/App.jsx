import React from 'react';
import Error404 from './Error404';
import Header from './Header';
import BrewList from './BrewList';
import IrishCoffee from './IrishCoffee';
import Hefeweizen from './Hefeweizen';
import OrangeHefeweizen from './OrangeHefeweizen';
import NewBrewForm from './NewBrewForm';
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
  marginTop: "30px",
  marginRight: "auto",
  marginLeft: "auto",
  width: "500px",
  border: "solid",
  backgroundColor: "white",
  opacity: ".9"
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterBrewList: []
    };
    this.handleNewBrew = this.handleNewBrew.bind(this);
  }

  handleNewBrew(newBrew){
    var newBrewList = this.state.masterBrewList.slice();
    newBrewList.push(newBrew);
    this.setState({masterBrewList: newBrewList});
  }

  render(){
    return (
      <div style={mainSyles}>
        <Header/>
        <div className="container">
          <div style={mainBox}>
            <Switch>
              <Route exact path='/' render={()=><BrewList brewList={this.state.masterBrewList} />} />
              <Route exact path='/NewBrewForm' render={()=><NewBrewForm onNewBrewCreation={this.handleNewBrew} />} />
              <Route exact path='/IrishCoffee' component={IrishCoffee} />
              <Route exact path='/Hefeweizen' component={Hefeweizen} />
              <Route exact path='/OrangeHefeweizen' component={OrangeHefeweizen} />
              <Route component={Error404} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
