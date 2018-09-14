import React from 'react';

function NewTicketForm(){
  return (
    <div>
      <form>
        <input
          type='text'
          id='name'
          placeholder='Beer Name'/>
        <input
          type='text'
          id='description'
          placeholder='Description'/>
        <input
          type='text'
          id='price'
          placeholder='Price'/>
        <input
          type='text'
          id='stock'
          placeholder='Stock'/>

        <button type='submit'>Add to Rotating Brew List</button>
      </form>
    </div>
  );
}

export default NewTicketForm;
