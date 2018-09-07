import React from 'react';
import Brew from './Brew';

let fullBrewList = [
  {
    name: 'Irish Coffee',
    type: 'specialty drink',
    description: 'Coffee With Wisky',
    price: '$7.00',
    inventory: '97'
  },
  {
    name: 'NW Hefeweizen',
    type: 'Hefeweizen',
    description: 'Wheat Beer',
    price: '$5.00',
    inventory: '67'
  },
  {
    name: 'NW Orange Hefeweizen',
    type: 'Hefeweizen',
    description: 'Wheat Beer with a hint of orange',
    price: '$5.00',
    inventory: '129'
  }
];


function BrewList(){
  return (
    <div>
      { fullBrewList.map((brew, index) =>
        <Brew name={brew.name}
          type={brew.type}
          description={brew.description}
          price={brew.price}
          inventory={brew.inventory}
          key={index}/>
      )}
    </div>
  );
}

export default BrewList;
