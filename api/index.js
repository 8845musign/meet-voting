const express = require('express')

module.exports = db => {
  const router = express.Router()

  const wrapAsync = handler => (req, res) => handler(req)
    .then(result => res.json(result))
    .catch(error => res.status(500).json({ error: error.message }))

  router.post('/event/', wrapAsync(async function (req) {
    console.log(req.body)

    await db.collection('Event')
      .insertOne({
        title: 'テスト',
        date: 'hoge',
        minimumCharge: 0,
        description: 'aaaa'
      })
  }))

  return router
}
