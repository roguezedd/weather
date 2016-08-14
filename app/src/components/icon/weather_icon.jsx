import React, {Component} from 'react';
import {observer} from "mobx-react";

require('./weather_icon.css');

@observer 
export default class WeatherIcon extends Component {

  constructor() {
    super();
  }

  render() {
  	const css = this.props.iconCss || '';

    return (
      <div className="weathermatic__icon">
        <i className={'wi ' + css}></i>
      </div>
    );
  }
}