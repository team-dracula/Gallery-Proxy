require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const axios = require('axios');

// app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.get(`/${process.env.LOADER_IO_KEY}`, (req, res) => {
  res.sendFile(path.join(__dirname, `../public/${process.env.LOADER_IO_KEY}`));
});

app.get('/items', (req, res) => {
  axios.get('http://ec2-3-82-127-250.compute-1.amazonaws.com:3007/items')
  .then(result => res.send(result.data))
  .catch(err => console.log(err))
})

app.get('/items/:id', (req, res) => {
  var id = req.params.id;
  axios.get(`http://ec2-3-82-127-250.compute-1.amazonaws.com:3007/items/${id}`)
  .then(result => res.send(result.data))
  .catch(err => console.log(err))
})

app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
});

app.listen(port, () => {
  console.log(`Server running on port ${port}!`);
});