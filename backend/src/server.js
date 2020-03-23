const database = require('./database')
const Koa = require('koa')
const cors = require('@koa/cors')
const bodyParser = require('koa-bodyparser')
const logger = require('koa-logger')
const koaJwt = require('koa-jwt')
const config = require('../config/config.js')
const dbConfig = config[process.env.NODE_ENV || 'development']
const userCRUDRoutes = require('../routes/userCRUD')
const userAPIRoutes = require('../routes/userAPI')
const weatherAPIRoutes = require('../routes/weatherAPI')

const initialise = async () => {
  try {
    const app = new Koa()
    app.use(bodyParser())
    if (process.env.NODE_ENV === 'development') {
      app.use(logger())
    }

    app.use(cors({
      allowMethods: ['GET', 'POST', 'DELETE'],
      credentials: true,
      allowHeaders: ['Origin, X-Requested-With, Content-Type, Accept, X-User-Id, X-Auth-Token', 'Authorization', 'Accept']
    }

    ))
    app.use(
      koaJwt({
        secret: config.jwtSecret
      }).unless({
        path: ['/api/user/login', '/api/user/register']
      })
    )
    app.use(userAPIRoutes.routes())
    app.use(weatherAPIRoutes.routes())
    app.use(userCRUDRoutes.routes())
    const connectionDetails = {
      host: dbConfig.host || 'localhost',
      username: dbConfig.username || 'root',
      password: dbConfig.password || null,
      database: dbConfig.database || 'weather_app',
      port: dbConfig.port || 3306
    }
    await database.connect(connectionDetails)

    app.listen(config.serverPort)
  } catch (error) {
    process.exit(1)
  }
}

initialise()
