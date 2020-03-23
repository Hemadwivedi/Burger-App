const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const methodOverride = require('method-override');
const env=require("dotenv").config();

const burgersController = require("./controllers/burgers_controller.js");

const port = process.env.PORT || 3000;

const app = express();

app.use(express.static("public"));

app.use(methodOverride('X-HTTP-Method-Override'));

app.use(bodyParser.urlencoded({ extended: false }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

app.use("/api/burgers", burgersController);

app.listen(port);