import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Orders from './components/Orders';
import './bootstrap-theme/bootstrap.min.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Menu />
        <Orders />
      </div>
    );
  }
}

export default App;
