import React from 'react';
import header from '../img/header.jpg';
import { Link } from 'react-router-dom';

let headerStyles = {
  backgroundColor: "black"
  // backgroundImage: `url(${header})`,
  //  backgroundRepeat: "no-repeat",
};

let main = {
  padding: "10px"
}

let title = {
  fontSize: '50px',
  color: "white",
}

let home = {
  fontSize: '30px',
  color: "white",
  border: "solid",
  padding: "5px"
}

function Header(){
  return (
    <div style={headerStyles}>
      <div style={main}>
      <h1 style={title}>Eddie's Brew House</h1>
      <Link style={home} to={"/"}>Home</Link>
      <Link style={home} to={"/NewBrewForm"}>Add to Rotating Brew List</Link>
      </div>
    </div>
  );
}

export default Header;
