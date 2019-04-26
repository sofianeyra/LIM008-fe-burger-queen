/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import PropTypes from 'prop-types';

const AddItem = ({
  name, price, count, add, remove, i, reduce,
}) => (
  <tr>
    <td>{name}</td>
    <td className="text-center">s/.{price}</td>
    <td className="text-center">
      <i className="cursor fas fa-minus mr-2 text-secondary" role="button" onClick={() => reduce(price, name, i)} />
      <span className="badge badge-pill badge-primary">{count}</span>
      <i className="cursor fas fa-plus ml-2 text-secondary" role="button" onClick={() => add(price, name)} />
    </td>
    <td className="cursor" onClick={() => remove(i)}><i className="fas fa-trash text-danger" /></td>
  </tr>
);

export default AddItem;

AddItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  i: PropTypes.number.isRequired,
  add: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  count: PropTypes.func.isRequired,
  reduce: PropTypes.func.isRequired,
};
