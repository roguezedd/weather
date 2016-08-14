import WeatherRest from './weather_rest';
import WeatherResources from './weather_resources';
import WeatherParser from './parser/weather_parser';
import $ from 'jquery';

class WeatherApi {
  constructor(){}

  weather(lat, longitude){
    return WeatherRest.getReq(WeatherResources.WEATHER(lat, longitude))
    .then((json) => {
      console.log(json);
      return WeatherParser.parseWeather(json);
    });
  }

  latLong(){
    return WeatherRest.getReq(WeatherResources.LATLONG());
  }

  address(lat, longitude){
    return WeatherRest.getReq(WeatherResources.ADDRESS(lat, longitude));
  }
}

export default new WeatherApi();