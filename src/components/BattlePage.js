import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

class BattlePage extends Component {
    render() {
        return (
            <div>
                <Header />
                <div>hello battle!</div>
            </div>
        );
    }
}
export default BattlePage;