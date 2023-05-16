const router = require("express").Router()
const bcrypt = require('bcryptjs')
const User = require("./../models/User.model")
const saltRounds = 10
const uploaderMiddleware = require('../middlewares/uploader.middleware')

// REGISTER/SIGN UP
router.get('/register', (req, res, next) => {
    res.render('auth/signup')
})

router.post('/register', uploaderMiddleware.single('avatar'), (req, res, next) => {

    const { path: avatar } = req.file
    const { username, email, userPwd, description } = req.body

    bcrypt
        .genSalt(saltRounds)
        .then(salt => bcrypt.hash(userPwd, salt))
        .then(hashedPassword => User.create({ username, email, avatar, description, password: hashedPassword }))
        .then(() => res.redirect('/'))
        .catch(error => next(error))
})

// LOGIN/SIGN IN
router.get('/login', (req, res, next) => {
    res.render('auth/login')
})

router.post('/login', (req, res, next) => {

    const { email, userPwd } = req.body
    User
        .findOne({ email })
        .then(user => {
            if (!user) {
                res.render('auth/login', { errorMessage: 'Email not registered in the Database' })
                return
            } else if (bcrypt.compareSync(userPwd, user.password) === false) {
                res.render('auth/login', { errorMessage: 'Password incorrect' })
                return
            }

            req.session.currentUser = user
            res.redirect('/')

        })
        .catch(error => next(error))
})

// LOGOUT
router.post('/logout', (req, res, next) => {
    req.session.destroy(() => res.redirect('/login'))
})

module.exports = router