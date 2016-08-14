import WeatherParser from './weather_parser';

describe('WeatherParser', () => {

	let expectDataPointToEqual = (result, expected) => {
			expect(result.time).toBe(expected.time);
   		expect(result.dayOfWeek).toBe(expected.dayOfWeek);
   		expect(result.date).toBe(expected.date); 
   		expect(result.icon).toBe(expected.icon);
   		expect(result.fontIcon).toBe(expected.fontIcon);
   		expect(result.summary).toBe(expected.summary);
   		expect(result.temperature).toBe(expected.temperature);
   		expect(result.temperatureMin).toBe(expected.temperatureMin);
   		expect(result.temperatureMinTime).toBe(expected.temperatureMinTime);
   		expect(result.temperatureMax).toBe(expected.temperatureMax);
   		expect(result.temperatureMaxTime).toBe(expected.temperatureMaxTime);
   		expect(result.dewPoint).toBe(expected.dewPoint);
   		expect(result.humidity).toBe(expected.humidity);
   		expect(result.windSpeed).toBe(expected.windSpeed);
   		expect(result.precipProbability).toBe(expected.precipProbability);
   		expect(result.sunriseTime).toBe(expected.sunriseTime);
   		expect(result.sunsetTime).toBe(expected.sunsetTime);
   		expect(result.pressure).toBe(expected.pressure);
	}

	it('Parses Currently', () => {

		let currentlyMock = {  
      "time":1470982045,
      "summary":"Partly Cloudy",
      "icon":"partly-cloudy-night",
      "nearestStormDistance":26,
      "nearestStormBearing":20,
      "precipIntensity":0,
      "precipProbability":0,
      "temperature":56.99,
      "apparentTemperature":56.99,
      "dewPoint":51.94,
      "humidity":0.83,
      "windSpeed":3.95,
      "windBearing":271,
      "visibility":8.79,
      "cloudCover":0.26,
      "pressure":1016.12,
      "ozone":302.35
   };

   let expected = {
   		time: 1470982045, 
   		dayOfWeek: 'Thursday', 
   		date: '08/11', 
   		icon: 'partly-cloudy-night', 
   		fontIcon: 'wi-night-alt-cloudy', 
   		summary: 'Partly Cloudy', 
   		temperature: 56.99, 
   		temperatureMin: undefined, 
   		temperatureMinTime: undefined, 
   		temperatureMax: undefined, 
   		temperatureMaxTime: undefined, 
   		dewPoint: 51.94, 
   		humidity: 0.83, 
   		windSpeed: 3.95, 
   		precipProbability: 0, 
   		sunriseTime: 'Invalid date', 
   		sunsetTime: 'Invalid date', 
   		pressure: '30.00'
   };

		let result = WeatherParser.parseCurrent(currentlyMock);

		expectDataPointToEqual(result, expected);
  });

});