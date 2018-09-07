import React from 'react';
import PropTypes from 'prop-types';

let brewStyles = {

  borderBottom: "solid",
  margin: "10px"

}


function Brew(props){

  return (
    <div style={brewStyles}>
      <h3>{props.name}</h3>
      <ul>
        <li>Drink Type: {props.type}</li>
        <li>Description: {props.description}</li>
        <li>Price: {props.price}</li>
        <li>Remaining stock: {props.inventory}</li>
      </ul>
    </div>

  );
}

Brew.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  inventory: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired
};

export default Brew;
