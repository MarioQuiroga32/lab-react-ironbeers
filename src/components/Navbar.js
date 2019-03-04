import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
      <strong>IronHack</strong>
    </a>

    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>

       <div id="navbarBasicExample" class="navbar-menu">
    <div className="navbar-start">
    <NavLink className="navbar-item" activeClassName="is-active" exact to="/">Home</NavLink>
    <NavLink className="navbar-item" activeClassName="is-active" exact to="/beers">Beers</NavLink>
    <NavLink className="navbar-item" activeClassName="is-active" exact to="/random-beer">Random Beer</NavLink>
    <NavLink className="navbar-item" activeClassName="is-active" exact to="/new-beer">New Beer</NavLink>
    </div>
    </div>
     

    
  </div> 
</nav>
)

export default Navbar;