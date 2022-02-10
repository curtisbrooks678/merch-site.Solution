import React from "react";
import PropTypes from "prop-types";

function ItemDetail(props){
  const { item } = props;

  return (
    <React.Fragment>
      <h1>Item Detail</h1>
      <p>Name: {item.name}</p>
      <p>Description: {item.description}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={ props.onClickingEdit }>Update Item</button>
      <button onClick={ () => props.onClickingDelete(item.id)}>Delete Item</button>
      <button onClick={ () => props.onClickingAddQuantity(item.id)}>Add Quantity</button>
      <hr/>
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingAddQuantity: PropTypes.func
};

export default ItemDetail;