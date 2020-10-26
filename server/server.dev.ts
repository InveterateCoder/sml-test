require('source-map-support').install()
const config = require('../webpack.config.js')()[1]
const app = require('express')()
const wpDevMiddleware = require('webpack-dev-middleware')
const wpHotMiddleware = require('webpack-hot-middleware')
const webpack = require('webpack')
import startServer from './startServer'


const compiler = webpack(config)
app.use(wpDevMiddleware(compiler))
app.use(wpHotMiddleware(compiler))

startServer(app)
