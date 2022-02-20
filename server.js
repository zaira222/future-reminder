const express = require('express');
const path = require('path');
const fs = require('fs');
const PORT = process.env.PORT || 3001;
const  notes  = require('./db/db.json');
const ShortUniqueId = require('short-unique-id');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

app.get('*', (req, res) => {
  res.sendFile(__dirname, '/index.html');
});


app.get('/notes', (req, res) => {
  res.sendFile(__dirname,+  '/notes.html');

});
