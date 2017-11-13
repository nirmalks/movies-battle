import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import MovieCard from './MovieCard';

class HomePage extends Component {
    render() {
        return (
            <div>
                <Header />
                <MovieCard />
            </div>
        );
    }
}
export default HomePage;