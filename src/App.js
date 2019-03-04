import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

import Home from './components/Home'



import { Switch, Route } from 'react-router-dom';
import RandomBeers from './components/RandomBeers';
import Beers from './components/Beers';
import NewBeers from './components/NewBeers';



class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar/>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/beers' component={Beers}/>
      <Route exact path='/random-beer' component={RandomBeers}/>
      <Route exact path='/new-beer' component={NewBeers}/>

    </Switch>
    </div>
    


      );
  }
}

export default App;
