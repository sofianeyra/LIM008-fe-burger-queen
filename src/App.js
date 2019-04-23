import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Menu from './components/Menu';
import Orders from './components/Orders';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Header />
        </div>
        <div className="container">
          <div className="row mt-8">

            <div className="col-md-8 text-center">
              <Menu onAddTodo={this.handleAddTodo} />
            </div>

            <div className="col-md-4">
              <Orders coleccionOrders={this.state.orders} eliminar={this.removeTodo} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
