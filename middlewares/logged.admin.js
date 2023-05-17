const loggedOrAdmin = (req, res, next) => {
    res.locals.loggedUser = req.session.currentUser
    res.locals.adminUser = req.session.currentUser?.role === 'ADMIN'
    next()
}

module.exports = { loggedOrAdmin }