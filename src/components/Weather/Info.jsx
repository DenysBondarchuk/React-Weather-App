import React from 'react';
import PropTypes from 'prop-types';

import InfoRow from './InfoRow';

const propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    weather: PropTypes.array,
    wind: PropTypes.shape({
      speed: PropTypes.number,
    }),
    main: PropTypes.shape({
      temp: PropTypes.number,
      humidity: PropTypes.number,
    }),
  }).isRequired,
};

const defaultProps = {};

const Info = ({ data }) => {
  const {
    name,
    weather,
    wind: { speed },
    main: {
      temp,
      humidity,
    },
  } = data;

  const getDescription = () => (
    weather.map(({ id, description }) => (
      <span key={id}>{ description }</span>
    ))
  );

  return (
    <div className="info">
      <div className="info__description">

        <InfoRow className="info__value-city" heading="City">
          {name}
        </InfoRow>
        <InfoRow className="info__value-temperature" heading="Temperature">
          {temp}
          ℃
        </InfoRow>
        <InfoRow className="info__value-humidity" heading="Humidity">
          {humidity}
          %
        </InfoRow>
        <InfoRow className="info__value-wind" heading="Wind">
          {speed}
          m/s
        </InfoRow>
        <InfoRow className="info__value-description" heading="Description">
          { getDescription() }
        </InfoRow>
      </div>
      <div className="info__show">
        <img src={`https://openweathermap.org/img/w/${weather[0].icon}.png`} alt="" />
      </div>
    </div>
  );
};

Info.propTypes = propTypes;
Info.defaultProps = defaultProps;

export default Info;
