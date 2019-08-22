import React from 'react';

const Form = ({ submitHandler }) => (
  <form className="weather__form" onSubmit={(e) => { submitHandler(e); }}>
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


export default Form;
