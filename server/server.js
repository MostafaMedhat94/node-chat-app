'use strict'

// Library imports
const express = require('express');

// Local imports
const {port} = require('../config');

// Setting up the path for the public directory
const
    path = require('path'),
    publicPath = path.join(__dirname, '../public');

// Initializing the app
const app = express();

// Set up the middleware
app.use(express.static(publicPath));

// Set up the app's port
app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});
