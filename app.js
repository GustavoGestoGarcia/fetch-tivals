
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

const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

const authRoutes = require("./routes/auth.routes");
app.use("/", authRoutes);

const userRoutes = require("./routes/user.routes");
app.use("/", userRoutes);

const festivalsRoutes = require("./routes/festival.routes");
app.use("/", festivalsRoutes);

require("./error-handling")(app);

module.exports = app;
