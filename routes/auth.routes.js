const router = require("express").Router()
const bcrypt = require('bcryptjs')
const User = require("./../models/User.model")
const saltRounds = 10

// REGISTER/SIGN UP
router.get('/register', (req, res, next) => {
    res.render('auth/signup')
})

router.post('/register', (req, res, next) => {

    const { username, email, userPwd, avatar, description } = req.body

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
                res.render('auth/login', { errorMessage: 'Email no registrado en la Base de Datos' })
                return
            } else if (bcrypt.compareSync(userPwd, user.password) === false) {
                res.render('auth/login', { errorMessage: 'La contraseña es incorrecta' })
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