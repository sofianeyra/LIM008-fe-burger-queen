/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import './bootstrap-theme/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Menu />
      </div>
    );
  }
}

export default App;
