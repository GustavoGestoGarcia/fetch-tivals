const express = require('express')
const { isLoggedIn, checkRoles, isOwnerOrAdmin } = require('../middlewares/route-guard')
const router = express.Router()

const User = require('../models/User.model')

router.get("/", isOwnerOrAdmin, (req, res, next) => {
    const userRole = {
        isAdmin: req.session.currentUser?.role === 'ADMIN',
        isOwner: req.session.currentUser?._id === id
    }
    res.render("layout", userRole)
})


router.get("/", (req, res, next) => {
    res.render("index")
})

// READ USERS
router.get('/users/list', isLoggedIn, (req, res, next) => {

    User
        .find({ role: 'USER' })
        .select({ username: 1 })
        .sort({ username: 1 })
        .then(allUsers => res.render('users/users-list', { allUsers }))
        .catch(err => next(err))
});

// USER DETAILS
router.get('/users/:id', isLoggedIn, (req, res) => {
    const { id } = req.params
    const userRole = {
        isAdmin: req.session.currentUser?.role === 'ADMIN',
        isOwner: req.session.currentUser?._id === id
    }


    User
        .findById(id)
        .then(user => res.render('users/users-details', { user, userRole }))
        .catch(err => next(err))
})

// USER EDIT FORM (render) - PROTECTED
router.get("/users/:id/edit", isLoggedIn, isOwnerOrAdmin, (req, res, next) => {

    const { id } = req.params

    User
        .findById(id)
        .then(user => res.render("users/users-edit", user))
        .catch(err => next(err))
})


// USER EDIT FORM (handler) - PROTECTED
router.post("/users/:id/edit", isLoggedIn, isOwnerOrAdmin, (req, res, next) => {


    const { username, email, avatar, description } = req.body
    const { id } = req.params      // necesitamos el ID para el método .findByIdAndUpdate()

    User
        .findByIdAndUpdate(id, { username, email, avatar, description })
        .then(() => res.redirect(`/users/${id}`))
        .catch(err => next(err))
})

// USER DELETE - PROTECTED
router.post('/users/:id/delete', isLoggedIn, isOwnerOrAdmin, (req, res, next) => {
    const userRole = {
        isAdmin: req.session.currentUser?.role === 'ADMIN',
        isOwner: req.session.currentUser?._id === id
    }

    const { id } = req.params

    User
        .findByIdAndDelete(id)
        .then(() => res.redirect('/users/list'), { userRole })
        .catch(err => next(err))
})

module.exports = router