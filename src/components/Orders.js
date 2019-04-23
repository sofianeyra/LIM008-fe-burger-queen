import React, { Component } from 'react';
import '../App.css';
import AddItem from './AddItem';
import firebase from '../firebase';

const db = firebase.firestore;

class Orders extends Component {
  constructor() {
    super();
    this.state = {
      newOrder: {
        user: '',
        totalPrice: 0,
        items: []
      },
      Orders: []
    }
  };

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

  handleRemove = (index) => {
    const { newOrder } = this.state;
    newOrder.items.splice(index, 1);
    this.sumTotalOrder(newOrder)
  }

  render(){
  const { newOrder } = this.state;
  return(
      <div className="col-md-5">
              <table className="table">
                <thead>
                  <tr>
                    <td colSpan="2"><input className="form-control" type="text" placeholder="Nombre de Cliente"/></td>
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
    );
  }
}
export default Orders;
