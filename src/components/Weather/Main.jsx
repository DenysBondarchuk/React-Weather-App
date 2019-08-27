import React, { Component } from 'react';
import axios from 'axios';
import Form from './Form';
import Info from './Info';

class Main extends Component {
  state = {
    weather: null,
  };

  componentDidMount() {
    this.getCityData()
      .then(({ data: weather }) => this.setState({ weather }));
  }

  getCityData = (сity = 'Kyiv') => {
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=2ec7f7b5fab44885766bbe4fc05fde4f&q=${сity}`;
    return axios.get(url);
  }

  submitHandler = (e) => {
    e.preventDefault();

    const city = (new FormData(e.target)).get('city');

    this.getCityData(city)
      .then(({ data: weather }) => this.setState({ weather }))
      .catch(() => {});

    e.target.reset();
  };

  render() {
    const { weather } = this.state;
    return (
      <div className="weather">
        <Form submitHandler={this.submitHandler} />
        { weather && <Info data={weather} />}
      </div>
    );
  }
}

export default Main;
