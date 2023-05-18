const express = require('express')
const router = express.Router()

const Festival = require('../models/Festival.model')

router.get('/api/festivals', (req, res, next) => {

    Festival
        .find()
        .then(festivals => res.json(festivals))
        .catch(err => next(err))
})

router.get('/api/festivals/:id', (req, res, next) => {

    const { id } = req.params

    Festival
        .findById(id)
        .then(festival => res.json(festival))
        .catch(err => next(err))
})

module.exports = router