import React from 'react';
import PropTypes from "prop-types";
//import { v4 } from 'uuid';

let forms = {
  marginLeft: "10px"
}
let moveLable1 = {
  marginLeft: "60px"
}
let moveLable2 = {
  marginLeft: "18px"
}
let moveLable3 = {
  marginLeft: "65px"
}
let moveLable4 = {
  marginLeft: "63px"
}

function NewBrewForm(props){
  let _name = null;
  let _description = null;
  let _price = null;
  let _stock = null;

  function handleNewBrewFormSubmission(event) {
    event.preventDefault();
    props.onNewBrewCreation({name: _name.value, type: _type.value, description: _description.value, price: _price.value, stock: _stock.value});


    _name.value = "";
    _type.value = "";
    _description.value = "";
    _price.value = "";
    _stock.value = "";
  }

  return (
    <div>

      <form onSubmit={handleNewBrewFormSubmission}>
        <div style={forms}>
          <lable>Name: </lable>

          <input
            style={moveLable1}
            type='text'
            id='name'
            placeholder='Beer Name'
            ref={(input) => {_name = input;}}/>
        </div>
        <br/>

          <div style={forms}>
            <lable>Drink Type: </lable>
            <input
              style={moveLable2}
              type='text'
              id='type'
              placeholder='Drink Type'
              ref={(input) => {_type = input;}}/>
          </div>
          <br/>

        <div style={forms}>
          <lable>Description: </lable>
          <input
            style={moveLable2}
            type='text'
            id='description'
            placeholder='Description'
            ref={(input) => {_description = input;}}/>
        </div>
        <br/>

        <div style={forms}>
          <lable>Price: </lable>
          <input
            style={moveLable3}
            type='text'
            id='price'
            placeholder='Price'
            ref={(input) => {_price = input;}}/>
        </div>
        <br/>

        <div style={forms}>
          <lable>Stock: </lable>
          <input
            style={moveLable4}
            type='text'
            id='stock'
            placeholder='Stock'
            ref={(input) => {_stock = input;}}/>
        </div>
        <br/>
        <div style={forms}>
          <button type='submit'>Add to Rotating Brew List</button>
        </div>
      </form>
    </div>
  );
}

NewBrewForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewBrewForm;
