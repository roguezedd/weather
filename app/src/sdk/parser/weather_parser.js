import WeatherDataPointModel from '../model/weather_data_point';
import WeatherModel from '../model/weather';
import {CONDITION_ICON_MAP} from './constants';
import Moment from 'moment';

export default class WeatherParser {
  constructor() {
  }

  static parseWeather(json){

    const current = WeatherParser.parseCurrent(json.currently);
    const days = WeatherParser.parseDays(json.daily);
    const hours = WeatherParser.parseHours(json.hourly);

    return new WeatherModel(current, days, hours);
  }

  static parseCurrent(json){
    WeatherParser.hydrateDataPoint(json);
    const current = new WeatherDataPointModel(json);
    return current;
  }

  static parseDays(json){
    let dayList = [];
    let day;

    json.data.forEach((dayJson, index, array) => {
      WeatherParser.hydrateDataPoint(dayJson);
      day = new WeatherDataPointModel(dayJson);
      dayList.push(day);
    });

    return dayList;
  }

  static parseHours(json){
    let hourList = [];
    let hourTimestamps = ['x'];
    let hourTemperatures = ['temperature'];
    let windSpeeds = ['wind speed'];
    let hour;

    json.data.forEach((hourJson, index, array) => {
      WeatherParser.hydrateDataPoint(hourJson);
      hour = new WeatherDataPointModel(hourJson);
      hourList.push(hour);
      hourTimestamps.push(Moment.unix(hour.time).toDate());
      hourTemperatures.push(hour.temperature);
      windSpeeds.push(hour.windSpeed);
    });

    return {
      list: hourList,
      timestamps: hourTimestamps,
      temperatures: hourTemperatures,
      windSpeeds: windSpeeds
    };
  }

  static hydrateDataPoint(json){
    json.fontIcon = CONDITION_ICON_MAP[json.icon];
    json.dayOfWeek = Moment.unix(json.time).format('dddd');
    json.date = Moment.unix(json.time).format('MM/DD');
    json.sunriseTime = Moment.unix(json.sunriseTime).format('h:mm a');
    json.sunsetTime = Moment.unix(json.sunsetTime).format('h:mm a');
    json.pressure = ((29.92 * json.pressure) / 1013.25).toFixed(2);
  }
}