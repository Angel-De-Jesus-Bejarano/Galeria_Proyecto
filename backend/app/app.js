const express = require('express');
const app = express();
const PORT =  require('../database/config')
const bodyParser = require('body-parser');
const cors = require('cors')
const routerApi = require('./routes/api.routes')
const path = require('path');
//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

//setting
app.set("port", PORT.port);

//Routing
routerApi(app)


//public static files
app.use(express.static(path.join(__dirname, '../static')))

module.exports = app;
