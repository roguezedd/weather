import React, {Component} from 'react';
import {observer} from "mobx-react";
import WeatherIcon from '../icon/weather_icon';
import {temperatureBuildClass} from '../temperature/temperature';

require('./current_conditions.css');
require('../temperature/temperature.css');

@observer 
export default class CurrentConditions extends Component {

  constructor() {
    super();
  }

  currentClass(val){
    return temperatureBuildClass(val);
  }

  render() {
  	const current = this.props.current || {};

    return (
      <div className={"current " + this.currentClass(current.temperature)}>
        <div className="current__left">
          <WeatherIcon css="current__icon" iconCss={current.fontIcon}></WeatherIcon>
          <span className="current__summary">{current.summary}</span>
        </div>
        <div className="current__right">
          <div>
            <div className="current__icon--sm__container">
              <WeatherIcon css="current__icon--sm" iconCss={current.fontIcon}></WeatherIcon>
            </div>
            <span className="current__temp">{Math.round(current.temperature)}°F</span>
          </div>
          <ul className="current__detail">
            <li><label>Dew Point</label> <span>{Math.round(current.dewPoint)}°F</span></li>
            <li><label>Humidity</label> <span>{Math.round(current.humidity * 100)}%</span></li>
            <li><label>Wind Speed</label> <span>{Math.round(current.windSpeed)} mph</span></li>
            <li><label>Precip. Chance</label> <span>{Math.round(current.precipProbability * 100)}%</span></li>
            <li><label>Pressure</label> <span>{current.pressure} in</span></li>
          </ul>
        </div>
      </div>
    );
  }
}