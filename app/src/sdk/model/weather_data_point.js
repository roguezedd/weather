import {observable} from 'mobx';
import Moment from 'moment';

export default class WeatherDataPointModel {

  constructor(json){
    this.time = json.time;
    this.dayOfWeek = json.dayOfWeek;
    this.date = json.date;
    this.icon = json.icon;
    this.fontIcon = json.fontIcon;
    this.summary = json.summary;
    this.temperature = json.temperature;
    this.temperatureMin = json.temperatureMin;
    this.temperatureMinTime = json.temperatureMinTime;
    this.temperatureMax = json.temperatureMax;
    this.temperatureMaxTime = json.temperatureMaxTime;
    this.dewPoint = json.dewPoint;
    this.humidity = json.humidity;
    this.windSpeed = json.windSpeed;
    this.precipProbability = json.precipProbability;
    this.sunriseTime = json.sunriseTime;
    this.sunsetTime = json.sunsetTime;
    this.pressure = json.pressure;
  }
}