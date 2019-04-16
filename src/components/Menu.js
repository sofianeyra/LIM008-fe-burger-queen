import React from 'react';

const MenuItems = ({ name, price, img, add }) => (
  <div className="card text-center m-2 col-3 cursor p-2" onClick={() => add(name, price, name)}>
    <span> <img className="food-image" alt="food" src={img}></img> </span>
    <span> {name}</span>
    <span> s/{price}.00 </span>
  </div>
);

export default MenuItems;
