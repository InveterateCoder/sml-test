import path from 'path'
import dotenv from 'dotenv'
import dotenvExpand from 'dotenv-expand'
import express, { Express } from 'express'
import { connect } from 'mongoose'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './swagger.json'
import apiRoutes from './infrastructure/apiRoutes'
import renderController from './controllers/renderController'

dotenvExpand(dotenv.config())

const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/fake_school'
const port = process.env.PORT || 8000

async function startServer(application: Express = express()): Promise<void> {
  const app = application
  app.set('view engine', 'ejs')
  let server = null
  try {
    app
      .use(express.static(path.resolve(__dirname, 'public')))
      .use(express.json())
      .use(express.urlencoded({ extended: true }))
      .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
      .use(apiRoutes)

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

export default startServer