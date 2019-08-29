import React, { Component } from 'react';
import axios from 'axios';
import { debounce as _debounce } from 'lodash';

import InfoContainer from './Info/InfoContainer';
import delaySearching from '../constants';

class Main extends Component {
  state = {
    inputValue: '',
    error: true,
    loading: false,
    weather: null,
  };

  DebounceSubmitHandler = _debounce(this.submitHandler.bind(this), delaySearching, false);

  componentDidMount() {
    this.getCityData()
      .then(({ data: weather }) => this.setState({ weather }));
  }

  inputChange = (e) => {
    this.setState({ inputValue: e.target.value, loading: true });
  }

  getCityData = (param) => {
    const city = param || 'Kyiv';
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=2ec7f7b5fab44885766bbe4fc05fde4f&q=${city}`;
    return axios.get(url);
  }

  handleChange = (e) => {
    this.inputChange(e);
    this.DebounceSubmitHandler();
  }

  submitHandler() {
    const { inputValue: city } = this.state;

    this.getCityData(city)
      .then(({ data: weather }) => this.setState({ weather, error: true }))
      .catch(() => { this.setState({ error: false }); })
      .finally(() => { this.setState({ loading: false }); });
  }

  render() {
    const {
      weather,
      error: ifFindCity,
      loading: isLoading,
    } = this.state;

    return (
      <div className="weather">
        <div className="weather__form">
          <input
            type="text"
            name="city"
            placeholder="Write the city"
            autoComplete="off"
            required
            className="weather__input"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
          { isLoading && <div className="weather__preloader" /> }
        </div>
        { ifFindCity ? weather && <InfoContainer data={weather} /> : <p className="weather__notfound">The City not found</p> }
      </div>
    );
  }
}

export default Main;
