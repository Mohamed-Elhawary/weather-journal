// Setup empty JS object to act as endpoint for all routes
projectData = [];

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/*Dependencies*/
/*Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 8000;

// Launch the server
const server = app.listen(port, listening);

// Listening callback function for debug
function listening() {
    console.log('server running on localhost:' + port);
}

// Initialize the all route for Get method
app.get('/all', sendData);

// sendData callback function for Get route
function sendData(req, res) {
    res.send(projectData);
    projectData = [];
}

// Initialize the add route for Post method
app.post('/add', addData);

// addData callback function for Post route
function addData(req, res) {
    console.log(req.body);
    newEntry = {
        date: req.body.date,
        city: req.body.city,
        temp: req.body.temp,
        content: req.body.content
    }
    projectData.push(newEntry);
}