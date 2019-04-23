const express = require('express');
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.get('/items', (req, res) => {
  axios.get('http://ec2-18-206-39-171.compute-1.amazonaws.com:3007/items')
  .then(result => res.send(result.data))
  .catch(err => console.log(err))
})

app.listen(port, () => {
  console.log(`Server running on port: ${port}!`);
});