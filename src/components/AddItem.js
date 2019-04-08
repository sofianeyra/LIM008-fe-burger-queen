import React from 'react';

const AddItem = ({ name, price,add}) => {
  return (
    <tr>
      <td>{name}</td>
      <td className="text-center">s/.{price}.00</td>
      <td className="text-center">
        <i className="cursor fas fa-minus mr-2 text-secondary"></i>
        <span className="badge badge-pill badge-primary"></span>
        <i className="cursor fas fa-plus ml-2 text-secondary" onClick={()=> add(price, name)}></i>
      </td>
      <td className="cursor"><i className="fa fa-trash text-danger"></i></td>
    </tr>
  )
}

export default AddItem;