import React, { Component } from 'react';
import '../App.css';

// eslint-disable-next-line react/prefer-stateless-function
class Header extends Component {
  render() {
    return (
      <header className="App-header bg-primary text-white">
        <h3>
          <img className="logotype" src="https://i.ibb.co/q7BZWSZ/logotype.png" alt="logotype" />
          <img className="icon-logo" src="https://i.ibb.co/hczsnnj/burger-1.png" alt="icon-logo" />
        </h3>
      </header>
    );
  }
}

export default Header;
