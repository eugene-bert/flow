const throng = require('throng')
const mongoose = require('mongoose')
const url = require('url')
const app = require('./app')
const config = require('./config')
const open = require('open');

const mongoHost = new url.URL(config.MONGODB_URI).host

const startServer = async function () {
  const mongooseOptions = {
    useFindAndModify: true,
    readPreference: 'primaryPreferred',
    useNewUrlParser: true,
    useUnifiedTopology: true,
    promiseLibrary: global.Promise
  }

  try {
    await Promise.all([
      mongoose.connect(config.MONGODB_URI, mongooseOptions),
      app.listen(config.PORT)
    ])

    // eslint-disable-next-line no-console
    console.log(`Server has started on port: ${config.PORT}, connected to mongo at ${mongoHost}, link: http://localhost:${config.PORT}/`)
    open(`http://localhost:${config.PORT}/`)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Could not start the app: `, error)
  }
}

throng({
  workers: config.WORKERS,
  lifetime: Infinity
}, startServer)
