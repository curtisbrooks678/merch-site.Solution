import React from "react";
import {v4} from "uuid";
import PropTypes from "prop-types";

function NewItemForm(props){

  function handleAddingNewItemFormSubmission(event){
    event.preventDefault();
    props.onNewItemCreation({name: event.target.name.value, description: event.target.description.value, quantity: event.target.quantity.value, id: v4()});
  }
  return(
    <React.Fragment>
      <form onSubmit={handleAddingNewItemFormSubmission}>
        <input
          type="text"
          name="name"
          placeholder="Name of item"/>
        <input
          type="text"
          name="description"
          placeholder="description of item"/>
        <input
          type="text"
          name="quantity"
          placeholder="Quantity of item"/>
        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
}

NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func
};

export default NewItemForm;