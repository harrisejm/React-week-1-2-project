import React from 'react';
import PropTypes from 'prop-types';

let brewStyles = {
  width: "500px",
  borderBottom: "solid"

}


function Brew(props){

  return (
    <div style={brewStyles}>
      <h3>{props.name}</h3>
      <ul>
        <li>{props.type}</li>
        <li>{props.description}</li>
        <li>{props.price}</li>
        <li>{props.inventory}</li>
      </ul>
    </div>

  );
}

Brew.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  inventory: PropTypes.string.isRequired
};

export default Brew;
