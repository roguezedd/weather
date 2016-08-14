webpackJsonp([0,3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(31);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _weather_app = __webpack_require__(161);
	
	var _weather_app2 = _interopRequireDefault(_weather_app);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(311);
	
	_reactDom2.default.render(_react2.default.createElement(_weather_app2.default, null), document.getElementById('app-container'));

/***/ },

/***/ 161:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _desc, _value, _class2, _descriptor, _descriptor2;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(31);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _sdk = __webpack_require__(162);
	
	var _jquery = __webpack_require__(165);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _mobx = __webpack_require__(170);
	
	var _mobxReact = __webpack_require__(277);
	
	var _components = __webpack_require__(278);
	
	var _location = __webpack_require__(310);
	
	var _location2 = _interopRequireDefault(_location);
	
	var _state = __webpack_require__(297);
	
	var _state2 = _interopRequireDefault(_state);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _initDefineProp(target, property, descriptor, context) {
	  if (!descriptor) return;
	  Object.defineProperty(target, property, {
	    enumerable: descriptor.enumerable,
	    configurable: descriptor.configurable,
	    writable: descriptor.writable,
	    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	  });
	}
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;
	
	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }
	
	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);
	
	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }
	
	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }
	
	  return desc;
	}
	
	function _initializerWarningHelper(descriptor, context) {
	  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
	}
	
	var WeatherApp = (0, _mobxReact.observer)(_class = (_class2 = function (_Component) {
	  _inherits(WeatherApp, _Component);
	
	  function WeatherApp(props) {
	    _classCallCheck(this, WeatherApp);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(WeatherApp).call(this, props));
	
	    _initDefineProp(_this, 'weather', _descriptor, _this);
	
	    _initDefineProp(_this, 'location', _descriptor2, _this);
	
	    _this.WeatherApi = _sdk.WeatherApi;
	    _this.loadWeather = _this.loadWeather.bind(_this);
	    _this.weather = {};
	    _this.location = {};
	    return _this;
	  }
	
	  // events /////////////////////////////////////////
	
	  // helper /////////////////////////////////////////
	
	  // ajax ///////////////////////////////////////////
	
	  _createClass(WeatherApp, [{
	    key: 'findLatLong',
	    value: function findLatLong() {
	      var _this2 = this;
	
	      var d = _jquery2.default.Deferred();
	
	      navigator.geolocation.getCurrentPosition(function (position) {
	        var coords = position.coords;
	        _this2.location = new _location2.default(coords.latitude, coords.longitude);
	        d.resolve(_this2.location);
	      }, function (error) {
	        d.reject(error);
	      });
	
	      return d.promise();
	    }
	  }, {
	    key: 'loadWeather',
	    value: function loadWeather(coords) {
	      return this.WeatherApi.weather(coords.latitude, coords.longitude);
	    }
	  }, {
	    key: 'loadLocation',
	    value: function loadLocation(coords) {
	      var _this3 = this;
	
	      this.WeatherApi.address(coords.latitude, coords.longitude).then(function (data) {
	        var comp = data.results[0].address_components;
	        _this3.location.name = comp[3].short_name + ', ' + comp[5].short_name;
	      });
	    }
	
	    // react //////////////////////////////////////////
	
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _this4 = this;
	
	      console.log('componentWillMount');
	      this.findLatLong().then(function (coords) {
	        _this4.loadLocation(coords);
	        return _this4.loadWeather(coords);
	      }).then(function (data) {
	        _this4.weather = data;
	        _state2.default.loadingErrorMessage = "";
	        _state2.default.weatherLoaded = true;
	      }).fail(function (error) {
	        console.log(error);
	        _state2.default.loadingErrorMessage = "There was an error connecting to the server. Please refresh and try again.";
	      });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      console.log('componentDidMount');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var weather = this.weather;
	      var location = this.location;
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'weathermatic' },
	        _react2.default.createElement(
	          'header',
	          { className: 'weathermatic__header' },
	          'Weathermatic'
	        ),
	        _react2.default.createElement(
	          'section',
	          { className: 'weathermatic__location' },
	          _react2.default.createElement(
	            'h1',
	            null,
	            location.name
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'weathermatic__top' },
	          _react2.default.createElement(
	            'section',
	            { className: 'weathermatic__current' },
	            _react2.default.createElement(_components.CurrentConditions, {
	              current: weather.current })
	          ),
	          _react2.default.createElement(
	            'section',
	            { className: 'weathermatic__charting' },
	            _react2.default.createElement(
	              'div',
	              { className: 'weathermatic__chart' },
	              _react2.default.createElement(_components.WeatherChart, {
	                title: 'Temperature',
	                chartClass: 'temperature-chart',
	                xSeries: this.weather.hourTimestamps,
	                ySeries: this.weather.hourTemperatures })
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'weathermatic__chart' },
	              _react2.default.createElement(_components.WeatherChart, {
	                title: 'Wind Speed',
	                chartClass: 'wind-chart',
	                xSeries: this.weather.hourTimestamps,
	                ySeries: this.weather.hourWindSpeeds })
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'section',
	          { className: 'weathermatic__day-list' },
	          _react2.default.createElement(
	            'h2',
	            null,
	            '5 Day Forecast'
	          ),
	          _react2.default.createElement(_components.DayList, { days: weather.days })
	        ),
	        _react2.default.createElement(_components.Loader, null)
	      );
	    }
	  }]);
	
	  return WeatherApp;
	}(_react.Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'weather', [_mobx.observable], {
	  enumerable: true,
	  initializer: null
	}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'location', [_mobx.observable], {
	  enumerable: true,
	  initializer: null
	})), _class2)) || _class;
	
	exports.default = WeatherApp;
	;

/***/ },

/***/ 162:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.WeatherApi = exports.WeatherResources = exports.WeatherRest = undefined;
	
	var _weather_api = __webpack_require__(163);
	
	var _weather_api2 = _interopRequireDefault(_weather_api);
	
	var _weather_resources = __webpack_require__(167);
	
	var _weather_resources2 = _interopRequireDefault(_weather_resources);
	
	var _weather_rest = __webpack_require__(164);
	
	var _weather_rest2 = _interopRequireDefault(_weather_rest);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.WeatherRest = _weather_rest2.default;
	exports.WeatherResources = _weather_resources2.default;
	exports.WeatherApi = _weather_api2.default;

/***/ },

/***/ 163:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _weather_rest = __webpack_require__(164);
	
	var _weather_rest2 = _interopRequireDefault(_weather_rest);
	
	var _weather_resources = __webpack_require__(167);
	
	var _weather_resources2 = _interopRequireDefault(_weather_resources);
	
	var _weather_parser = __webpack_require__(168);
	
	var _weather_parser2 = _interopRequireDefault(_weather_parser);
	
	var _jquery = __webpack_require__(165);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var WeatherApi = function () {
	  function WeatherApi() {
	    _classCallCheck(this, WeatherApi);
	  }
	
	  _createClass(WeatherApi, [{
	    key: 'weather',
	    value: function weather(lat, longitude) {
	      return _weather_rest2.default.getReq(_weather_resources2.default.WEATHER(lat, longitude)).then(function (json) {
	        console.log(json);
	        return _weather_parser2.default.parseWeather(json);
	      });
	    }
	  }, {
	    key: 'latLong',
	    value: function latLong() {
	      return _weather_rest2.default.getReq(_weather_resources2.default.LATLONG());
	    }
	  }, {
	    key: 'address',
	    value: function address(lat, longitude) {
	      return _weather_rest2.default.getReq(_weather_resources2.default.ADDRESS(lat, longitude));
	    }
	  }]);
	
	  return WeatherApi;
	}();
	
	exports.default = new WeatherApi();

/***/ },

/***/ 164:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(165);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _env = __webpack_require__(166);
	
	var _env2 = _interopRequireDefault(_env);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Rest = function () {
	  function Rest() {
	    _classCallCheck(this, Rest);
	  }
	
	  _createClass(Rest, null, [{
	    key: 'getReq',
	    value: function getReq(url) {
	      return _jquery2.default.ajax({ url: _env2.default.BASEURL + url });
	    }
	  }]);
	
	  return Rest;
	}();
	
	exports.default = Rest;

/***/ },

/***/ 166:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		BASEURL: ''
	};

/***/ },

/***/ 167:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var WeatherResources = function () {
	  function WeatherResources() {
	    _classCallCheck(this, WeatherResources);
	  }
	
	  _createClass(WeatherResources, null, [{
	    key: 'WEATHER',
	    value: function WEATHER(lat, longitude) {
	      return '/weather/forecast/' + lat + ',' + longitude;
	    }
	  }, {
	    key: 'ADDRESS',
	    value: function ADDRESS(lat, longitude) {
	      return '/location/address/' + lat + ',' + longitude;
	    }
	  }, {
	    key: 'BASE_URL',
	    get: function get() {
	      return 'http://localhost:3000';
	    }
	  }]);
	
	  return WeatherResources;
	}();
	
	exports.default = WeatherResources;

/***/ },

/***/ 168:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _weather_data_point = __webpack_require__(169);
	
	var _weather_data_point2 = _interopRequireDefault(_weather_data_point);
	
	var _weather = __webpack_require__(275);
	
	var _weather2 = _interopRequireDefault(_weather);
	
	var _constants = __webpack_require__(276);
	
	var _moment = __webpack_require__(171);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var WeatherParser = function () {
	  function WeatherParser() {
	    _classCallCheck(this, WeatherParser);
	  }
	
	  _createClass(WeatherParser, null, [{
	    key: 'parseWeather',
	    value: function parseWeather(json) {
	
	      var current = WeatherParser.parseCurrent(json.currently);
	      var days = WeatherParser.parseDays(json.daily);
	      var hours = WeatherParser.parseHours(json.hourly);
	
	      return new _weather2.default(current, days, hours);
	    }
	  }, {
	    key: 'parseCurrent',
	    value: function parseCurrent(json) {
	      WeatherParser.hydrateDataPoint(json);
	      var current = new _weather_data_point2.default(json);
	      return current;
	    }
	  }, {
	    key: 'parseDays',
	    value: function parseDays(json) {
	      var dayList = [];
	      var day = void 0;
	
	      json.data.forEach(function (dayJson, index, array) {
	        WeatherParser.hydrateDataPoint(dayJson);
	        day = new _weather_data_point2.default(dayJson);
	        dayList.push(day);
	      });
	
	      return dayList;
	    }
	  }, {
	    key: 'parseHours',
	    value: function parseHours(json) {
	      var hourList = [];
	      var hourTimestamps = ['x'];
	      var hourTemperatures = ['temperature'];
	      var windSpeeds = ['wind speed'];
	      var hour = void 0;
	
	      json.data.forEach(function (hourJson, index, array) {
	        WeatherParser.hydrateDataPoint(hourJson);
	        hour = new _weather_data_point2.default(hourJson);
	        hourList.push(hour);
	        hourTimestamps.push(_moment2.default.unix(hour.time).toDate());
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
	  }, {
	    key: 'hydrateDataPoint',
	    value: function hydrateDataPoint(json) {
	      json.fontIcon = _constants.CONDITION_ICON_MAP[json.icon];
	      json.dayOfWeek = _moment2.default.unix(json.time).format('dddd');
	      json.date = _moment2.default.unix(json.time).format('MM/DD');
	      json.sunriseTime = _moment2.default.unix(json.sunriseTime).format('h:mm a');
	      json.sunsetTime = _moment2.default.unix(json.sunsetTime).format('h:mm a');
	      json.pressure = (29.92 * json.pressure / 1013.25).toFixed(2);
	    }
	  }]);
	
	  return WeatherParser;
	}();
	
	exports.default = WeatherParser;

/***/ },

/***/ 169:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _mobx = __webpack_require__(170);
	
	var _moment = __webpack_require__(171);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var WeatherDataPointModel = function WeatherDataPointModel(json) {
	  _classCallCheck(this, WeatherDataPointModel);
	
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
	};
	
	exports.default = WeatherDataPointModel;

/***/ },

/***/ 275:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
	
	var _mobx = __webpack_require__(170);
	
	function _initDefineProp(target, property, descriptor, context) {
	  if (!descriptor) return;
	  Object.defineProperty(target, property, {
	    enumerable: descriptor.enumerable,
	    configurable: descriptor.configurable,
	    writable: descriptor.writable,
	    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	  });
	}
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;
	
	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }
	
	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);
	
	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }
	
	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }
	
	  return desc;
	}
	
	function _initializerWarningHelper(descriptor, context) {
	  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
	}
	
	var WeatherModel = (_class = function WeatherModel(current, days, hours) {
	  _classCallCheck(this, WeatherModel);
	
	  _initDefineProp(this, 'current', _descriptor, this);
	
	  _initDefineProp(this, 'days', _descriptor2, this);
	
	  _initDefineProp(this, 'hours', _descriptor3, this);
	
	  _initDefineProp(this, 'hourTimestamps', _descriptor4, this);
	
	  _initDefineProp(this, 'hourTemperatures', _descriptor5, this);
	
	  _initDefineProp(this, 'hourWindSpeeds', _descriptor6, this);
	
	  this.current = current;
	  this.days = days;
	  this.hours = hours.list;
	  this.hourTimestamps = hours.timestamps;
	  this.hourTemperatures = hours.temperatures;
	  this.hourWindSpeeds = hours.windSpeeds;
	}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'current', [_mobx.observable], {
	  enumerable: true,
	  initializer: null
	}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'days', [_mobx.observable], {
	  enumerable: true,
	  initializer: null
	}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'hours', [_mobx.observable], {
	  enumerable: true,
	  initializer: null
	}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'hourTimestamps', [_mobx.observable], {
	  enumerable: true,
	  initializer: null
	}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'hourTemperatures', [_mobx.observable], {
	  enumerable: true,
	  initializer: null
	}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'hourWindSpeeds', [_mobx.observable], {
	  enumerable: true,
	  initializer: null
	})), _class);
	exports.default = WeatherModel;

/***/ },

/***/ 276:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var CONDITION_ICON_MAP = exports.CONDITION_ICON_MAP = {
		'clear-day': 'wi-day-sunny',
		'clear-night': 'wi-night-clear',
		rain: 'wi-rain',
		snow: 'wi-snow',
		sleet: 'wi-sleet',
		wind: 'wi-strong-wind',
		fog: 'wi-fog',
		cloudy: 'wi-cloudy',
		'partly-cloudy-day': 'wi-day-cloudy',
		'partly-cloudy-night': 'wi-night-alt-cloudy'
	};

/***/ },

/***/ 278:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.WeatherChart = exports.Loader = exports.CurrentConditions = exports.DayList = exports.Day = exports.WeatherIcon = undefined;
	
	var _weather_icon = __webpack_require__(279);
	
	var _weather_icon2 = _interopRequireDefault(_weather_icon);
	
	var _day = __webpack_require__(284);
	
	var _day2 = _interopRequireDefault(_day);
	
	var _day_list = __webpack_require__(287);
	
	var _day_list2 = _interopRequireDefault(_day_list);
	
	var _current_conditions = __webpack_require__(290);
	
	var _current_conditions2 = _interopRequireDefault(_current_conditions);
	
	var _loader = __webpack_require__(296);
	
	var _loader2 = _interopRequireDefault(_loader);
	
	var _weather_chart = __webpack_require__(303);
	
	var _weather_chart2 = _interopRequireDefault(_weather_chart);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.WeatherIcon = _weather_icon2.default;
	exports.Day = _day2.default;
	exports.DayList = _day_list2.default;
	exports.CurrentConditions = _current_conditions2.default;
	exports.Loader = _loader2.default;
	exports.WeatherChart = _weather_chart2.default;

/***/ },

/***/ 279:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _mobxReact = __webpack_require__(277);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(280);
	
	var WeatherIcon = (0, _mobxReact.observer)(_class = function (_Component) {
	  _inherits(WeatherIcon, _Component);
	
	  function WeatherIcon() {
	    _classCallCheck(this, WeatherIcon);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(WeatherIcon).call(this));
	  }
	
	  _createClass(WeatherIcon, [{
	    key: 'render',
	    value: function render() {
	      var css = this.props.css || '';
	      var iconCss = this.props.iconCss || '';
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'weathermatic__icon ' + css },
	        _react2.default.createElement('i', { className: 'wi ' + iconCss })
	      );
	    }
	  }]);
	
	  return WeatherIcon;
	}(_react.Component)) || _class;
	
	exports.default = WeatherIcon;

/***/ },

/***/ 280:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 284:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _mobxReact = __webpack_require__(277);
	
	var _weather_icon = __webpack_require__(279);
	
	var _weather_icon2 = _interopRequireDefault(_weather_icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(285);
	
	var Day = (0, _mobxReact.observer)(_class = function (_Component) {
	  _inherits(Day, _Component);
	
	  function Day() {
	    _classCallCheck(this, Day);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Day).call(this));
	  }
	
	  _createClass(Day, [{
	    key: 'render',
	    value: function render() {
	      var day = this.props.day;
	
	      return _react2.default.createElement(
	        'div',
	        { key: day.time, className: 'day' },
	        _react2.default.createElement(
	          'div',
	          { className: 'day__header' },
	          _react2.default.createElement(
	            'span',
	            { className: 'day__day-of-week' },
	            day.dayOfWeek
	          ),
	          ' ',
	          _react2.default.createElement(
	            'span',
	            { className: 'day__date' },
	            day.date
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'day__content' },
	          _react2.default.createElement(
	            'div',
	            { className: 'day__temp' },
	            _react2.default.createElement(
	              'span',
	              { className: 'day__temp__max' },
	              Math.round(day.temperatureMax),
	              '°'
	            ),
	            ' | ',
	            _react2.default.createElement(
	              'span',
	              { className: 'day__temp__min' },
	              Math.round(day.temperatureMin),
	              '°'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'day__icon-container' },
	            _react2.default.createElement(_weather_icon2.default, { css: 'day__icon', iconCss: day.fontIcon })
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { 'class': 'day__footer' },
	          _react2.default.createElement(
	            'div',
	            { className: 'summary' },
	            day.summary
	          )
	        )
	      );
	    }
	  }]);
	
	  return Day;
	}(_react.Component)) || _class;
	
	exports.default = Day;

/***/ },

/***/ 285:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 287:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _mobxReact = __webpack_require__(277);
	
	var _day = __webpack_require__(284);
	
	var _day2 = _interopRequireDefault(_day);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(288);
	
	var DayList = (0, _mobxReact.observer)(_class = function (_Component) {
	  _inherits(DayList, _Component);
	
	  function DayList() {
	    _classCallCheck(this, DayList);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(DayList).call(this));
	  }
	
	  _createClass(DayList, [{
	    key: 'render',
	    value: function render() {
	
	      var days = this.props.days ? this.props.days.slice(0, 5) : [];
	      var dayComponents = [];
	
	      days.forEach(function (day, index, array) {
	        dayComponents.push(_react2.default.createElement(_day2.default, { key: day.time, day: day }));
	      });
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'day-list' },
	        dayComponents
	      );
	    }
	  }]);
	
	  return DayList;
	}(_react.Component)) || _class;
	
	exports.default = DayList;

/***/ },

/***/ 288:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 290:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _mobxReact = __webpack_require__(277);
	
	var _weather_icon = __webpack_require__(279);
	
	var _weather_icon2 = _interopRequireDefault(_weather_icon);
	
	var _temperature = __webpack_require__(291);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(292);
	__webpack_require__(294);
	
	var CurrentConditions = (0, _mobxReact.observer)(_class = function (_Component) {
	  _inherits(CurrentConditions, _Component);
	
	  function CurrentConditions() {
	    _classCallCheck(this, CurrentConditions);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CurrentConditions).call(this));
	  }
	
	  _createClass(CurrentConditions, [{
	    key: 'currentClass',
	    value: function currentClass(val) {
	      return (0, _temperature.temperatureBuildClass)(val);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var current = this.props.current || {};
	
	      return _react2.default.createElement(
	        'div',
	        { className: "current " + this.currentClass(current.temperature) },
	        _react2.default.createElement(
	          'div',
	          { className: 'current__left' },
	          _react2.default.createElement(_weather_icon2.default, { css: 'current__icon', iconCss: current.fontIcon }),
	          _react2.default.createElement(
	            'span',
	            { className: 'current__summary' },
	            current.summary
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'current__right' },
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              'div',
	              { className: 'current__icon--sm__container' },
	              _react2.default.createElement(_weather_icon2.default, { css: 'current__icon--sm', iconCss: current.fontIcon })
	            ),
	            _react2.default.createElement(
	              'span',
	              { className: 'current__temp' },
	              Math.round(current.temperature),
	              '°F'
	            )
	          ),
	          _react2.default.createElement(
	            'ul',
	            { className: 'current__detail' },
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                'label',
	                null,
	                'Dew Point'
	              ),
	              ' ',
	              _react2.default.createElement(
	                'span',
	                null,
	                Math.round(current.dewPoint),
	                '°F'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                'label',
	                null,
	                'Humidity'
	              ),
	              ' ',
	              _react2.default.createElement(
	                'span',
	                null,
	                current.humidity * 100,
	                '%'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                'label',
	                null,
	                'Wind Speed'
	              ),
	              ' ',
	              _react2.default.createElement(
	                'span',
	                null,
	                Math.round(current.windSpeed),
	                ' mph'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                'label',
	                null,
	                'Precip. Chance'
	              ),
	              ' ',
	              _react2.default.createElement(
	                'span',
	                null,
	                Math.round(current.precipProbability * 100),
	                '%'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                'label',
	                null,
	                'Pressure'
	              ),
	              ' ',
	              _react2.default.createElement(
	                'span',
	                null,
	                current.pressure,
	                ' in'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return CurrentConditions;
	}(_react.Component)) || _class;
	
	exports.default = CurrentConditions;

/***/ },

/***/ 291:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var temperatureBuildClass = function temperatureBuildClass(val) {
	
	  var rootClass = 'weathermatic-';
	
	  if (val < 45) {
	    return rootClass + 'cold';
	  } else if (rootClass < 65) {
	    return rootClass + 'cool';
	  } else if (val < 80) {
	    return rootClass + 'warm';
	  }
	
	  return rootClass + 'hot';
	};
	
	exports.temperatureBuildClass = temperatureBuildClass;

/***/ },

/***/ 292:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 294:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 296:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _mobxReact = __webpack_require__(277);
	
	var _state = __webpack_require__(297);
	
	var _state2 = _interopRequireDefault(_state);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(298);
	
	var WeatherIcon = (0, _mobxReact.observer)(_class = function (_Component) {
	  _inherits(WeatherIcon, _Component);
	
	  function WeatherIcon() {
	    _classCallCheck(this, WeatherIcon);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(WeatherIcon).call(this));
	  }
	
	  _createClass(WeatherIcon, [{
	    key: 'loaderClass',
	    value: function loaderClass(val) {
	      return _state2.default.weatherLoaded ? "weathermatic__loader--hidden" : '';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	
	      var msg = _state2.default.loadingErrorMessage;
	
	      return _react2.default.createElement(
	        'section',
	        { className: "weathermatic__loader " + this.loaderClass() },
	        _react2.default.createElement(
	          'div',
	          { className: 'weathermatic__loader__line' },
	          _react2.default.createElement(
	            'span',
	            { className: 'weathermatic__loader__msg' },
	            'Loading Weathermatic...'
	          ),
	          ' ',
	          _react2.default.createElement('i', { className: 'wi wi-day-sunny weathermatic__spinner' }),
	          _react2.default.createElement('i', { className: 'wi wi-rain weathermatic__spinner' }),
	          _react2.default.createElement('i', { className: 'wi wi-night-alt-cloudy weathermatic__spinner' }),
	          _react2.default.createElement('i', { className: 'wi wi-snow weathermatic__spinner' }),
	          _react2.default.createElement('i', { className: 'wi wi-cloudy weathermatic__spinner' })
	        ),
	        _react2.default.createElement(
	          'span',
	          null,
	          msg
	        )
	      );
	    }
	  }]);
	
	  return WeatherIcon;
	}(_react.Component)) || _class;
	
	exports.default = WeatherIcon;

/***/ },

/***/ 297:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _desc, _value, _class, _descriptor, _descriptor2;
	
	var _mobx = __webpack_require__(170);
	
	function _initDefineProp(target, property, descriptor, context) {
	  if (!descriptor) return;
	  Object.defineProperty(target, property, {
	    enumerable: descriptor.enumerable,
	    configurable: descriptor.configurable,
	    writable: descriptor.writable,
	    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	  });
	}
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;
	
	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }
	
	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);
	
	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }
	
	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }
	
	  return desc;
	}
	
	function _initializerWarningHelper(descriptor, context) {
	  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
	}
	
	var StateShared = (_class = function StateShared() {
	  _classCallCheck(this, StateShared);
	
	  _initDefineProp(this, 'weatherLoaded', _descriptor, this);
	
	  _initDefineProp(this, 'loadingErrorMessage', _descriptor2, this);
	}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'weatherLoaded', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return false;
	  }
	}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'loadingErrorMessage', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return '';
	  }
	})), _class);
	exports.default = new StateShared();

/***/ },

/***/ 298:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 303:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _mobxReact = __webpack_require__(277);
	
	var _c = __webpack_require__(304);
	
	var _c2 = _interopRequireDefault(_c);
	
	var _d = __webpack_require__(305);
	
	var _d2 = _interopRequireDefault(_d);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(306);
	__webpack_require__(308);
	
	var WeatherChart = (0, _mobxReact.observer)(_class = function (_Component) {
			_inherits(WeatherChart, _Component);
	
			function WeatherChart() {
					_classCallCheck(this, WeatherChart);
	
					return _possibleConstructorReturn(this, Object.getPrototypeOf(WeatherChart).call(this));
			}
	
			_createClass(WeatherChart, [{
					key: 'componentDidMount',
					value: function componentDidMount() {
							var _this2 = this;
	
							setTimeout(function () {
									_this2.drawGraph();
							}, 100);
					}
			}, {
					key: 'componentDidUpdate',
					value: function componentDidUpdate() {
							var _this3 = this;
	
							setTimeout(function () {
									_this3.drawGraph();
							}, 100);
					}
			}, {
					key: 'drawGraph',
					value: function drawGraph() {
	
							var xSeries = this.props.xSeries || [];
							var ySeries = this.props.ySeries || [];
	
							_c2.default.generate({
									data: {
											x: 'x',
											columns: [xSeries, ySeries]
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
			}, {
					key: 'render',
					value: function render() {
	
							var chartClass = this.props.chartClass;
							var title = this.props.title || '';
							var style = { height: '100%' };
							return _react2.default.createElement(
									'section',
									{ className: 'weather-chart-panel' },
									_react2.default.createElement(
											'header',
											null,
											title
									),
									_react2.default.createElement(
											'div',
											{ className: 'weather-chart-panel__content' },
											_react2.default.createElement('div', { className: "weather-chart " + chartClass, style: style })
									)
							);
					}
			}]);
	
			return WeatherChart;
	}(_react.Component)) || _class;
	
	exports.default = WeatherChart;

/***/ },

/***/ 306:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 308:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 310:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3;
	
	var _mobx = __webpack_require__(170);
	
	function _initDefineProp(target, property, descriptor, context) {
	  if (!descriptor) return;
	  Object.defineProperty(target, property, {
	    enumerable: descriptor.enumerable,
	    configurable: descriptor.configurable,
	    writable: descriptor.writable,
	    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	  });
	}
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;
	
	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }
	
	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);
	
	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }
	
	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }
	
	  return desc;
	}
	
	function _initializerWarningHelper(descriptor, context) {
	  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
	}
	
	var LocationModel = (_class = function LocationModel(latitude, longitude, name) {
	  _classCallCheck(this, LocationModel);
	
	  _initDefineProp(this, 'latitude', _descriptor, this);
	
	  _initDefineProp(this, 'longitude', _descriptor2, this);
	
	  _initDefineProp(this, 'name', _descriptor3, this);
	
	  this.latitude = latitude;
	  this.longitude = longitude;
	  this.name = name;
	}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'latitude', [_mobx.observable], {
	  enumerable: true,
	  initializer: null
	}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'longitude', [_mobx.observable], {
	  enumerable: true,
	  initializer: null
	}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'name', [_mobx.observable], {
	  enumerable: true,
	  initializer: null
	})), _class);
	exports.default = LocationModel;

/***/ },

/***/ 311:
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	// W3C Geolocation API (Level 1) "Polyfill" Implementation
	// This uses freegeoip.org to estimate location from IP address
	// by Joshua Bell - https://github.com/inexorabletash.polyfill
	
	// PUBLIC DOMAIN
	
	(function () {
	  'use strict';
	
	  if (!navigator || !window || !document) {
	    return;
	  }
	
	  if (!('now' in Date)) Date.now = function () {
	    return Number(new Date());
	  };
	
	  var GEOIP_SERVICE_JSONP = 'https://freegeoip.net/json/google.com?callback=';
	  var SERVICE_THROTTLE_QPS = 1000 / (60 * 60); // 1000/hour
	  var POLITENESS_FACTOR = 2;
	  var POLL_TIMER_MS = 1000 / SERVICE_THROTTLE_QPS * POLITENESS_FACTOR;
	
	  var DISTANCE_THRESHOLD_M = 20;
	  var EARTH_RADIUS_M = 6.384e6;
	
	  // TODO: Implement user prompt and store preference w/ cookies
	
	  function PositionError(code, message) {
	    this.code = code;
	    this.message = message;
	  }
	  PositionError.PERMISSION_DENIED = 1;
	  PositionError.POSITION_UNAVAILABLE = 2;
	  PositionError.TIMEOUT = 3;
	  PositionError.prototype = new Error();
	
	  function Coordinates(data) {
	    this.accuracy = EARTH_RADIUS_M * Math.PI;
	    this.altitude = null;
	    this.altitudeAccuracy = null;
	    this.heading = null;
	    this.latitude = Number(data.latitude);
	    this.longitude = Number(data.longitude);
	    this.speed = null;
	  }
	
	  function Geoposition(data) {
	    this.timestamp = Date.now();
	    this.coords = new Coordinates(data);
	  }
	
	  Geoposition.distance = function (p1, p2) {
	    if (p1 === p2) {
	      return 0;
	    }
	    if (!p1 || !p2) {
	      return Infinity;
	    }
	    // c/o http://jsp.vs19.net/lr/sphere-distance.php
	    function angle(b1, l1, b2, l2) {
	      function d2r(d) {
	        return d * Math.PI / 180;
	      }
	      var p1 = Math.cos(d2r(l1 - l2)),
	          p2 = Math.cos(d2r(b1 - b2)),
	          p3 = Math.cos(d2r(b1 + b2));
	      return Math.acos((p1 * (p2 + p3) + (p2 - p3)) / 2);
	    }
	    return EARTH_RADIUS_M * angle(p1.coords.latitude, p1.coords.longitude, p2.coords.latitude, p2.coords.longitude);
	  };
	
	  function GeolocationPolyfill() {
	    var cached = null;
	
	    function dispatch(handler, data) {
	      if (typeof handler === 'function') {
	        setTimeout(function () {
	          handler(data);
	        }, 0);
	      } else if ((typeof handler === 'undefined' ? 'undefined' : _typeof(handler)) === 'object' && handler && 'handleEvent' in handler) {
	        handler = handler.handleEvent;
	        setTimeout(function () {
	          handler(data);
	        }, 0);
	      }
	    }
	
	    function acquireLocation(onSuccess, onFailure, enableHighAccuracy) {
	      var script = document.createElement('SCRIPT'),
	          cbname = '_geoip_callback_' + Math.floor(Math.random() * (1 << 30));
	      function cleanup() {
	        if (script.parentNode) {
	          script.parentNode.removeChild(script);
	        }
	        try {
	          delete window[cbname];
	        } catch (ex) {
	          window[cbname] = void 0; /*IE8-*/
	        }
	      }
	      window[cbname] = function (data) {
	        cleanup();
	        onSuccess(new Geoposition(data));
	      };
	      script.onerror = function (e) {
	        cleanup();
	        onFailure(e);
	      };
	      script.src = GEOIP_SERVICE_JSONP + encodeURIComponent(cbname);
	      (document.head || document.body || document.documentElement).appendChild(script);
	      return cleanup;
	    }
	
	    this.getCurrentPosition = function (successCallback, errorCallback, options) {
	      if (!successCallback) {
	        throw TypeError('The successCallback parameter is null.');
	      }
	
	      if (options && 'maximumAge' in options) {
	        var maximumAge = options.maximumAge | 0;
	        if (maximumAge < 0) maximumAge = 0;
	      } else {
	        maximumAge = 0;
	      }
	
	      if (options && 'timeout' in options) {
	        var timeout = options.timeout | 0;
	        if (timeout < 0) timeout = 0;
	      } else {
	        timeout = Infinity;
	      }
	
	      if (options && 'enableHighAccuracy' in options) {
	        var enableHighAccuracy = Boolean(enableHighAccuracy);
	      } else {
	        enableHighAccuracy = false;
	      }
	
	      if (cached && Date.now() - cached.timestamp <= maximumAge) {
	        dispatch(successCallback, cached);
	        return;
	      }
	
	      if (timeout === 0) {
	        dispatch(errorCallback, new PositionError(PositionError.TIMEOUT, 'Timed out'));
	        return;
	      }
	
	      var cancelOperation = acquireLocation(onSuccess, onFailure, enableHighAccuracy);
	
	      var timedOut = false,
	          timerId = 0;
	      if (isFinite(timeout)) {
	        timerId = setTimeout(function () {
	          timedOut = true;
	          cancelOperation();
	          dispatch(errorCallback, new PositionError(PositionError.TIMEOUT, 'Timed out'));
	        }, timeout);
	      }
	
	      function onSuccess(position) {
	        cached = position;
	        if (timedOut) return;
	        if (timerId) clearTimeout(timerId);
	        dispatch(successCallback, position);
	      }
	
	      function onFailure() {
	        if (timedOut) return;
	        if (timerId) clearTimeout(timerId);
	        dispatch(errorCallback, new PositionError(PositionError.POSITION_UNAVAILABLE, 'Position unavailable'));
	      }
	    };
	
	    var timers = [],
	        counter = 0;
	
	    this.watchPosition = function (successCallback, errorCallback, options) {
	      if (!successCallback) {
	        throw TypeError('The successCallback parameter is null.');
	      }
	
	      if (options && 'maximumAge' in options) {
	        var maximumAge = options.maximumAge | 0;
	        if (maximumAge < 0) maximumAge = 0;
	      } else {
	        maximumAge = 0;
	      }
	
	      if (options && 'timeout' in options) {
	        var timeout = options.timeout | 0;
	        if (timeout < 0) timeout = 0;
	      } else {
	        timeout = Infinity;
	      }
	
	      if (options && 'enableHighAccuracy' in options) {
	        var enableHighAccuracy = Boolean(enableHighAccuracy);
	      } else {
	        enableHighAccuracy = false;
	      }
	
	      if (cached && Date.now() - cached.timestamp < maximumAge) {
	        dispatch(successCallback, cached);
	      }
	
	      var intervalId = setInterval(systemEvent, POLL_TIMER_MS);
	      var timerDetails = {
	        intervalId: intervalId,
	        cleared: false
	      };
	
	      var lastPosition = null,
	          timerId = 0;
	      acquisitionSteps();
	      function acquisitionSteps() {
	        var cancelOperation = acquireLocation(onSuccess, onFailure, enableHighAccuracy);
	
	        var timedOut = false;
	        if (isFinite(timeout) && !timerId) {
	          timerId = setTimeout(function () {
	            timedOut = true;
	            timerId = 0;
	            cancelOperation();
	            if (!timerDetails.cleared) dispatch(errorCallback, new PositionError(PositionError.TIMEOUT, 'Timed out'));
	          }, timeout);
	        }
	
	        function onSuccess(position) {
	          cached = position;
	          if (timedOut || timerDetails.cleared) return;
	          if (timerId) timerId = clearTimeout(timerId);
	
	          if (Geoposition.distance(lastPosition, position) >= DISTANCE_THRESHOLD_M) {
	            lastPosition = position;
	            dispatch(successCallback, position);
	          }
	        }
	
	        function onFailure() {
	          if (timedOut || timerDetails.cleared) return;
	          if (timerId) timerId = clearTimeout(timerId);
	          dispatch(errorCallback, new PositionError(PositionError.POSITION_UNAVAILABLE, 'Position unavailable'));
	        }
	      }
	
	      function systemEvent() {
	        acquisitionSteps();
	      }
	
	      var watchId = ++counter;
	      timers[watchId] = timerDetails;
	      return watchId;
	    };
	
	    this.clearWatch = function (watchId) {
	      watchId = watchId | 0;
	      if (!(watchId in timers)) {
	        return;
	      }
	
	      var timerDetails = timers[watchId];
	      delete timers[watchId];
	      clearInterval(timerDetails.intervalId);
	      timerDetails.cleared = true;
	    };
	  }
	
	  // Exports
	  if (!navigator.geolocation) {
	    navigator.geolocation = new GeolocationPolyfill();
	  }
	})();

/***/ }

});
//# sourceMappingURL=app.00f727a50c5423a2be6a.js.map