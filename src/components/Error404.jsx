import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import doge from '../img/doge.png';

let errorStyles = {
  margin: "20px"
}
let dogeImg = {
  width: "100%",
  height: "100%"
}


function Error404(props){
  return (
    <div style={errorStyles}>
       <img style={dogeImg} src={doge}/>
      <h2>BARK!!! {props.location.pathname} does not exist!</h2>
      <p>Return <Link to="/">home</Link>?</p>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;
