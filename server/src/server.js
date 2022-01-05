const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const cors = require('cors');
const Router = require('./Routes/Route');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connection = require('./db/database');




dotenv.config();
app.use(cors());
app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended: true}));




app.use('/', Router);




app.listen(port, () => {
    console.log(`Server is running sucessfull on port number ${port}`);
});

connection(process.env.MONGODB_URI);