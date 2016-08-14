## Requirements

Works with node version 5.3.0.

## Installation

```sh
git clone https://github.com/roguezedd/weather.git

cd weather/app
npm install

cd ../proxy
npm install

[ optional ]
vi .env

[ add entries for the following tokens ]
FORECAST_AUTH=yourTokenHere
GOOGLE_AUTH=yourTokenHere

```

## Run the app

First terminal
```sh

cd weather/app
npm start

```

Second terminal
```sh

cd weather/proxy

npm start --mockApi true

[ or if you added an .env file ]
npm start

```

## Build the app

```sh

cd weather/app
npm run build

```

## Test the app

```sh

cd weather/app
npm run test

```