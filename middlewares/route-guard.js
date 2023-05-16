const isLoggedIn = (req, res, next) => {
    req.session.currentUser ? next() : res.render('auth/login', { errorMessage: 'Sign in to continue' })
}

const isLoggedOut = (req, res, next) => {
    !req.session.currentUser ? next() : res.redirect('/')
}

const checkRoles = (...admittedRoles) => (req, res, next) => {

    const isAdmitted = admittedRoles.includes(req.session.currentUser.role)

    if (isAdmitted) {
        next()
    } else {
        res.render('auth/login', { errorMessage: 'Unauthorized access' })
    }
}

const isOwnerOrAdmin = (req, res, next) => {

    const { id } = req.params

    if (req.session.currentUser._id === id || req.session.currentUser.role === 'ADMIN') {
        next()
    } else {
        res.render('users/users-details', { errorMessage: 'Unauthorized access' })
    }
}

module.exports = { isLoggedIn, isLoggedOut, checkRoles, isOwnerOrAdmin }