import React, { Component } from 'react';
import { listBeers } from '../services/ListBeers';

class Beers extends Component {
    state = {
        beers: [{
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
                        <h1>{beer.name}</h1>
                    ))}
                </div>
            );
        }
    }
}

export default Beers;

