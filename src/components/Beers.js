import React, { Component } from 'react';
import { listBeers } from '../services/ListBeers';
import { NavLink } from 'react-router-dom';

class Beers extends Component {
    state = {
        beers: [{
          _id: '',
          name: '',
          image_url: '',
          tagline: '',
          contributed_by: ''
        }],
        error: false
    }

    componentDidMount = () => {
        listBeers()
            .then(response => this.setState({ beers: response.data}))
            .catch(err => this.setState({ error: true }))
    }
    
    render = () => {
        if (this.state.error) {
            return (<h1>Error</h1>);
        } else {
            return (
                <div className="BeerList">
                    {this.state.beers.map(beer => (
                      <div className="BeerName"> 
                      <h1>{beer.name}</h1>
                        <NavLink activeClassName="is-active" exact to={`/beers/${this.state._id}`}>More Info</NavLink>
                        </div>
                    ))}
                </div>
            );
        }
    }
}

export default Beers;

