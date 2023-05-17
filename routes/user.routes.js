const express = require('express')
const { isLoggedIn, checkRoles, isOwnerOrAdmin } = require('../middlewares/route-guard')
const router = express.Router()
const uploaderMiddleware = require('../middlewares/uploader.middleware')

const User = require('../models/User.model')

// READ USERS
router.get('/list', isLoggedIn, (req, res, next) => {

    User
        .find({ role: 'USER' })
        .select({ username: 1 })
        .sort({ username: 1 })
        .then(allUsers => res.render('users/users-list', { allUsers }))
        .catch(err => next(err))
});

// USER DETAILS
router.get('/:id', isLoggedIn, (req, res, next) => {

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

// LIKE USER
router.post('/:id/like', isLoggedIn, (req, res, next) => {

    const { id } = req.params
    const { _id } = req.session.currentUser
    // const { assistants } = req.body

    User
        .findByIdAndUpdate(_id, { $addToSet: { following: id } })
        .then(() => res.redirect(`/users/${id}`))
        .catch(err => next(err))
})

// USER EDIT FORM (render) - PROTECTED
router.get("/:id/edit", isLoggedIn, isOwnerOrAdmin, (req, res, next) => {

    const { id } = req.params

    User
        .findById(id)
        .then(user => res.render("users/users-edit", user))
        .catch(err => next(err))
})

// USER EDIT FORM (handler) - PROTECTED
router.post("/:id/edit", isLoggedIn, isOwnerOrAdmin, uploaderMiddleware.single('avatar'), (req, res, next) => {

    const { username, email, description } = req.body
    const { id } = req.params

    if (req.file) {
        const { path: avatar } = req.file

        User
            .findByIdAndUpdate(id, { username, email, avatar, description })
            .then(() => res.redirect(`/users/${id}`))
            .catch(err => next(err))
    } else {
        User
            .findByIdAndUpdate(id, { username, email, description })
            .then(() => res.redirect(`/users/${id}`))
            .catch(err => next(err))
    }
})

// USER DELETE - PROTECTED
router.post('/:id/delete', isLoggedIn, isOwnerOrAdmin, (req, res, next) => {

    const { id } = req.params

    const userRole = {
        isAdmin: req.session.currentUser?.role === 'ADMIN',
        isOwner: req.session.currentUser?._id === id
    }

    User
        .findByIdAndDelete(id)
        .then(() => res.redirect('/users/list'), { userRole })
        .catch(err => next(err))
})

module.exports = router