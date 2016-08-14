import {observable} from 'mobx';

export default class LocationModel {

	@observable latitude;
  @observable longitude;
  @observable name;

  constructor(latitude, longitude, name){
  	this.latitude = latitude;
    this.longitude = longitude;
    this.name = name;
  }
}