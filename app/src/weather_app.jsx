import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {WeatherApi} from './sdk/sdk';
import $ from 'jquery';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import {CurrentConditions, DayList, Loader, WeatherChart} from './components/components';
import LocationModel from './sdk/model/location';
import StateShared from './shared/state';

@observer
export default class WeatherApp extends Component {

  @observable weather;
  @observable location;

  constructor(props) {
    super(props);
    this.WeatherApi = WeatherApi;
    this.loadWeather = this.loadWeather.bind(this);
    this.weather = {};
    this.location = {};
  }

  // events /////////////////////////////////////////


  // helper /////////////////////////////////////////


  // ajax ///////////////////////////////////////////

  findLatLong() {
    let d = $.Deferred();
    
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let coords = position.coords;
        this.location = new LocationModel(coords.latitude, coords.longitude);
        d.resolve(this.location);
      },
      (error) => {
        d.reject(error);
      }
    );

    return d.promise();
  }

  loadWeather(coords) {
    return this.WeatherApi.weather(coords.latitude, coords.longitude);
  }

  loadLocation(coords) {
    this.WeatherApi.address(coords.latitude, coords.longitude)
    .then((data) => {
      let comp = data.results[0].address_components;
      this.location.name = comp[3].short_name + ', ' + comp[5].short_name;
    });
  }

  // react //////////////////////////////////////////

  componentWillMount() {
    console.log('componentWillMount');
    this.findLatLong()
    .then((coords) => {
      this.loadLocation(coords);
      return this.loadWeather(coords);
    })
    .then((data) => {
      this.weather = data;
      StateShared.weatherLoaded = true;
    })
    .fail((error) => {
      console.log(error);
    });
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  render() {
    const weather = this.weather;
    const location = this.location;

    return (
      <div className="weathermatic">
        <header className="weathermatic__header">Weathermatic</header>
        <section className="weathermatic__location">
          <h1>{location.name}</h1>
        </section>
        <div className="weathermatic__top">
          <section className="weathermatic__current">
            <CurrentConditions 
              current={weather.current}>
            </CurrentConditions>
          </section>
          <section className="weathermatic__charting">
            <div className="weathermatic__chart">
              <WeatherChart chartClass='temperature-chart' 
                  xSeries={this.weather.hourTimestamps}
                  ySeries={this.weather.hourTemperatures} />
            </div>
            <div className="weathermatic__chart">
              <WeatherChart chartClass='wind-chart' 
                  xSeries={this.weather.hourTimestamps}
                  ySeries={this.weather.hourWindSpeeds} />
            </div>
          </section>
        </div>
        <section className="weathermatic__day-list">
          <h2>5 Day Forecast</h2>
          <DayList days={weather.days}></DayList>
        </section>
        <Loader/>
      </div>
    );
  }
};