import React, { Component } from 'react';
import axios from 'axios';
import _debounce from 'lodash/debounce';

import Info from './Info';
import NotFound from './NotFound';
import InfoPreloader from './InfoPreloader';

class Main extends Component {
  state = {
    inputValue: '',
    error: true,
    loading: false,
    weather: null,
  };

  componentDidMount() {
    this.getCityData()
      .then(({ data: weather }) => this.setState({ weather }));
  }

  inputChange = (e) => {
    this.setState({ inputValue: e.target.value, loading: true });
  }

  getCityData = async (сity = 'Kyiv') => {
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=2ec7f7b5fab44885766bbe4fc05fde4f&q=${сity}`;
    return axios.get(url);
  }

  submitHandler = () => {
    const city = this.state.inputValue;
    this.getCityData(city)
      .then(({ data: weather }) => this.setState({ weather, error: true }))
      .catch(() => { this.setState({ error: false }); })
      .finally(() => { this.setState({ loading: false }); });
  };

  DebounceSubmitHandler = _debounce(this.submitHandler, 1000, false);

  handleChange = (e) => {
    this.inputChange(e);
    this.DebounceSubmitHandler();
  }

  render() {
    const { weather } = this.state;
    const isFinfCity = this.state.error;
    const isLoading = this.state.loading;
    const InfoIfCityFind = isFinfCity ? weather && <Info data={weather} /> : <NotFound />;
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
          onChange={this.handleChange}
        />
        { isLoading ? <InfoPreloader /> : InfoIfCityFind }
      </div>
    );
  }
}

export default Main;
