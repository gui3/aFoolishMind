const express = require("express");
const app = new express();

require('dotenv').config()

const models = require("./app/db/models")

const bodyParser = require("body-parser");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "app/views"));
app.use(require("express-partials")());

const routes = require("./app/routes/index");
app.use('/', routes);

app.listen(3000, () => {
  console.log("App listening on port 3000");
});
