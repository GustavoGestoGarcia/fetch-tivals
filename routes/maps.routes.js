const express = require('express')
const router = express.Router()

router.get('/basic', (req, res, next) => {
    res.render('festivals/festivals-details')
})

module.exports = router