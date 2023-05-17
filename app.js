require("dotenv").config();

require("./db");

const express = require("express");

const hbs = require("hbs");

const app = express();

require("./config")(app)
require("./config/session.config")(app)

const capitalize = require("./utils/capitalize");
const projectName = "Fetch-tivals";

app.locals.appTitle = `${capitalize(projectName)} created with IronLauncher`;

app.use((req, res, next) => {

    app.locals.loggedUser = req.session.currentUser
    app.locals.adminUser = req.session.currentUser?.role === 'ADMIN'
    next()
})

require("./routes")(app)

require("./error-handling")(app);

module.exports = app;
