import React, {Component} from 'react';
import {observer} from "mobx-react";
import c3 from 'c3';
import d3 from 'd3';

require('./c3.css');
require('./weather_chart.css');

@observer 
export default class WeatherChart extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
		this.drawGraph();
  }

  componentDidUpdate() {
		this.drawGraph();
  }

  drawGraph(){

  	const xSeries = this.props.xSeries || [];
  	const ySeries = this.props.ySeries || [];

  	c3.generate({
	    data: {
	        x: 'x',
	        columns: [
	            xSeries,
	            ySeries
	        ]
	    },
	    axis: {
	        x: {
	            type: 'timeseries',
	            tick: {
	                culling: true
	            }
	        },
	        y: {
	            tick: {
	                culling: true
	            }
	        }
	    },
	    legend: {
        show: false
    	},
	    padding: {
	    	top: 10,
	    	right: 15,
	    	bottom: 5,
	    	left: 35
	    },
	    bindto: '.' + this.props.chartClass
		});
  }

  render() {

  	const chartClass = this.props.chartClass;
  	const style = {height: '100%'};
    return (
    	<div className={"weather-chart " + chartClass} style={style}></div>
    );
  }
}
