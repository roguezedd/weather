import {observable} from 'mobx';

export default class WeatherModel {

	@observable current;
  @observable days;
  @observable hours;
  @observable hourTimestamps;
  @observable hourTemperatures;
  @observable hourWindSpeeds;

  constructor(current, days, hours){
  	this.current = current;
    this.days = days;
    this.hours = hours.list;
    this.hourTimestamps = hours.timestamps;
    this.hourTemperatures = hours.temperatures;
    this.hourWindSpeeds = hours.windSpeeds;
  }
}