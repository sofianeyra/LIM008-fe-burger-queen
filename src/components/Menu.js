import React, { Component } from 'react';

class Menu extends Component {
    constructor () {
      super();
      this.state = {
        food: {},
        typefood: 'breakfast',
        newOrder: {
            user: '',
            totalPrice: 0,
            items: []
          },
          Orders: []
        }
      };
  
    componentDidMount() {
      fetch('https://raw.githubusercontent.com/sofianeyra/LIM008-fe-burger-queen/develop/src/data/menu.json')
        .then(res => res.json())
        .then((json) => {
          this.setState({
            menu: json,
          });
        });
  
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
    render(){
    const { food, typefood } = this.state;
    const size = Object.keys(food);
    return (
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
          </div>
        </div>
    );
    }
    } 
}
  export default Menu;