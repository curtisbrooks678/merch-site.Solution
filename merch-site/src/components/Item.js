import React from "react";
import PropTypes from "prop-types";

function Item(props){
  return (
    <React.Fragment>
      {props.name}
      {props.description}
      {props.quantity}
      <hr />
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number
}

export default Item;