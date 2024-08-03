const express = require('express');
const path = require('path');
const app = express();


app.use(express.static('dist'));

app.use(express.raw({ type: '*/*', limit: '1mb' }));

const port = process.env.PORT || 3000;
const key = process.env.key;

app.listen(port);

app.get('/', (req, res) => {
  res.sendFile(__dirname+"/dist/home.html");
});

app.get('/home', (req, res) => {
  res.sendFile(__dirname+"/dist/home.html");
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname+"/dist/about.html");
});

app.get('/contact', (req, res) => {
  res.sendFile(__dirname+"/dist/contact.html");
});

app.get('/donate', (req, res) => {
  res.sendFile(__dirname+"/dist/donate.html");
});

