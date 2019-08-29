import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]).isRequired,
};

const defaultProps = {
  className: null,
};

const InfoRow = ({ className, heading, children }) => (
  <div className="info__row">
    <p className="info__name">{ heading }</p>
    <p className={`info__value ${className}`}>{ children }</p>
  </div>
);

InfoRow.propTypes = propTypes;
InfoRow.defaultProps = defaultProps;

export default InfoRow;
