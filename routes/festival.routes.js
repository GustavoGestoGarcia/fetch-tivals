const express = require('express')
const { isLoggedIn, checkRoles } = require('../middlewares/route-guard')
const router = express.Router()
// const { formatDate } = require('../utils/date-utils')//fuera si no funciona
const uploaderMiddleware = require('../middlewares/uploader.middleware')

const Festival = require('../models/Festival.model')

router.get("/festivals/create", isLoggedIn, checkRoles('ADMIN'), (req, res, next) => {
    res.render("festivals/festivals-create")
})

// NEW FESTIVAL form (handler) - PROTECTED
router.post("/festivals/create", isLoggedIn, checkRoles('ADMIN'), uploaderMiddleware.single('imagFest'), (req, res, next) => {

    const { title, category, start, end, latitude, longitude } = req.body
    const { path: imagFest } = req.file

    // const newStart = formatDate(start)//eliminar si no nos vale

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Festival
        .create({ title, category, start/* : newStart, */, end, imagFest, location })//poner solo start si no funciona
        .then(() => res.redirect(`/festivals/list`))
        .catch(err => next(err))
})

// READ FESTIVALS
router.get('/festivals/list', (req, res, next) => {

    const userRole = {
        isAdmin: req.session.currentUser?.role === 'ADMIN',
    }

    Festival
        .find()
        .select({ title: 1 })
        .sort({ start: 1 })
        .then(allFestivals => res.render('festivals/festivals-list', { allFestivals, userRole }))
        .catch(error => next(error));
})

// FILTER FESTIVALS
router.post('/festivals/list', isLoggedIn, (req, res, next) => {

    const { id } = req.params
    const { title } = req.body


    Festival
        .find(title)
        .then(() => res.redirect(`/festivals/${id}`))
        .catch(error => next(error));
})

// FESTIVAL DETAILS
router.get('/festivals/:id', isLoggedIn, (req, res, next) => {

    const userRole = {
        isAdmin: req.session.currentUser?.role === 'ADMIN',
    }
    const { id } = req.params

    Festival
        .findById(id)
        .then(festival => res.render('festivals/festivals-details', { festival, userRole }))
        .catch(err => next(err))
})

// EDIT FESTIVAL - PROTECTED
router.get('/festivals/:id/edit', isLoggedIn, checkRoles('ADMIN'), (req, res, next) => {

    const { id } = req.params

    Festival
        .findById(id)
        .then(festival => res.render('festivals/festivals-edit', festival))
        .catch(err => next(err))
})

router.post('/festivals/:id/edit', isLoggedIn, checkRoles('ADMIN'), uploaderMiddleware.single('imagFest'), (req, res, next) => {

    const { title, category, start, end, latitude, longitude } = req.body
    const { id } = req.params
    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    if (req.file) {
        const { path: imagFest } = req.file

        Festival
            .findByIdAndUpdate(id, { title, category, start, end, imagFest, location })
            .then(() => res.redirect(`/festivals/${id}`))
            .catch(err => next(err))
    } else {
        Festival
            .findByIdAndUpdate(id, { title, category, start, end, location })
            .then(() => res.redirect(`/festivals/${id}`))
            .catch(err => next(err))
    }
})

// FESTIVAL DELETE - PROTECTED
router.post('/festivals/:id/delete', isLoggedIn, checkRoles('ADMIN'), (req, res, next) => {

    const { id } = req.params

    Festival
        .findByIdAndDelete(id)
        .then(() => res.redirect('/festivals/list'))
        .catch(err => next(err))
})

module.exports = router