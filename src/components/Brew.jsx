import React from 'react';
import PropTypes from 'prop-types';

function Brew(props){
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.type}</p>
      <p>{props.price}</p>
      <p>{props.inventory}</p>
    </div>

  );
}

Brew.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  inventory: PropTypes.string.isRequired
};

export default Brew;
