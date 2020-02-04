const express = require('express'); 
const connectDB = require('./config/db');
//require('dotenv').config();

// Imports routes for the tasks
const app = express();
//const bodyParser = require('body-parser');
//app.use(bodyParser.json());



const task = require('./routes/todoroutes');

//connection of db
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.use('/tasks', task);

port = process.env.PORT || 3000;

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
