import React, { Component } from 'react';
import firebase from 'firebase'
import MenuItems from './components/Menu';
import './App.css';
import './bootstrap theme/bootstrap.min.css';

firebase.initializeApp({
  apiKey: "AIzaSyBd95MQtxM0qjsqcAb1b-JEXmmPnJ6Plh4",
  authDomain: "burgerqueen-d1101.firebaseapp.com",
  projectId: "burgerqueen-d1101"
})

const db = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true };
db.settings(settings);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: {
        breakfast: [
          {
            price: 5,
            item: 'Café americano'
          },
          {
            price: 7,
            item: 'Café con leche'
          },
          {
            price: 10,
            item: 'Sandwich de jamón y queso'
          },
          {
            price: 7,
            item: 'Jugo de frutas natural'
          }
        ],
        dinner: [
          {
            price: 10,
            item: 'Hamburguesa de res simple'
          },
          {
            price: 15,
            item: 'Hamburguesa de res doble'
          },
          {
            price: 10,
            item: 'Hamburguesa de pollo simple'
          },
          {
            price: 15,
            item: 'Hamburguesa de pollo doble'
          },
          {
            price: 10,
            item: 'Hamburguesa vegetariana simple'
          },
          {
            price: 15,
            item: 'Hamburguesa vegetariana doble'
          },
          {
            price: 5,
            item: 'Papas fritas'
          },
          {
            price: 5,
            item: 'Aros de cebolla'
          },
          {
            price: 5,
            item: 'Agua 500ml'
          },
          {
            price: 8,
            item: 'Agua 750ml'
          },
          {
            price: 7,
            item: 'Gaseosa 500ml'
          },
          {
            price: 10,
            item: 'Gaseosa 750ml'
          }
        ]
      },
      typefood: 'breakfast',
      order: {
        user: '',
        price: 0,
        items: {}
      }
    }
  }
  handleChange = (e) => {
    this.setState({
      typefood: e.target.name
    })
  }
  render() {
    const { typefood, food} = this.state;
    const size = Object.keys(food);
    return (
      <div>
        <header className="App-header bg-primary text-white">
          <h3 className=""> <img class= "logotype" src= "https://i.ibb.co/q7BZWSZ/logotype.png" alt= "logotype"></img><img class= "icon-logo" src= "https://i.ibb.co/hczsnnj/burger-1.png" alt= "icon-logo"></img></h3>
        </header>
        <button className="btn btn-primary m-2" name="breakfast" onClick={this.handleChange}>Desayuno</button>
        <button className="btn btn-primary m-2" name="dinner" onClick={this.handleChange}>Almuerzo/Cena</button>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7">
              <div className="row">
                {
                  size.length ?
                    food[typefood].map(({ item, price }) =>
                      <MenuItems name={item} price={price} key={item}/>)
                    : <span className="ml-3">Cargando menú ...</span>
                }
              </div>
            </div>
            <div className="col-md-5">
              <table className="table">
                <thead>
                <tr>
                    <td colSpan="2"><input className="form-control" type="text" placeholder="Nombre de Cliente"/></td>
                    <td colSpan="2"><button className="btn btn-success">Enviar a cocina</button></td>
                  </tr>
                  <tr className="text-center">
                    <th scope="col">Items</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center table-active">
                    <th>Total</th>
                    <th className="text-center" >S/.</th>
                    <td colSpan="2"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div >
    );
  }
}
export default App;