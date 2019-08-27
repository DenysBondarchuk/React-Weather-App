import React from 'react';
import InfoRow from './InfoRow';

const weatherInfo = ({ data }) => {
  const {
    name,
    weather,
    wind: { speed },
    main: {
      temp,
      humidity,
    },
  } = data;

  const getDescription = (item) => (
    <span
      key={item.id}
    >
      {item.description}
    </span>
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
          {weather.map(getDescription).join(', ')}
        </InfoRow>
      </div>
      <div className="info__show">
        <img src={`https://openweathermap.org/img/w/${weather[0].icon}.png`} alt="" />
      </div>
    </div>
  );
};

export default weatherInfo;
