const express = require('express')
const next = require('next')
const co = require('co')
const { MongoClient } = require('mongodb')

const api = require('./api')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// MongoDB
const MONGO_URL = 'mongodb://localhost/meet-voting'

co(function * () {
  yield app.prepare()
  console.log('> App prepared.')

  const db = yield MongoClient.connect(MONGO_URL)
  console.log(`> Connect to ${MONGO_URL}`)

  const server = express()

  server.use('/api', api(db))

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
}).catch(error => console.error(error.stack))
