const React = require('react');
const { Component } = React;

class WordRelay extends Component {
    state = {
        text: 'Hello Webpack',
    };

    render() {
        return <h1>{this.state.text}</h1>; Í
    }
}

module.exports = WordRelay;
