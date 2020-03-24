
module.exports = {
  jwtSecret: 'test_secreet',
  tokenExpireTime: '1d',
  weatherApi: {
    host: process.env.APP_WEATHER_API_HOST || 'api.openweathermap.org',
    version: process.env.APP_WEATHER_API_VERSION || '2.5',
    apiKey: process.env.APP_WEATHER_API_KEY || 'f7be39e3e3631dee1a8ac30afde3e069'
  },
  development: {
    username: 'root',
    password: null,
    database: 'weather_app',
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: false,
    port: 3306
  },
  test: {
    username: 'root',
    password: null,
    database: 'weather_app',
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: false,
    port: 3306
  },
  production: {
    username: 'root',
    password: null,
    database: 'weather_app',
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: false,
    port: 3306
  },
  serverPort: process.env.SERVER_PORT || 3100
}
