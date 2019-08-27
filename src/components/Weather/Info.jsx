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
          {weather.map((item) => (
            <span
              key={item.id}
            >
              {item.description}
            </span>
          ))}
        </InfoRow>

        {/* <div className="info__row">
          <p className="info__name">City</p>
          <p className="info__value info__value-city">{name}</p>
        </div>
        <div className="info__row">
          <p className="info__name">Temperature</p>
          <p className="info__value info__value-temperature">
            {temp}
            ℃
          </p>
        </div>
        <div className="info__row">
          <p className="info__name">Humidity</p>
          <p className="info__value info__value-humidity">
            {humidity}
            %
          </p>
        </div>
        <div className="info__row">
          <p className="info__name">Wind</p>
          <p className="info__value info__value-wind">
            {speed}
            m/s
          </p>
        </div>
        <div className="info__row">
          <p className="info__name">Description</p>
          {
            weather.map((item) => (
              <p
                key={item.id}
                className="info__value info__value-description"
              >
                {item.description}
              </p>
            ))
          }
        </div> */}
      </div>
      <div className="info__show">
        <img src={`https://openweathermap.org/img/w/${weather[0].icon}.png`} alt="" />
      </div>
    </div>
  );
};

export default weatherInfo;
