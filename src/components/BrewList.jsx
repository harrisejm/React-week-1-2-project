import React from 'react';
import Brew from './Brew';
import { Link } from 'react-router-dom';

let fullBrewList = [
  {
    name: 'Irish Coffee',
    type: 'specialty drink',
    description: 'Coffee With Wisky',
    price: '$7.00',
    inventory: '97',
    details: "/IrishCoffee"
  }
  // {
  //   name: 'NW Hefeweizen',
  //   type: 'Hefeweizen',
  //   description: 'Wheat Beer',
  //   price: '$5.00',
  //   inventory: '67'
  // },
  // {
  //   name: 'NW Orange Hefeweizen',
  //   type: 'Hefeweizen',
  //   description: 'Wheat Beer with a hint of orange',
  //   price: '$5.00',
  //   inventory: '129'
  // }
];


function BrewList(){
  return (
    <div>
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
    </div>
  );
}

export default BrewList;
