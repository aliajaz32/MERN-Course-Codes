const express = require('express')
const router = express.Router()

router.get('/all', (req, res) => {
  res.send([
    {
      id: 'dhuwqhe8di3',
      price: '50000',
      title: 'Iphone'
    },
    {
      id: 'dasj83243',
      price: '18000',
      title: 'Infinix Hot 8'
    }
  ])
})

module.exports = router