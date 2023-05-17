require("dotenv").config();
require("./db");

const { loggedOrAdmin } = require('./middlewares/logged.admin')

const express = require("express");
const app = express();

require("./config")(app)
require("./config/session.config")(app)

app.locals.appTitle = `Fetchtivals`;
app.use(loggedOrAdmin)

require("./routes")(app)

require("./error-handling")(app);

module.exports = app;
