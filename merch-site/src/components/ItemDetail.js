import React from "react";
import PropTypes from "prop-types";

function ItemDetail(props){
  const { item, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Item Detail</h1>
      <p>Name: {props.name}</p>
      <p>Description: {props.description}</p>
      <p>Quantity: {props.quantity}</p>
      <button onClick={ props.onClickingEdit }>Update Item</button>
      <button onClick={()=> props.onClickingDelete(item.id)}>Close Item</button>
      <hr/>
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default ItemDetail;