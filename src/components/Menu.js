import React from 'react';

const MenuItems = ({ name, price, add }) => {
  return (
    <div className="card text-center m-2 col-5 cursor p-2">
      <span> {name}</span>
      <span> s/.{price}.00</span>
    </div>
  );
}
export default MenuItems;