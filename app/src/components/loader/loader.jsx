import React, {Component} from 'react';
import {observer} from "mobx-react";
import StateShared from '../../shared/state';

require('./loader.css');

@observer 
export default class WeatherIcon extends Component {

  constructor() {
    super();
  }

  loaderClass(val){
    return StateShared.weatherLoaded ? "weathermatic__loader--hidden" : ''; 
  }

  render() {
    return (
      <section className={"weathermatic__loader " + this.loaderClass()}>
				<span className="">Loading Weathermatic...</span>&nbsp;
				<i className="wi wi-day-sunny weathermatic__spinner"></i>
				<i className="wi wi-rain weathermatic__spinner"></i>
				<i className="wi wi-night-alt-cloudy weathermatic__spinner"></i>
        <i className="wi wi-snow weathermatic__spinner"></i>
				<i className="wi wi-cloudy weathermatic__spinner"></i>
			</section>
    );
  }
}