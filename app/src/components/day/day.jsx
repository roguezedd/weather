import React, {Component} from 'react';
import {observer} from 'mobx-react';
import WeatherIcon from '../icon/weather_icon';

require('./day.css');

@observer 
export default class Day extends Component {

  constructor() {
    super();
  }

  render() {
  	const day = this.props.day;

    return (
      <div key={day.time} className="day">
        <div className="day__header">
          <span className="day__day-of-week">{day.dayOfWeek}</span>&nbsp;
          <span className="day__date">{day.date}</span>
        </div>
        <div className="day__content">
          <div className="day__temp">
            <span className="day__temp__max">{Math.round(day.temperatureMax)}°</span> | <span className="day__temp__min">{Math.round(day.temperatureMin)}°</span>
          </div>
          <div className="day__icon-container">
            <WeatherIcon iconCss={'day__icon ' + day.fontIcon}></WeatherIcon>
          </div>
        </div>
        <div class="day__footer">
          <div className="summary">{day.summary}</div>
        </div>
      </div>
    );
  }
}