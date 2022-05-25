const express = require('express')
const router = express.Router()

router.routel('/').get((req, res) => {
    res.send('all items')
})

module.exports = router