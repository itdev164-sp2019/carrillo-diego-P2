import React, { Component } from 'react';
import Header from './components/Header';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    title: "Weather Tracker",
    Ftitle: "DCarr-Media"
    };
  }
  render() {
    return (
     <Header title={this.state.title} />
    );
  }
}

export default App;

