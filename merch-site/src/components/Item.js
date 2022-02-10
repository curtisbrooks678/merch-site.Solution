import React from "react";
import PropTypes from "prop-types";

function Item(props){

  function checkQ(){
    if(props.quantity === "0") {
      return "Item out of stock";
    } else {
      return "";
    }
  }

  return (
    <React.Fragment>
      <div onClick = {() => props.whenItemClicked(props.id)}>
      <p>Name: {props.name}</p>
      <p>Description: {props.description}</p>
      <p>Quantity: {props.quantity}</p>
      <p>{checkQ()}</p>
      <hr />
      </div>
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.string,
  id: PropTypes.string,
  whenItemClicked: PropTypes.func
}

export default Item;