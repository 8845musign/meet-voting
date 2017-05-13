const express = require('express')

module.exports = () => {
  const router = express.Router()

  router.get('/', (req, res) => {
    return res.json({
      hoge: 'hoge'
    })
  })

  return router
}
