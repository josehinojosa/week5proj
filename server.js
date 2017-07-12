const express = require("express");
const session = require("express-session");
const expressValidator = require("express-validator");
const bodyParser = require("body-parser");
const mustacheExpress = require("mustache-express");
const fs = require("fs");

const app = express();

app.engine('mustache', mustacheExpress());

app.set('views', './views');
app.set('view engine', 'mustache');
