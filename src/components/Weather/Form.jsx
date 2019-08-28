import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  submitHandler: PropTypes.func.isRequired,
};

const Form = ({ submitHandler }) => (
  <form className="weather__form" onSubmit={submitHandler}>
    <input
      type="text"
      name="city"
      placeholder="Write the city"
      required
      className="weather__input"
    />
    <button
      type="submit"
      className="weather__btn"
    >
      Find
    </button>
  </form>
);

Form.propTypes = propTypes;

export default Form;
