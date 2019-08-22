import React, { Component } from 'react';
import axios from 'axios';
import Form from '../WeatherForm/WeatherForm';
import WeatherInfo from '../WeatherInfo/WeatherInfo';

import './WeatherMain.css'

class WeatherMain extends Component {

	state = {
		weather: null,
		defaultCity: 'Kyiv'
	};

	componentDidMount() {
		axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.defaultCity}&units=metric&appid=2ec7f7b5fab44885766bbe4fc05fde4f`)
			.then(response => {
				this.setState({
					weather: response.data
				})
			})
	}

	submitHandler = (e) => {
		e.preventDefault();

		const city = (new FormData(e.target)).get('city');

		axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=2ec7f7b5fab44885766bbe4fc05fde4f`)
			.then(response => {
				this.setState({ weather: response.data });
			})
			.catch(err => {
				alert('The city is not found');
			});

		e.target.reset();
	};

	render() {
		return (
			<div className="weather">
				<Form
					submitHandler={this.submitHandler}
				/>
				{
					this.state.weather &&
					<WeatherInfo
						data={this.state.weather}
					/>
				}
			</div>
		)
	}

}

export default WeatherMain;