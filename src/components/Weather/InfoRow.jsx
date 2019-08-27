import React from 'react';

const InfoRow = ({ className, heading, children }) => (
  <div className="info__row">
    <p className="info__name">{ heading }</p>
    <p className={`info__value ${className}`}>{ children }</p>
  </div>
);

export default InfoRow;
