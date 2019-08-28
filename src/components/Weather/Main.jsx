import React, { Component } from 'react';
import axios from 'axios';
import _debounce from 'lodash/debounce';

import Info from './Info';

class Main extends Component {
  state = {
    inputValue: '',
    weather: null,
  };

  componentDidMount() {
    this.getCityData()
      .then(({ data: weather }) => this.setState({ weather }));
  }

  inputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  }

  getCityData = (сity = 'Kyiv') => {
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=2ec7f7b5fab44885766bbe4fc05fde4f&q=${сity}`;
    return axios.get(url);
  }

  submitHandler = _debounce((e) => {

    const city = this.state.inputValue;

    this.getCityData(city)
      .then(({ data: weather }) => this.setState({ weather }))
      .catch(() => { });

  }, 1000);

  render() {
    const { weather } = this.state;
    return (
      <div className="weather">
        <input
          type="text"
          name="city"
          placeholder="Write the city"
          autoComplete="off"
          required
          className="weather__input"
          value={this.state.inputValue}
          onChange={(e) => { this.inputChange(e); this.submitHandler(); }}
        />
        {weather && <Info data={weather} />}
      </div>
    );
  }
}

export default Main;
