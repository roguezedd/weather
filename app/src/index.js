import React from 'react';
import ReactDOM from 'react-dom';
import WeatherApp from './weather_app';

require('./geolocation.js');

ReactDOM.render(<WeatherApp/>, document.getElementById('app-container'));