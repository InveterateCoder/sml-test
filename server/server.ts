import path from 'path'
import dotenv from 'dotenv'
import dotenvExpand from 'dotenv-expand'
import express from 'express'
import { connect } from 'mongoose'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './swagger.json'
import apiRoutes from './infrastructure/apiRoutes'
import renderController from './controllers/renderController'

dotenvExpand(dotenv.config())

const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/fake_school'
const port = process.env.PORT || 8000

async function startServer() {
  const app = express()
  let server = null
  try {
    app
      .use(express.static(path.resolve(__dirname, '..', '..', 'client', 'build')))
      .use(express.json())
      .use(express.urlencoded({ extended: true }))
      .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
      .use('/api', apiRoutes)

    app.get('*', renderController)

    await connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    server = app.listen(port, () => console.log(`server started on port ${port}`))
  } catch (err) {
    server?.close()
    console.error(err)
  }
}

startServer()