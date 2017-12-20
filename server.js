'use strict';
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

const blogPostRouter = require('./blogPostRouter');

// log the http layer
app.use(morgan('common'));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});


// Use npm to initialize your project
// // Install uuid, which is a Node package that the blog post 
// model will require, by running npm install uuid from within 
// your folder for this project
// Your app should support the four CRUD operations for a blog posts resource.
// GET and POST requests should go to / blog - posts.
// DELETE and PUT requests should go to / blog - posts /: id.
// Use Express router and modularize routes to / blog - posts.Use npm init to ini
// Add a couple of blog posts on server load so you'll automatically have
//  some data to look at when the server starts.