import React from 'react';

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


function NewTicketForm(){
  return (
    <div>


        <form>
          <div style={forms}>
          <lable>Name: </lable>

          <input
            style={moveLable1}
            type='text'
            id='name'
            placeholder='Beer Name'/>
        </div>
        <br/>

        <div style={forms}>
          <lable>Description: </lable>
          <input
              style={moveLable2}
            type='text'
            id='description'
            placeholder='Description'/>
        </div>
        <br/>

        <div style={forms}>
          <lable>Price: </lable>
          <input
              style={moveLable3}
            type='text'
            id='price'
            placeholder='Price'/>
        </div>
        <br/>

        <div style={forms}>
          <lable>Stock: </lable>
          <input
              style={moveLable4}
            type='text'
            id='stock'
            placeholder='Stock'/>
        </div>
        <br/>
        <div style={forms}>
          <button type='submit'>Add to Rotating Brew List</button>
        </div>
      </form>
    </div>
  );
}

export default NewTicketForm;
