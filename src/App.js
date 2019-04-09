import React, { Component } from 'react';
import firebase from 'firebase'
import MenuItems from './components/Menu';
import './App.css';
import './responsive.css';
import './bootstrap theme/bootstrap.min.css';

firebase.initializeApp({
  apiKey: "AIzaSyBd95MQtxM0qjsqcAb1b-JEXmmPnJ6Plh4",
  authDomain: "burgerqueen-d1101.firebaseapp.com",
  projectId: "burgerqueen-d1101"
})

const db = firebase.firestore();
const settings = {/* your settings... */};
db.settings(settings);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: {
        breakfast: [
          {
            image: 'https://i.ibb.co/5F2TwdR/american-coffee.jpg',
            price: 5,
            item: 'Café americano',
            quantity: 0
          },
          {
            image: 'https://i.ibb.co/bgSMs3t/coffee-with-milk.jpg',
            price: 7,
            item: 'Café con leche',
            quantity: 0
          },
          {
            image: 'https://i.ibb.co/ZBQ9MkM/sandwich-cheese.jpg',
            price: 10,
            item: 'Sandwich de jamón y queso',
            quantity: 0
          },
          {
            image: 'https://i.ibb.co/Qb1Y5d5/fruit-juice.jpg',
            price: 7,
            item: 'Jugo de frutas natural',
            quantity: 0
          }
        ],
        dinner: [
          {
            image: 'https://i.ibb.co/Byk2NQv/simple-burger.jpg',
            price: 10,
            item: 'Hamburguesa de res simple',
          },
          {
            image: 'https://i.ibb.co/whVWs1H/doble-burger.jpg',
            price: 15,
            item: 'Hamburguesa de res doble',
          },
          {
            image: 'https://i.ibb.co/Sr81jZ8/chicken-burger.jpg',
            price: 10,
            item: 'Hamburguesa de pollo simple',
          },
          {
            image: 'https://i.ibb.co/tq67cRR/doble-chicken-burger.jpg',
            price: 15,
            item: 'Hamburguesa de pollo doble',
          },
          {
            image: 'https://i.ibb.co/HgQg8S6/vegetarian-burger.jpg',
            price: 10,
            item: 'Hamburguesa vegetariana simple',
          },
          {
            image: 'https://i.ibb.co/T2vJ99Y/doble-vegetarian-burger.jpg',
            price: 15,
            item: 'Hamburguesa vegetariana doble',
          },
          {
            image: 'https://i.ibb.co/vhJ4bXr/onion-rings.jpg',
            price: 5,
            item: 'Papas fritas',
          },
          {
            image: 'https://i.ibb.co/qyMkyv8/fried.jpg',
            price: 5,
            item: 'Aros de cebolla',
          },
          {
            image: 'https://i.ibb.co/hL2nMtx/agua-500.jpg',
            price: 5,
            item: 'Agua 500ml',
          },
          {
            image: 'https://i.ibb.co/3sBZQpf/agua-750.jpg',
            price: 8,
            item: 'Agua 750ml',
          },
          {
            image: 'https://i.ibb.co/WxhvRWt/gaseosa-500ml.jpg',
            price: 7,
            item: 'Gaseosa 500ml',
          },
          {
            image: 'https://i.ibb.co/PZ8pK7x/gaseosa-750ml.jpg',
            price: 10,
            item: 'Gaseosa 750ml',
          }
        ],
        extras: [
          {
            image: 'https://i.ibb.co/LxLN974/cheese.jpg',
            price: 1,
            item: 'Queso',
          },
          {
            image: 'https://i.ibb.co/23t6sPP/huevo.jpg',
            price: 1,
            item: 'Huevo',
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
    const {typefood, food} = this.state;
    const size = Object.keys(food);
    return (
      <div>
        <header className="App-header bg-primary text-white">
          <h3><img className="logotype" src="https://i.ibb.co/q7BZWSZ/logotype.png" alt="logotype"></img><img className= "icon-logo" src= "https://i.ibb.co/hczsnnj/burger-1.png" alt= "icon-logo"></img></h3>
          <p className = "fa-sign-out log-out-container">Cerrar sesión</p>
        </header>
        <button className="btn btn-primary m-3" name="breakfast" onClick={this.handleChange}>Desayuno</button>
        <button className="btn btn-primary m-3" name="dinner" onClick={this.handleChange}>Almuerzo/Cena</button>
        <button className="btn btn-primary m-3" name="extras"onClick={this.handleChange}>Extras</button>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7">
              <div className="row">
                {
                  size.length ?
                    food[typefood].map(({ item, price, image }) =>
                      <MenuItems name={item} price={price} img={image} key={item}/>)
                    : <span className="ml-3">Loading menu</span>
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
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center table-active">
                    <th>Total</th>
                    <th className="text-center">S/.</th>
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