const isLoggedIn = (req, res, next) => {
    req.session.currentUser ? next() : res.render('auth/login', { errorMessage: 'Inicia sesión para continuar' })
}

const isLoggedOut = (req, res, next) => {
    !req.session.currentUser ? next() : res.redirect('/')
}

const checkRoles = (...admittedRoles) => (req, res, next) => {

    const isAdmitted = admittedRoles.includes(req.session.currentUser.role)

    if (isAdmitted) {
        next()
    } else {
        res.render('auth/login', { errorMessage: 'Acceso no autorizado' })
    }
}

const isOwnerOrAdmin = (req, res, next) => {

    const { id } = req.params

    if (req.session.currentUser._id === id || req.session.currentUser.role === 'ADMIN') {
        next()
    } else {
        res.render('users/users-details', { errorMessage: 'Acceso no autorizado' })
    }
}

module.exports = { isLoggedIn, isLoggedOut, checkRoles, isOwnerOrAdmin }