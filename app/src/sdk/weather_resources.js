export default class WeatherResources {
  constructor(){}

  static get BASE_URL(){ return 'http://localhost:3000'};

  static WEATHER(lat, longitude) { 
    return `/weather/forecast/${lat},${longitude}`; 
  }
  
  static ADDRESS(lat, longitude) { 
    return `/location/address/${lat},${longitude}`; 
  }
}