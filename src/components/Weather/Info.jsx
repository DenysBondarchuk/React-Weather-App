import React from 'react';

const weatherInfo = ({ data }) => {
  const {
    name,
    main,
    weather,
    wind,
  } = { ...data };

  return (
    <div className="info">
      <div className="info__description">

        <div className="info__row">
          <p className="info__name">City</p>
          <p className="info__value info__value-city">{name}</p>
        </div>
        <div className="info__row">
          <p className="info__name">Temperature</p>
          <p className="info__value info__value-temperature">
            {main.temp}
            ℃
          </p>
        </div>
        <div className="info__row">
          <p className="info__name">Humidity</p>
          <p className="info__value info__value-humidity">
            {main.humidity}
            %
          </p>
        </div>
        <div className="info__row">
          <p className="info__name">Wind</p>
          <p className="info__value info__value-wind">
            {wind.speed}
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
        </div>
      </div>
      <div className="info__show">
        <img src={`https://openweathermap.org/img/w/${weather[0].icon}.png`} alt="" />
      </div>
    </div>
  );
};

export default weatherInfo;
