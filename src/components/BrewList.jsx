import React from 'react';
import Brew from './Brew';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

let fullBrewList = [
  {
    name: 'Irish Coffee',
    type: 'specialty drink',
    description: 'Coffee With Wisky',
    price: '$7.00',
    inventory: '97',
    details: "/IrishCoffee"
  },
  {
    name: 'NW Hefeweizen',
    type: 'Hefeweizen',
    description: 'Wheat Beer',
    price: '$5.00',
    inventory: '67',
    details: "/Hefeweizen"
  },
  {
    name: 'NW Orange Hefeweizen',
    type: 'Hefeweizen',
    description: 'Wheat Beer with a hint of orange',
    price: '$5.00',
    inventory: '129',
    details: "/OrangeHefeweizen"
  }
];

function BrewList(props){
  return (
    <div>
      <h1>Featured List</h1>
      { fullBrewList.map((brew, index) =>
        <Link to={brew.details}>
          <Brew name={brew.name}
            type={brew.type}
            description={brew.description}
            price={brew.price}
            inventory={brew.inventory}
            key={index}/>
        </Link>
      )}
      <hr/>
      <h1>Rotating Tap</h1>
      { props.brewList.map((newBrew) =>
        <Brew name={newBrew.name}
          type={newBrew.type}
          description={newBrew.description}
          price={newBrew.price}
          inventory={newBrew.inventory}
          key={newBrew.id}/>
      )}
    </div>
  );
}

BrewList.propTypes = {
  brewList: PropTypes.array
};

export default BrewList;
