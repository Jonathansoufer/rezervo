import {} from 'dotenv/config'

import express from 'express'
import cors from 'cors'
import Youch from 'youch'
import validate from 'express-validation'
import mongoose from 'mongoose'
import databaseConfig from './config/database'

import routes from './routes'

class App {
  constructor () {
    this.express = express()

    this.database()
    this.middlewares()
    this.routes()
    this.exception()
  }

  database () {
    mongoose.connect(databaseConfig.uri, {
      useCreateIndex: true,
      useNewUrlParser: true
    })
  }

  middlewares () {
    this.express.use(cors())
    this.express.use(express.json())
    this.express.use(express.urlencoded({ extended: true }))
  }

  routes () {
    this.express.use(routes)
  }

  exception () {
    this.express.use(async (error, req, res, next) => {
      if (error instanceof validate.ValidationError) {
        return res.status(error.status).json(error)
      }

      if (process.env.NODE_ENV !== 'production') {
        const youch = new Youch(error, req)

        return res.json(await youch.toJSON())
      }

      return res
        .status(error.status || 500)
        .json({ error: 'Interval Server Error' })
    })
  }
}

export default new App().express
