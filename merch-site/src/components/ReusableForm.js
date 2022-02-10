import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return(
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
      <input
          type="text"
          name="name"
          placeholder="Name of item"/>
        <input
          type="text"
          name="description"
          placeholder="description of item"/>
        <input
          min="0"
          type="number"
          name="quantity"
          placeholder="Quantity of item"/>
        <button type="submit" className={props.buttonStyle}> {props.buttonText} </button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;