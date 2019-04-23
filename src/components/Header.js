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
        <button className="logOut btn-primary" type="button">
          {' '}
          <img src="https://i.ibb.co/NYTMVvf/logout-2.png" alt="logOut" />
          {' '}
          CERRAR SESIÓN
        </button>
      </header>
    );
  }
}

export default Header;
