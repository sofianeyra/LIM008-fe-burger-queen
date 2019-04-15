import React, { Component } from 'react';
import firebase from 'firebase'
import MenuItems from './components/Menu';
import AddItem from './components/AddItem';
import './App.css';
import './responsive.css';
import './bootstrap-theme/bootstrap.min.css';

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
            id: 0,
            image: 'https://i.ibb.co/5F2TwdR/american-coffee.jpg',
            price: 5,
            item: 'Café americano',
            quantity: 0
          },
          {
            id: 1,
            image: 'https://i.ibb.co/bgSMs3t/coffee-with-milk.jpg',
            price: 7,
            item: 'Café con leche',
            quantity: 0
          },
          {
            id: 2,
            image: 'https://i.ibb.co/ZBQ9MkM/sandwich-cheese.jpg',
            price: 10,
            item: 'Sandwich de jamón y queso',
            quantity: 0
          },
          {
            id: 3,
            image: 'https://i.ibb.co/Qb1Y5d5/fruit-juice.jpg',
            price: 7,
            item: 'Jugo de frutas natural',
            quantity: 0
          }
        ],
        dinner: [
          {
            id: 4,
            image: 'https://i.ibb.co/Byk2NQv/simple-burger.jpg',
            price: 10,
            item: 'Hamburguesa de res simple',
          },
          {
            id: 5,
            image: 'https://i.ibb.co/whVWs1H/doble-burger.jpg',
            price: 15,
            item: 'Hamburguesa de res doble',
          },
          {
            id: 6,
            image: 'https://i.ibb.co/Sr81jZ8/chicken-burger.jpg',
            price: 10,
            item: 'Hamburguesa de pollo simple',
          },
          {
            id: 7,
            image: 'https://i.ibb.co/tq67cRR/doble-chicken-burger.jpg',
            price: 15,
            item: 'Hamburguesa de pollo doble',
          },
          {
            id: 8,
            image: 'https://i.ibb.co/HgQg8S6/vegetarian-burger.jpg',
            price: 10,
            item: 'Hamburguesa vegetariana simple',
          },
          {
            id: 9,
            image: 'https://i.ibb.co/T2vJ99Y/doble-vegetarian-burger.jpg',
            price: 15,
            item: 'Hamburguesa vegetariana doble',
          },
          {
            id: 10,
            image: 'https://i.ibb.co/qyMkyv8/fried.jpg',
            price: 5,
            item: 'Papas fritas',
          },
          {
            id: 11,
            image: 'https://i.ibb.co/vhJ4bXr/onion-rings.jpg',
            price: 5,
            item: 'Aros de cebolla',
          },
          {
            id: 12,
            image: 'https://i.ibb.co/hL2nMtx/agua-500.jpg',
            price: 5,
            item: 'Agua 500ml',
          },
          {
            id: 13,
            image: 'https://i.ibb.co/3sBZQpf/agua-750.jpg',
            price: 8,
            item: 'Agua 750ml',
          },
          {
            id: 14,
            image: 'https://i.ibb.co/WxhvRWt/gaseosa-500ml.jpg',
            price: 7,
            item: 'Gaseosa 500ml',
          },
          {
            id: 15,
            image: 'https://i.ibb.co/PZ8pK7x/gaseosa-750ml.jpg',
            price: 10,
            item: 'Gaseosa 750ml',
          }
        ],
        extras: [
          {
            id: 16,
            image: 'https://i.ibb.co/LxLN974/cheese.jpg',
            price: 1,
            item: 'Queso',
          },
          {
            id: 17,
            image: 'https://i.ibb.co/23t6sPP/huevo.jpg',
            price: 1,
            item: 'Huevo',
          }
        ]
      },
      typefood: 'breakfast',
      newOrder: {
        user: '',
        totalPrice: 0,
        items: []
      },
      Orders: []
    }
  }

  handleClick = () => {
    const { user, items, totalPrice } = this.state.newOrder;
    db.collection("Orders").add({
      user, items, totalPrice
    })
      .then(docRef => {
        this.setState({
          newOrder: {
            user: '',
            totalPrice: 0,
            items: []
          }
        })
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }

  handleChange = (e) => {
    this.setState({
      typefood: e.target.name
    })
  }

  sumTotalOrder = (newOrder) => {
    let sum = 0;
    newOrder.items.forEach(({ price }) => sum += price);
    newOrder.totalPrice = sum;
    this.setState({ newOrder })
  }

  addCount = (priceI, idActual) => {
    const { newOrder } = this.state;
    newOrder.items.forEach(item => {
      if (item.id === idActual) {
        if (item.price === priceI) {
          priceI = priceI / item.count;
        }
        item.count++;
        item.price = priceI * item.count;
      }
    })
    this.sumTotalOrder(newOrder);
  }

  reduceCount = (priceI, idActual, i) => {
    const { newOrder } = this.state;

    newOrder.items.forEach(item => {
      if (item.id === idActual) {
        item.price = priceI / item.count;
        item.count--;
        item.price = item.price * item.count;
        if (item.count === 0) {
          this.handleRemove(i);
        }
      }
    })
    this.sumTotalOrder(newOrder);
  }
  
  handleAddItem = (name, priceI, idActual) => {
    const { newOrder } = this.state;

    if (newOrder.items.find(({ id }) => id === idActual)) {
      this.addCount(priceI, idActual);
    } else {
      newOrder.items.push({
        item: name,
        price: priceI,
        id: idActual,
        count: 1
      });

    }
    this.sumTotalOrder(newOrder);
  }

  
  render() {
    const {typefood, food, newOrder } = this.state;
    const size = Object.keys(food);
    return (
      <div>
        <header className="App-header bg-primary text-white">
          <h3><img className="logotype" src="https://i.ibb.co/q7BZWSZ/logotype.png" alt="logotype"></img><img className= "icon-logo" src= "https://i.ibb.co/hczsnnj/burger-1.png" alt= "icon-logo"></img></h3>
          <button className= "logOut btn-primary" type="button"> <img src= "https://i.ibb.co/NYTMVvf/logout-2.png" alt= "logOut"></img> CERRAR SESIÓN</button>
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
                      <MenuItems name={item} price={price} img={image} key={item} add= {this.handleAddItem}/>)
                    : <span className="ml-3">Loading menu</span>
                }
              </div>
            </div>
            <div className="col-md-5">
              <table className="table">
                <thead>
                  <tr>
                    <td colSpan="2"><input className="form-control" type="text" placeholder="Nombre de Cliente" onChange={this.handleClient} value={newOrder.user}/></td>
                    <td colSpan="2"><button className="btn btn-success" onClick={this.handleClick}>Enviar a cocina</button></td>
                  </tr>
                  <tr className="text-center">
                    <th scope="col">Items</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Cantidad</th>
                  </tr>
                </thead>
                <tbody>
                {newOrder.items.map(({ item, price, count }, i) =>
                    <AddItem name={item} price={price} key={i} i={i} count={count}
                      add={this.addCount} remove={this.handleRemove} reduce={this.reduceCount} />
                  )}
                  <tr className="text-center table-active">
                    <th>Total</th>
                    <th className="text-center">s/.{newOrder.totalPrice}</th>
                    <td colSpan="2"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;