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

        <div className="current__basic">
          <div className="current__left">
            <div className="current__icon-container">
              <WeatherIcon iconCss={'current__icon ' + current.fontIcon}></WeatherIcon>
            </div>
            <span className="current__summary">{current.summary}</span>
          </div>
          <div className="current__right">
            <span className="current__temp">{Math.round(current.temperature)}°F</span>
          </div>
        </div>
        <div className="current__detail">
          <ul>
            <li><label>Dew Point</label> <span>{Math.round(current.dewPoint)}°F</span></li>
            <li><label>Humidity</label> <span>{current.humidity * 100}%</span></li>
            <li><label>Wind Speed</label> <span>{Math.round(current.windSpeed)}mph</span></li>
            <li><label>Precip. Chance</label> <span>{Math.round(current.precipProbability * 100)}%</span></li>
            <li><label>Pressure</label> <span>{current.pressure}in</span></li>
          </ul>
        </div>
      </div>
    );
  }
}